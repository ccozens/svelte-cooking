<script lang="ts">
    let { children, data } = $props<{ children: Snippet }>();

    let { session }      = data;

    let { name }         = session.user;
    $: console.log(session.user);
    $: console.log(name);
    let isLoggedIn = $state(true);


</script>

{@render children()}

<header class="header">
    <div class="signedInStatus">
        <p class="loaded">
            {#if isLoggedIn}

            <span class="signedInText">
                <small>Signed in as</small>
                <strong>{name}</strong>
            </span>
            <a href="/addRecipe/signout" class="button" data-sveltekit-preload-data="off">Sign out</a>
            {:else}
            <span class="notSignedInText">You are not signed in</span>
            <a href="/addRecipe/signin" class="buttonPrimary" data-sveltekit-preload-data="off">Sign in</a>
            {/if}
        </p>
    </div>
</header>

<style lang="postcss">
    /* Header styles */
    header.header {
        display: flex; /* Allow side-by-side elements */
        justify-content: space-between; /* Space items horizontally */
        align-items: center; /* Align vertically */
        padding: 1rem; /* Add some padding */
        box-sizing: border-box; /* Ensure padding is included in width */
    }

    .signedInStatus {
        display: flex;
        align-items: center;
    }

    .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .signedInText {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 0.5rem;
    }

    .notSignedInText {
        display: none;
    }


    .loaded .notSignedInText {
        display: block;
    }

    .loaded .signedInText {
        display: none;
    }

    .button {
        cursor: pointer;
    }

    .buttonPrimary {
        color: white;
        background-color: var(--lime-5);
    }

    .buttonPrimary:hover {
        color: var(--lime-5);
        background-color: white;
    }

    .buttonPrimary:focus {
        outline: none;
    }

    .buttonPrimary:active {
        background-color: var(--lime-5);
        color: white;
    }


</style>
