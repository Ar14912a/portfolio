/* =====================================================================
   script.js : everything the page does
   1 Pictures and documents  2 Your data  3 Build lists  4 Home screen
   5 Scroll reveal  6 Hover pop-up  7 Document viewer  8 Contact form
   9 Research demo  10 3D tokamak  11 Glass shine
   ===================================================================== */

(function () {
  var Q = function (s) {
    return document.querySelector(s);
  };
  /* ======================= UPLOAD SLOTS =======================
 HOW TO ADD A PICTURE OR PDF
 Easiest: send the file to Claude and name the slot, for example "uni-swat". Claude puts it in for you.
 By hand: paste a data URI between the quotes, for example IMG['uni-swat']='data:image/jpeg;base64,AAAA...';

 1. HOVER POP-UP PICTURES (use IMG['name']):
    uni-swat = photo of University of Swat
    deg-bs = BS Physics degree
    uni-aiou = Allama Iqbal Open University
    deg-bed = B.Ed enrolment card
    school-hssc = GHSS Balogram
    school-ssc = Hira School Qambar
    (The research paper has no hover picture, on purpose.)
    The HSSC and SSC rows open their certificates from Google Drive (see FILES below).
    e-tkfs = The Knowledge Fort School     e-lab = physics laboratory     e-acad = tuition academy
    e-isl = Islamia Public School     e-ims = Islamabad Model School     e-trs = The Right School

 2. DOCUMENTS IN THE VIEWER (use FILES['name']), a picture or a PDF:
    FILES['deg']={kind:'img',src:'data:image/jpeg;base64,AAAA...'};
    FILES['paper']={kind:'pdf',src:'data:application/pdf;base64,AAAA...'};
    deg = degree certificate     tr = transcript     moi = medium of instruction     paper = research paper (PDF)
    tc = teaching certificates     ssc = SSC certificate     hssc = HSSC certificate
    The CV button makes the CV by itself, so no slot is needed for it.
 =============================================================== */
  /* ===== 1. PICTURES AND DOCUMENTS: add your files here (see the guide above) ===== */
  /* Hover pictures. The files are in the images folder next to index.html. */
  var IMG = {
    "uni-swat": "https://drive.google.com/thumbnail?id=1w6N9QzIoIVkF8gFW-z7MPY8XeTFfRy5x&sz=w800",
    "deg-bs": "https://drive.google.com/thumbnail?id=1tHgkOH1H1Xr0im8kYaF8CJv9F-xp_0Ui&sz=w800",
    "uni-aiou": "https://drive.google.com/thumbnail?id=1z-iVdLrF4JzA11O8jtnUv9CIBRPBicrI&sz=w800",
    "deg-bed": "https://drive.google.com/thumbnail?id=1WjGvomgxUHVm4QkuooYlrQaXN5N36UY1&sz=w800",
    "school-hssc": "https://drive.google.com/thumbnail?id=1MTDjL_nawFCD6G-oyXGS1L9xCL-5RNr1&sz=w800",
    "school-ssc": "https://drive.google.com/thumbnail?id=1vlN5oJnLky9b2fraYFeOpnEgBNa-NHQO&sz=w800",
    "e-tkfs": "https://drive.google.com/thumbnail?id=14DDE8E6q4rqeXYAXXDk3Q5nAVlS9MnSi&sz=w800",
    "e-lab": "https://drive.google.com/thumbnail?id=1TV017Zq10mqcqZZAm1nFrITSLTrN59EL&sz=w800",
    "e-acad": "https://drive.google.com/thumbnail?id=1ydjR1uCeYb2L23s_IFxulkIOFOquvU0R&sz=w800",
    "e-isl": "https://drive.google.com/thumbnail?id=1ZvrkCaW_xKD-ogWI3TI1OHFMjsXkXB90&sz=w800",
    "e-ims": "https://drive.google.com/thumbnail?id=1l9ubUVRn8wozGf3gtwnZj_rGb8MfgaVg&sz=w800",
    "e-trs": "https://drive.google.com/thumbnail?id=1p42lyGDCOuqEC3kVklCBkbXhuwf15_RH&sz=w800",
  };
  /* Every document opens from Google Drive. Share each file as "Anyone with the link can view".
     kind "drive" = a Drive file, kind "gdoc" = a Google Doc. Documents. kind "drive" opens a file from Google Drive inside the site.
     For it to work, share the Drive file as "Anyone with the link can view". */
  var FILES = {
    deg: { kind: "drive", id: "17maYd_sYK09F2IrxnoWUSwa8aURhQmDl" },
    tr: { kind: "drive", id: "1-5r1YrrZeYVWsf8cahjeMgPqXkxQz7uq" },
    prov: { kind: "drive", id: "1778ywrUj0IBi7sFM9WjoXfKT0Ux1IYdY" },
    moi: { kind: "drive", id: "1XbubDYEoDLyVcfI_R6prdBid7ilkAWBY" },
    paper: { kind: "drive", id: "1fmPBjT01cdzsftas4F_24QT-V_KDNQsy" },
    thesis: { kind: "drive", id: "1PXFtctUszK4oQ4Wi9HrQZsLIZgwYEPwk" },
    eng: { kind: "drive", id: "1UduDHF846m-mbJza609pB6nhVn0mmhSc" },
    ssc: { kind: "drive", id: "1sq3XP3Q_8i8ka4fhel4uWY-13F0uttm3" },
    hssc: { kind: "drive", id: "1QUieaCtl1O38VpR64d3mWrhGp1ZC0bDu" },
    ims: { kind: "drive", id: "1daefTIQtrs5zGOhC5BM4S-mLxU-FVpCP" },
    isl: { kind: "drive", id: "117W8-11_Akb40SrUbikhyEVv-h5mFbgg" },
    isl2: { kind: "drive", id: "1_DfsbZNucTFUHFva2JfwMm4IaVJUA7Sj" },
    trs: { kind: "drive", id: "1us04eeQ21EUxGB-fYfC5pdvMUuQTTD70" },
    award: { kind: "drive", id: "1gFJU5-OgZAQG2jNbYjGsvx6agTJXZ_ZD" },
    rec1: { kind: "drive", id: "1rPo5SD5vtihvi4Fle7WKtqjBiph2iHtl" },
    rec2: { kind: "drive", id: "18sWqG13ZdkpERnoIlj3ywFbo8FQLm0Oi" },
    seminar: { kind: "drive", id: "1VFcbgrf01GqGExcLnbpAluV5bDZpQzpq" },
    tafseer: { kind: "drive", id: "1M3rPIYFa-8VTYahDO9nTnxpy2lTQRmjY" },
    cv: { kind: "drive", id: "1QLz73oWl3Og0G30ZDkqijMSeCng9JXNx" },
    rec3: { kind: "gdoc", id: "1DYnyNf6GFDS4KwxKaL-NBV22Wbp7hYvU" },
  };
  /* Names shown on the hover pop-up when a picture is missing */
  var CAP = {
    "uni-swat": "University of Swat",
    "deg-bs": "BS Physics degree",
    "uni-aiou": "Allama Iqbal Open University",
    "deg-bed": "B.Ed enrolment",
    "school-hssc": "GHSS Balogram",
    "school-ssc": "Hira School Qambar",
    "e-tkfs": "The Knowledge Fort School",
    "e-lab": "Physics laboratory",
    "e-acad": "Home tuition academy",
    "e-isl": "Islamia Public School",
    "e-ims": "Islamabad Model School",
    "e-trs": "The Right School",
  };
  /* ===== 2. YOUR DATA: change text for education, experience, skills and documents here ===== */
  var EDU = [
    {
      w: "2021 to 2025",
      t: "BS Physics",
      i: "University of Swat",
      d: "GPA 3.55/4.0 (80.31%). Thesis: Ion Temperature Gradient Modes in Electron-ion Plasma With Kaniadakis Distribution.",
      kt: "deg-bs",
      doc: "deg",
      ki: "uni-swat",
    },
    {
      w: "2026 to present",
      t: "B.Ed",
      i: "Allama Iqbal Open University",
      d: "Teaching methods, assessment, curriculum development and research methods.",
      kt: "deg-bed",
      ki: "uni-aiou",
    },
    {
      w: "2019 to 2021",
      t: "Higher Secondary School Certificate",
      i: "Government Higher Secondary School Balogram",
      d: "Natural sciences and mathematics, 72.73%.",
      doc: "hssc",
      ki: "school-hssc",
    },
    {
      w: "2017 to 2019",
      t: "Secondary School Certificate",
      i: "Hira School Qambar",
      d: "77.82%.",
      doc: "ssc",
      ki: "school-ssc",
    },
  ];
  var EXP = [
    {
      w: "Oct 2025 to present",
      t: "Secondary school teacher",
      i: "The Knowledge Fort School",
      d: "I teach physics and mathematics, prepare lesson plans, assess students, report progress to parents and guide lab practicals.",
      k: "e-tkfs",
      doc: "award",
    },
    {
      w: "May 2022 to present",
      t: "Physics laboratory instructor",
      i: "University of Swat",
      d: "I supervise labs, collect experimental data, run error analysis and write the reports.",
      k: "e-lab",
    },
    {
      w: "2019 to present",
      t: "Founder, home tuition academy",
      i: "Self-employed",
      d: "I coach physics and mathematics.",
      k: "e-acad",
    },
    {
      w: "Apr to Oct 2023",
      t: "Science teacher",
      i: "Islamia Public School, Amankot",
      d: "I taught physics and mathematics and supported school activities.",
      k: "e-isl",
      doc: "isl2",
    },
    {
      w: "Sep 2022 to Mar 2023",
      t: "Science teacher",
      i: "Islamabad Model School",
      d: "I taught physics and mathematics and ran practical lab activities.",
      k: "e-ims",
      doc: "ims",
    },
    {
      w: "Jun to Sep 2022",
      t: "Science teacher",
      i: "The Right School, Mingora Campus",
      d: "I taught physics and mathematics, managed the lab and guided practicals and projects.",
      k: "e-trs",
      doc: "trs",
    },
  ];
  var SK = [
    "Python",
    "Matplotlib",
    "LaTeX",
    "MS Office",
    "AutoCAD",
    "Mathematical modelling",
    "Numerical analysis",
    "Nonlinear differential equations",
    "Plasma and drift-wave theory",
    "Error analysis",
    "Lab management",
  ];
  var DOCS = [
    ["deg", "Degree certificate", "BS Physics, University of Swat"],
    ["tr", "Transcript", "BS Physics"],
    ["prov", "Provisional certificate", "BS Physics"],
    ["moi", "Medium of instruction", "Certificate"],
    ["paper", "Research paper", "Contributions to Plasma Physics, 2026"],
    ["thesis", "BS thesis", "Ion temperature gradient modes"],
    ["eng", "English proficiency", "Duolingo test"],
    ["cv", "CV", "Read or download the PDF"],
    ["hssc", "HSSC certificate", "GHSS Balogram"],
    ["ssc", "SSC certificate", "Hira School Qambar"],
    ["ims", "Teaching certificate", "Islamabad Model School"],
    ["isl", "Teaching certificate", "Islamia Public School"],
    ["isl2", "Experience certificate", "Islamia Public School"],
    ["trs", "Experience certificate", "The Right School"],
    ["award", "Best teacher award", "The Knowledge Fort School"],
    ["rec1", "Recommendation letter 1", "Referee letter"],
    ["rec2", "Recommendation letter 2", "Referee letter"],
    ["rec3", "Recommendation letter 3", "Referee letter"],
    ["seminar", "Seminar participation", "Quantum mechanics seminar, 2024"],
    ["tafseer", "Tafseer certificate", "Certificate"],
  ];

  /* ===== 3. BUILD THE LISTS on the page from the data above ===== */
  function row(o, kt, ki, lt) {
    return (
      '<article class="it g rv"><small>' +
      o.w +
      "</small><br><h3" +
      (o.doc
        ? ' data-doc="' + o.doc + '" title="Tap to read the certificate"'
        : "") +
      (kt ? ' data-pop="' + kt + '"' : "") +
      ">" +
      o.t +
      "</h3><p>" +
      (o.i
        ? "<span" +
          (ki ? ' data-pop="' + ki + '"' : "") +
          ">" +
          o.i +
          "</span> · "
        : "") +
      o.d +
      "</p></article>"
    );
  }
  Q("#edu").innerHTML = EDU.map(function (o) {
    return row(o, o.kt, o.ki);
  }).join("");
  /* ===== 3b. EXPERIENCE CARDS: a permanent picture on each card (admissions and recruiter views) ===== */
  function xcard(o, pic) {
    var im = IMG[pic];
    return (
      '<article class="xc g rv"><div class="xi">' +
      (im ? '<img src="' + im + '" alt="" loading="lazy" decoding="async">' : "") +
      '</div><div class="xt"><small>' +
      o.w +
      "</small><br><h3" +
      (o.doc
        ? ' data-doc="' + o.doc + '" title="Tap to read the certificate"'
        : "") +
      ">" +
      o.t +
      "</h3><p>" +
      (o.i ? "<b>" + o.i + "</b> · " : "") +
      o.d +
      "</p></div></article>"
    );
  }
  Q("#exp").innerHTML = EXP.map(function (o) {
    return xcard(o, o.k);
  }).join("");

  /* ===== 3c. RECRUITER VIEW: pictures that come from internet links.
     If a picture does not show, paste another image link in the quotes. ===== */
  /* A picture from your Google Drive. The file must be shared as "Anyone with the link can view".
     id = the long code in the file link, w = width in pixels. */
  function dthumb(id, w) {
    return "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + w;
  }
  /* LAB BANNER: these pictures slide in turn behind the laboratory text (from your "lab pics" folder) */
  var LAB_SLIDES = [
    dthumb("1jskoXCIHYYqg7cO1mo0UnJntrA9MDqbx", 1600) /* lab 2 */,
    dthumb("1yj-jiwMwDOv06X2Ov4hRogKCSnYOaVba", 1600) /* lab 3 */,
    dthumb("1f9vLUCd0U1cgbReQ1e5cl0lNclqHKbAv", 1600) /* lab 4 */,
    dthumb("1oowEnUslNfRNqnwHwYirUXi-iDsNnwJ1", 1600) /* lab 1 */,
  ];
  /* WHAT I OFFER: one picture for each card (from your "services pics" folder).
     To change a picture, replace the file id inside dthumb("...", 800). */
  var SERVICES = [
    {
      t: "Physics and maths teaching",
      d: "Secondary and college classes with lesson plans and regular assessment.",
      g: ["#0a84ff", "#00c7be"],
      img: dthumb("1671vj4qnw8Bp-o-IR-HvAJLaKzNBORia", 800),
    },
    {
      t: "Lab practicals",
      d: "I guide experiments, keep the lab safe and organised, and teach error analysis.",
      g: ["#00c7be", "#2e8bff"],
      img: dthumb("10xsXm67FYh_Ys7IPNjjikIaKrvyJSFa3", 800),
    },
    {
      t: "Home tuition and exam coaching",
      d: "One-to-one and small-group coaching in physics and mathematics.",
      g: ["#5b8cff", "#2ee6c5"],
      img: dthumb("1LtTOpyxnidYojjVqlYv_LBn2755hukAM", 800),
    },
    {
      t: "Lesson plans and assessment",
      d: "Clear plans, tests and records, with progress reported to parents.",
      g: ["#0a84ff", "#7be7ff"],
      img: dthumb("1apjcXWMl7gCnsGnMwtG-FV5Fh79PG74b", 800),
    },
    {
      t: "Physics simulations in Python",
      d: "I turn physics models into graphs and animations that students can follow.",
      g: ["#2ee6c5", "#0a84ff"],
      img: dthumb("18oZxAyKIGyzrBIbqXlK1yPxsLKkYGWHf", 800),
    },
    {
      t: "School events and guidance",
      d: "I help organise academic events and activities, and guide students.",
      g: ["#00a6ff", "#00e0b8"],
      img: dthumb("1ppT5Ih-QgtVg4p4wWLRtHPsXaCh7MLmN", 800),
    },
  ];
  /* picture shown softly behind the whole "What I offer" section */
  var SERVICES_BG = dthumb("1671vj4qnw8Bp-o-IR-HvAJLaKzNBORia", 1200);
  /* YOUR TEACHER OF THE YEAR PICTURE (afaq.jpg in your Pics folder).
     To use another picture, replace the file id below. */
  var AWARD_IMG = dthumb("1wXVqYgF1AmUny3U4pPCslZ_aj87r81Fm", 900);

  /* slideshow behind the laboratory text: each picture drifts in, slowly zooms, then fades into the next */
  var slideTimer = null;
  function startSlides() {
    var box = Q("#slides"),
      dots = Q("#dots");
    box.innerHTML = LAB_SLIDES.map(function (u) {
      return (
        '<img class="slide" alt="" src="' +
        u +
        '" onerror="this.style.display=\'none\'">'
      );
    }).join("");
    dots.innerHTML = LAB_SLIDES.map(function () {
      return "<i></i>";
    }).join("");
    var imgs = box.querySelectorAll(".slide"),
      ds = dots.querySelectorAll("i"),
      cur = 0;
    function show(n) {
      imgs.forEach(function (im, j) {
        im.classList.toggle("on", j == n);
        im.classList.toggle("prev", j == cur && j != n);
      });
      ds.forEach(function (d, j) {
        d.classList.toggle("on", j == n);
      });
      cur = n;
    }
    show(0);
    if (slideTimer) clearInterval(slideTimer);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
      slideTimer = setInterval(function () {
        show((cur + 1) % imgs.length);
      }, 5200);
  }

  function renderRec() {
    startSlides();
    Q("#svbg").style.backgroundImage = 'url("' + SERVICES_BG + '")';
    Q("#qual").innerHTML =
      xcard(
        {
          w: "2021 to 2025",
          t: "BS Physics",
          i: "University of Swat",
          d: "GPA 3.55/4.0 (80.31%).",
          doc: "deg",
        },
        "uni-swat",
      ) +
      xcard(
        {
          w: "2026 to present",
          t: "B.Ed",
          i: "Allama Iqbal Open University",
          d: "In progress: teaching methods, assessment and curriculum development.",
        },
        "deg-bed",
      );
    Q("#svs").innerHTML = SERVICES.map(function (s) {
      return (
        '<article class="sv g rv"><div class="sbg" style="background:linear-gradient(135deg,' +
        s.g[0] +
        "," +
        s.g[1] +
        ')"></div>' +
        '<img src="' +
        s.img +
        '" alt="" loading="lazy" decoding="async" onerror="this.style.display=\'none\'">' +
        '<div class="st"><h3>' +
        s.t +
        "</h3><p>" +
        s.d +
        "</p></div></article>"
      );
    }).join("");
    Q("#awardbox").innerHTML =
      '<div class="awimg">' +
      (AWARD_IMG
        ? '<img src="' +
          AWARD_IMG +
          '" alt="Adil Khan with the AFAQ Teacher of the Year award" onerror="this.outerHTML=\'<p>Your award picture loads from Google Drive. Share the file as Anyone with the link.</p>\'">'
        : "<p>Your picture with the award goes here.<br>(Set AWARD_IMG in script.js.)</p>") +
      '</div><div class="awtxt"><h3>Teacher of the Year Award, AFAQ</h3>' +
      "<p>AFAQ is an ISO 9001 certified organisation in Pakistan, formed by six not-for-profit education organisations. Its aim is to raise literacy through curriculum development, textbooks, model schools, teacher training and student assessment.</p>" +
      "<p>I received its Teacher of the Year award for my work in the classroom and the lab.</p></div>";
    Q("#more").innerHTML =
      '<div class="more">' +
      [
        [
          "Research",
          "Co-author of a plasma physics paper in Contributions to Plasma Physics, 2026.",
        ],
        [
          "Languages",
          "Pashto (mother tongue), Urdu (C1), English (C1) and basic Arabic.",
        ],
        ["Computing", "Python, Matplotlib, LaTeX, AutoCAD and MS Office."],
        [
          "Training",
          "Quantum mechanics seminar (2024) and a Tafseer certificate.",
        ],
      ]
        .map(function (m) {
          return (
            '<div class="g rv"><b>' +
            m[0] +
            "</b><span>" +
            m[1] +
            "</span></div>"
          );
        })
        .join("") +
      "</div>";
  }
  Q("#skills").innerHTML = SK.map(function (s) {
    return "<li>" + s + "</li>";
  }).join("");
  /* documents shown to recruiters: the teaching papers first, plus the CV, degree and paper */
  var REC_DOCS = [
    "cv",
    "ims",
    "isl",
    "isl2",
    "trs",
    "award",
    "rec1",
    "rec2",
    "rec3",
    "seminar",
    "tafseer",
    "deg",
    "paper",
  ];
  function renderDocs(k) {
    var list = DOCS.filter(function (d) {
      return k != "R" || REC_DOCS.indexOf(d[0]) > -1;
    });
    if (k == "R")
      list.sort(function (a, b) {
        return REC_DOCS.indexOf(a[0]) - REC_DOCS.indexOf(b[0]);
      });
    Q("#docs").innerHTML = list
      .map(function (d) {
        return (
          '<button class="dc g rv" data-doc="' +
          d[0] +
          '"><b>' +
          d[1] +
          "</b><span>" +
          d[2] +
          '</span><br><i class="' +
          (d[0] == "cv" || FILES[d[0]] ? "ok" : "") +
          '">' +
          (d[0] == "cv" || FILES[d[0]] ? "View" : "Coming soon") +
          "</i></button>"
        );
      })
      .join("");
  }
  renderRec();

  /* ===== 4. HOME SCREEN: animated headline, admissions/recruiter switch, photo tilt ===== */
  /* hero: word-by-word headline, mode toggle, tilt */
  /* split a headline into words so each word can animate in */
  function words(html) {
    var i = 0;
    return html.replace(
      /(<em>)(.*?)(<\/em>)|([^<>\s]+)/g,
      function (m, a, b, c, w) {
        if (w)
          return '<span class="wd" style="--i:' + i++ + '">' + w + "</span>";
        return (
          a +
          b
            .split(" ")
            .map(function (x) {
              return (
                '<span class="wd" style="--i:' + i++ + '">' + x + "</span>"
              );
            })
            .join(" ") +
          c
        );
      },
    );
  }
  var M = {
    A: {
      h1: "Physicist applying for <em>funded MS programs.</em>",
      chips: ["MS admissions", "Funding and scholarships", "Research ready"],
      cta: "Read my documents",
      href: "#documents",
    },
    R: {
      h1: "Physics teacher and <em>lab instructor.</em>",
      chips: ["7+ years teaching", "Runs the physics lab", "B.Ed in progress"],
      cta: "See my experience",
      href: "#experience",
    },
  };
  /* water bubbles for the recruiter theme */
  function bubbles() {
    var box = Q("#bubs");
    if (box.childNodes.length) return;
    var cnt = matchMedia("(max-width: 760px)").matches ? 7 : 18;
    for (var n = 0; n < cnt; n++) {
      var s = 10 + Math.random() * 38,
        b = document.createElement("span");
      b.className = "bub";
      b.style.cssText =
        "width:" +
        s +
        "px;height:" +
        s +
        "px;left:" +
        Math.random() * 100 +
        "%;animation-duration:" +
        (10 + Math.random() * 14) +
        "s;animation-delay:-" +
        Math.random() * 20 +
        "s;--dx:" +
        (Math.random() * 60 - 30) +
        "px";
      box.appendChild(b);
    }
  }
  var firstMode = true;
  function mode(k, quiet) {
    Q("#mA").setAttribute("aria-pressed", k == "A");
    Q("#mR").setAttribute("aria-pressed", k == "R");
    document.body.classList.toggle("rec", k == "R");
    if (!firstMode && !quiet) {
      document.body.classList.add("swap");
      setTimeout(function () {
        document.body.classList.remove("swap");
      }, 500);
    }
    firstMode = false;
    if (k == "R") bubbles();
    Q("#h1").innerHTML = words(M[k].h1);
    Q("#chips").innerHTML = M[k].chips
      .map(function (c) {
        return "<li>" + c + "</li>";
      })
      .join("");
    var a = Q("#cta");
    a.textContent = M[k].cta;
    a.href = M[k].href;
    Q("#r").value = k == "A" ? "Professor" : "Recruiter";
    renderDocs(k);
    reveal();
  }
  /* ===== smooth switch between the two views: a circle of the new theme grows out of the button ===== */
  function go(k) {
    var cur = document.body.classList.contains("rec") ? "R" : "A";
    if (cur === k) return;
    var btn = Q(k == "R" ? "#mR" : "#mA"),
      r = btn.getBoundingClientRect(),
      x = r.left + r.width / 2,
      y = r.top + r.height / 2;
    if (
      !document.startViewTransition ||
      matchMedia("(max-width: 760px)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      mode(k); /* older browsers: the colours fade and the page blurs in */
      return;
    }
    var end = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
      ),
      t = document.startViewTransition(function () {
        mode(k, true);
      });
    t.ready.then(function () {
      document.documentElement.animate(
        {
          clipPath: [
            "circle(0px at " + x + "px " + y + "px)",
            "circle(" + end + "px at " + x + "px " + y + "px)",
          ],
        },
        {
          duration: 700,
          easing: "cubic-bezier(.2,.8,.2,1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }
  Q("#mA").onclick = function () {
    go("A");
  };
  Q("#mR").onclick = function () {
    go("R");
  };
  mode("A");
  var ph = Q("#ph"),
    im = ph.querySelector("img");
  ph.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch") return;
    var b = ph.getBoundingClientRect(),
      x = (e.clientX - b.left) / b.width - 0.5,
      y = (e.clientY - b.top) / b.height - 0.5;
    im.style.transform =
      "rotateY(" + x * 18 + "deg) rotateX(" + -y * 18 + "deg)";
  });
  ph.addEventListener("pointerleave", function () {
    im.style.transform = "";
  });

  /* ===== 5. SCROLL REVEAL: sections fade in as you scroll ===== */
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          (function (el) {
            setTimeout(function () {
              el.style.transitionDelay = "";
            }, 900);
          })(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  /* watch every .rv element that has not appeared yet (also the ones made later) */
  function reveal() {
    if (typeof io === "undefined" || !io) return;
    document.querySelectorAll(".rv:not(.in)").forEach(function (el, n) {
      el.style.transitionDelay = (n % 4) * 70 + "ms";
      io.observe(el);
    });
  }
  reveal();

  /* ===== 6. HOVER POP-UP: picture beside the cursor (tap on phones) ===== */
  var pop = Q("#pop"),
    pim = Q("#pim"),
    pcap = Q("#pcap"),
    cur = null;
  function put(x, y) {
    var w = pop.offsetWidth,
      hh = pop.offsetHeight,
      L = x + 18,
      T = y + 14;
    if (L + w > innerWidth - 8) L = Math.max(8, x - w - 18);
    if (T + hh > innerHeight - 8) T = Math.max(8, innerHeight - hh - 8);
    pop.style.left = L + "px";
    pop.style.top = T + "px";
  }
  function showPop(el, x, y) {
    var k = el.getAttribute("data-pop");
    if (cur !== k) {
      cur = k;
      pim.innerHTML = IMG[k]
        ? '<img alt="" src="' + IMG[k] + '">'
        : "Image coming soon<br>" + (CAP[k] || "");
      pcap.textContent = CAP[k] || "";
    }
    put(x, y);
    pop.classList.add("on");
  }
  document.addEventListener("pointerover", function (e) {
    var t = e.target.closest && e.target.closest("[data-pop]");
    if (t && e.pointerType != "touch") showPop(t, e.clientX, e.clientY);
  });
  document.addEventListener("pointermove", function (e) {
    if (pop.classList.contains("on") && e.pointerType != "touch")
      put(e.clientX, e.clientY);
  });
  document.addEventListener("pointerout", function (e) {
    var t = e.target.closest && e.target.closest("[data-pop]");
    if (t) pop.classList.remove("on");
  });
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-pop]");
    if (t && matchMedia("(hover:none)").matches) {
      showPop(t, e.clientX, e.clientY - 120);
      setTimeout(function () {
        pop.classList.remove("on");
      }, 2600);
    }
  });

  /* ===== 7. DOCUMENT VIEWER and CV printing (no download button) ===== */
  var vw = Q("#vw"),
    vs = Q("#vs");
  function cvHtml() {
    return (
      "<h1>Adil Khan</h1><p>Mingora, Swat, Pakistan · ar2108912@gmail.com · +92 349 9236145</p><p>Physics graduate and teacher applying for funded MS programs. Co-author, Contributions to Plasma Physics (2026), DOI 10.1002/ctpp.70094.</p><h2>Education</h2>" +
      EDU.map(function (o) {
        return (
          "<p><b>" + o.t + "</b>, " + o.i + " (" + o.w + "). " + o.d + "</p>"
        );
      }).join("") +
      "<h2>Experience</h2>" +
      EXP.map(function (o) {
        return (
          "<p><b>" +
          o.t +
          "</b>" +
          (o.i ? ", " + o.i : "") +
          " (" +
          o.w +
          "). " +
          o.d +
          "</p>"
        );
      }).join("") +
      "<h2>Skills</h2><p>" +
      SK.join(", ") +
      "</p><h2>Languages</h2><p>Pashto (mother tongue), Urdu (C1), English (C1), Arabic (basic).</p>"
    );
  }
  Q("#cvprint").innerHTML = cvHtml();
  function printCV(e) {
    if (e) e.preventDefault();
    window.print();
  }
  Q("#cvb").onclick = function (e) {
    e.preventDefault();
    openDoc("cv");
  };
  function openDoc(k) {
    var d = DOCS.filter(function (x) {
      return x[0] == k;
    })[0];
    if (k == "cv" && !FILES.cv) {
      printCV();
      return;
    }
    Q("#vt").textContent = d[1];
    var f = FILES[k],
      wm = "";
    for (var n = 0; n < 60; n++) wm += "<span>Adil Khan portfolio</span>";
    vs.innerHTML =
      (f
        ? f.kind == "gdoc"
          ? '<iframe title="' +
            d[1] +
            '" src="https://docs.google.com/document/d/' +
            f.id +
            '/preview"></iframe>'
          : f.kind == "drive"
            ? '<iframe title="' +
              d[1] +
              '" src="https://drive.google.com/file/d/' +
              f.id +
              '/preview"></iframe>'
            : f.kind == "pdf"
              ? '<iframe title="' +
                d[1] +
                '" src="' +
                f.src +
                '#toolbar=0&navpanes=0"></iframe>'
              : '<img alt="' + d[1] + '" draggable="false" src="' + f.src + '">'
        : '<p style="padding:24px;text-align:center">This document has not been added yet.</p>') +
      '<div id="wm">' +
      wm +
      "</div>";
    vw.classList.add("on");
    Q("#vx").focus();
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-doc]");
    if (b) openDoc(b.getAttribute("data-doc"));
  });
  function closeDoc() {
    vw.classList.remove("on");
    setTimeout(function () {
      vs.innerHTML = "";
    }, 400);
  }
  Q("#vx").onclick = closeDoc;
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") closeDoc();
  });
  vs.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  /* ===== 8. CONTACT FORM: opens WhatsApp or email with your message ===== */
  function msg() {
    return (
      "Hello Adil, I am " +
      (Q("#n").value || "a visitor") +
      " (" +
      Q("#r").value +
      ").\n\n" +
      Q("#m").value
    );
  }
  function ok() {
    var n = Q("#note");
    if (!Q("#m").value.trim()) {
      n.textContent = "Please write a message first.";
      n.style.color = "var(--c)";
      return false;
    }
    n.style.color = "var(--t)";
    n.textContent = "Opening your app now.";
    return true;
  }
  Q("#sw").onclick = function () {
    if (ok())
      window.open(
        "https://wa.me/923499236145?text=" + encodeURIComponent(msg()),
        "_blank",
      );
  };
  Q("#se").onclick = function () {
    if (ok())
      location.href =
        "mailto:ar2108912@gmail.com?subject=" +
        encodeURIComponent(
          "Message from " + (Q("#n").value || "portfolio visitor"),
        ) +
        "&body=" +
        encodeURIComponent(msg());
  };
})();

