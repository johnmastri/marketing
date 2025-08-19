<template>
	<div 
		ref="platformPill"
		class="group relative overflow-hidden rounded-full border bg-card px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
		:style="{ borderColor: color + '40' }"
		@mouseenter="onHover"
	>
		<div class="flex items-center space-x-3">
			<div 
				class="w-3 h-3 rounded-full"
				:style="{ backgroundColor: color }"
			></div>
			<span class="font-medium">{{ name }}</span>
		</div>
		
		<div 
			v-if="showFormats"
			class="absolute top-full left-0 right-0 bg-card border border-border rounded-lg mt-2 p-3 shadow-lg z-10"
		>
			<div class="text-xs text-muted-foreground space-y-1">
				<div v-for="format in formats" :key="format" class="flex items-center space-x-2">
					<div class="w-1 h-1 rounded-full bg-muted-foreground"></div>
					<span>{{ format }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'PlatformPill',
	props: {
		name: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		},
		formats: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			showFormats: false
		}
	},
	mounted() {
		gsap.from(this.$refs.platformPill, {
			opacity: 0,
			scale: 0.8,
			duration: 0.5,
			ease: 'back.out(1.7)',
			scrollTrigger: {
				trigger: this.$refs.platformPill,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			}
		})
	},
	methods: {
		onHover() {
			this.showFormats = true
			setTimeout(() => {
				this.showFormats = false
			}, 2000)
		}
	}
}
</script>
