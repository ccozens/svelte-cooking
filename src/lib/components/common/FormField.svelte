<script lang="ts">
	let { label, type, id, name, placeholder, required } = $props<{
		label: string;
		type: string;
		id: string;
		name: string;
		placeholder: string;
		autocomplete: string;
		required: boolean;
	}>();

	placeholder = placeholder || '';
</script>

<div class="form-field">
	<label for={id}>{label}</label>
	<input {type} {id} {name} {placeholder} {required} />
</div>

<style lang="postcss">
	.form-field {
		display: grid;
		gap: 1rem;
	}

	label {
		font-size: var(--font-size-3);
		text-transform: capitalize;
	}

	input,
	textarea {
		/* background: var(--gradient-30); */
		border: var(--border-size-2) solid var(--teal-12);
		border-radius: var(--radius);
		box-shadow: var(--size-2);
		padding: var(--size-2);
		font-size: var(--font-size-3);
	}
</style>
