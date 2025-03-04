<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import AppBar from '$lib/widgets/layout/app-bar.svelte';
	import BottomNavigation from '$lib/widgets/layout/bottom-navigation.svelte';
</script>

<div class="flex min-h-screen justify-center bg-gray-200">
	<div class="flex min-h-screen w-full max-w-sm flex-col bg-white">
		<AppBar />

		<main class="flex-1 overflow-auto bg-white">
			{@render children()}
		</main>

		<BottomNavigation />
	</div>
</div>
