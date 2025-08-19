<template>
	<div>
		<!-- Current Layout -->
		<template v-if="layoutStore.isCurrentLayout">
			<HeroSection />
			<ValuePillarsSection />
			<HowItWorksSection />
			<CoreFeaturesSection />
			<PlatformsSection />
			<IntegrationsSection />
			<GallerySection />
			<ResultsSection />
			<NewsletterSection />
		</template>

		<!-- Artist-Focused Layout -->
		<template v-else-if="layoutStore.isArtistLayout">
			<ArtistHeroSection />
			<TransformationSection />
			<CoreFeaturesSection />
			<GenreExamplesSection />
			<ArtistMetricsSection />
			<HowItWorksSection />
			<PlatformIntegrationsSection />
			<PricingSection />
			<NewsletterSection />
		</template>
	</div>
</template>

<script>
import { useLayoutStore } from '@/stores/layout'

import HeroSection from '@/components/hero/HeroSection.vue'
import ValuePillarsSection from '@/components/value-pillars/ValuePillarsSection.vue'
import HowItWorksSection from '@/components/steps/HowItWorksSection.vue'
import CoreFeaturesSection from '@/components/features/CoreFeaturesSection.vue'
import PlatformsSection from '@/components/platforms/PlatformsSection.vue'
import IntegrationsSection from '@/components/integrations/IntegrationsSection.vue'
import GallerySection from '@/components/gallery/GallerySection.vue'
import ResultsSection from '@/components/results/ResultsSection.vue'
import NewsletterSection from '@/components/newsletter/NewsletterSection.vue'

import ArtistHeroSection from '@/components/hero/ArtistHeroSection.vue'
import TransformationSection from '@/components/artist/TransformationSection.vue'
import GenreExamplesSection from '@/components/artist/GenreExamplesSection.vue'
import ArtistMetricsSection from '@/components/artist/ArtistMetricsSection.vue'
import PlatformIntegrationsSection from '@/components/artist/PlatformIntegrationsSection.vue'
import PricingSection from '@/components/pricing/PricingSection.vue'

export default {
	name: 'Home',
	components: {
		HeroSection,
		ValuePillarsSection,
		HowItWorksSection,
		CoreFeaturesSection,
		PlatformsSection,
		IntegrationsSection,
		GallerySection,
		ResultsSection,
		NewsletterSection,
		ArtistHeroSection,
		TransformationSection,
		GenreExamplesSection,
		ArtistMetricsSection,
		PlatformIntegrationsSection,
		PricingSection
	},
	computed: {
		layoutStore() {
			return useLayoutStore()
		}
	},
	mounted() {
		this.layoutStore.initializeFromUrl()
	}
}
</script>
