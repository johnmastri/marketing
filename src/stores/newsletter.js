import { defineStore } from 'pinia'

export const useNewsletterStore = defineStore('newsletter', {
	state: () => ({
		email: '',
		status: 'idle',
		error: null,
		subscriberCount: 500
	}),
	getters: {
		isLoading: (state) => state.status === 'loading',
		isSuccess: (state) => state.status === 'success',
		isError: (state) => state.status === 'error',
		canSubmit: (state) => state.email.length > 0 && state.status !== 'loading'
	},
	actions: {
		async submit() {
			if (!this.canSubmit) return
			
			this.status = 'loading'
			this.error = null
			
			try {
				await new Promise(resolve => setTimeout(resolve, 1000))
				this.status = 'success'
				this.subscriberCount += 1
			} catch (err) {
				this.status = 'error'
				this.error = err.message || 'Something went wrong. Please try again.'
			}
		},
		reset() {
			this.email = ''
			this.status = 'idle'
			this.error = null
		},
		setEmail(email) {
			this.email = email
			if (this.status === 'error') {
				this.status = 'idle'
				this.error = null
			}
		}
	}
})
