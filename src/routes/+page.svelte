// src/routes/+page.svelte

<script>
</script>

<div class="wrapper">

  <div class="card">

    <h1 class="title">🚧 Website Under Construction</h1>

    <p class="desc">
      Bhai... thoda sabr rakho 😌  
      jitubanna.com abhi full power mode mein ban rahi hai.  
      Jaldi hi ek mast, ultra premium version launch hone wala hai.
    </p>

    <p class="thanks">
      ❤️ Thank you for your patience!
    </p>

    <div class="links">

      <p class="subtext">
        Tab tak aap yahan visit kar sakte ho 👇
      </p>

      <a href="https://me.jitubanna.com" target="_blank" class="link">
        🔗 me.jitubanna.com
      </a>

      <a href="https://wikipedia.jitubanna.com" target="_blank" class="link">
        📚 wikipedia.jitubanna.com
      </a>

      <p class="note">
        Inka bhi upgraded version jaldi aane wala hai 🔥
      </p>

    </div>

  </div>

</div>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: radial-gradient(circle at top, #0f172a, #020617);
    color: #e2e8f0;
  }

  .wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .card {
    width: 100%;
    max-width: 420px;
    padding: 24px;
    border-radius: 20px;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);

    border: 1px solid rgba(255, 255, 255, 0.08);

    box-shadow: 0 10px 30px rgba(0,0,0,0.4);

    text-align: center;
  }

  .title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.6;
    color: #cbd5f5;
    margin-bottom: 14px;
  }

  .thanks {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 18px;
    color: #f1f5f9;
  }

  .links {
    margin-top: 10px;
  }

  .subtext {
    font-size: 13px;
    color: #94a3b8;
    margin-bottom: 10px;
  }

  .link {
    display: block;
    margin: 8px 0;
    padding: 10px;
    border-radius: 10px;

    text-decoration: none;
    color: white;
    font-size: 14px;

    background: linear-gradient(135deg, #3b82f6, #6366f1);

    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .link:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 20px rgba(99,102,241,0.4);
  }

  .note {
    margin-top: 12px;
    font-size: 12px;
    color: #94a3b8;
  }

  /* Desktop thoda bada */
  @media(min-width: 768px) {
    .title {
      font-size: 26px;
    }

    .desc {
      font-size: 15px;
    }

    .card {
      padding: 32px;
    }
  }
</style>
