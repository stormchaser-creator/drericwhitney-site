# drericwhitney.com

Single static page (`index.html`), no build step.

## Branch `claude/refine-2026-11`

Modest refinements on top of the live site. Same layout, hero, structure and voice. Not merged to `main` and not deployed.

## Venture logos in `img/`

A small (22px) logo sits inline beside a project title only where the venture publishes a real logo. Both files come from Eric's own venture sites, fetched November 16, 2026.

| File | Used for | Source |
|---|---|---|
| `logo-still-you.png` | Still You Recovery, Still You Foundation (shared mark) | `https://stillyourecovery.com/assets/brand/stillyou-mark-240.webp` |
| `logo-credentialdomd.png` | CredentialDOMD | `https://credentialdomd.com/images/logo-64.png` |

PCRES, The Decoded Human, The Encoded Human Project and ANMG CallSync have no logo shown.

### Adding the PCRES logo when it arrives

Save it as `img/logo-pcres.png` (square, 64px or larger) and put this directly before the link inside the Pre-CERS & PCRES `<h3>`:

```html
<img class="logo" src="img/logo-pcres.png" alt="" width="22" height="22">
```
