<template>
	<section class="py-20 relative" :style="{ background: bg('genre-examples') }">
		<div class="container mx-auto max-w-6xl px-4">
			<div class="text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
					Your genre, your vibe, your content
				</h2>
				<p class="text-xl text-muted-foreground">
					See how our AI adapts to different musical styles
				</p>
			</div>

			<div class="flex flex-wrap justify-center gap-4 mb-12">
				<button 
					v-for="genre in genres" 
					:key="genre.id"
					@click="selectedGenre = genre.id"
					class="px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
					:class="selectedGenre === genre.id 
						? 'bg-primary text-primary-foreground shadow-lg' 
						: 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'"
				>
					{{ genre.name }}
				</button>
			</div>

			<div class="relative">
				<div 
					v-for="genre in genres" 
					:key="genre.id"
					v-show="selectedGenre === genre.id"
					class="grid md:grid-cols-3 gap-6"
				>
					<div 
						v-for="(post, index) in genre.posts" 
						:key="index"
						class="bg-background rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
					>
						<div class="aspect-square relative" :class="post.bgClass">
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="text-center">
									<div class="w-16 h-16 rounded-full flex items-center justify-center mb-3" :class="post.iconBg">
										<component :is="post.icon" class="w-8 h-8" :class="post.iconColor" />
									</div>
									<div class="text-sm font-medium" :class="post.textColor">{{ post.type }}</div>
								</div>
							</div>
							<div class="absolute top-4 right-4">
								<div class="bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
									AI Generated
								</div>
							</div>
						</div>
						
						<div class="p-4">
							<h3 class="font-semibold mb-2">{{ post.title }}</h3>
							<p class="text-sm text-muted-foreground mb-3">{{ post.caption }}</p>
							<div class="flex items-center justify-between text-xs text-muted-foreground">
								<span>{{ post.platform }}</span>
								<span>{{ post.engagement }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="text-center mt-12">
				<button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-3">
					Generate Content for Your Genre
				</button>
			</div>
		</div>
		<GradientControl section-id="genre-examples" />
	</section>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'GenreExamplesSection',
	data() {
		return {
			selectedGenre: 'electronic',
			genres: [
				{
					id: 'electronic',
					name: 'Electronic',
					posts: [
						{
							type: 'Album Art',
							title: 'Neon Pulse EP',
							caption: 'New sounds from the underground. Dropping Friday 🎵',
							platform: 'Instagram',
							engagement: '2.4K likes',
							bgClass: 'bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500',
							iconBg: 'bg-white/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'MusicIcon'
						},
						{
							type: 'Video Teaser',
							title: 'Studio Session',
							caption: 'Behind the scenes of "Midnight Dreams" 🌙',
							platform: 'TikTok',
							engagement: '15.2K views',
							bgClass: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500',
							iconBg: 'bg-white/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'VideoIcon'
						},
						{
							type: 'Story Post',
							title: 'Live Performance',
							caption: 'Energy was unreal last night! Thank you Berlin 🔥',
							platform: 'Instagram Story',
							engagement: '892 views',
							bgClass: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
							iconBg: 'bg-white/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'CameraIcon'
						}
					]
				},
				{
					id: 'indie-rock',
					name: 'Indie Rock',
					posts: [
						{
							type: 'Album Art',
							title: 'Vintage Vibes',
							caption: 'Raw, unfiltered sound. The way music should be.',
							platform: 'Instagram',
							engagement: '1.8K likes',
							bgClass: 'bg-gradient-to-br from-amber-600 via-orange-500 to-red-600',
							iconBg: 'bg-white/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'MusicIcon'
						},
						{
							type: 'Band Photo',
							title: 'Garage Sessions',
							caption: 'Where the magic happens. New single out now 🎸',
							platform: 'Facebook',
							engagement: '3.1K likes',
							bgClass: 'bg-gradient-to-br from-stone-600 via-amber-600 to-orange-500',
							iconBg: 'bg-white/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'CameraIcon'
						},
						{
							type: 'Lyric Video',
							title: 'Broken Dreams',
							caption: 'Sometimes the broken pieces make the best art 💔',
							platform: 'YouTube',
							engagement: '8.7K views',
							bgClass: 'bg-gradient-to-br from-slate-700 via-stone-600 to-amber-600',
							iconBg: 'bg-white/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'VideoIcon'
						}
					]
				},
				{
					id: 'hip-hop',
					name: 'Hip-Hop',
					posts: [
						{
							type: 'Cover Art',
							title: 'Street Chronicles',
							caption: 'Real stories from real streets. No cap 💯',
							platform: 'Instagram',
							engagement: '5.2K likes',
							bgClass: 'bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600',
							iconBg: 'bg-black/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'MusicIcon'
						},
						{
							type: 'Freestyle Video',
							title: 'Rooftop Bars',
							caption: 'When the beat drops, the city listens 🏙️',
							platform: 'TikTok',
							engagement: '23.4K views',
							bgClass: 'bg-gradient-to-br from-green-500 via-blue-500 to-purple-600',
							iconBg: 'bg-black/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'VideoIcon'
						},
						{
							type: 'Studio Shot',
							title: 'Grinding Late',
							caption: 'While they sleep, we create. Hustle never stops ⏰',
							platform: 'Instagram Story',
							engagement: '1.5K views',
							bgClass: 'bg-gradient-to-br from-purple-600 via-pink-500 to-red-500',
							iconBg: 'bg-black/20',
							iconColor: 'text-white',
							textColor: 'text-white',
							icon: 'CameraIcon'
						}
					]
				}
			],
			gradients: useGradientsStore()
		}
	},
	components: { GradientControl },
	methods: { bg(section){ return this.gradients.getCurrent(section) } }
}
</script>
