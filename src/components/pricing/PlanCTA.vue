<template>
	<button 
		:disabled="disabled"
		class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
		:class="buttonClasses"
	>
		{{ buttonText }}
	</button>
</template>

<script>
export default {
	name: 'PlanCTA',
	props: {
		planName: {
			type: String,
			required: true
		},
		isPopular: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		buttonText() {
			return this.disabled ? 'Coming Soon' : `Choose ${this.planName}`
		},
		buttonClasses() {
			if (this.isPopular) {
				return 'bg-primary text-primary-foreground hover:bg-primary/90'
			}
			return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
		}
	}
}
</script>
