<template>
	<div class="story-carousel-container">
		<!-- Single Navigation Row -->
		<div class="story-selector">
			<div class="selector-track">
				<button
					v-for="story in stories"
					:key="story.id"
					@click="selectStory(story.id)"
					class="story-option"
					:class="{ 'active': selectedStory && selectedStory.id === story.id }"
				>
					{{ story.title }}
				</button>
			</div>
		</div>

		<!-- Narrative Card (Always Visible) -->
		<div v-if="selectedStory" class="narrative-carousel"  ref="narrativeContainer">
			<div class="narrative-card" ref="narrativeCard">
				<div class="narrative-content" ref="narrativeContent">
					<div
						v-for="(line, index) in selectedStory.narrative"
						:key="index"
						class="narrative-line"
					>
						{{ line }}
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { markRaw } from 'vue'
import { useBusinessStoriesStore } from '../../stores/businessStories.js'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'BusinessStoryCard',
	data() {
		return {
			store: useBusinessStoriesStore(),
			// legacy fields retained for compatibility but unused
			scrollListener: null,
			lastScrollY: 0,
			scrollAccumulator: 0,
			isScrollLocked: false,
			lockScrollY: 0,
			centerCheckHandler: null,
			resizeHandler: null,
			st: null,
			tl: null,
			lastProgressIndex: 0,
			rAFHandle: 0,
			_pendingIdx: 0
		}
	},
	computed: {
		stories() {
			return this.store.getAllStories
		},
		selectedStory() {
			return this.store.getSelectedStory
		},
		narrativeProgress() {
			return this.selectedStory ? 
				this.store.getNarrativeProgress(this.selectedStory.id) : 0
		},
		narrativeComplete() {
			return this.selectedStory && 
				this.narrativeProgress >= this.selectedStory.narrative.length
		}
	},
	mounted() {
		// Pre-select first story (Coaches & Guides) but don't reveal lines yet
		if (this.stories.length > 0) {
			this.store.selectStory(this.stories[0].id)
		}
		this.$nextTick(() => {
			this.initScrollTrigger()
		})
	},
	beforeUnmount() {
		if (this.st) { this.st.kill(); this.st = null }
		if (this.tl) { this.tl.kill(); this.tl = null }
		if (this.rAFHandle) { cancelAnimationFrame(this.rAFHandle); this.rAFHandle = 0 }
	},
	methods: {
		initScrollTrigger() {
			if (!this.selectedStory || !this.$refs.narrativeCard) return
			if (this.st) { this.st.kill(); this.st = null }
			if (this.tl) { this.tl.kill(); this.tl = null }
			const triggerEl = this.$refs.narrativeCard
			const sectionEl = this.$el.closest('section') || this.$el
			const totalLines = this.selectedStory.narrative.length
			const initial = 0
			const linesToReveal = Math.max(0, totalLines - initial)
			// Prepare elements
			const contentEl = this.$refs.narrativeContent
			const lineEls = contentEl ? Array.from(contentEl.querySelectorAll('.narrative-line')) : []
			const endDistance = () => {
				const sampleLine = lineEls[0]
				const perLinePx = sampleLine ? Math.max(200, Math.round(sampleLine.getBoundingClientRect().height * 6)) : Math.round((window.innerHeight || 800) * 0.3)
				return `+=${Math.max(1, linesToReveal) * perLinePx}`
			}
			// Set initial visibility states based on existing progress
			lineEls.forEach((el, idx) => {
				if (idx < initial) {
					gsap.set(el, { opacity: 1, y: 0 })
				} else {
					gsap.set(el, { opacity: 0, y: 20 })
				}
			})
			this.lastProgressIndex = initial
			// Build a GSAP timeline with one step per line
			this.tl = markRaw(gsap.timeline({ defaults: { ease: 'power1.out' } }))
			for (let i = initial; i < totalLines; i++) {
				const el = lineEls[i]
				this.tl.fromTo(el, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 1, immediateRender: false }, i === initial ? 0 : '>' )
			}
			// Tie scroll to the timeline progress
			this.st = markRaw(ScrollTrigger.create({
				trigger: triggerEl,
				start: 'center center',
				end: endDistance,
				pin: sectionEl,
				pinSpacing: true,
				anticipatePin: 1,
				scrub: true,
				invalidateOnRefresh: true,
				animation: this.tl
			}))
		},
		selectStory(storyId) {
			// Reset narrative progress for the new story
			this.store.resetNarrative(storyId)
			this.store.selectStory(storyId)
			this.$nextTick(() => {
				this.resetScrollTracking()
			})
		},
		
		// legacy no-op
		setupScrollListener() {},
		
		removeScrollListener() {},
		
		setupCenterLockWatcher() {},
		
		removeCenterLockWatcher() {},
		
		checkCenterLock() {},
		
		enableScrollLock() {},
		
		disableScrollLock() {},
		
		handleScroll() {},
		
		revealNextLine() {
			if (!this.selectedStory) return
			
			const currentProgress = this.narrativeProgress
			const totalLines = this.selectedStory.narrative.length
			
			if (currentProgress < totalLines) {
				this.store.advanceNarrative(this.selectedStory.id, currentProgress)
				// Extend placeholder height to keep scrollbar moving
				const container = this.$refs.narrativeContainer
				if (container && typeof this._lockedCardHeight === 'number') {
					const linesLeft = totalLines - (currentProgress + 1)
					const extraHeight = Math.max(0, linesLeft) * Math.round((window.innerHeight || 800) * 0.6)
					container.style.height = `${this._lockedCardHeight + extraHeight}px`
				}
			}
		},
		
		resetScrollTracking() {
			this.scrollAccumulator = 0
			if (this.st) { this.st.kill(); this.st = null }
			if (this.tl) { this.tl.kill(); this.tl = null }
			this.$nextTick(() => this.initScrollTrigger())
		}
	}
}
</script>

