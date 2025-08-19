<template>
	<li class="flex items-start space-x-3 text-sm">
		<div class="flex-shrink-0 mt-0.5">
			<svg 
				v-if="included"
				class="w-4 h-4 text-green-500" 
				fill="none" 
				stroke="currentColor" 
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
			<svg 
				v-else
				class="w-4 h-4 text-muted-foreground" 
				fill="none" 
				stroke="currentColor" 
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</div>
		<span :class="included ? 'text-foreground' : 'text-muted-foreground'">
			{{ text }}
		</span>
	</li>
</template>

<script>
export default {
	name: 'FeatureItem',
	props: {
		text: {
			type: String,
			required: true
		},
		included: {
			type: Boolean,
			required: true
		}
	}
}
</script>
