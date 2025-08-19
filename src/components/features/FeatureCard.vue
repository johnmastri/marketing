<template>
	<div ref="featureCard" class="bg-card rounded-lg border p-6 space-y-4 hover:shadow-lg transition-shadow duration-300">
		<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
			<component :is="iconComponent" class="w-6 h-6 text-primary" />
		</div>
		
		<div class="space-y-3">
			<h3 class="text-xl font-semibold">{{ title }}</h3>
			<p class="text-muted-foreground leading-relaxed">{{ description }}</p>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'FeatureCard',
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		delay: {
			type: Number,
			default: 0
		}
	},
	computed: {
		iconComponent() {
			const icons = {
				persona: 'PersonaIcon',
				content: 'ContentIcon',
				distribution: 'DistributionIcon',
				analytics: 'AnalyticsIcon'
			}
			return icons[this.icon] || 'PersonaIcon'
		}
	},
	mounted() {
		gsap.from(this.$refs.featureCard, {
			opacity: 0,
			y: 30,
			duration: 0.6,
			delay: this.delay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: this.$refs.featureCard,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		})
	},
	components: {
		PersonaIcon: {
			template: `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
					<circle cx="9" cy="7" r="4"/>
					<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
				</svg>
			`
		},
		ContentIcon: {
			template: `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
					<circle cx="9" cy="9" r="2"/>
					<path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
				</svg>
			`
		},
		DistributionIcon: {
			template: `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="18" cy="5" r="3"/>
					<circle cx="6" cy="12" r="3"/>
					<circle cx="18" cy="19" r="3"/>
					<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
					<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
				</svg>
			`
		},
		AnalyticsIcon: {
			template: `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M3 3v18h18"/>
					<path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
				</svg>
			`
		}
	}
}
</script>
