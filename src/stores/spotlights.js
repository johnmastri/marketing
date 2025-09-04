import { defineStore } from 'pinia'

export const useSpotlightsStore = defineStore('spotlights', {
	state: () => ({
		testimonials: [
			{
				id: 'david',
				name: 'David',
				role: 'Coffee Shop Owner',
				quote: 'Stopped overthinking. Now I share my café\'s story.',
				img: '/images/spotlights/coffee-owner.svg',
				alt: 'Coffee shop owner pouring latte art behind espresso bar',
				bgColor: '#8B4513'
			},
			{
				id: 'jenna',
				name: 'Jenna',
				role: 'Fitness Coach',
				quote: 'I show up online as consistently as I do for clients.',
				img: '/images/spotlights/fitness-coach.svg',
				alt: 'Fitness coach with client in boutique gym',
				bgColor: '#FF6B6B'
			},
			{
				id: 'maya',
				name: 'Maya',
				role: 'Designer',
				quote: 'AI prompts help me share work without wasting time.',
				img: '/images/spotlights/designer.svg',
				alt: 'Designer pinning fabric on mannequin in sunny studio',
				bgColor: '#9B59B6'
			},
			{
				id: 'luis',
				name: 'Luis',
				role: 'Chef',
				quote: 'Didn\'t have time. Now we\'re visible every week.',
				img: '/images/spotlights/chef.svg',
				alt: 'Chef plating a dish in open kitchen',
				bgColor: '#E74C3C'
			},
			{
				id: 'sarah',
				name: 'Sarah',
				role: 'Realtor',
				quote: 'From random posts to a rhythm that builds trust.',
				img: '/images/spotlights/realtor.svg',
				alt: 'Realtor in front of modern home',
				bgColor: '#3498DB'
			},
			{
				id: 'amina',
				name: 'Amina',
				role: 'Wellness Coach',
				quote: 'I can share my practice authentically.',
				img: '/images/spotlights/wellness.svg',
				alt: 'Wellness coach in serene loft with plants',
				bgColor: '#2ECC71'
			},
			{
				id: 'kai',
				name: 'Kai',
				role: 'Photographer',
				quote: 'I share my process — not just final photos.',
				img: '/images/spotlights/photographer.svg',
				alt: 'Photographer reviewing shots on laptop',
				bgColor: '#34495E'
			},
			{
				id: 'riley',
				name: 'Riley',
				role: 'Boutique Owner',
				quote: 'Consistency became part of my routine.',
				img: '/images/spotlights/boutique.svg',
				alt: 'Boutique owner arranging clothing rack',
				bgColor: '#F39C12'
			},
			{
				id: 'marcus',
				name: 'Marcus',
				role: 'Financial Advisor',
				quote: 'Showing up regularly turned expertise into trust.',
				img: '/images/spotlights/advisor.svg',
				alt: 'Advisor at sleek desk with paperwork',
				bgColor: '#1ABC9C'
			}
		]
	}),

	getters: {
		getTestimonialById: (state) => (id) => {
			return state.testimonials.find(t => t.id === id)
		},
		
		totalCount: (state) => state.testimonials.length
	},

	actions: {
		updateTestimonial(id, updates) {
			const index = this.testimonials.findIndex(t => t.id === id)
			if (index !== -1) {
				this.testimonials[index] = { ...this.testimonials[index], ...updates }
			}
		},
		
		updateImage(id, newImagePath) {
			this.updateTestimonial(id, { img: newImagePath })
		},
		
		updateQuote(id, newQuote) {
			this.updateTestimonial(id, { quote: newQuote })
		}
	}
})
