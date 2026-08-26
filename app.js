// PSX Values — data + rendering

const seedPets = [
  {
    id: 118,
    name: "Huge Capybara",
    category: "Huges",
    variant: "Normal",
    value: 700000000,
    demand: null,
    status: "Stable",
    release: "N/A",
    emoji: "🐹",
    change: 0,
    obtain: "N/A"
  },

  {
    id: 119,
    name: "Huge Cat",
    category: "Huges",
    variant: "Normal",
    value: 5000000000,
    demand: 9,
    status: "Stable",
    release: "UPD 5",
    emoji: "🐱",
    change: 0,
    obtain: "Merch Codes"
  },

  {
    id: 120,
    name: "Huge Dog",
    category: "Huges",
    variant: "Normal",
    value: 3000000000,
    demand: 8,
    status: "Dropping",
    release: "UPD 17",
    emoji: "🐶",
    change: -6,
    obtain: "Merch Codes"
  },

  {
    id: 121,
    name: "Huge Dragon",
    category: "Huges",
    variant: "Normal",
    value: 3000000000,
    demand: 8,
    status: "Overpaid",
    release: "UPD 17",
    emoji: "🐲",
    change: 0,
    obtain: "Merch Codes"
  },

  {
    id: 122,
    name: "Huge Monkey",
    category: "Huges",
    variant: "Normal",
    value: 800000000,
    demand: 6,
    status: "Underpaid",
    release: "UPD 20",
    emoji: "🐒",
    change: 0,
    obtain: "Exclusive Egg"
  }
];

const defaultChanges = [
  {pet:"Huge Cat", old:4600000000, current:5000000000, percent:9, demand:9, date:"2026-08-22"},
  {pet:"Huge Dog", old:3200000000, current:3000000000, percent:-6, demand:8, date:"2026-08-19"},
  {pet:"Huge Dragon", old:2750000000, current:3000000000, percent:9, demand:8, date:"2026-08-15"},
  {pet:"Huge Rainbow Unicorn", old:840000000, current:900000000, percent:7, demand:7, date:"2026-08-10"},
  {pet:"Huge Storm Agony", old:3650000000, current:3500000000, percent:-4, demand:9, date:"2026-08-05"}
];

// Shown in the footer and on the home page stats. This is separate from
// the dates in defaultChanges on purpose — update this one line whenever
// you touch pet data, whether or not that edit happens to also be a
// logged "recent change."
const LAST_UPDATED = "2026-08-25";

const EXCLUSIVE_TIERS = ["Huges", "Exclusives", "Titanics"];

// Next-update countdown shown on the home page. Leave NEXT_UPDATE_DAYS as
// null to just show "Coming Soon" — that's the default with nothing set.
// To run a real countdown: set NEXT_UPDATE_LABEL to whatever you want to
// call it (e.g. "Halloween Event"), set NEXT_UPDATE_SET_ON to today's
// date, and set NEXT_UPDATE_DAYS to how many days from that date it
// should count down. It'll tick down live to 0 and switch back to
// "Coming Soon" once it hits zero.
const NEXT_UPDATE_LABEL = "Next Update";
const NEXT_UPDATE_SET_ON = "2026-08-25";
const NEXT_UPDATE_DAYS = null;

let pets = seedPets;
let changes = defaultChanges;
let currentRoute = location.hash.replace("#","") || "home";
let currentPage = 1;
const perPage = 12;
let calcOffers = { yours: [], theirs: [] };

const $ = (s) => document.querySelector(s);
const fmt = (n) => {
  if (n >= 1e12) return (n/1e12).toFixed(2).replace(/\.00$/,"") + "T";
  if (n >= 1e9) return (n/1e9).toFixed(2).replace(/\.00$/,"") + "B";
  if (n >= 1e6) return (n/1e6).toFixed(2).replace(/\.00$/,"") + "M";
  if (n >= 1e3) return (n/1e3).toFixed(2).replace(/\.00$/,"") + "K";
  return n.toLocaleString();
};
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slugify = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

