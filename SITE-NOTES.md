# traviszadeh.com — Site Notes
*Last updated: June 25, 2026*

---

## Overview

Personal academic website for Travis Zadeh, Professor of Religious Studies and Chair of the Department of Religious Studies and the Council on Middle East Studies at Yale University. Built via vibe coding in dialogue with Claude and Gemini over two sessions (June 24–25, 2026).

**Live URL:** https://traviszadeh.com  
**Repository:** github.com/travis-zadeh/traviszadeh.github.io  
**Deployment:** GitHub Pages (static)  
**Domain registrar:** Cloudflare  
**DNS:** Four A records pointing to GitHub Pages IPs + CNAME www → travis-zadeh.github.io  
**HTTPS:** Enforced via GitHub Pages  

---

## Tech Stack

- Pure HTML5 / CSS3 / vanilla JavaScript — no frameworks
- Font: EB Garamond via Google Fonts
- Deployment: GitHub Pages via GitHub Desktop app
- No build process, no dependencies

### Design Tokens (css/style.css)
```
--bg:        #FAFAF8
--text:      #1C1C1C
--muted:     #5A5A5A
--accent:    #8C6A4A
--rule:      #D8D4CE
--col:       680px
--col-wide:  900px
Base font:   20px (1rem)
Line-height: 1.9
```

---

## File Structure

```
traviszadeh.github.io/
├── index.html                    (home — hero + identity block)
├── CNAME                         (traviszadeh.com)
├── favicon.ico                   (Sheikh Lotfollah Mosque, Isfahan — photo by TZ)
├── apple-touch-icon.png          (180×180px — same image)
├── sitemap.xml                   (submitted to Google Search Console)
├── google1d6b717890f995da.html   (Google Search Console verification file)
├── css/
│   └── style.css
├── js/
│   └── script.js                 (shared nav, mobile captions, footer year)
├── img/
│   ├── portolan-map-ottoman-sixteenth-century.jpg  (hero)
│   ├── travis-zadeh-author-photo.jpg
│   ├── simurgh-chester-beatty-per277.png
│   ├── clouds-chester-beatty-per277.png
│   ├── jinn-persian-manuscript.png
│   ├── birds-blossoms-f1945.png
│   ├── is1500-star-medallion.png
│   ├── merchant-persian-manuscript.png
│   ├── tree-manuscript-islamic.png
│   ├── dragon-persian-manuscript.png
│   ├── cosmos-diagram-islamic.png
│   ├── cosmos-angels-medallion.png
│   ├── rosette-blue-gold.png
│   ├── kufic-design-medallion.png
│   ├── jinn2-white-persian.png
│   └── covers/
│       ├── cover-wonders.jpg
│       ├── cover-vernacular-quran.jpg
│       └── cover-mapping-frontiers.jpg
├── pages/
│   ├── biography.html
│   ├── research.html
│   ├── publications.html
│   ├── wonders-and-rarities.html
│   ├── public-scholarship.html
│   └── university.html
└── pdf/
    └── [23 article PDFs]
```

---

## Key Design Decisions

- **No em dashes** anywhere on the site
- **No hedging language**
- **First person** on all pages except Biography (third person)
- **No PDF CV link**
- **No mention** of forthcoming Chicago book
- **"Professor"** not "Full Professor" in all public-facing text and metadata
- **No captions visible** on desktop — all image attribution via hover tooltips only
- Images use semantic `<figure class="ms-card">` with `<figcaption class="ms-caption">` at opacity 0, fading in on hover/focus
- **Page titles:** Home = "Travis Zadeh" / Inner pages = "Page Name — Travis Zadeh"

---

## Navigation Structure

- Travis Zadeh (home)
- Biography
- Research
- Publications
- Public Scholarship
- University Life

---

## Favicon Easter Egg

Every HTML file contains this comment in the `<head>`, visible only in page source:

```html
<!-- ─────────────────────────────────────────────────────────
     Favicon: Sheikh Lotfollah Mosque, Isfahan, Iran.
     Photograph by Travis Zadeh.
     Thuluth calligraphy: إلى السماء فبلغ البيت المعمور وحضرت الصلاة فأذن جبرئيل
     "...to heaven, and he reached the Frequented House, and the time of 
     prayer came, so Gabriel called the adhān."
     ───────────────────────────────────────────────────────── -->
```

The favicon is a 512×512px crop of TZ's own photograph of the Sheikh Lotfollah Mosque, Isfahan, taken on a Canon PowerShot digital compact ca. 2004. The calligraphic band contains a Miʿrāj hadith in thuluth script identified by TZ.

---

## JavaScript (js/script.js)

