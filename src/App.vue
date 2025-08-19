<template>
	<div class="min-h-screen flex flex-col bg-background text-foreground">
		<NavBar />
		<main class="flex-1">
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
	name: 'App',
	components: {
		NavBar,
		Footer
	}
}
</script>
