<script lang="ts">
  import { inview } from 'svelte-inview'
  import projects from './projects'

  const visible = Array(projects.length).fill(false) as boolean[]
</script>

<div class="wrapper">
  <section id="work">
    <h2 class="title">My Work</h2>
    <div class="projects">
      {#each projects as { color, link, img, name, desc }, i}
        <div
          class="project-wrapper"
          style:background={color}
          use:inview={{ unobserveOnEnter: true }}
          on:enter={() => (visible[i] = true)}
          class:transitionRight={visible[i] && i % 2 !== 0}
          class:transitionLeft={visible[i] && i % 2 === 0}
        >
          <div class="project">
            <img src={img} alt={name} />
            <div class="text">
              <h3 class="name">
                {#if link}
                  <a href={link}>{name}</a>
                {:else}
                  {name}
                {/if}
              </h3>
              <p class="description">{desc}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <div class="star-wrapper">
    <div class="stars1" />
    <div class="stars2" />
    <div class="stars3" />
  </div>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
  }
  .star-wrapper {
    position: absolute;
    top: 20rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    > * {
      position: absolute;
    }
  }
  @function multiple-box-shadow($n) {
    $value: '#{random(2000)}px #{random(2000)}px black';
    @for $i from 2 through $n {
      $value: '#{$value} , #{random(2000)}px #{random(2000)}px black';
    }

    @return unquote($value);
  }
  $shadows-small: multiple-box-shadow(700);
  $shadows-medium: multiple-box-shadow(200);
  $shadows-large: multiple-box-shadow(100);
  .stars1 {
    width: 1.5px;
    height: 1.5px;
    box-shadow: $shadows-small;
    animation: animStar 50s linear infinite;
  }
  .stars2 {
    // border: 10px solid black;
    width: 2px;
    height: 2px;
    box-shadow: $shadows-medium;
    animation: animStar 100s linear infinite;
  }
  .stars3 {
    width: 3px;
    height: 3px;
    box-shadow: $shadows-large;
    animation: animStar 150s linear infinite;
  }
  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
  #work {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 2.5rem;
      margin: 5rem 0;
    }
    overflow-y: hidden;
    position: relative;
  }
  .projects {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project-wrapper {
    //980 500
    width: min(60rem, 90vw);
    height: min(30rem, 40vw);
    @media (max-width: 780px) {
      height: 25rem;
      border-radius: 20px !important;
    }
    border-radius: 40px;
    position: relative;
    overflow: hidden;
    visibility: hidden;
    background: linear-gradient(180deg, rgb(85, 32, 148) 0%, rgb(126, 145, 232) 100%);
    &.transitionRight {
      visibility: visible;
      // fast to slow easing
      animation: transitionRight 0.7s ease;
    }
    &.transitionLeft {
      visibility: visible;
      animation: transitionLeft 0.7s ease;
    }
    @keyframes transitionRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes transitionLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    &:nth-child(even) {
      .project {
        grid-template-areas: 'text image';
        img {
          // border-radius: 10px 0 0 0 !important;
          border-top-left-radius: 10px !important;
        }
      }
    }
  }
  .project {
    bottom: 0;
    position: absolute;
    // display: flex;
    // align-items: center;
    display: grid;
    // grid-template-columns: 620px 1fr;
    // grid-template-rows: 1fr;
    grid-template-areas: 'image text';
    @media (max-width: 780px) {
      grid-template-areas: 'text' 'image' !important;
      .name {
        text-align: center;
      }
      img {
        border-radius: 10px 10px 0 0 !important;
        width: 70vw !important;
      }
      .description {
        margin-bottom: 1rem;
      }
    }
    place-items: center;
    .text {
      grid-area: text;
      margin: 0 3.125rem;
    }
    .name {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .description {
      font-size: 1.2rem;
      font-family: 'AirbnbCereal_W_Lt';
    }
    overflow: hidden;
    img {
      margin-top: auto;
      grid-area: image;
      width: min(620px, 50vw);
      border-top-right-radius: 10px;
    }
  }
</style>
