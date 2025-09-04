<template>
	<div class="story-card" :class="{ 'show-solution': showSolution }">
		<!-- Story Problem Section -->
		<div class="story-problem" ref="problemSection">
					<div class="story-header">
			<h3 class="story-title" v-text="story.title"></h3>
			<p class="story-subtitle" v-text="story.subtitle"></p>
		</div>

			<div class="story-content">
				<div class="strengths-section">
					<div 
						v-for="(strength, index) in story.strengths" 
						:key="'strength-' + index"
						class="strength-item"
					>
						{{ strength }}
					</div>
				</div>

				<div class="struggles-section">
					<div 
						v-for="(struggle, index) in story.struggles" 
						:key="'struggle-' + index"
						class="struggle-item"
					>
						"{{ struggle }}"
					</div>
				</div>
			</div>
		</div>

		<!-- Story Solution Section -->
		<div class="story-solution" ref="solutionSection">
			<h4 class="solution-title" v-text="story.solutionTitle"></h4>
			
			<div class="solutions-list">
				<div 
					v-for="(solution, index) in story.solutions" 
					:key="'solution-' + index"
					class="solution-item"
					:style="{ '--delay': index * 100 + 'ms' }"
				>
					<strong class="solution-name">{{ solution.name }}</strong>
					<span class="solution-arrow"> → </span>
					<span class="solution-description">{{ solution.description }}</span>
				</div>
			</div>

			<div class="story-insight">
				{{ story.insight }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BusinessStoryCard',
	props: {
		story: {
			type: Object,
			required: true
		},
		showSolution: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		showSolution(newVal) {
			if (newVal) {
				this.$emit('solution-viewed')
			}
		}
	}
}
</script>

<style scoped>
.story-card {
	position: relative;
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
}

/* Story Problem Section */
.story-problem {
	background: rgba(31, 41, 55, 0.9);
	border-radius: 1.5rem;
	padding: 2.5rem;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(75, 85, 99, 0.3);
	transition: all 0.6s ease;
}

.story-header {
	text-align: center;
	margin-bottom: 2rem;
}


.story-title {
	font-size: 2rem;
	font-weight: 700;
	color: #ffffff;
	margin-bottom: 0.75rem;
}

.story-subtitle {
	font-size: 1rem;
	color: #9ca3af;
	margin-bottom: 0;
}

.story-content {
	space-y: 2rem;
}

.strengths-section {
	margin-bottom: 2rem;
}

.strength-item {
	color: #10b981;
	font-size: 1.05rem;
	margin-bottom: 0.75rem;
	line-height: 1.5;
	font-weight: 500;
}

.struggles-section {
	margin-bottom: 1rem;
}

.struggle-item {
	color: #ef4444;
	font-size: 1.05rem;
	margin-bottom: 0.75rem;
	line-height: 1.5;
	font-style: italic;
}

/* Story Solution Section */
.story-solution {
	background: rgba(16, 185, 129, 0.1);
	border-radius: 1.5rem;
	padding: 2.5rem;
	border: 1px solid rgba(16, 185, 129, 0.2);
	backdrop-filter: blur(10px);
	margin-top: 2rem;
	opacity: 0;
	transform: translateY(30px);
	transition: all 0.8s ease;
	pointer-events: none;
}

.show-solution .story-solution {
	opacity: 1;
	transform: translateY(0);
	pointer-events: auto;
}

.solution-title {
	font-size: 1.75rem;
	font-weight: 600;
	color: #10b981;
	margin-bottom: 1.5rem;
	text-align: center;
}

.solutions-list {
	margin-bottom: 2rem;
}

.solution-item {
	color: #ffffff;
	font-size: 1rem;
	margin-bottom: 1.5rem;
	line-height: 1.6;
	opacity: 0;
	transform: translateX(-20px);
	transition: all 0.6s ease;
	transition-delay: var(--delay);
}

.show-solution .solution-item {
	opacity: 1;
	transform: translateX(0);
}

.solution-name {
	color: #10b981;
	font-weight: 600;
}

.solution-arrow {
	color: #10b981;
	margin: 0 0.5rem;
}

.solution-description {
	color: #e5e7eb;
}

.story-insight {
	background: rgba(16, 185, 129, 0.15);
	border-left: 4px solid #10b981;
	padding: 1.5rem;
	font-style: italic;
	color: #d1fae5;
	border-radius: 0 0.75rem 0.75rem 0;
	line-height: 1.6;
	font-size: 1.05rem;
	opacity: 0;
	transform: translateY(20px);
	transition: all 0.8s ease;
	transition-delay: 600ms;
}

.show-solution .story-insight {
	opacity: 1;
	transform: translateY(0);
}

/* Mobile Responsive */
@media (max-width: 768px) {
	.story-problem,
	.story-solution {
		padding: 1.75rem;
	}


	.story-title {
		font-size: 1.5rem;
	}

	.solution-title {
		font-size: 1.4rem;
	}

	.solution-item {
		font-size: 0.95rem;
	}

	.story-insight {
		padding: 1.25rem;
		font-size: 1rem;
	}
}

@media (max-width: 480px) {
	.story-problem,
	.story-solution {
		padding: 1.5rem;
	}


	.story-title {
		font-size: 1.35rem;
	}

	.solution-title {
		font-size: 1.25rem;
	}

	.strength-item,
	.struggle-item,
	.solution-item {
		font-size: 0.9rem;
	}
}
</style>
