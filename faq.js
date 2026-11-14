/* =====================================================================
   أسئلة وأجوبة الشات بوت — الملف ده بس اللي بتعدّله
   =====================================================================
   كل سؤال عبارة عن بلوك بين { و } وبعده فاصلة ,
   - q_ar / q_en : السؤال (بيظهر كزرار)
   - a_ar / a_en : الإجابة — بين علامتين ` (الحرف اللي جنب رقم 1 في الكيبورد)
                   ينفع تكتب فيها أكتر من سطر عادي
   - keys        : كلمات لو اتكتبت في السؤال البوت يفهم إنه يقصد السؤال ده (مسافة بين كل كلمة)
   - top: true   : السؤال يظهر كزرار جاهز أول ما الشات يفتح
   - login: true : السؤال يظهر كمان في صفحة الدخول (قبل ما الشخص يدخل)

   ممنوع جوه الإجابة تكتب العلامة ` نفسها.
   بعد ما تحفظ على GitHub، التعديل بيظهر خلال دقايق (اعمل Refresh للصفحة).
   ===================================================================== */

const BOT = {
  name_ar: "المساعد",
  name_en: "Assistant",
  welcome_ar: `أهلًا 👋 أنا مساعد صفحة الحوافز.
اختار سؤال من تحت، أو اكتب سؤالك.
وتقدر تسألني عن أي محل عندك: اكتب الكود أو الاسم، مثلًا «رصيد N00294».`,
  welcome_en: `Hi 👋 I'm the incentives page assistant.
Pick a question below or type your own.
You can also ask about any of your stores: type its code or name, e.g. "balance N00294".`,
  not_found_ar: `مش متأكد إني فهمت 🤔 جرّب تكتبها بشكل تاني، أو اختار من الأسئلة دي.
ولو محتاج حد يرد عليك: كلّم الإدارة.`,
  not_found_en: `I'm not sure I understood 🤔 Try rephrasing, or pick one of these questions.
If you need a person, contact the admin team.`,
};

