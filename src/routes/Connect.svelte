<script>
  import twitter from '$lib/svgs/twitter.svg'
</script>

<section id="connect">
  <h2 class="title">Get In Touch</h2>
  <div class="content">
    <p>
      I'm currently looking for a full-time position as a software engineer. If you're interested in
      working with me, please reach out!
    </p>
    <div class="contact">
      <a href="https://twitter.com/CoopTrue" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter" />
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  #connect {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 2.5rem;
      margin-top: 5rem;
      margin-bottom: min(2rem, 6vw);
    }
  }
  .content {
    width: 70%;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: min(2rem, 6vw);
    img {
      width: 3rem;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>
