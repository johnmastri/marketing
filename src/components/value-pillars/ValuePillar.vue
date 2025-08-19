<template>
	<div ref="valuePillar" class="text-center space-y-4">
		<div class="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
			<component :is="iconComponent" class="w-8 h-8 text-primary" />
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
	name: 'ValuePillar',
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
				identity: 'IdentityIcon',
				automation: 'AutomationIcon', 
				distribution: 'DistributionIcon'
			}
			return icons[this.icon] || 'IdentityIcon'
		}
	},
	mounted() {
		gsap.from(this.$refs.valuePillar, {
			opacity: 0,
			y: 30,
			duration: 0.6,
			delay: this.delay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: this.$refs.valuePillar,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		})
	},
	components: {
		IdentityIcon: {
			template: `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
					<circle cx="12" cy="7" r="4"/>
				</svg>
			`
		},
		AutomationIcon: {
			template: `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 2L2 7l10 5 10-5-10-5z"/>
					<path d="M2 17l10 5 10-5"/>
					<path d="M2 12l10 5 10-5"/>
				</svg>
			`
		},
		DistributionIcon: {
			template: `
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
					<polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
					<line x1="12" y1="22.08" x2="12" y2="12"/>
				</svg>
			`
		}
	}
}
</script>
