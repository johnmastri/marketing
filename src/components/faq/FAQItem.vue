<template>
	<div ref="faqItem" class="border-b pb-6">
		<h3 class="text-lg font-semibold mb-3">{{ question }}</h3>
		<p class="text-muted-foreground leading-relaxed">{{ answer }}</p>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'FAQItem',
	props: {
		question: {
			type: String,
			required: true
		},
		answer: {
			type: String,
			required: true
		},
		delay: {
			type: Number,
			default: 0
		}
	},
	mounted() {
		gsap.from(this.$refs.faqItem, {
			opacity: 0,
			y: 20,
			duration: 0.6,
			delay: this.delay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: this.$refs.faqItem,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			}
		})
	}
}
</script>