/* ===== 9. RESEARCH DEMO: shared helpers and slider values ===== */
var $ = function (i) {
  return document.getElementById(i);
};
var S = { eta: 2, tau: 1.1, wni: 0.1, B: 3, kap: 3 },
  BASE = { eta: 2, tau: 1.1, wni: 0.1, B: 3, kap: 3 };
var css = function (n) {
  return getComputedStyle(document.documentElement).getPropertyValue(n).trim();
};
["eta", "tau", "wni", "B", "kap"].forEach(function (k) {
  var e = $(k),
    L = { eta: "vEta", tau: "vTau", wni: "vWni", B: "vB", kap: "vKap" }[k];
  function u() {
    S[k] = parseFloat(e.value);
    $(L).textContent = e.value;
  }
  e.oninput = u;
  u();
});

/* DRIVE INDEX (an illustration, not a root of the dispersion relation).
   It follows the trends reported in the paper: no drive below eta_i = 2/3, stronger with larger eta_i,
   weaker with larger tau and larger B0. The spectral index kappa does not enter here. */
function gam(k, P) {
  var e = Math.max(0, P.eta - 2 / 3);
  if (e <= 0) return 0;
  var amp =
      (0.9 * Math.pow(e, 0.7)) /
      (Math.pow(P.tau / 1.1, 0.6) * Math.pow(P.B / 3, 0.7)),
    kc =
      (1 + 0.15 * e) / (Math.pow(P.tau / 1.1, 0.3) * Math.pow(P.B / 3, 0.15)),
    x = k / kc;
  return amp * x * Math.exp(1 - x);
}

