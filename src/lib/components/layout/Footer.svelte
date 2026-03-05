<!-- src/lib/components/layout/Footer.svelte -->

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
          jitubanna.in
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

    border-top: 1px solid var(--border-subtle);
  }

  .footer-inner {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .footer-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    max-width: 320px;
  }

  .footer-social {
    display: flex;
    gap: 12px;
  }

  .footer-bottom {
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  @media (max-width: 480px) {
    .footer {
      padding-top: 40px;
      padding-bottom: 32px;
    }
  }
</style>