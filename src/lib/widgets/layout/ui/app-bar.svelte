<script>
	import COLOR from '$lib/shared/const/COLOR';
	import { cn } from '$lib/shared/lib/cn';
	import { BellIcon, SearchIcon } from 'lucide-svelte';

	let { title = '', left = undefined, center = undefined } = $props();
</script>

<header class="sticky top-0 z-10 bg-white">
	<div class="flex h-10 items-center justify-between px-4">
		{#if left}
			<h1 class="ml-2 text-base font-medium">{title}</h1>
		{:else}
			<div></div>
			<h1 class="text-base font-medium">{title}</h1>
		{/if}

		<section class={cn('flex items-center gap-4')}>
			<button class="cursor-pointer">
				<SearchIcon color={COLOR.text.SECONDARY} size={20} />
			</button>

			<button class="cursor-pointer">
				<BellIcon color={COLOR.text.SECONDARY} size={20} />
			</button>
		</section>
	</div>
</header>