function formatDate(d) {
  if (d instanceof Date) return isNaN(d) ? "—" : d.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
  // Only parse strings that actually look like a date (YYYY-MM-DD).
  // Anything else — like "UPD 5" — gets shown as-is instead of being
  // misread by the Date parser (e.g. new Date("UPD 5") silently
  // becomes May 2001, which is wrong, not an error).
  if (typeof d !== "string" || !/^\d{4}-\d{2}-\d{2}/.test(d)) return d || "—";
  const dt = new Date(d);
  if (isNaN(dt)) return d || "—";
  return dt.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
}

function lastUpdatedLabel() {
  return formatDate(LAST_UPDATED);
}

// ---------- next-update countdown ----------
let countdownTimer = null;
const pad2 = (n) => String(n).padStart(2, "0");

function getUpdateTarget() {
  if (NEXT_UPDATE_DAYS == null) return null;
  const start = new Date(NEXT_UPDATE_SET_ON);
  if (isNaN(start)) return null;
  return new Date(start.getTime() + NEXT_UPDATE_DAYS * 24 * 60 * 60 * 1000);
}

function tickCountdown() {
  const el = $("#nextUpdateValue");
  if (!el) { clearInterval(countdownTimer); countdownTimer = null; return; } // navigated away from home
  const target = getUpdateTarget();
  const diff = target ? target - new Date() : -1;
  if (!target || diff <= 0) {
    el.textContent = "Coming Soon";
    clearInterval(countdownTimer); countdownTimer = null;
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  el.textContent = `${days}:${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`;
}

function startUpdateCountdown() {
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  tickCountdown(); // paint immediately instead of waiting a second for the first tick
  const target = getUpdateTarget();
  if (target && target - new Date() > 0) countdownTimer = setInterval(tickCountdown, 1000);
}

function save() {
  const el = $("#footerUpdated");
  if (el) el.textContent = "Last updated " + lastUpdatedLabel();
}

// Pet images live in assets/pets/<slug>.png. If one's missing (or you
// haven't added images yet) it just falls back to a paw icon — the emoji
// per pet is shown next to the name instead, so nothing's lost either way.
function petImageMarkup(name, image) {
  const src = image || `assets/pets/${slugify(name)}.png`;
  return `<div class="pet-image">
    <img src="${src}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="pet-image-fallback">🐾</div>
  </div>`;
}

function demandBadge(d) {
  if (d >= 9) return {text:"🔥 High demand", cls:""};
  if (d >= 7) return {text:"📈 Rising", cls:""};
  if (d <= 3) return {text:"💤 Slow", cls:"slow"};
  return null;
}

function petCard(p) {
  const badge = demandBadge(p.demand);
  return `<article class="pet-card" data-id="${p.id}" onclick="showPet(${p.id})">
    <div class="pet-card-top"><span>DMD <b>${p.demand}/10</b></span><span>${formatDate(p.release)}</span></div>
    ${petImageMarkup(p.name, p.image)}
    <div class="pet-card-body">
      <div class="pet-name">${p.emoji ? p.emoji + " " : ""}${esc(p.name)}</div>
      <div class="pet-type">${esc(p.category)} · ${esc(p.variant)}</div>
      <div class="pet-tags">
        ${badge ? `<span class="tag tag-badge ${badge.cls}">${badge.text}</span>` : ""}
      </div>
      <div class="pet-row"><span class="value">${fmt(p.value)}</span><span class="${p.change >= 0 ? "up":"down"}">${p.change > 0 ? "+" : ""}${p.change}%</span></div>
      ${p.obtain ? `<div class="pet-obtain">${esc(p.obtain)}</div>` : ""}
    </div>
  </article>`;
}

function changeCard(c) {
  // Reuses the exact same .pet-card markup/classes as the Values grid so
  // both sections render identically — this card just swaps in the
  // before/after value instead of the demand badge as its headline stat.
  const match = pets.find(p => p.name === c.pet);
  const clickable = match ? `data-id="${match.id}" onclick="showPet(${match.id})"` : "";
  return `<article class="pet-card" ${clickable}>
    <div class="pet-card-top"><span class="${c.percent >= 0 ? "up":"down"}">${c.percent >= 0 ? "▲" : "▼"} <b>${c.percent > 0 ? "+" : ""}${c.percent}%</b></span></div>
    ${petImageMarkup(c.pet, match?.image)}
    <div class="pet-card-body">
      <div class="pet-name">${match?.emoji ? match.emoji + " " : ""}${esc(c.pet)}</div>
      <div class="pet-type">${match ? `${esc(match.category)} · ${esc(match.variant)}` : "Value update"}</div>
      <div class="pet-row"><span class="change-old">${fmt(c.old)} →</span><span class="value">${fmt(c.current)}</span></div>
      ${match?.obtain ? `<div class="pet-obtain">${esc(match.obtain)}</div>` : ""}
    </div>
  </article>`;
}

function renderHome() {
  const top = [...pets].sort((a,b)=>b.value-a.value).slice(0,5);
  const recent = [...changes].slice(0,5);
  const exclusiveCount = pets.filter(p => EXCLUSIVE_TIERS.includes(p.category)).length;
  $("#app").innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">PSX Reborn</div>
        <h1>The official<br><span class="grad">PSX Reborn values.</span></h1>
        <p>Values are accurate and are dictated by diamond worth as well as demand.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#values">Browse values →</a>
          <a class="btn ghost" href="#calculator">Open calculator</a>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat"><b>${pets.length}</b><span>Pets tracked</span></div>
        <div class="stat"><b>${exclusiveCount}</b><span>Exclusives &amp; huges</span></div>
        <div class="stat stat-date"><b>${lastUpdatedLabel()}</b><span>Last updated</span></div>
        <div class="stat"><b id="nextUpdateValue">Coming Soon</b><span>${esc(NEXT_UPDATE_LABEL)}</span></div>
      </div>
    </section>

    <div class="section-head">
      <div><h2>Recent changes</h2><p>Values that changed recently.</p></div>
    </div>
    <section class="changes-grid">${recent.map(changeCard).join("")}</section>

    <div class="section-head">
      <div><h2>Highest values</h2><p>The most expensive pets in the list right now.</p></div>
      <a class="btn" href="#values">See full list</a>
    </div>
    <section class="pet-grid">${top.map(petCard).join("")}</section>
  `;
  startUpdateCountdown();
}

function renderValues() {
  const categories = ["All", ...new Set(pets.map(p => p.category))];
  $("#app").innerHTML = `
    <div class="page-title"><h1>Values</h1><p>Filter by category, sort by rarity and variants.</p></div>
    <div class="toolbar">
      <input id="search" class="field" placeholder="Search for a pet…" autocomplete="off">
      <select id="sortBy" class="field">
        <option value="default">Default sort</option>
        <option value="value-desc">Value: high to low</option>
        <option value="value-asc">Value: low to high</option>
        <option value="demand-desc">Demand: high to low</option>
        <option value="name-asc">Name: A–Z</option>
      </select>
      <select id="variantFilter" class="field"><option value="All">All Variants</option>${[...new Set(pets.map(p=>p.variant))].map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("")}</select>
      <select id="categoryFilter" class="field">${categories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("")}</select>
    </div>
    <div class="filters-row">${categories.map(c=>`<button class="chip ${c==="All"?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div class="results-meta" id="resultsMeta"></div>
    <section class="pet-grid" id="petGrid"></section>
    <div class="pagination" id="pagination"></div>
  `;
  currentPage = 1;
  const search = $("#search"), sortBy = $("#sortBy"), variantFilter = $("#variantFilter"), categoryFilter = $("#categoryFilter");
  const chips = document.querySelectorAll(".chip");
  const update = () => { currentPage = 1; renderValuesList(); };
  search.addEventListener("input", update);
  sortBy.addEventListener("change", update);
  variantFilter.addEventListener("change", update);
  categoryFilter.addEventListener("change", () => {
    chips.forEach(c => c.classList.toggle("active", c.dataset.cat === categoryFilter.value));
    update();
  });
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    categoryFilter.value = chip.dataset.cat;
    update();
  }));
  renderValuesList();
}

