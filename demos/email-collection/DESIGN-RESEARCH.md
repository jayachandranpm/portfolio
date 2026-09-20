# Design research and art-direction system

## Implementation decisions

- Google Fonts are loaded as progressive enhancement. Google recommends declaring a generic fallback, and email guidance recommends matching the fallback's category and x-height so layouts remain stable.
- Outlook-specific CSS forces durable local fallbacks where older desktop Outlook versions mishandle web-font fallbacks.
- Body copy and actionable text target WCAG AA contrast: 4.5:1 for normal text and 3:1 only for genuinely large text.
- Color never carries meaning alone. Labels, numbers, hierarchy, and CTA language remain explicit.
- Photography comes from Pexels under its free-use license. Local 1200 × 600 copies keep every template reproducible and make ESP upload straightforward.
- Each image includes useful alt text and a visible photographer/source credit. Meaningful wording remains live HTML text.

## Ten distinct systems

| Template | Design language | Display / body type | Key scale | Palette | Editorial image |
|---|---|---|---|---|---|
| Welcome | Organic editorial collage | Cormorant Garamond / DM Sans | 58px hero, 20px intro | Evergreen `#173F35`, lichen `#8DAD68`, clay `#D8663E`, parchment `#FBF8EE` | Sunlit forest canopy |
| Onboarding | Signal-trail field guide | IBM Plex Sans / IBM Plex Mono | 52px hero, 34px step numbers | Alpine `#1F3328`, trail rust `#B8442D`, fog `#F1EEE7` | Ant colony in foliage |
| Newsletter | Dark literary journal | Fraunces / Work Sans | 54px hero, 29px feature | Ink `#171A16`, fungus orange `#C35431`, mycelium `#E9DFC8` | Forest-floor mushrooms |
| Seasonal | Mid-century travel poster | Libre Baskerville / Source Sans 3 | 56px hero, 24px cards | Sky `#BEDCE4`, sun `#F4B44B`, navy `#173C52` | Birds at orange sunset |
| Product launch | Streamlined neo-futurism | Space Grotesk / Inter | 54px hero, 26px lead | Midnight `#252041`, coral `#E46F4D`, lavender `#B9B4FF` | Kingfisher in flight |
| Event | Nocturnal luxury invitation | Bodoni Moda / Manrope | 55px hero, 24px agenda | Night `#102A35`, firefly `#D9FF70`, signal teal `#7ED3C2` | Warm nocturnal lights |
| Promotion | High-signal botanical poster | Barlow Condensed / Barlow | 58px hero, 82px offer | Leaf `#263F22`, pollen `#E6B928`, signal red `#D34832` | Bee pollinating yellow flower |
| Re-engagement | Quiet botanical letter | Lora / Nunito Sans | 54px hero, 19px note | Soil `#9A5638`, moss `#71834B`, seed paper `#FCF8EE` | Seedling emerging from soil |
| Transactional | Modular utility system | Roboto Slab / Roboto | 47px hero, 18px total | Charcoal `#282516`, honey `#F6D66F`, wax `#FFEDAE` | Natural honeycomb detail |
| Feedback survey | Kinetic data editorial | Newsreader / Karla | 55px hero, 25px question | Night violet `#211D3C`, coral `#E66252`, signal gold `#F4B74A` | Starling murmuration |

## Primary references

- Google Fonts CSS API: https://developers.google.com/fonts/docs/getting_started
- Email web-font fallbacks and Outlook behavior: https://www.campaignmonitor.com/resources/guides/web-fonts-in-email/
- WCAG 2.2 contrast and use-of-color criteria: https://www.w3.org/TR/WCAG22/
- Pexels license: https://www.pexels.com/license/
