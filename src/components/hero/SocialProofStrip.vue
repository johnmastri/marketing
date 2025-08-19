<template>
	<div ref="socialProof" class="mt-8 pt-8 border-t border-border/50">
		<p class="text-sm text-muted-foreground text-center">
			{{ socialProofText }}
		</p>
	</div>
</template>

<script>
import { gsap } from 'gsap'

export default {
	name: 'SocialProofStrip',
	props: {
		socialProofText: {
			type: String,
			required: true
		}
	},
	mounted() {
		gsap.from(this.$refs.socialProof, {
			opacity: 0,
			y: 10,
			duration: 0.6,
			delay: 1.2,
			ease: 'power2.out'
		})
	}
}
</script>
