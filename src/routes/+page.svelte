

<script>
</script>

<div class="wrapper">

  <div class="glow"></div>

  <div class="card">

    <h1 class="title">
      🚧 Under Construction
    </h1>

    <p class="desc">
      Bhai... thoda patience rakho 😌  
      <strong>jitubanna.com</strong> abhi build ho rahi hai full premium level pe.  
      Jaldi hi ek solid, next-gen experience launch hone wala hai.
    </p>

    <p class="thanks">
      ❤️ Thanks for waiting, legend.
    </p>

    <div class="divider"></div>

    <p class="subtext">
      Tab tak ye explore kar lo 👇
    </p>

    <!-- NORMAL LINKS -->
    <a href="https://me.jitubanna.com" target="_blank" class="link">
      🔗 me.jitubanna.com
    </a>

    <a href="https://wikipedia.jitubanna.com" target="_blank" class="link">
      📚 wikipedia.jitubanna.com
    </a>

    <!-- SPECIAL BUTTON -->
    <a href="https://jssoriginals.in" target="_blank" class="special">
      ⚡ Visit JSS Originals
    </a>

    <p class="note">
      In sabka upgraded version bhi jaldi aa raha hai 🔥
    </p>

  </div>

</div>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background: #020617;
    color: #e2e8f0;
    overflow-x: hidden;
  }

  .wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px; /* TOP PADDING HATA DIYA */
    position: relative;
  }

  /* BACKGROUND GLOW */
  .glow {
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(99,102,241,0.25), transparent);
    filter: blur(80px);
    z-index: 0;
  }

  .card {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 420px;
    padding: 22px;

    border-radius: 18px;

    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);

    border: 1px solid rgba(255,255,255,0.08);

    box-shadow: 
      0 10px 30px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(255,255,255,0.05);

    text-align: center;
  }

  .title {
    font-size: 22px;
    margin-bottom: 10px;
    letter-spacing: normal; /* bhai tension na le 😏 */
  }

  .desc {
    font-size: 14px;
    line-height: 1.6;
    color: #cbd5f5;
    margin-bottom: 12px;
  }

  .thanks {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 14px;
  }

  .divider {
    height: 1px;
    background: rgba(255,255,255,0.08);
    margin: 16px 0;
  }

  .subtext {
    font-size: 13px;
    color: #94a3b8;
    margin-bottom: 10px;
  }

  .link {
    display: block;
    margin: 6px 0;
    padding: 10px;
    border-radius: 10px;

    text-decoration: none;
    color: white;
    font-size: 14px;

    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);

    transition: all 0.2s ease;
  }

  .link:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.1);
  }

  /* SPECIAL BUTTON (VIP ENTRY 🔥) */
  .special {
    display: block;
    margin-top: 12px;
    padding: 12px;
    border-radius: 12px;

    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    color: white;

    background: linear-gradient(135deg, #6366f1, #22c55e);

    box-shadow: 0 6px 20px rgba(34,197,94,0.35);

    transition: all 0.25s ease;
  }

  .special:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 30px rgba(34,197,94,0.5);
  }

  .note {
    margin-top: 12px;
    font-size: 12px;
    color: #94a3b8;
  }

  /* DESKTOP UPGRADE */
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
