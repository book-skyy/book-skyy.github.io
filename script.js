const content = {
  zh: {
    brandName: "于书天",
    brandSub: "AI · Robotics · Data",
    navProjects: "项目",
    navResearch: "研究兴趣",
    navSkills: "技能",
    navContact: "联系",
    heroEyebrow: "中国科学技术大学 · 大数据科学与技术",
    heroTitle: "面向具身智能与自主导航的 AI 工程实践者",
    heroLead:
      "我关注机器人在复杂环境中的感知、决策与部署，正在寻找人工智能、机器人、数据工程相关实习与科研合作机会。",
    viewProjects: "查看项目",
    downloadCv: "下载简历",
    downloadDeck: "项目介绍",
    profileName: "于书天 / Yushutian",
    profileInfo: "中国科学技术大学 · 预计 2027 年毕业",
    researchEyebrow: "Research Direction",
    researchTitle: "研究兴趣",
    researchIntro: "我希望围绕具身智能、四足机器人和大模型多模态融合开展进一步研究。",
    projectsEyebrow: "Selected Work",
    projectsTitle: "代表项目",
    projectsIntro: "从仿真导航、机器人部署到搜索系统与机器学习模型，项目覆盖研究原型与工程实现。",
    skillsEyebrow: "Technical Stack",
    skillsTitle: "技术能力",
    skillProgramming: "编程与数据",
    skillAi: "机器学习与机器人",
    skillTools: "工程工具",
    contactEyebrow: "Open to Opportunities",
    contactTitle: "欢迎联系我交流实习、科研与项目合作",
    contactIntro: "如果我的方向与你的团队或课题组契合，欢迎通过邮件或 GitHub 与我联系。",
    footerText: "© 2026 于书天. Built for GitHub Pages.",
    stats: [
      ["USTC", "本科院校"],
      ["2027", "预计毕业"],
      ["3.41/4.3", "GPA"],
      ["36/70", "专业排名"],
    ],
    focus: [
      {
        title: "具身智能与四足机器人",
        text: "探索机器人在复杂未知环境下的自主感知、决策与鲁棒导航能力。",
      },
      {
        title: "大模型与多模态融合",
        text: "关注视觉、语言与动作的融合机制，以及大规模预训练模型在具身智能中的应用。",
      },
      {
        title: "学习型自主导航",
        text: "从传统模块化导航向端到端学习方法演进，重视仿真到真实场景的部署验证。",
      },
    ],
    projects: [
      {
        title: "四旋翼无人机路径规划",
        period: "2025.06 - 2026.01",
        summary:
          "基于 Gazebo 与 ROS 构建仿真数据采集流程，训练神经网络预测加速度指令，实现从环境状态到控制输出的端到端映射。",
        bullets: [
          "采集无人机速度、位姿、激光雷达点云和障碍物分布等多维状态信息。",
          "使用当前帧与历史帧拼接作为时序输入，结合 MSE 损失、学习率衰减和早停机制训练模型。",
          "在随机障碍物场景中验证自主避障与轨迹跟踪能力，并分析复杂场景下的泛化局限。",
        ],
        tags: ["Python", "ROS", "Gazebo", "Neural Network", "Path Planning"],
      },
      {
        title: "四足机器人导航部署",
        period: "2025",
        summary:
          "基于宇树 B2 四足机器人与激光雷达完成实验室场景导航部署，验证结构化室内环境中的自主导航能力。",
        bullets: [
          "在 3C119 室内外环境建立激光雷达点云地图，完成机器人本机与 Docker 的通信配置。",
          "开展目标点全局路径跟踪、动态障碍物避障和导航参数优化实验。",
          "为后续未知环境下的端到端导航研究建立真实平台验证基础。",
        ],
        tags: ["Quadruped Robot", "LiDAR", "Docker", "Navigation", "Deployment"],
      },
      {
        title: "校内全模态搜索引擎",
        period: "2025.11 - 2025.12",
        summary:
          "面向校内站点信息检索，构建爬虫、分布式存储、倒排索引与大语言模型摘要生成流程。",
        bullets: [
          "基于 BFS 爬虫抓取 68+ 校内站点数据，并设计 HBase 分布式存储架构。",
          "使用 jieba 与 TF-IDF 构建倒排索引系统，提升检索效率。",
          "集成 LLM API 生成搜索结果智能摘要，增强检索结果可读性。",
        ],
        tags: ["Python", "Flask", "HBase", "Scrapy", "TF-IDF", "LLM API"],
      },
      {
        title: "校园餐饮推荐平台“蜗壳吃啥”",
        period: "2025.04 - 2025.05",
        summary:
          "基于 Flask 与 MySQL 构建校园餐饮推荐系统，实现菜品查询、评分和个性化推荐。",
        bullets: [
          "独立设计 MySQL 数据库表结构，开发后端 RESTful API 与前端交互页面。",
          "优化 SQL 查询效率，完成前后端分离的数据交互流程。",
          "实现菜品查询、用户评分与协同过滤推荐等核心功能。",
        ],
        tags: ["Python", "Flask", "MySQL", "RESTful API", "Full-stack"],
      },
      {
        title: "基于神经网络的玻璃分类模型",
        period: "2025.12 - 2026.01",
        summary:
          "在标准玻璃数据集上手动实现全连接神经网络训练流程，测试集分类准确率达到 85%+。",
        bullets: [
          "完成数据清洗、特征归一化与 8:2 训练/测试集划分。",
          "纯 Python 实现前向传播、Sigmoid 激活和基于链式法则的反向传播。",
          "通过调整网络结构、学习率和迭代次数优化模型表现。",
        ],
        tags: ["Python", "NumPy", "Gradient Descent", "Neural Network"],
      },
    ],
    tags: {
      programming: ["C/C++", "Python", "SQL", "Data Analysis", "Database Design"],
      ai: ["PyTorch", "CNN", "Deep Learning", "Neural Networks", "Mathematical Modeling"],
      tools: ["Git", "Linux", "LaTeX", "Docker", "Flask", "MySQL", "HBase"],
    },
  },
  en: {
    brandName: "Yushutian",
    brandSub: "AI · Robotics · Data",
    navProjects: "Projects",
    navResearch: "Research",
    navSkills: "Skills",
    navContact: "Contact",
    heroEyebrow: "University of Science and Technology of China · Big Data Science and Technology",
    heroTitle: "AI engineering learner focused on embodied intelligence and autonomous navigation",
    heroLead:
      "I work across robot perception, decision-making, deployment, and data-driven systems, and I am seeking internship and research opportunities in AI, robotics, and data engineering.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    downloadDeck: "Project deck",
    profileName: "Yushutian / Yu Shutian",
    profileInfo: "USTC · Expected graduation in 2027",
    researchEyebrow: "Research Direction",
    researchTitle: "Research Interests",
    researchIntro:
      "I hope to further explore embodied intelligence, quadruped robots, and multimodal foundation models.",
    projectsEyebrow: "Selected Work",
    projectsTitle: "Selected Projects",
    projectsIntro:
      "My work spans simulation-based navigation, robot deployment, search systems, and machine learning prototypes.",
    skillsEyebrow: "Technical Stack",
    skillsTitle: "Technical Skills",
    skillProgramming: "Programming and Data",
    skillAi: "Machine Learning and Robotics",
    skillTools: "Engineering Tools",
    contactEyebrow: "Open to Opportunities",
    contactTitle: "Open to internships, research collaboration, and project conversations",
    contactIntro:
      "If my interests fit your team or lab, feel free to reach out via email or GitHub.",
    footerText: "© 2026 Yushutian. Built for GitHub Pages.",
    stats: [
      ["USTC", "University"],
      ["2027", "Expected graduation"],
      ["3.41/4.3", "GPA"],
      ["36/70", "Major rank"],
    ],
    focus: [
      {
        title: "Embodied intelligence and quadruped robots",
        text: "Exploring autonomous perception, decision-making, and robust navigation in complex unknown environments.",
      },
      {
        title: "Foundation models and multimodal fusion",
        text: "Studying vision-language-action fusion and the potential of large pretrained models for embodied agents.",
      },
      {
        title: "Learning-based autonomous navigation",
        text: "Moving from modular navigation pipelines toward end-to-end learning methods with simulation and real-world validation.",
      },
    ],
    projects: [
      {
        title: "Quadrotor Path Planning",
        period: "2025.06 - 2026.01",
        summary:
          "Built a Gazebo and ROS simulation data pipeline, then trained a neural network to predict acceleration commands from environment states.",
        bullets: [
          "Collected multi-dimensional states including velocity, pose, LiDAR point clouds, and obstacle distributions.",
          "Used current and historical frames as temporal inputs with MSE loss, learning-rate scheduling, and early stopping.",
          "Validated obstacle avoidance and trajectory tracking in randomized scenes while analyzing generalization limits in complex settings.",
        ],
        tags: ["Python", "ROS", "Gazebo", "Neural Network", "Path Planning"],
      },
      {
        title: "Quadruped Robot Navigation Deployment",
        period: "2025",
        summary:
          "Deployed an indoor navigation system on a Unitree B2 quadruped robot with LiDAR and verified autonomous navigation in structured environments.",
        bullets: [
          "Built LiDAR point-cloud maps for the 3C119 lab environment and configured robot-to-Docker communication.",
          "Ran global path following, dynamic obstacle avoidance, and parameter optimization experiments.",
          "Established a physical platform foundation for future end-to-end navigation in unknown environments.",
        ],
        tags: ["Quadruped Robot", "LiDAR", "Docker", "Navigation", "Deployment"],
      },
      {
        title: "Campus Multimodal Search Engine",
        period: "2025.11 - 2025.12",
        summary:
          "Developed a search workflow combining crawling, distributed storage, inverted indexing, and LLM-generated summaries for campus websites.",
        bullets: [
          "Crawled 68+ campus sites with a BFS crawler and designed an HBase distributed storage architecture.",
          "Built an inverted index with jieba and TF-IDF to improve retrieval efficiency.",
          "Integrated an LLM API to generate readable summaries for search results.",
        ],
        tags: ["Python", "Flask", "HBase", "Scrapy", "TF-IDF", "LLM API"],
      },
      {
        title: "Campus Dining Recommendation Platform",
        period: "2025.04 - 2025.05",
        summary:
          "Built a Flask and MySQL full-stack platform for dish search, ratings, and personalized campus dining recommendations.",
        bullets: [
          "Designed the MySQL schema and developed RESTful backend APIs with frontend interactions.",
          "Optimized SQL queries and completed the frontend-backend data flow.",
          "Implemented dish lookup, user ratings, and collaborative filtering recommendations.",
        ],
        tags: ["Python", "Flask", "MySQL", "RESTful API", "Full-stack"],
      },
      {
        title: "Neural Network Glass Classification Model",
        period: "2025.12 - 2026.01",
        summary:
          "Implemented a fully connected neural network from scratch on a glass dataset and achieved 85%+ test accuracy.",
        bullets: [
          "Completed data cleaning, feature normalization, and an 8:2 train-test split.",
          "Implemented forward propagation, Sigmoid activation, and chain-rule backpropagation in pure Python.",
          "Improved performance through network architecture, learning rate, and iteration tuning.",
        ],
        tags: ["Python", "NumPy", "Gradient Descent", "Neural Network"],
      },
    ],
    tags: {
      programming: ["C/C++", "Python", "SQL", "Data Analysis", "Database Design"],
      ai: ["PyTorch", "CNN", "Deep Learning", "Neural Networks", "Mathematical Modeling"],
      tools: ["Git", "Linux", "LaTeX", "Docker", "Flask", "MySQL", "HBase"],
    },
  },
};

