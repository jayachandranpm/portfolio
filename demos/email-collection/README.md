# Biomimicry Email Collection

Ten standalone HTML email templates, each translating a natural system into a campaign structure rather than using nature as surface decoration. Each design has its own type system, palette, compositional language, and freely licensed editorial photograph.

All company, publication, product, and organization names used in the templates are fictional illustrative placeholders.

| # | Campaign type | Biomimicry concept | File |
|---|---|---|---|
| 01 | Welcome | Forest succession: root → branch → canopy | `templates/01-welcome-canopy.html` |
| 02 | Onboarding | Ant pheromone wayfinding | `templates/02-onboarding-trail.html` |
| 03 | Newsletter | Mycelium information networks | `templates/03-newsletter-mycelium.html` |
| 04 | Seasonal | Migration cues and timed movement | `templates/04-seasonal-migration.html` |
| 05 | Product launch | Kingfisher streamlined entry | `templates/05-product-launch-kingfisher.html` |
| 06 | Event invitation | Firefly signal synchronization | `templates/06-event-invitation-firefly.html` |
| 07 | Promotion | Pollination reward signals | `templates/07-promotion-pollination.html` |
| 08 | Re-engagement | Seed dormancy and conditional restart | `templates/08-reengagement-seedbank.html` |
| 09 | Transactional | Honeycomb cell packing | `templates/09-transactional-honeycomb.html` |
| 10 | Feedback survey | Starling murmuration and local signals | `templates/10-feedback-murmuration.html` |

Open `index.html` for the visual gallery, or open any file in `templates/` directly.

## Production notes

- Each email is standalone and uses a 600px presentation-table shell.
- Important presentation styles are inline; the only embedded CSS is the mobile media query.
- Web fonts are progressive enhancement. Every family includes a compatible Georgia, Arial, Arial Narrow, or Courier New fallback and an Outlook override.
- Designs do not rely on SVG, background images, JavaScript, hover states, shadows, blur, or opacity for meaningful content.
- Ten actively used 1200 × 600 Pexels photographs are stored locally in `public-images/`; every file is below 1 MB.
- Text remains readable if border radius, media queries, or decorative glyphs are not supported.
- Replace all `{{placeholder}}` values before sending.
- Upload the files in `public-images/` to the ESP or an HTTPS host and replace each relative `../public-images/...` path before a live send.
- Keep legal address, preference, and unsubscribe links intact for marketing sends.
- The gallery JavaScript is only for local review; no email template contains JavaScript.

See `BIOMIMICRY-MAP.md` for the nature-to-email translations, `DESIGN-RESEARCH.md` for the typography, palette, contrast, and art-direction system, and `IMAGE-SOURCES.md` for licensing and credits.

## Suggested test pass

1. Replace placeholders with test data and absolute HTTPS links.
2. Send test messages through the target ESP.
3. Verify desktop and mobile in Gmail, Outlook, Apple Mail, and Yahoo.
4. Confirm dark-mode contrast and link tracking.
5. Test with images disabled; these designs intentionally remain complete without imagery.
