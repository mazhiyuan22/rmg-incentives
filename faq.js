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
  // رسالة الترحيب — {greet} = صباح الخير/مساء الخير   {name} = اسم اللي داخل
  welcome_ar: `{greet} يا {name} 👋
اسألني عن أي محل من محلاتك وأنا أطلّعلك الرقم على طول.`,
  welcome_en: `{greet}, {name} 👋
Ask me about any of your stores and I'll pull up the numbers right away.`,
  // قبل تسجيل الدخول
  welcome_out_ar: `أهلًا بيك 👋
عندك مشكلة في الدخول أو سؤال عن الحوافز؟ اسألني.`,
  welcome_out_en: `Welcome 👋
Trouble signing in, or a question about incentives? Ask me.`,
  // مرادفات: لو الناس بتكتب كلمة البوت مش فاهمها، ضيفها جنب الكلمة اللي البوت بيفهمها (مسافة بين كل كلمة)
  // الكلمات اللي البوت بيفهمها: رصيد حوافز اوردرات مرتجعات صافي ورق النهارده امبارح ازاي كشف دخول تكويد فات تحصيل بنك فاتوره نماذج
  synonyms: {
    "رصيد":   "",
    "حوافز":  "",
    "اوردرات": "",
  },
  // أزرار «جرّب» — بتتبعت للبوت كأنها سؤال اتكتب
  try_ar: ["💰 حوافز كل محلاتي", "📦 صافي أوردرات كل المحلات النهارده", "📄 مين ورقه ناقص؟", "🧾 كشف حساب تفصيلي"],
  try_en: ["💰 Incentives for all my stores", "📦 Net orders for all stores today", "📄 Who has missing papers?", "🧾 Detailed statement"],
  not_found_ar: `مش متأكد إني فهمت 🤔 جرّب تكتبها بشكل تاني، أو اختار من الأسئلة دي.
ولو محتاج حد يرد عليك: كلّم الإدارة.`,
  not_found_en: `I'm not sure I understood 🤔 Try rephrasing, or pick one of these questions.
If you need a person, contact the admin team.`,
};