const elements = {
  stats: document.querySelector("#stats"),
  focusGrid: document.querySelector("#focusGrid"),
  projectGrid: document.querySelector("#projectGrid"),
  langLabel: document.querySelector("[data-lang-label]"),
  langButton: document.querySelector(".lang-switch"),
  tagRows: document.querySelectorAll("[data-tags]"),
};

const savedLang = localStorage.getItem("siteLang");
let currentLang = savedLang === "en" || savedLang === "zh" ? savedLang : "zh";

function setText(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = content[lang][key];
  });
  elements.langLabel.textContent = lang === "zh" ? "EN" : "中";
}

function renderStats(lang) {
  elements.stats.innerHTML = content[lang].stats
    .map(
      ([value, label]) => `
        <div class="stat-card">
          <strong>${value}</strong>
          <span>${label}</span>
        </div>
      `
    )
    .join("");
}

function renderFocus(lang) {
  elements.focusGrid.innerHTML = content[lang].focus
    .map(
      (item, index) => `
        <article class="focus-card">
          <span class="index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderProjects(lang) {
  elements.projectGrid.innerHTML = content[lang].projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-top">
            <h3>${project.title}</h3>
            <span class="project-period">${project.period}</span>
          </div>
          <p>${project.summary}</p>
          <ul>
            ${project.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
          <div class="tag-row">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderTags(lang) {
  elements.tagRows.forEach((row) => {
    const key = row.dataset.tags;
    row.innerHTML = content[lang].tags[key].map((tag) => `<span class="tag">${tag}</span>`).join("");
  });
}

function render(lang) {
  setText(lang);
  renderStats(lang);
  renderFocus(lang);
  renderProjects(lang);
  renderTags(lang);
  localStorage.setItem("siteLang", lang);
}

elements.langButton.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  render(currentLang);
});

render(currentLang);
