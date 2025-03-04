<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/shared/lib/cn';
	import {
		CompassIcon,
		HomeIcon,
		MessageCircleMoreIcon,
		PlusCircleIcon,
		UserIcon
	} from 'lucide-svelte';

	function isActive(path: string) {
		return page.url.pathname === path;
	}

	const navItems = [
		{ href: '/', icon: HomeIcon, label: '홈' },
		{ href: '/discover', icon: CompassIcon, label: '탐색' },
		{ href: '/create', icon: PlusCircleIcon, isCenter: true },
		{ href: '/chat', icon: MessageCircleMoreIcon, label: '채팅' },
		{ href: '/profile', icon: UserIcon, label: '프로필' }
	];
</script>

<nav class="sticky bottom-0 border-t border-gray-100 bg-white">
	<div class="flex items-end justify-around px-3 py-1.5">
		{#each navItems as { href, icon: Icon, label, isCenter }}
			<a
				{href}
				class={cn(
					'flex flex-col items-center justify-center space-y-1 p-2',
					isActive(href) ? 'text-[#FFC0CB]' : 'text-[#B0B0B0]',
					isCenter && 'text-[#FFC0CB]'
				)}
			>
				<Icon size={isCenter ? 40 : 24} strokeWidth={isCenter ? 1.3 : 2} />
				<span class="text-xs">{label}</span>
			</a>
		{/each}
	</div>
</nav>
