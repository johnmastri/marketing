<template>
	<div>
		<!-- Hero Section -->
		<section class="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
			<!-- Creator Montage Background -->
			<div class="absolute inset-0 opacity-20">
				<div class="grid grid-cols-6 gap-4 h-full p-8">
					<div class="bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg"></div>
					<div class="bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg"></div>
					<div class="bg-gradient-to-br from-green-400 to-teal-600 rounded-lg"></div>
					<div class="bg-gradient-to-br from-orange-400 to-red-600 rounded-lg"></div>
					<div class="bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg"></div>
					<div class="bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg"></div>
				</div>
			</div>
			
			<div class="relative z-10 text-center max-w-4xl mx-auto px-6">
				<h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight">
					Consistency Creates Growth.
				</h1>
				<p class="text-xl md:text-2xl mb-12 opacity-90">
					AI-powered accountability for creators & small businesses.
				</p>
				<button class="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
					Get Your Blueprint
				</button>
				
				<!-- Secondary Visual - Action Card Mockup -->
				<div class="mt-16 flex justify-center">
					<div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
						<div class="flex items-center gap-4 mb-4">
							<div class="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
							<span class="text-sm">Action Card Active</span>
						</div>
						<div class="w-24 h-24 rounded-full border-4 border-white/30 relative">
							<div class="absolute inset-0 rounded-full border-4 border-green-400 animate-spin" style="border-right-color: transparent;"></div>
						</div>
						<div class="mt-4 text-sm">Consistency Score: 87% ↗</div>
					</div>
				</div>
			</div>
			<GradientControl section-id="hero" />
		</section>

		<!-- Trust / Proof Section -->
		<section class="bg-black py-20">
			<div class="max-w-4xl mx-auto text-center px-6">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
					<div>
						<div class="text-4xl md:text-5xl font-bold mb-4">10K+</div>
						<div class="text-lg opacity-80">Hours of Content Created</div>
					</div>
					<div>
						<div class="text-4xl md:text-5xl font-bold mb-4">200%</div>
						<div class="text-lg opacity-80">Average Engagement Increase</div>
					</div>
					<div>
						<div class="text-4xl md:text-5xl font-bold mb-4">500+</div>
						<div class="text-lg opacity-80">Artists & Businesses Helped</div>
					</div>
				</div>
			</div>
			<GradientControl section-id="trust" />
		</section>

		<!-- Platform Overview -->
		<section class="bg-white py-20">
			<div class="max-w-6xl mx-auto px-6">
				<h2 class="text-4xl md:text-6xl font-bold text-center mb-4 text-gray-900">
					Stay Accountable. Stay Seen. Stay Consystnt.
				</h2>
				
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
					<div class="text-center p-6">
						<div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
							<div class="w-8 h-8 bg-purple-600 rounded"></div>
						</div>
						<h3 class="font-semibold text-lg text-gray-900">Action Cards</h3>
					</div>
					<div class="text-center p-6">
						<div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
							<div class="w-8 h-8 bg-blue-600 rounded-full"></div>
						</div>
						<h3 class="font-semibold text-lg text-gray-900">Consistency Score</h3>
					</div>
					<div class="text-center p-6">
						<div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
							<div class="w-8 h-8 bg-green-600 rounded-lg transform rotate-45"></div>
						</div>
						<h3 class="font-semibold text-lg text-gray-900">Blueprint Generator</h3>
					</div>
					<div class="text-center p-6">
						<div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
							<div class="w-8 h-8 bg-orange-600 rounded-full"></div>
						</div>
						<h3 class="font-semibold text-lg text-gray-900">Social Growth Tracking</h3>
					</div>
				</div>
			</div>
			<GradientControl section-id="overview" />
		</section>

		<!-- Feature Deep-Dive Carousel -->
		<section class="bg-gray-50 py-20">
			<div class="max-w-6xl mx-auto px-6">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Features That Drive Results
					</h2>
				</div>
				
				<div class="carousel-container overflow-hidden">
					<div class="carousel-track flex transition-transform duration-500" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
						<!-- Slide 1: Action Card -->
						<div class="carousel-slide w-full flex-shrink-0 flex items-center">
							<div class="w-1/2 pr-12">
								<div class="bg-white rounded-2xl p-8 shadow-xl">
									<div class="flex items-center justify-between mb-6">
										<h3 class="text-xl font-semibold">Daily Content Card</h3>
										<div class="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
											:45
										</div>
									</div>
									<div class="space-y-4">
										<div class="h-3 bg-gray-200 rounded"></div>
										<div class="h-3 bg-gray-200 rounded w-3/4"></div>
										<div class="h-3 bg-gray-200 rounded w-1/2"></div>
									</div>
									<button class="w-full bg-purple-600 text-white py-3 rounded-lg mt-6">
										Complete Task
									</button>
								</div>
							</div>
							<div class="w-1/2 pl-12">
								<h3 class="text-3xl font-bold text-gray-900 mb-4">Never Miss a Post</h3>
								<p class="text-lg text-gray-600">Action cards with built-in timers keep you on track with gentle accountability.</p>
							</div>
						</div>
						
						<!-- Slide 2: Consistency Score -->
						<div class="carousel-slide w-full flex-shrink-0 flex items-center">
							<div class="w-1/2 pr-12">
								<div class="bg-white rounded-2xl p-8 shadow-xl">
									<div class="text-center">
										<div class="text-6xl font-bold text-green-600 mb-4">92%</div>
										<div class="text-lg text-gray-600 mb-6">Consistency Score</div>
										<div class="space-y-2">
											<div class="flex justify-between text-sm">
												<span>Daily Posts</span>
												<span class="text-green-600">✓ 28/30</span>
											</div>
											<div class="flex justify-between text-sm">
												<span>Engagement Rate</span>
												<span class="text-green-600">↗ +15%</span>
											</div>
											<div class="flex justify-between text-sm">
												<span>Brand Consistency</span>
												<span class="text-green-600">✓ 95%</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="w-1/2 pl-12">
								<h3 class="text-3xl font-bold text-gray-900 mb-4">See Your Growth in Real Time</h3>
								<p class="text-lg text-gray-600">Track your consistency score and watch your engagement grow as you build better habits.</p>
							</div>
						</div>
						
						<!-- Slide 3: Blueprint -->
						<div class="carousel-slide w-full flex-shrink-0 flex items-center">
							<div class="w-1/2 pr-12">
								<div class="bg-white rounded-2xl p-8 shadow-xl">
									<h4 class="text-lg font-semibold mb-4">Your Content Roadmap</h4>
									<div class="space-y-3">
										<div class="flex items-center gap-3">
											<div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
											<span class="text-sm">Week 1: Brand Foundation</span>
										</div>
										<div class="flex items-center gap-3">
											<div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
											<span class="text-sm">Week 2: Content Pillars</span>
										</div>
										<div class="flex items-center gap-3">
											<div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">3</div>
											<span class="text-sm">Week 3: Engagement Strategy</span>
										</div>
										<div class="flex items-center gap-3">
											<div class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">4</div>
											<span class="text-sm text-gray-500">Week 4: Growth Optimization</span>
										</div>
									</div>
								</div>
							</div>
							<div class="w-1/2 pl-12">
								<h3 class="text-3xl font-bold text-gray-900 mb-4">A Plan Tailored to You</h3>
								<p class="text-lg text-gray-600">Get a personalized roadmap based on your goals, audience, and current performance.</p>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Carousel Navigation -->
				<div class="flex justify-center mt-8 gap-2">
					<button v-for="(slide, index) in 3" :key="index" 
						@click="currentSlide = index"
						:class="['w-3 h-3 rounded-full transition-colors', currentSlide === index ? 'bg-purple-600' : 'bg-gray-300']">
					</button>
				</div>
			</div>
			<GradientControl section-id="features" />
		</section>

		<!-- AI Section -->
		<section class="bg-gray-900 py-20">
			<div class="max-w-6xl mx-auto px-6 text-white">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-6xl font-bold mb-6">
						AI that Coaches, Not Just Posts.
					</h2>
					<p class="text-xl opacity-80 max-w-3xl mx-auto">
						Our AI analyzes your unique style, audience, and goals to create a personalized growth strategy.
					</p>
				</div>
				
				<!-- AI Flow Visual -->
				<div class="flex items-center justify-center gap-8 mt-16">
					<div class="text-center">
						<div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<div class="text-2xl">🪞</div>
						</div>
						<div class="text-sm">Mirror</div>
						<div class="text-xs opacity-70">Analyze your style</div>
					</div>
					<div class="text-4xl opacity-50">→</div>
					<div class="text-center">
						<div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<div class="text-2xl">📋</div>
						</div>
						<div class="text-sm">Blueprint</div>
						<div class="text-xs opacity-70">Create your plan</div>
					</div>
					<div class="text-4xl opacity-50">→</div>
					<div class="text-center">
						<div class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<div class="text-2xl">🎯</div>
						</div>
						<div class="text-sm">Action Card</div>
						<div class="text-xs opacity-70">Execute daily</div>
					</div>
				</div>
			</div>
			<GradientControl section-id="ai" />
		</section>

		<!-- Interactive Tool -->
		<section class="bg-black py-20">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<h2 class="text-4xl md:text-5xl font-bold text-white mb-12">
					What's Your Consistency Score?
				</h2>
				
				<div class="bg-gray-900 rounded-2xl p-8 max-w-2xl mx-auto">
					<div v-if="!showScore" class="space-y-6">
						<div class="text-left">
							<label class="block text-white mb-2">How often do you post content?</label>
							<select v-model="quiz.frequency" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700">
								<option value="">Select frequency...</option>
								<option value="daily">Daily</option>
								<option value="few-times-week">Few times a week</option>
								<option value="weekly">Weekly</option>
								<option value="monthly">Monthly or less</option>
							</select>
						</div>
						
						<div class="text-left">
							<label class="block text-white mb-2">How consistent is your brand across platforms?</label>
							<select v-model="quiz.consistency" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700">
								<option value="">Select consistency...</option>
								<option value="very">Very consistent</option>
								<option value="somewhat">Somewhat consistent</option>
								<option value="not-very">Not very consistent</option>
								<option value="not-at-all">Not at all</option>
							</select>
						</div>
						
						<div class="text-left">
							<label class="block text-white mb-2">How do you track your content performance?</label>
							<select v-model="quiz.tracking" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700">
								<option value="">Select tracking method...</option>
								<option value="detailed">Detailed analytics and KPIs</option>
								<option value="basic">Basic metrics occasionally</option>
								<option value="rarely">Rarely check metrics</option>
								<option value="never">Never track performance</option>
							</select>
						</div>
						
						<button @click="calculateScore" 
							:disabled="!canCalculate"
							:class="['w-full py-3 rounded-lg font-semibold transition-colors', canCalculate ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-700 text-gray-400 cursor-not-allowed']">
							Calculate My Score
						</button>
					</div>
					
					<div v-else class="text-center">
						<div class="text-6xl font-bold text-purple-400 mb-4">{{ consistencyScore }}%</div>
						<div class="text-xl text-white mb-6">Your Consistency Score</div>
						<div class="text-gray-300 mb-8">{{ getScoreMessage() }}</div>
						<button class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
							Get Full Blueprint Free
						</button>
					</div>
				</div>
			</div>
			<GradientControl section-id="interactive" />
		</section>

		<!-- Social Proof Showcase -->
		<section class="bg-white py-20">
			<div class="max-w-6xl mx-auto px-6">
				<h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
					Real Results from Real Creators
				</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div v-for="testimonial in testimonials" :key="testimonial.id" 
						 class="bg-gray-50 rounded-2xl p-6 transition-transform hover:scale-105">
						<div class="flex items-center gap-4 mb-4">
							<div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
							<div>
								<div class="font-semibold">{{ testimonial.name }}</div>
								<div class="text-sm text-gray-600">{{ testimonial.type }}</div>
							</div>
						</div>
						<div class="space-y-2 mb-4">
							<div class="flex justify-between text-sm">
								<span>Before:</span>
								<span>{{ testimonial.before }}</span>
							</div>
							<div class="flex justify-between text-sm">
								<span>After:</span>
								<span class="text-green-600 font-semibold">{{ testimonial.after }}</span>
							</div>
						</div>
						<p class="text-gray-700">{{ testimonial.quote }}</p>
					</div>
				</div>
			</div>
			<GradientControl section-id="social-proof" />
		</section>

		<!-- Support & Education -->
		<section class="bg-gray-100 py-20">
			<div class="max-w-6xl mx-auto px-6">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
					<div class="p-8">
						<div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
							<div class="text-2xl">📚</div>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">How Consystnt Works</h3>
						<p class="text-gray-600">Learn the proven methodology behind consistent content success.</p>
					</div>
					<div class="p-8">
						<div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
							<div class="text-2xl">📈</div>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">Case Studies</h3>
						<p class="text-gray-600">Real examples of creators who transformed their growth with consistency.</p>
					</div>
					<div class="p-8">
						<div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
							<div class="text-2xl">💬</div>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
						<p class="text-gray-600">Get help whenever you need it on your consistency journey.</p>
					</div>
				</div>
			</div>
			<GradientControl section-id="support" />
		</section>

		<!-- Closing CTA -->
		<section class="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
			<div class="max-w-4xl mx-auto text-center px-6 text-white">
				<!-- Animated Countdown Circle -->
				<div class="flex justify-center mb-8">
					<div class="relative w-32 h-32">
						<div class="absolute inset-0 rounded-full border-4 border-white/30"></div>
						<div class="absolute inset-0 rounded-full border-4 border-green-400 animate-spin" 
							 :style="{ borderRightColor: 'transparent', borderTopColor: 'transparent' }"></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="text-2xl font-bold">{{ animatedPercentage }}%</div>
						</div>
					</div>
				</div>
				
				<h2 class="text-4xl md:text-6xl font-bold mb-8">
					Start Building Consistency Today.
				</h2>
				
				<p class="text-xl opacity-90 mb-12">
					Join thousands of creators who've transformed their growth with AI-powered accountability.
				</p>
				
				<button class="bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
					Get Started Free
				</button>
			</div>
			<GradientControl section-id="closing" />
		</section>

		<!-- Footer -->
		<footer class="bg-black py-16">
			<div class="max-w-6xl mx-auto px-6">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
					<div>
						<h4 class="text-white font-semibold mb-4">Product</h4>
						<ul class="space-y-2 text-sm">
							<li><a href="#" class="hover:text-white transition-colors">Action Cards</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Consistency Score</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Blueprint Generator</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Analytics</a></li>
						</ul>
					</div>
					<div>
						<h4 class="text-white font-semibold mb-4">Resources</h4>
						<ul class="space-y-2 text-sm">
							<li><a href="#" class="hover:text-white transition-colors">How It Works</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Case Studies</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Templates</a></li>
						</ul>
					</div>
					<div>
						<h4 class="text-white font-semibold mb-4">Company</h4>
						<ul class="space-y-2 text-sm">
							<li><a href="#" class="hover:text-white transition-colors">About</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Press</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
						</ul>
					</div>
					<div>
						<h4 class="text-white font-semibold mb-4">Support</h4>
						<ul class="space-y-2 text-sm">
							<li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Community</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
							<li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
						</ul>
					</div>
				</div>
				
				<div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
					<p>&copy; 2024 Consystnt. All rights reserved.</p>
				</div>
			</div>
			<GradientControl section-id="footer" />
		</footer>
	</div>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'

