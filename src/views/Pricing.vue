<template>
	<div>
		<PricingSection />
		<NewsletterSection />
	</div>
</template>

<script>
import PricingSection from '@/components/pricing/PricingSection.vue'
import NewsletterSection from '@/components/newsletter/NewsletterSection.vue'

export default {
	name: 'Pricing',
	components: {
		PricingSection,
		NewsletterSection
	}
}
</script>
