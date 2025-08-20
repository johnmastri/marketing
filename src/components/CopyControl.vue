<template>
	<div class="absolute bottom-10 right-2 z-20 flex items-center gap-2 rounded-md border bg-popover/80 px-2 py-1 text-xs">
		<span>Copy</span>
		<button class="h-6 px-2 rounded border bg-background hover:bg-accent hover:text-accent-foreground" @click="prev">←</button>
		<button class="h-6 px-2 rounded border bg-background hover:bg-accent hover:text-accent-foreground" @click="next">→</button>
	</div>
</template>

<script>
import { useCopyStore } from '@/stores/copy'

export default {
	name: 'CopyControl',
	data() {
		return { copy: useCopyStore() }
	},
	methods: {
		next() { this.copy.next() },
		prev() { this.copy.prev() }
	}
}
</script>


