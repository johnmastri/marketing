<template>
	<div>
		<!-- Hero Section -->
		<section class="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
			<!-- Rotating Background Images -->
			<div class="absolute inset-0">
				<div class="absolute inset-0 transition-opacity duration-1000" 
					 :class="{ 'opacity-100': currentImage === 0, 'opacity-0': currentImage !== 0 }">
					<!-- Coffee shop owner serving customers -->
					<div class="w-full h-full bg-gradient-to-br from-amber-800 via-orange-600 to-yellow-700 relative">
						<div class="absolute inset-0 bg-black/30"></div>
						<div class="absolute bottom-1/3 left-1/4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
						<div class="absolute top-1/4 right-1/3 w-12 h-12 bg-amber-200/30 rounded-lg backdrop-blur-sm"></div>
						<div class="absolute center w-20 h-20 bg-orange-300/20 rounded-full backdrop-blur-sm"></div>
					</div>
				</div>
				<div class="absolute inset-0 transition-opacity duration-1000" 
					 :class="{ 'opacity-100': currentImage === 1, 'opacity-0': currentImage !== 1 }">
					<!-- Fitness coach filming story -->
					<div class="w-full h-full bg-gradient-to-br from-blue-800 via-teal-600 to-green-700 relative">
						<div class="absolute inset-0 bg-black/30"></div>
						<div class="absolute top-1/4 left-1/3 w-8 h-20 bg-white/20 rounded-full backdrop-blur-sm"></div>
						<div class="absolute bottom-1/3 right-1/4 w-14 h-14 bg-teal-200/30 rounded-lg backdrop-blur-sm"></div>
						<div class="absolute center w-24 h-16 bg-green-300/20 rounded-lg backdrop-blur-sm"></div>
					</div>
				</div>
				<div class="absolute inset-0 transition-opacity duration-1000" 
					 :class="{ 'opacity-100': currentImage === 2, 'opacity-0': currentImage !== 2 }">
					<!-- Designer adjusting garment -->
					<div class="w-full h-full bg-gradient-to-br from-purple-800 via-pink-600 to-rose-700 relative">
						<div class="absolute inset-0 bg-black/30"></div>
						<div class="absolute top-1/3 left-1/4 w-10 h-24 bg-white/20 rounded-lg backdrop-blur-sm"></div>
						<div class="absolute bottom-1/4 center w-18 h-18 bg-pink-200/30 rounded-full backdrop-blur-sm"></div>
						<div class="absolute top-1/2 right-1/3 w-12 h-8 bg-rose-300/20 rounded-lg backdrop-blur-sm"></div>
					</div>
				</div>
				<div class="absolute inset-0 transition-opacity duration-1000" 
					 :class="{ 'opacity-100': currentImage === 3, 'opacity-0': currentImage !== 3 }">
					<!-- Chef plating dish -->
					<div class="w-full h-full bg-gradient-to-br from-red-800 via-orange-600 to-yellow-600 relative">
						<div class="absolute inset-0 bg-black/30"></div>
						<div class="absolute bottom-1/4 left-1/3 w-20 h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
						<div class="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-200/30 rounded-full backdrop-blur-sm"></div>
						<div class="absolute center w-12 h-12 bg-yellow-300/20 rounded-lg backdrop-blur-sm"></div>
					</div>
				</div>
			</div>
			
			<div class="relative z-10 text-center max-w-5xl mx-auto px-6">
				<h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
					You're doing great things —<br>
					now it's time to inspire others.
				</h1>
				<p class="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
					Ai-powered smart prompts and momentum tracking turn your story into lasting growth — without the overthinking.
				</p>
				<button class="bg-white text-gray-900 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
					Get Started
				</button>
			</div>
			<GradientControl section-id="hero" />
		</section>

		<!-- Accountability Section -->
		<section class="bg-white py-20">
			<div class="max-w-7xl mx-auto px-6">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<!-- Left: Ultra-realistic image -->
					<div class="relative">
						<div class="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 relative">
							<div class="absolute inset-0 bg-black/10"></div>
							<!-- Phone mockup -->
							<div class="absolute bottom-8 right-8 w-20 h-32 bg-gray-900 rounded-lg shadow-2xl">
								<div class="w-full h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-lg p-2">
									<div class="w-full h-6 bg-white/20 rounded mb-2"></div>
									<div class="w-3/4 h-4 bg-white/30 rounded mb-1"></div>
									<div class="w-1/2 h-4 bg-white/30 rounded"></div>
								</div>
							</div>
							<!-- Person silhouette -->
							<div class="absolute center w-24 h-40 bg-gray-800/30 rounded-full backdrop-blur-sm"></div>
						</div>
					</div>
					
					<!-- Right: Copy -->
					<div class="space-y-8">
						<h2 class="text-4xl md:text-5xl font-bold text-gray-900">
							You have enough to think about.
						</h2>
						<p class="text-xl text-gray-600 leading-relaxed">
							Consystnt takes the guesswork out of being seen by the right people with intelligent prompts designed just for you — less thinking, more connecting.
						</p>
						<!-- <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
							<p class="text-lg font-medium text-purple-900">
								Less thinking, more connecting.
							</p>
						</div> -->
					</div>
				</div>
			</div>
			<GradientControl section-id="accountability" />
		</section>

		<!-- Streaks Section -->
		<section class="bg-black py-20">
			<div class="max-w-4xl mx-auto text-center px-6">
				<!-- Smartphone showing streak counter -->
				<div class="flex justify-center mb-12">
					<div class="relative">
						<div class="w-64 h-96 bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
							<div class="w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-6 text-white">
								<div class="text-center">
									<div class="text-6xl font-bold text-green-400 mb-4">27</div>
									<div class="text-lg mb-2">Day Streak</div>
									<div class="text-sm opacity-70 mb-8">Keep it going!</div>
									
									<div class="space-y-3">
										<div class="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
											<span class="text-sm">Daily Post</span>
											<div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
												<span class="text-xs">✓</span>
											</div>
										</div>
										<div class="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
											<span class="text-sm">Engage with Community</span>
											<div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
												<span class="text-xs">✓</span>
											</div>
										</div>
										<div class="flex items-center justify-between bg-gray-700 p-3 rounded-lg opacity-50">
											<span class="text-sm">Story Update</span>
											<div class="w-6 h-6 bg-gray-600 rounded-full"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<!-- Glow effect -->
						<div class="absolute -inset-4 bg-green-400/20 rounded-[3rem] blur-xl"></div>
					</div>
				</div>
				
				<h2 class="text-4xl md:text-6xl font-bold text-white mb-8">
					Build your streaks. Grow your influence.
				</h2>
				<p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
					Every completed action adds to your streak, creating visible proof 
					of your commitment — and momentum your audience can feel.
				</p>
			</div>
			<GradientControl section-id="streaks" />
		</section>

		<!-- Community Section -->
		<section class="bg-white py-20">
			<div class="max-w-6xl mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
						You're not alone.
					</h2>
					<p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Join a community of creators and entrepreneurs on the same journey. 
						Learn, grow, and get inspired by others who are showing up every day.
					</p>
				</div>
				
				<!-- Photorealistic group collage -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="space-y-6">
						<!-- Fitness influencer -->
						<div class="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-400 via-teal-500 to-green-600 relative overflow-hidden">
							<div class="absolute inset-0 bg-black/20"></div>
							<div class="absolute bottom-4 left-4 right-4">
								<div class="bg-white/90 backdrop-blur-sm rounded-lg p-3">
									<div class="flex items-center gap-2">
										<div class="w-8 h-8 bg-green-500 rounded-full"></div>
										<div>
											<div class="text-sm font-semibold">@FitJourney</div>
											<div class="text-xs text-gray-600">15-day streak</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Exercise equipment mockup -->
							<div class="absolute top-1/4 right-4 w-16 h-20 bg-gray-800/40 rounded-lg backdrop-blur-sm"></div>
						</div>
					</div>
					
					<div class="space-y-6">
						<!-- Chef -->
						<div class="aspect-[3/4] rounded-2xl bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 relative overflow-hidden">
							<div class="absolute inset-0 bg-black/20"></div>
							<div class="absolute bottom-4 left-4 right-4">
								<div class="bg-white/90 backdrop-blur-sm rounded-lg p-3">
									<div class="flex items-center gap-2">
										<div class="w-8 h-8 bg-orange-500 rounded-full"></div>
										<div>
											<div class="text-sm font-semibold">@ChefLife</div>
											<div class="text-xs text-gray-600">42-day streak</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Cooking elements -->
							<div class="absolute top-1/3 left-4 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm"></div>
							<div class="absolute top-1/4 right-6 w-8 h-16 bg-yellow-300/40 rounded-lg backdrop-blur-sm"></div>
						</div>
					</div>
					
					<div class="space-y-6">
						<!-- Freelancer -->
						<div class="aspect-[3/4] rounded-2xl bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-600 relative overflow-hidden">
							<div class="absolute inset-0 bg-black/20"></div>
							<div class="absolute bottom-4 left-4 right-4">
								<div class="bg-white/90 backdrop-blur-sm rounded-lg p-3">
									<div class="flex items-center gap-2">
										<div class="w-8 h-8 bg-purple-500 rounded-full"></div>
										<div>
											<div class="text-sm font-semibold">@DesignDaily</div>
											<div class="text-xs text-gray-600">8-day streak</div>
										</div>
									</div>
								</div>
							</div>
							<!-- Design tools -->
							<div class="absolute top-1/4 left-4 w-20 h-12 bg-white/30 rounded-lg backdrop-blur-sm"></div>
							<div class="absolute center w-14 h-14 bg-indigo-300/40 rounded-lg backdrop-blur-sm"></div>
						</div>
					</div>
				</div>
			</div>
			<GradientControl section-id="community" />
		</section>

		<!-- Humanity Section -->
		<section class="relative py-32 overflow-hidden">
			<!-- Cinematic full-width lifestyle photo -->
			<div class="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600">
				<div class="absolute inset-0 bg-black/40"></div>
				<!-- Small business owner with customers scene -->
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-30">
						<div class="space-y-4">
							<div class="w-full h-32 bg-white/20 rounded-lg backdrop-blur-sm"></div>
							<div class="w-3/4 h-24 bg-white/15 rounded-lg backdrop-blur-sm"></div>
						</div>
						<div class="space-y-4">
							<div class="w-full h-40 bg-white/25 rounded-lg backdrop-blur-sm"></div>
							<div class="w-1/2 h-16 bg-white/15 rounded-lg backdrop-blur-sm"></div>
						</div>
						<div class="space-y-4">
							<div class="w-full h-28 bg-white/20 rounded-lg backdrop-blur-sm"></div>
							<div class="w-4/5 h-20 bg-white/15 rounded-lg backdrop-blur-sm"></div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
				<h2 class="text-4xl md:text-6xl font-bold mb-8">
					Real people. Real stories.
				</h2>
				<p class="text-xl md:text-2xl opacity-90 leading-relaxed">
					Your humanity is what connects with people. 
					Consystnt just makes sure the world sees it.
				</p>
			</div>
			<GradientControl section-id="humanity" />
		</section>

		<!-- AI Support Section -->
		<section class="bg-gray-900 py-20">
			<div class="max-w-6xl mx-auto px-6 text-white">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-6xl font-bold mb-6">
						AI that supports, not replaces.
					</h2>
					<p class="text-xl opacity-80 max-w-4xl mx-auto">
						Plan, curate, and direct with AI coaching — but always keep 
						your human voice at the center.
					</p>
				</div>
				
				<!-- Mirror → Blueprint → Action Cards flow -->
				<div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
					<div class="text-center group">
						<div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
							<div class="text-4xl">🪞</div>
						</div>
						<h3 class="text-xl font-semibold mb-2">Mirror</h3>
						<p class="text-sm opacity-70">Analyze your authentic style</p>
						
						<!-- Subtle UI overlay -->
						<div class="mt-4 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
							<div class="space-y-2">
								<div class="h-2 bg-blue-400/50 rounded w-full"></div>
								<div class="h-2 bg-blue-400/30 rounded w-3/4"></div>
								<div class="h-2 bg-blue-400/20 rounded w-1/2"></div>
							</div>
						</div>
					</div>
					
					<div class="text-4xl opacity-50 hidden md:block">→</div>
					<div class="text-2xl opacity-50 md:hidden">↓</div>
					
					<div class="text-center group">
						<div class="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
							<div class="text-4xl">📋</div>
						</div>
						<h3 class="text-xl font-semibold mb-2">Blueprint</h3>
						<p class="text-sm opacity-70">Create your personalized plan</p>
						
						<div class="mt-4 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
							<div class="space-y-2">
								<div class="flex items-center gap-2">
									<div class="w-3 h-3 bg-green-400 rounded-full"></div>
									<div class="h-2 bg-green-400/50 rounded flex-1"></div>
								</div>
								<div class="flex items-center gap-2">
									<div class="w-3 h-3 bg-green-400 rounded-full"></div>
									<div class="h-2 bg-green-400/50 rounded flex-1"></div>
								</div>
								<div class="flex items-center gap-2">
									<div class="w-3 h-3 bg-gray-400 rounded-full"></div>
									<div class="h-2 bg-gray-400/30 rounded flex-1"></div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="text-4xl opacity-50 hidden md:block">→</div>
					<div class="text-2xl opacity-50 md:hidden">↓</div>
					
					<div class="text-center group">
						<div class="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
							<div class="text-4xl">🎯</div>
						</div>
						<h3 class="text-xl font-semibold mb-2">Action Cards</h3>
						<p class="text-sm opacity-70">Execute with accountability</p>
						
						<div class="mt-4 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
							<div class="flex items-center justify-between mb-2">
								<span class="text-xs">Daily Post</span>
								<div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-xs">:47</div>
							</div>
							<div class="w-full h-2 bg-gray-600 rounded">
								<div class="h-2 bg-purple-400 rounded w-3/4"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<GradientControl section-id="ai-support" />
		</section>

		<!-- Closing CTA -->
		<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
			<!-- Full-bleed lifestyle photo -->
			<div class="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-800">
				<div class="absolute inset-0 bg-black/50"></div>
				<!-- Empowered business owner scene -->
				<div class="absolute inset-0 opacity-20">
					<div class="grid grid-cols-4 md:grid-cols-8 gap-4 h-full p-8">
						<div class="bg-white/10 rounded-lg backdrop-blur-sm"></div>
						<div class="bg-white/15 rounded-lg backdrop-blur-sm"></div>
						<div class="bg-white/10 rounded-lg backdrop-blur-sm"></div>
						<div class="bg-white/20 rounded-lg backdrop-blur-sm"></div>
						<div class="bg-white/15 rounded-lg backdrop-blur-sm"></div>
						<div class="bg-white/10 rounded-lg backdrop-blur-sm"></div>
						<div class="bg-white/20 rounded-lg backdrop-blur-sm"></div>
						<div class="bg-white/15 rounded-lg backdrop-blur-sm"></div>
					</div>
				</div>
			</div>
			
			<div class="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
				<h2 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
					Focus on your work.<br>
					Consystnt keeps you accountable.
				</h2>
				
				<button class="bg-white text-gray-900 px-16 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors">
					Get Started Free
				</button>
			</div>
			<GradientControl section-id="closing" />
		</section>
	</div>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'

export default {
	name: 'Human',
	components: {
		GradientControl
	},
	data() {
		return {
			currentImage: 0,
			images: [
				'coffee-shop',
				'fitness-coach', 
				'designer',
				'chef'
			]
		}
	},
	mounted() {
		// Rotate hero background images
		setInterval(() => {
			this.currentImage = (this.currentImage + 1) % this.images.length
		}, 4000)
	}
}
</script>

<style scoped>
.center {
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
