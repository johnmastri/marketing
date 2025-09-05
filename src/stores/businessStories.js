import { defineStore } from 'pinia'

export const useBusinessStoriesStore = defineStore('businessStories', {
	state: () => ({
		stories: [
			{
				id: 'coaches',
				title: 'Coaches & Guides',
				subtitle: 'Business coaches, life coaches, fitness trainers',
				narrative: [
					'You already know how to guide transformation.',
					'But sharing it can feel forced.',
					'Not because you lack insight.',
					'Because every coach is different.',
					'And your voice shouldn\'t sound like anyone else\'s.',
					'Consystnt listens first.',
					'It learns the way you speak, the way you teach,',
					'and the way your clients experience growth.',
					'Then it turns that into prompts',
					'that feel as natural as conversation.',
					'No scripts.',
					'No templates.',
					'Just you — made visible.'
				]
			},
			{
				id: 'local',
				title: 'Local Businesses',
				subtitle: 'Coffee shops, salons, boutiques, restaurants',
				narrative: [
					'You already know how to serve your community.',
					'But showing up online feels unnatural.',
					'Not because you lack stories.',
					'Because your story isn\'t like anyone else\'s.',
					'Consystnt listens first.',
					'It learns the way you talk about your work,',
					'your customers, your neighborhood.',
					'Then it turns that into prompts',
					'that sound like you — not like an ad.',
					'No gimmicks.',
					'No templates.',
					'Just you — made visible.'
				]
			},
			{
				id: 'creative',
				title: 'Creatives & Artists',
				subtitle: 'Designers, writers, photographers, musicians',
				narrative: [
					'You already know how to create.',
					'But sharing your process feels exposed.',
					'Not because you lack vision.',
					'Because every artist is different.',
					'Consystnt listens first.',
					'It learns your tone, your rhythm,',
					'the way you see the world.',
					'Then it turns that into prompts',
					'that reflect your practice, your voice.',
					'No formulas.',
					'No templates.',
					'Just you — made visible.'
				]
			},
			{
				id: 'health',
				title: 'Health & Wellness',
				subtitle: 'Therapists, nutritionists, yoga instructors',
				narrative: [
					'You already know how to care for others.',
					'But posting about it can feel self-promotional.',
					'Not because you lack knowledge.',
					'Because your approach is uniquely yours.',
					'Consystnt listens first.',
					'It learns how you talk about health,',
					'habits, balance, and change.',
					'Then it turns that into prompts',
					'that guide with compassion, not pressure.',
					'No noise.',
					'No templates.',
					'Just you — made visible.'
				]
			},
			{
				id: 'finance',
				title: 'Real Estate & Finance',
				subtitle: 'Realtors, mortgage brokers, financial advisors',
				narrative: [
					'You already know how to find people homes.',
					'But posting about it can feel like bragging.',
					'Not because you lack value.',
					'Because every agent is different.',
					'Consystnt listens first.',
					'It learns how you speak about community,',
					'about trust, about belonging.',
					'Then it turns that into prompts',
					'that sound like guidance, not sales.',
					'No clichés.',
					'No templates.',
					'Just you — made visible.'
				]
			},
			{
				id: 'educators',
				title: 'Educators & Experts',
				subtitle: 'Course creators, tutors, thought leaders',
				narrative: [
					'You already know how to teach.',
					'But sharing online can feel reductive.',
					'Not because you lack authority.',
					'Because depth doesn\'t fit into a template.',
					'Consystnt listens first.',
					'It learns how you explain ideas,',
					'how you break things down,',
					'how you make complex subjects clear.',
					'Then it turns that into prompts',
					'that showcase your expertise',
					'without losing your voice.',
					'No dumbing down.',
					'No templates.',
					'Just you — made visible.'
				]
			}
		],
		
		config: {
			carouselWidth: 90, // 90% width for wider cards
			scrollTriggerOffset: 100, // px to trigger next line
			lineRevealDelay: 300, // ms between line reveals
			transitionDuration: 600,
			enableScrollHint: true,
			touchSensitivity: 50,
			initialVisibleLines: 2
		},
		
		currentStoryIndex: 0,
		selectedStoryId: null,
		narrativeProgress: {}, // Track progress for each story
		isNarrativeMode: false,
		isLocked: false,
		// Legacy compatibility
		solutionStates: [false, false, false, false, false, false],
		completedStories: [],
		finalMessage: {
			title: 'Stop overthinking what to post. Start sharing who you already are.',
			subtitle: 'Consystnt gives you simple prompts that turn your daily work into consistent content — so you can focus on what you do best while your audience grows.'
		}
	}),

	getters: {
		getStory: (state) => (id) => {
			return state.stories.find(story => story.id === id) || null
		},
		
		getAllStories: (state) => state.stories,
		
		getCurrentStory: (state) => {
			return state.stories[state.currentStoryIndex] || null
		},
		
		getSelectedStory: (state) => {
			return state.selectedStoryId ? 
				state.stories.find(s => s.id === state.selectedStoryId) : 
				null
		},
		
		getNarrativeProgress: (state) => (storyId) => {
			return state.narrativeProgress[storyId] || 0
		},
		
		totalStories: (state) => state.stories.length,
		
		// Legacy compatibility getters
		getProgressPercent: (state) => {
			const totalSteps = (state.stories.length * 2) + 1
			let currentStep = state.currentStoryIndex * 2
			for (let i = 0; i <= state.currentStoryIndex && i < state.solutionStates.length; i++) {
				if (state.solutionStates[i]) currentStep++
			}
			return Math.min(100, (currentStep / totalSteps) * 100)
		},
		
		isStoryComplete: (state) => (index) => {
			return state.completedStories.includes(index)
		},
		
		isSolutionVisible: (state) => (index) => {
			return state.solutionStates[index] || false
		}
	},

	actions: {
		// Narrative mode actions
		selectStory(storyId) {
			this.selectedStoryId = storyId
			this.isNarrativeMode = true
			if (typeof this.narrativeProgress[storyId] !== 'number') {
				this.narrativeProgress[storyId] = Math.max(0, this.config.initialVisibleLines || 0)
			}
		},
		
		advanceNarrative(storyId, lineIndex) {
			if (!this.narrativeProgress[storyId]) {
				this.narrativeProgress[storyId] = 0
			}
			this.narrativeProgress[storyId] = Math.max(
				this.narrativeProgress[storyId], 
				lineIndex + 1
			)
		},

		// Set absolute narrative progress (supports decreasing on scroll up)
		setNarrativeProgress(storyId, value) {
			if (!storyId) return
			const story = this.getStory(storyId)
			const max = story ? story.narrative.length : 0
			const clamped = Math.max(0, Math.min(max, value))
			this.narrativeProgress[storyId] = clamped
		},
		
		resetNarrative(storyId) {
			if (storyId) {
				this.narrativeProgress[storyId] = Math.max(0, this.config.initialVisibleLines || 0)
			} else {
				this.narrativeProgress = {}
			}
		},
		
		exitNarrativeMode() {
			this.isNarrativeMode = false
			this.selectedStoryId = null
		},
		
		// Legacy compatibility actions
		setCurrentStory(index) {
			if (index >= 0 && index <= this.stories.length) {
				this.currentStoryIndex = index
			}
		},
		
		showSolution(storyIndex) {
			if (storyIndex >= 0 && storyIndex < this.solutionStates.length) {
				this.solutionStates[storyIndex] = true
			}
		},
		
		hideSolution(storyIndex) {
			if (storyIndex >= 0 && storyIndex < this.solutionStates.length) {
				this.solutionStates[storyIndex] = false
			}
		},
		
		toggleSolution(storyIndex) {
			if (storyIndex >= 0 && storyIndex < this.solutionStates.length) {
				this.solutionStates[storyIndex] = !this.solutionStates[storyIndex]
			}
		},
		
		markStoryComplete(index) {
			if (!this.completedStories.includes(index)) {
				this.completedStories.push(index)
			}
		},
		
		resetProgress() {
			this.currentStoryIndex = 0
			this.solutionStates = [false, false, false, false, false, false]
			this.completedStories = []
			this.isLocked = false
			this.narrativeProgress = {}
		},
		
		setLocked(locked) {
			this.isLocked = locked
		},
		
		updateConfig(newConfig) {
			this.config = { ...this.config, ...newConfig }
		}
	}
})
