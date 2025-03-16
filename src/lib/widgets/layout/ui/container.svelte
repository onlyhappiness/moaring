<script>
	let { children } = $props();
</script>

<main class="flex-1 overflow-auto bg-white">
	{@render children()}
</main>
