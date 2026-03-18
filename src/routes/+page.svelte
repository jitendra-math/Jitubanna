
<script>
</script>

<div class="wrapper">

  <!-- BACKGROUND -->
  <div class="bg"></div>

  <div class="content">

    <div class="badge">Coming Soon</div>

    <h1 class="title">
      jitubanna.com
    </h1>

    <p class="subtitle">
      A new digital experience is being crafted.  
      Clean. Fast. Purposeful.
    </p>

    <!-- MAIN CTA -->
    <a href="https://jssoriginals.in" target="_blank" class="cta-primary">
      Explore JSS Originals →
    </a>

    <!-- SECONDARY LINKS -->
    <div class="links">
      <a href="https://me.jitubanna.com" target="_blank">
        me.jitubanna.com
      </a>

      <a href="https://wikipedia.jitubanna.com" target="_blank">
        wikipedia.jitubanna.com
      </a>
    </div>

  </div>

</div>

<style>

  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: #ffffff;
    color: #0f172a;
  }

  /* REMOVE ALL TOP GAP 🔥 */
  :global(.home-page),
  :global(main) {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }

  .wrapper {
    min-height: calc(100vh - 64px); /* navbar height adjust */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    position: relative;
    overflow: hidden;
  }

  /* RICH GRADIENT BACKGROUND 🌈 */
  .bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(99,102,241,0.25), transparent 40%),
      radial-gradient(circle at 80% 30%, rgba(236,72,153,0.2), transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(34,197,94,0.2), transparent 40%);
    filter: blur(60px);
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 420px;
    width: 100%;
  }

  .badge {
    display: inline-block;
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(99,102,241,0.1);
    color: #4f46e5;
    margin-bottom: 14px;
  }

  .title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 15px;
    color: #475569;
    margin-bottom: 22px;
    line-height: 1.5;
  }

  /* MAIN BUTTON 🔥 (ab asli hero) */
  .cta-primary {
    display: inline-block;
    padding: 14px 18px;
    border-radius: 12px;

    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    color: white;

    background: linear-gradient(135deg, #6366f1, #ec4899);

    box-shadow: 0 10px 30px rgba(99,102,241,0.35);

    transition: all 0.25s ease;
  }

  .cta-primary:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 16px 40px rgba(99,102,241,0.45);
  }

  .links {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .links a {
    font-size: 13px;
    color: #64748b;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .links a:hover {
    color: #0f172a;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 34px;
    }

    .subtitle {
      font-size: 16px;
    }
  }

</style>