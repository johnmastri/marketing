<template>
	<p class="hero-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
		{{ text }}
	</p>
</template>

<script>
export default {
	name: 'HeroSubtitle',
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>
