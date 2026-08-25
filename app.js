// PSX Values — data + rendering

const seedPets = [
  {id:1,name:"Huge Cat", category:"Huges", variant:"Normal", value:5000000000, demand:9, release:"UPD 5", emoji:"🐱", change:0, obtain:"Default Egg"},
  {id:2,name:"Huge Pumpkin Cat", category:"Huges", variant:"Normal", value:650000000, demand:6, release:"UPD 10", emoji:"🎃", change:0, obtain:"Limited Time Halloween Egg"},
  {id:3,name:"Huge Pegasus", category:"Huges", variant:"Normal", value:5500000000, demand:9, release:"UPD 10", emoji:"🪽", change:0, obtain:"Secret Shop"},
  {id:4,name:"Huge Festive Cat", category:"Huges", variant:"Normal", value:600000000, demand:8, release:"UPD 13", emoji:"🎄", change:0, obtain:"Limited Time Christmas Egg"},
  {id:5,name:"Huge Santa Paws", category:"Huges", variant:"Normal", value:3500000000, demand:8, release:"UPD 14", emoji:"🎅", change:0, obtain:"Limited Time Christmas Egg"},
  {id:6,name:"Huge Forest Wyvern", category:"Huges", variant:"Normal", value:3250000000, demand:8, release:"UPD 15", emoji:"🌲", change:0, obtain:"Default Egg"},
  {id:7,name:"Huge Hacked Cat", category:"Huges", variant:"Normal", value:1000000000, demand:7, release:"UPD 15", emoji:"💻", change:0, obtain:"Removed — Trading Only"},
  {id:8,name:"Huge Gargoyle Dragon", category:"Huges", variant:"Normal", value:2500000000, demand:8, release:"UPD 16", emoji:"🐉", change:0, obtain:"Boss Drop"},
  {id:9,name:"Huge Lucky Cat", category:"Huges", variant:"Normal", value:1500000000, demand:8, release:"UPD 17", emoji:"🍀", change:0, obtain:"Default Egg"},
  {id:10,name:"Huge Cupcake", category:"Huges", variant:"Normal", value:75000000, demand:5, release:"UPD 17", emoji:"🧁", change:0, obtain:"Default Egg"},
  {id:11,name:"Huge Dog", category:"Huges", variant:"Normal", value:3000000000, demand:8, release:"UPD 17", emoji:"🐶", change:0, obtain:"Default Egg"},
  {id:12,name:"Huge Dragon", category:"Huges", variant:"Normal", value:3000000000, demand:8, release:"UPD 17", emoji:"🐲", change:0, obtain:"Default Egg"},
  {id:13,name:"Huge Pixel Cat", category:"Huges", variant:"Normal", value:300000000, demand:7, release:"UPD 18", emoji:"👾", change:0, obtain:"Event Reward"},
  {id:14,name:"Huge Pony", category:"Huges", variant:"Normal", value:1400000000, demand:7, release:"UPD 18", emoji:"🐴", change:0, obtain:"Default Egg"},
  {id:15,name:"Huge Storm Agony", category:"Huges", variant:"Normal", value:3500000000, demand:9, release:"UPD 18", emoji:"⛈️", change:0, obtain:"Boss Drop"},
  {id:16,name:"Huge Super Corgi", category:"Huges", variant:"Normal", value:450000000, demand:6, release:"UPD 20", emoji:"😎", change:0, obtain:"Default Egg"},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:900000000, demand:7, release:"UPD 20", emoji:"🦄", change:0, obtain:"Default Egg"},
  {id:18,name:"Huge Easter Cat", category:"Huges", variant:"Normal", value:4000000000, demand:9, release:"UPD 20", emoji:"🐣", change:0, obtain:"Limited Time Easter Egg"},
  {id:19,name:"Huge Floppa", category:"Huges", variant:"Normal", value:275000000, demand:6, release:"UPD 20", emoji:"😼", change:0, obtain:"Default Egg"},
  {id:20,name:"Huge Sleipnir", category:"Huges", variant:"Normal", value:650000000, demand:7, release:"UPD 20", emoji:"🎠", change:0, obtain:"Event Reward"}
];

