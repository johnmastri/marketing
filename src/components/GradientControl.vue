<template>
	<div class="absolute bottom-2 right-2 z-10 flex items-center gap-2 rounded-md border bg-popover/80 px-2 py-1 text-xs">
		<span>Gradient</span>
		<button class="h-6 px-2 rounded border bg-background hover:bg-accent hover:text-accent-foreground" @click="generate">Generate</button>
		<button class="h-6 px-2 rounded border bg-background hover:bg-accent hover:text-accent-foreground" @click="copy">Copy</button>
		<button class="h-6 px-2 rounded border bg-background hover:bg-accent hover:text-accent-foreground" @click="reset">Reset</button>
		<button class="h-6 px-2 rounded bg-transparent text-foreground/70 hover:text-foreground disabled:opacity-40" :disabled="!canUndo" @click="undo">Undo</button>
		<button class="h-6 px-2 rounded bg-transparent text-foreground/70 hover:text-foreground disabled:opacity-40" :disabled="!canRedo" @click="redo">Redo</button>
	</div>
</template>

<script>
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'GradientControl',
	props: { sectionId: { type: String, required: true } },
	data() { return { gradients: useGradientsStore() } },
	created() { this.gradients.ensure(this.sectionId) },
	computed: {
		entry() { return this.gradients.ensure(this.sectionId) },
		canUndo() { return this.entry.index > 0 },
		canRedo() { return this.entry.index < this.entry.history.length - 1 }
	},
	methods: {
		generate() { this.gradients.generate(this.sectionId) },
		async copy() { const g = this.gradients.getCurrent(this.sectionId); try { await navigator.clipboard.writeText(g || '') } catch {} },
		reset() { this.gradients.reset(this.sectionId) },
		undo() { this.gradients.undo(this.sectionId) },
		redo() { this.gradients.redo(this.sectionId) }
	}
}
</script>


