<template>
	<h1 class="hero-title text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
		{{ text }}
	</h1>
</template>

<script>
export default {
	name: 'HeroTitle',
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>
