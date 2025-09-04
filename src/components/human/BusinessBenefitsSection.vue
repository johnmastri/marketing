<template>
	<section class="bg-black py-20">
		<div class="max-w-6xl mx-auto px-6">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
					Consistently grow your brand
				</h2>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Guides & Coaches -->
				<div class="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors">
					<div class="text-4xl mb-4">🔥</div>
					<h3 class="text-xl font-bold text-white mb-4">Guides & Coaches</h3>
					<p class="text-gray-400 text-sm mb-6 leading-relaxed">
						Business coaches, life coaches, fitness trainers
					</p>
					<p class="text-white font-medium">
						→ Build trust by showing up consistently
					</p>
				</div>

				<!-- Local Businesses -->
				<div class="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors">
					<div class="text-4xl mb-4">🏪</div>
					<h3 class="text-xl font-bold text-white mb-4">Local Businesses</h3>
					<p class="text-gray-400 text-sm mb-6 leading-relaxed">
						Coffee shops, salons, boutiques, restaurants
					</p>
					<p class="text-white font-medium">
						→ Make your community impact visible
					</p>
				</div>

				<!-- Creative Professionals -->
				<div class="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors">
					<div class="text-4xl mb-4">🎨</div>
					<h3 class="text-xl font-bold text-white mb-4">Creative Professionals</h3>
					<p class="text-gray-400 text-sm mb-6 leading-relaxed">
						Designers, writers, photographers, musicians
					</p>
					<p class="text-white font-medium">
						→ Share your process and grow your audience
					</p>
				</div>

				<!-- Health & Wellness -->
				<div class="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors">
					<div class="text-4xl mb-4">🏥</div>
					<h3 class="text-xl font-bold text-white mb-4">Health & Wellness</h3>
					<p class="text-gray-400 text-sm mb-6 leading-relaxed">
						Therapists, nutritionists, yoga instructors
					</p>
					<p class="text-white font-medium">
						→ Inspire healthier lives through your story
					</p>
				</div>

				<!-- Real Estate & Finance -->
				<div class="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors">
					<div class="text-4xl mb-4">🏠</div>
					<h3 class="text-xl font-bold text-white mb-4">Real Estate & Finance</h3>
					<p class="text-gray-400 text-sm mb-6 leading-relaxed">
						Realtors, mortgage brokers, advisors
					</p>
					<p class="text-white font-medium">
						→ Establish expertise and credibility
					</p>
				</div>

				<!-- Educators & Experts -->
				<div class="bg-gray-900 rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors">
					<div class="text-4xl mb-4">📚</div>
					<h3 class="text-xl font-bold text-white mb-4">Educators & Experts</h3>
					<p class="text-gray-400 text-sm mb-6 leading-relaxed">
						Course creators, tutors, thought leaders
					</p>
					<p class="text-white font-medium">
						→ Build authority and a personal brand
					</p>
				</div>
			</div>

			<div class="text-center mt-16">
				<p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
					Every business owner deserves to be seen. Consystnt makes consistent content creation effortless — so you can focus on what you do best.
				</p>
			</div>
		</div>
		<GradientControl section-id="benefits" />
	</section>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'

export default {
	name: 'BusinessBenefitsSection',
	components: {
		GradientControl
	}
}
</script>
