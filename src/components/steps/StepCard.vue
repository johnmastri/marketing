<template>
	<div ref="stepCard" class="text-center space-y-4">
		<div class="relative">
			<div class="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6">
				{{ number }}
			</div>
			<div v-if="number < 3" class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-1/2"></div>
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
	name: 'StepCard',
	props: {
		number: {
			type: Number,
			required: true
		},
		title: {
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
		gsap.from(this.$refs.stepCard, {
			opacity: 0,
			y: 30,
			duration: 0.6,
			delay: this.delay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: this.$refs.stepCard,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		})
	}
}
</script>
