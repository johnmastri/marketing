<template>
	<div ref="resultCard" class="bg-card rounded-lg border p-6 text-center space-y-4">
		<div class="space-y-2">
			<div class="text-sm text-muted-foreground">From</div>
			<div class="text-lg font-medium text-red-600">{{ before }}</div>
		</div>
		
		<div class="flex items-center justify-center">
			<svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M5 12h14"/>
				<path d="M12 5l7 7-7 7"/>
			</svg>
		</div>
		
		<div class="space-y-2">
			<div class="text-sm text-muted-foreground">To</div>
			<div class="text-lg font-medium text-green-600">{{ after }}</div>
		</div>
		
		<p class="text-sm text-muted-foreground italic">{{ description }}</p>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'ResultCard',
	props: {
		before: {
			type: String,
			required: true
		},
		after: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		delay: {
			type: Number,
			default: 0
		}
	},
	mounted() {
		gsap.from(this.$refs.resultCard, {
			opacity: 0,
			y: 30,
			duration: 0.6,
			delay: this.delay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: this.$refs.resultCard,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		})
	}
}
</script>