<style scoped>
.story-carousel-container {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;

}

/* Story Selector - Simplified Navigation */
.story-selector {
	margin-bottom: 2rem;
}

.selector-track {
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: nowrap;
	padding: 0;
	overflow-x: auto;
}

.story-option {
	background: none;
	border: none;
	color: #9ca3af;
	cursor: pointer;
	font-size: 0.85rem;
	font-weight: 500;
	padding: 0.25rem 0.5rem;
	transition: all 0.3s ease;
	white-space: nowrap;
	flex-shrink: 0;
}

.story-option:hover,
.story-option.active {
	color: #10b981;
	font-weight: 600;
}

/* Narrative Carousel */
.narrative-carousel {
	width: 90vw;
	max-width: 1200px;
	margin: 0 auto;
	transition: all 0.3s ease;
}

.narrative-carousel.scroll-locked {
	position: relative;
	z-index: 10;
}

.narrative-card {
	background: rgba(31, 41, 55, 0.95);
	border-radius: 2rem;
	padding: 2rem;
	border: 1px solid rgba(75, 85, 99, 0.3);
	max-height: none;
	overflow: visible;
	position: relative;
}



/* Narrative Content */
.narrative-content {
	max-width: 700px;
	margin: 0 auto;
	line-height: 1.3;
	padding-top: 1rem;
}

.narrative-line {
	font-size: 1.1rem;
	color: #e5e7eb;
	margin-bottom: 0.4rem;
	opacity: 0;
	transform: translateY(20px);
	transition: none;
	line-height: 1.3;
	will-change: transform, opacity;
}

/* removed .narrative-line.revealed to avoid empty ruleset */

.narrative-line.current {
	color: #10b981;
	font-weight: 500;
}

/* Special styling for key phrases */
.narrative-line:nth-child(1),
.narrative-line:nth-child(6) {
	font-weight: 600;
	color: #10b981;
}

.narrative-line:nth-child(11),
.narrative-line:nth-child(12),
.narrative-line:nth-child(13) {
	font-style: italic;
	color: #fbbf24;
}

.continue-scrolling {
	text-align: center;
	padding: 1rem;
	opacity: 0.7;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 16px;
}

.continue-scrolling p {
	color: #9ca3af;
	font-size: 0.9rem;
	margin: 0;
}

/* Scroll hint animation */
@keyframes scrollHint {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(10px); }
}

.narrative-card::after {
	content: '↓';
	position: absolute;
	bottom: 1rem;
	left: 50%;
	transform: translateX(-50%);
	color: rgba(156, 163, 175, 0.5);
	font-size: 1.2rem;
	animation: scrollHint 2s ease-in-out infinite;
}

.narrative-card:has(.continue-scrolling)::after {
	display: none;
}

/* Mobile Responsive */
@media (max-width: 768px) {
	.story-carousel-container {
		padding: 0.5rem;
	}
	
	.selector-track {
		gap: 1rem;
	}
	
	.story-option {
		font-size: 0.9rem;
		padding: 0.5rem;
	}
	
	.narrative-carousel {
		width: 95vw;
	}
	
	.narrative-card {
		padding: 1.5rem;
		max-height: none;
		overflow: visible;
	}
	
	.narrative-line {
		font-size: 1rem;
		margin-bottom: 0.3rem;
	}
}

@media (max-width: 480px) {
	.selector-track {
		gap: 0.5rem;
	}
	
	.story-option {
		font-size: 0.75rem;
		padding: 0.25rem 0.4rem;
	}
	
	.narrative-carousel {
		width: 98vw;
	}
	
	.narrative-card {
		padding: 1rem;
		border-radius: 1.5rem;
		max-height: none;
		overflow: visible;
	}
	
	.narrative-line {
		font-size: 0.95rem;
		margin-bottom: 0.25rem;
	}
}
</style>