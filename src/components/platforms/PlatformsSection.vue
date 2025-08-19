<template>
	<section class="border-t">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.platforms.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					{{ copy.platforms.description }}
				</p>
			</div>
			
			<div class="flex flex-wrap justify-center gap-4 md:gap-6">
				<PlatformPill 
					v-for="platform in platforms"
					:key="platform.key"
					:name="platform.name"
					:color="platform.color"
					:formats="platform.formats"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import PlatformPill from './PlatformPill.vue'
import { usePlatformsStore } from '@/stores/platforms'
import copyData from '@/content/copy.json'

export default {
	name: 'PlatformsSection',
	components: {
		PlatformPill
	},
	data() {
		const platformsStore = usePlatformsStore()
		return {
			copy: copyData,
			platforms: platformsStore.supportedPlatforms
		}
	}
}
</script>
