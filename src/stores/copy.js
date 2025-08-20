import { defineStore } from 'pinia'

const STORAGE_KEY = 'mkt.copy.v1'

export const useCopyStore = defineStore('copy', {
	state: () => ({
		index: 0,
		variants: [
			{
				headline: "Stop feeling like you're falling behind",
				subheadline: "Create pro‑level content that matches your sound—without the team. Our AI turns your vibe into scroll‑stopping posts.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Used by indie labels, solo creators, and boutique studios"
			},
			{
				headline: "Your music deserves studio‑grade visuals",
				subheadline: "Generate posts, covers, and shorts that fit your vibe—consistent across every platform.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Trusted by 500+ creators"
			},
			{
				headline: "Post daily without losing your aesthetic",
				subheadline: "Train a persona once. Get perfectly branded content for IG, TikTok, YouTube Shorts, and X.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Loved by artists and small teams"
			},
			{
				headline: "Look cohesive everywhere you show up",
				subheadline: "One AI persona keeps your style locked while you generate batches in minutes.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Consistent branding for modern artists"
			},
			{
				headline: "Turn your vibe into a content system",
				subheadline: "Shorts, covers, thumbnails, captions—generated to match your sound and aesthetic.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Built for music creators"
			},
			{
				headline: "Ship more. Keep the brand tight.",
				subheadline: "Batch‑generate visual sets and captions, then publish everywhere with one flow.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "From solo acts to small labels"
			},
			{
				headline: "Never rebuild your look again",
				subheadline: "Persona rigs lock your colors, vibes, and prompts so everything feels on‑brand.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Style consistency, automated"
			},
			{
				headline: "Create like an artist, publish like a team",
				subheadline: "Generate, version, and schedule content that matches your sound—no editors needed.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Scale your presence without burnout"
			},
			{
				headline: "Daily posts without the chaos",
				subheadline: "One workflow for IG, TikTok, Shorts, and X—designed for speed and consistency.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Save 10+ hours/week"
			},
			{
				headline: "Your sound. Your visuals. Every day.",
				subheadline: "AI keeps your identity steady while you experiment and ship more often.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Creative control with automation"
			},
			{
				headline: "Look big without hiring a team",
				subheadline: "Studio‑grade assets and captions—generated from your persona in minutes.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Made for lean creators"
			},
			{
				headline: "From idea to post in one flow",
				subheadline: "Spin multiple versions, pick winners, and publish across platforms instantly.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "A/B friendly by design"
			},
			{
				headline: "Stay on brand while you scale",
				subheadline: "Persona guardrails keep color, tone, and style consistent as output grows.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Consistency that compounds"
			},
			{
				headline: "Post smarter, not slower",
				subheadline: "Generate high‑quality sets for every platform—formatted and captioned automatically.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Creators report faster growth"
			},
			{
				headline: "Make content that sounds like you look",
				subheadline: "Your visual identity synced to your music—no more mismatched posts.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Brand harmony for artists"
			},
			{
				headline: "Turn momentum into a habit",
				subheadline: "Daily, on‑brand posts across IG/TikTok/Shorts/X—generated in a few clicks.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Consistency made simple"
			},
			{
				headline: "From rough idea to finished post",
				subheadline: "Version, compare, and select the best takes—then push live with confidence.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Creative + data together"
			},
			{
				headline: "Keep your feed tight and on theme",
				subheadline: "Colors, framing, and captions guided by your persona so everything fits your world.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "No more random one‑offs"
			},
			{
				headline: "Batch once. Post everywhere.",
				subheadline: "Generate sets per song or drop and schedule them across every channel.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "All platforms, one flow"
			},
			{
				headline: "Grow reach without losing taste",
				subheadline: "AI that respects your aesthetic while helping you publish more often.",
				primaryCTA: "Start Free Trial",
				secondaryCTA: "Watch 2‑min demo",
				socialProof: "Tasteful automation"
			}
		],
		loaded: false
	}),
	getters: {
		current(state) {
			return state.variants[state.index] || null
		}
	},
	actions: {
		next() {
			if (!this.loaded) this.load()
			this.index = (this.index + 1) % this.variants.length
			this.persist()
		},
		prev() {
			if (!this.loaded) this.load()
			this.index = (this.index - 1 + this.variants.length) % this.variants.length
			this.persist()
		},
		load() {
			try {
				const raw = localStorage.getItem(STORAGE_KEY)
				if (raw != null) this.index = Number(raw) || 0
			} catch {}
			this.loaded = true
		},
		persist() {
			try { localStorage.setItem(STORAGE_KEY, String(this.index)) } catch {}
		}
	}
})


