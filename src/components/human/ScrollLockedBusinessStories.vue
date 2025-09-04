<template>
	<section 
		class="scroll-locked-section" 
		ref="sectionRef"
	>
		<div class="section-container">
			<!-- Progress indicator -->
			<div 
				v-if="config.enableProgressBar" 
				class="progress-bar"
			>
				<div 
					class="progress-fill" 
					:style="{ width: progressPercent + '%' }"
				></div>
			</div>

			<!-- Section header -->
			<div class="section-header" ref="headerRef">
				<h2 class="main-title">Which of these sounds like your biggest struggle?</h2>
			</div>

			<!-- Business types row -->
			<div class="business-types-row">
				<div 
					v-for="(story, index) in stories" 
					:key="story.id + '-tab'"
					class="business-type-tab"
					:class="{ active: currentStoryIndex === index }"
				>
					{{ story.title }}
				</div>
			</div>

			<!-- Story container -->
			<div class="stories-container" ref="storiesContainer">
				<!-- Individual story cards -->
				<div 
					v-for="(story, index) in stories" 
					:key="story.id"
					class="story-slide"
					:class="{ 
						active: currentStoryIndex === index,
						'show-solution': solutionStates[index],
						'fade-out': currentStoryIndex > index 
					}"
					:ref="'story-' + index"
				>
					<BusinessStoryCard
						:story="story"
						:show-solution="solutionStates[index]"
						@solution-viewed="onSolutionViewed(index)"
					/>
				</div>

				<!-- Final message -->
				<div 
					class="story-slide final-slide"
					:class="{ active: currentStoryIndex >= stories.length }"
					ref="finalSlide"
				>
					<div class="final-message">
						<h3 class="final-title">{{ finalMessage.title }}</h3>
						<p class="final-subtitle">{{ finalMessage.subtitle }}</p>
					</div>
				</div>
			</div>

			<!-- Scroll hint -->
			<div 
				v-if="config.enableScrollHint"
				class="scroll-hint" 
				:class="{ hidden: currentStoryIndex > 0 || isLocked }"
			>
				<span>Scroll to explore</span>
				<div class="scroll-arrow">↓</div>
			</div>

			<!-- Debug info (remove in production) -->
			<!-- <div class="debug-info">
				Current: {{ currentStoryIndex }} | Locked: {{ isLocked }} | Progress: {{ Math.round(progressPercent) }}%
			</div> -->
		</div>
		<GradientControl section-id="scroll-locked-stories" />
	</section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useBusinessStoriesStore } from '@/stores/businessStories'
