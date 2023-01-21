<script lang="ts">
  import tools from './tools'
</script>

<section id="tools">
  <h2 class="title">Tools I Work With</h2>
  <div class="tools">
    {#each tools as { img, name, desc }}
      <div class="tool">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <!-- <p>{desc}</p> -->
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  #tools {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .title {
    font-size: 2.5rem;
    margin: 5rem 0;
  }
  .tools {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    // every other tool should be on the right
    :nth-child(even) {
      align-self: flex-end;
    }
    img {
      width: 300px;
      height: 300px;
      object-fit: contain;
    }
  }
</style>