const FAQ = [
  {
    q_ar: "إزاي أدخل على الصفحة؟",
    q_en: "How do I sign in?",
    keys: "دخول ادخل يوزر يوزرنيم اسم المستخدم login sign username",
    login: true,
    a_ar: `اليوزر والباسورد بتاخدهم من الإدارة.
• المشرف: بيكتب اليوزر بالإنجليزي.
• الأريا مانجر: بيكتب اسمه زي ما هو متسجل عندنا (بالعربي عادي).
ولو علّمت على «افتكرني» مش هتحتاج تدخل تاني على نفس الموبايل.`,
    a_en: `You get your username and password from the admin team.
• Supervisors: type your username in English.
• Area managers: type your name exactly as registered (Arabic is fine).
Tick "Keep me signed in" so you don't need to sign in again on this phone.`,
  },
  {
    q_ar: "نسيت الباسورد أو مش عارف أدخل",
    q_en: "I forgot my password / can't sign in",
    keys: "نسيت باسورد كلمه السر غلط مش راضي مش عارف forgot password wrong reset",
    login: true,
    a_ar: `اتأكد إن مفيش مسافات زيادة، وإن اللغة مش متغيرة في الكيبورد.
لو لسه مش داخل: كلّم الإدارة وهي تعملك باسورد جديد في دقيقة.`,
    a_en: `Check there are no extra spaces and the keyboard language is right.
Still stuck? Contact the admin team and they'll set a new password for you in a minute.`,
  },
  {
    q_ar: "الرصيد المتاح يعني إيه؟",
    q_en: "What does available balance mean?",
    keys: "رصيد متاح الرصيد بيتحسب ازاي حساب بواقي حوافز مستخدم available balance calculated",
    top: true,
    a_ar: `الرصيد المتاح = البواقي + الحوافز − المستخدم.
• البواقي: اللي فاضل للتاجر من الشهور اللي فاتت.
• الحوافز: حوافز الشهر الجديد.
• المستخدم: اللي التاجر سحبه من الحوافز (في أوردرات أو من البنك).`,
    a_en: `Available balance = carried over + incentives − used.
• Carried over: what's left from previous months.
• Incentives: the new month's incentives.
• Used: what the merchant has already used (on orders or via the bank).`,
  },
  {
    q_ar: "إزاي أقرا كشف الحساب؟",
    q_en: "How do I read the statement?",
    keys: "كشف حساب الحركات فترة الشهر ده statement transactions period month",
    top: true,
    a_ar: `ادخل على المحل ← تاب «كشف الحساب».
كل سطر حركة بتاريخها: مضاف (بالأخضر) أو مستخدم (بالأحمر)، والرصيد بعدها.
فوق تقدر تختار: كل الفترات، الشهر ده، أو فترة معينة من تاريخ لتاريخ.
آخر سطر بالأصفر = الرصيد المتاح آخر الفترة.`,
    a_en: `Open the store → "Statement" tab.
Each row is a dated transaction: added (green) or used (red), with the balance after it.
At the top, choose all time, this month, or a custom date range.
The yellow last row is the closing available balance.`,
  },
  {
    q_ar: "رصيد البنك بيتحسب ازاي؟",
    q_en: "How is the bank balance calculated?",
    keys: "بنك البنك رصيد البنك ايداع اوردر من الحافز bank deposit order",
    top: true,
    a_ar: `رصيد البنك = الإيداع + من الحافز − الأوردر.
والمبلغ اللي في «من الحافز» بيتخصم من رصيد حوافز التاجر، وبيظهر «مستخدم» في كشف حسابه.
تلاقي كل الحركات في تاب «البنك» جوه المحل.`,
    a_en: `Bank balance = deposits + from incentive − orders.
The "from incentive" amount is deducted from the merchant's incentive balance and shows as "Used" in the statement.
See every transaction in the store's "Bank" tab.`,
  },
  {
    q_ar: "فين الأوردرات والمرتجعات؟",
    q_en: "Where are orders and returns?",
    keys: "اوردر اوردرات مرتجع مرتجعات قطعه قطع order orders return returns pieces",
    a_ar: `جوه المحل ← تاب «أوردرات ومرتجعات».
بيظهر كل أوردر برقمه وتاريخه والأصناف والكمية، وفوق إجمالي الأوردرات والمرتجعات والصافي.
تقدر تفلتر: الكل / أوردرات / مرتجعات، وتختار الفترة.`,
    a_en: `Open the store → "Orders & returns" tab.
Each order shows its number, date, items and quantities, with totals for orders, returns and net at the top.
Filter by all / orders / returns and pick a period.`,
  },
  {
    q_ar: "أحمّل الفاتورة الضريبية إزاي؟",
    q_en: "How do I download a tax invoice?",
    keys: "فاتوره فواتير ضريبيه pdf تحميل نزل invoice invoices download",
    a_ar: `جوه المحل ← تاب «الفواتير» ← زرار «تحميل» جنب الفاتورة.
لو مفيش فواتير يبقى لسه ماترفعتش للمحل ده — كلّم الإدارة.`,
    a_en: `Open the store → "Invoices" tab → "Download" next to the invoice.
If nothing is there, it hasn't been uploaded for this store yet. Contact the admin team.`,
  },
  {
    q_ar: "أرفع إقرار أو إخطار إزاي؟",
    q_en: "How do I upload a declaration or notice?",
    keys: "اقرار اخطار ارفع رفع صوره تصوير مستند declaration notice upload photo document",
    top: true,
    a_ar: `جوه المحل ← تاب «إقرار وإخطار» ← اختار النوع ← «صوّر أو اختار صورة أو PDF» ← «رفع».
الصورة بتتصغّر لوحدها. أقصى حجم 10 ميجا.
تقدر تمسح بس اللي انت رفعته.`,
    a_en: `Open the store → "Declarations" tab → choose the type → take a photo or pick an image/PDF → "Upload".
Photos are resized automatically. Max 10 MB.
You can only delete documents you uploaded.`,
  },
  {
    q_ar: "ليه حركة جديدة لسه مش ظاهرة؟",
    q_en: "Why isn't a new transaction showing yet?",
    keys: "مش ظاهر مش باين اتأخر تحديث جديد ليه مراجعه not showing missing update new review",
    top: true,
    a_ar: `الصفحة بتتحدث لوحدها كل 20 ثانية، وتقدر تدوس زرار التحديث فوق.
أي حاجة بتتسجل بتتراجع الأول من الإدارة قبل ما تظهر هنا، فممكن تاخد شوية وقت.
لو فات يوم ولسه مش ظاهرة: كلّم الإدارة.`,
    a_en: `The page refreshes by itself every 20 seconds, or tap the refresh button at the top.
New entries are reviewed first before they appear here, so it can take a little while.
Still missing after a day? Contact the admin team.`,
  },
  {
    q_ar: "«مشكلة ورق» معناها إيه؟",
    q_en: "What does “paperwork issue” mean?",
    keys: "مشكله ورق الورق بطاقه ضريبيه سجل تجاري ناقص paper paperwork issue documents missing",
    a_ar: `المحل ده ناقصه ورق عندنا (زي بطاقة ضريبية أو سجل تجاري).
نوع المشكلة بيكون مكتوب جنبها. ياريت تتابع مع التاجر يكمّل الورق.`,
    a_en: `This store is missing paperwork with us (e.g. tax card or commercial register).
The issue is written next to it. Please follow up with the merchant to complete it.`,
  },
  {
    q_ar: "محل مش ظاهر عندي",
    q_en: "A store is missing from my list",
    keys: "محل مش موجود ناقص مش لاقي محلات store missing not found list",
    a_ar: `الصفحة بتعرض المحلات المتسجلة باسمك بس.
جرّب البحث بالكود أو جزء من الاسم. لو برضه مش موجود: كلّم الإدارة تضيفه لمحلاتك.`,
    a_en: `You only see the stores assigned to you.
Try searching by code or part of the name. If it's still not there, ask the admin team to assign it to you.`,
  },
  {
    q_ar: "أغيّر اللغة إزاي؟",
    q_en: "How do I change the language?",
    keys: "لغه انجليزي عربي صيني language english arabic chinese",
    login: true,
    a_ar: `من القايمة اللي فوق جنب زرار التحديث (عربي / EN / 中文)، أو من صفحة الدخول.
الموبايل بيفتكر اختيارك.`,
    a_en: `Use the menu at the top next to the refresh button (عربي / EN / 中文), or on the sign-in page.
Your phone remembers the choice.`,
  },
  {
    q_ar: "أحط الصفحة على الموبايل كأنها تطبيق",
    q_en: "Add the page to my phone like an app",
    keys: "تطبيق ابلكيشن الشاشه الرئيسيه ايقونه اختصار app home screen icon shortcut install",
    login: true,
    a_ar: `أندرويد (Chrome): افتح الصفحة ← النقط التلاتة ← «إضافة إلى الشاشة الرئيسية».
آيفون (Safari): زرار المشاركة ← «إضافة إلى الشاشة الرئيسية».`,
    a_en: `Android (Chrome): open the page → ⋮ menu → "Add to Home screen".
iPhone (Safari): Share button → "Add to Home Screen".`,
  },
  {
    q_ar: "أكلم مين لو فيه رقم غلط؟",
    q_en: "Who do I contact if a number is wrong?",
    keys: "غلط خطأ مشكله اكلم مين تواصل الاداره دعم wrong error contact support admin",
    login: true,
    a_ar: `كلّم الإدارة وابعت كود المحل وصورة من الشاشة، وهي تراجع وترد عليك.`,
    a_en: `Contact the admin team with the store code and a screenshot. They'll check and get back to you.`,
  },
  // ---------------- الفاتورة الضريبية والقيمة المضافة ----------------
  {
    q_ar: "آخر معاد لرفع فاتورة الحوافز على الضرايب إمتى؟",
    q_en: "What's the deadline to upload the incentives tax invoice?",
    keys: "اخر معاد ميعاد رفع فاتوره ضريبيه الضرايب الضرائب بورتال منظومه deadline upload tax invoice portal",
    top: true,
    a_ar: `آخر وقت يوم 26 أو 27 من كل شهر.`,
    a_en: `The deadline is the 26th or 27th of each month.`,
  },
  {
    q_ar: "رد القيمة المضافة بيكون إمتى وبيتحسب على أساس إيه؟",
    q_en: "When is VAT refunded and how is it calculated?",
    keys: "رد القيمه المضافه ضريبه vat استرداد ترجع بيترد امتي كل تلت شهور refund calculated quarterly",
    top: true,
    a_ar: `بيكون كل 3 شهور، وبيترد على الحوافز اللي التاجر رفعها على الشركة في منظومة الضرايب.
ولازم التاجر يكون مشترك في القيمة المضافة، ومعاه إيصال سداد حديث.`,
    a_en: `It's every 3 months, based on the incentives the merchant uploaded against the company on the tax portal.
The merchant must be VAT-registered and have a recent payment receipt.`,
  },
  {
    q_ar: "لو التاجر مش بيرفع الفواتير، هيترد له القيمة المضافة وهو مشترك فيها؟",
    q_en: "If the merchant doesn't upload invoices, will VAT still be refunded?",
    keys: "مش بيرفع مبيرفعش مشترك القيمه المضافه هيترد not uploading registered vat refund",
    a_ar: `لأ. لازم يكون بيرفع الحوافز على البورتال عشان القيمة المضافة تترد له.`,
    a_en: `No. The merchant has to upload the incentives on the portal to get the VAT refund.`,
  },
  {
    q_ar: "التاجر نسي يرفع حوافز الشهر — ينفع يرفعها متأخر؟",
    q_en: "The merchant forgot this month's incentives — can they upload late?",
    keys: "نسي متأخر باثر رجعي اتاخر فات الميعاد خصم نسبه خصم forgot late retroactive missed deadline discount",
    a_ar: `لأ. لو التاجر مارفعش الحوافز في المدة المسموحة كل شهر، الشركة بترفعها عليه كنسبة خصم من إجمالي الأوردر.
مثال: لو التاجر عمل مبيعات ريلمي بحوالي 100 ألف ونازل له حوافز 20 ألف،
هتترفع له فاتورة مبيعات بـ 100 − 20 = 80 ألف، والـ 20 ألف بتتكتب في الفاتورة كنسبة خصم.`,
    a_en: `No. If the merchant doesn't upload the incentives within the monthly window, the company uploads them as a discount on the order total.
Example: sales of about 100,000 with 20,000 in incentives →
a sales invoice of 100,000 − 20,000 = 80,000 is issued, with the 20,000 shown as a discount on the invoice.`,
  },
  {
    q_ar: "التاجر رفع شهرين ونسي التالت — هيترد له على التلت شهور؟",
    q_en: "The merchant uploaded two months and missed the third — refund for all three?",
    keys: "رفع شهرين نسي التالت تلت شهور كام شهر الشهور اللي رفعها two months third month missed quarter",
    a_ar: `لأ. هيترد له بس على الشهور والفواتير اللي رفعها على البورتال.`,
    a_en: `No. The refund only covers the months and invoices actually uploaded on the portal.`,
  },
  // ---------------- التكويد والنماذج ----------------
  {
    q_ar: "إزاي أكوّد محل فرعي؟",
    q_en: "How do I code a branch store?",
    keys: "اكود تكويد كود محل فرعي فرع فروع رئيسي جديد branch code coding new store sub",
    top: true,
    a_ar: `1) الأول المحل الرئيسي لازم يتقفل حسابه:
   • مايبقاش ليه رصيد في الحوافز ولا في البنك.
   • ومايبقاش متعمل عليه أوردرات قريب.
   ده عشان نقدر نصفّي حساب العميل ونقفله.
2) بعد كده تجيب «ورقة تكويد محل فرع» مختومة من المحل الرئيسي ومن المحل الفرعي — بختمين مختلفين.
ورقة التكويد موجودة في «📄 نماذج للتحميل» في الصفحة الرئيسية.`,
    a_en: `1) First, the main store's account must be closed:
   • No remaining incentive or bank balance.
   • No recent orders on it.
   This lets us settle and close the customer's account.
2) Then bring the "branch store coding form" stamped by both the main store and the branch, with two different stamps.
The coding form is under "📄 Templates to download" on the main page.`,
  },
  {
    q_ar: "فين النماذج والورق اللي محتاجه (ورقة تكويد، عقد...)؟",
    q_en: "Where are the forms I need (coding form, contract...)?",
    keys: "نموذج نماذج تمبليت فورم ورقه ورق فاضي عقد تحميل نزل template form download blank contract",
    login: true,
    a_ar: `في الصفحة الرئيسية (قايمة المحلات) فيه زرار «📄 نماذج للتحميل» — فيه كل النماذج اللي الإدارة رفعتها، اضغط «تحميل».`,
    a_en: `On the main page (store list) tap "📄 Templates to download". It has every form the admin team uploaded; tap "Download".`,
  },
  {
    q_ar: "إزاي أطلع كشف حساب دائن ومدين للتاجر؟",
    q_en: "How do I get a debit/credit statement for a merchant?",
    keys: "كشف حساب دائن مدين تفصيلي مديونيه مديونية عليه له تحصيل statement debit credit ledger owes",
    top: true,
    a_ar: `ادخل على المحل ← تاب «دائن ومدين» ← اختار الفترة.
مدين (على التاجر) = الأوردرات.  دائن (للتاجر) = المرتجعات + التحصيلات + إيداعات البنك + الحوافز الممنوحة.
الحوافز المستخدمة بتنقص «رصيد الحوافز» (مثلاً نزل 100 ألف واستخدم 10 آلاف في أوردر ← رصيد الحوافز 90 ألف)، والأوردر نفسه متسجل مدين. وفوق الجدول ملخص: نزل كام / اتستخدم كام / باقي كام.
تحت: «طباعة / حفظ PDF» أو «تحميل Excel» وابعته للتاجر.`,
    a_en: `Open the store → "Debit & credit" tab → choose the period.
Debit (owed by merchant) = orders. Credit (in merchant's favour) = returns + collections + bank deposits + granted incentives.
Used incentives reduce the incentive balance (e.g. 100k granted, 10k used on an order → 90k left), while the order itself is a debit. A summary shows granted / used / remaining.
Use "Print / save PDF" or "Download Excel" and send it to the merchant.`,
  },
];

