<script lang="ts">
	// components
	import { Button } from '$lib/components/common';

	// data
	let { step = ''} = $props();
</script>

<li>
	<Button>
		{step}
	</Button>
</li>