const FAQ = [
  {
    q_ar: "الفات (استرداد القيمة المضافة) بتاع التاجر اتسلّم ولا لا؟",
    q_en: "Has the merchant's VAT refund been paid?",
    keys: "فات استرداد قيمة مضافة ربع اتسلم اتصرف سلمنا vat refund quarter paid",
    a_ar: `ادخل على المحل ← تحت اسمه هتلاقي «فات الربع: المبلغ» ومكتوب جنبه «✔ اتسلّم» بالتاريخ أو «⏳ لسه ماتسلّمش».
الفات بيتحسب كل 3 شهور من الحوافز الجديدة اللي نزلت للتاجر في الربع، وبيظهر بس للتاجر اللي ليه فات (مسجّل قيمة مضافة وشهادته سارية).`,
    a_en: `Open the store: under its name you'll see "VAT <quarter>: amount" with "✔ paid <date>" or "⏳ not paid yet".
VAT is calculated every quarter from the new incentives granted in that quarter, and only shows for merchants who qualify (VAT-registered with a valid certificate).`,
  },
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
    q_ar: "إزاي أطلع كشف حساب تفصيلي للتاجر؟",
    q_en: "How do I get a debit/credit statement for a merchant?",
    keys: "كشف حساب دائن مدين تفصيلي مديونيه مديونية عليه له تحصيل statement debit credit ledger owes",
    top: true,
    a_ar: `ادخل على المحل ← تاب «كشف حساب تفصيلي» ← اختار الفترة.
الأعمدة: نوع الحركة — رقم المستند — التاريخ — مدين — دائن — الرصيد — ملاحظات.
مدين = الأوردرات.  دائن = المرتجعات + التحصيلات + إيداعات البنك + فواتير الحوافز (الحافز دائن أول ما ينزل).
الرصيد = دائن − مدين، ولو بالسالب يبقى على التاجر.
«حافز مستخدم» سطر للبيان بس (مابيغيّرش الرصيد عشان الحافز اتحسب لما نزل)، وبيبيّن رصيد الحوافز اللي باقي.
تحت: «طباعة / حفظ PDF» أو «تحميل Excel» وابعته للتاجر.`,
    a_en: `Open the store → "Detailed statement" tab → choose the period.
Columns: transaction type — document no. — date — debit — credit — balance — note.
Debit = orders. Credit = returns + collections + bank deposits + incentive invoices (an incentive is credited when issued).
Balance = credit − debit; a negative balance is owed by the merchant.
"Incentive used" lines are for reference only and show the remaining incentive balance.
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
    t_ar: "كشف حساب تفصيلي", t_en: "Detailed statement",
    a_ar: `كشف حساب تفصيلي للتاجر: الأوردرات (مدين) قصاد المرتجعات والتحصيلات وإيداعات البنك وفواتير الحوافز (دائن). الرصيد بالسالب يبقى على التاجر.
اختار الفترة، وبعدين «طباعة / حفظ PDF» أو «تحميل Excel» وابعته للتاجر.`,
    a_en: `A detailed statement: orders (debit) against returns, collections, bank deposits and incentive invoices (credit). A negative balance is owed by the merchant.
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

/* =====================================================================
   الترجمة الصينية — كل سؤال متربط بالسؤال الإنجليزي بتاعه (q_en)
   لو ضفت سؤال جديد: ضيفله سطر هنا بنفس الـ q_en، أو اكتب q_zh / a_zh جوه البلوك نفسه
   ===================================================================== */
const ZH = {
  bot: {
    name_zh: "助手",
    welcome_zh: `{greet}，{name} 👋
问我任何一家门店，我马上为你调出数据。`,
    welcome_out_zh: `欢迎 👋
登录有问题，或者想了解激励？问我吧。`,
    try_zh: ["💰 我所有门店的激励", "📦 今天所有门店的净订单", "📄 谁的资料不全？", "🧾 详细对账单"],
    not_found_zh: `我不太确定理解了 🤔 换个说法试试，或者从下面的问题里选一个。
需要人工帮助请联系管理团队。`,
  },
  faq: {
    "Has the merchant's VAT refund been paid?": ["商户的增值税退款付了吗？",
`打开门店：在名称下方会看到“增值税 <季度>：金额”，旁边写着“✔ 已付 <日期>”或“⏳ 尚未支付”。
增值税每季度根据该季度新发放的激励计算，只对符合条件的商户显示（已登记增值税且证书有效）。`],
    "How do I sign in?": ["怎么登录？",
`用户名和密码由管理团队提供。
• 主管：用英文输入用户名。
• 区域经理：按登记时的名字输入（可以用阿拉伯语）。
勾选“在此设备上记住我”，这部手机就不用再登录了。`],
    "I forgot my password / can't sign in": ["忘记密码 / 无法登录",
`确认没有多余的空格，并且键盘语言正确。
还是不行？联系管理团队，他们一分钟内就能帮你重设密码。`],
    "What does available balance mean?": ["可用余额是什么意思？",
`可用余额 = 结转 + 激励 − 已使用。
• 结转：以前月份剩下的。
• 激励：本月新的激励。
• 已使用：商户已经用掉的（用于订单或通过银行）。`],
    "How do I read the statement?": ["怎么看对账单？",
`打开门店 →“对账单”标签。
每一行是一笔带日期的交易：增加（绿色）或使用（红色），后面是交易后的余额。
在顶部选择全部、本月或自定义日期范围。
最后一行黄色的是期末可用余额。`],
    "How is the bank balance calculated?": ["银行余额怎么计算？",
`银行余额 = 存款 + 来自激励 − 订单。
“来自激励”的金额会从商户的激励余额中扣除，并在对账单中显示为“已使用”。
所有交易都在门店的“银行”标签里。`],
    "Where are orders and returns?": ["订单和退货在哪里？",
`打开门店 →“订单和退货”标签。
每个订单显示单号、日期、商品和数量，顶部是订单、退货和净额的合计。
可以按全部 / 订单 / 退货筛选，并选择期间。`],
    "How do I download a tax invoice?": ["怎么下载税务发票？",
`打开门店 →“发票”标签 → 点发票旁边的“下载”。
如果没有，说明这家门店的发票还没上传。请联系管理团队。`],
    "How do I upload a declaration or notice?": ["怎么上传申报表或通知？",
`打开门店 →“申报”标签 → 选择类型 → 拍照或选择图片/PDF →“上传”。
照片会自动压缩。最大 10 MB。
你只能删除自己上传的文件。`],
    "Why isn't a new transaction showing yet?": ["为什么新的交易还没显示？",
`页面每 20 秒自动刷新，也可以点顶部的刷新按钮。
新记录要先审核才会显示，所以可能需要一点时间。
一天后还没有？请联系管理团队。`],
    "What does “paperwork issue” mean?": ["“资料问题”是什么意思？",
`这家门店在我们这里缺少资料（例如税卡或商业登记）。
问题写在旁边。请跟商户跟进补齐。`],
    "A store is missing from my list": ["我的列表里少了一家门店",
`你只能看到分配给你的门店。
试着按代码或名称的一部分搜索。还是没有的话，请管理团队把它分配给你。`],
    "How do I change the language?": ["怎么切换语言？",
`用顶部刷新按钮旁边的菜单（عربي / EN / 中文），或者在登录页面切换。
手机会记住你的选择。`],
    "Add the page to my phone like an app": ["把页面像应用一样添加到手机",
`安卓（Chrome）：打开页面 → ⋮ 菜单 →“添加到主屏幕”。
iPhone（Safari）：分享按钮 →“添加到主屏幕”。`],
    "Who do I contact if a number is wrong?": ["数字不对该联系谁？",
`带上门店代码和截图联系管理团队。他们会核查并回复你。`],
    "What's the deadline to upload the incentives tax invoice?": ["上传激励税务发票的截止日期是哪天？",
`截止日期是每月 26 号或 27 号。`],
    "When is VAT refunded and how is it calculated?": ["增值税什么时候退、怎么计算？",
`每 3 个月一次，根据商户在税务平台上针对公司上传的激励计算。
商户必须已登记增值税，并有最近的缴款收据。`],
    "If the merchant doesn't upload invoices, will VAT still be refunded?": ["商户不上传发票，还能退增值税吗？",
`不能。商户必须在平台上上传激励才能获得增值税退款。`],
    "The merchant forgot this month's incentives — can they upload late?": ["商户忘了本月的激励——可以晚点上传吗？",
`不可以。如果商户没有在每月的时间窗口内上传激励，公司会把它作为订单总额的折扣上传。
例子：销售约 100,000，激励 20,000 →
开出 100,000 − 20,000 = 80,000 的销售发票，20,000 作为发票上的折扣显示。`],
    "The merchant uploaded two months and missed the third — refund for all three?": ["商户上传了两个月、漏了第三个月——三个月都能退吗？",
`不能。退款只覆盖实际在平台上上传的月份和发票。`],
    "How do I code a branch store?": ["分店怎么编码？",
`1）首先，主店的账户必须结清：
   • 没有剩余的激励或银行余额。
   • 最近没有订单。
   这样我们才能结算并关闭该客户的账户。
2）然后带上由主店和分店分别盖章（两个不同印章）的“分店编码表”。
编码表在首页的“📄 可下载模板”里。`],
    "Where are the forms I need (coding form, contract...)?": ["我需要的表格（编码表、合同……）在哪里？",
`在首页（门店列表）点“📄 可下载模板”。里面有管理团队上传的所有表格，点“下载”即可。`],
    "How do I get a debit/credit statement for a merchant?": ["怎么给商户出借贷对账单？",
`打开门店 →“详细对账单”标签 → 选择期间。
列：交易类型 — 单据号 — 日期 — 借方 — 贷方 — 余额 — 备注。
借方 = 订单。贷方 = 退货 + 收款 + 银行存款 + 激励发票（激励发放时记入贷方）。
余额 = 贷方 − 借方；余额为负表示商户欠款。
“已使用激励”行仅供参考，显示剩余激励余额。
用“打印 / 保存 PDF”或“下载 Excel”发给商户。`],
  },
  tour: [
    ["欢迎 👋", `我用两分钟一步步带你看这个页面。
点“下一步”，我会用黄色标出每个部分。`],
    ["顶部栏", `你的名字、语言选择、🔄 刷新和退出。
页面每 20 秒自动刷新；下面一行显示管理员的最后更新时间。`],
    ["汇总", `你所有门店的可用余额总计、门店数量和已使用总额。
有资料问题的门店用红色计数。`],
    ["搜索", `按代码或门店名称的任意部分搜索。
用旁边的菜单按区域筛选。`],
    ["门店列表", `每一行是一家门店：名称、代码、区域，旁边是可用余额。
黄点 = 余额最近有变化。红色“资料问题” = 缺少文件。
点门店即可打开。`],
    ["门店页面", `黄色框显示当前可用余额，
下面是结转 + 激励 − 已使用，如果有银行余额也会显示。`],
    ["标签", `门店的所有信息都分在这些标签里。小数字表示里面有多少条。`],
    ["对账单", `每笔带日期的交易：增加为绿色，使用为红色，并显示滚动余额。
在顶部选择全部 / 本月 / 日期范围。最后一行黄色是期末余额。`],
    ["订单和退货", `每个订单的单号、日期、商品和数量，以及订单、退货和净额合计。`],
    ["发票", `门店的税务发票。点“下载”保存 PDF。`],
    ["银行", `银行交易：存款、订单、来自激励，以及每笔之后的银行余额。
银行余额 = 存款 + 来自激励 − 订单。`],
    ["详细对账单", `详细对账单：订单（借方）对应退货、收款、银行存款和激励发票（贷方）。余额为负表示商户欠款。
选择期间，然后“打印 / 保存 PDF”或“下载 Excel”发给商户。`],
    ["门店资料", `顶部：税卡、商业登记、合同、通知、申报，
每项显示原件是否已到公司（✔）以及上传了几份。
下面：选择文件类型 → 拍照或选择文件 →“上传”。`],
    ["返回", `从这里返回门店列表。`],
    ["我一直在这里 💬", `随便问我，或者输入门店代码，我告诉你它的余额。
导览结束 ✔`],
  ],
};
Object.assign(BOT, ZH.bot);
FAQ.forEach(q => { const z = ZH.faq[q.q_en]; if (z && !q.q_zh) { q.q_zh = z[0]; q.a_zh = z[1]; } });
TOUR.forEach((s, i) => { const z = ZH.tour[i]; if (z && !s.t_zh) { s.t_zh = z[0]; s.a_zh = z[1]; } });
