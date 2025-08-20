<template>
	<section ref="heroSection" class="relative overflow-hidden bg-background" :style="{ background: bg('hero') }">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-24 lg:py-32">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<HeroTitle :text="hero.headline" />
					<HeroSubtitle :text="hero.subheadline" />
					<HeroActions 
						:primary-text="hero.primaryCTA"
						:secondary-text="hero.secondaryCTA"
						:primary-disabled="true"
						secondary-to="/pricing"
					/>
					<SocialProofStrip :social-proof-text="hero.socialProof" />
				</div>
				<div class="lg:order-first">
					<HeroVisual />
				</div>
			</div>
		</div>
		<CopyControl />
		<GradientControl section-id="hero" />
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
import GradientControl from '@/components/GradientControl.vue'
import CopyControl from '@/components/CopyControl.vue'
import { useGradientsStore } from '@/stores/gradients'
import { useCopyStore } from '@/stores/copy'

export default {
	name: 'HeroSection',
	components: {
		HeroTitle,
		HeroSubtitle,
		HeroActions,
		HeroVisual,
		SocialProofStrip,
		GradientControl,
		CopyControl
	},
	data() {
		const gradients = useGradientsStore()
		const copyStore = useCopyStore()
		return {
			copy: copyData,
			gradients,
			copyStore
		}
	},
	computed: {
		hero() {
			return this.copyStore.current || this.copy.hero
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
		},
		bg(section){ return this.gradients.getCurrent(section) }
	}
}
</script>
