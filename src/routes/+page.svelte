<script>
</script>

<div class="wrapper">

  <!-- BACKGROUND -->
  <div class="bg-gradient"></div>

  <div class="card">

    <div class="badge">🚧 Work in Progress</div>

    <h1 class="title">
      Website is Coming Soon
    </h1>

    <p class="desc">
      Bhai… thoda patience rakho 😌  
      <strong>jitubanna.com</strong> abhi carefully craft ho rahi hai.  
      Jaldi hi ek clean, fast aur next-level experience launch hoga.
    </p>

    <p class="thanks">
      ❤️ Thanks for your patience
    </p>

    <div class="divider"></div>

    <p class="subtext">
      Tab tak ye check kar lo 👇
    </p>

    <!-- LINKS -->
    <div class="links">
      <a href="https://me.jitubanna.com" target="_blank" class="link">
        🔗 me.jitubanna.com
      </a>

      <a href="https://wikipedia.jitubanna.com" target="_blank" class="link">
        📚 wikipedia.jitubanna.com
      </a>
    </div>

    <!-- SPECIAL BUTTON -->
    <a href="https://jssoriginals.in" target="_blank" class="special">
      ⚡ Explore JSS Originals
    </a>

    <p class="note">
      In sabka upgraded version bhi jaldi aa raha hai 🚀
    </p>

  </div>

</div>

<style>

  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: #f8fafc;
    color: #0f172a;
    overflow-x: hidden;
  }

  .wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    position: relative;
  }

  /* SOFT PREMIUM BACKGROUND */
  .bg-gradient {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(99,102,241,0.15), transparent),
      radial-gradient(circle at 80% 70%, rgba(34,197,94,0.12), transparent);
    z-index: 0;
  }

  .card {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 420px;
    padding: 22px;

    border-radius: 20px;

    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(14px);

    border: 1px solid rgba(0,0,0,0.05);

    box-shadow:
      0 10px 30px rgba(0,0,0,0.08),
      inset 0 1px 0 rgba(255,255,255,0.6);

    text-align: center;
  }

  .badge {
    display: inline-block;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(99,102,241,0.1);
    color: #4f46e5;
    margin-bottom: 10px;
  }

  .title {
    font-size: 22px;
    margin-bottom: 8px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.6;
    color: #475569;
    margin-bottom: 10px;
  }

  .thanks {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 14px;
  }

  .divider {
    height: 1px;
    background: rgba(0,0,0,0.06);
    margin: 16px 0;
  }

  .subtext {
    font-size: 13px;
    color: #64748b;
    margin-bottom: 10px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .link {
    display: block;
    padding: 10px;
    border-radius: 10px;

    text-decoration: none;
    color: #0f172a;
    font-size: 14px;

    background: rgba(255,255,255,0.9);
    border: 1px solid rgba(0,0,0,0.05);

    transition: all 0.2s ease;
  }

  .link:hover {
    transform: translateY(-2px);
    background: white;
    box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  }

  /* HERO BUTTON 🔥 */
  .special {
    display: block;
    margin-top: 14px;
    padding: 13px;
    border-radius: 14px;

    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    color: white;

    background: linear-gradient(135deg, #6366f1, #22c55e);

    box-shadow: 0 8px 24px rgba(34,197,94,0.3);

    transition: all 0.25s ease;
  }

  .special:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px rgba(34,197,94,0.45);
  }

  .note {
    margin-top: 12px;
    font-size: 12px;
    color: #64748b;
  }

  @media (min-width: 768px) {
    .card {
      padding: 30px;
    }

    .title {
      font-size: 26px;
    }

    .desc {
      font-size: 15px;
    }
  }

</style>