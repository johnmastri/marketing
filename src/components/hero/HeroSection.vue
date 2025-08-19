<template>
	<section ref="heroSection" class="relative overflow-hidden bg-background">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-24 lg:py-32">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<HeroTitle :text="copy.hero.headline" />
					<HeroSubtitle :text="copy.hero.subheadline" />
					<HeroActions 
						:primary-text="copy.hero.primaryCTA"
						:secondary-text="copy.hero.secondaryCTA"
						:primary-disabled="true"
						secondary-to="/pricing"
					/>
					<SocialProofStrip :social-proof-text="copy.hero.socialProof" />
				</div>
				<div class="lg:order-first">
					<HeroVisual />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { gsap } from 'gsap'
import HeroTitle from './HeroTitle.vue'
import HeroSubtitle from './HeroSubtitle.vue'
import HeroActions from './HeroActions.vue'
import HeroVisual from './HeroVisual.vue'
import SocialProofStrip from './SocialProofStrip.vue'
import copyData from '@/content/copy.json'

export default {
	name: 'HeroSection',
	components: {
		HeroTitle,
		HeroSubtitle,
		HeroActions,
		HeroVisual,
		SocialProofStrip
	},
	data() {
		return {
			copy: copyData
		}
	},
	mounted() {
		this.animateIn()
	},
	methods: {
		animateIn() {
			const tl = gsap.timeline()
			
			tl.from(this.$refs.heroSection.querySelectorAll('.hero-title'), {
				opacity: 0,
				y: 30,
				duration: 0.8,
				ease: 'power2.out'
			})
			.from(this.$refs.heroSection.querySelectorAll('.hero-subtitle'), {
				opacity: 0,
				y: 20,
				duration: 0.6,
				ease: 'power2.out'
			}, '-=0.4')
			.from(this.$refs.heroSection.querySelectorAll('.hero-actions'), {
				opacity: 0,
				y: 20,
				duration: 0.6,
				ease: 'power2.out'
			}, '-=0.3')
			.from(this.$refs.heroSection.querySelectorAll('.hero-visual'), {
				opacity: 0,
				scale: 0.95,
				duration: 0.8,
				ease: 'power2.out'
			}, '-=0.6')
		}
	}
}
</script>
