<template>
	<form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
		<div class="flex flex-col sm:flex-row gap-3">
			<EmailInput 
				v-model="email"
				:placeholder="copy.newsletter.placeholder"
				:disabled="isLoading"
				:error="hasError"
			/>
			<SubmitButton 
				:loading="isLoading"
				:disabled="!canSubmit"
				:text="copy.newsletter.cta"
			/>
		</div>
		
		<FormMessage 
			v-if="isSuccess || hasError"
			:type="isSuccess ? 'success' : 'error'"
			:message="isSuccess ? copy.newsletter.success : error"
			class="mt-4"
		/>
	</form>
</template>

<script>
import EmailInput from './EmailInput.vue'
import SubmitButton from './SubmitButton.vue'
import FormMessage from './FormMessage.vue'
import { useNewsletterStore } from '@/stores/newsletter'
import copyData from '@/content/copy.json'

export default {
	name: 'NewsletterForm',
	components: {
		EmailInput,
		SubmitButton,
		FormMessage
	},
	data() {
		const newsletterStore = useNewsletterStore()
		return {
			copy: copyData,
			newsletterStore
		}
	},
	computed: {
		email: {
			get() { return this.newsletterStore.email },
			set(value) { this.newsletterStore.setEmail(value) }
		},
		isLoading() { return this.newsletterStore.isLoading },
		isSuccess() { return this.newsletterStore.isSuccess },
		hasError() { return this.newsletterStore.isError },
		error() { return this.newsletterStore.error },
		canSubmit() { return this.newsletterStore.canSubmit }
	},
	methods: {
		async handleSubmit() {
			await this.newsletterStore.submit()
		}
	}
}
</script>