Shared across all pages. Handles:

1. **Nav scroll effect** — adds `.scrolled` class (solid background) after 40px scroll
2. **Home page** — nav has `class="site-nav home"` which triggers `.scrolled` immediately on load
3. **Mobile nav auto-close** — hamburger menu closes automatically after 4 seconds
4. **Mobile image captions** — on touch devices only:
   - Tap image → caption appears for 3 seconds then fades
   - ALL archive links inside `.ms-card` are disabled on mobile (preventDefault on touchend)
   - Tap anywhere else → caption dismisses immediately
5. **Footer year** — `document.getElementById('yr')` auto-updates copyright year

---

## Mobile Behavior (≤720px breakpoint)

- Nav name ("Travis Zadeh") hidden on inner pages — page title in nav bar instead
- Nav name hidden on home page too — hamburger moves to right
- Hamburger menu appears top-right on all pages
- "Home" link added as first item in mobile dropdown on all inner pages
- Page title overlays nav bar on inner pages (absolute positioned)
- All manuscript images center-aligned (float: none, margin: auto)
- Book covers center-aligned
- Hero image height reduces to 280px
- `.col` padding reduces to 24px left/right
- Last nav dropdown item has no border (prevents double line)

---

## CSS Architecture Notes

- Single stylesheet: `css/style.css`
- CSS custom properties (variables) for all colors and column widths
- Page-specific `<style>` blocks remain in individual HTML files (biography, research, wonders-and-rarities, public-scholarship, university) — intentional, not a bug
- `@media (prefers-reduced-motion: reduce)` implemented for accessibility
- WCAG 2.1 AA compliant: skip links, focus states, ARIA labels, semantic HTML

---

## Google & SEO

- **Google Search Console:** verified via HTML file (google1d6b717890f995da.html in root)
- **Sitemap:** sitemap.xml submitted to Search Console June 25, 2026
- **Open Graph tags:** present on all pages
- **JSON-LD schema:** Person schema on index.html
- **Canonical URLs:** present on all pages
- Note: Google cache may still show old metadata ("Full Professor", "Yale University" in title) for a few weeks — this will self-correct as Google recrawls

---

## GitHub Desktop Workflow

To update the site:
1. Replace/add files in local `traviszadeh.github.io` folder
2. Open GitHub Desktop — changed files appear under Changes
3. Type summary in Summary field
4. Click **Commit to main**
5. Click **Push origin**
6. Site updates live within ~60 seconds

---

## Cloudflare DNS Records

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | travis-zadeh.github.io | DNS only |

**Important:** Keep all records as DNS only (grey cloud). Cloudflare proxy (orange cloud) breaks GitHub Pages SSL.

---

## Changelog

### June 24, 2026 — Initial Build
- Full site designed and built from scratch
- Deployed to GitHub Pages with custom domain
- Cloudflare DNS configured
- HTTPS enforced

### June 25, 2026 — Fixes and Enhancements
- Isfahan favicon (Sheikh Lotfollah Mosque) added
- Easter egg comment added to all HTML files
- Mobile layout refined: image centering, hamburger position, caption behavior
- Mobile archive links disabled (JS preventDefault)
- Google Search Console verified and sitemap submitted
- Metadata cleaned: "Full Professor" → "Professor", og:title Yale removed
- Book cover mobile cropping fixed
- Nav dropdown border fix (no double line under last item)
- Auto-close timer added to mobile nav (4 seconds)
- "Museum Consulting & Press" → "Museum Consulting"
- Parviz Shahriari Award added to home page
- Fātiḥa italicized in publications page
- script.js refactored: all inline scripts removed, shared js/script.js
- sitemap.xml created and submitted to Google Search Console

---

## Outstanding / Future Considerations

- Yale faculty profile link: awaiting Heather to add hyperlink in Drupal contact field
- Google cache will update within 1–2 weeks (currently showing old "Full Professor" metadata)
- Favicon may take time to appear in browser tabs due to aggressive favicon caching — test in incognito window
- Consider photography page in future using TZ's film archive (Iran, Syria, India, Turkey etc.) — note: TZ has concerns about feeding images to AI/ML systems
- Consider Bing Webmaster Tools submission (imports from Google Search Console in ~2 minutes)
- Email signature: traviszadeh.com as hyperlinked text (no www prefix)

---

## Notes on Build Process

This site was built via vibe coding — TZ directing Claude (Anthropic) and Gemini (Google) in iterative dialogue. TZ designed all layout decisions, text, image selection, favicon concept, and easter egg. No frameworks, no templates, no CMS.

The 2008 predecessor site was built in Dreamweaver CS3 with a student worker over a full summer. This build took one day.
