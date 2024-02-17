<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { getErrorMessage } from '$lib/functions';

	let wakeLock: WakeLockSentinel | null = null;

	async function requestWakeLock() {
		// check if wake lock is supported by the browser
		if ('wakeLock' in navigator) {
			try {
				// request a wake lock
				wakeLock = await navigator.wakeLock.request('screen');
				wakeLock.addEventListener('release', () => {});
			} catch (err) {
				const errorMessage: string = getErrorMessage(err);
				console.error(errorMessage);
			}
		} else {
			console.log('Wake lock is not supported by this browser');
		}
	}

	// re-request wakelock on visibility change
	async function onVisibilityChange() {
		if (wakeLock !== null && document.visibilityState === 'visible') {
			await requestWakeLock();
		}
	}

	function releaseWakeLock() {
		if (wakeLock) {
			wakeLock.release();
			wakeLock = null;
		}
	}

	// call wake lock onmount
	onMount(() => {
		if (browser && 'wakeLock' in navigator) {
			requestWakeLock();
			document.addEventListener('visibilitychange', onVisibilityChange);
		}
	});

	// release wake lock and remove event listener on destroy
	onDestroy(() => {
		releaseWakeLock();
		document.removeEventListener('visibilitychange', onVisibilityChange);
	});
</script>

{#if browser && 'wakeLock' in navigator}
	<button on:click={releaseWakeLock}>Release Wake Lock</button>
{/if}
