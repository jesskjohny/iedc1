/* Central Data Store & Manager for IEDC VJCET Website */

const DEFAULT_IEDC_DATA = {
    events: [
        {
            title: "NOT READY YET",
            subtitle: "CS-01",
            date: "OCTOBER 14, 2026",
            time: "09:00 AM IST",
            venue: "IEDC Lab, VJCET",
            price: "₹ 50,000 + Incubation",
            regFee: "Free for registered teams",
            registerUrl: "event-details.html?id=0",
            posterUrl: "assets/poster.png",
            desc: "Prepare for a high-intensity hackathon orchestrated by IEDC VJCET. Over 24 hours of continuous creation, developers, designers, and visionaries will unite."
        },
        {
            title: "NOT READY YET",
            subtitle: "CS-02",
            date: "NOVEMBER 10, 2026",
            time: "10:00 AM IST",
            venue: "Seminar Hall, VJCET",
            price: "₹ 25,000",
            regFee: "Free",
            registerUrl: "event-details.html?id=1",
            posterUrl: "assets/poster.png",
            desc: "Pitch Deck competition for ambitious founders."
        },
        {
            title: "NOT READY YET",
            subtitle: "CS-03",
            date: "DECEMBER 05, 2026",
            time: "01:30 PM IST",
            venue: "R&D Lab, VJCET",
            price: "Certificates + Goodies",
            regFee: "₹ 100 per head",
            registerUrl: "event-details.html?id=2",
            posterUrl: "assets/poster.png",
            desc: "Hands-on AI Workshop."
        }
    ],
    flagships: [
        {
            title: "IDEA FEST",
            subtitle: "FLAGSHIP",
            pageUrl: "idea-fest.html",
            posterUrl: "assets/flagships/prelude/poster.png",
            gallery: [
                "assets/flagships/bootcamp-prelude/IMG_2042.JPG",
                "assets/flagships/bootcamp-prelude/IMG_2055.JPG",
                "assets/flagships/bootcamp-prelude/IMG_8912.JPG"
            ]
        },
        {
            title: "BOOTCAMP PRELUDE",
            subtitle: "BOOTCAMP",
            pageUrl: "bootcamp-prelude.html",
            posterUrl: "assets/flagships/prelude/poster.png",
            gallery: [
                "assets/flagships/bootcamp-prelude/IMG_2042.JPG",
                "assets/flagships/bootcamp-prelude/IMG_2055.JPG",
                "assets/flagships/bootcamp-prelude/IMG_8912.JPG",
                "assets/flagships/bootcamp-prelude/IMG_8914.JPG",
                "assets/flagships/bootcamp-prelude/IMG_8943.JPG"
            ]
        },
        {
            title: "GEN AI",
            subtitle: "WORKSHOP",
            pageUrl: "gen-ai.html",
            posterUrl: "assets/flagships/gen-ai/IMG_9321.JPG",
            gallery: [
                "assets/flagships/gen-ai/IMG_9321.JPG",
                "assets/flagships/gen-ai/IMG_9366.JPG",
                "assets/flagships/gen-ai/IMG_9407.JPG",
                "assets/flagships/gen-ai/IMG_9433.JPG"
            ]
        },
        {
            title: "THREAD ZERO",
            subtitle: "WORKSHOP",
            pageUrl: "thread-zero.html",
            posterUrl: "assets/flagships/thread-zero/WhatsApp Image 2026-05-15 at 1.51.14 PM (1).jpeg",
            gallery: [
                "assets/flagships/thread-zero/WhatsApp Image 2026-05-15 at 1.51.14 PM (1).jpeg",
                "assets/flagships/thread-zero/WhatsApp Image 2026-05-15 at 1.51.14 PM.jpeg",
                "assets/flagships/thread-zero/WhatsApp Image 2026-05-15 at 1.51.15 PM (1).jpeg",
                "assets/flagships/thread-zero/WhatsApp Image 2026-05-15 at 1.51.15 PM.jpeg"
            ]
        },
        {
            title: "DECODE &\nRECODE",
            subtitle: "HACKATHON",
            pageUrl: "decode-recode.html",
            posterUrl: "assets/flagships/decode-recode/IMG_8655.JPG",
            gallery: [
                "assets/flagships/decode-recode/IMG_8655.JPG",
                "assets/flagships/decode-recode/IMG_8661.JPG",
                "assets/flagships/decode-recode/IMG_8674.JPG",
                "assets/flagships/decode-recode/IMG_8726.JPG",
                "assets/flagships/decode-recode/IMG_8674 (1).JPG"
            ]
        }
    ],
    announcements: [
        {
            title: "DECODE & RECODE GALLERY LIVE",
            tag: "DECODE & RECODE",
            date: "FEBRUARY 2026",
            link: "decode-recode.html",
            text: "Official photo highlights and operational prototypes from Kerala's flagship hackathon are now available in the interactive gallery!"
        },
        {
            title: "IDEA FEST PROPOSAL CALL OPEN",
            tag: "IDEA FEST",
            date: "MARCH 2026",
            link: "idea-fest.html",
            text: "Submit breakthrough startup proposals to compete for incubation grants and prize pools up to ₹ 1,00,000."
        },
        {
            title: "BOOTCAMP PRELUDE REGISTRATIONS",
            tag: "BOOTCAMP PRELUDE",
            date: "APRIL 2026",
            link: "bootcamp-prelude.html",
            text: "Join our hands-on 3-day intensive bootcamp designed to help student entrepreneurs build viable prototypes."
        }
    ],
    execom: [
        { name: "DR. ARUN K", role: "NODAL OFFICER", dept: "Faculty", img: "assets/team/dr-arun-k.png", image: "assets/team/dr-arun-k.png", linkedin: "", github: "", instagram: "" },
        { name: "MRS. ANJU MARKOSE", role: "NODAL OFFICER", dept: "Faculty", img: "assets/team/mrs-anju-markose.png", image: "assets/team/mrs-anju-markose.png", linkedin: "", github: "", instagram: "" },
        { name: "ALBIN BENNY", role: "STUDENTS LEAD", dept: "Artificial Intelligence and Data Science", img: "assets/team/albin-benny.png", image: "assets/team/albin-benny.png", linkedin: "https://linkedin.com/", github: "https://github.com/", instagram: "https://instagram.com/" },
        { name: "ADITHYA MARIA JOSE", role: "STUDENTS LEAD", dept: "Computer Science and Design", img: "assets/team/adithya-maria-jose.png", image: "assets/team/adithya-maria-jose.png", linkedin: "https://linkedin.com/", github: "https://github.com/", instagram: "https://instagram.com/" },
        { name: "ATHUL KRISHINA L", role: "FINANCE LEAD", dept: "Artificial Intelligence and Data Science", img: "assets/team/athul-krishina-l.png", image: "assets/team/athul-krishina-l.png", linkedin: "https://linkedin.com/", github: "https://github.com/", instagram: "https://instagram.com/" },
        { name: "NITHYA K", role: "WOMENS LEAD", dept: "Artificial Intelligence and Data Science", img: "assets/team/nithya-k.png", image: "assets/team/nithya-k.png", linkedin: "https://www.linkedin.com/in/nithya-k-b0641834b", github: "https://github.com/", instagram: "https://instagram.com/" },
        { name: "ANN MARY CYRIAC", role: "TECHNICAL LEAD", dept: "Computer Science and Design", img: "assets/team/ann-mary-cyriac.png", image: "assets/team/ann-mary-cyriac.png", linkedin: "https://linkedin.com/", github: "https://github.com/", instagram: "https://instagram.com/" },
        { name: "NIKHIL BIBY", role: "QUALITY AND OP LEAD", dept: "Electrical Engineering", img: "assets/team/nikhil-biby.png", image: "assets/team/nikhil-biby.png", linkedin: "https://www.linkedin.com/in/nikhil-biby-8b13a5291", github: "https://github.com/Daydreamer7337", instagram: "https://instagram.com/" },
        { name: "DIYA IVY", role: "COMMUNITY LEAD", dept: "Civil Engineering", img: "assets/team/diya-ivy.png", image: "assets/team/diya-ivy.png", linkedin: "https://www.linkedin.com/in/diya-ivy-357a3433b", github: "", instagram: "https://instagram.com/" },
        { name: "JESS K JOHNY", role: "BRANDING LEAD", dept: "Artificial Intelligence and Data Science", img: "assets/team/jess-k-johny.png", image: "assets/team/jess-k-johny.png", linkedin: "https://www.linkedin.com/in/jess-k-johny-6269b2334/", github: "https://github.com/jesskjohny", instagram: "https://instagram.com/" },
        { name: "KURIAKOSE JOMON", role: "CREATIVE LEAD", dept: "Information Technology", img: "assets/team/kuriakose-jomon.png", image: "assets/team/kuriakose-jomon.png", linkedin: "https://linkedin.com/", github: "https://github.com/", instagram: "https://instagram.com/" },
        { name: "BESTIN SHAJU", role: "IPR AND RESEARCH LEAD", dept: "Mechanical Engineering", img: "assets/team/bestin-shaju.png", image: "assets/team/bestin-shaju.png", linkedin: "https://www.linkedin.com/in/bestin-shaju", github: "https://github.com/bestin-ops", instagram: "https://instagram.com/" }
    ],
    seeds: [
        { name: "ADARSH NAIJO", role: "STUDENTS SEED", img: "assets/team/adarsh-naijo.png", image: "assets/team/adarsh-naijo.png" },
        { name: "CHERIYAN K", role: "STUDENTS SEED", img: "assets/team/cheriyan-k-cheriyan.png", image: "assets/team/cheriyan-k-cheriyan.png" },
        { name: "AKSA CYRIAC", role: "STUDENTS SEED", img: "assets/team/aksa-cyriac.png", image: "assets/team/aksa-cyriac.png" },
        { name: "SNEHA SUDHAN", role: "STUDENTS SEED", img: "assets/team/sneha-sudhan.png", image: "assets/team/sneha-sudhan.png" },
        { name: "RONY JOSE", role: "FINANCE SEED", img: "assets/team/rony-jose.png", image: "assets/team/rony-jose.png" },
        { name: "ANUNANDA K S", role: "FINANCE SEED", img: "assets/team/anunanda-k-s.png", image: "assets/team/anunanda-k-s.png" },
        { name: "ALBIYA MARIYA", role: "WOMENS SEED", img: "assets/team/albiya-mariya.png", image: "assets/team/albiya-mariya.png" },
        { name: "EMIYA VARGHESE", role: "WOMENS SEED", img: "assets/team/emiya-varghese.png", image: "assets/team/emiya-varghese.png" },
        { name: "CHRIS GEORGE", role: "TECHNICAL SEED", img: "assets/team/chris-george-rain.png", image: "assets/team/chris-george-rain.png" },
        { name: "JISSO RAJU", role: "TECHNICAL SEED", img: "assets/team/jisso-raju.png", image: "assets/team/jisso-raju.png" },
        { name: "SREEDEV H.", role: "QUALITY SEED", img: "assets/team/sreedev-hrushikesh.png", image: "assets/team/sreedev-hrushikesh.png" },
        { name: "MILAN SUNNY", role: "QUALITY SEED", img: "assets/team/milan-sunny.png", image: "assets/team/milan-sunny.png" },
        { name: "VALENCIA S.", role: "COMMUNITY SEED", img: "assets/team/valencia-sebastian.png", image: "assets/team/valencia-sebastian.png" },
        { name: "DAVID TOMY", role: "COMMUNITY SEED", img: "assets/team/david-tomy.png", image: "assets/team/david-tomy.png" },
        { name: "DRISYA S.", role: "BRANDING SEED", img: "assets/team/drisya-santhosh.png", image: "assets/team/drisya-santhosh.png" },
        { name: "AKSA ROSE", role: "BRANDING SEED", img: "assets/team/aksa-rose-binu.png", image: "assets/team/aksa-rose-binu.png" },
        { name: "THEERTHA S.", role: "CREATIVE SEED", img: "assets/team/theertha-sreedharan.png", image: "assets/team/theertha-sreedharan.png" },
        { name: "JAYASANKAR B.", role: "CREATIVE SEED", img: "assets/team/jayasankar-binu.png", image: "assets/team/jayasankar-binu.png" },
        { name: "JEWEL K JOSE", role: "RESEARCH SEED", img: "assets/team/jewel-k-jose.png", image: "assets/team/jewel-k-jose.png" },
        { name: "BLESSY K SHAJU", role: "RESEARCH SEED", img: "assets/team/blessy-k-shaju.png", image: "assets/team/blessy-k-shaju.png" }
    ],
    mentors: [
        { name: "CYRIAC PULLAN", role: "STUDENT LEAD (2025)", dept: "Viswajyothi College of Engineering and Technology", img: "assets/team/cyriac-paul-pullan.png", image: "assets/team/cyriac-paul-pullan.png", linkedin: "https://linkedin.com/" },
        { name: "ANUSHA K.B", role: "STUDENT LEAD (2025)", dept: "Viswajyothi College of Engineering and Technology", img: "assets/team/anusha-k-b.png", image: "assets/team/anusha-k-b.png", linkedin: "https://www.linkedin.com/in/anusha-kb-026027256" },
        { name: "ALFRED SANTHOSE", role: "QUALITY & OP LEAD (2025)", dept: "Viswajyothi College of Engineering and Technology", img: "assets/team/alfred-santhose.png", image: "assets/team/alfred-santhose.png", linkedin: "https://linkedin.com/" },
        { name: "ALEX", role: "STUDENT LEAD (2024)", dept: "Viswajyothi College of Engineering and Technology", img: "assets/team/alex.png", image: "assets/team/alex.png", linkedin: "https://linkedin.com/" }
    ]
};

