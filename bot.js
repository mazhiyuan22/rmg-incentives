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
    "balance", "store", "shop", "of", "the", "what", "is", "how", "much", "for", "show", "me"].map(N));

  function findStores(q) {
    const nq = N(q), out = [];
    for (const m of data.ms) {
      const c = N(m.code);
      if (c.length >= 3 && nq.includes(c)) out.push(m);
    }
    if (out.length) return out;
    const ws = W(q).filter(w => w.length >= 2 && !STOP.has(w));
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
      if (/(اجمالي|إجمالي|مجموع|total|كل المحلات)/i.test(q) && !/\d{3,}/.test(q)) {
        const b = data.ms.reduce((a, m) => a + m.bal, 0), us = data.ms.reduce((a, m) => a + m.used, 0);
        return add("bot", E(u("total", data.ms.length, F(b), F(us))));
      }
      const st = findStores(q);
      if (st.length && st.length <= 5) return add("bot", st.map(storeCard).join(""));
      if (st.length > 5) return add("bot", E(u("found", st.length)) + st.slice(0, 8).map(m => `<br>• ${E(m.name)} — <span class="num">${E(m.code)}</span>`).join(""));
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
