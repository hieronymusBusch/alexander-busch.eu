---
title: "LPDID: Stata module implementing Local Projections Difference-in-Differences (LP-DiD)"
authors: 
- admin
- Daniele Girardi
date: "2023-12-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["software"]

# Publication name and optional abbreviated publication name.
publication: "LPDID: Stata module implementing Local Projections Difference-in-Differences (LP-DiD)"
publication_short: "lpdid"

abstract: LPDID performs the Local Projections Difference-in-Differences estimator (LP-DiD) proposed by Dube, Girardi, Jordà and Taylor (2023). LP-DiD is a convenient and flexible regression-based framework for implementing Difference-in-Differences with multiple time periods. It uses panel data to estimate the average effect of a treatment under the assumptions of no-anticipation and (conditional) parallel trends. It can provide both dynamic event study estimates that track the treatment effect path at each time horizon after treatment, and 'pooled' estimates of the overall average effect in a post-treatment time window. Treatment can be absorbing (once a unit gets treated, it stays treated) or non-absorbing (units can enter and exit treatment multiple times). If treatment is non-absorbing, the nonabsorbing() option must be specified. The estimation sample is restricted to units entering treatment and 'clean' controls, thus avoiding the 'negative-weights' bias of TWFE estimators. The baseline version estimates a variance-weighted effect with strictly positive weights. The reweighed version (implemented through the rw option) estimates an equally-weighted average effect. LP-DiD offers flexibility in using either the last period before treatment (the default option) or an average of pre-treatment periods (the pmd() option) as the pre-treatment base period. The command allows inclusion of control variables, including pre-treatment lags of the outcome. 

# Summary. An optional shortened abstract.
#summary: 

tags:
- Stata, Diff-in-Diff, Local Projections, Econometrics
featured: false

links:
- name: Package on SSC
  url: https://econpapers.repec.org/software/bocbocode/S459273.htm
url_pdf: ''
url_code: ''
url_dataset: '#'
url_poster: '#'
url_project: ''
url_slides: ''
url_source: '#'
url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
#  focal_point: ""
#  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects:
#- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example
---

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
