<template>
	<section class="carousel-section" aria-labelledby="spotlights-title">
		<div class="carousel-container">
		<h2 id="spotlights-title" class="carousel-title">
				Real people. Real stories.
			</h2>
			<p class="carousel-subtitle">
						Your humanity is what connects with people. From yoga instructors to music artists, Consystnt helps real people share their stories every day.

			</p>
		

			<div class="carousel-wrapper">
				<!-- Navigation buttons -->
				<button
					class="nav-button nav-button-prev"
					aria-label="Previous testimonial"
					@click="go(-1)"
				>
					◀
				</button>
				<button
					class="nav-button nav-button-next"
					aria-label="Next testimonial"
					@click="go(1)"
				>
					▶
				</button>

				<!-- Carousel track -->
				<div
					ref="trackRef"
					class="carousel-track"
					role="region"
					aria-roledescription="carousel"
					aria-label="Customer spotlights"
				>
					<article
						v-for="(spotlight, i) in spotlights.testimonials"
						:key="spotlight.id"
						class="spotlight-card"
						:class="{ active: i === active }"
						:aria-hidden="i !== active"
						:aria-label="`${spotlight.name}, ${spotlight.role}`"
					>
						<div class="card-inner">
							<img
								:src="spotlight.img"
								:alt="spotlight.alt"
								class="card-image"
								:loading="i === active ? 'eager' : 'lazy'"
								@error="handleImageError"
							/>
							<div class="card-content">
								<p class="card-quote">&ldquo;{{ spotlight.quote }}&rdquo;</p>
								<p class="card-attribution">— {{ spotlight.name }}, {{ spotlight.role }}</p>
							</div>
						</div>
					</article>
				</div>
			</div>

			<!-- Pagination Dots -->
			<div class="carousel-pagination">
				<button
					v-for="(spotlight, index) in spotlights.testimonials"
					:key="`dot-${spotlight.id}`"
					:class="['pagination-dot', { active: index === active }]"
					:aria-label="`Go to ${spotlight.name}'s testimonial`"
					@click.prevent="goToSlide(index)"
				></button>
			</div>
		</div>
	</section>
</template>

<script>
import { gsap } from 'gsap'
import { useSpotlightsStore } from '@/stores/spotlights'

export default {
	name: 'SpotlightCarousel',
	data() {
		return {
			active: 0,
			cardWidth: 420,
			gap: 24,
			autoplayInterval: null,
			tween: null,
			spotlights: useSpotlightsStore()
		}
	},
	computed: {
		step() {
			return this.cardWidth + this.gap
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.initializeCarousel()
			this.startAutoplay()
			this.setupKeyboardNavigation()
		})
	},
	beforeUnmount() {
		this.cleanup()
	},
	methods: {
		initializeCarousel() {
			const track = this.$refs.trackRef
			if (!track) return

			const items = Array.from(track.children)

			// Set initial positions
			this.setInitialPositions(items)
		},

		setInitialPositions(items) {
			items.forEach((el, i) => {
				const x = (i - this.active) * this.step
				const isActive = i === this.active
				
				gsap.set(el, {
					x,
					scale: isActive ? 1 : 0.85,
					opacity: isActive ? 1 : 0.6,
					zIndex: isActive ? 3 : 1,
					transformOrigin: 'center center'
				})
			})
		},

		goToSlide(index) {
			if (index === this.active) return
			
			this.stopAutoplay()
			this.active = index
			this.animateTo(index)
			this.startAutoplay()
		},

		go(direction) {
			this.stopAutoplay()
			const next = (this.active + direction + this.spotlights.totalCount) % this.spotlights.totalCount
			this.active = next
			this.animateTo(next)
			this.startAutoplay()
		},

		animateTo(index) {
			const track = this.$refs.trackRef
			if (!track) return

			const items = Array.from(track.children)
			
			// Kill any existing animation
			if (this.tween) {
				this.tween.kill()
			}
			
			// Animate each item individually
			items.forEach((el, i) => {
				const x = (i - index) * this.step
				
				gsap.to(el, {
					x,
					duration: 0.6,
					ease: 'power3.out',
					scale: i === index ? 1 : 0.85,
					opacity: i === index ? 1 : 0.6,
					zIndex: i === index ? 3 : 1,
					transformOrigin: 'center center',
					force3D: true
				})
			})
		},

		startAutoplay() {
			if (this.autoplayInterval) return
			this.autoplayInterval = setInterval(() => {
				const next = (this.active + 1) % this.spotlights.totalCount
				this.active = next
				this.animateTo(next)
			}, 4500)
		},

		stopAutoplay() {
			if (this.autoplayInterval) {
				clearInterval(this.autoplayInterval)
				this.autoplayInterval = null
			}
		},

		setupKeyboardNavigation() {
			const handleKeydown = (e) => {
				if (e.key === 'ArrowRight') this.go(1)
				if (e.key === 'ArrowLeft') this.go(-1)
			}
			window.addEventListener('keydown', handleKeydown)
			this._keydownHandler = handleKeydown
		},

		handleImageError(e) {
			// Create placeholder when image fails to load
			const spotlight = this.spotlights.testimonials.find(s => s.img === e.target.src)
			if (spotlight) {
				e.target.style.background = `linear-gradient(135deg, ${spotlight.bgColor}aa, ${spotlight.bgColor}ff)`
				e.target.style.display = 'flex'
				e.target.style.alignItems = 'center'
				e.target.style.justifyContent = 'center'
				e.target.style.color = 'white'
				e.target.style.fontSize = '4rem'
				e.target.style.fontWeight = 'bold'
				e.target.textContent = spotlight.name[0]
			}
		},

		cleanup() {
			this.stopAutoplay()
			if (this.tween) {
				this.tween.kill()
			}
			if (this._keydownHandler) {
				window.removeEventListener('keydown', this._keydownHandler)
			}
		}
	}
}
</script>

