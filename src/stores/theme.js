import { defineStore } from 'pinia'

function hexToHsl(hex) {
	hex = hex.replace('#', '')
	if (hex.length === 3) hex = hex.split('').map(c => c + c).join('')
	const r = parseInt(hex.substring(0, 2), 16) / 255
	const g = parseInt(hex.substring(2, 4), 16) / 255
	const b = parseInt(hex.substring(4, 6), 16) / 255
	const max = Math.max(r, g, b), min = Math.min(r, g, b)
	let h = 0, s = 0, l = (max + min) / 2
	if (max !== min) {
		const d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break
			case g: h = (b - r) / d + 2; break
			default: h = (r - g) / d + 4
		}
		h = h / 6
	}
	return Math.round(h * 360) + ' ' + Math.round(s * 100) + '% ' + Math.round(l * 100) + '%'
}

function readableFgFromHex(hex) {
	hex = hex.replace('#', '')
	if (hex.length === 3) hex = hex.split('').map(c => c + c).join('')
	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)
	const yiq = (r * 299 + g * 587 + b * 114) / 1000
	return yiq >= 140 ? '0 0% 10%' : '0 0% 100%'
}

export const useThemeStore = defineStore('theme', {
	state: () => ({
		preset: 'purple',
		mode: 'dark',
		accentHsl: '0 98% 40%',
		accentFgHsl: '0 0% 100%',
		radius: '12px',
		panelOpen: false,
		panelX: null,
		panelY: null
	}),
	getters: {
		isDark: state => state.mode === 'dark'
	},
	actions: {
		init() {
			const p = localStorage.getItem('theme-preset')
			const m = localStorage.getItem('theme-mode')
			const a = localStorage.getItem('theme-accent')
			const af = localStorage.getItem('theme-accent-fg')
			const r = localStorage.getItem('theme-radius')
			const x = localStorage.getItem('theme-panel-x')
			const y = localStorage.getItem('theme-panel-y')
			const open = localStorage.getItem('theme-panel-open')
			this.preset = p || this.preset
			this.mode = m || this.mode
			if (a) this.accentHsl = a
			if (af) this.accentFgHsl = af
			if (r) this.radius = r
			if (x !== null) this.panelX = parseFloat(x)
			if (y !== null) this.panelY = parseFloat(y)
			this.panelOpen = open === '1'
			this.applyToDom()
		},
		applyToDom() {
			const html = document.documentElement
			html.dataset.theme = this.preset
			if (this.isDark) html.classList.add('dark'); else html.classList.remove('dark')
			html.style.setProperty('--accent', this.accentHsl)
			html.style.setProperty('--accent-foreground', this.accentFgHsl)
			html.style.setProperty('--radius', this.radius)
			localStorage.setItem('theme-preset', this.preset)
			localStorage.setItem('theme-mode', this.mode)
			localStorage.setItem('theme-accent', this.accentHsl)
			localStorage.setItem('theme-accent-fg', this.accentFgHsl)
			localStorage.setItem('theme-radius', this.radius)
			localStorage.setItem('theme-panel-open', this.panelOpen ? '1' : '0')
			if (this.panelX !== null) localStorage.setItem('theme-panel-x', String(this.panelX))
			if (this.panelY !== null) localStorage.setItem('theme-panel-y', String(this.panelY))
		},
		setPreset(p) {
			this.preset = p
			const defaultHexByPreset = {
				purple: '#9d4edd',
				neo: '#3dff6d',
				amber: '#ffb100',
				crimson: '#b80f28',
				cherry: '#ff2e4c',
				sandstone: '#c76b4e',
				ocean: '#1fb6ff',
				forest: '#16a34a',
				cobalt: '#3b82f6',
				mint: '#10b981',
				coral: '#fb7185',
				rose: '#e11d48',
				lavender: '#a78bfa',
				slate: '#64748b',
				midnight: '#312e81',
				sunrise: '#f59e0b',
				graphite: '#c80202',
				'graphite-1': '#b10000',
				'graphite-2': '#991111',
				'graphite-3': '#7f1d1d',
				'graphite-4': '#ef4444',
				charcoal: '#ef4444',
				warmgray: '#f59e0b',
				coolgray: '#0ea5e9',
				obsidian: '#f97316',
				ink: '#22c55e',
				stone: '#14b8a6',
				taupe: '#eab308'
			}
			const hex = defaultHexByPreset[p] || defaultHexByPreset.purple
			this.setAccentHex(hex)
		},
		setMode(m) { this.mode = m; this.applyToDom() },
		setAccentHex(hex) {
			this.accentHsl = hexToHsl(hex)
			this.accentFgHsl = readableFgFromHex(hex)
			this.applyToDom()
		},
		setRadiusPx(px) { this.radius = px + 'px'; this.applyToDom() },
		setPanelOpen(v) { this.panelOpen = v; this.applyToDom() },
		togglePanel() { this.panelOpen = !this.panelOpen; this.applyToDom() },
		setPanelPosition(x, y) { this.panelX = x; this.panelY = y; this.applyToDom() }
	}
})