import GradientControl from '@/components/GradientControl.vue'
import BusinessStoryCard from './BusinessStoryCard.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'ScrollLockedBusinessStories',
	components: {
		GradientControl,
		BusinessStoryCard
	},
	data() {
		return {
			store: useBusinessStoriesStore(),
			lockTrigger: null
		}
	},
	computed: {
		stories() {
			return this.store.getAllStories
		},
		currentStoryIndex() {
			return this.store.currentStoryIndex
		},
		solutionStates() {
			return this.store.solutionStates
		},
		isLocked() {
			return this.store.isLocked
		},
		config() {
			return this.store.config
		},
		progressPercent() {
			return this.store.getProgressPercent
		},
		finalMessage() {
			return this.store.finalMessage
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.initScrollTriggers()
		})
	},
	beforeUnmount() {
		this.cleanup()
	},
	methods: {
		initScrollTriggers() {
			const section = this.$refs.sectionRef
			if (!section) return

			// Pin section in center and create virtual scroll length for stories
			this.lockTrigger = ScrollTrigger.create({
				trigger: section,
				start: 'center center',
				end: () => `+=${(this.stories.length * 2 + 1) * window.innerHeight * 0.4}`, // Faster scrolling - 40% of viewport per step
				pin: true,
				onUpdate: (self) => {
					// Calculate which story we should be on based on scroll progress
					const progress = self.progress
					const totalSteps = this.stories.length * 2 + 1 // problem + solution per story + final
					const currentStep = Math.floor(progress * totalSteps)
					
					this.updateStoryFromScrollProgress(currentStep)
				},
				onEnter: () => {
					this.store.setLocked(true)
				},
				onLeave: () => {
					this.store.setLocked(false)
				},
				onEnterBack: () => {
					this.store.setLocked(true)
				},
				onLeaveBack: () => {
					this.store.setLocked(false)
					this.resetProgress()
				}
			})
		},

		updateStoryFromScrollProgress(currentStep) {
			// Map scroll progress to story states
			// Step 0-1: Story 0 (problem, solution)
			// Step 2-3: Story 1 (problem, solution)
			// etc.
			
			const storyIndex = Math.floor(currentStep / 2)
			const isShowingSolution = currentStep % 2 === 1
			const totalStorySteps = this.stories.length * 2
			
			// Handle final message first - only show at very end
			if (currentStep >= totalStorySteps) {
				if (this.currentStoryIndex !== this.stories.length) {
					this.store.setCurrentStory(this.stories.length)
					this.hideAllStories()
					this.animateToFinal()
				}
				return
			}
			
			// Hide final message if we're back in story territory
			if (this.currentStoryIndex >= this.stories.length && currentStep < totalStorySteps) {
				this.hideFinalMessage()
			}
			
			// Update current story if changed
			if (storyIndex !== this.currentStoryIndex && storyIndex < this.stories.length) {
				this.store.setCurrentStory(storyIndex)
				this.animateToStory(storyIndex)
			}
			
			// Handle solution visibility
			if (storyIndex < this.stories.length) {
				if (isShowingSolution && !this.solutionStates[storyIndex]) {
					this.store.showSolution(storyIndex)
				} else if (!isShowingSolution && this.solutionStates[storyIndex]) {
					this.store.hideSolution(storyIndex)
				}
			}
		},

		animateToStory(storyIndex) {
			// Hide all other stories
			this.stories.forEach((_, index) => {
				if (index !== storyIndex) {
					const storyRef = this.$refs['story-' + index]?.[0]
					if (storyRef) {
						gsap.to(storyRef, {
							opacity: 0,
							duration: 0.4,
							ease: 'power2.out'
						})
					}
				}
			})

			// Show current story
			const currentStoryRef = this.$refs['story-' + storyIndex]?.[0]
			if (currentStoryRef) {
				gsap.to(currentStoryRef, {
					opacity: 1,
					duration: 0.6,
					ease: 'power2.out'
				})
			}
		},


		hideAllStories() {
			// Hide all story cards
			this.stories.forEach((_, index) => {
				const storyRef = this.$refs['story-' + index]?.[0]
				if (storyRef) {
					gsap.to(storyRef, {
						opacity: 0,
						duration: 0.4,
						ease: 'power2.out'
					})
				}
			})
		},

		hideFinalMessage() {
			const finalSlide = this.$refs.finalSlide
			if (!finalSlide) return

			gsap.to(finalSlide, {
				opacity: 0,
				duration: 0.4,
				ease: 'power2.out'
			})
		},

		animateToFinal() {
			const finalSlide = this.$refs.finalSlide
			if (!finalSlide) return

			gsap.fromTo(finalSlide,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: this.config.transitionDuration / 1000,
					ease: 'power2.out'
				}
			)
		},

		onSolutionViewed(storyIndex) {
			// Called when a solution is viewed - could track analytics here
		},

		resetProgress() {
			this.store.resetProgress()
		},

		cleanup() {
			if (this.lockTrigger) {
				this.lockTrigger.kill()
			}
			this.store.setLocked(false)
			ScrollTrigger.getAll().forEach(trigger => {
				if (trigger.vars.trigger === this.$refs.sectionRef) {
					trigger.kill()
				}
			})
		}
	}
}
</script>

<style scoped>
.scroll-locked-section {
	background: #000000;
	min-height: 100vh;
	position: relative;
	overflow: hidden;
}

.section-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 3rem 1.5rem;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