/* SOLITON from the paper: Phi_m = 3U/lambda and Delta = sqrt(4 delta / U), lambda = B/A, delta = -D/A
   alpha1, alpha2 : Eqs. 21-22.  A, B, D : Eqs. 62-65.  T = A1*Phi + K2*Phi^2 comes from the energy equation (16).
   The paper does not give beta, mu, v_ni and U, so they are fixed round values here (normalised units). */
function sol(P) {
  var k = P.kap,
    tau = P.tau,
    mu = 1.5,
    beta = 1,
    U = 0.15,
    vni = 0.1 * mu,
    cs2 = tau;
  var a1 = (k - 0.5) / (k - 1.5),
    a2 = (k * k - 0.25) / Math.pow(k - 1.5, 2);
  var A1 = (2 / 3) * a1 - ((P.eta - 2 / 3) / tau) * (vni / mu),
    K2 = (2 / 3) * a2;
  var s1 = 1 + (A1 + a1) / tau,
    s2 = (K2 + a2) / tau;
  var r0 = 1 / tau,
    r1 = -1 + (A1 + a1) / tau,
    r2 = (K2 + a2) / tau;
  var V1 =
      ((cs2 * beta) / mu) * s1 +
      ((beta * cs2 * cs2) / Math.pow(mu, 3)) * (2 * r0 * r1),
    V2 =
      ((cs2 * beta) / mu) * s2 +
      ((beta * cs2 * cs2) / Math.pow(mu, 3)) * (r1 * r1 + 2 * r0 * r2);
  var A = a1 - (tau * vni) / mu - (beta / mu) * V1,
    B = 2 * a2 - ((2 * beta) / mu) * V2;
  var D =
    2.855e-4 *
    Math.pow(3 / P.B, 3) *
    s1; /* (c/B0) rho_i^2 s1, with rho_i ~ 1/B0 */
  var lam = B / A,
    del = -D / A;
  var ok = isFinite(lam) && lam > 0 && del > 0; /* needs delta = -D/A > 0 */
  return { ok: ok, amp: (3 * U) / lam, wid: Math.sqrt((4 * del) / U) };
}

