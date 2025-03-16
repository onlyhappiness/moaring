<script lang="ts">
	import { page } from '$app/state';
	import COLOR from '$lib/shared/const/COLOR';
	import { cn } from '$lib/shared/lib/cn';
	import navItems from '$lib/widgets/layout/const/nav-item';

	function isActive(path: string) {
		return page.url.pathname === path;
	}
</script>

<nav class="sticky bottom-0 border-t border-gray-100 bg-white">
	<div class="flex items-end justify-around px-0.5 py-1">
		{#each navItems as { href, icon: Icon, label }}
			<a
				{href}
				class={cn(
					'flex flex-1 flex-col items-center justify-center space-y-1 p-1.5',
					isActive(href) ? `text-${COLOR.text.PRIMARY}` : 'text-[#B0B0B0]'
					// isCenter && 'text-[#FFC0CB]'
				)}
			>
				<Icon size={24} strokeWidth={2} />
				<!-- <Icon size={isCenter ? 40 : 24} strokeWidth={isCenter ? 1.3 : 2} /> -->
				<span class="text-xs font-medium">{label}</span>
			</a>
		{/each}
	</div>
</nav>
