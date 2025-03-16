<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import BottomNavigation from '$lib/widgets/layout/ui/bottom-navigation.svelte';
</script>

<div class="flex min-h-screen justify-center bg-gray-200">
	<div class="flex min-h-screen w-full max-w-sm flex-col bg-white">
		{@render children()}

		<BottomNavigation />
	</div>
</div>