export default {
	name: 'Blueprint',
	components: {
		GradientControl
	},
	data() {
		return {
			currentSlide: 0,
			showScore: false,
			consistencyScore: 0,
			animatedPercentage: 0,
			quiz: {
				frequency: '',
				consistency: '',
				tracking: ''
			},
			testimonials: [
				{
					id: 1,
					name: 'Sarah Chen',
					type: 'Music Producer',
					before: '2K followers',
					after: '15K followers',
					quote: 'The accountability system changed everything. I went from posting sporadically to building a real fanbase.'
				},
				{
					id: 2,
					name: 'Marcus Rivera',
					type: 'Fitness Coach',
					before: '500 avg likes',
					after: '2.3K avg likes',
					quote: 'My engagement exploded once I started following the blueprint. Consistency really does create growth.'
				},
				{
					id: 3,
					name: 'Lily Thompson',
					type: 'Small Business Owner',
					before: '10% posting consistency',
					after: '95% posting consistency',
					quote: 'The action cards keep me accountable. I never miss a post anymore and my sales have tripled.'
				}
			]
		}
	},
	computed: {
		canCalculate() {
			return this.quiz.frequency && this.quiz.consistency && this.quiz.tracking
		}
	},
	mounted() {
		// Auto-advance carousel
		setInterval(() => {
			this.currentSlide = (this.currentSlide + 1) % 3
		}, 5000)
		
		// Animate closing CTA percentage
		this.animatePercentage()
	},
	methods: {
		calculateScore() {
			if (!this.canCalculate) return
			
			let score = 0
			
			// Frequency scoring
			switch(this.quiz.frequency) {
				case 'daily': score += 40; break
				case 'few-times-week': score += 30; break
				case 'weekly': score += 20; break
				case 'monthly': score += 10; break
			}
			
			// Consistency scoring
			switch(this.quiz.consistency) {
				case 'very': score += 30; break
				case 'somewhat': score += 20; break
				case 'not-very': score += 10; break
				case 'not-at-all': score += 5; break
			}
			
			// Tracking scoring
			switch(this.quiz.tracking) {
				case 'detailed': score += 30; break
				case 'basic': score += 20; break
				case 'rarely': score += 10; break
				case 'never': score += 5; break
			}
			
			this.consistencyScore = score
			this.showScore = true
		},
		
		getScoreMessage() {
			if (this.consistencyScore >= 80) {
				return "Excellent! You're already building strong consistency habits."
			} else if (this.consistencyScore >= 60) {
				return "Good foundation! Some tweaks could boost your growth significantly."
			} else if (this.consistencyScore >= 40) {
				return "Room for improvement. A blueprint could transform your results."
			} else {
				return "Great potential! You're perfectly positioned to see dramatic improvements."
			}
		},
		
		animatePercentage() {
			let current = 0
			const target = 87
			const increment = 1
			const interval = setInterval(() => {
				if (current >= target) {
					clearInterval(interval)
					return
				}
				current += increment
				this.animatedPercentage = current
			}, 50)
		}
	}
}
</script>

<style scoped>
.carousel-container {
	position: relative;
}

.carousel-track {
	display: flex;
}

.carousel-slide {
	min-width: 100%;
}

@keyframes fillCircle {
	from {
		stroke-dasharray: 0 251.2;
	}
	to {
		stroke-dasharray: 219 251.2;
	}
}
</style>
