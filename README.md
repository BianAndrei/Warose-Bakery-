# Warose website

A small, static bakery website. You can edit the page directly; there is no
build step or package installation to run.

## Start here

| File or folder | What it does | Edit it when you want to... |
| --- | --- | --- |
| `Warose — Landing Page.html` | Page structure and content | Change text, navigation, links, page sections, or image choices |
| `styles.css` | Colors, typography, layout, and animation | Change the appearance or phone/tablet/desktop layout |
| `script.js` | Small interaction for the mobile menu | Change what happens when a menu link is selected |
| `assets/` | Images and font files used by the page | Add or replace a photo or font |
| `original-media/` | Original photos and logo files | Find the source version of an image |

`support.js` and `vendor/` provide the page-preview runtime and React libraries.
They are support files, not the place to edit page content or design.

## Common edits

### Change text or links

Open `Warose — Landing Page.html` and search for the visible text or section ID:

- `top` — hero and main photo
- `menu` — product cards
- `reel` — photo gallery
- `find` — locations and map
- `reviews` — customer reviews
- `about` — the bakery story
- `contact` — contact details

The page uses Romanian copy. Keep the existing `href="#section"` links in sync
with section IDs if you rename a section.

### Replace a photo

Put the image in `assets/`, then change the matching `src="./assets/..."` in
the HTML file. The hero uses the image on the element with class `roll`; product
photos and gallery images are in the `menu` and `reel` sections.

The current product photos are:

| Photo | File in `assets/` |
| --- | --- |
| Hero photo | `14535334662e4e836b4b5904d798e73a.webp` |
| Cookie loader and contact decoration | `chocolate-chip-cookie.png` |
| Raspberry roll | `a7a3230ab2a1f935bb0a5aa6e518dff6.jpg` |
| Lotus Biscoff roll | `61b774a45df819c29a74a6c94021161b.jpg` |
| Latte | `09b90c04779c23b0a169a376044a9823.jpg` |

### Change the design

Open `styles.css`. Its comment headings group the rules by purpose. The main
brand colors are variables near the top of the file:

- `--cr` — cream background
- `--br` — dark brown
- `--ca` — caramel accent
- `--ro` — rose
- `--es` — dark text

Look for the `.hero`, `.big`, and `.roll` rules to adjust the hero layout.
Responsive overrides are grouped near the end of the stylesheet. On desktop,
the hero wordmark and photo sit apart; the phone layout keeps its existing
positioning.
Section links scroll smoothly; visitors who prefer reduced motion get instant
scrolling instead.

Some useful class names are `.nv` (desktop navigation), `.mn` (mobile menu),
`.fc` (product card), `.fr` (gallery photo), and `.ft` (footer). The gallery
autoplays in a seamless loop. It is not manually scrollable, and its duplicate
photo set is hidden from assistive technology.

### Preview your changes

Open `Warose — Landing Page.html` in a browser. Refresh after saving edits.
The page is self-contained apart from the local `assets/`, `vendor/`, and
`support.js` files and the web-hosted fonts.

## Page structure

The HTML is wrapped in `<x-dc>` for the supplied preview runtime. Keep that
wrapper and the scripts in the document head in place. The visible page is
made from ordinary HTML sections, and its presentation comes from `styles.css`.
