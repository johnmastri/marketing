<template>
	<div>
		<button
			v-if="!panelOpen"
			class="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-md bg-accent text-[color:hsl(var(--accent-foreground))] shadow"
			aria-label="Open Theme Panel"
			@click="openPanel"
		>
			Theme
		</button>

		<div
			v-else
			ref="panel"
			class="fixed z-50 w-80 rounded-xl shadow-lg bg-card text-card-foreground border border-border"
			:style="panelStyle"
		>
			<div class="flex items-center justify-between px-3 py-2 border-b border-border cursor-move" ref="handle">
				<div class="text-sm font-medium">Theme</div>
				<button class="px-2 py-1 rounded bg-accent text-[color:hsl(var(--accent-foreground))]" @click="closePanel">Close</button>
			</div>

			<div class="p-3 space-y-4">
				<div>
					<div class="text-xs mb-2">Preset</div>
					<div class="grid grid-cols-3 gap-2">
						<button :class="presetBtn('purple')" @click="setPreset('purple')">Purple</button>
						<button :class="presetBtn('neo')" @click="setPreset('neo')">Neo</button>
						<button :class="presetBtn('amber')" @click="setPreset('amber')">Amber</button>
						<button :class="presetBtn('crimson')" @click="setPreset('crimson')">Crimson</button>
						<button :class="presetBtn('cherry')" @click="setPreset('cherry')">Cherry</button>
						<button :class="presetBtn('sandstone')" @click="setPreset('sandstone')">Sandstone</button>
						<button :class="presetBtn('ocean')" @click="setPreset('ocean')">Ocean</button>
						<button :class="presetBtn('forest')" @click="setPreset('forest')">Forest</button>
						<button :class="presetBtn('cobalt')" @click="setPreset('cobalt')">Cobalt</button>
						<button :class="presetBtn('mint')" @click="setPreset('mint')">Mint</button>
						<button :class="presetBtn('coral')" @click="setPreset('coral')">Coral</button>
						<button :class="presetBtn('rose')" @click="setPreset('rose')">Rose</button>
						<button :class="presetBtn('lavender')" @click="setPreset('lavender')">Lavender</button>
						<button :class="presetBtn('slate')" @click="setPreset('slate')">Slate</button>
						<button :class="presetBtn('midnight')" @click="setPreset('midnight')">Midnight</button>
						<button :class="presetBtn('sunrise')" @click="setPreset('sunrise')">Sunrise</button>
						<button :class="presetBtn('graphite')" @click="setPreset('graphite')">Graphite</button>
						<button :class="presetBtn('graphite-1')" @click="setPreset('graphite-1')">Graphite 1</button>
						<button :class="presetBtn('graphite-2')" @click="setPreset('graphite-2')">Graphite 2</button>
						<button :class="presetBtn('graphite-3')" @click="setPreset('graphite-3')">Graphite 3</button>
						<button :class="presetBtn('graphite-4')" @click="setPreset('graphite-4')">Graphite 4</button>
						<button :class="presetBtn('charcoal')" @click="setPreset('charcoal')">Charcoal</button>
						<button :class="presetBtn('warmgray')" @click="setPreset('warmgray')">Warm Gray</button>
						<button :class="presetBtn('coolgray')" @click="setPreset('coolgray')">Cool Gray</button>
						<button :class="presetBtn('obsidian')" @click="setPreset('obsidian')">Obsidian</button>
						<button :class="presetBtn('ink')" @click="setPreset('ink')">Ink</button>
						<button :class="presetBtn('stone')" @click="setPreset('stone')">Stone</button>
						<button :class="presetBtn('taupe')" @click="setPreset('taupe')">Taupe</button>
					</div>
				</div>

				<div>
					<div class="text-xs mb-2">Mode</div>
					<div class="grid grid-cols-2 gap-2">
						<button :class="modeBtn('light')" @click="setMode('light')">Light</button>
						<button :class="modeBtn('dark')" @click="setMode('dark')">Dark</button>
					</div>
				</div>

				<div>
					<div class="text-xs mb-2">Accent</div>
					<input type="color" :value="accentHex" @input="onAccent($event)" class="w-full h-10 rounded border border-border bg-transparent" />
				</div>

				<div>
					<div class="text-xs mb-2 flex items-center justify-between">
						<span>Radius</span>
						<span class="text-[10px] opacity-70">{{ radiusPx }}px</span>
					</div>
					<input type="range" min="0" max="24" :value="radiusPx" @input="onRadius($event)" class="w-full" />
				</div>

				<div class="flex items-center justify-between">
					<button class="px-3 py-2 rounded bg-secondary text-secondary-foreground border border-border" @click="reset">Reset</button>
					<button class="px-3 py-2 rounded bg-accent text-[color:hsl(var(--accent-foreground))]" @click="togglePanel">Hide</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { gsap } from 'gsap'

