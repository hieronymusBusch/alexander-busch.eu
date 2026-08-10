# alexander-busch.eu

Personal academic website. **Plain HTML/CSS with a tiny bit of JavaScript — no
Hugo, no theme, no build step.** What is in this repository is exactly what
Netlify serves.

Publishing works like this: edit a file → commit → push to `main` → Netlify
deploys automatically within ~30 seconds. If something breaks, open the site in
Netlify → *Deploys* → pick the previous deploy → "Publish deploy" (one-click
rollback).

## What is where

| File | Contents |
|---|---|
| `index.html` | Main page: about, education, research, teaching |
| `media.html` | Interviews and press appearances |
| `data.html` | German data-links collection |
| `privacy.html` | Impressum & Datenschutz |
| `styles.css` | All styling — colors and fonts are variables at the top |
| `script.js` | Theme toggle, mobile ☰ menu, BibTeX copy, external links in new tabs |
| `assets/portrait.jpg` | Photo |
| `uploads/Alexander_Busch_CV.pdf` | CV (this path is linked from old email signatures — keep the name) |
| `netlify.toml` | Deploy config + redirects that keep old Hugo URLs alive |

Built-in behavior you don't need to maintain: the header stays visible while
scrolling and collapses into a ☰ menu on narrow screens; external links open
in a new tab automatically; dark/light mode follows the visitor's system and
is overridable with the ☾/☀ toggle.

---

## How to add a paper

In `index.html`, find the `Working papers` block. Copy the whole
`<article class="pub"> … </article>` template below and paste it above or
below the existing entries. Delete any line you don't need — an entry with
only a title and venue line is fine.

```html
<article class="pub">
  <p class="pub-title">Full Paper Title Here</p>
  <p class="pub-authors">with Coauthor One and Coauthor Two</p>   <!-- delete if solo-authored -->
  <p class="pub-venue">Working paper — draft available on request</p>
  <p class="pub-links">
    <a href="uploads/papername.pdf">PDF</a>                        <!-- put the file in uploads/ -->
    <a href="https://example.com/appendix.pdf">Online appendix</a> <!-- any extra links -->
  </p>
  <details>
    <summary>Abstract</summary>
    <p class="abstract-body">Abstract text goes here.</p>
  </details>
  <details>
    <summary>BibTeX</summary>
    <div class="bibtex">
      <button class="copy-bib" type="button">Copy</button>
<pre>@unpublished{busch2026keyword,
  author = {Busch, Alexander},
  title  = {Full Paper Title Here},
  note   = {Working paper},
  year   = {2026}
}</pre>
    </div>
  </details>
</article>
```

When a paper is published, change the `pub-venue` line to the journal, e.g.
`<p class="pub-venue">Journal of Labor Economics, 2027</p>`, move the entry to
a `Publications` subsection (create one with `<h3>Publications</h3>` above the
working papers), and switch the BibTeX entry type to `@article{…}` with
`journal = {…}`, `volume`, `pages`.

For a work-in-progress project (title only, no links yet):

```html
<article class="pub">
  <p class="pub-title">Project title</p>
  <p class="pub-authors">with Coauthor Name</p>
</article>
```

## How to add a media item

In `media.html`, copy one `<li>` block inside `<ul class="media-list">` and
edit it. Newest entries go on top.

```html
<li>
  <span class="media-date">Jan 2027</span>
  <span class="media-body">
    <span class="media-outlet">Outlet Name</span> — one-line description of the appearance.
    <span class="media-links"><a href="https://link-to-the-piece">Watch</a></span>
  </span>
</li>
```

Use `Listen` / `Read` instead of `Watch` as appropriate; if there is no public
link, drop the `media-links` span and add
`<span class="note">No public recording available.</span>` instead.

## How to add a data link

In `data.html`, copy one `<li>` in the fitting group (administrative / survey
/ further lists):

```html
<li>
  <a href="https://data-source-url">Name of the data source</a>
  <span class="desc">One line on level of aggregation and what it contains.</span>
</li>
```

## How to update the CV

Overwrite `uploads/Alexander_Busch_CV.pdf` with the new file — **same
filename** — commit, push. Every link to the CV keeps working, including old
ones in email signatures.

## How to update teaching / office hours

In `index.html`, section `<section id="teaching">`: edit the two `<li>` lines
for courses. Office-hours sign-up currently works by email; if you later
prefer a Google Calendar booking page (Google Calendar → Appointment
schedules → Share → copy link), swap the email sentence for that link.

## How to add Google Scholar

In `index.html`, the contact-links row has a commented-out Google Scholar
line — fill in your profile ID and remove the comment markers.

## How to change colors or fonts

Everything lives at the top of `styles.css`: `--accent` is the green,
`--serif`/`--sans` the font stacks. Light mode and dark mode each have their
own block (the two dark blocks must stay identical).

## Visitor statistics (no cookie banner needed)

Visitor counting runs on **GoatCounter** (cookieless, so no EU consent
banner is required): each HTML page reports anonymous page views via the
`data-goatcounter` script at the bottom. **Dashboard:**
<https://busch.goatcounter.com> — log in with the GoatCounter account; the
front view shows visitors per day/week/month and per page. To disable,
remove that script line from the four HTML files.

## Preview locally

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. Double-clicking `index.html` also works for
a quick look.

## Old URLs

`netlify.toml` 301-redirects the old Hugo paths (`/publication/…`, `/post/…`,
`/privacy/…`) to their new locations, so links out in the wild keep working.
Add new redirects there if pages ever move again.
