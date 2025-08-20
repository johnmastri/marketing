<template>
	<section class="border-t relative" :style="{ background: bg('newsletter') }">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="max-w-2xl mx-auto text-center">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.newsletter.headline }}
				</h2>
				<p class="text-lg text-muted-foreground mb-8">
					{{ copy.newsletter.description.replace('500+', subscriberCount + '+') }}
				</p>
				
				<NewsletterForm />
			</div>
		</div>
		<GradientControl section-id="newsletter" />
	</section>
</template>

<script>
import NewsletterForm from './NewsletterForm.vue'
import { useNewsletterStore } from '@/stores/newsletter'
import copyData from '@/content/copy.json'
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'NewsletterSection',
	components: {
		NewsletterForm,
		GradientControl
	},
	data() {
		const newsletterStore = useNewsletterStore()
		const gradients = useGradientsStore()
		return {
			copy: copyData,
			subscriberCount: newsletterStore.subscriberCount,
			gradients
		}
	},
	methods: {
		bg(section) {
			return this.gradients.getCurrent(section)
		}
	}
}
</script>
