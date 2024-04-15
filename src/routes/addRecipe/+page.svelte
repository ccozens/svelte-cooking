<script lang="ts">
	import { enhance } from '$app/forms';
	import FormField from '$lib/components/common/FormField.svelte';
</script>

<form method="POST" use:enhance>
	<FormField label="Name" type="text" id="name" name="name" placeholder="Recipe name"
	autocomplete="off" required />
	<FormField
		label="Source"
		type="text"
		id="source"
		name="source"
		placeholder="Recipe URL, book page, etc"
		autocomplete="off"
		required
	/>
	<FormField
		label="Ingredients"
		type="textarea"
		id="ingredients"
		name="ingredients"
		placeholder="Paste in ingredients - the app will format them"
		autocomplete="off"
		required
	/>
	<FormField
		label="Steps"
		type="textarea"
		id="steps"
		name="steps"
		placeholder="Paste in steps - the app will format them"
		autocomplete="off"
		required
	/>
	<FormField
		label="Password"
		type="password"
		id="password"
		name="password"
		placeholder="Enter password"
		autocomplete="off"
		required
	/>
	<button type="submit">Submit</button>
</form>

<style lang="postcss">
	form {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		margin: 1rem;

		& button {
			background: var(--gradient-30);
			border: var(--border-size-2) solid var(--teal-12);
			border-radius: var(--radius);
			box-shadow: var(--size-2);
			padding: var(--size-2);
			font-size: var(--font-size-3);
			text-transform: uppercase;
			cursor: pointer;
		}
	}
</style>
