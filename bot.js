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
  .bm.welcome{background:#FFF8DC;border-color:#F3DE8A}
  .bm.welcome b{display:block;font-size:15.5px;font-weight:700;margin-bottom:2px}
  .bm.welcome span{display:block;color:#4a4a4a}
  .bm.hint{background:none;border:0;padding:4px 2px 0;font-size:12.5px;color:var(--mute,#667085)}
  .bchips.try button{background:#fff;border-color:#E9C84A;font-weight:500}
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
  #botMic,#botSpk{border:1px solid #CDD2DA!important;background:var(--sheet,#fff)!important;color:var(--ink,#17202B)!important;width:42px;padding:0!important;
    border-radius:50%!important;display:grid;place-items:center;flex:none}
  #botMic svg,#botSpk svg{width:19px;height:19px}
  #botSpk{width:34px;height:34px;font-size:15px!important}
  #botMic.on{background:#E5484D!important;border-color:#E5484D!important;color:#fff!important;animation:micp 1.3s ease-out infinite}
  #botSpk.on{background:var(--yel,#FFC915)!important;border-color:var(--yel,#FFC915)!important}
  @keyframes micp{0%{box-shadow:0 0 0 0 rgba(229,72,77,.55)}100%{box-shadow:0 0 0 14px rgba(229,72,77,0)}}
  .bm.live{opacity:.65;font-style:italic}
  @media (prefers-reduced-motion:reduce){#botMic.on{animation:none}}
  @media (max-width:520px){#botBox{inset-inline-end:8px;width:calc(100vw - 16px);bottom:calc(76px + env(safe-area-inset-bottom))}}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const html = `
  <button id="botBtn" aria-label="Help"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.2M12 16.5h.01"/></svg></button>
  <div id="botBox" class="hide" role="dialog">
    <div class="bh"><div class="av">💬</div><b id="botName"></b><button id="botSpk" type="button" aria-label="Voice replies" title="🔊"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg></button><button id="botX" aria-label="Close">×</button></div>
    <div id="botMsgs"></div>
    <form id="botForm"><button type="button" id="botMic" aria-label="Voice"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/></svg></button><input id="botIn" autocomplete="off"><button type="submit" id="botSend"></button></form>
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

  const LG = () => (typeof lang === "undefined" ? "ar" : lang);
  const ar = () => LG() === "ar", zh = () => LG() === "zh";
  const LI = () => (ar() ? 0 : zh() ? 2 : 1);
  const L = (o, k) => (o && (o[k + "_" + LG()] || (zh() && o[k + "_en"]))) || (o && (o[k + "_ar"] || o[k + "_en"])) || "";
  const UI = {
    send: ["إرسال", "Send"], ph: ["اكتب سؤالك أو كود المحل…", "Ask a question or type a store code…"],
    hello: ["{greet} يا {name} 👋\nاسألني عن أي محل من محلاتك.", "{greet}, {name} 👋\nAsk me about any of your stores."],
    helloOut: ["أهلًا بيك 👋\nاسألني عن الدخول أو الحوافز.", "Welcome 👋\nAsk me about signing in or incentives."],
    tryLbl: ["جرّب:", "Try:"],
    didYou: ["مش متأكد إني فهمت 🤔 تقصد واحد من دول؟", "Not sure I got that 🤔 Did you mean one of these?"],
    alsoQ: ["أسئلة قريبة:", "Related questions:"],
    about: ["📍 على محل {0}", "📍 About {0}"],
    papOk: ["✔ مفيش مشكلة ورق متسجلة على المحل ده", "✔ No paperwork issue recorded for this store"],
    papBad: ["⚠ عليه مشكلة ورق: {0}", "⚠ Paperwork issue: {0}"], papBad0: ["مشكلة ورق", "paperwork issue"],
    papFiles: ["{0} ملف", "{0} file(s)"], papNoFile: ["مفيش ملف", "no file"],
    papOrig: ["الأصل في الشركة ✔", "Original received ✔"], papNoOrig: ["الأصل مش في الشركة", "Original not received"],
    papSum: ["الأصول اللي في الشركة: {0} من {1}", "Originals received: {0} of {1}"], faqLbl: ["أسئلة بتتسأل كتير:", "Common questions:"],
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
  const ZHUI = {
    send: "发送", ph: "输入问题或门店代码…", hello: "{greet}，{name} 👋\n问我任何一家门店。", helloOut: "欢迎 👋\n可以问我登录或激励的问题。",
    tryLbl: "试试：", didYou: "我不太确定 🤔 你是指下面这些吗？", alsoQ: "相关问题：", about: "📍 关于 {0}",
    papOk: "✔ 这家门店没有登记资料问题", papBad: "⚠ 资料问题：{0}", papBad0: "资料问题", papFiles: "{0} 个文件", papNoFile: "没有文件",
    papOrig: "原件已收到 ✔", papNoOrig: "原件未收到", papSum: "已收到原件：{0} / {1}", faqLbl: "常见问题：",
    found: "找到 {0} 家门店——输入代码以确定：", avail: "可用余额", used: "已使用", bank: "银行余额", open: "打开对账单",
    paper0: "你的门店都没有资料问题 ✔", paperN: "有资料问题的门店（{0}）：", total: "你有 {0} 家门店——可用余额合计 {1}，已使用 {2}。",
    more: "其他问题：", whichStore: "哪家门店？输入代码或名称——或者输入“所有门店”。",
    whichPeriod: "要哪一天或哪个月的订单？（例如：今天、15/11、十一月、上个月）",
    badPeriod: "我看不懂这个日期 🤔 输入像 15/11 这样的日期或像十一月这样的月份，或从下面选择。",
    today: "今天", yday: "昨天", thisM: "本月", lastM: "上个月", allT: "全部时间", ordOf: "{0} 的订单——{1}", allStores: "你所有的门店",
    nOrd: "订单", nRet: "退货", net: "净额", pcs: "件", noOrd: "这个期间没有订单或退货。", incOf: "{0} 的激励", opening: "结转", incN: "激励",
    tour: "📘 分步导览", next: "下一步", prev: "上一步", end: "结束", step: "第 {0} 步，共 {1} 步",
    tourLogin: "请先登录，然后点“📘 分步导览”，我会带你看每个部分。",
    nostore: "找不到这个名字的门店 🤔 试试代码，或者按门店列表里的写法输入名称。", login: "请先登录，我才能告诉你门店的数据。",
    micOn: "🎙 我在听…", micErr: "麦克风没有权限——请在浏览器里允许麦克风。", micNo: "这个浏览器不支持语音——请用 Chrome。",
    voiceOn: "🔊 语音回复已开启", voiceOff: "🔇 语音回复已关闭", noVoice: "这部设备上没有中文语音——我会用文字回答。",
  };
  const VUI = {
    micOn: ["🎙 بسمعك… اتكلم", "🎙 Listening… go ahead"], micErr: ["المايك مش متاح — اسمح للمتصفح يستخدم المايك.", "Microphone blocked — allow microphone access in your browser."],
    micNo: ["المتصفح ده مش بيدعم الكلام — استخدم Chrome.", "This browser doesn't support voice — use Chrome."],
    voiceOn: ["🔊 الرد بالصوت شغال", "🔊 Voice replies on"], voiceOff: ["🔇 الرد بالصوت اتقفل", "🔇 Voice replies off"],
    noVoice: ["مفيش صوت عربي على الجهاز ده — هرد كتابة.", "No English voice on this device — I'll reply in text."],
  };
  Object.assign(UI, VUI);
  for (const k in ZHUI) if (UI[k]) UI[k][2] = ZHUI[k];
  const u = (k, ...a) => (UI[k][LI()] ?? UI[k][1]).replace(/\{(\d)\}/g, (_, i) => a[+i]);
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
    if (title) add("bot hint", E(title));
    const box = document.createElement("div"); box.className = "bchips";
    list.forEach(q => {
      const b = document.createElement("button"); b.type = "button"; b.textContent = L(q, "q");
      b.onclick = () => { add("me", E(L(q, "q"))); const d = add("bot", E(L(q, "a"))); if (speakOn) speak(plain(d)); };
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

  function welcome() {
    const h = new Date().getHours();
    const greet = ar() ? (h < 12 ? "صباح الخير" : "مساء الخير") : zh() ? (h < 12 ? "早上好" : h < 18 ? "下午好" : "晚上好")
                        : (h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening");
    const nm = (loggedIn() && data.who) ? String(data.who).trim().split(/\s+/) : [];
    const who = nm.length > 2 ? nm[0] : nm.join(" ");   // «مشرف الجيزة» كامل — «أحمد محمد علي» ← أحمد
    let txt = loggedIn() ? (L(CFG, "welcome") || u("hello")) : (L(CFG, "welcome_out") || u("helloOut"));
    txt = txt.replace("{greet}", greet).replace(who ? "{name}" : /\s*(يا|,|，)?\s*\{name\}/, who);
    const [first, ...rest] = txt.split("\n");
    const d = add("bot welcome", `<b>${E(first)}</b>${rest.length ? "<span>" + E(rest.join("\n")) + "</span>" : ""}`);
    if (loggedIn()) {
      const tries = CFG["try_" + LG()] || CFG.try_en || [];
      if (tries.length) {
        add("bot hint", E(u("tryLbl")));
        const box = document.createElement("div"); box.className = "bchips try";
        tries.forEach(q => {
          const b = document.createElement("button"); b.type = "button"; b.textContent = q;
          b.onclick = () => { add("me", E(q)); ask(q.replace(/^[^\p{L}\p{N}]+/u, ""), false); };
          box.appendChild(b);
        });
        msgs.appendChild(box);
      }
      tourChip();
    }
    const st = starters();
    if (st.length) chips(st, loggedIn() ? u("faqLbl") : "");
    return d;
  }

  function reset() {
    ctx = null; pend = null;
    msgs.innerHTML = "";
    $b("botName").textContent = L(CFG, "name") || (ar() ? "المساعد" : zh() ? "助手" : "Assistant");
    $b("botIn").placeholder = u("ph"); $b("botSend").textContent = u("send");
    welcome();
  }


  // ---------- فهم أحسن: مرادفات + أخطاء الكتابة + بادئات/لواحق — من غير AI
  // كل سطر: الكلمة اللي البوت بيفهمها  ←  الكلمات اللي ممكن الناس تكتبها بدلها
  const SYN = {
    "رصيد":     "فلوس باقي الباقي فاضل الفاضل متاح المتاح بالانس بلانس balance rased rasid raseed",
    "حوافز":    "حافز الحافز بونص بونس بونيس مكافاه مكافات مكافآت انسنتف اينسنتف انسنتيف incentive incentives bonus 7afez 7awafez 7wafez hawafez",
    "اوردرات":  "اوردر أوردر اوردرز طلبيه طلبيات طلبات طلبية مبيعات بيع شغل سحب سحوبات order orders sales ordr",
    "مرتجعات":  "مرتجع مرتجعه رجوع رجع مرجوع مرتجعات returns return",
    "صافي":     "الصافي net",
    "ورق":      "ورقه ورقة الورق اوراق أوراق مستند مستندات papers paper documents docs wr2 war2",
    "النهارده": "انهارده النهاردة انهاردة النهارد اليوم today nharda elnaharda",
    "امبارح":   "إمبارح امبارحه امس أمس yesterday embare7",
    "ازاي":     "إزاي ازاى ازي إزّاي كيف كيفية طريقه طريقة how ezay ezzay",
    "كشف":      "statement ledger دائن مدين مديونيه مديونية",
    "دخول":     "ادخل أدخل لوجين login باسورد password الباسورد كلمه كلمة يوزر username يوزرنيم sign",
    "تكويد":    "اكود أكود كود_جديد فرعي فرع",
    "فات":      "vat قيمه قيمة مضافه مضافة ضريبه ضريبة ضرايب",
    "تحصيل":    "تحصيلات حصلت سدد سداد دفع دفعات collection collections",
    "بنك":      "ايداع إيداع ايداعات تحويل تحويلات bank deposit",
    "فاتوره":   "فاتورة فواتير invoice invoices",
    "نماذج":    "نموذج تمبلت تمبليت template templates فورم form"
  };
  const SYN_REV = new Map(), VOCAB = new Set();
  // كلمات مصري شائعة قريبة في الكتابة من كلمات مهمة («لاقي» ≈ «باقي») — مانصحّحهاش
  const NOFUZZ = new Set(["لاقي", "لاقيه", "عارف", "عارفه", "شايف", "فاهم", "عامل", "ماشي", "حاجه", "حاجة", "خالص", "كده", "كدا",
    "بقى", "بقي", "تاني", "برضه", "بردو", "اهو", "طيب", "تمام", "شكرا", "مرسي", "اوك", "ok"].map(N));
  let synBuilt = null;
  function buildSyn() {                     // المرادفات الأساسية + اللي في faq.js (BOT.synonyms)
    const extraSyn = (CFG && CFG.synonyms) || {};
    if (synBuilt === extraSyn) return;
    synBuilt = extraSyn; SYN_REV.clear(); VOCAB.clear();
    const all = Object.assign({}, SYN);
    for (const [c, vs] of Object.entries(extraSyn)) all[c] = ((all[c] || "") + " " + vs).trim();
    for (const [c, vs] of Object.entries(all)) {
      VOCAB.add(N(c)); SYN[c] = SYN[c] || "";
      for (const v of String(vs).split(/\s+/)) { const k = N(v.replace(/_/g, "")); if (k) { SYN_REV.set(k, c); VOCAB.add(k); } }
    }
    if (typeof STOP !== "undefined") { for (const k of SYN_REV.keys()) STOP.add(k); for (const c of Object.keys(all)) STOP.add(N(c)); }
  }
  const PRE = ["وال", "بال", "فال", "كال", "لل", "ال", "و", "ف", "ب", "ل"];
  const SUF = ["هم", "ها", "كم", "نا", "ات", "ين", "ون", "يه", "ه", "ك", "ي"];
  function forms(w) {                       // الكلمة + من غير بادئات/لواحق
    const out = new Set([w]);
    for (const p of PRE) if (w.startsWith(p) && w.length - p.length >= 3) out.add(w.slice(p.length));
    for (const x of [...out]) for (const sf of SUF) if (x.endsWith(sf) && x.length - sf.length >= 3) out.add(x.slice(0, -sf.length));
    return [...out];
  }
  function lev(a, b, max) {                 // عدد الحروف المختلفة (بيقف بدري لو عدّى الحد)
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev = Array.from({length: b.length + 1}, (_, j) => j);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i]; let best = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (cur[j] < best) best = cur[j];
      }
      if (best > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }
  const tol = w => (w.length >= 7 ? 2 : w.length >= 4 ? 1 : 0);
  function canonWord(w) {                   // كلمة ← الكلمة اللي البوت بيفهمها (لو ليها مرادف)
    for (const f of forms(w)) { if (SYN_REV.has(f)) return SYN_REV.get(f); if (SYN[f] !== undefined) return f; }
    const t = tol(w);
    if (!t || NOFUZZ.has(w)) return null;
    let best = null, bd = t + 1;
    for (const v of VOCAB) { if (v.length < 4) continue; const d = lev(w, v, t); if (d < bd) { bd = d; best = v; } }
    return best ? (SYN_REV.get(best) || best) : null;
  }
  let _sw = null, _swFor = null;
  function storeWords() {
    if (!(typeof data !== "undefined" && data && data.ms)) return new Set();
    if (_swFor !== data.ms) { _swFor = data.ms; _sw = new Set(data.ms.flatMap(m => W(`${m.code} ${m.name} ${m.region}`)).filter(w => w.length >= 3)); }
    return _sw;
  }
  // صيني ← الكلمات اللي البوت بيفهمها (الصيني مافيهوش مسافات بين الكلمات)
  const ZHMAP = [[/余额|多少钱|还剩|剩多少/, "رصيد"], [/激励|奖励|奖金|返利/, "حوافز"], [/订单|下单|销售|出货/, "اوردرات"], [/退货|退回/, "مرتجعات"],
    [/净额|净/, "صافي"], [/资料|文件|证件|材料|单据/, "ورق"], [/今天|今日/, "النهارده"], [/昨天|昨日/, "امبارح"], [/本月|这个月/, "الشهر ده"],
    [/上个月|上月/, "الشهر اللي فات"], [/全部时间|所有时间/, "كل الفترات"], [/怎么|如何|怎样/, "ازاي"], [/为什么/, "ليه"], [/什么时候|何时|几号|截止/, "امتى"],
    [/详细对账单|借贷|欠款|应收/, "دائن مدين"], [/对账单|账单|明细/, "كشف"], [/登录|密码|用户名|登不上/, "دخول"], [/增值税|退税|税/, "فات"], [/收款|付款|回款/, "تحصيل"],
    [/银行|存款|转账/, "بنك"], [/发票/, "فاتوره"], [/模板|表格|表单/, "نماذج"], [/编码|分店/, "تكويد"], [/所有门店|全部门店|所有店|我的门店/, "كل المحلات"],
    [/合计|总计|总共|一共/, "اجمالي"], [/谁|哪些|哪家/, "مين"], [/意思|是什么/, "يعني"], [/导览|教程|介绍页面|带我看/, "شرح"],
    [/语言|中文|英文/, "لغة"], [/手机|主屏幕|应用/, "تطبيق"], [/错|不对/, "غلط"], [/门店|店/, "محل"], [/原件/, "الاصل"]];
  const ZHN = {"一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9, "十": 10, "十一": 11, "十二": 12};
  function zhCanon(q) {
    if (!/[\u4e00-\u9fff]/.test(q)) return q;
    q = q.replace(/(十[一二]?|[一二三四五六七八九])月/g, (_, n) => ZHN[n] + "月")
         .replace(/(\d{1,2})月(\d{1,2})[日号]/g, " $2/$1 ").replace(/(\d{1,2})月/g, " شهر $1 ");
    const add = ZHMAP.filter(([re]) => re.test(q)).map(([, w]) => w);
    const rest = q.replace(/[\u4e00-\u9fff，。？！、：；“”‘’（）]+/g, " ");      // كود المحل أو أرقام مكتوبة جنب الصيني
    return (rest + " " + add.join(" ")).replace(/\s+/g, " ").trim();
  }
  function canon(q) {                       // السؤال + الكلمات اللي فهمها (بيتضافوا في الآخر)
    q = zhCanon(q);
    const raw = String(q).replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/الشهر دا\b/g, "الشهر ده");
    const add = new Set();
    for (const tok of raw.split(/\s+/)) {
      const w = N(tok);
      if (w.length < 2 || /^\d+$/.test(w)) continue;
      if (storeWords().has(w)) continue;                                      // كود أو اسم محل — سيبه زي ما هو
      const c = canonWord(w);
      if (c && !N(raw).includes(N(c))) add.add(c);
    }
    return add.size ? raw + " " + [...add].join(" ") : raw;
  }

  // ---------- فهم السؤال
  const STOP = new Set(["رصيد", "محل", "المحل", "كام", "بكام", "ايه", "عايز", "اعرف", "كشف", "حساب", "بتاع", "بتاعه", "لمحل", "في",
    "حوافز", "حافز", "اوردرات", "اوردر", "أوردرات", "أوردر", "مرتجعات", "مرتجع", "صافي", "عمل", "عامل", "عملت", "شهر", "يوم", "النهارده",
    "امبارح", "الشهر", "ده", "اللي", "فات", "كل", "عند", "محلات", "orders", "order", "net", "returns", "incentives", "month", "today",
    "balance", "store", "shop", "of", "the", "what", "is", "how", "much", "for", "show", "me",
    "ورق", "ورقه", "ورقة", "الورق", "اوراق", "أوراق", "سليم", "سليمه", "مظبوط", "كامل", "ناقص", "ولا", "لا", "هو", "هل", "بتاعه", "بتاعته",
    "بطاقه", "بطاقة", "ضريبيه", "ضريبية", "سجل", "تجاري", "عقد", "العقد", "اخطار", "إخطار", "اقرار", "إقرار", "اصول", "أصول", "الاصل", "الأصل",
    "وصل", "وصلت", "استلمنا", "طيب", "و", "بقى", "paper", "papers", "documents", "ok", "complete", "his", "its",
    "كم", "بكم", "ما", "ماهو", "ماهي", "هي", "اريد", "أريد", "عاوز", "عايزه", "اعرف", "أعرف", "معرفه", "معرفة", "قولي", "قوللي", "شوف",
    "لو", "سمحت", "فضلك", "من", "الخاص", "الخاصه", "بتاعت", "بتاعة", "بتاعها", "دلوقتي", "حاليا", "يا", "مساعد", "باقي", "فلوس"].map(N));

  buildSyn();
  function findStores(q) {
    const nq = N(q), out = [];
    for (const m of data.ms) {
      const c = N(m.code);
      if (c.length >= 3 && nq.includes(c)) out.push(m);
    }
    if (out.length) return out;
    const runs = (q.match(/\d{3,}/g) || []);
    for (const d of runs) {
      const hit = data.ms.filter(m => String(m.code).replace(/\D/g, "").includes(d));
      if (hit.length && hit.length <= 5) return hit;
    }
    const MN = new Set(["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",
      "january","february","march","april","may","june","july","august","september","october","november","december"].map(N));
    const ws = W(q).filter(w => w.length >= 2 && !STOP.has(w) && !MN.has(w) && !/^\d{1,4}$/.test(w)
                              && ![...forms(w), N("ال" + w)].some(f => SYN_REV.has(f) || STOP.has(f) || SYN[f] !== undefined));     // «الطلبات» = أوردرات مش اسم محل
    if (!ws.length) return [];
    const exact = data.ms.filter(m => { const h = N(`${m.name} ${m.region}`); return ws.every(w => h.includes(w)); });
    if (exact.length) return exact;
    // اسم مكتوب عربي والمحل متسجل إنجليزي (أو العكس): «جودة» ↔ «Gouda» — بنقارن الحروف الساكنة بس
    const sk = ws.map(skel).filter(x => x.length >= 2);
    if (!sk.length || sk.length < ws.length) return [];
    return data.ms.filter(m => { const ns = W(`${m.name} ${m.region}`).map(skel); return sk.every(k => ns.includes(k)); });
  }
  const TR = {"ا":"","ب":"b","ت":"t","ث":"s","ج":"g","ح":"h","خ":"kh","د":"d","ذ":"z","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s",
              "ض":"d","ط":"t","ظ":"z","ع":"","غ":"gh","ف":"f","ق":"k","ك":"k","ل":"l","م":"m","ن":"n","ه":"","و":"","ي":"","ء":""};
  function skel(w) {                        // هيكل الحروف الساكنة: «جوده»→gd  «gouda»→gd  «طنطا»→tnt  «tanta»→tnt
    let x = /[\u0600-\u06FF]/.test(w) ? [...w].map(c => TR[c] ?? "").join("") : w.toLowerCase();
    return x.replace(/q/g, "k").replace(/c(?=[eiy])/g, "s").replace(/c/g, "k").replace(/ph/g, "f").replace(/[aeiouwyh]/g, "").replace(/(.)\1+/g, "$1");
  }
  function storeCard(m) {
    const b = typeof lastBank === "function" ? lastBank(m.id) : null;
    return `<span class="bstore"><span class="n">${E(m.name)}</span> <span class="num">${E(m.code)}</span>
      <span class="r"><span>${E(u("avail"))}</span><b class="num">${F(m.bal)}</b></span>
      <span class="r"><span>${E(u("used"))}</span><span class="num">${F(m.used)}</span></span>
      ${b ? `<span class="r"><span>${E(u("bank"))}</span><span class="num">${F(b.balance)}</span></span>` : ""}
      ${m.bad ? `<span class="r" style="color:var(--red,#C2362B)">⚠ ${E(m.note || u("papBad0"))}</span>` : ""}
      <button type="button" data-open="${m.id}">${E(u("open"))}</button></span>`;
  }
  const FILLER = new Set(["في", "من", "على", "عن", "ايه", "اي", "انا", "انت", "هو", "هي", "ده", "دي", "دا", "اللي", "لو", "مش",
    "عايز", "عاوز", "محتاج", "ممكن", "يا", "و", "او", "ولا", "مع", "لما", "عشان", "علشان", "ازاي", "هل", "the", "a", "to", "is", "i", "my"].map(N));
  function rankFaq(q) {                     // كل الأسئلة مترتبة حسب القرب من سؤال المستخدم
    const qs = [...new Set(W(q).filter(w => w.length >= 2 && !FILLER.has(w)))];
    if (!qs.length || !QA.length) return [];
    const docs = QA.map(item => new Set(W(`${item.keys || ""} ${item.q_ar || ""} ${item.q_en || ""}`)
      .filter(t => t.length >= 2).flatMap(forms)));
    const df = w => docs.filter(d => d.has(w)).length;
    return QA.map((item, i) => {
      const d = docs[i]; let sc = 0;
      for (const w of qs) {
        const fs = forms(w), idf = Math.log(1 + QA.length / (1 + Math.min(...fs.map(df))));
        if (fs.some(f => d.has(f))) { sc += idf; continue; }
        let hit = false;
        if (w.length >= 3) for (const t of d) { if (t.length >= 3 && (t.includes(w) || w.includes(t))) { hit = true; break; } }
        if (!hit && tol(w)) for (const t of d) { if (t.length >= 4 && lev(w, t, tol(w)) <= tol(w)) { hit = true; break; } }
        if (hit) sc += idf * 0.6;
      }
      return {item, sc};
    }).filter(x => x.sc > 0).sort((a, b) => b.sc - a.sc);
  }
  function zhBoost(q0, r) {                 // سؤال صيني: قارن أزواج الحروف مع q_zh
    if (!/[\u4e00-\u9fff]/.test(q0)) return r;
    const bg = s => { const t = String(s || "").replace(/[^\u4e00-\u9fff]/g, ""), o = new Set(); for (let i = 0; i < t.length - 1; i++) o.add(t.slice(i, i + 2)); return o; };
    const qb = bg(q0); if (!qb.size) return r;
    const m = new Map(r.map(x => [x.item, x.sc]));
    QA.forEach(item => {
      const d = bg(item.q_zh); let hit = 0; qb.forEach(b => { if (d.has(b)) hit++; });
      const sc = hit / qb.size * 3;
      if (sc > 0) m.set(item, (m.get(item) || 0) + sc);
    });
    return [...m].map(([item, sc]) => ({item, sc})).sort((a, b) => b.sc - a.sc);
  }
  function bestFaq(q) {
    const r = rankFaq(q);
    return r.length && r[0].sc >= 0.9 ? r[0].item : null;
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
      b.onclick = () => { add("me", E(u(k))); ask(u(k), false); };
      box.appendChild(b);
    });
    msgs.appendChild(box); msgs.scrollTop = msgs.scrollHeight;
  }
  let pend = null;            // سؤال لسه مستني تكملة: {intent, stores, per}
  let ctx = null;             // آخر محل اتكلمنا عليه — بيفضل لحد ما يتذكر محل تاني
  const remember = st => { if (Array.isArray(st) && st.length === 1) ctx = st[0]; };
  const ctxStore = () => {
    if (ctx && data.ms.some(m => m.id === ctx.id)) return [data.ms.find(m => m.id === ctx.id)];
    const open = typeof cur !== "undefined" && cur != null && data.ms.find(m => m.id === cur);   // المحل المفتوح في الصفحة
    return open ? [open] : null;
  };
  const DOCS = ["tax_card", "commercial_reg", "contract", "ikhtar", "iqrar"];
  const DOC_N = {tax_card: ["البطاقة الضريبية", "Tax card", "税卡"], commercial_reg: ["السجل التجاري", "Commercial register", "商业登记"],
                 contract: ["العقد", "Contract", "合同"], ikhtar: ["الإخطار", "Notification", "通知"], iqrar: ["الإقرار", "Declaration", "申报"]};
  function paperCard(m) {
    const ex = typeof extra !== "undefined" ? extra : {};
    const files = (ex.merchant_docs || []).filter(r => r.merchant_id === m.id);
    const orig = typ => (ex.merchant_originals || []).some(o => o.merchant_id === m.id && o.doc_type === typ && o.received);
    const nOrig = DOCS.filter(orig).length;
    return `<span class="bstore"><span class="n">${E(m.name)}</span> <span class="num">${E(m.code)}</span>
      <span class="r" style="color:${m.bad ? "var(--red,#C2362B)" : "var(--green,#1E7B45)"}">${E(m.bad ? u("papBad", m.note || u("papBad0")) : u("papOk"))}</span>
      ${DOCS.map(typ => { const n = files.filter(r => r.doc_type === typ).length, ok = orig(typ);
        return `<span class="r"><span>${E(DOC_N[typ][LI()])} <small style="color:var(--mute,#667085)">(${E(n ? u("papFiles", n) : u("papNoFile"))})</small></span>
          <span style="color:${ok ? "var(--green,#1E7B45)" : "var(--mute,#667085)"}">${E(ok ? u("papOrig") : u("papNoOrig"))}</span></span>`; }).join("")}
      <span class="r"><b>${E(u("papSum", nOrig, DOCS.length))}</b></span>
      <button type="button" data-open="${m.id}">${E(u("open"))}</button></span>`;
  }
  function cont() {           // كمّل السؤال لما تتجمع البيانات
    if (!pend.stores) { add("bot", E(u("whichStore"))); return; }
    if (pend.intent === "orders" && !pend.per) { add("bot", E(u("whichPeriod"))); periodChips(); return; }
    const p = pend; pend = null;
    remember(p.stores);
    const pre = p.fromCtx ? E(u("about", p.stores[0].name)) + "<br>" : "";
    if (p.intent === "paper") return add("bot", pre + p.stores.map(paperCard).join(""));
    if (pre) add("bot hint", pre.replace("<br>", ""));
    if (p.intent === "orders") return sayOrders(p.stores, p.per);
    if (p.intent === "inc") return sayIncentives(p.stores === "all" ? data.ms.slice(0, 5) : p.stores);
    return add("bot", (p.stores === "all" ? data.ms.slice(0, 5) : p.stores).map(storeCard).join(""));
  }
  function storesFrom(q) {
    if (/كل المحلات|كل محلاتي|كلهم|all stores|all my stores/i.test(q)) return "all";
    const st = findStores(q);
    if (st.length === 1) ctx = st[0];
    if (st.length && st.length <= 5) return st;
    if (st.length > 5) { add("bot", E(u("found", st.length)) + st.slice(0, 8).map(m => `<br>• ${E(m.name)} — <span class="num">${E(m.code)}</span>`).join("")); return "many"; }
    return null;
  }
  function dataAnswer(q) {
    const intent = /ورق|اوراق|أوراق|مستند|بطاقه|بطاقة|سجل|عقد|اخطار|إخطار|اقرار|إقرار|اصول|أصول|الاصل|الأصل|paper|document|original/i.test(q) ? "paper" :
                   /اوردر|أوردر|اوردرات|أوردرات|طلبي|مرتجع|صافي|order|return|net/i.test(q) ? "orders" :
                   /حافز|حوافز|incentive/i.test(q) ? "inc" : /رصيد|balance|كام|(^|\s)كم(\s|$)|فلوس|باقي/i.test(q) ? "bal" : null;
    if (pend && intent && intent !== pend.intent) pend = null;   // سؤال جديد بنوع تاني ← ننسى اللي قبله
    if (pend) {                                   // تكملة لسؤال قبله
      if (!pend.stores) { const s2 = storesFrom(q); if (s2 === "many") return true; if (s2) { pend.stores = s2; cont(); return true; } }
      else if (pend.intent === "orders" && !pend.per) {
        const s3 = /اوردر|حافز|رصيد|ورق|order/i.test(q) ? null : storesFrom(q);   // كتب اسم محل بدل التاريخ ← غيّر المحل وكمّل
        if (s3 === "many") return true;
        if (s3) { pend.stores = s3; pend.fromCtx = false; pend.per = parsePeriod(q); cont(); return true; }
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
      if (st && st !== "all") { remember(st); add("bot", st.map(storeCard).join("")); return true; }
      return false;
    }
    const mem = !st && ctxStore();
    pend = {intent, stores: st || mem || (data.ms.length === 1 ? [data.ms[0]] : null), per: intent === "orders" ? parsePeriod(q) : null,
            fromCtx: !!mem};
    if (!pend.stores && intent !== "orders" && !/محل|store|shop|عند|بتاع/.test(q) && W(q).every(w => STOP.has(w) || w.length < 2)) { pend = null; return false; }
    cont(); return true;
  }

  function answer(q0) {
    buildSyn();
    const q = canon(q0), nq = N(q);
    if (/شرح|اشرح|علمني|تعليمات|جوله|tutorial|tour|guide|walkthrough/i.test(nq) && !/ازاي|how/.test(nq.replace(/شرح/, ""))) return startTour();
    const asksMeaning = /معناها|يعني|mean/.test(q);
    if (loggedIn() && !asksMeaning) {
      if (/ورق|paper/i.test(q) && !/[A-Za-z]*\d{3,}/.test(q) &&
          (/مين|كل|المحلات|محلاتي|اللي|انهي|أنهي|which|who|all/i.test(q) || (!ctxStore() && !findStores(q).length))) {
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
    const r = zhBoost(q0, rankFaq(q));
    if (r.length && r[0].sc >= 0.9) {
      add("bot", E(L(r[0].item, "a")));
      const near = r.slice(1, 3).filter(x => x.sc >= r[0].sc * 0.8);
      if (near.length) chips(near.map(x => x.item), u("alsoQ"));
      return;
    }
    if (!loggedIn() && /رصيد|balance|\d{4,}/i.test(nq)) return add("bot", E(u("login")));
    if (r.length) return chips(r.slice(0, 3).map(x => x.item), u("didYou"));
    add("bot", E(L(CFG, "not_found")));
    chips(starters());
  }

  // ---------- الكلام بالصوت: مايك (كلام ← كتابة) + رد بالصوت + محادثة متواصلة
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const TTS = "speechSynthesis" in window ? window.speechSynthesis : null;
  const LOC = () => (ar() ? "ar-EG" : zh() ? "zh-CN" : "en-US");
  let rec = null, listening = false, convo = false, speakOn = false, warnedVoice = {};
  try { speakOn = localStorage.getItem("rmg_bot_voice") === "1"; } catch (e) {}
  function voiceFor(loc) {
    const vs = TTS ? TTS.getVoices() : [], base = loc.slice(0, 2);
    return vs.find(v => v.lang === loc) || vs.find(v => v.lang && v.lang.replace("_", "-").startsWith(base + "-")) || vs.find(v => v.lang === base) || null;
  }
  if (TTS) { TTS.getVoices(); TTS.onvoiceschanged = () => TTS.getVoices(); }
  function plain(el) {                     // نص الرسالة للقراءة: من غير الأزرار والإيموجي
    const c = el.cloneNode(true); c.querySelectorAll("button").forEach(b => b.remove());
    const sep = ar() ? "، " : zh() ? "，" : ", ";
    c.querySelectorAll(".bstore").forEach(b => b.insertAdjacentText("beforeend", zh() ? "。" : ". "));
    c.querySelectorAll(".r").forEach(b => b.insertAdjacentText("beforeend", sep));
    return c.textContent.replace(/(\d),(?=\d{3}\b)/g, "$1").replace(/(\d)\.00\b/g, "$1").replace(/(\d)\.(\d)/g, "$1\u2024$2").replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF\u2B00-\u2BFF✔✖⚠•📍]/gu, " ").replace(/\s+/g, " ").trim();
  }
  function speak(text, done) {
    if (!TTS || !text) return done && done();
    const v = voiceFor(LOC());
    if (!v && !warnedVoice[LG()]) { warnedVoice[LG()] = 1; add("bot hint", E(u("noVoice"))); }
    if (!v && !ar()) return done && done();
    TTS.cancel();
    const parts = text.match(/[^.!?؟。！？\n]{1,220}[.!?؟。！？\n]?/g) || [text];
    let i = 0;
    const next = () => {
      if (i >= parts.length) return done && done();
      const ut = new SpeechSynthesisUtterance(parts[i++].replace(/\u2024/g, ".")); ut.lang = LOC(); if (v) ut.voice = v; ut.rate = ar() ? 1 : 1.02;
      ut.onend = next; ut.onerror = () => done && done(); TTS.speak(ut);
    };
    next();
  }
  function setSpk(on) {
    speakOn = on; $b("botSpk").classList.toggle("on", on);
    try { localStorage.setItem("rmg_bot_voice", on ? "1" : "0"); } catch (e) {}
    if (!on && TTS) TTS.cancel();
  }
  // الكلام بيتكتب بشكل مختلف عن الكتابة: أرقام بالحروف، كود المحل حرف حرف، علامات ترقيم
  const NUMW = {"صفر": 0, "زيرو": 0, "واحد": 1, "واحده": 1, "اتنين": 2, "اثنين": 2, "إثنين": 2, "تلاته": 3, "تلاتة": 3, "ثلاثه": 3, "ثلاثة": 3,
    "اربعه": 4, "أربعة": 4, "اربعة": 4, "أربعه": 4, "خمسه": 5, "خمسة": 5, "سته": 6, "ستة": 6, "سبعه": 7, "سبعة": 7, "تمانيه": 8, "تمانية": 8,
    "ثمانيه": 8, "ثمانية": 8, "تسعه": 9, "تسعة": 9, "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7,
    "eight": 8, "nine": 9, "零": 0, "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9};
  const LETW = {"ان": "n", "إن": "n", "اين": "n", "ن": "n", "تي": "t", "ت": "t", "اس": "s", "إس": "s", "بي": "b", "سي": "c", "دي": "d", "اي": "a", "ام": "m", "إم": "m"};
  function speechNorm(q) {
    let t = String(q).replace(/[.,،؟?!؛:]+/g, " ").replace(/فور\s*جي/g, "4G").replace(/فايف\s*جي/g, "5G").replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
    const ws = t.split(/\s+/).filter(Boolean), out = [];
    for (let i = 0; i < ws.length; i++) {
      const w = ws[i], n = NUMW[w.toLowerCase()];
      if (n !== undefined) { if (out.length && /^[a-z]?\d+$/i.test(out[out.length - 1]) && out[out.length - 1].length < 9) out[out.length - 1] += n; else out.push(String(n)); continue; }
      if (/^\d+$/.test(w) && out.length && /^[a-z]?\d+$/i.test(out[out.length - 1])) { out[out.length - 1] += w; continue; }
      const L = LETW[w.toLowerCase()], nx = ws[i + 1] || "";
      if (L && (NUMW[nx.toLowerCase()] !== undefined || /^\d/.test(nx))) { out.push(L); continue; }      // «إن» قبل رقم = حرف الكود
      if (L && out.length && /^[a-z]?\d+$/i.test(out[out.length - 1]) && L.length === 1) { out[out.length - 1] += L; continue; }   // «تي» بعد رقم
      out.push(w);
    }
    // حرف + رقم جنب بعض ← كود واحد (n 00294 t → n00294t)
    return out.join(" ").replace(/\b([a-z])\s+(\d{3,})/gi, "$1$2");
  }
  function ask(q, viaVoice) {             // سؤال ← رد، ولو الصوت شغال البوت يقرا رده
    const before = msgs.children.length;
    if (viaVoice) q = speechNorm(q);
    answer(q);
    if (!(speakOn || viaVoice)) return;
    const fresh = [...msgs.children].slice(before).filter(el => el.classList.contains("bot") && !el.classList.contains("hint"));
    const chipsTxt = [...msgs.children].slice(before).filter(el => el.classList.contains("bchips")).length;
    const txt = fresh.map(plain).join(". ");
    speak(txt || (chipsTxt ? u("didYou") : ""), () => { if (convo && !listening) setTimeout(listen, 350); });
  }
  let liveEl = null;
  function listen() {
    if (!SR) { add("bot", E(u("micNo"))); return; }
    if (TTS) TTS.cancel();
    rec = new SR(); rec.lang = LOC(); rec.interimResults = true; rec.maxAlternatives = 1; rec.continuous = false;
    let final = "";
    rec.onstart = () => { listening = true; $b("botMic").classList.add("on"); $b("botIn").placeholder = u("micOn"); };
    rec.onresult = e => {
      let txt = ""; final = "";
      for (const r of e.results) { if (r.isFinal) final += r[0].transcript; else txt += r[0].transcript; }
      const show = (final || txt).trim();
      if (show) { if (!liveEl) liveEl = add("me live", ""); liveEl.textContent = show; }
    };
    rec.onerror = e => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") { convo = false; add("bot", E(u("micErr"))); }
      if (e.error === "no-speech" && convo) { convo = false; }
    };
    rec.onend = () => {
      listening = false; $b("botMic").classList.remove("on"); $b("botIn").placeholder = u("ph");
      const q = (final || (liveEl && liveEl.textContent) || "").trim();
      if (liveEl) { liveEl.classList.remove("live"); if (!q) liveEl.remove(); }
      liveEl = null;
      if (q) ask(q, true); else convo = false;
    };
    try { rec.start(); } catch (e) {}
  }
  $b("botMic").onclick = () => {
    if (listening) { convo = false; try { rec.stop(); } catch (e) {} return; }
    if (TTS && TTS.speaking) { TTS.cancel(); convo = false; return; }
    convo = true;                          // محادثة: يسمع ← يرد بالصوت ← يسمع تاني لحد ما تدوس تاني أو تسكت
    loadFaq(() => listen());
  };
  $b("botSpk").onclick = () => { setSpk(!speakOn); add("bot hint", E(u(speakOn ? "voiceOn" : "voiceOff"))); };
  if (!SR) $b("botMic").style.display = "none";
  if (!TTS) $b("botSpk").style.display = "none";
  $b("botSpk").classList.toggle("on", speakOn);

  // ---------- الأحداث
  msgs.addEventListener("click", e => {
    const b = e.target.closest("[data-open]"); if (!b) return;
    const id = +b.dataset.open;
    ctx = data.ms.find(m => m.id === id) || ctx;
    try { cur = id; changed.delete(id); showSt(); } catch (err) {}
    if (window.innerWidth < 700) $b("botBox").classList.add("hide");
  });
  $b("botBtn").onclick = () => {
    const box = $b("botBox");
    if (!box.classList.contains("hide")) return box.classList.add("hide");
    loadFaq(() => { if (!msgs.childElementCount) reset(); box.classList.remove("hide"); if (window.innerWidth >= 700) $b("botIn").focus(); });
  };
  $b("botX").onclick = () => { if (ti >= 0) endTour(); convo = false; try { rec && rec.abort(); } catch (e) {} if (TTS) TTS.cancel(); $b("botBox").classList.add("hide"); };
  $b("botForm").onsubmit = e => {
    e.preventDefault();
    const q = $b("botIn").value.trim(); if (!q) return;
    $b("botIn").value = ""; add("me", E(q)); ask(q, false);
  };
  document.addEventListener("change", e => { if (e.target.matches && e.target.matches("select.lang") && loaded) reset(); });
})();
