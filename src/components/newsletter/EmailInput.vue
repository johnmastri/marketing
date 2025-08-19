<template>
	<input 
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		type="email"
		required
		:placeholder="placeholder"
		:disabled="disabled"
		class="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
		:class="{ 'border-destructive': error }"
	/>
</template>

<script>
export default {
	name: 'EmailInput',
	props: {
		modelValue: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: 'Enter your email'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		}
	},
	emits: ['update:modelValue']
}
</script>
