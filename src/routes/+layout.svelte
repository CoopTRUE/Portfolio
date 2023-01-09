<script lang="ts">
  import 'normalize.css'
  import '../global.scss'
  import { onMount } from 'svelte'

  let loaded = false
  onMount(() => (loaded = true))
</script>

{#if loaded}
  <slot />
{/if}
