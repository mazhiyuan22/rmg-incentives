/* =====================================================================
   دليل التاجر الضريبي — مواضيع + حاسبات + «الفاتورة مفكوكة»
   عشان تضيف موضوع: انسخ بلوك من TOPICS وغيّر القيم.
   آخر مراجعة للأرقام: نوفمبر 2026 — راجعها مع محاسب قبل أي قرار.
   ===================================================================== */
(() => {
const TOPICS = [
  {id:"basics", cat:"start", ic:"file", ac:"#FFC915", t:"الملف الضريبي والبطاقة", en:"Tax file & card",
   s:"أول خطوة عشان تشتغل رسمي وتاخد حقك.",
   body:[
     "أي حد بيبيع لازم يكون عنده سجل تجاري وبطاقة ضريبية وملف في مأمورية الضرائب التابع لها المحل.",
     "التسجيل بيكون خلال 30 يوم من بداية النشاط، أو من ساعة ما تبقى خاضع للقيمة المضافة.",
     "التسجيل على المنظومة الإلكترونية بيتطلب حتى لو مبيعاتك لسه ما وصلتش حد التسجيل، ومش بيترتب عليه تحصيل قيمة مضافة غير لما توصل للحد."],
   doo:["خلي صورة السجل والبطاقة سارية ومحدثة عندنا","حدّث العنوان والنشاط في المأمورية لو اتغيروا","اعمل حساب على بوابة مصلحة الضرائب الإلكترونية"],
   dont:["ماتشتغلش باسم حد تاني أو بطاقة حد تاني","ماتسيبش البطاقة تخلص من غير تجديد"]},
  {id:"vat", cat:"vat", ic:"pct", ac:"#7FB2FF", t:"ضريبة القيمة المضافة 14%", en:"VAT 14%",
   s:"إمتى تتسجل، وإزاي بتتحسب، وإيه اللي بتخصمه.",
   body:[
     "السعر العام للقيمة المضافة 14%. أي تاجر مبيعاته السنوية وصلت 500 ألف جنيه لازم يتسجل.",
     "الفكرة ببساطة: إنت بتحصّل 14% من الزبون على البيع (ضريبة مخرجات)، وبتخصم منها الـ14% اللي دفعتها على مشترياتك (ضريبة مدخلات)، وتورّد الفرق بس.",
     "عشان تقدر تخصم ضريبة المشتريات لازم تكون معاك فاتورة إلكترونية صحيحة باسمك ورقمك الضريبي. الفاتورة الورق مابقاش يتعتد بيها في الخصم.",
     "الإقرار شهري، ولازم يتقدم حتى لو مفيش مبيعات في الشهر ده."],
   doo:["اطلب فاتورة إلكترونية على كل شحنة بتشتريها","راجع رقمك الضريبي على الفاتورة قبل ما تستلم","قدّم الإقرار في ميعاده كل شهر"],
   dont:["ماتشتريش بضاعة من غير فاتورة — هتدفع ضريبتها مرتين","ماتنساش تقدم إقرار الشهر اللي مفيهوش بيع"],
   calc:"vat"},
  {id:"einv", cat:"vat", ic:"inv", ac:"#62D0B5", t:"الفاتورة والإيصال الإلكتروني", en:"E-invoice & e-receipt",
   s:"الفاتورة للبيع لشركة أو تاجر، والإيصال للبيع للمستهلك.",
   body:[
     "الفاتورة الإلكترونية (B2B): أي بيع لتاجر أو شركة لازم يطلع عليه فاتورة على منظومة المصلحة.",
     "الإيصال الإلكتروني (B2C): البيع للمستهلك العادي في المحل بيطلع عليه إيصال إلكتروني حسب مراحل الإلزام.",
     "الانضمام لمنظومة الفاتورة أو الإيصال الإلكتروني شرط أساسي عشان تستفيد من النظام الضريبي المبسط.",
     "كل فاتورة بنطلعها لك من الشركة بتترفع على المنظومة، فتقدر تشوفها على البوابة وتخصم ضريبتها."],
   doo:["سجّل في منظومة الإيصال الإلكتروني لو بتبيع للمستهلك","اربط السيستم أو الكاشير بتاعك بالمنظومة","احتفظ بنسخة من كل فاتورة وإيصال"],
   dont:["ماتطلعش فاتورة ورقي بدل الإلكترونية","ماتسيبش فاتورة فيها غلط — اطلب إلغاءها أو إشعار تعديل"]},
  {id:"simple", cat:"income", ic:"bars", ac:"#B79CFF", t:"النظام الضريبي المبسط", en:"Simplified regime",
   s:"لو حجم أعمالك أقل من 20 مليون في السنة.",
   body:[
     "القانون 6 لسنة 2025 بيدي المشروعات اللي حجم أعمالها السنوي ما يزيدش عن 20 مليون جنيه نظام مبسط، وهو نظام دائم مش مربوط بمهلة.",
     "بدل ما الضريبة تتحسب على صافي الربح، بتدفع نسبة صغيرة من حجم الأعمال حسب شريحتك.",
     "مزايا مهمة: إعفاء من الفحص الضريبي 5 سنين من تاريخ الانضمام، وإعفاء من الدمغة ورسم تنمية الموارد، وإعفاء من نظام الخصم والدفعات المقدمة تحت حساب الضريبة.",
     "طلب الانضمام بيتقدم إلكتروني، والاستفادة بتبدأ من تاني يوم تقديم الطلب.",
     "لو عدّيت الـ20 مليون بنسبة ما تزيدش عن 20% ولمرة واحدة بس خلال الخمس سنين، بتفضل في النظام بنسبة 1.5%."],
   doo:["احسب حجم أعمالك السنوي بالظبط من فواتيرك","قدّم طلب الانضمام إلكتروني","خليك مسجل في الفاتورة/الإيصال الإلكتروني"],
   dont:["ماتقللش مبيعاتك على الورق — الفواتير الإلكترونية بتبين الحقيقة","ماتفتكرش إن المبسط بيعفيك من القيمة المضافة — دي ضريبة تانية"],
   calc:"simple"},
  {id:"wht", cat:"income", ic:"cut", ac:"#FF9D6B", t:"الخصم تحت حساب الضريبة", en:"Withholding tax",
   s:"ليه الشركة بتخصم منك نسبة، وإزاي تسترجعها.",
   body:[
     "لما شركة تشتري منك أو تدفعلك، ممكن تخصم نسبة (مثلاً 1% على التوريدات) وتوردها للضرايب باسمك.",
     "النسبة بتتحسب على المبلغ من غير القيمة المضافة.",
     "المبلغ ده مش ضايع: ده رصيد لصالحك بيتخصم من ضريبة الدخل بتاعتك آخر السنة. لازم تاخد إشعار الخصم (نموذج 41) وتحتفظ بيه.",
     "لو إنت في النظام المبسط فإنت معفي من نظام الخصم تحت الحساب — بلّغ الجهة اللي بتتعامل معاها."],
   doo:["اطلب إشعار الخصم على كل مبلغ اتخصم منك","طابق الإشعارات مع اللي ظاهر على البوابة","خصمها من ضريبتك في الإقرار السنوي"],
   dont:["ماتعتبرش المبلغ المخصوم مصاريف وتنساه"]},
  {id:"phones", cat:"phone", ic:"phone", ac:"#FFC915", t:"الموبايلات وحوكمة الأجهزة", en:"Handset governance",
   s:"ليه لازم تبيع جهاز رسمي متسجل.",
   body:[
     "من يناير 2025 فيه منظومة لحوكمة أجهزة الموبايل بيديرها الجهاز القومي لتنظيم الاتصالات مع الجمارك. أي موبايل بيشتغل بشريحة مصرية لازم يكون متسجل وخالص الرسوم.",
     "الموبايل اللي بييجي من بره عليه رسوم بتوصل لـ38.5% من قيمته، والجهاز غير المسجل ممكن الخدمة تتقطع عنه.",
     "الجهاز اللي بتشتريه من الموزع الرسمي متسجل وخالص كل رسومه، وبيجي بفاتورة إلكترونية وضمان رسمي."],
   doo:["اشتري من الموزع الرسمي بفاتورة","سلّم الزبون فاتورة/إيصال وكارت ضمان","احتفظ بـ IMEI كل جهاز بعته مع رقم الفاتورة"],
   dont:["ماتبيعش أجهزة تهريب أو مش متسجلة — الزبون هيرجعلك والخدمة هتقف","ماتشيلش كرتونة أو ستيكر الـIMEI"]},
  {id:"incent", cat:"us", ic:"gift", ac:"#62D0B5", t:"الحوافز وضريبتها", en:"Incentives & VAT",
   s:"إزاي الحافز بيتسجل، وليه شهادة القيمة المضافة مهمة.",
   body:[
     "الحافز اللي بينزل لك من الشركة بيتسجل في كشف حسابك دائن (لصالحك)، ولما تستخدمه في سحب بضاعة بيتخصم من رصيد الحافز.",
     "الحافز مبلغ شامل القيمة المضافة. الجزء الضريبي فيه بيتحسب كده: إجمالي الحوافز ÷ 1.14 × 14%.",
     "التاجر اللي عنده شهادة تسجيل قيمة مضافة سارية بيستحق استرداد الجزء ده كل ربع سنة. لو الشهادة خلصت أو مش عندنا، الاسترداد بيتأخر.",
     "اسأل المشرف بتاعك عن حالة الاسترداد، أو شوفها في صفحة المحل."],
   doo:["ابعت شهادة القيمة المضافة وتاريخ انتهائها لحسابات AR","جدد الشهادة قبل ما تخلص","راجع كشف حسابك التفصيلي كل شهر"],
   dont:["ماتستلمش حافز من غير ما يظهر في كشف الحساب"],
   calc:"incent"},
  {id:"docs", cat:"protect", ic:"shield", ac:"#7FB2FF", t:"الورق اللي يحميك", en:"Documents that protect you",
   s:"لو جالك فحص، الورق ده هو دفاعك.",
   body:[
     "في أي فحص ضريبي، اللي بيتحسب هو اللي معاك ورق يثبته. أي مشتريات من غير فاتورة بتتعامل كأنها مبيعات ممكن تتقدّر عليك.",
     "احتفظ بالفواتير والإيصالات والإقرارات وإشعارات الخصم وكشوف الحساب 5 سنين على الأقل.",
     "عقد التعامل مع الشركة وكشف الحساب الموقّع بيثبتوا كل مبلغ دفعته أو استلمته."],
   doo:["أرشيف إلكتروني (صور/PDF) لكل فاتورة","طابق المخزن مع الفواتير كل شهر","احتفظ بعقدك وكشوف الحساب الموقعة"],
   dont:["ماتدفعش كاش من غير إيصال استلام","ماترميش ورق سنة قديمة قبل 5 سنين"]},
  {id:"mistakes", cat:"protect", ic:"warn", ac:"#FF6B7A", t:"أخطاء بتكلّف كتير", en:"Costly mistakes",
   s:"حاجات بسيطة ممكن تتحول لغرامة أو تقدير جزافي.",
   body:[
     "التأخير في تقديم الإقرار أو السداد عليه غرامات ومقابل تأخير بيتحسب على المدة.",
     "البيع من غير فاتورة أو إيصال ممكن يتعامل كتهرب ضريبي.",
     "الفرق بين اللي في فواتيرك الإلكترونية واللي في إقرارك بيظهر للمصلحة أوتوماتيك."],
   doo:["حط تذكير شهري بميعاد الإقرار","اتعامل مع محاسب قانوني معتمد","رد على أي إخطار من المأمورية في ميعاده"],
   dont:["ماتتجاهلش أي خطاب أو رسالة من الضرايب","ماتخليش حد يقدم إقرارك من غير ما تراجعه"]},
];
const CATS = [["", "الكل"], ["start", "البداية"], ["vat", "القيمة المضافة"], ["income", "ضريبة الدخل"], ["phone", "الموبايلات"], ["us", "تعاملك معانا"], ["protect", "احمي نفسك"]];
const SIMPLE = [[500e3, .004], [2e6, .005], [3e6, .0075], [10e6, .01], [20e6, .015]];
const SIMPLE_LBL = ["أقل من 500 ألف", "500 ألف – 2 مليون", "2 – 3 مليون", "3 – 10 مليون", "10 – 20 مليون"];

const E = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const F = n => Math.round(n).toLocaleString("en-US");
const ICONS = {
  file:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  pct:'<circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/><path d="M19 5 5 19"/>',
  inv:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  bars:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  cut:'<circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M20 4 8.5 15.5M14.5 12.5 20 20M8.5 8.5 12 12"/>',
  phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
  gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  warn:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>'};
const ico = (k, sz = 26) => `<svg viewBox="0 0 24 24" width="${sz}" height="${sz}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg>`;

/* ---------------- الستايل (نفس روح الكاتالوج) ---------------- */
const css = `
#tax{position:fixed;inset:0;z-index:60;background:#0B0E12;color:#E9EDF2;overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:"IBM Plex Sans Arabic","Segoe UI",system-ui,sans-serif;direction:rtl}
#tax.hide{display:none}
#tax .tx-top{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:10px;padding:12px 16px;padding-top:calc(12px + env(safe-area-inset-top));background:rgba(11,14,18,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.06)}
#tax .tx-top .mk{background:#FFC915;color:#0B0E12;font-weight:800;font-size:11px;letter-spacing:.8px;border-radius:9px;padding:9px 10px}
#tax .tx-top h2{margin:0;font-size:16px;flex:1}
#tax .x{border:1px solid rgba(255,255,255,.16);background:transparent;color:#fff;border-radius:999px;width:38px;height:38px;font-size:18px;display:grid;place-items:center;cursor:pointer}
#tax .wrap{max-width:1100px;margin:0 auto;padding:18px 16px 60px}
#tax h1{margin:18px 0 6px;font-size:clamp(28px,6vw,44px);line-height:1.1;letter-spacing:-.4px}
#tax .lead{color:#97A1AE;margin:0;font-size:14.5px;max-width:600px;line-height:1.7}
/* سلسلة القيمة المضافة — القطعة الأساسية */
#tax .chain{margin:22px 0 8px;background:radial-gradient(90% 80% at 50% 0,#1A212B 0,#0D1116 70%);border:1px solid #1E2630;border-radius:26px;padding:18px 16px 16px;position:relative;overflow:hidden}
#tax .chain h3{margin:0 0 4px;font-size:17px}
#tax .chain p.s{margin:0 0 14px;color:#8892A0;font-size:12.5px}
#tax .nodes{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:6px;align-items:stretch}
@media (max-width:720px){#tax .nodes{grid-template-columns:1fr}#tax .arw{transform:rotate(-90deg);justify-self:center}}
#tax .nd{background:#10151C;border:1px solid #232B35;border-radius:18px;padding:14px;position:relative;transition:border-color .3s,transform .3s}
#tax .nd.on{border-color:#FFC915;transform:translateY(-3px)}
#tax .nd .who{font-size:12px;color:#8892A0}
#tax .nd b{display:block;font-size:16px;margin:2px 0 10px}
#tax .nd .ln{display:flex;justify-content:space-between;font-size:12.5px;padding:4px 0;border-top:1px dashed #222A34;color:#C7CED8}
#tax .nd .ln:first-of-type{border-top:0}
#tax .nd .ln.o{color:#FF9D6B}#tax .nd .ln.i{color:#62D0B5}
#tax .nd .ln.p{color:#FFC915;font-weight:700;font-size:13.5px}
#tax .arw{display:grid;place-items:center;color:#FFC915;position:relative;min-width:40px}
#tax .arw svg{width:34px;height:34px}
#tax .arw .dot{position:absolute;width:8px;height:8px;border-radius:50%;background:#FFC915;box-shadow:0 0 12px #FFC915;animation:txflow 1.8s linear infinite}
@keyframes txflow{0%{inset-inline-start:-4px;opacity:0}15%{opacity:1}85%{opacity:1}100%{inset-inline-start:calc(100% - 4px);opacity:0}}
#tax .chain .ctl{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:14px;font-size:12.5px;color:#97A1AE}
#tax .chain .ctl input[type=range]{flex:1;min-width:160px;accent-color:#FFC915}
#tax .chain .tot{margin-top:12px;background:#151B23;border-radius:14px;padding:10px 14px;font-size:13px;color:#C7CED8;line-height:1.7}
#tax .chain .tot b{color:#FFC915}
/* الفلاتر والكروت */
#tax .tx-f{display:flex;gap:8px;flex-wrap:wrap;margin:22px 0 16px}
#tax .tx-f input{flex:1 1 220px;min-width:0;background:#141920;border:1px solid #232B35;color:#fff;border-radius:12px;padding:11px 14px;font:inherit;font-size:15px;outline:none}
#tax .tx-f input:focus{border-color:#FFC915}
#tax .chs{display:flex;gap:6px;flex-wrap:wrap}
#tax .chs button{border:1px solid #2A333F;background:#121720;color:#C7CED8;border-radius:999px;padding:7px 13px;font:inherit;font-size:13px;cursor:pointer}
#tax .chs button.on{background:#FFC915;border-color:#FFC915;color:#0B0E12;font-weight:700}
#tax .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
#tax .tc{position:relative;text-align:start;background:linear-gradient(180deg,#141A22,#0F141A);border:1px solid #1F2731;border-radius:20px;padding:18px;cursor:pointer;color:inherit;font:inherit;overflow:hidden;
  transition:transform .25s cubic-bezier(.2,.8,.2,1),border-color .25s,box-shadow .25s;--mx:50%;--my:50%;min-height:170px;display:flex;flex-direction:column}
#tax .tc::before{content:"";position:absolute;inset:0;background:radial-gradient(280px circle at var(--mx) var(--my),color-mix(in srgb,var(--ac) 26%,transparent),transparent 55%);opacity:0;transition:opacity .3s;pointer-events:none}
#tax .tc:hover{transform:translateY(-4px);border-color:color-mix(in srgb,var(--ac) 55%,#1F2731);box-shadow:0 18px 40px rgba(0,0,0,.45)}
#tax .tc:hover::before{opacity:1}
#tax .tc .ic{width:50px;height:50px;border-radius:15px;display:grid;place-items:center;color:var(--ac);background:color-mix(in srgb,var(--ac) 14%,#121820);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ac) 35%,transparent);position:relative;transition:transform .4s}
#tax .tc:hover .ic{transform:rotate(-8deg) scale(1.08)}
#tax .tc h3{margin:14px 0 4px;font-size:16.5px;position:relative}
#tax .tc .s{font-size:13px;color:#97A1AE;position:relative;line-height:1.6}
#tax .tc .ct{margin-top:auto;padding-top:12px;font-size:11.5px;color:#6F7A88;position:relative}
#tax .tc .calcb{position:absolute;top:16px;inset-inline-end:16px;font-size:11px;background:#1A212B;border:1px solid #2A333F;border-radius:999px;padding:3px 8px;color:#FFC915}
/* صفحة الموضوع */
#tax .td{display:none}
#tax.detail .list{display:none}
#tax.detail .td{display:block}
#tax .back{background:none;border:0;color:#C7CED8;font:inherit;font-weight:600;padding:4px 0 10px;cursor:pointer}
#tax .th{display:flex;gap:16px;align-items:center;padding:18px;border-radius:24px;background:radial-gradient(80% 120% at 100% 0,color-mix(in srgb,var(--ac) 22%,transparent),transparent 60%),#10151C;border:1px solid #1F2731}
#tax .th .ic{width:72px;height:72px;border-radius:20px;display:grid;place-items:center;color:var(--ac);background:color-mix(in srgb,var(--ac) 14%,#121820);flex:none}
#tax .th h1{margin:0;font-size:clamp(22px,4.5vw,32px)}
#tax .th p{margin:4px 0 0;color:#AAB3C0}
#tax .txbody{margin:20px 0;display:grid;gap:10px}
#tax .txbody p{margin:0;background:#10151C;border:1px solid #1C232C;border-radius:16px;padding:14px 16px;line-height:1.85;font-size:15px}
#tax .dd{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media (max-width:700px){#tax .dd{grid-template-columns:1fr}}
#tax .dd>div{border-radius:18px;padding:14px 16px;border:1px solid}
#tax .dd .y{background:rgba(98,208,181,.06);border-color:rgba(98,208,181,.3)}
#tax .dd .n{background:rgba(255,107,122,.06);border-color:rgba(255,107,122,.3)}
#tax .dd h4{margin:0 0 8px;font-size:14px}
#tax .dd .y h4{color:#62D0B5}#tax .dd .n h4{color:#FF6B7A}
#tax .dd ul{margin:0;padding:0;list-style:none;display:grid;gap:7px;font-size:14px;line-height:1.6}
#tax .dd li{display:flex;gap:8px}
#tax .dd .y li::before{content:"✓";color:#62D0B5;font-weight:800}
#tax .dd .n li::before{content:"✕";color:#FF6B7A;font-weight:800}
#tax .cl{margin-top:16px;background:radial-gradient(90% 80% at 50% 0,#1A212B 0,#0D1116 70%);border:1px solid #232B35;border-radius:22px;padding:16px}
#tax .cl h4{margin:0 0 10px;font-size:15px}
#tax .cl label{display:block;font-size:12.5px;color:#8892A0;margin-bottom:6px}
#tax .cl input[type=number]{width:100%;box-sizing:border-box;background:#141920;border:1px solid #2A333F;color:#fff;border-radius:12px;padding:12px 14px;font:inherit;font-size:18px;outline:none;direction:ltr;text-align:right}
#tax .cl input:focus{border-color:#FFC915}
#tax .cl .rs{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;margin-top:12px}
#tax .cl .rs div{background:#10151C;border-radius:14px;padding:10px 12px}
#tax .cl .rs span{display:block;font-size:11.5px;color:#8892A0}
#tax .cl .rs b{display:block;font-size:18px;margin-top:2px}
#tax .cl .rs .hl b{color:#FFC915}
#tax .tier{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin-top:12px}
#tax .tier div{background:#151B23;border-radius:10px;padding:8px 6px;text-align:center;font-size:11px;color:#8892A0;transition:all .3s}
#tax .tier div b{display:block;font-size:15px;color:#C7CED8}
#tax .tier div.on{background:#FFC915;color:#0B0E12}#tax .tier div.on b{color:#0B0E12}
@media (max-width:560px){#tax .tier{grid-template-columns:1fr 1fr}}
#tax .tg2{display:flex;gap:6px;margin-bottom:10px}
#tax .tg2 button{flex:1;border:1px solid #2A333F;background:#121720;color:#C7CED8;border-radius:10px;padding:8px;font:inherit;font-size:13px;cursor:pointer}
#tax .tg2 button.on{border-color:#FFC915;color:#FFC915}
#tax .note{font-size:12px;color:#7C8796;margin-top:22px;line-height:1.7}
#tax .src{font-size:11.5px;color:#6F7A88;margin-top:8px;line-height:1.7}
@media (prefers-reduced-motion:reduce){#tax *{transition:none!important;animation:none!important}}
`;
const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

/* ---------------- سلسلة القيمة المضافة التفاعلية ---------------- */
function chainHTML(){
  return `<div class="chain" id="txc"><h3>الـ14% بتمشي إزاي من الموزع لحد الزبون؟</h3>
    <p class="s">حرّك الشريطين وشوف كل واحد بيورّد قد إيه. كل واحد بيدفع ضريبة على «القيمة اللي زودها» بس.</p>
    <div class="nodes">
      <div class="nd" data-n="0"><div class="who">الموزع</div><b>بيبيعلك الجهاز</b><div id="n0"></div></div>
      <div class="arw"><span class="dot"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></div>
      <div class="nd" data-n="1"><div class="who">إنت — التاجر</div><b>بتبيعه للزبون</b><div id="n1"></div></div>
      <div class="arw"><span class="dot" style="animation-delay:.9s"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></div>
      <div class="nd" data-n="2"><div class="who">الزبون</div><b>المستهلك النهائي</b><div id="n2"></div></div>
    </div>
    <div class="ctl"><span>سعر شرائك (من غير ضريبة)</span><input type="range" id="cb" min="3000" max="60000" step="500" value="10000"><b id="cbv" style="direction:ltr"></b></div>
    <div class="ctl"><span>هامش ربحك</span><input type="range" id="cm" min="0" max="30" step="1" value="8"><b id="cmv"></b></div>
    <div class="tot" id="ctot"></div>
    <div class="ctl" style="margin-top:10px"><label style="display:flex;gap:8px;align-items:center;cursor:pointer"><input type="checkbox" id="cnf"> لو اشتريت <b style="color:#FF6B7A">من غير فاتورة</b></label></div>
  </div>`;
}
function wireChain(){
  const b = document.getElementById("cb"), m = document.getElementById("cm"), nf = document.getElementById("cnf"); if (!b) return;
  const ln = (k, v, c = "") => `<div class="ln ${c}"><span>${k}</span><span style="direction:ltr">${v}</span></div>`;
  const run = () => {
    const buy = +b.value, mg = +m.value / 100, sell = buy * (1 + mg), noInv = nf.checked;
    const inV = noInv ? 0 : buy * .14, outV = sell * .14, pay = outV - inV;
    document.getElementById("cbv").textContent = F(buy) + " EGP"; document.getElementById("cmv").textContent = m.value + "%";
    document.getElementById("n0").innerHTML = ln("السعر", F(buy)) + ln("قيمة مضافة 14%", "+" + F(buy * .14), "o") + ln("الموزع بيورّدها", F(buy * .14), "p");
    document.getElementById("n1").innerHTML = ln("بتبيع بـ", F(sell)) + ln("بتحصّل من الزبون", "+" + F(outV), "o") +
      ln(noInv ? "مفيش فاتورة = مفيش خصم" : "بتخصم اللي دفعته", "−" + F(inV), "i") + ln("بتورّد إنت", F(pay), "p");
    document.getElementById("n2").innerHTML = ln("بيدفع", F(sell + outV), "p") + ln("منها ضريبة", F(outV));
    document.getElementById("ctot").innerHTML = noInv
      ? `من غير فاتورة شراء مش هتقدر تخصم <b>${F(buy * .14)} ج</b>، فهتورّد <b>${F(pay)} ج</b> بدل <b>${F(sell * mg * .14)} ج</b>. يعني الضريبة اتدفعت مرتين: مرة في السعر ومرة منك.`
      : `إنت بتورّد <b>${F(pay)} ج</b> بس = 14% من ربحك (${F(sell - buy)} ج). الدولة خدت إجمالي <b>${F(outV)} ج</b> على مرحلتين، والزبون هو اللي شايلها في الآخر.`;
    document.querySelectorAll("#txc .nd").forEach(n => n.classList.toggle("on", n.dataset.n === "1"));
  };
  [b, m, nf].forEach(x => x.addEventListener("input", run)); run();
}

/* ---------------- الحاسبات ---------------- */
function calcHTML(k){
  if (k === "vat") return `<div class="cl" id="cl"><h4>🧮 حاسبة القيمة المضافة</h4>
    <div class="tg2"><button data-m="ex" class="on">المبلغ من غير ضريبة</button><button data-m="in">المبلغ شامل الضريبة</button></div>
    <label>المبلغ بالجنيه</label><input type="number" id="ca" value="10000" min="0" inputmode="decimal"><div class="rs" id="cr"></div></div>`;
  if (k === "simple") return `<div class="cl" id="cl"><h4>🧮 احسب ضريبتك في النظام المبسط</h4>
    <label>حجم أعمالك السنوي (إجمالي المبيعات) بالجنيه</label><input type="number" id="ca" value="4000000" min="0" inputmode="decimal">
    <div class="tier" id="ct">${SIMPLE.map((s, i) => `<div><b>${(s[1] * 100).toLocaleString("en-US", {maximumFractionDigits: 2})}%</b>${SIMPLE_LBL[i]}</div>`).join("")}</div><div class="rs" id="cr"></div></div>`;
  if (k === "incent") return `<div class="cl" id="cl"><h4>🧮 احسب القيمة المضافة اللي في حوافزك</h4>
    <label>إجمالي الحوافز اللي نزلت لك في الربع (بالجنيه)</label><input type="number" id="ca" value="100000" min="0" inputmode="decimal"><div class="rs" id="cr"></div></div>`;
  return "";
}
function wireCalc(k){
  const a = document.getElementById("ca"); if (!a) return;
  let mode = "ex";
  const box = (l, v, h) => `<div class="${h ? "hl" : ""}"><span>${l}</span><b>${v}</b></div>`;
  const run = () => {
    const v = Math.max(0, +a.value || 0), r = document.getElementById("cr");
    if (k === "vat") {
      const net = mode === "ex" ? v : v / 1.14, vat = net * .14;
      r.innerHTML = box("قبل الضريبة", F(net)) + box("الضريبة 14%", F(vat), 1) + box("الإجمالي", F(net + vat));
    } else if (k === "simple") {
      const i = SIMPLE.findIndex(s => v < s[0]);
      document.querySelectorAll("#ct div").forEach((d, j) => d.classList.toggle("on", j === i));
      r.innerHTML = i < 0 ? `<div style="grid-column:1/-1"><span>حجم أعمالك فوق 20 مليون</span><b style="font-size:14px;direction:rtl;text-align:start">النظام المبسط مش متاح — الضريبة على صافي الربح بالنظام العادي</b></div>`
        : box("شريحتك", SIMPLE_LBL[i]) + box("النسبة", (SIMPLE[i][1] * 100).toLocaleString("en-US", {maximumFractionDigits: 2}) + "%") + box("الضريبة السنوية التقريبية", F(v * SIMPLE[i][1]) + " ج", 1) + box("في الشهر تقريباً", F(v * SIMPLE[i][1] / 12) + " ج");
    } else {
      const vat = v / 1.14 * .14;
      r.innerHTML = box("الحوافز", F(v)) + box("الحافز من غير ضريبة", F(v / 1.14)) + box("القيمة المضافة المستحقة لك", F(vat) + " ج", 1);
    }
  };
  a.addEventListener("input", run);
  document.querySelectorAll("#cl .tg2 button").forEach(bt => bt.onclick = () => { mode = bt.dataset.m; document.querySelectorAll("#cl .tg2 button").forEach(x => x.classList.toggle("on", x === bt)); run(); });
  run();
}

/* ---------------- الواجهة ---------------- */
const root = document.createElement("section"); root.id = "tax"; root.className = "hide"; root.setAttribute("aria-label", "tax guide");
document.body.appendChild(root);
let fc = "", q = "";
const norm = s => String(s || "").toLowerCase().replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي");
function shell(){
  root.innerHTML = `<div class="tx-top"><span class="mk">REALME</span><h2>دليل التاجر الضريبي</h2><button class="x" id="txx" aria-label="إغلاق">✕</button></div>
  <div class="wrap"><div class="list">
    <h1>اشتغل رسمي،<br>واحمي فلوسك</h1>
    <p class="lead">كل اللي يهمك كتاجر موبايلات في الضرايب والمبيعات، بكلام بسيط: القيمة المضافة، الفاتورة الإلكترونية، النظام المبسط، والحاجات اللي ليها علاقة بتعاملك معانا.</p>
    ${chainHTML()}
    <div class="tx-f"><input type="search" id="txq" placeholder="دوّر: فاتورة، مبسط، حافز، غرامة…" value="${E(q)}">
      <div class="chs" id="txs">${CATS.map(([k, l]) => `<button data-c="${k}" class="${k === fc ? "on" : ""}">${l}</button>`).join("")}</div></div>
    <div class="grid" id="txg"></div>
    <div class="note">⚠ الدليل ده للتوعية وتبسيط الصورة، مش استشارة قانونية. القوانين والنسب بتتغير، فراجع أي قرار مع محاسب قانوني معتمد أو مأموريتك. آخر مراجعة: نوفمبر 2026.</div>
  </div><div class="td" id="txd"></div></div>`;
  root.querySelector("#txx").onclick = close;
  root.querySelector("#txq").addEventListener("input", e => { q = e.target.value; grid(); });
  root.querySelector("#txs").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; fc = b.dataset.c;
    root.querySelectorAll("#txs button").forEach(x => x.classList.toggle("on", x === b)); grid(); });
  const g = root.querySelector("#txg");
  g.addEventListener("click", e => { const c = e.target.closest(".tc"); if (c) detail(c.dataset.id); });
  g.addEventListener("pointermove", e => { const c = e.target.closest(".tc"); if (!c) return; const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px"); });
  wireChain(); grid();
}
function grid(){
  const nq = norm(q);
  const list = TOPICS.filter(t => (!fc || t.cat === fc) && (!nq || norm([t.t, t.s, ...t.body, ...t.doo, ...t.dont].join(" ")).includes(nq)));
  const cn = k => (CATS.find(c => c[0] === k) || [, ""])[1];
  root.querySelector("#txg").innerHTML = list.length ? list.map(t => `<button class="tc" data-id="${t.id}" style="--ac:${t.ac}">
      ${t.calc ? `<span class="calcb">🧮 حاسبة</span>` : ""}<span class="ic">${ico(t.ic)}</span><h3>${E(t.t)}</h3><div class="s">${E(t.s)}</div><div class="ct">${E(cn(t.cat))}</div></button>`).join("")
    : `<div style="color:#7C8796;padding:30px 0">مفيش موضوع بالكلمة دي. جرّب «فاتورة» أو «حافز».</div>`;
}
function detail(id){
  const t = TOPICS.find(x => x.id === id); if (!t) return;
  root.querySelector("#txd").innerHTML = `<button class="back" id="txb">→ كل المواضيع</button>
    <div class="th" style="--ac:${t.ac}"><span class="ic">${ico(t.ic, 38)}</span><div><h1>${E(t.t)}</h1><p>${E(t.s)}</p></div></div>
    <div class="txbody">${t.body.map(p => `<p>${E(p)}</p>`).join("")}</div>
    ${t.calc ? calcHTML(t.calc) : ""}
    <div class="dd" style="margin-top:16px"><div class="y"><h4>اعمل</h4><ul>${t.doo.map(x => `<li>${E(x)}</li>`).join("")}</ul></div>
      <div class="n"><h4>ماتعملش</h4><ul>${t.dont.map(x => `<li>${E(x)}</li>`).join("")}</ul></div></div>
    <div class="note">⚠ للتوعية بس — راجع مع محاسبك قبل أي قرار.</div>`;
  root.querySelector("#txb").onclick = () => { root.classList.remove("detail"); root.scrollTo(0, 0); };
  if (t.calc) wireCalc(t.calc);
  root.classList.add("detail"); root.scrollTo(0, 0);
  try { history.replaceState(null, "", "#tax/" + id); } catch (e) {}
}
function open(id){ shell(); root.classList.remove("hide"); document.body.style.overflow = "hidden"; if (id) detail(id); else try { history.replaceState(null, "", "#tax"); } catch (e) {} }
function close(){ root.classList.add("hide"); root.classList.remove("detail"); document.body.style.overflow = ""; try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
window.openTaxGuide = open;
document.addEventListener("click", e => { const b = e.target.closest("[data-open-tax]"); if (b) { e.preventDefault(); open(); } });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !root.classList.contains("hide")) { root.classList.contains("detail") ? root.classList.remove("detail") : close(); } });
const h = location.hash.match(/^#tax(?:\/(\w+))?/); if (h) open(h[1]);
})();
