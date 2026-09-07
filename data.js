/* ============================================================================
 * 三叶 Trefoil Group —— 站点内容数据
 * ----------------------------------------------------------------------------
 * 这是全站唯一需要编辑的内容文件。所有文字都是 { zh, en } 双语对象。
 * 新增一个研究项目 / 一位合作学者 / 一家合作机构，只需在对应数组里加一个对象。
 * 带 TODO 标记的地方是需要补充或确认的信息。
 * ========================================================================== */

window.SITE = {

  /* --------------------------------------------------------------------------
   * 1. 站点基础信息
   * ------------------------------------------------------------------------ */
  meta: {
    title: {
      zh: "三叶 Trefoil Group · 云南大学",
      en: "Trefoil Group · Yunnan University"
    },
    description: {
      zh: "三叶（Trefoil Group），依托云南大学软件学院人工智能学院、云南省软件工程重点实验室。研究方向包括智慧医疗、医学影像、物理智能、机器学习、AI 驱动的分子设计、计算生物、人机交互与可视化，以及软件平台。",
      en: "Trefoil Group is based at the School of Software and Artificial Intelligence, Yunnan University, and the Yunnan Key Laboratory of Software Engineering. Research areas span intelligent healthcare, medical imaging, physical AI, machine learning, AI-driven molecular design, computational biology, interaction and visualisation, and software platforms."
    }
  },

  /* --------------------------------------------------------------------------
   * 2. 界面文案（key → 中英文）
   * ------------------------------------------------------------------------ */
  i18n: {
    "brand.name":        { zh: "三叶",         en: "Trefoil Group" },
    "brand.sub":         { zh: "Trefoil Group", en: "三叶" },

    "nav.home":          { zh: "首页",     en: "Home" },
    "nav.about":         { zh: "关于",     en: "About" },
    "nav.areas":         { zh: "研究方向", en: "Research" },
    "nav.projects":      { zh: "研究项目", en: "Projects" },
    "nav.team":          { zh: "成员",     en: "Members" },
    "nav.partners":      { zh: "合作伙伴", en: "Partners" },
    "nav.openings":      { zh: "加入与合作", en: "Join & collaborate" },
    "nav.join":          { zh: "联系",     en: "Contact" },
    "nav.menu":          { zh: "菜单",     en: "Menu" },
    "nav.lang":          { zh: "EN",       en: "中文" },
    "nav.langLabel":     { zh: "切换到英文", en: "Switch to Chinese" },
    "nav.themeLabel":    { zh: "切换深色 / 浅色主题", en: "Toggle dark / light theme" },

    "hero.eyebrow":      { zh: "云南大学软件学院人工智能学院 · 云南省软件工程重点实验室",
                           en: "School of Software and Artificial Intelligence, Yunnan University · Yunnan Key Laboratory of Software Engineering" },
    "hero.tagline":      { zh: "人工智能与交叉学科研究",
                           en: "Artificial intelligence and interdisciplinary research" },
    "hero.lead":         { zh: "依托云南大学软件学院人工智能学院、云南省软件工程重点实验室，由校内与校外的合作伙伴共同发起。",
                           en: "Based at the School of Software and Artificial Intelligence, Yunnan University, and the Yunnan Key Laboratory of Software Engineering. Founded jointly with partners inside and outside the university." },
    "hero.cta1":         { zh: "研究方向", en: "Research areas" },
    "hero.cta2":         { zh: "联系我们", en: "Contact us" },
    "hero.figCaption":   { zh: "三叶结，名称的来源",
                           en: "The trefoil knot, which the group is named after" },

    "about.title":       { zh: "关于三叶", en: "About Trefoil Group" },
    "about.p1":          { zh: "三叶（Trefoil Group）依托云南大学软件学院人工智能学院与云南省软件工程重点实验室，由校内与校外合作者共同发起。研究方向包括智慧医疗、医学影像、物理智能、机器学习、AI 驱动的分子设计、计算生物、人机交互与可视化，以及软件平台。成员的学科背景各不相同，研究多与三甲医院的临床团队及境内外高校的研究者共同开展。",
                           en: "Trefoil Group is based in the School of Software and Artificial Intelligence at Yunnan University and the Yunnan Key Laboratory of Software Engineering, founded jointly by colleagues inside and outside it. Our research covers intelligent healthcare, medical imaging, physical AI, machine learning, AI-driven molecular design, computational biology, interaction and visualisation, and software platforms. Our members come from a range of disciplines, and most of the work is done together with clinical teams at tertiary hospitals and with researchers at universities in China and abroad." },
    "about.p2":          { zh: "课题组依托云南大学软件学院人工智能学院与云南省软件工程重点实验室，由校内与校外合作者共同发起。目前与医院、高校及企业开展合作，将方法用于具体问题。",
                           en: "The group is based in the School of Software and Artificial Intelligence at Yunnan University and the Yunnan Key Laboratory of Software Engineering, and was founded jointly by partners inside and outside the university. We work with hospitals, universities and industry, applying our methods to concrete problems." },
    "about.p3":          { zh: "课题组正在组建中，欢迎感兴趣的同学和研究者来信联系。",
                           en: "The group is still taking shape. Interested students and researchers are welcome to write to us." },

    "areas.title":       { zh: "研究方向", en: "Research areas" },
    "areas.lead":        { zh: "以下方向彼此并列，不分主次。清单之外的题目，也欢迎提出来讨论。",
                           en: "The areas below stand alongside one another, none of them subordinate. Topics beyond the list are welcome too." },

    "projects.title":    { zh: "研究项目", en: "Projects" },
    "projects.lead":     { zh: "课题组正在开展的项目。",
                           en: "Projects the group is currently working on." },
    "projects.tbd":      { zh: "待补充", en: "To be added" },
    "projects.tbdNote":  { zh: "此处预留项目卡片位置。在 data.js 的 projects 数组中添加一个对象即可。",
                           en: "A placeholder slot. Add an object to the projects array in data.js to fill it." },

    "team.title":        { zh: "课题组成员", en: "Group members" },

    "openings.lead":     { zh: "课题组长期招收学生，并欢迎与校外机构建立合作。",
                           en: "We take on students on an ongoing basis and welcome collaborations with outside organisations." },
    "openings.students": { zh: "招募", en: "Openings for students" },
    "openings.studentsNote": { zh: "来信请附个人简历。", en: "Please attach your CV." },
    "openings.collab":   { zh: "寻求合作", en: "Seeking collaboration" },
    "openings.collabNote": { zh: "来信请简要说明合作设想及可提供的条件。",
                             en: "Please briefly describe the collaboration you have in mind and what you can offer." },

    "partners.title":    { zh: "合作伙伴", en: "Partners" },
    "partners.people":   { zh: "合作学者", en: "Collaborating researchers" },
    "partners.orgs":     { zh: "合作机构与团队", en: "Partner institutions and teams" },

    "join.title":        { zh: "联系我们", en: "Contact us" },
    "join.lead":         { zh: "以上各项及其他事宜，均可直接来信联系。",
                           en: "For any of the above, or other matters, please email us directly." },
    "join.write":        { zh: "来信", en: "Email us" },
    "join.affilLabel":   { zh: "依托单位", en: "Based at" },
    "join.wechatLabel":  { zh: "公众号", en: "WeChat" },
    "join.emailLabel":   { zh: "邮箱", en: "Email" },
    "join.addrLabel":    { zh: "地址", en: "Address" },
    "join.siteLabel":    { zh: "主页", en: "Homepage" },
    "map.credit":        { zh: "地图数据 © OpenStreetMap 贡献者", en: "Map data © OpenStreetMap contributors" },

    "footer.links":      { zh: "快速链接", en: "Quick links" },
    "footer.affil":      { zh: "云南大学软件学院人工智能学院 · 云南省软件工程重点实验室",
                           en: "School of Software and Artificial Intelligence, Yunnan University · Yunnan Key Laboratory of Software Engineering" },
    "footer.rights":     { zh: "三叶 Trefoil Group", en: "Trefoil Group" },
    "footer.top":        { zh: "返回顶部", en: "Back to top" },
    "footer.contact":    { zh: "联系", en: "Contact" },
    "footer.icp":        { zh: "", en: "" },

    "sec.about":         { zh: "我们是谁，做什么，依托哪里。", en: "Who we are, what we do, where we sit." },
    "sec.areas":         { zh: "八个方向，彼此并列，不分主次。", en: "Eight areas, listed side by side, none above another." },
    "sec.team":          { zh: "四位成员，学科背景各不相同。", en: "Four members, from different disciplines." },
    "sec.partners":      { zh: "具名的合作研究者与临床合作者。", en: "Named research and clinical collaborators." },
    "sec.openings":      { zh: "招收学生，也寻求机构合作。", en: "Taking on students, and seeking partners." },
    "sec.contact":       { zh: "来信、地址与公众号。", en: "Email, address and WeChat." },
    "sec.hero":          { zh: "云南大学 · 昆明", en: "Yunnan University · Kunming" },
    "common.tbd":        { zh: "待补充", en: "To be added" }
  },

  /* --------------------------------------------------------------------------
   * 3. 研究方向（平铺列表，顺序即页面显示顺序）
   * ------------------------------------------------------------------------ */
  areas: [
    {
      name: { zh: "智慧医疗", en: "Intelligent healthcare" },
      desc: { zh: "多源临床记录的治理与融合，涵盖病历字段可信度评估、疾病风险与复发预测、科室决策支持以及真实世界研究。",
              en: "Governance and integration of multi-source clinical records, covering reliability assessment of record fields, prediction of disease risk and recurrence, decision support usable at the department level, and real-world evidence studies." }
    },
    {
      name: { zh: "医学影像", en: "Medical imaging" },
      desc: { zh: "面向临床的影像分析与重建，涵盖超声三维重建、影像分割、成像反问题以及分割结果到有限元网格的流水线。",
              en: "Analysis and reconstruction of clinical images, covering three-dimensional ultrasound reconstruction, image segmentation, imaging inverse problems, and pipelines that turn segmentations into finite element meshes." }
    },
    {
      name: { zh: "物理智能", en: "Physical AI" },
      desc: { zh: "物理规律进入模型的智能方法，涵盖物理信息神经网络、偏微分方程求解与加速、算子学习以及代理模型。",
              en: "Methods that carry physical laws inside the model, covering physics-informed neural networks, the solution and acceleration of partial differential equations, operator learning, and surrogate models." }
    },
    {
      name: { zh: "机器学习", en: "Machine learning" },
      desc: { zh: "各方向共用的方法研究，涵盖表示学习、生成模型、小样本学习、不确定性建模以及机器学习驱动的量化研究。",
              en: "Method research shared across the other areas, covering representation learning, generative models, few-shot learning, uncertainty modelling, and machine-learning-driven quantitative research." }
    },
    {
      name: { zh: "AI 驱动的分子设计", en: "AI-driven molecular design" },
      desc: { zh: "面向生物药与诊断的生成式分子设计，涵盖蛋白质序列与结构设计、抗体表位识别以及亲和力与稳定性预测。",
              en: "Generative molecular design for biologics and diagnostics, covering the design of protein sequences and structures, antibody epitope identification, and prediction of affinity and stability." }
    },
    {
      name: { zh: "计算生物", en: "Computational biology" },
      desc: { zh: "生物数据的建模与分析，涵盖蛋白质语言模型、生物序列建模、序列功能预测以及组学数据的特征与标志物分析。",
              en: "Modelling and analysis of biological data, covering protein language models, biological sequence modelling, sequence-function prediction, and the analysis of features and markers in omics data." }
    },
    {
      name: { zh: "人机交互与可视化", en: "Interaction and visualisation" },
      desc: { zh: "人与智能系统的交互设计与可视化，涵盖面向医生与患者的界面、虚拟代理以及三维与沉浸式交互。",
              en: "Interaction design and visualisation for intelligent systems, covering interfaces for clinicians and patients, virtual agents, and three-dimensional and immersive interaction." }
    },
    {
      name: { zh: "软件平台", en: "Software platforms" },
      desc: { zh: "可交付的研究与临床软件，涵盖科研工作站、检索与分析工具、移动健康应用以及数据治理到交付的流程。",
              en: "Research and clinical software built to be handed over, covering scientific workstations, retrieval and analysis tools, mobile health applications, and the path from data curation to delivery." }
    }
  ],

  /* --------------------------------------------------------------------------
   * 4. 研究项目
   * ------------------------------------------------------------------------ *
   * 添加一个项目，复制下面的模板到数组里：
   *
   *   {
   *     tag:    { zh: "简称", en: "SHORTNAME" },      // 卡片左上角标签
   *     name:   { zh: "项目全称", en: "Full project name" },
   *     desc:   { zh: "一段中文介绍。", en: "An English description." },
   *     status: { zh: "进行中", en: "Ongoing" },      // 可省略
   *     url:    "https://..."                         // 可省略，省略则卡片不可点击
   *   }
   *
   * 数组留空时，页面会显示 3 个「待补充」占位卡片。
   * ------------------------------------------------------------------------ */
  projects: [
    // TODO: 在这里填入研究项目。
  ],

  /* --------------------------------------------------------------------------
   * 5. 课题组成员
   * ------------------------------------------------------------------------ */
  team: [
    {
      name:  { zh: "米彦霖", en: "Yanlin Mi" },
      role:  { zh: "负责人", en: "Group leader" },
      affil: { zh: "云南大学软件学院人工智能学院　讲师",
               en: "Lecturer, School of Software and Artificial Intelligence, Yunnan University" },
      photo: "./imgs/yanlin.jpg",
      /* 方形裁切取景 + 缩放，用于统一各人脸在画面里的大小 */
      photoPos: "52% 0%",
      photoZoom: 1.08,
      bio:   { zh: "研究方向覆盖智慧医疗、医学影像、计算生物、机器学习、人机交互与可视化及软件平台，关注从数据治理到软件交付的完整链条。计算机科学博士毕业于爱尔兰国立科克大学，读博期间设计并开发过蛋白质结构建模与分析工作站、参数化蛋白质检索工具、面向医护的可视化问卷系统，以及面向盆腔器官脱垂的移动健康应用。",
               en: "PhD in Computer Science from University College Cork, Ireland; now on the faculty of the School of Software and Artificial Intelligence at Yunnan University. Research interests are intelligent healthcare, human-computer interaction and AI-driven protein design, with long-standing involvement in developing research and medical software platforms." },
      tags: [
        { zh: "智慧医疗", en: "Intelligent healthcare" },
        { zh: "医学影像", en: "Medical imaging" },
        { zh: "人机交互与可视化", en: "Interaction and visualisation" },
        { zh: "软件平台", en: "Software platforms" }
      ],
      links: {
        email: "miyanlin@ynu.edu.cn",
        linkedin: "https://www.linkedin.com/in/yanlinmi/?locale=en_US"
      }
    },
    {
      name:  { zh: "陈振华", en: "Zhenhua Chen" },
      role:  { zh: "成员", en: "Member" },
      affil: { zh: "南京师范大学　博士研究生（莫纳什大学联合培养）",
               en: "PhD candidate, Nanjing Normal University (joint training at Monash University)" },
      photo: "./imgs/chenzhenhua.jpg",
      photoPos: "52% 50%",
      photoZoom: 1.02,
      bio:   { zh: "研究方向为物理智能、AI 驱动的分子设计与计算机视觉。物理电子学博士研究生阶段参与多个人工智能与物理、生物医学的交叉项目。关注深度学习与计算机视觉在真实物理场景中的应用，以及 AI 在显示、成像与生命科学中的智能感知、分析与建模。",
               en: "Works on physical AI, AI-driven molecular design and computer vision. Doctoral study in physical electronics has involved several projects at the intersection of artificial intelligence, physics and biomedicine. Current interests include deep learning and computer vision in real physical settings, and AI-based sensing, analysis and modelling for displays, imaging and the life sciences." },
      tags: [
        { zh: "物理智能", en: "Physical AI" },
        { zh: "AI 抗体", en: "AI for antibodies" },
        { zh: "计算机视觉", en: "Computer vision" }
      ],
      links: {
        email: "chenzhenhua.dz@gmail.com",
        site: "https://www.chenzhenhua.xyz/"
      }
    },
    {
      name:  { zh: "陈伟", en: "Wei Chen" },
      role:  { zh: "成员", en: "Member" },
      affil: { zh: "南京师范大学", en: "Nanjing Normal University" },
      photo: "./imgs/chenwei.jpg",
      photoPos: "50% 32%",
      photoZoom: 1.38,
      bio:   { zh: "研究方向为医学影像，围绕超声三维重建与成像反问题展开。物理电子学博士研究生阶段研究图像重建、信号处理与医学图像分析，并在仿真环境中重建腔内超声的成像过程。关注物理模型与人工智能相结合的成像方法，用于医学图像的高质量重建、智能感知与分析。",
               en: "Works on medical imaging, centred on three-dimensional ultrasound reconstruction and imaging inverse problems. Doctoral study in physical electronics covers image reconstruction, signal processing and medical image analysis, including simulation of the intracavitary ultrasound imaging process. Current interests include imaging methods that pair physical models with artificial intelligence for high-quality reconstruction and analysis." },
      tags: [
        { zh: "医学影像", en: "Medical imaging" },
        { zh: "超声三维重建", en: "3D ultrasound reconstruction" },
        { zh: "成像反问题", en: "Imaging inverse problems" }
      ],
      links: {
        email: "prinlittle7@gmail.com"
      }
    },
    {
      name:  { zh: "吕曦", en: "Xi Lv" },
      role:  { zh: "成员", en: "Member" },
      /* TODO: 当前所在单位与身份待确认，暂按本科院校填写 */
      affil: { zh: "昆明理工大学　本科毕业", en: "BSc, Kunming University of Science and Technology" },
      photo: "./imgs/lvxi.jpg",
      /* 卡通头像，角色居中，不需要额外取景 */
      photoPos: "50% 50%",
      photoZoom: 1,
      bio:   { zh: "研究方向为计算生物与机器学习，包括蛋白质语言模型、生物序列建模，以及人工智能在血液透析领域应用的证据综合。计算机科学与技术专业本科毕业，此前的学习围绕机器学习在复杂系统建模与智能决策中的应用。关注数据驱动模型如何学习有效表示并支持预测与决策。",
               en: "Works on computational biology and machine learning, including protein language models, biological sequence modelling, and evidence synthesis on the use of artificial intelligence in haemodialysis. Undergraduate study in computer science and technology. Current interests include machine-learning-driven quantitative research and how data-driven models learn useful representations." },
      tags: [
        { zh: "计算生物", en: "Computational biology" },
        { zh: "蛋白质语言模型", en: "Protein language models" },
        { zh: "证据综合", en: "Evidence synthesis" }
      ],
      links: {
        email: "auroralvxi@gmail.com"
      }
    }
  ],

  /* --------------------------------------------------------------------------
   * 6. 招募
   * ------------------------------------------------------------------------ */
  openings: [
    {
      title: { zh: "硕士研究生", en: "Master's students" },
      desc:  { zh: "欢迎报考云南大学软件学院人工智能学院，研究课题涵盖上述各方向。",
               en: "For students applying to the School of Software and Artificial Intelligence at Yunnan University. Research topics are available across all the areas above." }
    },
    {
      title: { zh: "本科生科研训练", en: "Undergraduate research" },
      desc:  { zh: "大一到大四的同学都可以参加科研训练、毕业设计和学科竞赛，不要求有相关基础。",
               en: "Open to undergraduates in any year, whether for research training, a final-year project or a competition. No prior experience is needed." }
    }
  ],

  /* --------------------------------------------------------------------------
   * 6b. 寻求合作 —— 面向机构，与「招募」的受众不同
   * ------------------------------------------------------------------------ */
  collabs: [
    {
      title: { zh: "临床合作", en: "Clinical collaboration" },
      desc:  { zh: "与医院科室合作开展临床数据研究、模型验证与系统部署，并可联合申报课题。",
               en: "Working with hospital departments on clinical data studies, model validation and system deployment, with the option of joint grant applications." }
    },
    {
      title: { zh: "产业合作", en: "Industry collaboration" },
      desc:  { zh: "面向企业提供技术咨询、联合研发与横向课题合作，以上述研究领域为主。",
               en: "Technical consulting, joint development and contract research for companies, mainly within the areas listed above." }
    },
    {
      title: { zh: "学术合作", en: "Academic collaboration" },
      desc:  { zh: "与高校及科研机构开展联合研究与学术互访，可以先从一个具体问题的小规模合作开始。",
               en: "Joint research and academic visits with universities and research institutes. A small collaboration on one concrete problem is a good way to start." }
    }
  ],

  /* --------------------------------------------------------------------------
   * 7. 合作伙伴
   * ------------------------------------------------------------------------ *
   *   people : 合作学者      —— 圆形头像，以个人身份具名
   *   orgs   : 合作机构与团队 —— 圆角方形字母标，不放人脸、不列成员
   *
   * 不便具名的合作方也放进 orgs：mark 用「··」，name 只写单位类型与科室。
   * ------------------------------------------------------------------------ */
  partners: {

    /* 合作伙伴：全部是具名个人。
     * 有照片的用圆形头像；没有照片的用 mark 里的姓氏字母标，同样是圆形。
     * tags 当前不在页面上显示（业主定：合作伙伴不列研究方向），保留备用。 */
    people: [
      {
        name:  { zh: "Sabin Tabirca 教授", en: "Prof. Sabin Tabirca" },
        role:  { zh: "合作研究者", en: "Research collaborator" },
        affil: { zh: "爱尔兰国立科克大学计算机科学系",
                 en: "Department of Computer Science, University College Cork" },
        photo: "./imgs/sabin.jpeg",
        tags: [{ zh: "智慧医疗", en: "Intelligent healthcare" }, { zh: "软件平台", en: "Software platforms" }],
        links: {}
      },
      {
        name:  { zh: "Venkata Vamsi Bharadwaj Yallapragada 博士",
                 en: "Dr. Venkata Vamsi Bharadwaj Yallapragada" },
        role:  { zh: "合作研究者", en: "Research collaborator" },
        affil: { zh: "芒斯特理工大学", en: "Munster Technological University" },
        photo: "./imgs/Vamsi.jpeg",
        tags: [{ zh: "分子设计", en: "Molecular design" }, { zh: "计算生物", en: "Computational biology" }],
        links: {}
      },
      {
        name:  { zh: "Barry O'Reilly 教授", en: "Prof. Barry O'Reilly" },
        role:  { zh: "临床合作者", en: "Clinical collaborator" },
        affil: { zh: "爱尔兰国立科克大学 · 科克大学妇产医院",
                 en: "University College Cork · Cork University Maternity Hospital" },
        photo: "./imgs/barry.jpg",
        tags: [{ zh: "泌尿妇科", en: "Urogynaecology" }, { zh: "盆底重建", en: "Pelvic floor reconstruction" }],
        links: {}
      },
      {
        name:  { zh: "方克伟 教授", en: "Prof. Fang Kewei" },
        role:  { zh: "临床合作者", en: "Clinical collaborator" },
        affil: { zh: "昆明医科大学第二附属医院泌尿外科",
                 en: "Department of Urology, Second Affiliated Hospital of Kunming Medical University" },
        mark:  "方",
        tags: [{ zh: "临床数据", en: "Clinical data" }, { zh: "智慧医疗", en: "Intelligent healthcare" }],
        links: {}
      },
      {
        name:  { zh: "卢永新 副主任医师", en: "Dr. Yongxin Lu" },
        role:  { zh: "临床合作者", en: "Clinical collaborator" },
        affil: { zh: "玉溪市人民医院肾内科",
                 en: "Department of Nephrology, Yuxi People's Hospital" },
        mark:  "卢",
        tags: [{ zh: "血液透析", en: "Haemodialysis" }, { zh: "真实世界研究", en: "Real-world evidence" }],
        links: {}
      }
    ]
  },


  /* --------------------------------------------------------------------------
   * 8. 联系方式
   * ------------------------------------------------------------------------ */
  contact: {
    email: "miyanlin@ynu.edu.cn",
    /* TODO: 确认办公地址 */
    address: { zh: "云南大学呈贡校区",
               en: "Chenggong Campus, Yunnan University" },
    /* 微信公众号：name 是号名，qr 是二维码图片。号名定了改这里即可 */
    wechat: { name: { zh: "三叶Trefoil", en: "Trefoil (WeChat)" }, qr: "./imgs/code.jpg" }
    /* 个人主页 yanlinm.com 暂时无法访问，已下线。恢复后在这里加回：
     * site: "https://yanlinm.com/" */
  }
};