const IEDCData = {
    getAll: function () {
        const stored = localStorage.getItem('iedc_website_data');
        if (!stored) {
            this.setAll(DEFAULT_IEDC_DATA);
            return DEFAULT_IEDC_DATA;
        }
        try {
            const parsed = JSON.parse(stored);
            let needsSave = false;

            // Auto-repair & force-sanitize mentors photos
            if (parsed.mentors && Array.isArray(parsed.mentors)) {
                parsed.mentors.forEach(m => {
                    const upperName = (m.name || '').toUpperCase();
                    if (upperName.includes("CYRIAC")) {
                        m.img = "assets/team/cyriac-paul-pullan.png";
                        m.image = "assets/team/cyriac-paul-pullan.png";
                        needsSave = true;
                    } else if (upperName.includes("ANUSHA")) {
                        m.img = "assets/team/anusha-k-b.png";
                        m.image = "assets/team/anusha-k-b.png";
                        needsSave = true;
                    } else if (upperName.includes("ALFRED")) {
                        m.img = "assets/team/alfred-santhose.png";
                        m.image = "assets/team/alfred-santhose.png";
                        needsSave = true;
                    } else if (upperName.includes("ALEX")) {
                        m.img = "assets/team/alex.png";
                        m.image = "assets/team/alex.png";
                        needsSave = true;
                    } else if (m.img && m.img.includes(' ')) {
                        m.img = encodeURI(m.img);
                        m.image = encodeURI(m.img);
                        needsSave = true;
                    }
                });
            } else {
                parsed.mentors = DEFAULT_IEDC_DATA.mentors;
                needsSave = true;
            }

            // Auto-repair flagships gallery arrays
            if (parsed.flagships && Array.isArray(parsed.flagships)) {
                parsed.flagships.forEach(f => {
                    const match = DEFAULT_IEDC_DATA.flagships.find(df => df.title.replace(/\s+/g, '').toUpperCase() === f.title.replace(/\s+/g, '').toUpperCase());
                    if (match) {
                        if (!f.gallery || !Array.isArray(f.gallery) || f.gallery.length === 0 || f.gallery.some(g => g.includes('poster.png'))) {
                            f.gallery = match.gallery;
                            needsSave = true;
                        }
                    }
                });
            } else {
                parsed.flagships = DEFAULT_IEDC_DATA.flagships;
                needsSave = true;
            }

            if (needsSave) {
                this.setAll(parsed);
            }
            return parsed;
        } catch (e) {
            return DEFAULT_IEDC_DATA;
        }
    },
    setAll: function (data) {
        localStorage.setItem('iedc_website_data', JSON.stringify(data));
    },
    get: function (cat) {
        const all = this.getAll();
        return all[cat] || [];
    },
    add: function (cat, item) {
        const all = this.getAll();
        if (!all[cat]) all[cat] = [];
        all[cat].unshift(item);
        this.setAll(all);
    },
    update: function (cat, index, item) {
        const all = this.getAll();
        if (all[cat] && all[cat][index]) {
            all[cat][index] = item;
            this.setAll(all);
        }
    },
    delete: function (cat, index) {
        const all = this.getAll();
        if (all[cat] && all[cat][index]) {
            all[cat].splice(index, 1);
            this.setAll(all);
        }
    }
};

window.IEDCData = IEDCData;

