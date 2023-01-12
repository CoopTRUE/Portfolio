<script lang="ts">
  import 'normalize.css'
  import '../global.scss'
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'

  const goodbyeNames = ['Come back :,(', 'I miss you already', 'Pls come back ;-;']

  const defaultTitle = 'Portfolio'
  let title = defaultTitle
  $: if (browser) document.title = title

  let loaded = false
  onMount(() => {
    loaded = true
    document.addEventListener('visibilitychange', async () => {
      if (document.visibilityState === 'hidden') {
        await new Promise((resolve) => setTimeout(resolve, 10))
        if (document.visibilityState === 'hidden')
          title = goodbyeNames[Math.floor(Math.random() * goodbyeNames.length)]
      } else {
        title = defaultTitle
      }
    })
  })
</script>

{#if loaded}
  <slot />
{/if}
