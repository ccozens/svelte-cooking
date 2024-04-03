<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form method="POST" use:enhance>
	<label for="name">Name</label>
	<input type="text" id="name" name="name" required />
	<label for="source">Source</label>
	<input type="text" id="source" name="source" required />
	<label for="ingredients">Ingredients</label>
	<textarea id="ingredients" name="ingredients" required></textarea>
	<label for="steps">Steps</label>
	<textarea id="steps" name="steps" required></textarea>
	<button type="submit">Submit</button>
</form>

<style lang="postcss">
	form {
		display: grid;
		gap: 1rem;
        padding: 1rem;
		margin: 1rem;

        input {
            padding: 0.5rem;
            height: 4vh;
        }
		textarea {
            padding: 0.5rem;
			height: 20vh;
		}
	}
</style>
