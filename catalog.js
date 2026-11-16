/* =====================================================================
   كاتالوج realme مصر — داتا الأجهزة + العرض + «الموبايل جواه إيه» 3D
   عشان تضيف جهاز: انسخ بلوك من PRODUCTS وغيّر القيم.
   img: لو عندك صورة رسمية للجهاز حط اللينك هنا وهتظهر بدل الرسمة.
   ===================================================================== */
(() => {
const PRODUCTS = [
  // ---------------- سلسلة الأرقام ----------------
  {id:"16pp", name:"realme 16 Pro+ 5G", series:"num", tag_ar:"كاميرا 200 ميجا وتقريب بصري 3.5x", tag_en:"200MP camera with 3.5x optical zoom",
   chip:"Snapdragon 7 Gen 4 (4nm)", display:"6.8\" AMOLED 1.5K", hz:144, nits:"6500 nit", ram:"8/12GB", rom:"128/256/512GB",
   cams:["200MP رئيسية (OIS)","50MP تليفوتو 3.5x","8MP عريضة"], front:"50MP", batt:7000, w:80, ip:"IP66/68/69", weight:"198g", thick:"8.49mm",
   cool:"غرفة تبريد بخار (VC)", colors:[["Master Gold","#C9A86A"],["Pebble Grey","#7D8188"]], accent:"#C9A86A", cam:"ring3"},
  {id:"16p", name:"realme 16 Pro 5G", series:"num", tag_ar:"200 ميجا LumaColor وبطارية 7000", tag_en:"200MP LumaColor camera, 7000mAh",
   chip:"Dimensity 7300 Max (4nm)", display:"6.78\" AMOLED 1.5K", hz:144, nits:"6500 nit", ram:"8/12GB", rom:"128/256/512GB",
   cams:["200MP رئيسية (OIS)","8MP عريضة"], front:"50MP", batt:7000, w:80, ip:"IP66/68/69", weight:"192g", thick:"7.75mm",
   cool:"غرفة تبريد بخار (VC)", colors:[["Master Gold","#C9A86A"],["Pebble Grey","#7D8188"]], accent:"#B8935A", cam:"ring2"},
  {id:"16", name:"realme 16 5G", series:"num", tag_ar:"تصميم خفيف 8.1 مم ببطارية 7000", tag_en:"8.1mm light design with 7000mAh",
   chip:"Dimensity 6400 Turbo (6nm)", display:"6.57\" AMOLED FHD+", hz:120, nits:"4200 nit", ram:"8/12GB", rom:"128/256GB",
   cams:["50MP رئيسية","2MP"], front:"50MP", batt:7000, w:60, ip:"IP66/68/69", weight:"183g", thick:"8.1mm",
   cool:"ألواح جرافيت", colors:[["Silver","#C7CBD1"],["Black","#2B2E33"]], accent:"#9AA4B2", cam:"pill2"},
  {id:"15p", name:"realme 15 Pro 5G", series:"num", tag_ar:"كل الكاميرات 50 ميجا وتصوير 4K 60", tag_en:"All 50MP cameras, 4K 60fps",
   chip:"Snapdragon 7 Gen 4 (4nm)", display:"6.8\" AMOLED 1.5K منحنية", hz:144, nits:"6500 nit", ram:"8/12GB", rom:"128/256/512GB",
   cams:["50MP Sony IMX896 (OIS)","50MP عريضة"], front:"50MP", batt:7000, w:80, ip:"IP66/68/69", weight:"187g", thick:"7.69mm",
   cool:"غرفة تبريد بخار (VC)", colors:[["Flowing Silver","#D5D8DD"],["Velvet Green","#2F5D50"]], accent:"#2F5D50", cam:"sq2"},
  {id:"15", name:"realme 15 5G", series:"num", tag_ar:"50 ميجا أمامي وخلفي و7000 مللي", tag_en:"Dual 50MP front & rear, 7000mAh",
   chip:"Dimensity 7300+ (4nm)", display:"6.8\" AMOLED", hz:144, nits:"6500 nit", ram:"8/12GB", rom:"128/256GB",
   cams:["50MP Sony IMX882 (OIS)","8MP عريضة"], front:"50MP", batt:7000, w:80, ip:"IP66/68/69", weight:"187g", thick:"7.66mm",
   cool:"غرفة تبريد بخار 7000 مم²", colors:[["Silk Pink","#E7C3CB"],["Suit Titanium","#8C8F94"]], accent:"#D8A8B4", cam:"sq2"},
  {id:"15t", name:"realme 15T 5G", series:"num", tag_ar:"شاشة 4000 nit ومقاومة IP69", tag_en:"4000-nit display, IP69",
   chip:"Dimensity 6400 Max (6nm)", display:"6.57\" AMOLED FHD+", hz:120, nits:"4000 nit", ram:"8/12GB", rom:"128/256GB",
   cams:["50MP رئيسية","2MP"], front:"50MP", batt:7000, w:60, ip:"IP66/68/69", weight:"181g", thick:"7.79mm",
   cool:"ألواح جرافيت", colors:[["Suit Titanium","#8C8F94"],["Flowing Silver","#D5D8DD"]], accent:"#8C8F94", cam:"sq2"},
  // ---------------- سلسلة P ----------------
  {id:"p4pw", name:"realme P4 Power 5G", series:"p", tag_ar:"بطارية 10001 مللي أمبير", tag_en:"10,001mAh battery",
   chip:"Dimensity 7400 Ultra (4nm)", display:"6.8\" AMOLED 1.5K منحنية", hz:144, nits:"6500 nit", ram:"8/12GB", rom:"128/256GB",
   cams:["50MP Sony (OIS)","8MP عريضة"], front:"16MP", batt:10001, w:80, ip:"IP66/68/69", weight:"219g", thick:"9.08mm",
   cool:"غرفة تبريد بخار (VC)", colors:[["TransSilver","#C9CED6"],["TransOrange","#E0763A"]], accent:"#E0763A", cam:"sq2"},
  {id:"p4x", name:"realme P4x 5G", series:"p", tag_ar:"Dimensity 7400 Ultra وتبريد VC", tag_en:"Dimensity 7400 Ultra with VC cooling",
   chip:"Dimensity 7400 Ultra (4nm)", display:"6.72\" LCD FHD+", hz:144, nits:"1000 nit", ram:"6/8GB", rom:"128/256GB",
   cams:["50MP رئيسية","2MP"], front:"8MP", batt:7000, w:45, ip:"IP64", weight:"208g", thick:"8.39mm",
   cool:"غرفة تبريد بخار 5300 مم²", colors:[["Matte Silver","#CFD3D8"],["Lake Green","#4E8C7A"]], accent:"#4E8C7A", cam:"sq2", note_ar:"فيه إصدار 4G بمواصفات مختلفة في بعض الأسواق"},
  // ---------------- سلسلة C ----------------
  {id:"c100x", name:"realme C100x", series:"c", tag_ar:"بطارية 8000 وتحمّل سقوط 2 متر", tag_en:"8000mAh, 2m drop resistance",
   chip:"Unisoc T7250", display:"6.8\" LCD HD+", hz:120, nits:"900 nit", ram:"4/6GB", rom:"64/128/256GB",
   cams:["50MP رئيسية"], front:"5MP", batt:8000, w:45, ip:"IP64", weight:"219g", thick:"8.78mm",
   cool:"ألواح جرافيت", colors:[["Golden Coast","#D8B56A"],["Deepblue Tides","#1F3E66"]], accent:"#D8B56A", cam:"sq1"},
  {id:"c100", name:"realme C100", series:"c", tag_ar:"بطارية ضخمة وشاشة 6.8 بوصة", tag_en:"Huge battery, 6.8\" display",
   chip:"Helio G92 Max (4G) / Dimensity 6300 (5G)", display:"6.8\" LCD HD+", hz:120, nits:"—", ram:"4/6/8GB", rom:"128/256GB",
   cams:["50MP رئيسية"], front:"5–8MP", batt:8000, w:45, ip:"—", weight:"224g", thick:"8.9mm",
   cool:"ألواح جرافيت", colors:[["Glory White","#E9E6DF"],["Black","#2B2E33"]], accent:"#BFB8A8", cam:"sq1", note_ar:"البطارية والمعالج بيختلفوا حسب الإصدار (4G أو 5G)"},
  {id:"c100i", name:"realme C100i", series:"c", tag_ar:"شاشة 120Hz وبطارية كبيرة", tag_en:"120Hz display, big battery",
   chip:"Unisoc T7250", display:"6.8\" LCD HD+", hz:120, nits:"900 nit", ram:"4/6GB", rom:"64/128/256GB",
   cams:["8MP","2MP"], front:"5MP", batt:7000, w:15, ip:"—", weight:"208g", thick:"8.38mm",
   cool:"ألواح جرافيت", colors:[["Skyline Silver","#C9CDD3"],["Midnight Black","#23262B"]], accent:"#9097A1", cam:"sq2", note_ar:"البطارية 6500–7000 حسب السوق"},
  {id:"c85p", name:"realme C85 Pro", series:"c", tag_ar:"AMOLED 4000 nit ومقاومة IP69", tag_en:"4000-nit AMOLED, IP69",
   chip:"Snapdragon 685 (6nm)", display:"6.8\" AMOLED FHD+", hz:120, nits:"4000 nit", ram:"8GB", rom:"128/256GB",
   cams:["50MP رئيسية"], front:"8MP", batt:7000, w:45, ip:"IP66/68/69", weight:"205g", thick:"7.79mm",
   cool:"ألواح جرافيت", colors:[["Parrot Purple","#6E4A9E"],["Peacock Green","#1F6B5C"]], accent:"#6E4A9E", cam:"sq1"},
  {id:"c85", name:"realme C85 5G", series:"c", tag_ar:"5G وشاشة 144Hz وIP69", tag_en:"5G, 144Hz display, IP69",
   chip:"Dimensity 6300 (6nm)", display:"6.8\" LCD HD+", hz:144, nits:"1200 nit", ram:"4/6/8GB", rom:"128/256GB",
   cams:["50MP Sony IMX852"], front:"8MP", batt:7000, w:45, ip:"IP66/68/69", weight:"215g", thick:"—",
   cool:"ألواح جرافيت", colors:[["Parrot Purple","#6E4A9E"],["Peacock Green","#1F6B5C"]], accent:"#1F6B5C", cam:"sq1"},
  {id:"c75", name:"realme C75", series:"c", tag_ar:"أول موبايل مقاوم للكسر بمعايير عسكرية", tag_en:"Military-grade toughness, IP69",
   chip:"Helio G92 Max", display:"6.72\" LCD FHD+", hz:90, nits:"—", ram:"8GB", rom:"128/256GB",
   cams:["50MP رئيسية"], front:"8MP", batt:6000, w:45, ip:"IP69", weight:"—", thick:"—",
   cool:"ألواح جرافيت", colors:[["Gold","#CDAE6E"],["Black","#2B2E33"]], accent:"#CDAE6E", cam:"sq2"},
  {id:"c75x", name:"realme C75x", series:"c", tag_ar:"IP69 وشاشة 120Hz", tag_en:"IP69 with 120Hz display",
   chip:"Helio G81 Ultra", display:"6.67\" LCD HD+", hz:120, nits:"—", ram:"6/8GB", rom:"128GB",
   cams:["50MP رئيسية"], front:"5MP", batt:5600, w:45, ip:"IP68/69", weight:"—", thick:"—",
   cool:"ألواح جرافيت", colors:[["Coral Pink","#E8A69A"],["Oceanic Blue","#2C5D8F"]], accent:"#2C5D8F", cam:"sq2"},
  {id:"c71", name:"realme C71", series:"c", tag_ar:"6300 مللي وشحن 45 وات في جسم 7.79 مم", tag_en:"6300mAh, 45W in a 7.79mm body",
   chip:"Unisoc T7250", display:"6.67\" LCD HD+", hz:120, nits:"625 nit", ram:"4/6/8GB", rom:"64/128/256GB",
   cams:["50MP رئيسية"], front:"5MP", batt:6300, w:45, ip:"—", weight:"196g", thick:"7.79mm",
   cool:"ألواح جرافيت", colors:[["Black","#2B2E33"],["Green","#5E8C6A"]], accent:"#5E8C6A", cam:"sq1"},
  // ---------------- سلسلة Note ----------------
  {id:"n70", name:"realme Note 70", series:"note", tag_ar:"6300 مللي وصوت 300%", tag_en:"6300mAh, 300% ultra volume",
   chip:"Unisoc T7250", display:"6.74\" LCD HD+", hz:90, nits:"563 nit", ram:"4/6GB", rom:"64/128/256GB",
   cams:["13MP رئيسية"], front:"5MP", batt:6300, w:15, ip:"IP54", weight:"201g", thick:"7.94mm",
   cool:"ألواح جرافيت", colors:[["Beach Gold","#D7BC86"],["Obsidian Black","#22252A"]], accent:"#D7BC86", cam:"sq1"},
  {id:"n60x", name:"realme Note 60x", series:"note", tag_ar:"هيكل ألمنيوم وحماية ArmorShell", tag_en:"Aluminium frame, ArmorShell protection",
   chip:"Unisoc T612", display:"6.74\" LCD HD+", hz:90, nits:"—", ram:"3/4GB", rom:"64/128GB",
   cams:["8MP"], front:"5MP", batt:5000, w:10, ip:"IP54", weight:"187g", thick:"7.8mm",
   cool:"ألواح جرافيت", colors:[["Wilderness Green","#4F6B4A"],["Marble Black","#24272B"]], accent:"#4F6B4A", cam:"sq1"},
  // ---------------- سماعات ----------------
  {id:"ba6p", name:"realme Buds Air6 Pro", series:"audio", kind:"buds", tag_ar:"عزل ضوضاء 50dB وسماعتين في كل جهة", tag_en:"50dB ANC with coaxial dual drivers",
   driver:"11mm woofer + 6mm tweeter", anc:"50dB", play:"حتى 40 ساعة مع العلبة", ip:"IP55", bt:"5.3", codec:"LDAC", accent:"#7E9CC9"},
  {id:"ba6", name:"realme Buds Air6", series:"audio", kind:"buds", tag_ar:"سماعة 12.4 مم و50dB ANC", tag_en:"12.4mm driver, 50dB ANC",
   driver:"12.4mm", anc:"50dB", play:"حتى 40 ساعة مع العلبة", ip:"IP55", bt:"5.3", codec:"LHDC 5.0", accent:"#9DB7A6"},
  {id:"t110", name:"realme Buds T110", series:"audio", kind:"buds", tag_ar:"مكالمات واضحة بعزل ENC", tag_en:"Clear calls with AI ENC",
   driver:"10mm", anc:"ENC للمكالمات", play:"حتى 38 ساعة مع العلبة", ip:"IPX5", bt:"5.4", codec:"AAC/SBC", accent:"#C9C2B5"},
];
const SERIES = [["", "الكل", "All"], ["num", "سلسلة الأرقام", "Number"], ["p", "سلسلة P", "P series"], ["c", "سلسلة C", "C series"],
                ["note", "سلسلة Note", "Note"], ["audio", "سماعات", "Audio"]];

const ar = () => (typeof lang === "undefined" ? "ar" : lang) === "ar";
const E = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const T = (a, e) => ar() ? a : e;

/* ---------------- الستايل ---------------- */
const css = `
#cat{position:fixed;inset:0;z-index:60;background:#0B0E12;color:#E9EDF2;overflow-y:auto;-webkit-overflow-scrolling:touch;
  font-family:"IBM Plex Sans Arabic","Segoe UI",system-ui,sans-serif}
#cat.hide{display:none}
#cat .ct-top{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:10px;padding:12px 16px;padding-top:calc(12px + env(safe-area-inset-top));
  background:rgba(11,14,18,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.06)}
#cat .ct-top .mk{background:#FFC915;color:#0B0E12;font-weight:800;font-size:11px;letter-spacing:.8px;border-radius:9px;padding:9px 10px}
#cat .ct-top h2{margin:0;font-size:16px;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#cat .x{border:1px solid rgba(255,255,255,.16);background:transparent;color:#fff;border-radius:999px;width:38px;height:38px;font-size:18px;display:grid;place-items:center;cursor:pointer}
#cat .wrap{max-width:1100px;margin:0 auto;padding:18px 16px 60px}
#cat .ct-hero{position:relative;padding:22px 0 18px;overflow:hidden}
#cat .ct-hero h1{margin:0;font-size:clamp(28px,6vw,46px);line-height:1.08;letter-spacing:-.5px}
#cat .ct-hero h1 b{color:#FFC915}
#cat .ct-hero p{color:#97A1AE;margin:8px 0 0;font-size:14px;max-width:560px}
#cat .ct-f{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 18px}
#cat .ct-f input{flex:1 1 220px;min-width:0;background:#141920;border:1px solid #232B35;color:#fff;border-radius:12px;padding:11px 14px;font:inherit;font-size:15px;outline:none}
#cat .ct-f input:focus{border-color:#FFC915}
#cat .chs{display:flex;gap:6px;flex-wrap:wrap}
#cat .chs button{border:1px solid #2A333F;background:#121720;color:#C7CED8;border-radius:999px;padding:7px 13px;font:inherit;font-size:13px;cursor:pointer;transition:all .2s}
#cat .chs button.on{background:#FFC915;border-color:#FFC915;color:#0B0E12;font-weight:700}
#cat .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px}
#cat .pc{position:relative;text-align:start;background:linear-gradient(180deg,#141A22,#0F141A);border:1px solid #1F2731;border-radius:20px;padding:16px;cursor:pointer;
  color:inherit;font:inherit;overflow:hidden;transition:transform .25s cubic-bezier(.2,.8,.2,1),border-color .25s,box-shadow .25s;--mx:50%;--my:50%}
#cat .pc::before{content:"";position:absolute;inset:0;background:radial-gradient(300px circle at var(--mx) var(--my),color-mix(in srgb,var(--ac) 28%,transparent),transparent 55%);opacity:0;transition:opacity .3s;pointer-events:none}
#cat .pc:hover{transform:translateY(-4px);border-color:color-mix(in srgb,var(--ac) 55%,#1F2731);box-shadow:0 18px 40px rgba(0,0,0,.45)}
#cat .pc:hover::before{opacity:1}
#cat .pc .stage{height:190px;display:grid;place-items:center;position:relative}
#cat .pc .stage::after{content:"";position:absolute;bottom:8px;width:60%;height:14px;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.6),transparent);filter:blur(2px)}
#cat .pc h3{margin:6px 0 2px;font-size:16px;position:relative}
#cat .pc .tg{font-size:12.5px;color:#97A1AE;position:relative;min-height:34px}
#cat .pc .ks{display:flex;flex-wrap:wrap;gap:5px;margin-top:10px;position:relative}
#cat .pc .ks span{font-size:11.5px;background:#1A212B;border:1px solid #26303C;border-radius:8px;padding:3px 7px;color:#D3D9E1}
#cat .pc .ks span b{color:#FFC915;font-weight:700}
#cat .sr{font-size:11px;color:#6F7A88;position:relative;letter-spacing:.3px}
#cat .note{font-size:12px;color:#7C8796;margin-top:22px;line-height:1.6}
/* رسمة الموبايل */
.ph{--c:#888;width:96px;height:192px;border-radius:20px;position:relative;transform:rotate(-8deg);transition:transform .5s cubic-bezier(.2,.8,.2,1);
  background:linear-gradient(135deg,color-mix(in srgb,var(--c) 92%,#fff) 0%,var(--c) 45%,color-mix(in srgb,var(--c) 70%,#000) 100%);
  box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.25),inset -6px -8px 18px rgba(0,0,0,.25),0 22px 34px rgba(0,0,0,.5)}
.ph::after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(115deg,rgba(255,255,255,.35) 0%,rgba(255,255,255,0) 32%,rgba(255,255,255,0) 70%,rgba(255,255,255,.12) 100%)}
.pc:hover .ph{transform:rotate(-2deg) scale(1.05)}
.ph .cm{position:absolute;top:12px;inset-inline-start:12px;display:grid;gap:5px;padding:6px;border-radius:12px;background:rgba(0,0,0,.18);box-shadow:inset 0 0 0 1px rgba(255,255,255,.18)}
.ph .cm i{width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#5a6a80 0,#0c0f14 55%,#000 100%);box-shadow:0 0 0 2px rgba(255,255,255,.22)}
.ph.ring .cm{border-radius:50%;width:56px;height:56px;place-content:center;grid-template-columns:repeat(2,18px)}
.ph .lg{position:absolute;bottom:16px;left:0;right:0;text-align:center;font-size:8px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,.55)}
.bd{width:150px;height:120px;position:relative}
.bd .case{position:absolute;inset:auto 10px 0;height:70px;border-radius:30px;background:linear-gradient(160deg,color-mix(in srgb,var(--c) 85%,#fff),var(--c));box-shadow:inset 0 -6px 12px rgba(0,0,0,.25),0 18px 28px rgba(0,0,0,.45)}
.bd .bud{position:absolute;top:6px;width:44px;height:58px;border-radius:24px 24px 18px 18px;background:linear-gradient(160deg,#fff,var(--c));box-shadow:0 10px 18px rgba(0,0,0,.4)}
.bd .bud.l{left:26px;transform:rotate(-14deg)}.bd .bud.r{right:26px;transform:rotate(14deg)}
/* صفحة الجهاز */
#cat .pd{display:none}
#cat.detail .list{display:none}
#cat.detail .pd{display:block}
#cat .back{background:none;border:0;color:#C7CED8;font:inherit;font-weight:600;padding:4px 0 10px;cursor:pointer}
#cat .pd-hero{display:grid;grid-template-columns:1.1fr 1fr;gap:22px;align-items:center;padding:8px 0 22px}
@media (max-width:760px){#cat .pd-hero{grid-template-columns:1fr}}
#cat .pd-hero .big{height:340px;display:grid;place-items:center;position:relative;border-radius:26px;
  background:radial-gradient(70% 60% at 50% 40%,color-mix(in srgb,var(--ac) 30%,transparent),transparent 70%),#0E1218;border:1px solid #1C232C;overflow:hidden}
#cat .pd-hero .big .ph{width:140px;height:280px;border-radius:28px}
#cat .pd-hero .big .ph .cm i{width:26px;height:26px}
#cat .pd-hero .big .ph.ring .cm{width:82px;height:82px;grid-template-columns:repeat(2,26px)}
#cat .pd-hero .big .bd{transform:scale(1.5)}
#cat .pd-hero h1{margin:0;font-size:clamp(26px,5vw,40px);letter-spacing:-.4px}
#cat .pd-hero .tg{color:#AAB3C0;margin-top:6px}
#cat .sw{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
#cat .sw button{display:flex;align-items:center;gap:7px;border:1px solid #26303C;background:#121720;color:#D3D9E1;border-radius:999px;padding:5px 11px 5px 6px;font:inherit;font-size:12.5px;cursor:pointer}
#cat .sw button i{width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(255,255,255,.3)}
#cat .sw button.on{border-color:#FFC915}
#cat .hl{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:18px 0 26px}
#cat .hl div{background:#121820;border:1px solid #1F2731;border-radius:16px;padding:12px 14px}
#cat .hl span{display:block;font-size:11.5px;color:#8892A0}
#cat .hl b{display:block;font-size:17px;margin-top:3px}
#cat .sec{font-size:18px;margin:26px 0 10px}
#cat .sec small{display:block;font-size:12.5px;color:#7C8796;font-weight:400;margin-top:3px}
#cat table.sp{width:100%;border-collapse:collapse;background:#10151C;border:1px solid #1F2731;border-radius:16px;overflow:hidden;font-size:14px}
#cat table.sp td{padding:11px 14px;border-top:1px solid #1A212A}
#cat table.sp tr:first-child td{border-top:0}
#cat table.sp td:first-child{color:#8892A0;width:38%}
/* ===== المنظر المفكوك 3D ===== */
#cat .xv{position:relative;display:grid;grid-template-columns:1.35fr 1fr;gap:16px;background:radial-gradient(90% 70% at 50% 30%,#1B222C 0,#0B0E12 70%);
  border:1px solid #1E2630;border-radius:26px;padding:16px;overflow:hidden}
@media (max-width:820px){#cat .xv{grid-template-columns:1fr}#cat .xv .sc{height:440px}#cat .xv .stk{--sc:.74;top:66%}#cat .lst{max-height:none}}
#cat .xv .sc{height:470px;perspective:1600px;position:relative;cursor:grab;touch-action:none;user-select:none}
#cat .xv .sc:active{cursor:grabbing}
#cat .xv .stk{position:absolute;left:50%;top:64%;width:170px;height:340px;margin:-170px 0 0 -85px;transform-style:preserve-3d;
  transform:scale(var(--sc,.92)) rotateX(var(--rx,58deg)) rotateZ(var(--rz,-36deg));transition:transform .15s linear}
#cat .ly{position:absolute;inset:0;border-radius:24px;transform-style:preserve-3d;transform:translateZ(calc(var(--z) * var(--ex,1) * .78px));
  transition:transform .6s cubic-bezier(.2,.8,.2,1),filter .25s,box-shadow .25s}
#cat .ly.hot{filter:brightness(1.35) drop-shadow(0 0 14px rgba(255,201,21,.55))}
#cat .ly .mkr{position:absolute;width:20px;height:20px;border-radius:50%;background:#FFC915;color:#0B0E12;font-size:11px;font-weight:800;display:grid;place-items:center;
  box-shadow:0 0 0 3px rgba(255,201,21,.25);transform:translateZ(2px)}
/* شكل كل طبقة */
.l-back{background:linear-gradient(135deg,color-mix(in srgb,var(--c) 90%,#fff),var(--c) 50%,color-mix(in srgb,var(--c) 60%,#000));box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.3)}
.l-back::after{content:"";position:absolute;top:14px;left:14px;width:62px;height:62px;border-radius:16px;background:rgba(0,0,0,.35);box-shadow:inset 0 0 0 1px rgba(255,255,255,.3)}
.l-cam{background:transparent}
.l-cam .lens{position:absolute;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#6a7d96 0,#11161d 50%,#000 100%);box-shadow:0 0 0 3px #3a4250,0 0 0 4px #9aa3b0}
.l-cam .blk{position:absolute;top:14px;left:14px;width:62px;height:62px;border-radius:16px;background:linear-gradient(135deg,#2a313c,#151a21);box-shadow:inset 0 0 0 1px #4b5563}
.l-bat{inset:70px 18px 64px 18px;border-radius:14px;background:linear-gradient(135deg,#3a4250,#20262f 60%,#2d3440);box-shadow:inset 0 0 0 1px #59636f}
.l-bat::before{content:attr(data-t);position:absolute;inset:0;display:grid;place-items:center;font-size:15px;font-weight:800;color:#FFC915;letter-spacing:.5px;text-shadow:0 1px 0 #000}
.l-bat::after{content:"Li-ion";position:absolute;bottom:10px;left:0;right:0;text-align:center;font-size:9px;color:#9aa3b0;letter-spacing:2px}
.l-cool{inset:30px 20px 40px;border-radius:16px;background:linear-gradient(135deg,#d29a6a,#9a6436 45%,#e3b58a 60%,#8a5a32);opacity:.92;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)}
.l-cool::after{content:"";position:absolute;inset:10px;border-radius:10px;background:repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 2px,transparent 2px 8px)}
.l-pcb{inset:16px 14px auto 14px;height:150px;border-radius:14px;background:linear-gradient(135deg,#0f2a22,#0b1d18);box-shadow:inset 0 0 0 1px #2c5a4a}
.l-pcb::before{content:"";position:absolute;inset:8px;border-radius:8px;background:repeating-linear-gradient(0deg,rgba(80,200,150,.12) 0 1px,transparent 1px 9px),repeating-linear-gradient(90deg,rgba(80,200,150,.12) 0 1px,transparent 1px 9px)}
.l-pcb .soc{position:absolute;left:44px;top:46px;width:56px;height:56px;border-radius:8px;background:linear-gradient(135deg,#9aa3b0,#5b6370);box-shadow:inset 0 0 0 1px #c7cdd5;display:grid;place-items:center;font-size:8px;font-weight:800;color:#111;text-align:center;line-height:1.1;padding:3px}
.l-pcb .ram{position:absolute;left:108px;top:50px;width:26px;height:40px;border-radius:4px;background:#1d2229;box-shadow:inset 0 0 0 1px #4b5563}
.l-pcb .ufs{position:absolute;left:20px;top:110px;width:40px;height:22px;border-radius:4px;background:#1d2229;box-shadow:inset 0 0 0 1px #4b5563}
.l-pcb .fc{position:absolute;right:16px;top:12px;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle,#2d3b4f,#000);box-shadow:0 0 0 2px #6b7380}
.l-frame{background:transparent;border-radius:24px;box-shadow:inset 0 0 0 7px #a9b0ba,inset 0 0 0 8px #e3e7ec,inset 0 0 0 10px #6f7782}
.l-frame .ant{position:absolute;background:#ff9d4d;opacity:.85}
.l-frame .spk{position:absolute;height:12px;border-radius:4px;background:#2b313a;box-shadow:inset 0 0 0 1px #5c6470}
.l-frame .mot{position:absolute;width:22px;height:14px;border-radius:7px;background:linear-gradient(90deg,#c0c6cf,#7e8792)}
.l-frame .usb{position:absolute;bottom:2px;left:68px;width:34px;height:10px;border-radius:5px;background:#d6dbe1;box-shadow:inset 0 0 0 2px #59616c}
.l-disp{background:linear-gradient(160deg,#08101e,#14233c 50%,#060a12);box-shadow:inset 0 0 0 4px #000}
.l-disp::after{content:"";position:absolute;inset:4px;border-radius:20px;background:radial-gradient(120% 70% at 30% 20%,rgba(255,201,21,.45),transparent 50%),radial-gradient(90% 60% at 80% 80%,rgba(80,140,255,.45),transparent 55%)}
.l-touch{background:rgba(160,200,255,.07);box-shadow:inset 0 0 0 1px rgba(160,200,255,.35)}
.l-touch::after{content:"";position:absolute;inset:8px;border-radius:18px;background:repeating-linear-gradient(0deg,rgba(160,200,255,.14) 0 1px,transparent 1px 12px),repeating-linear-gradient(90deg,rgba(160,200,255,.14) 0 1px,transparent 1px 12px)}
.l-glass{background:linear-gradient(120deg,rgba(255,255,255,.22),rgba(255,255,255,.04) 40%,rgba(255,255,255,.12));box-shadow:inset 0 0 0 1px rgba(255,255,255,.45)}
.l-glass .pun{position:absolute;top:12px;left:78px;width:12px;height:12px;border-radius:50%;background:#000;box-shadow:0 0 0 2px rgba(255,255,255,.2)}
#cat .xv .ctl{position:absolute;bottom:10px;left:12px;right:12px;display:flex;gap:10px;align-items:center;font-size:12px;color:#97A1AE}
#cat .xv .ctl input{flex:1;accent-color:#FFC915}
#cat .xv .ctl button{border:1px solid #2A333F;background:#121720;color:#D3D9E1;border-radius:999px;padding:5px 11px;font:inherit;font-size:12px;cursor:pointer}
#cat .lst{list-style:none;margin:0;padding:0;display:grid;gap:4px;align-content:start;max-height:470px;overflow:auto}
#cat .lst li{display:grid;grid-template-columns:24px 1fr;gap:10px;align-items:start;padding:8px 10px;border-radius:12px;cursor:default;transition:background .2s}
#cat .lst li:hover,#cat .lst li.hot{background:#18202A}
#cat .lst li .n{width:22px;height:22px;border-radius:50%;background:#FFC915;color:#0B0E12;font-size:11px;font-weight:800;display:grid;place-items:center;margin-top:2px}
#cat .lst li b{display:block;font-size:13.5px}
#cat .lst li em{display:block;font-style:normal;font-size:11.5px;color:#7C8796}
#cat .lst li span{display:block;font-size:12.5px;color:#FFC915;margin-top:2px}
#cat .xv .cap{position:absolute;z-index:2;top:12px;inset-inline-start:16px;font-size:11px;color:#6F7A88;letter-spacing:.4px}
#cat .cat-cats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;margin-top:12px}
#cat .cat-cats div{background:#10151C;border:1px solid #1F2731;border-radius:12px;padding:9px 12px;font-size:12px;color:#97A1AE}
#cat .cat-cats b{display:block;color:#E9EDF2;font-size:13px}
@media (prefers-reduced-motion:reduce){#cat *{transition:none!important;animation:none!important}}
.catbtn{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.2);background:transparent;color:#fff;border-radius:999px;padding:7px 13px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}
`;
const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

/* ---------------- الرسومات ---------------- */
function phoneArt(p, color){
  if (p.kind === "buds") return `<div class="bd" style="--c:${color || p.accent}"><div class="case"></div><div class="bud l"></div><div class="bud r"></div></div>`;
  if (p.img) return `<img src="${E(p.img)}" alt="${E(p.name)}" style="max-height:92%;max-width:80%;object-fit:contain;filter:drop-shadow(0 20px 30px rgba(0,0,0,.5))">`;
  const n = p.cams.length, ring = /ring/.test(p.cam);
  return `<div class="ph${ring ? " ring" : ""}" style="--c:${color || p.colors[0][1]}"><div class="cm" style="grid-template-columns:repeat(${n > 2 ? 2 : 1},18px)">${"<i></i>".repeat(Math.min(n, 4))}</div><div class="lg">realme</div></div>`;
}
const keyChips = p => p.kind === "buds"
  ? `<span>ANC <b>${E(p.anc)}</b></span><span>${E(p.driver)}</span><span>${E(p.ip)}</span>`
  : `<span><b>${p.batt.toLocaleString("en-US")}</b> mAh</span><span><b>${p.w}W</b></span><span>${p.hz}Hz</span><span>${E(p.chip.split(" (")[0].split(" / ")[0])}</span>`;

/* ---------------- مكونات الموبايل (14) — قيم الجهاز نفسه ---------------- */
function parts(p){
  const big = p.cams.join(" + ");
  return [
    {k:"glass", ar:"الزجاج الحامي", en:"Protective Glass", v:T("زجاج مقوّى رفيع فوق الشاشة","Ultra-thin reinforced cover glass")},
    {k:"touch", ar:"طبقة اللمس", en:"Touch Digitizer", v:T("طبقة شفافة حساسة للمس","Transparent touch-sensing layer")},
    {k:"disp",  ar:"الشاشة الأمامية", en:"Front Display Assembly", v:`${p.display} · ${p.hz}Hz${p.nits && p.nits !== "—" ? " · " + p.nits : ""}`},
    {k:"front", ar:"الكاميرا الأمامية", en:"Front Camera", v:p.front},
    {k:"frame", ar:"الإطار الأوسط", en:"Mid-frame / Chassis", v:T("هيكل داخلي بيشيل كل المكونات","Internal structure holding every part")},
    {k:"ant",   ar:"وحدات الأنتينا", en:"Antenna Modules", v:/5G/.test(p.name) ? "5G · 4G · Wi-Fi · BT" : "4G · Wi-Fi · BT"},
    {k:"pcb",   ar:"اللوحة الأم", en:"Mainboard", v:`${p.chip} · RAM ${p.ram} · ${p.rom}`},
    {k:"cool",  ar:"نظام التبريد", en:"Cooling System", v:p.cool},
    {k:"bat",   ar:"البطارية", en:"Battery", v:`${p.batt.toLocaleString("en-US")} mAh`},
    {k:"spk",   ar:"السماعات", en:"Speaker Assembly", v:T("سماعة علوية + سفلية","Upper + lower speakers")},
    {k:"mot",   ar:"موتور الاهتزاز", en:"Vibration Motor", v:T("موتور اهتزاز دقيق","Precision haptic motor")},
    {k:"usb",   ar:"منفذ الشحن", en:"Charging Port", v:`USB-C · ${p.w}W`},
    {k:"cam",   ar:"الكاميرات الخلفية", en:"Rear Camera System", v:big},
    {k:"back",  ar:"الغطاء الخلفي", en:"Rear Cover", v:`${p.colors.map(c => c[0]).join(" / ")}`},
  ];
}
// ترتيب الطبقات من ورا لقدام + مكان العلامة على كل طبقة
function layers(p, color){
  const n = p.cams.length;
  const lensPos = [[18,18],[50,18],[18,50],[50,50]].slice(0, Math.min(n, 4));
  return [
    {cls:"l-back",  z:0,   html:"", marks:[["back", 120, 260]], style:`--c:${color}`},
    {cls:"l-cam",   z:34,  html:`<div class="blk"></div>${lensPos.map(([x,y]) => `<div class="lens" style="left:${x}px;top:${y}px"></div>`).join("")}`, marks:[["cam", 82, 80]]},
    {cls:"l-bat",   z:72,  html:"", marks:[["bat", 100, 150]], data:`${p.batt.toLocaleString("en-US")} mAh`},
    {cls:"l-cool",  z:104, html:"", marks:[["cool", 98, 230]]},
    {cls:"l-pcb",   z:138, html:`<div class="soc">${E(p.chip.split(" (")[0].split(" / ")[0])}</div><div class="ram"></div><div class="ufs"></div><div class="fc"></div>`, marks:[["pcb", 10, 10], ["front", 128, 34]]},
    {cls:"l-frame", z:176, html:`<div class="ant" style="left:0;top:40px;width:3px;height:40px"></div><div class="ant" style="right:0;top:40px;width:3px;height:40px"></div><div class="ant" style="left:0;bottom:50px;width:3px;height:40px"></div><div class="ant" style="right:0;bottom:50px;width:3px;height:40px"></div>
        <div class="spk" style="top:8px;left:62px;width:46px"></div><div class="spk" style="bottom:16px;right:16px;width:40px"></div><div class="mot" style="bottom:18px;left:16px"></div><div class="usb"></div>`,
      marks:[["frame", 4, 150], ["ant", 152, 60], ["spk", 120, 300], ["mot", 18, 296], ["usb", 76, 318]]},
    {cls:"l-disp",  z:214, html:"", marks:[["disp", 130, 120]]},
    {cls:"l-touch", z:244, html:"", marks:[["touch", 20, 200]]},
    {cls:"l-glass", z:272, html:`<div class="pun"></div>`, marks:[["glass", 130, 250]]},
  ];
}
function exploded(p, color){
  const P = parts(p), idx = Object.fromEntries(P.map((x, i) => [x.k, i + 1]));
  return `<div class="xv" id="xv">
    <div class="sc" id="xsc"><span class="cap">${E(T("اسحب عشان تلف الموبايل · مرّر على أي جزء", "Drag to rotate · hover any part"))}</span>
      <div class="stk" id="xstk">${layers(p, color).map(L => `<div class="ly ${L.cls}" style="--z:${L.z};${L.style || ""}"${L.data ? ` data-t="${E(L.data)}"` : ""} data-ks="${L.marks.map(m => m[0]).join(" ")}">${L.html}
        ${L.marks.map(([k, x, y]) => `<span class="mkr" data-k="${k}" style="left:${x}px;top:${y}px">${idx[k]}</span>`).join("")}</div>`).join("")}</div>
      <div class="ctl"><span>${E(T("جمّع", "Assemble"))}</span><input type="range" id="xr" min="0" max="160" value="100"><span>${E(T("فكّ", "Explode"))}</span>
        <button id="xrot">${E(T("↻ لف", "↻ Spin"))}</button></div>
    </div>
    <ul class="lst" id="xl">${P.map((x, i) => `<li data-k="${x.k}"><span class="n">${i + 1}</span><div><b>${E(T(x.ar, x.en))}</b><em>${E(T(x.en, x.ar))}</em><span>${E(x.v)}</span></div></li>`).join("")}</ul>
  </div>
  <div class="cat-cats">
    <div><b>${E(T("الشاشة", "Display"))}</b>${E(T("زجاج · لمس · AMOLED/LCD", "Glass · touch · panel"))}</div>
    <div><b>${E(T("الأداء", "Performance"))}</b>${E(T("اللوحة الأم · المعالج · الذاكرة · التبريد", "Board · SoC · memory · cooling"))}</div>
    <div><b>${E(T("الطاقة", "Power"))}</b>${E(T("البطارية · منفذ الشحن", "Battery · charging port"))}</div>
    <div><b>${E(T("الاتصال والصوت", "Connectivity & audio"))}</b>${E(T("الأنتينا · السماعات · الاهتزاز", "Antennas · speakers · haptics"))}</div>
  </div>`;
}
function wireExploded(){
  const sc = document.getElementById("xsc"), stk = document.getElementById("xstk"); if (!sc) return;
  let rx = 58, rz = -36, drag = null, spin = 0;
  const apply = () => { stk.style.setProperty("--rx", rx + "deg"); stk.style.setProperty("--rz", rz + "deg"); };
  sc.addEventListener("pointerdown", e => { drag = {x: e.clientX, y: e.clientY, rx, rz}; sc.setPointerCapture(e.pointerId); stopSpin(); });
  sc.addEventListener("pointermove", e => {
    if (drag) { rz = drag.rz + (e.clientX - drag.x) * .35; rx = Math.max(5, Math.min(80, drag.rx - (e.clientY - drag.y) * .3)); apply(); }
    else if (matchMedia("(hover:hover)").matches && !spin) { const r = sc.getBoundingClientRect(); rz = -36 + ((e.clientX - r.left) / r.width - .5) * 24; rx = 58 - ((e.clientY - r.top) / r.height - .5) * 14; apply(); }
  });
  sc.addEventListener("pointerup", () => drag = null);
  document.getElementById("xr").addEventListener("input", e => stk.style.setProperty("--ex", e.target.value / 100));
  function stopSpin(){ cancelAnimationFrame(spin); spin = 0; }
  document.getElementById("xrot").addEventListener("click", () => {
    if (spin) return stopSpin();
    const step = () => { rz += .6; apply(); spin = requestAnimationFrame(step); }; spin = requestAnimationFrame(step);
  });
  const hot = k => {
    document.querySelectorAll("#xstk .ly").forEach(l => l.classList.toggle("hot", !!k && l.dataset.ks.split(" ").includes(k)));
    document.querySelectorAll("#xl li").forEach(li => li.classList.toggle("hot", li.dataset.k === k));
  };
  document.getElementById("xl").addEventListener("mouseover", e => { const li = e.target.closest("li"); hot(li && li.dataset.k); });
  document.getElementById("xl").addEventListener("click", e => { const li = e.target.closest("li"); hot(li && li.dataset.k); });
  document.getElementById("xl").addEventListener("mouseleave", () => hot(null));
  stk.addEventListener("mouseover", e => { const m = e.target.closest(".mkr"); if (m) hot(m.dataset.k); });
  stk.addEventListener("mouseout", e => { if (e.target.closest(".mkr")) hot(null); });
  // دخول: الطبقات بتتفك بالتدريج
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) { stk.style.setProperty("--ex", 0); requestAnimationFrame(() => setTimeout(() => stk.style.setProperty("--ex", 1), 120)); }
  apply();
}

/* ---------------- الواجهة ---------------- */
const root = document.createElement("section"); root.id = "cat"; root.className = "hide"; root.setAttribute("aria-label", "catalog");
document.body.appendChild(root);
let fs = "", q = "";
function shell(){
  root.innerHTML = `<div class="ct-top"><span class="mk">REALME</span><h2>${E(T("كاتالوج الأجهزة", "Product catalog"))}</h2><button class="x" id="ctx" aria-label="close">✕</button></div>
  <div class="wrap"><div class="list">
    <div class="ct-hero"><h1>${T("كل أجهزة <b>realme</b><br>في مصر", "Every <b>realme</b> device<br>in Egypt")}</h1>
      <p>${E(T("افتح أي جهاز تشوف مواصفاته كاملة، وتفكّه طبقة طبقة وتعرف جواه إيه.", "Open any device for full specs, then take it apart layer by layer."))}</p></div>
    <div class="ct-f"><input type="search" id="ctq" placeholder="${E(T("دوّر بالاسم أو المعالج أو البطارية…", "Search by name, chipset or battery…"))}" value="${E(q)}">
      <div class="chs" id="cts">${SERIES.map(([k, a, e]) => `<button data-s="${k}" class="${k === fs ? "on" : ""}">${E(T(a, e))}</button>`).join("")}</div></div>
    <div class="grid" id="ctg"></div>
    <div class="note">${E(T("المواصفات مجمّعة من مواقع realme الرسمية ومراجع تقنية، وممكن تختلف شوية حسب الإصدار المطروح في مصر. الرسومات توضيحية مش صور حقيقية للأجهزة.",
      "Specs are compiled from realme's official sites and tech references and may differ slightly for the Egyptian variant. Illustrations are not real product photos."))}</div>
  </div><div class="pd" id="ctd"></div></div>`;
  root.querySelector("#ctx").onclick = close;
  root.querySelector("#ctq").addEventListener("input", e => { q = e.target.value; grid(); });
  root.querySelector("#cts").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; fs = b.dataset.s;
    root.querySelectorAll("#cts button").forEach(x => x.classList.toggle("on", x === b)); grid(); });
  root.querySelector("#ctg").addEventListener("click", e => { const c = e.target.closest(".pc"); if (c) detail(c.dataset.id); });
  root.querySelector("#ctg").addEventListener("pointermove", e => { const c = e.target.closest(".pc"); if (!c) return; const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px"); });
  grid();
}
const norm = s => String(s || "").toLowerCase().replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/\s+/g, " ");
function grid(){
  const nq = norm(q);
  const list = PRODUCTS.filter(p => (!fs || p.series === fs) && (!nq || norm(`${p.name} ${p.chip || ""} ${p.batt || ""} ${p.tag_ar} ${p.tag_en}`).includes(nq)));
  const sname = k => { const s = SERIES.find(x => x[0] === k); return s ? T(s[1], s[2]) : ""; };
  root.querySelector("#ctg").innerHTML = list.length ? list.map(p => `<button class="pc" data-id="${p.id}" style="--ac:${p.accent}">
      <div class="stage">${phoneArt(p)}</div><div class="sr">${E(sname(p.series))}</div><h3>${E(p.name)}</h3><div class="tg">${E(T(p.tag_ar, p.tag_en))}</div>
      <div class="ks">${keyChips(p)}</div></button>`).join("")
    : `<div style="color:#7C8796;padding:30px 0">${E(T("مفيش جهاز بالاسم ده", "No matching device"))}</div>`;
}
function detail(id){
  const p = PRODUCTS.find(x => x.id === id); if (!p) return;
  let color = p.kind === "buds" ? p.accent : p.colors[0][1];
  const d = root.querySelector("#ctd");
  const rows = p.kind === "buds"
    ? [[T("السماعة", "Driver"), p.driver], [T("عزل الضوضاء", "Noise cancelling"), p.anc], [T("التشغيل", "Playback"), p.play], [T("مقاومة المية", "Water resistance"), p.ip], ["Bluetooth", p.bt], ["Codec", p.codec]]
    : [[T("المعالج", "Chipset"), p.chip], [T("الشاشة", "Display"), `${p.display} · ${p.hz}Hz${p.nits !== "—" ? " · " + p.nits : ""}`], ["RAM", p.ram], [T("المساحة", "Storage"), p.rom],
       [T("الكاميرات الخلفية", "Rear cameras"), p.cams.join(" + ")], [T("الكاميرا الأمامية", "Front camera"), p.front], [T("البطارية", "Battery"), p.batt.toLocaleString("en-US") + " mAh"],
       [T("الشحن", "Charging"), p.w + "W"], [T("مقاومة المية والتراب", "Ingress protection"), p.ip], [T("التبريد", "Cooling"), p.cool], [T("الوزن", "Weight"), p.weight], [T("السُمك", "Thickness"), p.thick],
       [T("الألوان", "Colours"), p.colors.map(c => c[0]).join(" / ")]];
  const hl = p.kind === "buds"
    ? [[T("عزل الضوضاء", "ANC"), p.anc], [T("التشغيل", "Playback"), p.play.replace("حتى ", "")], [T("السماعة", "Driver"), p.driver], ["IP", p.ip]]
    : [[T("البطارية", "Battery"), p.batt.toLocaleString("en-US") + " mAh"], [T("الشحن", "Charging"), p.w + "W"], [T("الشاشة", "Display"), p.hz + "Hz · " + p.display.split(" ")[0]], [T("الكاميرا", "Camera"), p.cams[0].split(" ")[0]],
       [T("المعالج", "Chipset"), p.chip.split(" (")[0].split(" / ")[0]], [T("الحماية", "Protection"), p.ip]];
  const render = () => {
    d.innerHTML = `<button class="back" id="ctb">${E(T("→ كل الأجهزة", "← All devices"))}</button>
      <div class="pd-hero" style="--ac:${p.accent}"><div class="big glow" id="ctbig">${phoneArt(p, color)}</div>
        <div><div class="sr">${E((SERIES.find(s => s[0] === p.series) || [, "", ""])[ar() ? 1 : 2])}</div><h1>${E(p.name)}</h1><div class="tg">${E(T(p.tag_ar, p.tag_en))}</div>
          ${p.colors ? `<div class="sw" id="ctsw">${p.colors.map(([n, c]) => `<button data-c="${c}" class="${c === color ? "on" : ""}"><i style="background:${c}"></i>${E(n)}</button>`).join("")}</div>` : ""}
          ${p.note_ar ? `<div class="note" style="margin-top:12px">⚠ ${E(T(p.note_ar, "Specs vary by market variant"))}</div>` : ""}</div></div>
      <div class="hl">${hl.map(([k, v]) => `<div><span>${E(k)}</span><b>${E(v)}</b></div>`).join("")}</div>
      ${p.kind === "buds" ? "" : `<h3 class="sec">${E(T("الموبايل جواه إيه؟", "What's inside?"))}<small>${E(T("منظر مفكوك تفاعلي — 14 جزء بقيم الجهاز ده. اسحب للّف وحرّك الشريط للفك والتجميع.", "Interactive exploded view — 14 parts with this device's values. Drag to rotate, slide to explode."))}</small></h3>${exploded(p, color)}`}
      <h3 class="sec">${E(T("المواصفات الكاملة", "Full specifications"))}</h3>
      <table class="sp">${rows.map(([k, v]) => `<tr><td>${E(k)}</td><td>${E(v)}</td></tr>`).join("")}</table>
      <div class="note">${E(T("المواصفات ممكن تختلف حسب الإصدار المطروح في مصر.", "Specs may differ for the Egyptian variant."))}</div>`;
    d.querySelector("#ctb").onclick = () => { root.classList.remove("detail"); root.scrollTo(0, 0); };
    const sw = d.querySelector("#ctsw"); if (sw) sw.onclick = e => { const b = e.target.closest("button"); if (!b) return; color = b.dataset.c; render(); };
    const big = d.querySelector("#ctbig"); big.addEventListener("pointermove", e => { const r = big.getBoundingClientRect(); const ph = big.querySelector(".ph,.bd,img"); if (!ph) return;
      ph.style.transform = `perspective(700px) rotateY(${((e.clientX - r.left) / r.width - .5) * 30}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * 20}deg)`; });
    big.addEventListener("pointerleave", () => { const ph = big.querySelector(".ph,.bd,img"); if (ph) ph.style.transform = ""; });
    wireExploded();
  };
  render();
  root.classList.add("detail"); root.scrollTo(0, 0);
  try { history.replaceState(null, "", "#catalog/" + id); } catch (e) {}
}
function open(id){ shell(); root.classList.remove("hide"); document.body.style.overflow = "hidden"; if (id) detail(id); else try { history.replaceState(null, "", "#catalog"); } catch (e) {} }
function close(){ root.classList.add("hide"); root.classList.remove("detail"); document.body.style.overflow = ""; try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
window.openCatalog = open;
document.addEventListener("click", e => { const b = e.target.closest("[data-open-catalog]"); if (b) { e.preventDefault(); open(); } });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !root.classList.contains("hide")) { root.classList.contains("detail") ? root.classList.remove("detail") : close(); } });
// لينك مباشر: ...index.html#catalog أو #catalog/16pp
const h = location.hash.match(/^#catalog(?:\/(\w+))?/); if (h) open(h[1]);
})();
