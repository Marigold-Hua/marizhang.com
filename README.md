# ✨ marizhang.com

🌼 welcome to the base for all the juice going into my personal brand x portfolio site! or, in normal terms — the central hub for my **recruiting**, **personal brand**, and **creative & strategic projects**.

🌼 this site reflects my work and play, woven together with constant tinkering and digital duct tape. it’s a space to display my ongoing discovery and promote constant discovery, on-site :D

🌼 it is built with **react** and is always a work in progress.

## key

🌼 primary point  
⚡️ secondary point  
✨ tertiary point

🔷 page  
🔸 subpage

✅ done  
🛠️ in progress  
⛔️ blocked — with note  
❌ not started

let’s make 'em see green 💚

---

## 🌐 site structure

### 🔷 about page – `mari`

🌼 greeting  
🌼 photo of muah  
🌼 about me  
  ⚡️ core values  
  ⚡️ core influences  
🌼 scrolling sections styled after stock tickers (but make it aesthetic, like investopedia’s):  
  ⚡️ one scrolling section links to `work`  
  ⚡️ one scrolling section links to `play`  
🌼 flower svgs that bloom with scroll  
🌼 my character (with svg placeholder for firefox haha) that links to `gold` page on click  
🌼 fun facts, personal narrative/origin story, now & ext, etc  

---

### 🔷 `work`

🌼 mari at work header  
  ⚡️ "mari" transforms into "hard"  
🌼 case studies, in grid  
  ⚡️ start with 4, scalable over time  
  ⚡️ each case study represented by:  
    ✨ a hero image (svg) — shows domain/industry and project type nonverbally  
    ✨ an icon  
  ⚡️ interactions:  
    ✨ light hover — hero image rotates upward within container  
    ✨ held hover — overlay appears with summary text  
    ✨ click — expands to full case study view

#### 🔸 `work case study [n]`

🌼 case name header  
🌼 what — quick hits (role, team, company, timeline, skills)  
🌼 why — the problem and context  
🌼 who — target user/client  
🌼 how — process and solutions  
🌼 when — timeline of implementation  
🌼 conclusion — restate value & outcome  
🌼 learnings — personal takeaways  
🌼 next case  
  ⚡️ link to next case  
  ⚡️ optionally: i’m feeling lucky (random), or related projects

---

### 🔷 `play`

🌼 neural network visualization (inspired by obsidian notes)  
  ⚡️ interactive, force-directed graph of project nodes  
  ⚡️ nodes connect by theme, skill, tool, or goal  
  ⚡️ hover reveals title, click opens lightbox/project modal

🌼 built with `d3.js` or canvas-based lib like `react-force-graph`  
🌼 early versions may use scrolling containers instead (inspo: config 2025)

#### 🔸 `play project [n]`

🌼 play header  
🌼 showcase media or embed/link  
🌼 relations — how it ties to `maribu` and sources of inspiration  
🌼 learnings and skills  
🌼 next project  
  ⚡️ link to next project  
  ⚡️ optionally: i’m feeling lucky (random), or related projects  
🌼 see my professional work — link to `work`

---

### 🔷 `resume`

🌼 toggle view  
  ⚡️ `formal` mode — recruiter-optimized  
  ⚡️ `fun` mode — witty, expressive version

🌼 both versions maintained as JSON/MD/latex and swapped by toggle

---

### 🔷 `(mari)gold`

🌼 content creation repository  
  ⚡️ blogs, videos, experiments, social content  
  ⚡️ scalable into CMS or static site via sheets

🌼 start: styled like linktree  
🌼 end: showcase media as a design/artist portfolio

---

### 🔷 `(mari)bu`

🌼 heading  
  ⚡️ visual goal system — clickable flower with petals `M`, `A`, `R`, `I`, `B`, `U`  
  ⚡️ each petal links to detailed goal view

#### 🔶 `maribu detailed goal view`

🌼 breakdown of each `maribu` goal  
🌼 links to connected projects

---

## 🔄 interactions & navigation

🌼 dynamic navbar  
  ⚡️ hovering over `gold` or `bu` merges them with `mari`  
  ⚡️ `marigold` and `maribu` variants animate to deeper pages

🌼 fluid transitions via `framer motion`  
🌼 accessibility-first practices

🌼 cursor interactions:  
  ⚡️ custom cursor tail  
  ⚡️ cursor sticker feature

🌼 about page:  
  ⚡️ svg flowers bloom on scroll  
  ⚡️ stock ticker style sections link to `work` and `play`  
  ⚡️ character svg links to `gold`

🌼 work page:  
  ⚡️ light hover → slight hero tilt  
  ⚡️ held hover → overlay reveal  
  ⚡️ click → full case study view

🌼 play page:  
  ⚡️ graph nodes hover → reveal name  
  ⚡️ click → lightbox/project detail

🌼 resume toggle  
🌼 maribu petals → goal views  
🌼 fun "i'm feeling lucky" navigation on projects

---

## 🛠️ implementation plan

### phase 1 – foundation

- [✅] detail phase 1 plan  
- [⛔️ - queen learn react! mini projects time :)] initialize with `create-react-app` or `next.js`  
- [⛔️ - ""] setup routing (react router or next.js routing)  
- [⛔️ - ""] build navbar with `framer motion` hover merges  
- [❌] responsive layout with tailwindcss or css modules - it's time to think in containers queen - MVP = jank website with basic HTML/CSS/JS

### phase 2 – core pages

- [❌] about page (`mari`)  
- [❌] work page with interactive case grid  
- [❌] play project graph  
- [❌] resume page with toggle  
- [❌] gold + bu base pages

### phase 3 – advanced features

- [❌] framer motion page transitions  
- [❌] long-hover reveals  
- [❌] d3.js neural graph  
- [❌] light/dark mode  
- [❌] animated transitions  
- [❌] performance tuning

### phase 4 – polish & deploy

- [❌] meta tags, og tags, seo  
- [❌] device testing  
- [❌] analytics setup  
- [❌] deploy to vercel/netlify  
- [❌] custom domain config

---

## 💼 tech stack

| tool                 | purpose                     |
|----------------------|-----------------------------|
| react / next.js      | frontend framework          |
| tailwindcss          | styling                     |
| framer motion        | animations                  |
| react router / next  | navigation                  |
| d3.js / react-force-graph | neural visualization |
| markdown / json      | resume and content storage  |
| vercel / netlify     | deployment                  |
| figma                | prototyping                 |

---

## ✍️ content style guide

- voice: friendly, clear, witty, strong Mari  
- visuals: rich palette, soft shadows, 2xl rounded corners, organic shapes when posible
- icons: lucide or custom svgs  
- typography:  
  ⚡️ headings — coiny or custom font
  ⚡️ body — clean sans-serif [helvetica lol] 

---

## 🧠 future ideas

- light CMS (e.g., sanity, mdx)  
- interactive task/goal tracker (`bu` page)  
- language toggle (EN + 中文)  
- "now" page (derek sivers inspired)  
- ai summaries per project  

---

## 📁 file structure (planned)

(tbd - future addition)
