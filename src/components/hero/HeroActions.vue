<template>
	<div class="hero-actions flex flex-col sm:flex-row gap-4">
		<button 
			:disabled="primaryDisabled"
			class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
			:class="{ 'opacity-60 cursor-not-allowed': primaryDisabled }"
		>
			{{ primaryText }}
		</button>
		
		<router-link 
			:to="secondaryTo"
			class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
		>
			{{ secondaryText }}
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'HeroActions',
	props: {
		primaryText: {
			type: String,
			required: true
		},
		secondaryText: {
			type: String,
			required: true
		},
		primaryDisabled: {
			type: Boolean,
			default: false
		},
		secondaryTo: {
			type: String,
			default: '#'
		}
	}
}
</script>