/* Drawing helpers for the graphs */
function setup(c) {
  var d = Math.min(window.devicePixelRatio || 1, 2),
    w = c.clientWidth,
    h = c._h || (c._h = parseInt(c.getAttribute("height")));
  c.style.height = h + "px";
  var cw = Math.round(w * d),
    ch = Math.round(h * d);
  if (c.width !== cw) c.width = cw;
  if (c.height !== ch) c.height = ch;
  var x = c.getContext("2d");
  x.setTransform(d, 0, 0, d, 0, 0);
  x.clearRect(0, 0, w, h);
  return [x, w, h];
}
function frame(x, w, h, x0, x1, y0, y1, xl, yl) {
  var L = 44,
    R = 10,
    T = 10,
    B = 34,
    ink = css("--mute"),
    ln = css("--line");
  x.clearRect(0, 0, w, h);
  x.strokeStyle = ln;
  x.fillStyle = ink;
  x.font = "12px Figtree,sans-serif";
  x.lineWidth = 1;
  for (var i = 0; i <= 4; i++) {
    var yy = T + ((h - T - B) * i) / 4;
    x.beginPath();
    x.moveTo(L, yy);
    x.lineTo(w - R, yy);
    x.stroke();
    x.textAlign = "right";
    x.fillText((y1 - ((y1 - y0) * i) / 4).toFixed(2), L - 6, yy + 4);
  }
  for (i = 0; i <= 4; i++) {
    var xx = L + ((w - L - R) * i) / 4;
    x.textAlign = "center";
    x.fillText((x0 + ((x1 - x0) * i) / 4).toFixed(1), xx, h - B + 16);
  }
  x.fillText(xl, L + (w - L - R) / 2, h - 4);
  x.save();
  x.translate(12, T + (h - T - B) / 2);
  x.rotate(-Math.PI / 2);
  x.fillText(yl, 0, 0);
  x.restore();
  return {
    X: function (v) {
      return L + ((v - x0) / (x1 - x0)) * (w - L - R);
    },
    Y: function (v) {
      return T + (1 - (v - y0) / (y1 - y0)) * (h - T - B);
    },
  };
}
function line(x, m, xs, ys, col, dash, lw) {
  x.beginPath();
  x.setLineDash(dash || []);
  x.strokeStyle = col;
  x.lineWidth = lw || 2.5;
  xs.forEach(function (v, i) {
    i ? x.lineTo(m.X(v), m.Y(ys[i])) : x.moveTo(m.X(v), m.Y(ys[i]));
  });
  x.stroke();
  x.setLineDash([]);
}