function renderValuesList() {
  const search = ($("#search")?.value || "").toLowerCase().trim();
  const sortBy = $("#sortBy")?.value || "default";
  const variant = $("#variantFilter")?.value || "All";
  const category = $("#categoryFilter")?.value || "All";

  let filtered = pets.filter(p =>
    (category === "All" || p.category === category) &&
    (variant === "All" || p.variant === variant) &&
    (!search || p.name.toLowerCase().includes(search))
  );

  if (sortBy === "value-desc") filtered.sort((a,b)=>b.value-a.value);
  else if (sortBy === "value-asc") filtered.sort((a,b)=>a.value-b.value);
  else if (sortBy === "demand-desc") filtered.sort((a,b)=>b.demand-a.demand);
  else if (sortBy === "name-asc") filtered.sort((a,b)=>a.name.localeCompare(b.name));

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  currentPage = Math.min(currentPage, totalPages);
  const pageItems = filtered.slice((currentPage-1)*perPage, currentPage*perPage);

  $("#resultsMeta").textContent = `${filtered.length} result${filtered.length===1?"":"s"} · page ${currentPage} of ${totalPages}`;
  $("#petGrid").innerHTML = pageItems.length ? pageItems.map(petCard).join("") : `<div class="panel empty">Nothing matches that search. Try a different name or clear the filters.</div>`;

  const pag = $("#pagination");
  if (totalPages <= 1) { pag.innerHTML = ""; return; }
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i-currentPage) <= 1) {
      html += `<button class="btn ${i===currentPage?"primary":""}" data-page="${i}">${i}</button>`;
    } else if (Math.abs(i-currentPage) === 2) {
      html += `<span style="color:var(--muted)">…</span>`;
    }
  }
  pag.innerHTML = html;
  pag.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", () => {
    currentPage = Number(btn.dataset.page); renderValuesList(); window.scrollTo(0,0);
  }));
}

