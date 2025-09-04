import { defineStore } from 'pinia'

export const useBusinessStoriesStore = defineStore('businessStories', {
	state: () => ({
		stories: [
			{
				id: 'coaches',
				title: 'Coaches & Guides',
				subtitle: 'Business coaches, life coaches, fitness trainers',
				strengths: [
					'Transform people\'s lives every day',
					'Deep expertise that really makes a difference',
					'See real breakthroughs and growth in clients'
				],
				struggles: [
					'Feels salesy to post online',
					'What if people think I\'m pushy?',
					'Don\'t want to sound like every other coach'
				],
				solutionTitle: 'What you could be sharing instead:',
				solutions: [
					{
						name: 'Monday Motivation',
						description: 'Share ONE insight from your weekend that changed your thinking'
					},
					{
						name: 'Story Time',
						description: 'Tell about a client breakthrough (anonymously) in 2-3 sentences'
					},
					{
						name: 'Quick Tip Tuesday',
						description: 'One actionable tip they can use today (30 seconds to read)'
					},
					{
						name: 'What I\'m Learning',
						description: 'Share a mistake you made and what you learned from it'
					}
				],
				insight: '"Wait... I actually DO have interesting things to share. I just never thought people would want to hear about the process behind the results."'
			},
			{
				id: 'local',
				title: 'Local Businesses',
				subtitle: 'Coffee shops, salons, boutiques, restaurants',
				strengths: [
					'Serve your community every day',
					'Build real relationships with customers',
					'Create gathering spaces people love'
				],
				struggles: [
					'Don\'t know what\'s worth posting about',
					'Instagram isn\'t for businesses like mine',
					'My daily routine seems boring'
				],
				solutionTitle: 'Your community wants to see:',
				solutions: [
					{
						name: 'Opening Day',
						description: 'Quick video of you unlocking doors, turning on lights'
					},
					{
						name: 'Regular\'s Story',
						description: '"Mrs. Johnson has ordered the same thing for 3 years..."'
					},
					{
						name: 'Team Spotlight',
						description: 'Introduce who makes your business special'
					},
					{
						name: 'Small Wins',
						description: 'First customer of the day, busy lunch rush, closing time relief'
					}
				],
				insight: '"Oh! I didn\'t realize people would find our daily routine interesting. Maybe social media isn\'t just for big brands after all..."'
			},
			{
				id: 'creative',
				title: 'Creative Professionals',
				subtitle: 'Designers, writers, photographers, musicians',
				strengths: [
					'Create beautiful, meaningful work',
					'Have unique artistic vision',
					'Solve problems through creativity'
				],
				struggles: [
					'My work speaks for itself, right?',
					'Feels weird promoting myself',
					'Don\'t want to seem desperate for attention'
				],
				solutionTitle: 'People love seeing the process:',
				solutions: [
					{
						name: 'Time Lapse Tuesday',
						description: 'Speed up your work process (even 30 seconds is gold)'
					},
					{
						name: 'Decision Points',
						description: 'Show 2-3 options and ask "which direction should I go?"'
					},
					{
						name: 'Inspiration Source',
						description: 'What you\'re looking at/reading/listening to while you work'
					},
					{
						name: 'Failed Attempts',
						description: 'Show what didn\'t work (surprisingly engaging!)'
					}
				],
				insight: '"I always thought I needed to wait until something was \'perfect\' to share it. Turns out people are more interested in how I get there than the final result."'
			},
			{
				id: 'health',
				title: 'Health & Wellness',
				subtitle: 'Therapists, nutritionists, yoga instructors',
				strengths: [
					'Help people heal and grow',
					'See real transformations daily',
					'Create safe, supportive environments'
				],
				struggles: [
					'Privacy concerns posting client info',
					'Don\'t want to seem like I\'m promising miracles',
					'Health advice can be sensitive'
				],
				solutionTitle: 'Share the journey, not the destination:',
				solutions: [
					{
						name: 'Mindful Monday',
						description: 'One small wellness tip that changed your own life'
					},
					{
						name: 'Progress Patterns',
						description: 'What you notice about healing (no client specifics)'
					},
					{
						name: 'Tool Tuesday',
						description: 'Share a technique, book, or resource you recommend'
					},
					{
						name: 'Why I Do This',
						description: 'Your personal wellness journey and motivation'
					}
				],
				insight: '"I can share my expertise without compromising anyone\'s privacy. My own journey and insights are actually really valuable content."'
			},
			{
				id: 'finance',
				title: 'Real Estate & Finance',
				subtitle: 'Realtors, mortgage brokers, financial advisors',
				strengths: [
					'Guide major life decisions',
					'Build trust through expertise',
					'Navigate complex processes for clients'
				],
				struggles: [
					'Compliance rules make me nervous',
					'Market updates are boring',
					'People think I\'m always selling'
				],
				solutionTitle: 'Make complex topics accessible:',
				solutions: [
					{
						name: 'First-Time Buyer Friday',
						description: 'Demystify one part of the process each week'
					},
					{
						name: 'Market Monday',
						description: 'Translate data into what it means for real people'
					},
					{
						name: 'Myth Busting',
						description: 'Address common misconceptions you hear daily'
					},
					{
						name: 'Behind the Scenes',
						description: 'Show the human side of transactions'
					}
				],
				insight: '"People need someone to translate all this complexity into plain English. That\'s actually incredibly valuable content."'
			},
			{
				id: 'educators',
				title: 'Educators & Experts',
				subtitle: 'Course creators, tutors, thought leaders',
				strengths: [
					'Share knowledge that matters',
					'Change how people think',
					'Break down complex concepts'
				],
				struggles: [
					'Sounds pretentious to post about my expertise',
					'Who am I to give advice?',
					'Don\'t want to seem like a know-it-all'
				],
				solutionTitle: 'Your curiosity is contagious:',
				solutions: [
					{
						name: 'What I\'m Reading',
						description: 'Share insights from books/articles that excited you'
					},
					{
						name: 'Question of the Day',
						description: 'Ask something that made you think differently'
					},
					{
						name: 'Simple Explanation',
						description: 'Break down complex ideas into everyday language'
					},
					{
						name: 'Learning in Public',
						description: 'Share when you change your mind about something'
					}
				],
				insight: '"I don\'t have to position myself as the ultimate authority. I can just share what genuinely interests me and let people learn alongside me."'
			}
		],
		
		config: {
			wheelDebounce: 50,
			transitionDuration: 800,
			solutionDelay: 400,
			enableProgressBar: true,
			enableScrollHint: true,
			touchSensitivity: 50
		},
		
		currentStoryIndex: 0,
		solutionStates: [false, false, false, false, false, false],
		isLocked: false,
		completedStories: [],
		finalMessage: {
			title: 'Stop overthinking what to post. Start sharing who you already are.',
			subtitle: 'Consystnt gives you simple prompts that turn your daily work into consistent content — so you can focus on what you do best while your audience grows.'
		}
	}),

	getters: {
		getStory: (state) => (index) => {
			return state.stories[index] || null
		},
		
		getAllStories: (state) => state.stories,
		
		getCurrentStory: (state) => {
			return state.stories[state.currentStoryIndex] || null
		},
		
		getProgressPercent: (state) => {
			const totalSteps = (state.stories.length * 2) + 1 // Each story has problem + solution + final
			let currentStep = state.currentStoryIndex * 2
			
			// Add solution states
			for (let i = 0; i <= state.currentStoryIndex && i < state.solutionStates.length; i++) {
				if (state.solutionStates[i]) currentStep++
			}
			
			return Math.min(100, (currentStep / totalSteps) * 100)
		},
		
		totalStories: (state) => state.stories.length,
		
		isStoryComplete: (state) => (index) => {
			return state.completedStories.includes(index)
		},
		
		isSolutionVisible: (state) => (index) => {
			return state.solutionStates[index] || false
		}
	},

	actions: {
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
		},
		
		setLocked(locked) {
			this.isLocked = locked
		},
		
		updateStoryContent(storyId, updates) {
			const index = this.stories.findIndex(s => s.id === storyId)
			if (index !== -1) {
				this.stories[index] = { ...this.stories[index], ...updates }
			}
		},
		
		updateConfig(newConfig) {
			this.config = { ...this.config, ...newConfig }
		},
		
		resetDefaults() {
			this.config = {
				wheelDebounce: 50,
				transitionDuration: 800,
				solutionDelay: 400,
				enableProgressBar: true,
				enableScrollHint: true,
				touchSensitivity: 50
			}
		},
		
		// Future methods for dynamic content
		loadCustomStories(userType) {
			// Could load different story sets based on user business type
		},
		
		enableABTestVariant(variantName) {
			// Could swap in different story content for testing
		}
	}
})
