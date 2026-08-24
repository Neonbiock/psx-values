// PSX: OG Values — data + rendering

// Which pet names do you want to show? 
// Option A: If you want the spam name "R", use the row below:
// const seedPets = [{id:1,name:"R", category:"Huges", variant:"Normal", value:125000000, demand:9, release:"2023-02-17", emoji:"🐱", change:12},{id:2,name:"HugDog", category:"Huges", variant:"Normal", value:98000000, demand:8, release:"2023-02-17", emoji:"🐶", change:-7},{id:3,name:"Hugragon", category:"Huges", variant:"Golden", value:225000000, demand:10, release:"2023-04-14", emoji:"🐲", change:8},{id:4,name:"Huge Lwdwaucky Cat", category:"Huges", variant:"Rainbow", value:410000000, demand:10, release:"2023-03-03", emoji:"😺", change:4},{id:5,name:"Huge Hell Rock", category:"Huges", variant:"Normal", value:55000000, demand:7, release:"2023-02-03", emoji:"🪨", change:-2},{id:6,name:"Huge Unicorn", category:"Huges", variant:"Rainbow", value:350000000, demand:9, release:"2023-06-09", emoji:"🦄", change:6},{id:7,name:"Exclusisdawve Red Panda", category:"Exclusives", variant:"Normal", value:1200000, demand:7, release:"2023-05-12", emoji:"🐼", change:3},{id:8,name:"Exclusive Axolotl", category:"Exclusives", variant:"Golden", value:2800000, demand:8, release:"2023-07-21", emoji:"🦎", change:5},{id:9,name:"Exclusive Dragon", category:"Exclusives", variant:"Rainbow", value:4200000, demand:8, release:"2023-08-04", emoji:"🐉", change:-4},{id:10,name:"Glitcsdawdshed Cat", category:"Other", variant:"Glitched", value:7600000, demand:6, release:"2023-09-15", emoji:"👾", change:11},{id:11,name:"Stat Pet X", category:"Other", variant:"Normal", value:3200000, demand:5, release:"2023-10-06", emoji:"⚡", change:0},{id:12,name:"Mystisdawdc Egg", category:"Other", variant:"Normal", value:850000, demand:4, release:"2023-11-03", emoji:"🥚", change:-1},{id:13,name:"Huge Bsdwdalloon Cat", category:"Huges", variant:"Dark Matter", value:295000000, demand:9, release:"2024-01-19", emoji:"🎈", change:9},{id:14,name:"Huge Cupsdawcake", category:"Huges", variant:"Normal", value:87000000, demand:7, release:"2024-02-16", emoji:"🧁", change:-5},{id:15,name:"Exclusiveasdw Kitsune", category:"Exclusives", variant:"Normal", value:6300000, demand:9, release:"2024-03-15", emoji:"🦊", change:7},{id:16,name:"Phantowdm Pet", category:"Other", variant:"Glitched", value:9100000, demand:6, release:"2024-04-12", emoji:"👻", change:2}];

// Option B: If you want the real name "Rainbow Huge Cat", use this active row below:
const seedPets = [
  {id:1,name:"Huge Cat", category:"Huges", variant:"Normal", value:5000000000, demand:9, release:"UPD 5", emoji:"🐱", change:0},
  {id:2,name:"Huge Pumpkin Cat", category:"Huges", variant:"Normal", value:650000000, demand:6, release:"UPD 10", emoji:"🎃", change:0},
  {id:3,name:"Huge Pegasus", category:"Huges", variant:"Normal", value:5500000000, demand:9, release:"UPD 10", emoji:"🪽", change:0},
  {id:4,name:"Huge Festive Cat", category:"Huges", variant:"Normal", value:600000000, demand:8, release:"UPD 13", emoji:"🎄", change:0},
  {id:5,name:"Huge Santa Paws", category:"Huges", variant:"Normal", value:3500000000, demand:8, release:"UPD 14", emoji:"🎅", change:0},
  {id:6,name:"Huge Forest Wyvern", category:"Huges", variant:"Normal", value:3250000000, demand:8, release:"UPD 15", emoji:"🌲", change:0},
  {id:7,name:"Huge Hacked Cat", category:"Huges", variant:"Normal", value:1000000000, demand:7, release:"UPD 15", emoji:"💻", change:0},
  {id:8,name:"Huge Gargoyle Dragon", category:"Huges", variant:"Normal", value:2500000000, demand:8, release:"UPD 16", emoji:"🐉", change:0},
  {id:9,name:"Huge Lucky Cat", category:"Huges", variant:"Normal", value:1500000000, demand:8, release:"UPD 17", emoji:"🍀", change:0},
  {id:10,name:"Huge Cupcake", category:"Huges", variant:"Normal", value:75000000, demand:5, release:"UPD 17", emoji:"🧁", change:0},
  {id:11,name:"Huge Dog", category:"Huges", variant:"Normal", value:3000000000, demand:8, release:"UPD 17", emoji:"🐶", change:0},
  {id:12,name:"Huge Dragon", category:"Huges", variant:"Normal", value:3000000000, demand:8, release:"UPD 17", emoji:"🐲", change:0},
  {id:13,name:"Huge Pixel Cat", category:"Huges", variant:"Normal", value:300000000, demand:7, release:"UPD 18", emoji:"👾", change:0},
  {id:14,name:"Huge Pony", category:"Huges", variant:"Normal", value:1400000000, demand:7, release:"UPD 18", emoji:"🐴", change:0},
  {id:15,name:"Huge Storm Agony", category:"Huges", variant:"Normal", value:3500000000, demand:9, release:"UPD 18", emoji:"⛈️", change:0},
  {id:16,name:"Huge Super Corgi", category:"Huges", variant:"Normal", value:450000000, demand:6, release:"UPD 20", emoji:"😎", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:900000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:18,name:"Huge Easter Cat", category:"Huges", variant:"Normal", value:4000000000, demand:9, release:"UPD 20", emoji:"🐣", change:0},
  {id:19,name:"Huge Floppa", category:"Huges", variant:"Normal", value:275000000, demand:6, release:"UPD 20", emoji:"😼", change:0},
  {id:20,name:"Huge Sleipnir", category:"Huges", variant:"Normal", value:650000000, demand:7, release:"UPD 20", emoji:"🎠", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
  {id:17,name:"Huge Rainbow Unicorn", category:"Huges", variant:"Normal", value:950000000, demand:7, release:"UPD 20", emoji:"🦄", change:0},
];

const defaultChanges = [
  {pet:"Huge Cat", old:111000000, current:125000000, percent:12, demand:9, date:"2026-08-22"},
  {pet:"Huge Dog", old:105000000, current:98000000, percent:-7, demand:8, date:"2026-08-19"},
  {pet:"Huge Dragon", old:208000000, current:225000000, percent:8, demand:10, date:"2026-08-15"},
  {pet:"Huge Balloon Cat", old:271000000, current:295000000, percent:9, demand:9, date:"2026-08-10"},
  {pet:"Exclusive Kitsune", old:5890000, current:6300000, percent:7, demand:9, date:"2026-08-05"}
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
save();
