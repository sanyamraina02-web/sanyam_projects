Case study images
=================

Drop real product screenshots / UI / photos here to replace the generated
on-brand device mockups on the /case-studies page.

How to add a real image for a case:
  1. Save the image into this folder. Recommended name: <slug>.png
     Slugs: trukkin, esanjeevani, tata-crucible, easemyhiring, skybag,
            elby, eduployment, impact-danske-bank, sirolular
  2. Open src/data/cases.js, find that case, and set:
        image: '/case-studies/<slug>.png',
  3. Rebuild. The real image replaces the mockup automatically.

Until a case has an `image` set, it shows a generated device mockup
(phone or browser frame) tinted to the case's brand gradient.

Recommended image specs:
  - Width: 800-1200px, landscape or app-screenshot aspect
  - Format: PNG or WebP
  - Only use images you own or have permission to publish.