const defaultChanges = [
  {pet:"Huge Cat", old:4600000000, current:5000000000, percent:9, demand:9, date:"2026-08-22"},
  {pet:"Huge Dog", old:3200000000, current:3000000000, percent:-6, demand:8, date:"2026-08-19"},
  {pet:"Huge Dragon", old:2750000000, current:3000000000, percent:9, demand:8, date:"2026-08-15"},
  {pet:"Huge Rainbow Unicorn", old:840000000, current:900000000, percent:7, demand:7, date:"2026-08-10"},
  {pet:"Huge Storm Agony", old:3650000000, current:3500000000, percent:-4, demand:9, date:"2026-08-05"}
];

const EXCLUSIVE_TIERS = ["Huges", "Exclusives", "Titanics"];

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
  const dates = changes.map(c => new Date(c.date)).filter(d => !isNaN(d));
  if (!dates.length) return "—";
  return formatDate(new Date(Math.max(...dates)));
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

// ---------- voting ----------
// Vote totals are shared across everyone who visits the site, so they
// live on a small free counter service (countapi.xyz) instead of in the
// browser — a purely local count would only ever be visible to the one
// person who clicked it.
//
// IMPORTANT: change VOTE_NAMESPACE to something unique to your site
// (your GitHub username or repo name works well) before you publish.
// countapi.xyz has no login — the namespace is the only thing keeping
// your counters from colliding with someone else's.
const VOTE_NAMESPACE = "psxvalues-Neonbiock";
const voteKey = (id) => `psx_voted_${id}`;

// Spam prevention: once a browser votes on a pet, that choice is saved
// locally (not the same thing as caching pet data — this only remembers
// "did this browser already click," nothing about values or content) and
// both buttons lock for that pet. That stops casual repeat-clicking. It's
// not bulletproof — someone could clear their browser storage or use a
// private window to vote again — but doing better than that means adding
// real accounts, which is a lot of extra infrastructure for a fan value
// list. If it ever becomes worth it, swapping this for a proper backend
// (Supabase, for example) is a contained change: everything vote-related
// lives in this one section.
function voteRow(id) {
  return `<div class="pet-votes" data-id="${id}">
    <button class="vote-btn vote-up" onclick="castVote(event,'${id}','up',this)"><span class="vc">▲</span> <span class="vote-count">–</span></button>
    <button class="vote-btn vote-down" onclick="castVote(event,'${id}','down',this)"><span class="vc">▼</span> <span class="vote-count">–</span></button>
  </div>`;
}

async function loadVotesForVisibleCards() {
  const ids = [...new Set([...document.querySelectorAll(".pet-votes[data-id]")].map(el => el.dataset.id))];
  ids.forEach(async (id) => {
    const containers = document.querySelectorAll(`.pet-votes[data-id="${CSS.escape(id)}"]`);
    const myVote = localStorage.getItem(voteKey(id));
    let up = "–", down = "–";
    try {
      const [ru, rd] = await Promise.all([
        fetch(`https://api.countapi.xyz/get/${VOTE_NAMESPACE}/up_${id}`).then(r => r.json()).catch(() => null),
        fetch(`https://api.countapi.xyz/get/${VOTE_NAMESPACE}/down_${id}`).then(r => r.json()).catch(() => null),
      ]);
      up = ru?.value ?? 0;
      down = rd?.value ?? 0;
    } catch { /* offline or the counter service is down — leave placeholders */ }
    containers.forEach(el => {
      const upBtn = el.querySelector(".vote-up"), downBtn = el.querySelector(".vote-down");
      upBtn.querySelector(".vote-count").textContent = up;
      downBtn.querySelector(".vote-count").textContent = down;
      if (myVote) {
        upBtn.disabled = downBtn.disabled = true;
        (myVote === "up" ? upBtn : downBtn).classList.add("voted");
      }
    });
  });
}

