/* =====================================================================
   دليل التاجر الضريبي — عربي / English / 中文
   عشان تضيف موضوع: انسخ بلوك من TOPICS وغيّر القيم في اللغات التلاتة.
   آخر مراجعة للأرقام: نوفمبر 2026 — راجعها مع محاسب قبل أي قرار.
   ===================================================================== */
(() => {
const TOPICS = [
  {id:"basics", cat:"start", ic:"file", ac:"#FFC915",
   ar:{t:"الملف الضريبي والبطاقة", s:"أول خطوة عشان تشتغل رسمي وتاخد حقك.",
     body:["أي حد بيبيع لازم يكون عنده سجل تجاري وبطاقة ضريبية وملف في مأمورية الضرائب التابع لها المحل.",
       "التسجيل بيكون خلال 30 يوم من بداية النشاط، أو من ساعة ما تبقى خاضع للقيمة المضافة.",
       "التسجيل على المنظومة الإلكترونية مطلوب حتى لو مبيعاتك لسه ما وصلتش حد التسجيل، ومش بيترتب عليه تحصيل قيمة مضافة غير لما توصل للحد."],
     doo:["خلي صورة السجل والبطاقة سارية ومحدثة عندنا","حدّث العنوان والنشاط في المأمورية لو اتغيروا","اعمل حساب على بوابة مصلحة الضرائب الإلكترونية"],
     dont:["ماتشتغلش باسم حد تاني أو بطاقة حد تاني","ماتسيبش البطاقة تخلص من غير تجديد"]},
   en:{t:"Tax file & tax card", s:"The first step to working officially and protecting your rights.",
     body:["Anyone who sells needs a commercial register, a tax card, and a file at the tax office for the shop's area.",
       "Registration must happen within 30 days of starting the business, or of becoming subject to VAT.",
       "Registering on the e-system is required even before your sales reach the VAT threshold; you only start charging VAT once you reach it."],
     doo:["Keep a valid, up-to-date copy of your register and tax card with us","Update your address and activity at the tax office if they change","Create an account on the Egyptian Tax Authority e-portal"],
     dont:["Don't trade under someone else's name or tax card","Don't let your tax card expire without renewing it"]},
   zh:{t:"税务档案与税卡", s:"正规经营、保护自身权益的第一步。",
     body:["所有销售者都需要商业登记、税卡，并在门店所属的税务分局建立档案。",
       "必须在开始经营之日起 30 天内，或开始须缴纳增值税之日起 30 天内完成登记。",
       "即使销售额还没达到增值税登记门槛，也需要在电子系统上登记；达到门槛后才开始收取增值税。"],
     doo:["在我们这里保留有效、最新的商业登记和税卡副本","地址或经营范围变更时到税务分局更新","在埃及税务局电子门户上注册账户"],
     dont:["不要用别人的名字或税卡经营","不要让税卡过期不续"]}},
  {id:"vat", cat:"vat", ic:"pct", ac:"#7FB2FF", calc:"vat",
   ar:{t:"ضريبة القيمة المضافة 14%", s:"إمتى تتسجل، وإزاي بتتحسب، وإيه اللي بتخصمه.",
     body:["السعر العام للقيمة المضافة 14%. أي تاجر مبيعاته السنوية وصلت 500 ألف جنيه لازم يتسجل.",
       "الفكرة ببساطة: إنت بتحصّل 14% من الزبون على البيع (ضريبة مخرجات)، وبتخصم منها الـ14% اللي دفعتها على مشترياتك (ضريبة مدخلات)، وتورّد الفرق بس.",
       "عشان تقدر تخصم ضريبة المشتريات لازم تكون معاك فاتورة إلكترونية صحيحة باسمك ورقمك الضريبي. الفاتورة الورق مابقاش يتعتد بيها في الخصم.",
       "الإقرار شهري، ولازم يتقدم حتى لو مفيش مبيعات في الشهر ده."],
     doo:["اطلب فاتورة إلكترونية على كل شحنة بتشتريها","راجع رقمك الضريبي على الفاتورة قبل ما تستلم","قدّم الإقرار في ميعاده كل شهر"],
     dont:["ماتشتريش بضاعة من غير فاتورة — هتدفع ضريبتها مرتين","ماتنساش تقدم إقرار الشهر اللي مفيهوش بيع"]},
   en:{t:"Value Added Tax (14%)", s:"When to register, how it's calculated, and what you can deduct.",
     body:["The standard VAT rate is 14%. Any merchant whose annual sales reach EGP 500,000 must register.",
       "In short: you collect 14% from the customer on each sale (output tax), deduct the 14% you paid on your purchases (input tax), and pay only the difference.",
       "To deduct input tax you need a valid e-invoice in your name with your tax number. Paper invoices are no longer accepted for deduction.",
       "The VAT return is monthly and must be filed even in a month with no sales."],
     doo:["Ask for an e-invoice on every shipment you buy","Check your tax number on the invoice before accepting it","File your return on time every month"],
     dont:["Don't buy stock without an invoice — you'll pay its tax twice","Don't skip the return for a month with no sales"]},
   zh:{t:"增值税 14%", s:"什么时候登记、怎么计算、可以抵扣什么。",
     body:["增值税标准税率为 14%。年销售额达到 50 万埃镑的商户必须登记。",
       "简单说：你在销售时向顾客收取 14%（销项税），减去你采购时支付的 14%（进项税），只缴纳差额。",
       "要抵扣进项税，必须有开给你本人、带你税号的有效电子发票。纸质发票已不能用于抵扣。",
       "增值税申报按月进行，即使当月没有销售也必须申报。"],
     doo:["每批进货都要求开电子发票","收货前核对发票上的税号","每月按时申报"],
     dont:["不要无发票进货——税会交两次","没有销售的月份也不要漏报"]}},
  {id:"einv", cat:"vat", ic:"inv", ac:"#62D0B5",
   ar:{t:"الفاتورة والإيصال الإلكتروني", s:"الفاتورة للبيع لشركة أو تاجر، والإيصال للبيع للمستهلك.",
     body:["الفاتورة الإلكترونية (B2B): أي بيع لتاجر أو شركة لازم يطلع عليه فاتورة على منظومة المصلحة.",
       "الإيصال الإلكتروني (B2C): البيع للمستهلك العادي في المحل بيطلع عليه إيصال إلكتروني حسب مراحل الإلزام.",
       "الانضمام لمنظومة الفاتورة أو الإيصال الإلكتروني شرط أساسي عشان تستفيد من النظام الضريبي المبسط.",
       "كل فاتورة بنطلعها لك من الشركة بتترفع على المنظومة، فتقدر تشوفها على البوابة وتخصم ضريبتها."],
     doo:["سجّل في منظومة الإيصال الإلكتروني لو بتبيع للمستهلك","اربط السيستم أو الكاشير بتاعك بالمنظومة","احتفظ بنسخة من كل فاتورة وإيصال"],
     dont:["ماتطلعش فاتورة ورقي بدل الإلكترونية","ماتسيبش فاتورة فيها غلط — اطلب إلغاءها أو إشعار تعديل"]},
   en:{t:"E-invoice & e-receipt", s:"Invoices for sales to businesses, receipts for sales to consumers.",
     body:["E-invoice (B2B): every sale to a merchant or company must be invoiced on the Tax Authority system.",
       "E-receipt (B2C): sales to ordinary consumers in the shop get an electronic receipt, according to the rollout phases.",
       "Joining the e-invoice or e-receipt system is a basic condition for the simplified tax regime.",
       "Every invoice we issue to you is uploaded to the system, so you can see it on the portal and deduct its tax."],
     doo:["Register for e-receipts if you sell to consumers","Connect your system or POS to the platform","Keep a copy of every invoice and receipt"],
     dont:["Don't issue a paper invoice instead of an e-invoice","Don't leave a wrong invoice — ask for cancellation or a correction note"]},
   zh:{t:"电子发票与电子收据", s:"卖给企业开发票，卖给消费者开收据。",
     body:["电子发票（B2B）：每笔卖给商户或公司的销售都必须在税务局系统上开具发票。",
       "电子收据（B2C）：在门店卖给普通消费者时，按推行阶段开具电子收据。",
       "加入电子发票或电子收据系统，是享受简化税制的基本条件。",
       "公司开给你的每张发票都会上传到系统，你可以在门户上看到并抵扣税款。"],
     doo:["如果你卖给消费者，请注册电子收据","把你的系统或收银机接入平台","保留每张发票和收据的副本"],
     dont:["不要用纸质发票代替电子发票","发票有错不要放着——申请作废或开更正通知"]}},
  {id:"simple", cat:"income", ic:"bars", ac:"#B79CFF", calc:"simple",
   ar:{t:"النظام الضريبي المبسط", s:"لو حجم أعمالك أقل من 20 مليون في السنة.",
     body:["القانون 6 لسنة 2025 بيدي المشروعات اللي حجم أعمالها السنوي ما يزيدش عن 20 مليون جنيه نظام مبسط، وهو نظام دائم مش مربوط بمهلة.",
       "بدل ما الضريبة تتحسب على صافي الربح، بتدفع نسبة صغيرة من حجم الأعمال حسب شريحتك.",
       "مزايا مهمة: إعفاء من الفحص الضريبي 5 سنين من تاريخ الانضمام، وإعفاء من الدمغة ورسم تنمية الموارد، وإعفاء من نظام الخصم والدفعات المقدمة تحت حساب الضريبة.",
       "طلب الانضمام بيتقدم إلكتروني، والاستفادة بتبدأ من تاني يوم تقديم الطلب.",
       "لو عدّيت الـ20 مليون بنسبة ما تزيدش عن 20% ولمرة واحدة بس خلال الخمس سنين، بتفضل في النظام بنسبة 1.5%."],
     doo:["احسب حجم أعمالك السنوي بالظبط من فواتيرك","قدّم طلب الانضمام إلكتروني","خليك مسجل في الفاتورة/الإيصال الإلكتروني"],
     dont:["ماتقللش مبيعاتك على الورق — الفواتير الإلكترونية بتبين الحقيقة","ماتفتكرش إن المبسط بيعفيك من القيمة المضافة — دي ضريبة تانية"]},
   en:{t:"Simplified tax regime", s:"If your annual turnover is under EGP 20 million.",
     body:["Law No. 6 of 2025 gives businesses with annual turnover up to EGP 20 million a simplified regime. It is permanent, not tied to a deadline.",
       "Instead of tax on net profit, you pay a small percentage of turnover according to your bracket.",
       "Key benefits: no tax audit for 5 years from joining, exemption from stamp duty and the state resource development fee, and exemption from withholding and advance payments.",
       "You apply online, and the benefits start the day after you apply.",
       "If you exceed EGP 20 million by no more than 20%, and only once in the five years, you stay in the regime at 1.5%."],
     doo:["Calculate your exact annual turnover from your invoices","Apply online","Stay registered for e-invoices/e-receipts"],
     dont:["Don't under-report sales — e-invoices show the real numbers","Don't think the simplified regime exempts you from VAT — that's a separate tax"]},
   zh:{t:"简化税制", s:"年营业额低于 2000 万埃镑时适用。",
     body:["2025 年第 6 号法律为年营业额不超过 2000 万埃镑的企业提供简化税制，这是长期制度，没有截止期限。",
       "不按净利润计税，而是按所在档次缴纳营业额的一小部分。",
       "主要优惠：加入后 5 年免税务稽查，免印花税和国家资源发展费，免预扣税和预缴税。",
       "在线申请，申请次日起开始享受。",
       "如果超过 2000 万埃镑的幅度不超过 20%，且五年内只有一次，仍可按 1.5% 留在该制度内。"],
     doo:["根据发票准确计算年营业额","在线提交申请","保持电子发票/电子收据登记"],
     dont:["不要少报销售额——电子发票会显示真实数字","不要以为简化税制免增值税——那是另一种税"]}},
  {id:"wht", cat:"income", ic:"cut", ac:"#FF9D6B",
   ar:{t:"الخصم تحت حساب الضريبة", s:"ليه الشركة بتخصم منك نسبة، وإزاي تسترجعها.",
     body:["لما شركة تشتري منك أو تدفعلك، ممكن تخصم نسبة (مثلاً 1% على التوريدات) وتوردها للضرايب باسمك.",
       "النسبة بتتحسب على المبلغ من غير القيمة المضافة.",
       "المبلغ ده مش ضايع: ده رصيد لصالحك بيتخصم من ضريبة الدخل بتاعتك آخر السنة. لازم تاخد إشعار الخصم (نموذج 41) وتحتفظ بيه.",
       "لو إنت في النظام المبسط فإنت معفي من نظام الخصم تحت الحساب — بلّغ الجهة اللي بتتعامل معاها."],
     doo:["اطلب إشعار الخصم على كل مبلغ اتخصم منك","طابق الإشعارات مع اللي ظاهر على البوابة","خصمها من ضريبتك في الإقرار السنوي"],
     dont:["ماتعتبرش المبلغ المخصوم مصاريف وتنساه"]},
   en:{t:"Withholding tax", s:"Why a company deducts a percentage from you, and how to get it back.",
     body:["When a company buys from you or pays you, it may withhold a percentage (e.g. 1% on supplies) and pay it to the Tax Authority in your name.",
       "The percentage is calculated on the amount excluding VAT.",
       "That money isn't lost: it's a credit in your favour, deducted from your income tax at year end. Get the withholding certificate (Form 41) and keep it.",
       "If you're in the simplified regime you're exempt from withholding — tell the companies you deal with."],
     doo:["Ask for a withholding certificate for every deduction","Match the certificates with what the portal shows","Deduct them from your tax in the annual return"],
     dont:["Don't treat the withheld amount as an expense and forget it"]},
   zh:{t:"预扣税", s:"为什么公司会从你这里扣一部分，以及怎么拿回来。",
     body:["公司向你采购或付款时，可能会预扣一定比例（例如供货的 1%），并以你的名义缴给税务局。",
       "比例按不含增值税的金额计算。",
       "这笔钱并没有损失：它是你的抵免额，年底从所得税中扣除。要拿到预扣凭证（41 号表）并妥善保存。",
       "如果你在简化税制内，就免于预扣——请告知与你往来的公司。"],
     doo:["每次被扣款都要求开预扣凭证","把凭证和门户上显示的记录核对","在年度申报中抵扣"],
     dont:["不要把被扣的钱当成费用然后忘掉"]}},
  {id:"phones", cat:"phone", ic:"phone", ac:"#FFC915",
   ar:{t:"الموبايلات وحوكمة الأجهزة", s:"ليه لازم تبيع جهاز رسمي متسجل.",
     body:["من يناير 2025 فيه منظومة لحوكمة أجهزة الموبايل بيديرها الجهاز القومي لتنظيم الاتصالات مع الجمارك. أي موبايل بيشتغل بشريحة مصرية لازم يكون متسجل وخالص الرسوم.",
       "الموبايل اللي بييجي من بره عليه رسوم بتوصل لـ38.5% من قيمته، والجهاز غير المسجل ممكن الخدمة تتقطع عنه.",
       "الجهاز اللي بتشتريه من الموزع الرسمي متسجل وخالص كل رسومه، وبيجي بفاتورة إلكترونية وضمان رسمي."],
     doo:["اشتري من الموزع الرسمي بفاتورة","سلّم الزبون فاتورة/إيصال وكارت ضمان","احتفظ بـ IMEI كل جهاز بعته مع رقم الفاتورة"],
     dont:["ماتبيعش أجهزة تهريب أو مش متسجلة — الزبون هيرجعلك والخدمة هتقف","ماتشيلش كرتونة أو ستيكر الـIMEI"]},
   en:{t:"Phones & handset governance", s:"Why you should only sell official, registered devices.",
     body:["Since January 2025, a handset governance system run by the NTRA with Customs requires every phone used with an Egyptian SIM to be registered with fees paid.",
       "Phones brought in from abroad carry fees of up to 38.5% of their value, and unregistered devices can be cut off from the network.",
       "Devices bought from the official distributor are registered with all fees paid, and come with an e-invoice and an official warranty."],
     doo:["Buy from the official distributor with an invoice","Give the customer an invoice/receipt and warranty card","Keep each sold device's IMEI with its invoice number"],
     dont:["Don't sell smuggled or unregistered devices — the customer will come back and service will stop","Don't remove the box or the IMEI sticker"]},
   zh:{t:"手机与设备监管", s:"为什么只能卖正规注册的设备。",
     body:["自 2025 年 1 月起，国家电信监管局与海关共同运行手机监管系统，所有使用埃及 SIM 卡的手机都必须登记并缴清费用。",
       "从国外带入的手机需缴纳最高达价值 38.5% 的费用，未登记的设备可能被停止服务。",
       "从官方经销商购买的设备已登记并缴清全部费用，附电子发票和官方保修。"],
     doo:["凭发票从官方经销商进货","给顾客发票/收据和保修卡","保存每台售出设备的 IMEI 和发票号"],
     dont:["不要卖走私或未登记的设备——顾客会回来找你，服务也会被停","不要撕掉包装盒或 IMEI 贴纸"]}},
  {id:"incent", cat:"us", ic:"gift", ac:"#62D0B5", calc:"incent",
   ar:{t:"الحوافز وضريبتها", s:"إزاي الحافز بيتسجل، وليه شهادة القيمة المضافة مهمة.",
     body:["الحافز اللي بينزل لك من الشركة بيتسجل في كشف حسابك دائن (لصالحك)، ولما تستخدمه في سحب بضاعة بيتخصم من رصيد الحافز.",
       "الحافز مبلغ شامل القيمة المضافة. الجزء الضريبي فيه بيتحسب كده: إجمالي الحوافز ÷ 1.14 × 14%.",
       "التاجر اللي عنده شهادة تسجيل قيمة مضافة سارية بيستحق استرداد الجزء ده كل ربع سنة. لو الشهادة خلصت أو مش عندنا، الاسترداد بيتأخر.",
       "اسأل المشرف بتاعك عن حالة الاسترداد، أو شوفها في صفحة المحل."],
     doo:["ابعت شهادة القيمة المضافة وتاريخ انتهائها لحسابات AR","جدد الشهادة قبل ما تخلص","راجع كشف حسابك التفصيلي كل شهر"],
     dont:["ماتستلمش حافز من غير ما يظهر في كشف الحساب"]},
   en:{t:"Incentives & their VAT", s:"How incentives are recorded, and why your VAT certificate matters.",
     body:["Incentives granted by the company are recorded as a credit in your statement, and when you use them on stock they're deducted from your incentive balance.",
       "Incentives are VAT-inclusive. The tax part is: total incentives ÷ 1.14 × 14%.",
       "Merchants with a valid VAT registration certificate are refunded that part every quarter. If the certificate has expired or we don't have it, the refund is delayed.",
       "Ask your supervisor about the refund status, or check it on the store page."],
     doo:["Send your VAT certificate and its expiry date to AR Accounts","Renew the certificate before it expires","Review your detailed statement every month"],
     dont:["Don't accept an incentive that doesn't appear in your statement"]},
   zh:{t:"激励及其增值税", s:"激励如何入账，以及增值税证书为什么重要。",
     body:["公司发放的激励在你的对账单中记为贷方（对你有利），用于提货时从激励余额中扣除。",
       "激励金额含增值税。税款部分 = 激励总额 ÷ 1.14 × 14%。",
       "持有有效增值税登记证书的商户每季度可退还这部分税款。证书过期或我们没有证书时，退款会延迟。",
       "向你的主管询问退款状态，或在门店页面查看。"],
     doo:["把增值税证书及到期日发给 AR 账务部","证书到期前续期","每月核对详细对账单"],
     dont:["对账单上没有显示的激励不要接受"]}},
  {id:"docs", cat:"protect", ic:"shield", ac:"#7FB2FF",
   ar:{t:"الورق اللي يحميك", s:"لو جالك فحص، الورق ده هو دفاعك.",
     body:["في أي فحص ضريبي، اللي بيتحسب هو اللي معاك ورق يثبته. أي مشتريات من غير فاتورة بتتعامل كأنها مبيعات ممكن تتقدّر عليك.",
       "احتفظ بالفواتير والإيصالات والإقرارات وإشعارات الخصم وكشوف الحساب 5 سنين على الأقل.",
       "عقد التعامل مع الشركة وكشف الحساب الموقّع بيثبتوا كل مبلغ دفعته أو استلمته."],
     doo:["أرشيف إلكتروني (صور/PDF) لكل فاتورة","طابق المخزن مع الفواتير كل شهر","احتفظ بعقدك وكشوف الحساب الموقعة"],
     dont:["ماتدفعش كاش من غير إيصال استلام","ماترميش ورق سنة قديمة قبل 5 سنين"]},
   en:{t:"Documents that protect you", s:"If you're audited, these papers are your defence.",
     body:["In any tax audit, only what you can prove with documents counts. Purchases without an invoice can be treated as hidden sales and assessed against you.",
       "Keep invoices, receipts, returns, withholding certificates and statements for at least 5 years.",
       "Your contract with the company and signed statements prove every amount you paid or received."],
     doo:["Keep a digital archive (photos/PDF) of every invoice","Reconcile stock with invoices every month","Keep your contract and signed statements"],
     dont:["Don't pay cash without a receipt","Don't throw away papers younger than 5 years"]},
   zh:{t:"保护你的单据", s:"遇到稽查时，这些单据就是你的证据。",
     body:["任何税务稽查中，只有有单据证明的才算数。没有发票的采购可能被视为隐瞒的销售而被核定征税。",
       "发票、收据、申报表、预扣凭证和对账单至少保存 5 年。",
       "与公司的合同和签字的对账单可以证明你付出或收到的每一笔钱。"],
     doo:["为每张发票建立电子档案（照片/PDF）","每月核对库存和发票","保存合同和签字的对账单"],
     dont:["不要付现金却不要收据","不满 5 年的单据不要丢"]}},
  {id:"mistakes", cat:"protect", ic:"warn", ac:"#FF6B7A",
   ar:{t:"أخطاء بتكلّف كتير", s:"حاجات بسيطة ممكن تتحول لغرامة أو تقدير جزافي.",
     body:["التأخير في تقديم الإقرار أو السداد عليه غرامات ومقابل تأخير بيتحسب على المدة.",
       "البيع من غير فاتورة أو إيصال ممكن يتعامل كتهرب ضريبي.",
       "الفرق بين اللي في فواتيرك الإلكترونية واللي في إقرارك بيظهر للمصلحة أوتوماتيك."],
     doo:["حط تذكير شهري بميعاد الإقرار","اتعامل مع محاسب قانوني معتمد","رد على أي إخطار من المأمورية في ميعاده"],
     dont:["ماتتجاهلش أي خطاب أو رسالة من الضرايب","ماتخليش حد يقدم إقرارك من غير ما تراجعه"]},
   en:{t:"Costly mistakes", s:"Small things that can turn into fines or an estimated assessment.",
     body:["Late filing or late payment brings fines and late-payment charges that grow with time.",
       "Selling without an invoice or receipt can be treated as tax evasion.",
       "Any gap between your e-invoices and your return shows up for the Tax Authority automatically."],
     doo:["Set a monthly reminder for the filing deadline","Work with a certified accountant","Answer any notice from the tax office on time"],
     dont:["Don't ignore any letter or message from the Tax Authority","Don't let anyone file your return without you reviewing it"]},
   zh:{t:"代价高昂的错误", s:"小事也可能变成罚款或核定征税。",
     body:["逾期申报或逾期缴税会产生罚款和随时间增加的滞纳金。",
       "无发票或收据销售可能被视为逃税。",
       "电子发票与申报表之间的任何差异，税务局都会自动发现。"],
     doo:["每月设置申报截止提醒","聘请持证会计师","按时回复税务分局的任何通知"],
     dont:["不要忽视税务局的任何信件或消息","不要让别人未经你审核就替你申报"]}},
];
const CATS = [["", "الكل", "All", "全部"], ["start", "البداية", "Getting started", "入门"], ["vat", "القيمة المضافة", "VAT", "增值税"],
  ["income", "ضريبة الدخل", "Income tax", "所得税"], ["phone", "الموبايلات", "Phones", "手机"], ["us", "تعاملك معانا", "Dealing with us", "与我们合作"],
  ["protect", "احمي نفسك", "Protect yourself", "保护自己"]];
const SIMPLE = [[500e3, .004], [2e6, .005], [3e6, .0075], [10e6, .01], [20e6, .015]];
const SIMPLE_LBL = {ar:["أقل من 500 ألف", "500 ألف – 2 مليون", "2 – 3 مليون", "3 – 10 مليون", "10 – 20 مليون"],
  en:["Under 500K", "500K – 2M", "2M – 3M", "3M – 10M", "10M – 20M"], zh:["50 万以下", "50 万 – 200 万", "200 万 – 300 万", "300 万 – 1000 万", "1000 万 – 2000 万"]};
const UI = {
  title:["دليل التاجر الضريبي", "Merchant tax guide", "商户税务指南"], close:["إغلاق", "Close", "关闭"],
  h1:["اشتغل رسمي،<br>واحمي فلوسك", "Work officially,<br>protect your money", "正规经营，<br>保护你的钱"],
  lead:["كل اللي يهمك كتاجر موبايلات في الضرايب والمبيعات، بكلام بسيط: القيمة المضافة، الفاتورة الإلكترونية، النظام المبسط، والحاجات اللي ليها علاقة بتعاملك معانا.",
        "Everything a phone merchant needs to know about tax and sales, in plain words: VAT, e-invoicing, the simplified regime, and how it all relates to working with us.",
        "手机商户在税务和销售方面需要了解的一切，用简单的话讲清楚：增值税、电子发票、简化税制，以及与我们合作相关的内容。"],
  chH:["الـ14% بتمشي إزاي من الموزع لحد الزبون؟", "How does the 14% move from distributor to customer?", "14% 的增值税如何从经销商传到顾客？"],
  chS:["حرّك الشريطين وشوف كل واحد بيورّد قد إيه. كل واحد بيدفع ضريبة على «القيمة اللي زودها» بس.",
       "Move the sliders and see what each party pays. Everyone pays tax only on the value they added.",
       "拖动滑块，看看每一方缴多少。每个人只为自己增加的价值缴税。"],
  dist:["الموزع", "Distributor", "经销商"], distB:["بيبيعلك الجهاز", "Sells you the device", "把设备卖给你"],
  you:["إنت — التاجر", "You — the merchant", "你——商户"], youB:["بتبيعه للزبون", "Sell it to the customer", "卖给顾客"],
  cust:["الزبون", "Customer", "顾客"], custB:["المستهلك النهائي", "End consumer", "最终消费者"],
  buy:["سعر شرائك (من غير ضريبة)", "Your purchase price (excl. VAT)", "你的进价（不含税）"], margin:["هامش ربحك", "Your margin", "你的利润率"],
  noInv:["لو اشتريت <b style=\"color:#FF6B7A\">من غير فاتورة</b>", "If you bought <b style=\"color:#FF6B7A\">without an invoice</b>", "如果你<b style=\"color:#FF6B7A\">无发票</b>进货"],
  price:["السعر", "Price", "价格"], vat14:["قيمة مضافة 14%", "VAT 14%", "增值税 14%"], distPays:["الموزع بيورّدها", "Distributor pays", "经销商缴纳"],
  sellAt:["بتبيع بـ", "You sell at", "你的售价"], collect:["بتحصّل من الزبون", "You collect", "你向顾客收取"],
  deduct:["بتخصم اللي دفعته", "You deduct what you paid", "抵扣你已付的"], noDeduct:["مفيش فاتورة = مفيش خصم", "No invoice = no deduction", "无发票 = 不能抵扣"],
  youPay:["بتورّد إنت", "You pay", "你缴纳"], pays:["بيدفع", "Pays", "支付"], ofTax:["منها ضريبة", "Of which tax", "其中税款"],
  egp:["ج", "EGP", "埃镑"],
  totNo:["من غير فاتورة شراء مش هتقدر تخصم <b>{0}</b>، فهتورّد <b>{1}</b> بدل <b>{2}</b>. يعني الضريبة اتدفعت مرتين: مرة في السعر ومرة منك.",
         "Without a purchase invoice you can't deduct <b>{0}</b>, so you pay <b>{1}</b> instead of <b>{2}</b>. The tax gets paid twice: once in the price and once by you.",
         "没有进货发票，你就不能抵扣 <b>{0}</b>，所以要缴 <b>{1}</b> 而不是 <b>{2}</b>。税交了两次：一次在进价里，一次由你缴。"],
  totOk:["إنت بتورّد <b>{0}</b> بس = 14% من ربحك ({1}). الدولة خدت إجمالي <b>{2}</b> على مرحلتين، والزبون هو اللي شايلها في الآخر.",
         "You pay only <b>{0}</b> = 14% of your profit ({1}). The state collected <b>{2}</b> in total over two stages, and the customer carries it in the end.",
         "你只缴 <b>{0}</b> = 利润（{1}）的 14%。国家分两个环节共收取 <b>{2}</b>，最终由顾客承担。"],
  search:["دوّر: فاتورة، مبسط، حافز، غرامة…", "Search: invoice, simplified, incentive, fine…", "搜索：发票、简化、激励、罚款…"],
  calcTag:["🧮 حاسبة", "🧮 Calculator", "🧮 计算器"], none:["مفيش موضوع بالكلمة دي. جرّب «فاتورة» أو «حافز».", "No topic matches. Try “invoice” or “incentive”.", "没有匹配的主题。试试“发票”或“激励”。"],
  note:["⚠ الدليل ده للتوعية وتبسيط الصورة، مش استشارة قانونية. القوانين والنسب بتتغير، فراجع أي قرار مع محاسب قانوني معتمد أو مأموريتك. آخر مراجعة: نوفمبر 2026.",
        "⚠ This guide is for awareness only, not legal advice. Laws and rates change, so check any decision with a certified accountant or your tax office. Last reviewed: November 2026.",
        "⚠ 本指南仅供参考，不构成法律意见。法律和税率会变化，任何决定请咨询持证会计师或所属税务分局。最后审核：2026 年 11 月。"],
  back:["→ كل المواضيع", "← All topics", "← 所有主题"], doH:["اعمل", "Do", "要做"], dontH:["ماتعملش", "Don't", "不要做"],
  noteS:["⚠ للتوعية بس — راجع مع محاسبك قبل أي قرار.", "⚠ For awareness only — check with your accountant before deciding.", "⚠ 仅供参考——做决定前请咨询会计师。"],
  cVat:["🧮 حاسبة القيمة المضافة", "🧮 VAT calculator", "🧮 增值税计算器"], exV:["المبلغ من غير ضريبة", "Amount excl. VAT", "不含税金额"], inV:["المبلغ شامل الضريبة", "Amount incl. VAT", "含税金额"],
  amt:["المبلغ بالجنيه", "Amount (EGP)", "金额（埃镑）"], before:["قبل الضريبة", "Before tax", "税前"], tax14:["الضريبة 14%", "VAT 14%", "增值税 14%"], total:["الإجمالي", "Total", "合计"],
  cSim:["🧮 احسب ضريبتك في النظام المبسط", "🧮 Your tax under the simplified regime", "🧮 计算简化税制下的税款"],
  turn:["حجم أعمالك السنوي (إجمالي المبيعات) بالجنيه", "Annual turnover (total sales), EGP", "年营业额（销售总额），埃镑"],
  over:["حجم أعمالك فوق 20 مليون", "Turnover above EGP 20M", "营业额超过 2000 万埃镑"],
  overB:["النظام المبسط مش متاح — الضريبة على صافي الربح بالنظام العادي", "The simplified regime doesn't apply — tax is on net profit under the standard rules", "不适用简化税制——按一般规则对净利润征税"],
  bracket:["شريحتك", "Your bracket", "你的档次"], rate:["النسبة", "Rate", "税率"], yearly:["الضريبة السنوية التقريبية", "Approx. annual tax", "约年度税款"], monthly:["في الشهر تقريباً", "Approx. per month", "约每月"],
  cInc:["🧮 احسب القيمة المضافة اللي في حوافزك", "🧮 VAT inside your incentives", "🧮 计算激励中的增值税"],
  incAmt:["إجمالي الحوافز اللي نزلت لك في الربع (بالجنيه)", "Total incentives granted this quarter (EGP)", "本季度发放的激励总额（埃镑）"],
  incT:["الحوافز", "Incentives", "激励"], incNet:["الحافز من غير ضريبة", "Incentives excl. VAT", "不含税激励"], incVat:["القيمة المضافة المستحقة لك", "VAT due to you", "应退给你的增值税"],
};

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
#tax{position:fixed;inset:0;z-index:60;background:#0B0E12;color:#E9EDF2;overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:"IBM Plex Sans Arabic","Segoe UI",system-ui,sans-serif;}
#tax.hide{display:none}
#tax .tx-top{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:10px;padding:12px 16px;padding-top:calc(12px + env(safe-area-inset-top));background:rgba(11,14,18,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.06)}
#tax .tx-top .mk{background:#FFC915;color:#0B0E12;font-weight:800;font-size:11px;letter-spacing:.8px;border-radius:9px;padding:9px 10px}
#tax .tx-top h2{margin:0;font-size:16px;flex:1}
#tax .tx-top select{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:7px 10px;font:inherit;font-size:13px}
#tax .tx-top select option{color:#111}
#tax[dir=ltr] .arw svg{transform:scaleX(-1)}
@media (max-width:720px){#tax[dir=ltr] .arw{transform:rotate(90deg)}#tax[dir=ltr] .arw svg{transform:none}}
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

const LG = () => { const l = typeof lang === "undefined" ? "ar" : lang; return l === "en" || l === "zh" ? l : "ar"; };
const LI = () => ({ar: 0, en: 1, zh: 2})[LG()];
const U = (k, ...a) => UI[k][LI()].replace(/\{(\d)\}/g, (_, i) => a[+i]);
const TP = t => t[LG()] || t.ar;
const E = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const F = n => Math.round(n).toLocaleString("en-US");
const M = n => LG() === "ar" ? `${F(n)} ج` : LG() === "zh" ? `${F(n)} 埃镑` : `EGP ${F(n)}`;

/* ---------------- سلسلة القيمة المضافة التفاعلية ---------------- */
function chainHTML(){
  const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;
  return `<div class="chain" id="txc"><h3>${U("chH")}</h3>
    <p class="s">${U("chS")}</p>
    <div class="nodes">
      <div class="nd" data-n="0"><div class="who">${U("dist")}</div><b>${U("distB")}</b><div id="n0"></div></div>
      <div class="arw"><span class="dot"></span>${arrow}</div>
      <div class="nd" data-n="1"><div class="who">${U("you")}</div><b>${U("youB")}</b><div id="n1"></div></div>
      <div class="arw"><span class="dot" style="animation-delay:.9s"></span>${arrow}</div>
      <div class="nd" data-n="2"><div class="who">${U("cust")}</div><b>${U("custB")}</b><div id="n2"></div></div>
    </div>
    <div class="ctl"><span>${U("buy")}</span><input type="range" id="cb" min="3000" max="60000" step="500" value="10000"><b id="cbv" style="direction:ltr"></b></div>
    <div class="ctl"><span>${U("margin")}</span><input type="range" id="cm" min="0" max="30" step="1" value="8"><b id="cmv"></b></div>
    <div class="tot" id="ctot"></div>
    <div class="ctl" style="margin-top:10px"><label style="display:flex;gap:8px;align-items:center;cursor:pointer"><input type="checkbox" id="cnf"> ${U("noInv")}</label></div>
  </div>`;
}
function wireChain(){
  const b = document.getElementById("cb"), m = document.getElementById("cm"), nf = document.getElementById("cnf"); if (!b) return;
  const ln = (k, v, c = "") => `<div class="ln ${c}"><span>${k}</span><span style="direction:ltr">${v}</span></div>`;
  const run = () => {
    const buy = +b.value, mg = +m.value / 100, sell = buy * (1 + mg), noInv = nf.checked;
    const inV = noInv ? 0 : buy * .14, outV = sell * .14, pay = outV - inV;
    document.getElementById("cbv").textContent = "EGP " + F(buy); document.getElementById("cmv").textContent = m.value + "%";
    document.getElementById("n0").innerHTML = ln(U("price"), F(buy)) + ln(U("vat14"), "+" + F(buy * .14), "o") + ln(U("distPays"), F(buy * .14), "p");
    document.getElementById("n1").innerHTML = ln(U("sellAt"), F(sell)) + ln(U("collect"), "+" + F(outV), "o") +
      ln(noInv ? U("noDeduct") : U("deduct"), "−" + F(inV), "i") + ln(U("youPay"), F(pay), "p");
    document.getElementById("n2").innerHTML = ln(U("pays"), F(sell + outV), "p") + ln(U("ofTax"), F(outV));
    document.getElementById("ctot").innerHTML = noInv ? U("totNo", M(buy * .14), M(pay), M(sell * mg * .14)) : U("totOk", M(pay), M(sell - buy), M(outV));
    document.querySelectorAll("#txc .nd").forEach(n => n.classList.toggle("on", n.dataset.n === "1"));
  };
  [b, m, nf].forEach(x => x.addEventListener("input", run)); run();
}

/* ---------------- الحاسبات ---------------- */
const pct = v => (v * 100).toLocaleString("en-US", {maximumFractionDigits: 2}) + "%";
function calcHTML(k){
  if (k === "vat") return `<div class="cl" id="cl"><h4>${U("cVat")}</h4>
    <div class="tg2"><button data-m="ex" class="on">${U("exV")}</button><button data-m="in">${U("inV")}</button></div>
    <label>${U("amt")}</label><input type="number" id="ca" value="10000" min="0" inputmode="decimal"><div class="rs" id="cr"></div></div>`;
  if (k === "simple") return `<div class="cl" id="cl"><h4>${U("cSim")}</h4>
    <label>${U("turn")}</label><input type="number" id="ca" value="4000000" min="0" inputmode="decimal">
    <div class="tier" id="ct">${SIMPLE.map((s, i) => `<div><b>${pct(s[1])}</b>${SIMPLE_LBL[LG()][i]}</div>`).join("")}</div><div class="rs" id="cr"></div></div>`;
  if (k === "incent") return `<div class="cl" id="cl"><h4>${U("cInc")}</h4>
    <label>${U("incAmt")}</label><input type="number" id="ca" value="100000" min="0" inputmode="decimal"><div class="rs" id="cr"></div></div>`;
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
      r.innerHTML = box(U("before"), F(net)) + box(U("tax14"), F(vat), 1) + box(U("total"), F(net + vat));
    } else if (k === "simple") {
      const i = SIMPLE.findIndex(s => v < s[0]);
      document.querySelectorAll("#ct div").forEach((d, j) => d.classList.toggle("on", j === i));
      r.innerHTML = i < 0 ? `<div style="grid-column:1/-1"><span>${U("over")}</span><b style="font-size:14px">${U("overB")}</b></div>`
        : box(U("bracket"), SIMPLE_LBL[LG()][i]) + box(U("rate"), pct(SIMPLE[i][1])) + box(U("yearly"), M(v * SIMPLE[i][1]), 1) + box(U("monthly"), M(v * SIMPLE[i][1] / 12));
    } else {
      r.innerHTML = box(U("incT"), F(v)) + box(U("incNet"), F(v / 1.14)) + box(U("incVat"), M(v / 1.14 * .14), 1);
    }
  };
  a.addEventListener("input", run);
  document.querySelectorAll("#cl .tg2 button").forEach(bt => bt.onclick = () => { mode = bt.dataset.m; document.querySelectorAll("#cl .tg2 button").forEach(x => x.classList.toggle("on", x === bt)); run(); });
  run();
}

/* ---------------- الواجهة ---------------- */
const root = document.createElement("section"); root.id = "tax"; root.className = "hide"; root.setAttribute("aria-label", "tax guide");
document.body.appendChild(root);
let fc = "", q = "", curId = null;
const norm = s => String(s || "").toLowerCase().replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي");
function dir(){ root.dir = LG() === "ar" ? "rtl" : "ltr"; root.style.direction = root.dir; root.lang = LG() === "zh" ? "zh-CN" : LG(); }
function shell(){
  dir();
  root.innerHTML = `<div class="tx-top"><span class="mk">REALME</span><h2>${U("title")}</h2><select class="lang" aria-label="Language"><option value="ar">عربي</option><option value="en">EN</option><option value="zh">中文</option></select><button class="x" id="txx" aria-label="${E(U("close"))}">✕</button></div>
  <div class="wrap"><div class="list">
    <h1>${U("h1")}</h1>
    <p class="lead">${U("lead")}</p>
    ${chainHTML()}
    <div class="tx-f"><input type="search" id="txq" placeholder="${E(U("search"))}" value="${E(q)}">
      <div class="chs" id="txs">${CATS.map(c => `<button data-c="${c[0]}" class="${c[0] === fc ? "on" : ""}">${E(c[1 + LI()])}</button>`).join("")}</div></div>
    <div class="grid" id="txg"></div>
    <div class="note">${U("note")}</div>
  </div><div class="td" id="txd"></div></div>`;
  root.querySelector("select.lang").value = LG();
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
  // البحث بيدوّر في اللغات التلاتة — تكتب «invoice» أو «فاتورة» أو «发票» تلاقي نفس الموضوع
  const hay = t => norm(["ar", "en", "zh"].map(l => { const x = t[l]; return [x.t, x.s, ...x.body, ...x.doo, ...x.dont].join(" "); }).join(" "));
  const list = TOPICS.filter(t => (!fc || t.cat === fc) && (!nq || hay(t).includes(nq)));
  const cn = k => (CATS.find(c => c[0] === k) || [])[1 + LI()] || "";
  root.querySelector("#txg").innerHTML = list.length ? list.map(t => { const x = TP(t); return `<button class="tc" data-id="${t.id}" style="--ac:${t.ac}">
      ${t.calc ? `<span class="calcb">${U("calcTag")}</span>` : ""}<span class="ic">${ico(t.ic)}</span><h3>${E(x.t)}</h3><div class="s">${E(x.s)}</div><div class="ct">${E(cn(t.cat))}</div></button>`; }).join("")
    : `<div style="color:#7C8796;padding:30px 0">${E(U("none"))}</div>`;
}
function detail(id){
  const t = TOPICS.find(x => x.id === id); if (!t) return;
  curId = id; const x = TP(t);
  root.querySelector("#txd").innerHTML = `<button class="back" id="txb">${U("back")}</button>
    <div class="th" style="--ac:${t.ac}"><span class="ic">${ico(t.ic, 38)}</span><div><h1>${E(x.t)}</h1><p>${E(x.s)}</p></div></div>
    <div class="txbody">${x.body.map(p => `<p>${E(p)}</p>`).join("")}</div>
    ${t.calc ? calcHTML(t.calc) : ""}
    <div class="dd" style="margin-top:16px"><div class="y"><h4>${U("doH")}</h4><ul>${x.doo.map(v => `<li>${E(v)}</li>`).join("")}</ul></div>
      <div class="n"><h4>${U("dontH")}</h4><ul>${x.dont.map(v => `<li>${E(v)}</li>`).join("")}</ul></div></div>
    <div class="note">${U("noteS")}</div>`;
  root.querySelector("#txb").onclick = () => { curId = null; root.classList.remove("detail"); root.scrollTo(0, 0); };
  if (t.calc) wireCalc(t.calc);
  root.classList.add("detail"); root.scrollTo(0, 0);
  try { history.replaceState(null, "", "#tax/" + id); } catch (e) {}
}
function open(id){ shell(); root.classList.remove("hide"); document.body.style.overflow = "hidden"; if (id) detail(id); else try { history.replaceState(null, "", "#tax"); } catch (e) {} }
function close(){ curId = null; root.classList.add("hide"); root.classList.remove("detail"); document.body.style.overflow = ""; try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
window.openTaxGuide = open;
document.addEventListener("click", e => { const b = e.target.closest("[data-open-tax]"); if (b) { e.preventDefault(); open(); } });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !root.classList.contains("hide")) { root.classList.contains("detail") ? (curId = null, root.classList.remove("detail")) : close(); } });
// تغيير اللغة من القايمة اللي فوق ← الدليل يتكتب تاني باللغة الجديدة
document.addEventListener("change", e => { if (e.target.matches && e.target.matches("select.lang") && !root.classList.contains("hide")) setTimeout(() => { const id = curId; shell(); if (id) detail(id); }, 0); });
const h = location.hash.match(/^#tax(?:\/(\w+))?/); if (h) open(h[1]);
})();
