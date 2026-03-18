
<script>
  import Container from "./Container.svelte";
  import GradientText from "../ui/GradientText.svelte";
  import IconButton from "../ui/IconButton.svelte";
  import { SOCIAL_LINKS } from "../../utils/constants";
  import { Github, Mail, Twitter } from "lucide-svelte";

  const icons = {
    GitHub: Github,
    Email: Mail,
    Twitter: Twitter
  };

  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <Container size="mobile" padding={true}>
    <div class="footer-inner">

      <!-- Branding -->
      <div class="footer-brand">
        <GradientText tag="span" gradient="primary" weight="bold">
          Jitendra Singh Nimod 
        </GradientText>

        <p class="footer-desc">
          Building fast, experimental web tools for the modern internet.
        </p>
      </div>

      <!-- Social icons -->
      <div class="footer-social">
        {#each SOCIAL_LINKS as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              icon={icons[link.name]}
              label={link.name}
              variant="glass"
              size="md"
            />
          </a>
        {/each}
      </div>

      <!-- Bottom line -->
      <div class="footer-bottom">
        <span class="copyright">
          © {year} Jitu Banna
        </span>
      </div>

    </div>
  </Container>
</footer>

<style>

  .footer {
    margin-top: 80px;
    padding-top: 48px;
    padding-bottom: 36px;

    background: #f8fafc;

    border-top: 1px solid rgba(0,0,0,0.06);
  }

  .footer-inner {
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .footer-desc {
    font-size: 13px;
    color: #64748b;
    max-width: 320px;
    line-height: 1.5;
  }

  .footer-social {
    display: flex;
    gap: 12px;
  }

  /* ICON BUTTON UPGRADE 😏 */
  .footer-social a :global(button) {
    background: rgba(255,255,255,0.9);
    border: 1px solid rgba(0,0,0,0.06);

    box-shadow: 0 4px 12px rgba(0,0,0,0.06);

    transition: all 0.2s ease;
  }

  .footer-social a :global(button:hover) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  .footer-bottom {
    font-size: 12px;
    color: #94a3b8;
  }

  @media (max-width: 480px) {
    .footer {
      padding-top: 40px;
      padding-bottom: 32px;
    }
  }

</style>
