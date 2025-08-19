<template>
	<div>
		<section class="border-t">
			<div class="container mx-auto max-w-4xl px-4 py-16 md:py-20">
				<div class="text-center mb-12">
					<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
						{{ copy.faq.headline }}
					</h1>
					<p class="text-lg text-muted-foreground">
						Everything you need to know about Consystnt and AI-powered content creation.
					</p>
				</div>
				
				<div class="space-y-8">
					<FAQItem 
						v-for="(item, index) in copy.faq.items"
						:key="index"
						:question="item.question"
						:answer="item.answer"
						:delay="index * 0.1"
					/>
				</div>
			</div>
		</section>
		
		<NewsletterSection />
	</div>
</template>

<script>
import FAQItem from '@/components/faq/FAQItem.vue'
import NewsletterSection from '@/components/newsletter/NewsletterSection.vue'
import copyData from '@/content/copy.json'

export default {
	name: 'FAQ',
	components: {
		FAQItem,
		NewsletterSection
	},
	data() {
		return {
			copy: copyData
		}
	}
}
</script>
