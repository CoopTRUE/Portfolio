<script lang="ts">
  import 'normalize.css'
  import '../global.scss'
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'

  const goodbyeNames = ['Pls come back ;-;']

  const defaultTitle = 'Portfolio'
  let title = defaultTitle
  $: if (browser) document.title = title
  if (browser) {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        title = goodbyeNames[Math.floor(Math.random() * goodbyeNames.length)]
      } else {
        title = defaultTitle
      }
    })
  }
</script>

<slot />
