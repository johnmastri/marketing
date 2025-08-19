<template>
	<div 
		class="text-sm font-medium"
		:class="{
			'text-green-600': type === 'success',
			'text-destructive': type === 'error'
		}"
	>
		{{ message }}
	</div>
</template>

<script>
export default {
	name: 'FormMessage',
	props: {
		type: {
			type: String,
			required: true,
			validator: (value) => ['success', 'error'].includes(value)
		},
		message: {
			type: String,
			required: true
		}
	}
}
</script>