/* TAB 1: drive index graph (illustration) */
function drawLin() {
  var q = setup($("c0")),
    x = q[0],
    ks = [],
    a = [],
    b = [],
    mx = 1,
    pk = 0,
    pkk = 0;
  for (var i = 0; i <= 180; i++) {
    var k = i / 100;
    ks.push(k);
    var g = gam(k, S);
    a.push(g);
    b.push(gam(k, BASE));
    if (g > pk) {
      pk = g;
      pkk = k;
    }
    mx = Math.max(mx, g * 1.1, b[i] * 1.1);
  }
  var m = frame(
    x,
    q[1],
    q[2],
    0,
    1.8,
    0,
    mx,
    "k (arbitrary units)",
    "drive index",
  );
  line(x, m, ks, b, css("--mute"), [6, 5], 2);
  line(x, m, ks, a, css("--v"));
  $("r0").textContent =
    pk > 0.005
      ? "Peak drive index " +
        pk.toFixed(2) +
        " at k = " +
        pkk.toFixed(2) +
        ". The plasma is driven unstable."
      : "No drive: below the threshold η\u1d62 = 2/3 the mode is stable. Raise η\u1d62 to drive it.";
}

/* TAB 2: moving soliton */
var T0 = 0;
function drawSol(t) {
  var q = setup($("c1")),
    x = q[0],
    s = sol(S),
    b = sol(BASE);
  if (!s.ok) {
    frame(x, q[1], q[2], -8, 8, 0, 1, "ζ", "Φ");
    $("r1").textContent =
      "No compressive soliton forms at these settings. Try a larger τ or a smaller η\u1d62.";
    return;
  }
  var top = Math.max(s.amp, b.ok ? b.amp : 0) * 1.15,
    m = frame(x, q[1], q[2], -8, 8, 0, top, "ζ (moving frame)", "Φ"),
    x0 = ((t * 1.2) % 16) - 8,
    X = [],
    A = [],
    B2 = [];
  for (var i = 0; i <= 320; i++) {
    var z = -8 + i / 20;
    X.push(z);
    var e = 1 / Math.cosh((z - x0) / s.wid),
      f = b.ok ? 1 / Math.cosh((z - x0) / b.wid) : 0;
    A.push(s.amp * e * e);
    B2.push(b.ok ? b.amp * f * f : 0);
  }
  line(x, m, X, B2, css("--mute"), [6, 5], 2);
  line(x, m, X, A, css("--c"));
  $("r1").textContent =
    "Amplitude Φm = " + s.amp.toFixed(3) + ", width Δ = " + s.wid.toFixed(3);
}

