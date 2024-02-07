# web site



## Tech stack
- [sveltekit](https://kit.svelte.dev/)
- [postcss](https://postcss.org/)
- [open props](https://open-props.style/) - [normalize default styling](https://codepen.io/argyleink/pen/KKvRORE)
- [cloudfare pages](https://pages.cloudflare.com/)

## issues
- husky caused cloudlfare pages to fail to build. Solution: [add a `.husky/install.mjs` and modify the `prepare` script as per the husky docs`](https://typicode.github.io/husky/how-to.html#ci-server-and-docker).
-