export default {
	name: 'ThemePanel',
	data() {
		return { accentHex: '#9d4edd' }
	},
	computed: {
		...mapState(useThemeStore, {
			panelOpen: 'panelOpen',
			preset: 'preset',
			mode: 'mode',
			accentHsl: 'accentHsl',
			radiusVar: 'radius',
			panelX: 'panelX',
			panelY: 'panelY'
		}),
		panelStyle() {
			const style = {}
			if (this.panelX !== null && this.panelY !== null) {
				style.transform = `translate(${this.panelX}px, ${this.panelY}px)`
			} else {
				style.bottom = '1rem'
				style.right = '1rem'
			}
			return style
		},
		radiusPx() { 
			const parsed = parseInt(String(this.radiusVar).replace('px', ''))
			return isNaN(parsed) ? 12 : parsed
		}
	},
	methods: {
		...mapActions(useThemeStore, ['init', 'setPreset', 'setMode', 'setAccentHex', 'setRadiusPx', 'togglePanel', 'setPanelOpen', 'setPanelPosition']),
		presetBtn(v) {
			return [
				'px-2 py-1 rounded border text-sm',
				this.preset === v ? 'bg-accent text-[color:hsl(var(--accent-foreground))] border-transparent' : 'bg-card text-card-foreground border-border'
			].join(' ')
		},
		modeBtn(v) {
			return [
				'px-2 py-1 rounded border text-sm',
				this.mode === v ? 'bg-accent text-[color:hsl(var(--accent-foreground))] border-transparent' : 'bg-card text-card-foreground border-border'
			].join(' ')
		},
		openPanel() { this.setPanelOpen(true); this.$nextTick(this.makeDraggable) },
		closePanel() { this.setPanelOpen(false) },
		onAccent(e) { this.accentHex = e.target.value; this.setAccentHex(this.accentHex) },
		onRadius(e) { this.setRadiusPx(parseInt(e.target.value)) },
		reset() {
			const defaults = {
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
				'graphite-4': '#ef4444'
			}
			this.accentHex = defaults[this.preset] || defaults.purple
			this.setAccentHex(this.accentHex)
			this.setMode(this.mode)
			this.setRadiusPx(this.radiusPx)
		},
		async makeDraggable() {
			const el = this.$refs.panel
			const handle = this.$refs.handle
			if (!el || !handle) return
			const vm = this
			const mod = await import('gsap/Draggable')
			const Draggable = mod && (mod.Draggable || mod.default)
			gsap.registerPlugin(Draggable)
			Draggable.create(el, {
				type: 'x,y',
				trigger: handle,
				onDrag() { vm.setPanelPosition(this.x, this.y) },
				onDragEnd() { vm.setPanelPosition(this.x, this.y) }
			})
		},
		setInitialAccentHexFromHsl() {
			const s = String(this.accentHsl).split(' ')
			const h = parseInt(s[0]), S = parseInt(s[1]), l = parseInt(s[2])
			const c = (1 - Math.abs(2 * l / 100 - 1)) * (S / 100)
			const x = c * (1 - Math.abs((h / 60) % 2 - 1))
			const m = l / 100 - c / 2
			let r1 = 0, g1 = 0, b1 = 0
			if (h >= 0 && h < 60) { r1 = c; g1 = x; b1 = 0 }
			else if (h < 120) { r1 = x; g1 = c; b1 = 0 }
			else if (h < 180) { r1 = 0; g1 = c; b1 = x }
			else if (h < 240) { r1 = 0; g1 = x; b1 = c }
			else if (h < 300) { r1 = x; g1 = 0; b1 = c }
			else { r1 = c; g1 = 0; b1 = x }
			const r = Math.round((r1 + m) * 255)
			const g = Math.round((g1 + m) * 255)
			const b = Math.round((b1 + m) * 255)
			const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
			this.accentHex = hex
		},
		handleKeydown(e) {
			const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
			if ((isMac && e.metaKey && e.key === ';') || (!isMac && e.ctrlKey && e.key === ';')) {
				e.preventDefault()
				this.togglePanel()
				if (this.panelOpen) this.$nextTick(this.makeDraggable)
			}
		}
	},
	mounted() {
		this.init()
		this.setInitialAccentHexFromHsl()
		window.addEventListener('keydown', this.handleKeydown)
		if (this.panelOpen) this.$nextTick(this.makeDraggable)
	},
	beforeUnmount() { window.removeEventListener('keydown', this.handleKeydown) }
}
</script>


