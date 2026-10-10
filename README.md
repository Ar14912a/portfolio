# Adil Khan | Portfolio

A personal website for Adil Khan, a physics teacher and researcher from Mingora, Swat, Pakistan.
It has two views, chosen with the buttons at the top of the home screen:

- **For admissions**: MS and scholarship applications. It shows education, research, teaching experience,
  an interactive research demo (drive index, soliton and a 3D tokamak) and documents.
- **For recruiters**: teaching and lab work. It shows qualifications, school experience cards, a laboratory
  slideshow, services, the Teacher of the Year award, teaching documents and a short summary of other work.

**Live site:** https://ar14912a.github.io/portfolio/

## What is in this repository

| File | What it is |
| --- | --- |
| `index.html` | The page and its design (colours, glass effect, layout) |
| `script.js` | Everything the page does, in numbered, commented sections |
| `README.md` | This file |
| `.gitignore` | Keeps documents, pictures and passwords out of the repository |
| `LICENSE` | The licence for the code |

There are no frameworks and nothing to install. The site is plain HTML, CSS and JavaScript.

## Pictures and documents

No pictures, PDFs or Word files are stored here. They load from Google Drive:

- Every Drive file or folder used by the site must be shared as **Anyone with the link can view**.
  Otherwise the pictures and documents will not appear.
- To change a picture or document, replace its Drive file id in `script.js`
  (`IMG`, `FILES`, `LAB_SLIDES`, `SERVICES`, `AWARD_IMG`).

## How to edit

Open `script.js`. The top of the file lists its numbered sections:

1. Pictures and documents
2. Your data (education, experience, skills, documents)
3. Building the lists
4. Home screen
5. Scroll reveal
6. Hover pop-up
7. Document viewer
8. Contact form
9. Research demo
10. 3D tokamak
11. Glass shine

Text on the page is in `index.html`. Each part of the page has a comment above it.

## About the research demo

The soliton tab uses the coefficient formulas of Aziz Khan, Raees Khan, Adil Khan, Yasmeen Rashid,
Salma Rashid and Muhammad Shafiq, *Linear and Nonlinear Mode in Magnetized e-i Plasma With
Non-Maxwellian Distribution*, Contributions to Plasma Physics 66, e70094 (2026),
https://doi.org/10.1002/ctpp.70094, with fixed round values for constants the paper does not state.
The drive index, the turbulence picture and the 3D tokamak are illustrations of the trends reported
in the paper. They are not simulations.

## Privacy

Identity documents such as passports and ID cards must never be added to this repository. The
`.gitignore` file helps by ignoring common document and picture file types.

## Licence

The code is released under the MIT licence (see `LICENSE`).
The personal content on the site (text, photographs, logos, certificates and other documents)
belongs to Adil Khan and is **not** covered by that licence. All rights reserved.
