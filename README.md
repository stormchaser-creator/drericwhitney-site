# drericwhitney.com — redesign (Claude revision)

Branch `claude/redesign-2026-11`. A proposal for Eric Whitney, DO's personal site. **Not merged to `main` and not deployed**; `main` deploys the live site.

## What this is

One scrolling page, per Eric's November 16 direction (one page, real colour sections, many pictures, less reading and clicking). Plain HTML, CSS and a few lines of JavaScript. No build step: serve the folder as-is.

```
python3 -m http.server 8000   # then open http://localhost:8000
```

| File | Purpose |
|---|---|
| `index.html` | The whole site. Sections: start here (`#top`), `#practice`, `#research`, `#ventures`, `#about`, `#speaking`, `#contact` (with `#patients` and `#professional`). |
| `404.html` | Not-found page. |
| `assets/css/site.css` | All styles. Colour tokens are at the top. |
| `assets/js/site.js` | Copy-bio and copy-address buttons only. The page works without it. |
| `assets/fonts/` | Self-hosted Literata and Atkinson Hyperlegible Next (SIL OFL 1.1, see `OFL.txt`). No third-party requests. |
| `robots.txt`, `_headers` | Block crawling and send `X-Robots-Tag: noindex, nofollow` while this is a preview. |
| `sitemap.xml` | Ready for launch; not referenced while crawling is blocked. |
| `preview/` | Screenshots at 1440px and 390px. |

Contact is `mailto:` and `tel:` only. There are no forms, analytics, trackers, cookies or secrets.

## Before launch

1. Resolve the `[confirm]` items below (search `class="confirm"` in `index.html`).
2. Remove the preview bar markup and the `<meta name="robots" content="noindex, nofollow">` tags.
3. Replace `robots.txt` with an allow rule plus the sitemap line, and delete the `X-Robots-Tag` line in `_headers`.

## Palette

Navy `#14213d`, cobalt `#2148a8`, teal `#0d6a66`, violet `#4a2f85`, pine `#14573f`, aqua accent `#8fe3d6`, with pale sky, mint and lilac tints. No orange, rust or terracotta, per Eric.

## Image sources

All files are in `assets/img/`. Each has a `.jpg` and a `.webp` unless noted.

### Photos of Eric (real)

| File | Source |
|---|---|
| `eric-whitney-warm-*`, `eric-whitney-formal-*` | Approved headshots received November 15, 2026, from the brief bundle. EXIF already stripped. |
| `eric-whitney-formal-press.jpg` | The bundle's `original-formal.png` (1024 × 1536) saved as JPG, for the media download link. |
| `eric-and-paris-whitney` | Eric's own public page: `https://stillyourecovery.com/brain-surgery/images/eric-and-paris.png`, published on stillyourecovery.com/about. Marked `[confirm]`. |
| `og-eric-whitney.jpg` | Social card built for this site from the formal square headshot. |

### Eric's own work

| File | Source |
|---|---|
| `still-you-brain-surgery-cover` | `https://stillyourecovery.com/brain-surgery/images/book-cover.jpg` |
| `still-you-stroke-cover` | `https://stillyourecovery.com/book/still-you-stroke-recovery-book-cover.webp` |
| `venture-credentialdomd` | `https://credentialdomd.com/images/app-dashboard.webp` (product screenshot showing sample data) |
| `venture-pcres`, `venture-still-you-foundation`, `venture-decoded-human`, `venture-encoded-human` | Screenshots of the public home pages of pcres.org, stillyoufoundation.org, thedecodedhuman.com and theencodedhumanproject.com, captured November 16, 2026 at 1280px wide. |
| `venture-neurosurgeons-notebook` | Cropped screenshot of `https://substack.com/@drericwhitney`, captured November 16, 2026. The crop leaves out the subscriber count, which the brief says not to quote. |

Note: the Decoded Human screenshot shows that site's own live counters as they were on the capture date.

### Stock photographs (none depict Eric, his patients or his hospitals)

Each is captioned as a stock photograph on the page.

| File | Subject | Author | Licence | Source |
|---|---|---|---|---|
| `stock-neurosurgery-team` | Surgeons operating | U.S. Navy photo by Petty Officer 1st Class Elizabeth Merriam | Public domain (U.S. federal government work) | [Commons: Pacific Partnership 160722-N-BB534-451](https://commons.wikimedia.org/wiki/File:Pacific_Partnership_160722-N-BB534-451.jpg) |
| `stock-operating-room` | Empty operating room | Dr. Jayesh Amin | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [Commons: Laparoscopic operating theatre](https://commons.wikimedia.org/wiki/File:Laparoscopic_operating_theatre.jpg) |
| `stock-exam-room` | Clinic examination room | Shixart1985 | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Commons: Modern medical examination room](https://commons.wikimedia.org/wiki/File:Modern_medical_examination_room.jpg) |
| `stock-lecture-hall` | Empty lecture hall | Theonlysilentbob | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [Commons: Curtis Lecture Halls interior view1](https://commons.wikimedia.org/wiki/File:Curtis_Lecture_Halls_interior_view1_empty_class.jpg) |

All four were cropped and resized. The two CC BY-SA images stay under CC BY-SA 3.0 in their cropped form, and their on-page captions carry the author and licence links that the licences require. Replace any of these with Eric's own photographs when available; real photos of his operating room, clinic or talks would be stronger.

### Generated illustrations (made for this site, in code)

| Where | What |
|---|---|
| Blue quote band | A field of travelling wave lines, drawn as inline SVG. A nod to the soliton paper. |
| ANMG CallSync card | An abstract weekly on-call grid, inline SVG. It is labelled as an illustration and is not a screenshot of the product. |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | A single wave on navy. |

The older `headshot.jpg` and `og-card.png` were removed from this branch, as the brief asks.

## `[confirm]` items and the defaults chosen

| # | Item | Default on this branch |
|---|---|---|
| 1 | Professional email | `drericwhitney@gmail.com` (published on the Still You contact page). The other published option is `eric@stillyourecovery.com`. |
| 2 | Skull base fellowship and skull base focus | Shown, marked `[confirm]`. Source: ANMG team page. |
| 3 | Hospital affiliations | The four on the current personal site (Eisenhower Health, ARMC, RUHS, Desert Regional). ANMG's page lists Redlands in place of Desert Regional. |
| 4 | "Board-eligible" on anmg-ca.com | This site says board-certified, as Eric's own sites do. Someone may want to ask ANMG to update its page. |
| 5 | Personal biography and the photo with Dr. Paris Whitney | Shown, marked `[confirm]`. The sentence about difficult relationships was left out. |
| 6 | "Under review at Cureus" review and "hundreds of craniotomy patients" | Left out. |
| 7 | Speaking, media and press history | None listed. The page says so. |
| 8 | Photographer credit for the portraits | Not provided. |
| 9 | Appointment link | Both anmg-ca.com and the Eisenhower Health provider page. |
| 10 | Office address | Not shown. Phone only: (760) 610-8781, ANMG's Rancho Mirage line. |
| 11 | Dragon Pilgrimage | Not included. |
| 12 | Encoded Human knowledge-base counts; directory-only claims (accepting new patients, years of experience, middle name, other state licences) | Not repeated. |

## Not done here

- No deploy and no preview URL. The instruction for this branch was not to deploy.
- The existing `.wrangler/` folder from `main` is untouched.
