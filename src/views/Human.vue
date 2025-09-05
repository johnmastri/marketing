<template>
	<div>
		<!-- Hero Section -->
		<section class="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
			<!-- Fullscreen Background Video -->
			<div class="hero-video-container">
				<video class="hero-video" autoplay muted loop playsinline>
					<source :src="selectedVideo" type="video/mp4">
				</video>
			</div>
			<div class="hero-video-overlay" :style="{ opacity: videoOverlayOpacity }"></div>
			
			<div class="header-holder">
				<h1 class="main-header">
					<!-- You're doing great things —<br> -->
					You're doing great things in your business — <br></br> 
					<b>Consystnt helps you share your story with others.</b>
				</h1>
				<p class="header-subhead">
					AI-powered accountability and coaching turns your brand's story into lasting growth on social media — without the overthinking.
				</p>
				<button class="get-started-button">
					Get Started
				</button>
			</div>
		</section>

		<!-- Accountability Section -->
		<section class="bg-white py-20 min-h-screen story-holder">
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
						<div class="main-header accountability">
							Seriously, you have enough to think about.
						</div>
						<p class="header-subhead black">
							Consystnt <b>takes the guesswork out of being seen</b> by the right people with actionable prompts that guide what to post, when to post, and how to connect with your audience.
						</p>
						<p class="header-subhead black bold">
						The truth is <span style="font-style:italic">your voice</span> is the missing piece of your marketing.
					</p>
						<ul class="bullets">
							<li><strong>Know exactly what to post</strong> - tailored prompts designed for your brand and audience.</li>
							<li><strong>Stay on schedule</strong> - reminders and timing cues so your posts land when they’ll have impact.</li>
							<li><strong>Build real engagement</strong> - guidance on how to interact and grow your audience authentically.</li>
							<li><strong>Reduce overwhelm</strong> - focus on your work while Consystnt keeps your social presence active.</li>
						</ul>
						<div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
							<p class="text-lg font-medium text-purple-900">
								The goal: less thinking, more connecting.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Business Stories Section -->
		<section class="bg-black min-h-screen story-holder">
			<div class="story-holder">
				<h2 class="text-4xl font-bold text-white text-center mb-8">
					You already know your stuff. Now it's time to get consistent.
				</h2>
				<BusinessStoryCard />
			</div>
		</section>

		<SpotlightCarousel />

		<!-- AI Support Section -->
		<section class="bg-gray-900 py-20">
			<div class="max-w-6xl mx-auto px-6 text-white">
				<div class="text-center mb-16">
					<p class="text-xl opacity-80 max-w-4xl mx-auto">
						How it works.
					</p>
					<h2 class="text-4xl md:text-6xl font-bold mb-6">
						AI that supports, not replaces.
					</h2>
					<p class="text-xl opacity-80 max-w-4xl mx-auto">
						An extensive intake captures your goals and voice. Our AI translates them into clear, actionable steps — plus the option to generate content for your feed or get coached through the process..
					</p>
				</div>
				
				<!-- Mirror → Blueprint → Action Cards flow -->
				<div class="flex flex-col  items-center justify-center gap-8 md:gap-16">
					<div class="text-center group">
						<div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
							<div class="text-4xl">🪞</div>
						</div>
						<h3 class="text-xl font-semibold mb-2">Audit</h3>
						<p class="text-sm opacity-70">Analyze your authentic style</p>
						
						(intake: personal + business + style)

AI-powered intake to capture you and your brand

Share your wins, struggles, and style—get a smart assessment

Define how you want to show up: authentic, faceless, or AI-assisted

Your personal + business audit, powered by AI
					</div>
					
					<div class="text-4xl opacity-50 hidden md:block">→</div>
					<div class="text-2xl opacity-50 md:hidden">↓</div>
					
					<div class="text-center group">
						<div class="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
							<div class="text-4xl">📋</div>
						</div>
						<h3 class="text-xl font-semibold mb-2">Align</h3>
						<p class="text-sm opacity-70">Create your personalized plan</p>
						
						(competition + metrics + positioning)

Benchmark yourself against competitors and industry standards

See where you stand—and the gaps you can close

AI metrics reveal your path to growth

Turn assessment into a clear competitive strategy
					</div>
					
					<div class="text-4xl opacity-50 hidden md:block">→</div>
					<div class="text-2xl opacity-50 md:hidden">↓</div>
					
					<div class="text-center group">
						<div class="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
							<div class="text-4xl">🎯</div>
						</div>
						<h3 class="text-xl font-semibold mb-2">Action/Automate</h3>
						<p class="text-sm opacity-70">Execute with accountability</p>
						
						(personalized action cards, with preview/blur for signup)

Preview your first action cards—sign up to unlock the rest

Your roadmap comes alive with guided actions

Daily, personalized action cards to keep you consistent

Take the first step now. The rest unlock when you’re ready.
					</div>
				</div>
			</div>
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
					 The fastest way to grow your audience - consistently. 
					 <!--"The fastest way to grow your audience and stay consistent. Get Consystnt. -->
				</h2>
				
				<button class="bg-white text-gray-900 px-16 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors">
					Get Consystnt
				</button>
			</div>
			<GradientControl section-id="closing" />
		</section>
	</div>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'
import BusinessStoryCard from '@/components/human/BusinessStoryCard.vue'
import SpotlightCarousel from '@/components/human/SpotlightCarousel.vue'

export default {
	name: 'Human',
	components: {
		GradientControl,
		BusinessStoryCard,
		SpotlightCarousel
	},
	data() {
		return {
			selectedVideo: '',
			videoOverlayOpacity: 0.6,
			videoSources: [
				'/videos/u5562559549_Mid-40s_woman_arranging_flowers_in_her_small_bout_2d7d6adb-1b38-409d-853c-d5311cf5be92_2.mp4',
				'/videos/u5562559549_Mid-40s_female_entrepreneur_hosting_a_mastermind__1f3935a3-32cf-41fa-9d01-4080d897d5c1_3.mp4',
				'/videos/u5562559549_Mid-50s_female_wellness_instructor_leading_a_yoga_5753eeff-7c52-457d-9f49-97a46fe7dee4_2.mp4',
				'/videos/u5562559549_Mid-50s_female_wellness_instructor_leading_a_yoga_3779c0c5-f1f4-4170-bbc7-8f1312b187b2_0.mp4'
			]
		}
	},
	mounted() {
		const index = Math.floor(Math.random() * this.videoSources.length)
		this.selectedVideo = this.videoSources[index]
	}
}
</script>

<style scoped>

.hero-video-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 0;
}

.hero-video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.hero-video-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 1;
	pointer-events: none;
}

.story-holder {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.header-holder {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	max-width: 550px;
	position: relative;
	z-index: 2;
}

.main-header {
	font-size: 40px;
	line-height: 1.1;
	font-weight: 500;
	letter-spacing: -0.015em;
}

.accountability {
	color: black;
	font-weight: 600;
	letter-spacing: -.03em;
}

.black {
	color: black;
}

.bold {
	font-size: 20px;
	font-weight: 600;
}

.header-subhead {
	font-size: 18px;
	letter-spacing: -.03em;
}


.get-started-button {
	color: black;
	padding: 10px 30px;
	background-color: white;
	border-radius: 24px;
	max-width: 150px;
	font-weight: 600;
}

.center {
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.bullets {
	color: black;
	font-size: 15px;
}

</style>