function showPet(id) {
  const p = pets.find(x=>x.id===id); if(!p) return;
  const badge = demandBadge(p.demand);
  const changeEntry = changes.find(c => c.pet === p.name);
  // Use the logged change's real percent when there is one — p.change on
  // its own is just a placeholder (0) for pets that aren't in the log yet.
  const changePercent = changeEntry ? changeEntry.percent : p.change;
  const backdrop=document.createElement("div");
  backdrop.className="modal-backdrop";
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) backdrop.remove(); });
  backdrop.innerHTML=`<div class="modal">
    <div class="modal-head"><div><h2>${p.emoji ? p.emoji + " " : ""}${esc(p.name)}</h2><p>${esc(p.category)} · ${esc(p.variant)}</p></div><button class="btn" onclick="this.closest('.modal-backdrop').remove()">✕</button></div>
    ${petImageMarkup(p.name, p.image)}
    <div class="pet-tags" style="margin-top:12px">
      <span class="tag">Demand ${p.demand}/10</span>
      ${badge ? `<span class="tag tag-badge ${badge.cls}">${badge.text}</span>` : ""}
    </div>
    <div class="modal-stats" style="margin-top:14px">
      <div class="stat"><b>${fmt(p.value)}</b><span>Current value</span></div>
      <div class="stat"><b>${changePercent>=0?"+":""}${changePercent}%</b><span>Recent change${changeEntry ? ` · ${formatDate(changeEntry.date)}` : ""}</span></div>
    </div>
    <p>Released: <strong>${formatDate(p.release)}</strong></p>
    ${p.obtain ? `<div class="pet-obtain" style="font-size:12px">${esc(p.obtain)}</div>` : ""}
    <div class="modal-actions"><button class="btn primary" onclick="addToCalc(${p.id},'yours');this.closest('.modal-backdrop').remove()">Add to my offer</button><button class="btn" onclick="this.closest('.modal-backdrop').remove()">Close</button></div>
  </div>`;
  document.body.appendChild(backdrop);
}

