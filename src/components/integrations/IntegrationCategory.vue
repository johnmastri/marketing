<template>
	<div ref="integrationCategory" class="text-center space-y-4">
		<h3 class="text-lg font-semibold text-foreground">{{ title }}</h3>
		<div class="flex flex-wrap justify-center gap-2">
			<span 
				v-for="item in items"
				:key="item"
				class="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground border"
			>
				{{ item }}
			</span>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'IntegrationCategory',
	props: {
		title: {
			type: String,
			required: true
		},
		items: {
			type: Array,
			required: true
		},
		delay: {
			type: Number,
			default: 0
		}
	},
	mounted() {
		gsap.from(this.$refs.integrationCategory, {
			opacity: 0,
			y: 20,
			duration: 0.6,
			delay: this.delay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: this.$refs.integrationCategory,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		})
	}
}
</script>