<style scoped>
/* Section styles */
.carousel-section {
	padding: 4rem 0;
	background: #ffffff;
	overflow: hidden;
}

.carousel-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
	overflow:
}

/* Header styles */
.carousel-title {
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	color: #111827;
	margin-bottom: 0.75rem;
	letter-spacing: -0.025em;
}

.carousel-subtitle {
	text-align: center;
	color: #6b7280;
	font-size: 1.125rem;
	line-height: 1.6;
	margin-bottom: 2.5rem;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}

/* Carousel wrapper */
.carousel-wrapper {
	position: relative;
	margin-top: 2.5rem;
}

/* Navigation buttons */
.nav-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 10;
	background: rgba(255, 255, 255, 0.7);
	backdrop-filter: blur(8px);
	border: 1px solid #e5e7eb;
	border-radius: 50px;
	padding: 0.75rem 1rem;
	font-size: 1.125rem;
	cursor: pointer;
	transition: all 0.2s ease;
	color: #374151;
}

.nav-button:hover {
	background: rgba(255, 255, 255, 0.9);
	transform: translateY(-50%) scale(1.05);
}

.nav-button-prev {
	left: -80px;
}

.nav-button-next {
	right: -80px;
}

/* Carousel track */
.carousel-track {
	height: 560px;
	position: relative;
	overflow: visible;
}

/* Spotlight cards */
.spotlight-card {
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -210px; /* Half of width (420px) to center */
	width: 420px;
	will-change: transform;
}

.card-inner {
	background: #ffffff;
	border-radius: 1rem;
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	border: 1px solid #e5e7eb;
	overflow: hidden;
	transition: all 0.3s ease;
}

.spotlight-card.active .card-inner {
	box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
}

/* Card image */
.card-image {
	width: 100%;
	height: 380px;
	object-fit: cover;
	display: block;
}

/* Card content */
.card-content {
	padding: 1.25rem;
}

.card-quote {
	font-size: 1.125rem;
	line-height: 1.6;
	color: #111827;
	margin-bottom: 0.75rem;
	font-weight: 400;
}

.card-attribution {
	font-size: 0.875rem;
	color: #6b7280;
	font-weight: 500;
}

/* Pagination dots */
.carousel-pagination {
	display: flex;
	justify-content: center;
	gap: 0.75rem;
	margin-top: 2rem;
}

.pagination-dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: none;
	background: #d1d5db;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
}

.pagination-dot:hover {
	background: #9ca3af;
	transform: scale(1.1);
}

.pagination-dot.active {
	background: #374151;
	transform: scale(1.2);
}

.pagination-dot.active::after {
	content: '';
	position: absolute;
	inset: -4px;
	border: 2px solid #374151;
	border-radius: 50%;
	opacity: 0.3;
}

/* Responsive design */
@media (max-width: 768px) {
	.carousel-title {
		font-size: 2rem;
	}
	
	.carousel-subtitle {
		font-size: 1rem;
		padding: 0 1rem;
	}
	
	.spotlight-card {
		width: 320px;
		margin-left: -160px; /* Half of 320px */
	}
	
	.carousel-track {
		height: 480px;
	}
	
	.card-image {
		height: 280px;
	}
	
	.nav-button {
		padding: 0.5rem 0.75rem;
		font-size: 1rem;
	}
	
	.nav-button-prev {
		left: -60px;
	}

	.nav-button-next {
		right: -60px;
	}
	
	.pagination-dot {
		width: 10px;
		height: 10px;
	}
}

@media (max-width: 480px) {
	.carousel-container {
		padding: 0 0.5rem;
	}
	
	.spotlight-card {
		width: 280px;
		margin-left: -140px; /* Half of 280px */
	}
	
	.carousel-track {
		height: 420px;
	}
	
	.card-image {
		height: 240px;
	}
	
	.nav-button-prev {
		left: -40px;
	}

	.nav-button-next {
		right: -40px;
	}
	
	.pagination-dot {
		width: 8px;
		height: 8px;
	}
	
	.carousel-pagination {
		gap: 0.5rem;
	}
}
</style>
