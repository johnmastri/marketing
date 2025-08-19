<template>
	<section class="border-t">
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
	</section>
</template>

<script>
import NewsletterForm from './NewsletterForm.vue'
import { useNewsletterStore } from '@/stores/newsletter'
import copyData from '@/content/copy.json'

export default {
	name: 'NewsletterSection',
	components: {
		NewsletterForm
	},
	data() {
		const newsletterStore = useNewsletterStore()
		return {
			copy: copyData,
			subscriberCount: newsletterStore.subscriberCount
		}
	}
}
</script>
