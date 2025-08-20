import { defineStore } from 'pinia'

const STORAGE_KEY = 'mkt.gradients.v1'

function hslToHex(h, s, l) {
	s /= 100; l /= 100
	const k = n => (n + h / 30) % 12
	const a = s * Math.min(l, 1 - l)
	const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
	const toHex = x => Math.round(255 * x).toString(16).padStart(2, '0')
	return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`
}

function randomHex() {
	const h = Math.floor(Math.random() * 360)
	const s = 60 + Math.floor(Math.random() * 35)
	const l = 45 + Math.floor(Math.random() * 15)
	return hslToHex(h, s, l)
}

export const useGradientsStore = defineStore('mktGradients', {
	state: () => ({
		sections: {},
		loaded: false
	}),
	getters: {
		getCurrent(state) {
			return (sectionId) => {
				const entry = state.sections[sectionId]
				return entry && entry.current ? entry.current : ''
			}
		}
	},
	actions: {
		ensure(sectionId) {
			if (!this.loaded) this.load()
			if (!this.sections[sectionId]) {
				this.sections[sectionId] = { history: [], index: -1, current: '' }
			}
			return this.sections[sectionId]
		},
		apply(sectionId, gradient) {
			const e = this.ensure(sectionId)
			if (e.index < e.history.length - 1) {
				e.history = e.history.slice(0, e.index + 1)
			}
			e.history.push(gradient)
			e.index = e.history.length - 1
			e.current = gradient
			this.persist()
			return gradient
		},
		generate(sectionId) {
			const stops = Math.random() < 0.5 ? 2 : 3
			const angle = Math.floor(Math.random() * 360)
			const colors = Array.from({ length: stops }, () => randomHex())
			const g = `linear-gradient(${angle}deg, ${colors.join(', ')})`
			return this.apply(sectionId, g)
		},
		undo(sectionId) {
			const e = this.ensure(sectionId)
			if (e.index > 0) {
				e.index -= 1
				e.current = e.history[e.index] || ''
				this.persist()
			}
			return e.current
		},
		redo(sectionId) {
			const e = this.ensure(sectionId)
			if (e.index < e.history.length - 1) {
				e.index += 1
				e.current = e.history[e.index] || ''
				this.persist()
			}
			return e.current
		},
		reset(sectionId) {
			// Apply an empty background to return to original styling, preserves undo history
			return this.apply(sectionId, '')
		},
		load() {
			try {
				const raw = localStorage.getItem(STORAGE_KEY)
				if (raw) this.sections = JSON.parse(raw) || {}
			} catch {}
			this.loaded = true
		},
		persist() {
			try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.sections)) } catch {}
		}
	}
})