async function castVote(event, id, dir, btnEl) {
  event.stopPropagation(); // don't also open the pet detail popup
  if (localStorage.getItem(voteKey(id))) { toast("You've already voted on this pet."); return; }
  localStorage.setItem(voteKey(id), dir);
  const containers = document.querySelectorAll(`.pet-votes[data-id="${CSS.escape(id)}"]`);
  containers.forEach(el => {
    const upBtn = el.querySelector(".vote-up"), downBtn = el.querySelector(".vote-down");
    upBtn.disabled = downBtn.disabled = true;
    (dir === "up" ? upBtn : downBtn).classList.add("voted");
  });
  try {
    const r = await fetch(`https://api.countapi.xyz/hit/${VOTE_NAMESPACE}/${dir}_${id}`).then(r => r.json());
    containers.forEach(el => { el.querySelector(`.vote-${dir} .vote-count`).textContent = r.value; });
  } catch {
    toast("Couldn't reach the vote counter — your vote is saved locally though.");
  }
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
      ${p.obtain ? `<div class="pet-obtain">📦 ${esc(p.obtain)}</div>` : ""}
      <div class="pet-row"><span class="value">${fmt(p.value)}</span><span class="${p.change >= 0 ? "up":"down"}">${p.change > 0 ? "+" : ""}${p.change}%</span></div>
      ${voteRow(p.id)}
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
    <div class="pet-card-top"><span class="${c.percent >= 0 ? "up":"down"}">${c.percent >= 0 ? "▲" : "▼"} <b>${c.percent > 0 ? "+" : ""}${c.percent}%</b></span><span>${formatDate(c.date)}</span></div>
    ${petImageMarkup(c.pet, match?.image)}
    <div class="pet-card-body">
      <div class="pet-name">${match?.emoji ? match.emoji + " " : ""}${esc(c.pet)}</div>
      <div class="pet-type">${match ? `${esc(match.category)} · ${esc(match.variant)}` : "Value update"}</div>
      ${match?.obtain ? `<div class="pet-obtain">📦 ${esc(match.obtain)}</div>` : ""}
      <div class="pet-row"><span class="change-old">${fmt(c.old)} →</span><span class="value">${fmt(c.current)}</span></div>
      ${voteRow(match ? match.id : slugify(c.pet))}
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
        <div class="eyebrow">Pet Simulator X</div>
        <h1>The official<br><span class="grad">PSX Reborn values.</span></h1>
        <p>Values get checked against trades and market activity, not guessed. Look a pet up, see what it's done lately, and run the numbers before you commit to a deal.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#values">Browse values →</a>
          <a class="btn ghost" href="#calculator">Open calculator</a>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat"><b>${pets.length}</b><span>Pets tracked</span></div>
        <div class="stat"><b>${exclusiveCount}</b><span>Exclusives &amp; huges</span></div>
        <div class="stat stat-date"><b>${lastUpdatedLabel()}</b><span>Last synced</span></div>
      </div>
    </section>

    <div class="section-head">
      <div><h2>Recent movement</h2><p>Values that shifted lately.</p></div>
    </div>
    <section class="changes-grid">${recent.map(changeCard).join("")}</section>

    <div class="section-head">
      <div><h2>Highest values</h2><p>The most expensive pets in the list right now.</p></div>
      <a class="btn" href="#values">See full list</a>
    </div>
    <section class="pet-grid">${top.map(petCard).join("")}</section>
  `;
  loadVotesForVisibleCards();
}

function renderValues() {
  const categories = ["All", ...new Set(pets.map(p => p.category))];
  $("#app").innerHTML = `
    <div class="page-title"><h1>Values</h1><p>Filter by category, sort by whatever matters to you, and compare variants side by side.</p></div>
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
  loadVotesForVisibleCards();

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
    ${p.obtain ? `<div class="pet-obtain" style="margin-top:10px;font-size:12px">📦 ${esc(p.obtain)}</div>` : ""}
    <div class="modal-stats" style="margin-top:14px">
      <div class="stat"><b>${fmt(p.value)}</b><span>Current value</span></div>
      <div class="stat"><b>${p.change>=0?"+":""}${p.change}%</b><span>Recent change</span></div>
    </div>
    <p>Released: <strong>${formatDate(p.release)}</strong></p>
    ${voteRow(p.id)}
    <div class="modal-actions"><button class="btn primary" onclick="addToCalc(${p.id},'yours');this.closest('.modal-backdrop').remove()">Add to my offer</button><button class="btn" onclick="this.closest('.modal-backdrop').remove()">Close</button></div>
  </div>`;
  document.body.appendChild(backdrop);
  loadVotesForVisibleCards();
}

function renderCalculator() {
  $("#app").innerHTML=`
    <div class="page-title"><h1>Calculator</h1><p>Stack pets on both sides of a trade and see who's actually ahead.</p></div>
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