/* =====================================================================
   الشرح خطوة بخطوة (Tutorial) — بيظهر من زرار «📘 شرح الصفحة خطوة بخطوة» في الشات
   كل خطوة:
   - t_ar / t_en : عنوان الخطوة
   - a_ar / a_en : الشرح
   - target      : الجزء اللي بيتعلّم عليه في الصفحة (ماتغيّروش لو مش متأكد)
   - go          : "store" = يفتح أول محل لوحده  |  "list" = يرجع لقايمة المحلات
   - tab         : يفتح تاب جوه المحل: st كشف الحساب / ord أوردرات / inv فواتير / bank بنك / doc ورق التاجر
   ===================================================================== */
const TOUR = [
  { t_ar: "أهلًا بيك 👋", t_en: "Welcome 👋",
    a_ar: `هشرحلك الصفحة في دقيقتين، خطوة بخطوة.
اضغط «التالي» وأنا هعلّملك على كل جزء بلون أصفر.`,
    a_en: `I'll walk you through the page in two minutes, step by step.
Tap "Next" and I'll highlight each part in yellow.` },
  { target: ".hrow", go: "list",
    t_ar: "الشريط اللي فوق", t_en: "Top bar",
    a_ar: `فيه اسمك، واختيار اللغة، وزرار 🔄 للتحديث، وزرار الخروج.
الصفحة بتتحدث لوحدها كل 20 ثانية، وتحت الشريط مكتوب آخر تعديل من الإدارة.`,
    a_en: `Your name, the language picker, 🔄 refresh, and sign out.
The page refreshes itself every 20 seconds; the line below shows the admin's last update.` },
  { target: ".overview", go: "list",
    t_ar: "الملخص", t_en: "Summary",
    a_ar: `إجمالي الرصيد المتاح لكل محلاتك، وعدد المحلات، وإجمالي المستخدم.
ولو فيه محلات عليها مشكلة ورق بيظهر عددها بالأحمر.`,
    a_en: `Total available balance across your stores, store count, and total used.
Stores with paperwork issues are counted in red.` },
  { target: ".filters", go: "list",
    t_ar: "البحث", t_en: "Search",
    a_ar: `دوّر بالكود أو بأي جزء من اسم المحل، ومن غير ما تهتم بالهمزات أو التاء المربوطة.
وتقدر تختار منطقة معينة من القايمة اللي جنبه.`,
    a_en: `Search by code or any part of the store name.
Use the menu next to it to filter by region.` },
  { target: "#list", go: "list",
    t_ar: "قايمة المحلات", t_en: "Store list",
    a_ar: `كل سطر محل: الاسم والكود والمنطقة، والرصيد المتاح على الجنب.
النقطة الصفرا = رصيده اتغير من قريب.  «مشكلة ورق» بالأحمر = ناقصه ورق.
اضغط على أي محل يفتح تفاصيله.`,
    a_en: `Each row is a store: name, code, region, and available balance on the side.
Yellow dot = balance changed recently. Red "Paperwork issue" = missing documents.
Tap a store to open it.` },
  { target: ".hero", go: "store",
    t_ar: "صفحة المحل", t_en: "Store page",
    a_ar: `المربع الأصفر فيه الرصيد المتاح دلوقتي،
وتحته: البواقي + الحوافز − المستخدم، ورصيد البنك لو فيه.`,
    a_en: `The yellow box shows the current available balance,
with carried over + incentives − used below it, and the bank balance if any.` },
  { target: "#seg", go: "store",
    t_ar: "التابات", t_en: "Tabs",
    a_ar: `كل حاجة عن المحل متقسمة في التابات دي. الرقم الصغير جنب التاب = العدد اللي فيه.`,
    a_en: `Everything about the store is split into these tabs. The small number shows how many items are inside.` },
  { target: "#txs", go: "store", tab: "st",
    t_ar: "كشف الحساب", t_en: "Statement",
    a_ar: `كل حركة بتاريخها: مضاف بالأخضر، مستخدم بالأحمر، والرصيد بعدها.
فوق تختار: كل الفترات / الشهر ده / فترة معينة. آخر سطر أصفر = الرصيد آخر الفترة.`,
    a_en: `Every dated transaction: added in green, used in red, with the running balance.
Pick all time / this month / a date range at the top. The yellow last row is the closing balance.` },
  { target: "#pord", go: "store", tab: "ord",
    t_ar: "الأوردرات والمرتجعات", t_en: "Orders & returns",
    a_ar: `كل أوردر برقمه وتاريخه وأصنافه وكميته، وفوق إجمالي الأوردرات والمرتجعات والصافي.`,
    a_en: `Each order with its number, date, items and quantities, plus totals for orders, returns and net.` },
  { target: "#pinv", go: "store", tab: "inv",
    t_ar: "الفواتير", t_en: "Invoices",
    a_ar: `الفواتير الضريبية للمحل — اضغط «تحميل» تنزل PDF على الموبايل.`,
    a_en: `The store's tax invoices. Tap "Download" to save the PDF.` },
  { target: "#pbank", go: "store", tab: "bank",
    t_ar: "البنك", t_en: "Bank",
    a_ar: `حركات البنك: إيداع، أوردر، ومن الحافز، ورصيد البنك بعد كل حركة.
رصيد البنك = الإيداع + من الحافز − الأوردر.`,
    a_en: `Bank transactions: deposit, order, from incentive, and the bank balance after each.
Bank balance = deposits + from incentive − orders.` },
  { target: "#pled", go: "store", tab: "led",
    t_ar: "دائن ومدين", t_en: "Debit & credit",
    a_ar: `كشف حساب تفصيلي للتاجر: الأوردرات (مدين) قصاد المرتجعات والتحصيلات وإيداعات البنك والحوافز الممنوحة (دائن). الحوافز المستخدمة بتنقص رصيد الحوافز.
اختار الفترة، وبعدين «طباعة / حفظ PDF» أو «تحميل Excel» وابعته للتاجر.`,
    a_en: `A detailed statement: orders (debit) against returns, collections, bank deposits and granted incentives (credit). Used incentives reduce the incentive balance.
Pick the period, then "Print / save PDF" or "Download Excel" to send to the merchant.` },
  { target: "#pdoc", go: "store", tab: "doc",
    t_ar: "ورق التاجر", t_en: "Store documents",
    a_ar: `فوق: البطاقة الضريبية، السجل التجاري، العقد، الإخطار، الإقرار —
وقدام كل واحد هل الأصل وصل الشركة (✔) ولا لأ، وعدد الصور المرفوعة.
تحت: اختار نوع المستند ← صوّر أو اختار صورة/PDF ← «رفع».`,
    a_en: `At the top: tax card, commercial register, contract, notice, declaration,
each showing whether the original reached the company (✔) and how many copies are uploaded.
Below: choose the document type → take a photo or pick a file → "Upload".` },
  { target: "#bk", go: "store",
    t_ar: "الرجوع", t_en: "Back",
    a_ar: `من هنا ترجع لقايمة المحلات.`,
    a_en: `Go back to the store list from here.` },
  { target: "#botBtn", go: "list",
    t_ar: "وأنا هنا دايمًا 💬", t_en: "I'm always here 💬",
    a_ar: `اسألني أي سؤال، أو اكتب كود محل وأقولك رصيده على طول.
خلصنا الشرح ✔`,
    a_en: `Ask me anything, or type a store code and I'll tell you its balance.
That's the tour ✔` },
];