/* TAB 3: turbulence picture (illustration, not a simulation) */
var N = 24,
  modes,
  hist = [],
  tt = 0,
  img = document.createElement("canvas");
img.width = img.height = 84;
function init() {
  modes = [];
  hist = [];
  tt = 0;
  for (var j = 0; j < N; j++) {
    var k = 0.1 + (j * 1.7) / (N - 1);
    modes.push({
      k: k,
      m: Math.max(1, Math.round(k * 14)),
      A: 0.004 + Math.random() * 0.01,
      ph: Math.random() * 6.28,
      kr: 3 + Math.random() * 7,
      s: Math.random() < 0.5 ? -1 : 1,
    });
  }
}
init();
$("rs").onclick = init;
function stepTurb() {
  var dt = 0.016,
    L = 0,
    n = 0;
  tt += dt;
  modes.forEach(function (o) {
    var g = gam(o.k, S);
    o.A +=
      dt *
      (g > 0
        ? 1.6 *
          g *
          o.A *
          (1 - Math.pow(o.A / (0.1 + 0.4 * Math.min(1, g / 1.5)), 2))
        : -0.9 * o.A);
    o.A = Math.max(o.A, 0.004);
    L += o.A * o.A;
    if (g > 0.01) n++;
    o.g = g;
  });
  hist.push(L);
  if (hist.length > 260) hist.shift();
  return n;
}
function drawTurb() {
  var n = stepTurb(),
    c = img.getContext("2d"),
    id = c.createImageData(84, 84),
    D = id.data;
  for (var py = 0; py < 84; py++)
    for (var px = 0; px < 84; px++) {
      var X = (px - 41.5) / 42,
        Y = (py - 41.5) / 42,
        r = Math.hypot(X, Y),
        o = (py * 84 + px) * 4;
      if (r > 1 || r < 0.4) {
        D[o + 3] = 0;
        continue;
      }
      var th = Math.atan2(Y, X),
        f = 0;
      for (var j = 0; j < N; j++) {
        var md = modes[j];
        f +=
          md.A *
          Math.cos(
            md.m * th -
              md.s * md.k * S.wni * 14 * tt +
              md.ph +
              2 * Math.sin(md.kr * r + tt * 0.4),
          );
      }
      var v = Math.tanh(f * 1.4),
        a = Math.min(1, (1 - r) * 22) * Math.min(1, (r - 0.4) * 22);
      if (v < 0) {
        var w = -v;
        D[o] = 245 - 205 * w;
        D[o + 1] = 245 - 195 * w;
        D[o + 2] = 250 - 120 * w;
      } else {
        D[o] = 245 + 10 * v;
        D[o + 1] = 245 - 153 * v;
        D[o + 2] = 250 - 128 * v;
      }
      D[o + 3] = 255 * a;
    }
  c.putImageData(id, 0, 0);
  var q = setup($("c2")),
    x = q[0],
    s = Math.min(q[1], q[2]) - 10;
  x.imageSmoothingEnabled = true;
  x.drawImage(img, q[1] / 2 - s / 2, q[2] / 2 - s / 2, s, s);
  x.strokeStyle = css("--mute");
  x.lineWidth = 1.5;
  x.beginPath();
  x.arc(q[1] / 2, q[2] / 2, s / 2, 0, 6.283);
  x.stroke();
  x.beginPath();
  x.arc(q[1] / 2, q[2] / 2, s * 0.2, 0, 6.283);
  x.stroke();
  var q2 = setup($("c3")),
    y = q2[0],
    mx = Math.max(0.5, Math.max.apply(null, hist) * 1.1);
  y.clearRect(0, 0, q2[1], q2[2]);
  y.strokeStyle = css("--line");
  y.strokeRect(0.5, 0.5, q2[1] - 1, q2[2] - 1);
  y.beginPath();
  y.strokeStyle = css("--t");
  y.lineWidth = 2.5;
  hist.forEach(function (v, i) {
    var X = (i / 259) * (q2[1] - 6) + 3,
      Y = q2[2] - 4 - (v / mx) * (q2[2] - 10);
    i ? y.lineTo(X, Y) : y.moveTo(X, Y);
  });
  y.stroke();
  y.fillStyle = css("--mute");
  y.font = "12px Figtree,sans-serif";
  y.fillText("turbulence level (time \u2192)", 8, 14);
  $("r2").textContent =
    n +
    " of " +
    N +
    " wave modes are growing. Turbulence level: " +
    hist[hist.length - 1].toFixed(2);
}

