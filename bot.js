/* =====================================================================
   الشات بوت — الكود (مش محتاج تعدّل هنا)
   الأسئلة والأجوبة في ملف faq.js
   ===================================================================== */
(function () {
  const css = `
  #botBtn{position:fixed;bottom:calc(16px + env(safe-area-inset-bottom));inset-inline-end:16px;z-index:50;width:54px;height:54px;
    border-radius:50%;border:0;background:var(--yel,#FFC915);color:var(--ink,#17202B);box-shadow:0 6px 18px rgba(23,32,43,.22);
    display:grid;place-items:center;cursor:pointer}
  #botBtn svg{width:26px;height:26px}
  #botBox{position:fixed;z-index:60;bottom:calc(80px + env(safe-area-inset-bottom));inset-inline-end:16px;width:min(380px,calc(100vw - 24px));
    height:min(560px,calc(100dvh - 110px));background:var(--sheet,#fff);border:1px solid var(--line,#E4E7EC);border-radius:14px;
    box-shadow:0 14px 40px rgba(23,32,43,.22);display:flex;flex-direction:column;overflow:hidden}
  #botBox.hide,#botBtn.hide{display:none!important}
  #botBox .bh{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--line,#E4E7EC)}
  #botBox .bh .av{width:30px;height:30px;border-radius:8px;background:var(--yel,#FFC915);display:grid;place-items:center;font-size:15px}
  #botBox .bh b{flex:1;font-size:15px}
  #botBox .bh button{background:none;border:0;font-size:22px;line-height:1;color:var(--mute,#69727F);cursor:pointer;padding:2px 6px}
  #botMsgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:var(--paper,#F4F5F7)}
  .bm{max-width:88%;padding:9px 12px;border-radius:12px;font-size:14px;line-height:1.55;white-space:pre-line;word-wrap:break-word}
  .bm.me{align-self:flex-end;background:var(--ink,#17202B);color:#fff;border-end-end-radius:4px}
  .bm.bot{align-self:flex-start;background:var(--sheet,#fff);border:1px solid var(--line,#E4E7EC);border-end-start-radius:4px}
  .bchips{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:100%}
  .bchips button{border:1px solid #CDD2DA;background:var(--sheet,#fff);border-radius:999px;padding:6px 11px;font-size:13px;cursor:pointer;
    color:var(--ink2,#3A4452);text-align:start}
  .bstore{display:block;margin-top:6px;padding:8px 10px;border-radius:10px;background:var(--yel2,#FFF6D6);white-space:normal}
  .bstore .n{font-weight:600}
  .bstore .r{display:flex;justify-content:space-between;gap:10px;font-size:13px}
  .bstore button{margin-top:6px;border:0;background:var(--ink,#17202B);color:#fff;border-radius:999px;padding:5px 12px;font-size:12.5px;cursor:pointer}
  #botForm{display:flex;gap:8px;padding:10px;border-top:1px solid var(--line,#E4E7EC)}
  #botIn{flex:1;min-width:0;padding:10px 12px;border:1px solid #CDD2DA;border-radius:999px;font-size:15px;outline:none}
  #botIn:focus{border-color:var(--ink,#17202B)}
  #botForm button{border:0;background:var(--ink,#17202B);color:#fff;border-radius:999px;padding:0 16px;font-weight:600;cursor:pointer}
  .tour-hl{outline:3px solid var(--yel,#FFC915)!important;outline-offset:3px;border-radius:10px;box-shadow:0 0 0 9999px rgba(23,32,43,.28)!important;position:relative;z-index:40}
  #botBox.tour{height:auto;max-height:46dvh}
  body.tour-on{padding-bottom:60vh}
  #botBox.tour #botForm{display:none}
  .tstep{font-size:12px;color:var(--mute,#69727F);margin-bottom:4px}
  .tnav{display:flex;gap:6px;align-self:stretch;justify-content:space-between}
  .tnav button{border:1px solid #CDD2DA;background:var(--sheet,#fff);border-radius:999px;padding:7px 14px;font-size:13.5px;cursor:pointer}
  .tnav button.pri{background:var(--ink,#17202B);color:#fff;border-color:var(--ink,#17202B)}
  .tourchip{background:var(--yel,#FFC915)!important;border-color:var(--yel,#FFC915)!important;color:var(--ink,#17202B)!important;font-weight:600}
  @media (max-width:520px){#botBox{inset-inline-end:8px;width:calc(100vw - 16px);bottom:calc(76px + env(safe-area-inset-bottom))}}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const html = `
  <button id="botBtn" aria-label="Help"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.2M12 16.5h.01"/></svg></button>
  <div id="botBox" class="hide" role="dialog">
    <div class="bh"><div class="av">💬</div><b id="botName"></b><button id="botX" aria-label="Close">×</button></div>
    <div id="botMsgs"></div>
    <form id="botForm"><input id="botIn" autocomplete="off"><button type="submit" id="botSend"></button></form>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", html);
  const $b = id => document.getElementById(id);
  const msgs = $b("botMsgs");

  // ---------- الأسئلة (من faq.js — بيتحمّل جديد كل مرة عشان التعديلات تظهر على طول)
  let QA = [], CFG = {}, STEPS = [], loaded = false;
  function loadFaq(cb) {
    if (loaded) return cb();
    const s = document.createElement("script");
    s.src = "faq.js?t=" + Date.now();
    s.onload = () => { try { QA = FAQ; CFG = BOT; } catch (e) { QA = []; CFG = {}; }
                       try { STEPS = TOUR; } catch (e) { STEPS = []; } loaded = true; cb(); };
    s.onerror = () => { loaded = true; cb(); };
    document.head.appendChild(s);
  }

  const ar = () => (typeof lang === "undefined" ? "ar" : lang) === "ar";
  const L = (o, k) => (o && (ar() ? o[k + "_ar"] : o[k + "_en"])) || (o && (o[k + "_ar"] || o[k + "_en"])) || "";
  const UI = {
    send: ["إرسال", "Send"], ph: ["اكتب سؤالك…", "Type your question…"],
    found: ["لقيت {0} محل — اكتب الكود عشان أحدد:", "I found {0} stores. Type the code to narrow it down:"],
    avail: ["الرصيد المتاح", "Available balance"], used: ["المستخدم", "Used"], bank: ["رصيد البنك", "Bank balance"],
    open: ["افتح كشف الحساب", "Open statement"], paper0: ["مفيش ولا محل عندك عليه مشكلة ورق ✔", "None of your stores has a paperwork issue ✔"],
    paperN: ["المحلات اللي عليها مشكلة ورق ({0}):", "Stores with a paperwork issue ({0}):"],
    total: ["عندك {0} محل — إجمالي الرصيد المتاح {1}، والمستخدم {2}.", "You have {0} stores: total available {1}, total used {2}."],
    more: ["أسئلة تانية:", "Other questions:"],
    whichStore: ["لأنهي محل؟ اكتب الكود أو الاسم — أو اكتب «كل المحلات».", "Which store? Type its code or name, or \"all stores\"."],
    whichPeriod: ["عايز الأوردرات لأنهي يوم ولا أنهي شهر؟ (مثلًا: النهارده، 15/11، نوفمبر، الشهر اللي فات)", "Which day or month? (e.g. today, 15/11, November, last month)"],
    badPeriod: ["مش فاهم التاريخ 🤔 اكتب يوم زي 15/11 أو شهر زي نوفمبر، أو اختار من تحت.", "I couldn't read that date 🤔 Type a day like 15/11 or a month like November, or pick below."],
    today: ["النهارده", "Today"], yday: ["امبارح", "Yesterday"], thisM: ["الشهر ده", "This month"], lastM: ["الشهر اللي فات", "Last month"], allT: ["كل الفترات", "All time"],
    ordOf: ["أوردرات {0} — {1}", "Orders for {0}: {1}"], allStores: ["كل محلاتك", "all your stores"],
    nOrd: ["أوردرات", "Orders"], nRet: ["مرتجعات", "Returns"], net: ["الصافي", "Net"], pcs: ["قطعة", "pcs"],
    noOrd: ["مفيش أوردرات ولا مرتجعات في الفترة دي.", "No orders or returns in this period."],
    incOf: ["حوافز {0}", "Incentives for {0}"], opening: ["بواقي", "Carried over"], incN: ["حوافز", "Incentives"],
    tour: ["📘 شرح الصفحة خطوة بخطوة", "📘 Step-by-step tour"], next: ["التالي", "Next"], prev: ["السابق", "Back"],
    end: ["إنهاء", "Finish"], step: ["خطوة {0} من {1}", "Step {0} of {1}"],
    tourLogin: ["ادخل الأول، وبعدين اضغط «📘 شرح الصفحة» وأنا أشرحلك كل جزء.", "Sign in first, then tap \"📘 Step-by-step tour\" and I'll show you every part."],
    nostore: ["مش لاقي محل بالاسم ده عندك 🤔 جرّب الكود، أو اكتب الاسم زي ما هو مكتوب في قايمة المحلات.", "I couldn't find a store with that name. Try the code, or type the name as it appears in your list."], login: ["ادخل الأول عشان أقدر أقولك أرقام محلاتك.", "Sign in first so I can show your stores' numbers."],
  };
  const u = (k, ...a) => UI[k][ar() ? 0 : 1].replace(/\{(\d)\}/g, (_, i) => a[+i]);
  const E = s => (typeof esc === "function" ? esc(s) : String(s ?? ""));
  const F = n => (typeof fmt === "function" ? fmt(n) : String(n));
  const N = s => (typeof normAr === "function" ? normAr(s) : String(s || "").toLowerCase());
  const W = s => (typeof words === "function" ? words(s) : String(s || "").toLowerCase().split(/\s+/).filter(Boolean));
  const loggedIn = () => typeof data !== "undefined" && data && Array.isArray(data.ms);

  function add(cls, htmlText) {
    const d = document.createElement("div"); d.className = "bm " + cls; d.innerHTML = htmlText;
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; return d;
  }
  function chips(list, title) {
    if (!list.length) return;
    if (title) add("bot", E(title));
    const box = document.createElement("div"); box.className = "bchips";
    list.forEach(q => {
      const b = document.createElement("button"); b.type = "button"; b.textContent = L(q, "q");
      b.onclick = () => { add("me", E(L(q, "q"))); add("bot", E(L(q, "a"))); };
      box.appendChild(b);
    });
    msgs.appendChild(box); msgs.scrollTop = msgs.scrollHeight;
  }
  const starters = () => QA.filter(q => loggedIn() ? q.top : q.login).slice(0, 8);

  function tourChip() {
    if (!STEPS.length) return;
    const box = document.createElement("div"); box.className = "bchips";
    const b = document.createElement("button"); b.type = "button"; b.className = "tourchip"; b.textContent = u("tour");
    b.onclick = () => startTour();
    box.appendChild(b); msgs.appendChild(box);
  }
  // ---------- الشرح خطوة بخطوة
  let ti = -1;
  function clearHl() { document.querySelectorAll(".tour-hl").forEach(e => e.classList.remove("tour-hl")); }
  function startTour() {
    if (!loggedIn()) { add("bot", E(u("tourLogin"))); return; }
    ti = 0; $b("botBox").classList.add("tour"); document.body.classList.add("tour-on"); showStep();
  }
  function endTour() { clearHl(); ti = -1; $b("botBox").classList.remove("tour"); document.body.classList.remove("tour-on"); reset(); }
  function showStep() {
    const sp = STEPS[ti]; if (!sp) return endTour();
    clearHl();
    try {
      if (sp.go === "list" && cur != null) showList();
      if (sp.go === "store") {
        if (cur == null && data.ms.length) { cur = data.ms[0].id; showSt(); }
        if (sp.tab) { const tb = document.querySelector(`#seg button[data-p="${sp.tab}"]`); if (tb) tb.click(); }
      }
    } catch (e) {}
    msgs.innerHTML = "";
    add("bot", `<div class="tstep">${E(u("step", ti + 1, STEPS.length))}</div><b>${E(L(sp, "t"))}</b>\n${E(L(sp, "a"))}`);
    const nav = document.createElement("div"); nav.className = "tnav";
    const mk = (txt, fn, pri) => { const b = document.createElement("button"); b.type = "button"; b.textContent = txt; if (pri) b.className = "pri"; b.onclick = fn; return b; };
    nav.appendChild(mk(u("end"), endTour));
    const right = document.createElement("div"); right.style.display = "flex"; right.style.gap = "6px";
    if (ti > 0) right.appendChild(mk(u("prev"), () => { ti--; showStep(); }));
    right.appendChild(mk(ti < STEPS.length - 1 ? u("next") : u("end"), () => { if (ti < STEPS.length - 1) { ti++; showStep(); } else endTour(); }, true));
    nav.appendChild(right); msgs.appendChild(nav);
    setTimeout(() => {
      const el = sp.target && document.querySelector(sp.target);
      if (el && el.getClientRects().length) {
        el.classList.add("tour-hl");
        if (getComputedStyle(el).position !== "fixed") {
          const hd = document.querySelector("header"), off = (hd && hd.offsetHeight || 0) + 14;
          window.scrollTo({top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - off), behavior: "smooth"});
        }
      }
    }, 120);
  }

  function reset() {
    msgs.innerHTML = "";
    $b("botName").textContent = L(CFG, "name") || (ar() ? "المساعد" : "Assistant");
    $b("botIn").placeholder = u("ph"); $b("botSend").textContent = u("send");
    add("bot", E(L(CFG, "welcome")));
    if (loggedIn()) tourChip();
    chips(starters());
  }

  // ---------- فهم السؤال
  const STOP = new Set(["رصيد", "محل", "المحل", "كام", "بكام", "ايه", "عايز", "اعرف", "كشف", "حساب", "بتاع", "بتاعه", "لمحل", "في",
    "حوافز", "حافز", "اوردرات", "اوردر", "أوردرات", "أوردر", "مرتجعات", "مرتجع", "صافي", "عمل", "عامل", "عملت", "شهر", "يوم", "النهارده",
    "امبارح", "الشهر", "ده", "اللي", "فات", "كل", "عند", "محلات", "orders", "order", "net", "returns", "incentives", "month", "today",
    "balance", "store", "shop", "of", "the", "what", "is", "how", "much", "for", "show", "me"].map(N));

  function findStores(q) {
    const nq = N(q), out = [];
    for (const m of data.ms) {
      const c = N(m.code);
      if (c.length >= 3 && nq.includes(c)) out.push(m);
    }
    if (out.length) return out;
    const MN = new Set(["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",
      "january","february","march","april","may","june","july","august","september","october","november","december"].map(N));
    const ws = W(q).filter(w => w.length >= 2 && !STOP.has(w) && !MN.has(w) && !/^\d{1,4}$/.test(w));
    if (!ws.length) return [];
    return data.ms.filter(m => { const h = N(`${m.name} ${m.region}`); return ws.every(w => h.includes(w)); });
  }
  function storeCard(m) {
    const b = typeof lastBank === "function" ? lastBank(m.id) : null;
    return `<span class="bstore"><span class="n">${E(m.name)}</span> <span class="num">${E(m.code)}</span>
      <span class="r"><span>${E(u("avail"))}</span><b class="num">${F(m.bal)}</b></span>
      <span class="r"><span>${E(u("used"))}</span><span class="num">${F(m.used)}</span></span>
      ${b ? `<span class="r"><span>${E(u("bank"))}</span><span class="num">${F(b.balance)}</span></span>` : ""}
      ${m.bad ? `<span class="r" style="color:var(--red,#C2362B)">⚠ ${E(m.note || (ar() ? "مشكلة ورق" : "Paperwork issue"))}</span>` : ""}
      <button type="button" data-open="${m.id}">${E(u("open"))}</button></span>`;
  }
  function bestFaq(q) {
    const qs = W(q).filter(w => w.length >= 2);
    let best = null, top = 0;
    for (const item of QA) {
      const toks = W(`${item.keys || ""} ${item.q_ar || ""} ${item.q_en || ""}`).filter(t => t.length >= 2);
      let s = 0;
      for (const w of qs) if (toks.some(t => t === w || (w.length >= 3 && (t.includes(w) || w.includes(t)) && t.length >= 3))) s++;
      if (s > top) { top = s; best = item; }
    }
    return top ? best : null;
  }
  // ---------- التواريخ (يوم / شهر)
  const MONTHS = [["يناير","jan"],["فبراير","feb"],["مارس","mar"],["ابريل","أبريل","apr"],["مايو","may"],["يونيو","jun"],
                  ["يوليو","jul"],["اغسطس","أغسطس","aug"],["سبتمبر","sep"],["اكتوبر","أكتوبر","oct"],["نوفمبر","nov"],["ديسمبر","dec"]];
  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const monthRange = (y, m) => [iso(new Date(y, m, 1)), iso(new Date(y, m + 1, 0)), `${y}-${String(m + 1).padStart(2, "0")}`];
  function parsePeriod(q0) {
    const q = String(q0).replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).toLowerCase();
    const now = new Date(), y = now.getFullYear();
    if (/كل الفترات|كل الوقت|all time|من الاول|من الأول/.test(q)) return ["0000-01-01", "9999-12-31", u("allT")];
    if (/النهارده|النهاردة|اليوم|today/.test(q)) { const d = iso(now); return [d, d, d]; }
    if (/امبارح|إمبارح|أمس|امس|yesterday/.test(q)) { const d = iso(new Date(now - 864e5)); return [d, d, d]; }
    if (/الشهر ده|الشهر الحالي|this month/.test(q)) return monthRange(y, now.getMonth());
    if (/الشهر اللي فات|الشهر الماضي|الشهر السابق|last month/.test(q)) return monthRange(y, now.getMonth() - 1);
    let m = q.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (m) { const d = iso(new Date(+m[1], +m[2] - 1, +m[3])); return [d, d, d]; }
    m = q.match(/(\d{1,2})[\/\-.](\d{1,2})(?:[\/\-.](\d{2,4}))?/);
    if (m && +m[2] <= 12) {
      const yy = m[3] ? (m[3].length === 2 ? 2000 + +m[3] : +m[3]) : y;
      if (m[3] && +m[1] <= 12 && m[3].length === 4 && !q.match(/\d{1,2}[\/\-.]\d{1,2}[\/\-.]/)) return monthRange(+m[3], +m[1] - 1);
      const d = iso(new Date(yy, +m[2] - 1, +m[1])); return [d, d, d];
    }
    m = q.match(/(\d{4})-(\d{1,2})(?!\d)/) || q.match(/(\d{1,2})[\/](\d{4})/);
    if (m) { const [a, b] = m[1].length === 4 ? [+m[1], +m[2]] : [+m[2], +m[1]]; return monthRange(a, b - 1); }
    for (let i = 0; i < 12; i++) if (MONTHS[i].some(n => q.includes(N(n)) || q.includes(n))) {
      const ym = q.match(/(20\d{2})/); let yy = ym ? +ym[1] : y;
      if (!ym && i > now.getMonth()) yy -= 1;                // «ديسمبر» في يناير = ديسمبر اللي فات
      return monthRange(yy, i);
    }
    m = q.match(/شهر\s*(\d{1,2})|month\s*(\d{1,2})/);
    if (m) { const mm = +(m[1] || m[2]); let yy = y; if (mm - 1 > now.getMonth()) yy -= 1; return monthRange(yy, mm - 1); }
    return null;
  }
  function ordersSummary(ids, a, b) {
    const set = new Set(ids), rows = extra.orders.filter(r => set.has(r.merchant_id) && r.date >= a && r.date <= b);
    const o = rows.filter(r => r.kind !== "return"), rt = rows.filter(r => r.kind === "return");
    const S = (xs, f) => xs.reduce((s, r) => s + Number(r[f] || 0), 0), nd = xs => new Set(xs.map(r => r.merchant_id + "|" + (r.doc_no || r.id))).size;
    return {n: rows.length, no: nd(o), qo: S(o, "qty"), ao: S(o, "amount"), nr: nd(rt), qr: S(rt, "qty"), ar: S(rt, "amount")};
  }
  function sayOrders(stores, per) {
    const [a, b, label] = per;
    const all = stores === "all", list = all ? data.ms : stores;
    const blocks = (all || list.length > 5 ? [{title: all ? u("allStores") : list.length + "", ids: list.map(m => m.id)}] :
                    list.map(m => ({title: `${m.name} (${m.code})`, ids: [m.id], m})));
    const html = blocks.map(bl => {
      const x = ordersSummary(bl.ids, a, b);
      if (!x.n) return `<span class="bstore"><span class="n">${E(bl.title)}</span><br>${E(u("noOrd"))}</span>`;
      return `<span class="bstore"><span class="n">${E(bl.title)}</span>
        <span class="r"><span>${E(u("nOrd"))} (${x.no}) — ${x.qo.toLocaleString("en-US")} ${E(u("pcs"))}</span><b class="num">${F(x.ao)}</b></span>
        <span class="r"><span>${E(u("nRet"))} (${x.nr}) — ${x.qr.toLocaleString("en-US")} ${E(u("pcs"))}</span><span class="num">${F(x.ar)}</span></span>
        <span class="r"><span><b>${E(u("net"))}</b></span><b class="num">${F(x.ao - x.ar)}</b></span>
        ${bl.m ? `<button type="button" data-open="${bl.m.id}">${E(u("open"))}</button>` : ""}</span>`;
    }).join("");
    add("bot", E(u("ordOf", all ? u("allStores") : list.length === 1 ? list[0].name : list.length + "", label)) + html);
  }
  function sayIncentives(list) {
    add("bot", list.map(m => `<span class="bstore"><span class="n">${E(m.name)}</span> <span class="num">${E(m.code)}</span>
      <span class="r"><span>${E(u("opening"))}</span><span class="num">${F(m.op)}</span></span>
      <span class="r"><span>${E(u("incN"))}</span><span class="num">${F(m.inc)}</span></span>
      <span class="r"><span>${E(u("used"))}</span><span class="num">${F(m.used)}</span></span>
      <span class="r"><span><b>${E(u("avail"))}</b></span><b class="num">${F(m.bal)}</b></span>
      <button type="button" data-open="${m.id}">${E(u("open"))}</button></span>`).join(""));
  }
  function periodChips() {
    const box = document.createElement("div"); box.className = "bchips";
    ["today", "yday", "thisM", "lastM", "allT"].forEach(k => {
      const b = document.createElement("button"); b.type = "button"; b.textContent = u(k);
      b.onclick = () => { add("me", E(u(k))); answer(u(k)); };
      box.appendChild(b);
    });
    msgs.appendChild(box); msgs.scrollTop = msgs.scrollHeight;
  }
  let pend = null;            // سؤال لسه مستني تكملة: {intent, stores, per}
  function cont() {           // كمّل السؤال لما تتجمع البيانات
    if (!pend.stores) { add("bot", E(u("whichStore"))); return; }
    if (pend.intent === "orders" && !pend.per) { add("bot", E(u("whichPeriod"))); periodChips(); return; }
    const p = pend; pend = null;
    if (p.intent === "orders") return sayOrders(p.stores, p.per);
    if (p.intent === "inc") return sayIncentives(p.stores === "all" ? data.ms.slice(0, 5) : p.stores);
    return add("bot", (p.stores === "all" ? data.ms.slice(0, 5) : p.stores).map(storeCard).join(""));
  }
  function storesFrom(q) {
    if (/كل المحلات|كل محلاتي|كلهم|all stores|all my stores/i.test(q)) return "all";
    const st = findStores(q);
    if (st.length && st.length <= 5) return st;
    if (st.length > 5) { add("bot", E(u("found", st.length)) + st.slice(0, 8).map(m => `<br>• ${E(m.name)} — <span class="num">${E(m.code)}</span>`).join("")); return "many"; }
    return null;
  }
  function dataAnswer(q) {
    const intent = /اوردر|أوردر|اوردرات|أوردرات|طلبي|مرتجع|صافي|order|return|net/i.test(q) ? "orders" :
                   /حافز|حوافز|incentive/i.test(q) ? "inc" : /رصيد|balance|كام/i.test(q) ? "bal" : null;
    if (pend) {                                   // تكملة لسؤال قبله
      if (!pend.stores) { const s2 = storesFrom(q); if (s2 === "many") return true; if (s2) { pend.stores = s2; cont(); return true; } }
      else if (pend.intent === "orders" && !pend.per) {
        const per = parsePeriod(q);
        if (per) { pend.per = per; cont(); return true; }
        if (!intent) { add("bot", E(u("badPeriod"))); periodChips(); return true; }
      }
      if (!intent) { pend = null; return false; }
      pend = null;
    }
    const st = storesFrom(q);
    if (st === "many") return true;
    if (!intent) {
      if (st && st !== "all") { add("bot", st.map(storeCard).join("")); return true; }
      return false;
    }
    pend = {intent, stores: st || (data.ms.length === 1 ? [data.ms[0]] : null), per: intent === "orders" ? parsePeriod(q) : null};
    if (!pend.stores && intent !== "orders" && !/محل|store|shop|عند|بتاع/.test(q) && W(q).every(w => STOP.has(w) || w.length < 2)) { pend = null; return false; }
    cont(); return true;
  }

  function answer(q) {
    const nq = N(q);
    if (/شرح|اشرح|علمني|تعليمات|جوله|tutorial|tour|guide|walkthrough/i.test(nq)) return startTour();
    const asksMeaning = /معناها|يعني|mean/.test(q);
    if (loggedIn() && !asksMeaning) {
      if (/ورق|paper/i.test(q) && !/[A-Za-z]*\d{3,}/.test(q)) {
        const bad = data.ms.filter(m => m.bad);
        if (!bad.length) return add("bot", E(u("paper0")));
        return add("bot", E(u("paperN", bad.length)) + bad.slice(0, 15).map(storeCard).join(""));
      }
      if (/(اجمالي|إجمالي|مجموع|total|كل المحلات)/i.test(q) && !/\d{3,}/.test(q) && !/اوردر|أوردر|مرتجع|صافي|حافز|حوافز|order|return|net|incentive/i.test(q)) {
        const b = data.ms.reduce((a, m) => a + m.bal, 0), us = data.ms.reduce((a, m) => a + m.used, 0);
        return add("bot", E(u("total", data.ms.length, F(b), F(us))));
      }
      if (!/ازاي|إزاي|اكود|أكود|تكويد|ليه|امتى|إمتى|معاد|how|why|when/.test(q) && dataAnswer(q)) return;
      if (/رصيد|balance/i.test(q) && W(q).some(w => w.length >= 2 && !STOP.has(w))) return add("bot", E(u("nostore")));
    }
    const f = bestFaq(q);
    if (f) return add("bot", E(L(f, "a")));
    if (!loggedIn() && /رصيد|balance|\d{4,}/i.test(nq)) return add("bot", E(u("login")));
    add("bot", E(L(CFG, "not_found")));
    chips(starters());
  }

  // ---------- الأحداث
  msgs.addEventListener("click", e => {
    const b = e.target.closest("[data-open]"); if (!b) return;
    const id = +b.dataset.open;
    try { cur = id; changed.delete(id); showSt(); } catch (err) {}
    if (window.innerWidth < 700) $b("botBox").classList.add("hide");
  });
  $b("botBtn").onclick = () => {
    const box = $b("botBox");
    if (!box.classList.contains("hide")) return box.classList.add("hide");
    loadFaq(() => { if (!msgs.childElementCount) reset(); box.classList.remove("hide"); if (window.innerWidth >= 700) $b("botIn").focus(); });
  };
  $b("botX").onclick = () => { if (ti >= 0) endTour(); $b("botBox").classList.add("hide"); };
  $b("botForm").onsubmit = e => {
    e.preventDefault();
    const q = $b("botIn").value.trim(); if (!q) return;
    $b("botIn").value = ""; add("me", E(q)); answer(q);
  };
  document.addEventListener("change", e => { if (e.target.matches && e.target.matches("select.lang") && loaded) reset(); });
})();