/* Progress Bar */
.progress-bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 4px;
	background: rgba(31, 41, 55, 0.8);
	z-index: 50;
}

.progress-fill {
	height: 100%;
	background: linear-gradient(90deg, #10b981, #059669);
	transition: width 0.6s ease;
}

/* Section Header */
.section-header {
	text-align: center;
	margin-bottom: 2rem;
}

.main-title {
	font-size: 2.5rem;
	font-weight: 700;
	color: #ffffff;
	margin-bottom: 1rem;
	line-height: 1.2;
}

/* Business Types Row */
.business-types-row {
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	gap: 2rem;
	margin-bottom: 3rem;
	padding: 0 2rem;
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
}

.business-type-tab {
	color: #9ca3af;
	font-size: 0.875rem;
	font-weight: 500;
	text-align: center;
	transition: all 0.3s ease;
	white-space: nowrap;
}

.business-type-tab.active {
	color: #10b981;
	font-weight: 600;
}

/* Stories Container */
.stories-container {
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.story-slide {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	opacity: 0;
	pointer-events: none;
	transition: all 0.6s ease;
}

.story-slide.active {
	opacity: 1;
	pointer-events: auto;
}

.story-slide.fade-out {
	opacity: 0.3;
	transform: translate(-50%, -50%) scale(0.95);
}

/* Final Message */
.final-slide .final-message {
	text-align: center;
	padding: 3rem 2rem;
	background: rgba(31, 41, 55, 0.8);
	border-radius: 1.5rem;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(75, 85, 99, 0.3);
}

.final-title {
	font-size: 2.25rem;
	font-weight: 700;
	color: #ffffff;
	margin-bottom: 1.5rem;
	line-height: 1.3;
}

.final-subtitle {
	font-size: 1.25rem;
	color: #9ca3af;
	line-height: 1.6;
	max-width: 600px;
	margin: 0 auto;
}

/* Scroll Hint */
.scroll-hint {
	position: fixed;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	color: #9ca3af;
	font-size: 0.9rem;
	z-index: 10;
	opacity: 1;
	transition: all 0.6s ease;
}

.scroll-hint.hidden {
	opacity: 0;
	pointer-events: none;
}

.scroll-arrow {
	font-size: 1.5rem;
	margin-top: 0.5rem;
	animation: bounce 2s infinite;
}

@keyframes bounce {
	0%, 20%, 53%, 80%, 100% {
		transform: translateY(0);
	}
	40%, 43% {
		transform: translateY(-10px);
	}
	70% {
		transform: translateY(-5px);
	}
	90% {
		transform: translateY(-2px);
	}
}

/* Debug Info (remove in production) */
.debug-info {
	position: fixed;
	top: 50px;
	right: 20px;
	background: rgba(0, 0, 0, 0.8);
	color: white;
	padding: 10px;
	border-radius: 5px;
	font-size: 12px;
	z-index: 100;
}

/* Mobile Responsive */
@media (max-width: 768px) {
	.section-container {
		padding: 2rem 1rem;
	}

	.main-title {
		font-size: 2rem;
	}

	.business-types-row {
		gap: 0.75rem;
		padding: 0 1rem;
	}

	.business-type-tab {
		font-size: 0.8rem;
	}

	.final-title {
		font-size: 1.75rem;
	}

	.final-subtitle {
		font-size: 1.1rem;
	}

	.final-slide .final-message {
		padding: 2rem 1.5rem;
	}
}

@media (max-width: 480px) {
	.section-container {
		padding: 1.5rem 0.75rem;
	}

	.main-title {
		font-size: 1.75rem;
	}

	.business-types-row {
		gap: 0.5rem;
		padding: 0 0.5rem;
	}

	.business-type-tab {
		font-size: 0.75rem;
	}

	.final-title {
		font-size: 1.5rem;
	}

	.final-subtitle {
		font-size: 1rem;
	}

	.final-slide .final-message {
		padding: 1.5rem 1rem;
	}
}
</style>
