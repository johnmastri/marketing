<template>
	<button 
		type="submit"
		:disabled="disabled || loading"
		class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 whitespace-nowrap"
	>
		<svg 
			v-if="loading" 
			class="animate-spin -ml-1 mr-2 h-4 w-4" 
			fill="none" 
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
		{{ loading ? 'Joining...' : text }}
	</button>
</template>

<script>
export default {
	name: 'SubmitButton',
	props: {
		text: {
			type: String,
			default: 'Submit'
		},
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