/* TABS and animation loop */
var tab = 0;
function show(i) {
  tab = i;
  for (var j = 0; j < 3; j++) {
    $("p" + j).hidden = j != i;
    $("t" + j).setAttribute("aria-selected", j == i);
  }
}
[0, 1, 2].forEach(function (i) {
  $("t" + i).onclick = function () {
    show(i);
  };
});
var vis = false;
new IntersectionObserver(function (e) {
  vis = e[0].isIntersecting;
}).observe(document.getElementById("demo"));
function loop(ms) {
  if (!vis) {
    requestAnimationFrame(loop);
    return;
  }
  if (tab == 0) drawLin();
  else if (tab == 1) drawSol(ms / 1000);
  else drawTurb();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

/* ===== 10. 3D TOKAMAK =====
   The glowing donut is the plasma. Its colour shows the electric potential (violet = negative, coral = positive).
   - Eddies grow when the drive index (tab 1) rises. Eddy size shrinks as B0 grows (gyro-radius ~ 1/B0).
   - The gold ring pulse is the KdV soliton of tab 2: its height and width follow kappa, eta_i, tau and B0.
   - The twisted green lines are magnetic field lines. They twist more and the coils glow harder as B0 grows.
   Drag to rotate. */
(function () {
  var c = document.getElementById("c4"),
    ctx = c.getContext("2d"),
    vis = false,
    ry = 0.6,
    rx = 0.62,
    dr = null,
    t = 0,
    W = 0,
    H = 340,
    S0 = 100,
    TP = 6.2832,
    still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  new IntersectionObserver(function (e) {
    vis = e[0].isIntersecting;
  }).observe(c);
  c.addEventListener("pointerdown", function (e) {
    dr = { x: e.clientX, y: e.clientY, a: ry, b: rx };
    c.setPointerCapture(e.pointerId);
    c.style.cursor = "grabbing";
  });
  c.addEventListener("pointermove", function (e) {
    if (dr) {
      ry = dr.a - (e.clientX - dr.x) * 0.01;
      rx = Math.max(-1.2, Math.min(1.4, dr.b + (e.clientY - dr.y) * 0.01));
    }
  });
  function up() {
    dr = null;
    c.style.cursor = "grab";
  }
  c.addEventListener("pointerup", up);
  c.addEventListener("pointercancel", up);
  /* light up the explanation line of the slider that was moved last */
  ["eta", "tau", "wni", "B", "kap"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () {
      document.querySelectorAll("#why p").forEach(function (p) {
        p.classList.toggle("hl", p.getAttribute("data-k") == id);
      });
    });
  });

  var R = 1,
    RV = 0.46,
    RP = 0.3,
    N = matchMedia("(max-width: 760px)").matches ? 36 : 56,
    M = matchMedia("(max-width: 760px)").matches ? 16 : 22,
    NM = 10,
    lv = 0,
    modes = [],
    i;
  function mk() {
    modes = [];
    for (i = 0; i < NM; i++) {
      var k = 0.15 + (i * 1.65) / (NM - 1);
      modes.push({
        k: k,
        a: 0.004 + Math.random() * 0.01,
        ph: Math.random() * TP,
        n: 1 + (i % 5),
        w: (0.6 + k * 2.2) * (i % 2 ? 1 : -1),
        m: 3,
      });
    }
  }
  mk();

  /* 3D -> 2D (rotate, then perspective) */
  function pr(x, y, z) {
    var cx = Math.cos(ry),
      sx = Math.sin(ry),
      x1 = x * cx + z * sx,
      z1 = -x * sx + z * cx,
      cy = Math.cos(rx),
      sy = Math.sin(rx),
      y1 = y * cy - z1 * sy,
      z2 = y * sy + z1 * cy,
      f = 4.6 / (4.6 + z2);
    return [W / 2 + x1 * f * S0, H / 2 - y1 * f * S0, z2, f];
  }
  function tp(r, u, v) {
    var q = R + r * Math.cos(v);
    return pr(q * Math.cos(u), r * Math.sin(v), q * Math.sin(u));
  }

  function draw() {
    var d = Math.min(window.devicePixelRatio || 1, 2),
      w = c.clientWidth;
    if (c._w !== w) {
      c._w = w;
      c.style.height = H + "px";
      c.width = w * d;
      c.height = H * d;
    }
    W = w;
    S0 = Math.min(W / 3.4, H / 2.4);
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.clearRect(0, 0, W, H);
    if (!still) {
      t += 0.016;
      if (!dr) ry += 0.004;
    }

    /* 1. update the eddies: they grow with the drive index and relax when it is zero */
    var pg = 0,
      sum = 0;
    modes.forEach(function (o) {
      var g = gam(o.k, S);
      pg = Math.max(pg, g);
      o.a +=
        0.016 *
        (g > 0
          ? 1.6 *
            g *
            o.a *
            (1 - Math.pow(o.a / (0.1 + 0.4 * Math.min(1, g / 1.5)), 2))
          : -0.9 * o.a);
      o.a = Math.max(o.a, 0.004);
      sum += o.a * o.a;
      o.m = Math.max(
        2,
        Math.min(26, Math.round((2 + (8 * o.k) / 1.8) * (S.B / 3))),
      ); /* eddy size ~ 1/B0 */
    });
    lv += (Math.min(1, Math.sqrt(sum) / 0.9) - lv) * 0.1;

    /* 2. the soliton pulse of tab 2 */
    var so = sol(S),
      sa = so.ok ? Math.min(1.3, so.amp / 0.1) : 0,
      sw = so.ok ? Math.max(0.12, Math.min(1.6, so.wid * 1.6)) : 1,
      u0 = (t * 1.1) % TP;

    /* 3. build the plasma surface: vertices carry height, potential and pulse */
    var V = [],
      ix,
      jx,
      k,
      zmin = 9,
      zmax = -9;
    for (ix = 0; ix <= N; ix++) {
      var u = (ix / N) * TP,
        dU = ((u - u0 + 3 * Math.PI) % TP) - Math.PI,
        bump = so.ok ? 1 / Math.pow(Math.cosh(dU / sw), 2) : 0;
      for (jx = 0; jx <= M; jx++) {
        var v = (jx / M) * TP,
          f = 0;
        for (k = 0; k < NM; k++) {
          var o = modes[k];
          f += o.a * Math.cos(o.m * v + o.n * u - o.w * t + o.ph);
        }
        var rr = RP * (1 + 0.22 * Math.tanh(f * 1.4)) * (1 + 0.5 * sa * bump),
          p = tp(rr, u, v);
        zmin = Math.min(zmin, p[2]);
        zmax = Math.max(zmax, p[2]);
        V.push({ p: p, f: f, b: bump });
      }
    }

    /* 4. everything is collected in one list and drawn far to near */
    var L = [],
      a,
      b,
      cc,
      dd,
      tau3;
    for (ix = 0; ix < N; ix++)
      for (jx = 0; jx < M; jx++) {
        a = V[ix * (M + 1) + jx];
        b = V[(ix + 1) * (M + 1) + jx];
        cc = V[(ix + 1) * (M + 1) + jx + 1];
        dd = V[ix * (M + 1) + jx + 1];
        var z = (a.p[2] + b.p[2] + cc.p[2] + dd.p[2]) / 4,
          fv = (a.f + b.f + cc.f + dd.f) / 4,
          bu = Math.min(1, ((a.b + b.b + cc.b + dd.b) / 4) * sa * 1.2),
          val = Math.tanh(fv * 1.4),
          r,
          g2,
          bl;
        if (val < 0) {
          r = 245 + 205 * val;
          g2 = 245 + 195 * val;
          bl = 250 + 120 * val;
        } else {
          r = 245 + 10 * val;
          g2 = 245 - 153 * val;
          bl = 250 - 128 * val;
        }
        var calm =
          (1 - lv) *
          0.6; /* calm plasma is teal, turbulent plasma shows its potential */
        r = r * (1 - calm) + 15 * calm;
        g2 = g2 * (1 - calm) + 194 * calm;
        bl = bl * (1 - calm) + 168 * calm;
        r = r * (1 - bu) + 255 * bu;
        g2 = g2 * (1 - bu) + 200 * bu;
        bl = bl * (1 - bu) + 40 * bu;
        var sh = 0.72 + 0.28 * (1 - (z - zmin) / (zmax - zmin + 1e-6));
        L.push({
          z: z,
          q: [a.p, b.p, cc.p, dd.p],
          c:
            "rgba(" +
            Math.round(r * sh) +
            "," +
            Math.round(g2 * sh) +
            "," +
            Math.round(bl * sh) +
            ",.93)",
        });
      }
    var vessel = "rgba(108,59,255,.22)",
      pa,
      pb,
      kk;
    for (ix = 0; ix < N; ix += 2)
      for (jx = 0; jx < M; jx += 2) {
        pa = tp(RV, (ix / N) * TP, (jx / M) * TP);
        pb = tp(RV, ((ix + 2) / N) * TP, (jx / M) * TP);
        L.push({ z: (pa[2] + pb[2]) / 2 + 0.3, l: [pa, pb], c: vessel, w: 1 });
        pb = tp(RV, (ix / N) * TP, ((jx + 2) / M) * TP);
        L.push({ z: (pa[2] + pb[2]) / 2 + 0.3, l: [pa, pb], c: vessel, w: 1 });
      }
    var Bn = Math.min(1, S.B / 6),
      coil = "rgba(21,19,58," + (0.35 + 0.5 * Bn).toFixed(2) + ")";
    for (ix = 0; ix < 14; ix++)
      for (jx = 0; jx < 24; jx++) {
        pa = tp(0.6, (ix / 14) * TP, (jx / 24) * TP);
        pb = tp(0.6, (ix / 14) * TP, ((jx + 1) / 24) * TP);
        L.push({
          z: (pa[2] + pb[2]) / 2 + 0.3,
          l: [pa, pb],
          c: coil,
          w: 2 + S.B * 0.35,
        });
      }
    for (ix = 0; ix < 10; ix++) {
      pa = pr(
        0.2 * Math.cos((ix / 10) * TP),
        -0.64,
        0.2 * Math.sin((ix / 10) * TP),
      );
      pb = pr(
        0.2 * Math.cos((ix / 10) * TP),
        0.64,
        0.2 * Math.sin((ix / 10) * TP),
      );
      L.push({
        z: (pa[2] + pb[2]) / 2,
        l: [pa, pb],
        c: "rgba(85,84,122,.5)",
        w: 2,
      });
    }
    var q = 1.4 + S.B * 0.45; /* field lines twist more as B0 grows */
    for (kk = 0; kk < 8; kk++)
      for (i = 0; i < 90; i++) {
        var u1 = (i / 90) * TP * 2,
          u2 = ((i + 1) / 90) * TP * 2;
        pa = tp(RP * 1.5, u1, q * u1 + kk * 0.785);
        pb = tp(RP * 1.5, u2, q * u2 + kk * 0.785);
        L.push({
          z: (pa[2] + pb[2]) / 2,
          l: [pa, pb],
          c: "rgba(15,194,168,.5)",
          w: 1.2,
        });
      }
    L.sort(function (m, n) {
      return n.z - m.z;
    });
    L.forEach(function (s) {
      ctx.beginPath();
      if (s.q) {
        ctx.fillStyle = s.c;
        ctx.strokeStyle = s.c;
        ctx.lineWidth = 0.6;
        ctx.moveTo(s.q[0][0], s.q[0][1]);
        ctx.lineTo(s.q[1][0], s.q[1][1]);
        ctx.lineTo(s.q[2][0], s.q[2][1]);
        ctx.lineTo(s.q[3][0], s.q[3][1]);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.strokeStyle = s.c;
        ctx.lineWidth = s.w;
        ctx.moveTo(s.l[0][0], s.l[0][1]);
        ctx.lineTo(s.l[1][0], s.l[1][1]);
        ctx.stroke();
      }
    });
    document.getElementById("r4").textContent =
      (pg > 0.01
        ? "Drive index " +
          pg.toFixed(2) +
          ": " +
          (lv < 0.25
            ? "the plasma is nearly smooth."
            : lv < 0.6
              ? "eddies are building."
              : "strong turbulence.")
        : "No drive: the plasma stays smooth.") +
      (so.ok
        ? " Gold pulse: Φm " +
          so.amp.toFixed(3) +
          ", width " +
          so.wid.toFixed(2) +
          "."
        : " No soliton at these settings.");
  }
  function loop() {
    if (vis) draw();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

/* ===== 11. GLASS SHINE: a soft highlight follows the mouse or finger across every glass card ===== */
(function () {
  var last = null;
  function clear() {
    if (last) {
      last.style.setProperty("--mx", "-50%");
      last.style.setProperty("--my", "-50%");
      last = null;
    }
  }
  document.addEventListener("pointermove", function (e) {
    if (e.pointerType === "touch") return;
    var g = e.target.closest && e.target.closest(".g");
    if (g !== last) clear();
    if (!g) return;
    var r = g.getBoundingClientRect();
    g.style.setProperty("--mx", e.clientX - r.left + "px");
    g.style.setProperty("--my", e.clientY - r.top + "px");
    last = g;
  });
  document.addEventListener("pointerup", function (e) {
    if (e.pointerType === "touch") setTimeout(clear, 450);
  });
})();