function renderCalculator() {
  $("#app").innerHTML=`
    <div class="page-title"><h1>Calculator</h1><p>Add pets on both sides of a trade and see the value difference.</p></div>
    <div class="calc-layout">
      <section class="panel">
        <div class="offer-title"><h2>Your offer</h2><strong id="yoursTotal">0</strong></div>
        <div class="offer-list" id="yoursList"></div>
        <div class="add-row"><select id="yoursPick" class="field">${pets.map(p=>`<option value="${p.id}">${esc(p.name)} · ${fmt(p.value)}</option>`).join("")}</select><button class="btn primary" onclick="addToCalc(Number($('#yoursPick').value),'yours')">Add</button></div>
      </section>
      <section class="panel">
        <div class="offer-title"><h2>Their offer</h2><strong id="theirsTotal">0</strong></div>
        <div class="offer-list" id="theirsList"></div>
        <div class="add-row"><select id="theirsPick" class="field">${pets.map(p=>`<option value="${p.id}">${esc(p.name)} · ${fmt(p.value)}</option>`).join("")}</select><button class="btn primary" onclick="addToCalc(Number($('#theirsPick').value),'theirs')">Add</button></div>
      </section>
      <aside class="calc-side">
        <div class="eyebrow">Trade evaluation</div>
        <div id="calcResult" class="calc-result"><strong>ADD PETS</strong><p style="margin:5px 0 0;color:var(--muted)">Add pets to both sides to see how the trade shakes out.</p></div>
        <div><span style="color:var(--muted);font-size:12px">Value difference</span><div class="calc-total" id="diff">0</div></div>
        <p class="helper-note">This only compares listed values. Demand and how badly someone wants a specific pet can still make a "fair" trade feel lopsided in practice.</p>
        <button class="btn" style="margin-top:10px;width:100%" onclick="clearCalc()">Clear calculator</button>
      </aside>
    </div>`;
  renderOffers();
}

function calcCard(p, side, i) {
  return `<div class="pet-card calc-card">
    <button class="offer-remove" onclick="removeCalc('${side}',${i})" aria-label="Remove ${esc(p.name)}">×</button>
    ${petImageMarkup(p.name, p.image)}
    <div class="pet-card-body">
      <div class="pet-name">${p.emoji ? p.emoji + " " : ""}${esc(p.name)}</div>
      <div class="pet-type">${esc(p.variant)}</div>
      <div class="pet-row"><span class="value">${fmt(p.value)}</span></div>
    </div>
  </div>`;
}

function renderOffers(){
  ["yours","theirs"].forEach(side=>{
    const list=$(side==="yours"?"#yoursList":"#theirsList");
    list.innerHTML=calcOffers[side].length ? calcOffers[side].map((p,i)=>calcCard(p,side,i)).join("") : `<div class="empty">No pets added yet.</div>`;
  });
  updateCalc();
}

function addToCalc(id, side) {
  const p = pets.find(x=>x.id===id); if(!p) return;
  calcOffers[side].push(p);
  renderOffers();
}
function removeCalc(side, i) { calcOffers[side].splice(i,1); renderOffers(); }
function clearCalc() { calcOffers = { yours: [], theirs: [] }; renderOffers(); }

function updateCalc() {
  const a = calcOffers.yours.reduce((s,p)=>s+p.value,0);
  const b = calcOffers.theirs.reduce((s,p)=>s+p.value,0);
  $("#yoursTotal").textContent = fmt(a);
  $("#theirsTotal").textContent = fmt(b);
  const d = a - b;
  $("#diff").textContent = (d>=0?"+":"") + fmt(Math.abs(d)) + (d<0?" behind":"");
  const result = $("#calcResult");
  if(!a&&!b){result.className="calc-result";result.innerHTML="<strong>ADD PETS</strong><p style='margin:5px 0 0;color:var(--muted)'>Add pets to both sides to see how the trade shakes out.</p>";return;}
  const pct = Math.max(a,b) ? Math.round(Math.abs(d)/Math.max(a,b)*100) : 0;
  let title = pct <= 5 ? "PRETTY FAIR" : d > 0 ? "YOU'RE AHEAD" : "THEY'RE AHEAD";
  result.className = "calc-result" + (d < 0 ? " loss" : "");
  result.innerHTML = `<strong>${title}</strong><p style="margin:5px 0 0;color:var(--muted)">${pct}% difference between the two offers.</p>`;
}

function route(){
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  currentRoute=location.hash.replace("#","")||"home";
  document.querySelectorAll(".nav a").forEach(a=>a.classList.toggle("active",a.dataset.route===currentRoute));
  if(currentRoute==="values")renderValues();
  else if(currentRoute==="calculator")renderCalculator();
  else renderHome();
  $(".nav")?.classList.remove("open");
  window.scrollTo(0,0);
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
}

window.addEventListener("hashchange",route);
$("#mobileMenu").addEventListener("click",()=>$(".nav").classList.toggle("open"));
save();
route();
