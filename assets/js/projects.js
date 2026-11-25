/* =========================================================
   PROJETOS — conteúdo das abas (do mais recente para o mais antigo).
   Qualquer texto pode ser uma string simples ou { pt: "...", en: "..." }.
   Campos challenge / contributions aceitam <strong>.
   media: { src, fit, poster }
     src    → imagem (.jpg/.png/.gif) ou vídeo (.mp4/.webm); "" mostra o placeholder
     fit    → "cover" (preenche, padrão) ou "contain" (mostra inteira: banners e diagramas)
     poster → imagem exibida antes de o vídeo carregar
   repo: deixe "" para esconder o botão "Ver repositório".
   summary: resumo de uma frase, usado na linha do tempo ("Minha trajetória").
   ========================================================= */
window.PROJECTS = [
  /* ---------------------------------------------------- 6º semestre */
  {
    tab: "Índice",
    summary: { pt: "Plataforma de inteligência documental com IA para a Akaer. Atuei no back-end, com os endpoints de sugestões e o processamento de documentos, e no front-end das sugestões automáticas de metadados.", en: "AI-powered document intelligence platform for Akaer. I worked on the back-end, building the suggestion endpoints and document processing, and on the front-end of the automatic metadata suggestions." },
    period: { pt: "6º semestre · 2026", en: "6th semester · 2026" },
    name: { pt: "Índice — Plataforma de Inteligência Documental", en: "Índice — Document Intelligence Platform" },
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    partner: "Akaer",
    repo: "",
    challenge: {
      pt: "Solução de inteligência documental desenvolvida em parceria com a <strong>Akaer</strong>, referência nos setores aeroespacial, de defesa e industrial. A plataforma usa <strong>Inteligência Artificial</strong> para analisar e classificar documentos técnicos, sugerindo metadados como título, descrição, projeto, disciplina, tipo de documento e áreas relacionadas — reduzindo o trabalho manual de catalogação e as falhas decorrentes dele. O usuário revisa, edita e aplica as sugestões antes de efetivá-las.",
      en: "A document intelligence solution built in partnership with <strong>Akaer</strong>, a reference in the aerospace, defense and industrial sectors. The platform uses <strong>Artificial Intelligence</strong> to analyze and classify technical documents, suggesting metadata such as title, description, project, discipline, document type and related areas — reducing manual cataloguing work and the errors that come with it. Users review, edit and apply the suggestions before saving them."
    },
    contributions: {
      pt: "Atuei de ponta a ponta na funcionalidade de <strong>sugestões automáticas de metadados por IA</strong>. No <strong>back-end</strong>, desenvolvi os <strong>endpoints REST de sugestões</strong> consumidos pela interface e atuei no <strong>processamento dos documentos técnicos</strong> que alimenta a classificação pela IA. No <strong>front-end</strong>, apliquei as sugestões nos formulários, criei indicadores visuais para os campos preenchidos automaticamente e tratei a edição manual, removendo o indicador quando o usuário altera o campo. Também identifiquei e corrigi uma <strong>condição de concorrência</strong> entre o carregamento das sugestões e dos catálogos de dados, e participei dos testes automatizados e de integração.",
      en: "I worked end to end on the <strong>AI-driven metadata suggestions</strong> feature. On the <strong>back-end</strong>, I built the <strong>REST suggestion endpoints</strong> consumed by the interface and worked on the <strong>technical document processing</strong> that feeds the AI classification. On the <strong>front-end</strong>, I applied suggestions to the forms, built visual indicators for auto-filled fields and handled manual editing, removing the indicator when the user changes a field. I also found and fixed a <strong>race condition</strong> between loading the suggestions and the data catalogues, and took part in automated and integration testing."
    },
    media: { src: "assets/img/projects/indice.gif", fit: "cover" },
    caption: { pt: "Índice: suba o arquivo, a IA classifica", en: "Índice: upload the file, AI classifies it" },
    techs: [
      { name: { pt: "Inteligência Artificial", en: "Artificial Intelligence" }, use: { pt: "análise e classificação de documentos técnicos", en: "analysis and classification of technical documents" } },
      { name: "Groq (LLMs)", use: { pt: "geração das sugestões de título, descrição e categorias", en: "generating title, description and category suggestions" } },
      { name: "Vue.js", use: { pt: "interfaces e formulários de gestão documental", en: "document management interfaces and forms" } },
      { name: "APIs REST", use: { pt: "endpoints de sugestões no back-end, consumidos pelo front-end", en: "suggestion endpoints on the back-end, consumed by the front-end" } },
      { name: { pt: "Testes automatizados", en: "Automated tests" }, use: { pt: "validação de sugestões, indicadores e falhas", en: "validating suggestions, indicators and failures" } },
      { name: "Git e GitHub", use: { pt: "branches, Pull Requests e revisão de código", en: "branches, Pull Requests and code review" } }
    ],
    hard: [
      { name: { pt: "Endpoints REST de sugestões", en: "REST suggestion endpoints" }, detail: { pt: "Desenvolvimento, no back-end, dos endpoints responsáveis por gerar e entregar ao front-end as sugestões de metadados por IA.", en: "Building the back-end endpoints that generate the AI metadata suggestions and deliver them to the front-end." } },
      { name: { pt: "Processamento de documentos", en: "Document processing" }, detail: { pt: "Atuação nos serviços de processamento dos documentos técnicos, que preparam as informações usadas pela IA para classificar cada documento.", en: "Working on the technical document processing services, which prepare the information the AI uses to classify each document." } },
      { name: { pt: "Integração com IA e LLMs", en: "AI and LLM integration" }, detail: { pt: "Consumo dos endpoints que geram as sugestões por IA, aplicando as respostas nos formulários e tratando falhas, respostas nulas e indisponibilidade dos serviços.", en: "Consuming the endpoints that generate AI suggestions, applying the responses to the forms and handling failures, null responses and service downtime." } },
      { name: { pt: "Interfaces reativas com Vue.js", en: "Reactive interfaces with Vue.js" }, detail: { pt: "Formulários de cadastro e edição de documentos, indicadores visuais de campos sugeridos e gerenciamento dos estados de edição dos componentes.", en: "Document create/edit forms, visual indicators for suggested fields and management of component editing states." } },
      { name: { pt: "Operações assíncronas e concorrência", en: "Async operations and concurrency" }, detail: { pt: "Correção de uma condição de concorrência entre o carregamento das sugestões da IA e dos catálogos usados nos formulários, evitando inconsistências.", en: "Fixed a race condition between loading AI suggestions and the catalogues used by the forms, avoiding inconsistent data." } },
      { name: { pt: "Testes automatizados e de integração", en: "Automated and integration tests" }, detail: { pt: "Testes da aplicação das sugestões, da renderização dos indicadores, da edição manual e do comportamento dos componentes durante atualizações assíncronas.", en: "Tests for applying suggestions, rendering indicators, manual editing and component behavior during async updates." } }
    ],
    soft: [
      { name: { pt: "Comunicação e colaboração", en: "Communication and collaboration" }, detail: { pt: "Alinhamento entre o front-end, o back-end e os serviços responsáveis pelo processamento de documentos e pela geração de sugestões por IA.", en: "Aligning front-end, back-end and the services responsible for document processing and AI suggestions." } },
      { name: { pt: "Pensamento crítico e análise", en: "Critical thinking and analysis" }, detail: { pt: "Identificação de problemas de sincronização de dados, atualização de componentes e consistência das informações sugeridas automaticamente.", en: "Identifying issues with data synchronization, component updates and consistency of auto-suggested information." } },
      { name: { pt: "Autonomia e adaptabilidade", en: "Autonomy and adaptability" }, detail: { pt: "Proatividade na resolução de problemas e na melhoria da experiência do usuário, além da adaptação a novos conceitos como IA aplicada a aplicações web.", en: "Proactively solving problems and improving user experience, while adapting to new concepts such as AI applied to web apps." } }
    ]
  },

  /* ---------------------------------------------------- 5º semestre */
  {
    tab: "SCARS",
    summary: { pt: "Solução de BI e Data Warehouse com a SIATT para acompanhar os custos estratégicos de projetos, com indicadores de saúde financeira.", en: "BI and Data Warehouse solution with SIATT to track strategic project costs, with financial health indicators." },
    period: { pt: "5º semestre · 2026", en: "5th semester · 2026" },
    name: { pt: "SCARS — Sistema de Controle e Acompanhamento de Recursos", en: "SCARS — Resource Control and Tracking System" },
    role: { pt: "Desenvolvedor (Dados e BI)", en: "Developer (Data & BI)" },
    partner: "SIATT",
    repo: "https://github.com/Steam-Ducks/strategic-cost-analytics",
    challenge: {
      pt: "Desenvolvido pela equipe Steam Ducks em parceria com a <strong>SIATT</strong> (Sistemas Integrados de Alto Teor Tecnológico) para apoiar o acompanhamento dos custos estratégicos de projetos. A solução consolida materiais, horas técnicas, projetos, programas e indicadores orçamentários usando <strong>Business Intelligence e Data Warehouse</strong>, permitindo análises históricas e multidimensionais por tempo, programa, projeto, material, colaborador e situação financeira.",
      en: "Built by the Steam Ducks team in partnership with <strong>SIATT</strong> (a Brazilian high-technology defense company) to support tracking of strategic project costs. The solution consolidates materials, technical hours, projects, programs and budget indicators using <strong>Business Intelligence and a Data Warehouse</strong>, enabling historical and multidimensional analysis by time, program, project, material, staff and financial status."
    },
    contributions: {
      pt: "Atuei na construção da solução analítica e na <strong>estruturação dos dados</strong>: organização e consolidação das informações para análises históricas e multidimensionais, e definição e implementação dos <strong>indicadores financeiros</strong> — orçamento estimado, custo real, percentual de desvio e classificação da saúde financeira dos projetos — para identificar riscos de estouro de orçamento e apoiar a tomada de decisão.",
      en: "I worked on building the analytical solution and <strong>structuring the data</strong>: organizing and consolidating information for historical and multidimensional analysis, and defining and implementing the <strong>financial KPIs</strong> — estimated budget, actual cost, deviation percentage and project financial health — to spot budget overrun risks and support decision-making."
    },
    media: { src: "assets/img/projects/scars.gif", fit: "cover" },
    caption: { pt: "SCARS: custos consolidados em um dashboard por programa, projeto e período", en: "SCARS: costs consolidated in a dashboard by program, project and period" },
    techs: [
      { name: "Data Warehouse", use: { pt: "consolidação de dados de várias fontes para análises históricas", en: "consolidating multi-source data for historical analysis" } },
      { name: { pt: "Modelagem de dados", en: "Data modeling" }, use: { pt: "dimensões de materiais, colaboradores, projetos e programas", en: "dimensions for materials, staff, projects and programs" } },
      { name: "Business Intelligence", use: { pt: "indicadores para análise gerencial", en: "indicators for management analysis" } },
      { name: "OLAP", use: { pt: "análise de custos por projeto, programa e período", en: "cost analysis by project, program and period" } },
      { name: "KPIs", use: { pt: "orçamento, custo real, desvio e saúde financeira", en: "budget, actual cost, deviation and financial health" } },
      { name: { pt: "Visualização de dados", en: "Data visualization" }, use: { pt: "destaque visual de desvios e situações críticas", en: "highlighting deviations and critical situations" } }
    ],
    hard: [
      { name: "Data Warehouse", detail: { pt: "Centralização e consolidação das informações dos recursos dos projetos, vindas de diferentes fontes, para consultas históricas e multidimensionais.", en: "Centralizing and consolidating project resource data from different sources for historical and multidimensional queries." } },
      { name: { pt: "Modelagem de dados analíticos", en: "Analytical data modeling" }, detail: { pt: "Definição das dimensões necessárias para as consultas e estruturação dos dados usados nas análises financeiras.", en: "Defining the dimensions needed for queries and structuring the data used in financial analysis." } },
      { name: { pt: "Indicadores de desempenho (KPIs)", en: "Performance indicators (KPIs)" }, detail: { pt: "Cálculo do percentual de desvio orçamentário e classificação da saúde financeira, identificando projetos com risco de extrapolar o orçamento.", en: "Calculating budget deviation and classifying financial health, flagging projects at risk of exceeding their budget." } },
      { name: { pt: "Análise multidimensional (OLAP)", en: "Multidimensional analysis (OLAP)" }, detail: { pt: "Comparação de custos por projeto, programa, período, material e colaborador.", en: "Comparing costs by project, program, period, material and staff member." } }
    ],
    soft: [
      { name: { pt: "Comunicação e colaboração", en: "Communication and collaboration" }, detail: { pt: "Alinhamento das necessidades analíticas e dos objetivos estabelecidos em parceria com a SIATT.", en: "Aligning analytical needs and goals set together with SIATT." } },
      { name: { pt: "Capacidade analítica", en: "Analytical thinking" }, detail: { pt: "Organização de dados, definição de indicadores e interpretação de informações financeiras.", en: "Organizing data, defining indicators and interpreting financial information." } },
      { name: { pt: "Autonomia e resolução de problemas", en: "Autonomy and problem solving" }, detail: { pt: "Identificação de necessidades na estruturação dos dados e desenvolvimento de soluções para o acompanhamento dos recursos.", en: "Identifying data structuring needs and building solutions to track organizational resources." } }
    ]
  },

  /* ---------------------------------------------------- 4º semestre */
  {
    tab: "Tráfegou!",
    summary: { pt: "Monitoramento de tráfego em tempo real com Vue.js, Spring Boot e Oracle. Atuei em autenticação, segurança da API e CRUDs.", en: "Real-time traffic monitoring with Vue.js, Spring Boot and Oracle. I worked on authentication, API security and CRUDs." },
    period: { pt: "4º semestre · 2025", en: "4th semester · 2025" },
    name: { pt: "Tráfegou! — Monitoramento de Tráfego Inteligente", en: "Tráfegou! — Smart Traffic Monitoring" },
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    repo: "https://github.com/Steam-Ducks/traffic-monitoring-system",
    challenge: {
      pt: "Aplicação web para <strong>monitoramento contínuo da mobilidade urbana</strong>: consolida indicadores de tráfego, define níveis de monitoramento, emite alertas automáticos e registra protocolos de ação para apoiar a tomada de decisão. Arquitetura full stack com Vue.js 3 e TypeScript no front-end, Spring Boot com Java 17 no back-end, banco relacional, dashboards interativos, mapas integrados e processamento de dados em tempo real.",
      en: "A web application for <strong>continuous urban mobility monitoring</strong>: it consolidates traffic indicators, defines monitoring levels, sends automatic alerts and records action protocols to support decision-making. Full stack architecture with Vue.js 3 and TypeScript on the front-end, Spring Boot with Java 17 on the back-end, a relational database, interactive dashboards, integrated maps and real-time data processing."
    },
    contributions: {
      pt: "Atuei no front-end e no back-end, principalmente em <strong>autenticação de usuários</strong>, dashboard administrativo, <strong>CRUDs de usuários e cargos</strong>, configuração de segurança da API e integração entre front-end, back-end e banco de dados. Também participei da ingestão, tratamento e visualização dos dados usados no monitoramento.",
      en: "I worked on both front-end and back-end, mainly on <strong>user authentication</strong>, the admin dashboard, <strong>user and role CRUDs</strong>, API security configuration and integration between front-end, back-end and database. I also took part in ingesting, processing and visualizing the monitoring data."
    },
    media: { src: "assets/img/projects/trafegou.gif", fit: "cover" },
    caption: { pt: "Tráfegou!: nível de trânsito por região de São José dos Campos, em tempo real", en: "Tráfegou!: real-time traffic level by region of São José dos Campos" },
    techs: [
      { name: "Spring Boot", use: { pt: "API REST, regras de negócio e segurança", en: "REST API, business rules and security" } },
      { name: "Oracle Database", use: { pt: "usuários, regiões monitoradas e protocolos", en: "users, monitored regions and protocols" } },
      { name: "Vue.js", use: { pt: "telas e dashboards em tempo real", en: "screens and real-time dashboards" } },
      { name: "TypeScript", use: { pt: "tipagem de componentes e dados", en: "typing components and data" } },
      { name: "Docker", use: { pt: "containers de front, back e banco", en: "front, back and database containers" } },
      { name: "Git e GitHub", use: { pt: "branches e Pull Requests", en: "branches and Pull Requests" } }
    ],
    hard: [
      { name: { pt: "APIs REST com Spring Boot", en: "REST APIs with Spring Boot" }, detail: { pt: "Controllers, regras de negócio, integrações e configuração de autenticação e segurança da aplicação.", en: "Controllers, business rules, integrations and authentication/security configuration." } },
      { name: "Oracle Database", detail: { pt: "Modelagem e manipulação dos dados de usuários, regiões monitoradas e protocolos de ação, com consultas para os dashboards.", en: "Modeling and handling data for users, monitored regions and action protocols, with queries for the dashboards." } },
      { name: "Vue.js + TypeScript", detail: { pt: "Componentes e dashboards interativos, organizados em módulos reutilizáveis e com tipagem de dados.", en: "Interactive components and dashboards, organized in reusable, typed modules." } },
      { name: { pt: "Containerização com Docker", en: "Containerization with Docker" }, detail: { pt: "Containers para front-end, back-end e banco de dados, padronizando o ambiente da equipe.", en: "Containers for front-end, back-end and database, standardizing the team's environment." } }
    ],
    soft: [
      { name: { pt: "Comunicação e colaboração", en: "Communication and collaboration" }, detail: { pt: "Alinhamento constante entre front-end e back-end.", en: "Constant alignment between front-end and back-end." } },
      { name: { pt: "Pensamento crítico", en: "Critical thinking" }, detail: { pt: "Lidar com segurança, integrações e tratamento de dados em tempo real.", en: "Dealing with security, integrations and real-time data processing." } },
      { name: { pt: "Autonomia e proatividade", en: "Autonomy and proactivity" }, detail: { pt: "Resolução de problemas e implementação das funcionalidades do sistema.", en: "Solving problems and implementing system features." } }
    ]
  },

  /* ---------------------------------------------------- 3º semestre */
  {
    tab: "Pontual",
    summary: { pt: "Controle de acesso de funcionários externos para a Altave. Meu foco foi a modelagem do banco com Supabase e PostgreSQL.", en: "Access control for external employees, built for Altave. My focus was database design with Supabase and PostgreSQL." },
    period: { pt: "3º semestre · 2025", en: "3rd semester · 2025" },
    name: "Pontual",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    partner: "Altave",
    repo: "https://github.com/Steam-Ducks/point-system",
    challenge: {
      pt: "Desenvolvido pela Steam Ducks em parceria com a <strong>Altave</strong>, especializada em monitoramento, segurança e gestão de ativos com drones e inteligência de dados. O sistema resolve problemas de <strong>rastreabilidade e controle de acesso de funcionários externos</strong> em áreas empresariais, aumentando a segurança e a eficiência operacional.",
      en: "Built by Steam Ducks in partnership with <strong>Altave</strong>, a company specialized in monitoring, security and asset management with drones and data intelligence. The system addresses <strong>traceability and access control of external employees</strong> in company areas, improving security and operational efficiency."
    },
    contributions: {
      pt: "Meu foco principal foi a <strong>modelagem e implementação do banco de dados</strong> com Supabase e PostgreSQL — funcionários, empresas, cargos e registros de ponto com histórico de alterações. Também participei do desenvolvimento do front-end em Vue.js e da organização da estrutura de dados da aplicação.",
      en: "My main focus was <strong>designing and implementing the database</strong> with Supabase and PostgreSQL — employees, companies, positions and time records with change history. I also worked on the Vue.js front-end and on organizing the application's data structure."
    },
    media: { src: "assets/img/projects/pontual.gif", fit: "cover" },
    caption: { pt: "Pontual: controle de acesso de funcionários externos", en: "Pontual: access control for external employees" },
    techs: [
      { name: "PostgreSQL", use: { pt: "funcionários, acessos e relacionamentos", en: "employees, access records and relationships" } },
      { name: "Supabase", use: { pt: "autenticação, arquivos e segurança com RLS", en: "auth, file storage and RLS security" } },
      { name: "Vue.js", use: { pt: "front-end com componentes reativos e Axios", en: "front-end with reactive components and Axios" } },
      { name: "Spring Boot", use: { pt: "autenticação, registro de acessos e relatórios", en: "auth, access logging and reports" } },
      { name: "Figma", use: { pt: "wireframes e protótipos", en: "wireframes and prototypes" } },
      { name: "GitHub", use: { pt: "branches e Pull Requests", en: "branches and Pull Requests" } }
    ],
    hard: [
      { name: { pt: "Modelagem com PostgreSQL", en: "Data modeling with PostgreSQL" }, detail: { pt: "Criação das tabelas e relacionamentos para funcionários e registros de acesso, com persistência e manipulação dos dados.", en: "Designing tables and relationships for employees and access records, plus data persistence and handling." } },
      { name: "Supabase", detail: { pt: "Gerenciamento de autenticação, armazenamento de arquivos e segurança e otimização de consultas com RLS (Row Level Security).", en: "Managing authentication, file storage, and query security and optimization with RLS (Row Level Security)." } },
      { name: "Vue.js", detail: { pt: "Componentes reativos do front-end e integração com a API via Axios.", en: "Reactive front-end components and API integration via Axios." } },
      { name: "Spring Boot", detail: { pt: "APIs de autenticação, autorização, registro de acessos e geração de relatórios.", en: "APIs for authentication, authorization, access logging and reporting." } }
    ],
    soft: [
      { name: { pt: "Comunicação em equipe", en: "Team communication" }, detail: { pt: "Colaboração com o time ao longo do desenvolvimento e da organização do banco de dados.", en: "Collaborating with the team throughout development and database design." } },
      { name: { pt: "Pensamento crítico", en: "Critical thinking" }, detail: { pt: "Análise de problemas ligados à segurança e ao controle de acesso.", en: "Analyzing problems related to security and access control." } },
      { name: { pt: "Autonomia e proatividade", en: "Autonomy and proactivity" }, detail: { pt: "Iniciativa no desenvolvimento das funcionalidades e na organização do banco de dados.", en: "Taking initiative in building features and organizing the database." } }
    ]
  },

  /* ---------------------------------------------------- 2º semestre */
  {
    tab: "PACER",
    summary: { pt: "Aplicação desktop em Java e MySQL para avaliação de integrantes de grupos, em que atuei como Scrum Master.", en: "Java and MySQL desktop app for peer assessment within teams, where I was the Scrum Master." },
    period: { pt: "2º semestre · 2024", en: "2nd semester · 2024" },
    name: "PACER Assessment System",
    role: "Scrum Master",
    repo: "https://github.com/Steam-Ducks/pacer-assessment-system",
    challenge: {
      pt: "Aplicação desktop criada para tornar a <strong>avaliação de integrantes de grupos</strong> mais organizada, transparente e eficiente. O sistema oferece autenticação de usuários, gerenciamento de grupos, definição de critérios de avaliação, cadastro de sprints e geração de relatórios.",
      en: "A desktop application built to make <strong>peer assessment within teams</strong> more organized, transparent and efficient. It provides user authentication, group management, assessment criteria, sprint registration and report generation."
    },
    contributions: {
      pt: "Atuei como <strong>Scrum Master</strong>, organizando as sprints e as tarefas da equipe no Jira, acompanhando as entregas e mantendo a documentação e os artefatos do projeto em dia. Também participei da <strong>definição dos requisitos</strong> usados pela equipe durante o desenvolvimento.",
      en: "I was the <strong>Scrum Master</strong>, organizing the team's sprints and tasks in Jira, tracking deliveries and keeping the project documentation and artifacts up to date. I also took part in <strong>defining the requirements</strong> the team used during development."
    },
    media: { src: "assets/img/projects/pacer.gif", fit: "cover" },
    caption: { pt: "PACER: avaliação da equipe por critérios e burndown da Sprint 4", en: "PACER: team assessment by criteria and the Sprint 4 burndown" },
    techs: [
      { name: "Java", use: { pt: "lógica e funcionalidades desktop orientadas a objetos", en: "object-oriented desktop logic and features" } },
      { name: "MySQL", use: { pt: "avaliações, grupos e relacionamentos", en: "assessments, groups and relationships" } },
      { name: "Jira", use: { pt: "tarefas, sprints e planejamento das entregas", en: "tasks, sprints and delivery planning" } },
      { name: "Figma", use: { pt: "protótipos e fluxo de navegação", en: "prototypes and navigation flow" } },
      { name: "IntelliJ IDEA", use: { pt: "desenvolvimento e depuração", en: "development and debugging" } },
      { name: "Git e GitHub", use: { pt: "versionamento e colaboração", en: "versioning and collaboration" } }
    ],
    hard: [
      { name: { pt: "Gestão ágil com Jira", en: "Agile management with Jira" }, detail: { pt: "Organização das tarefas e sprints, planejamento das entregas e acompanhamento do desenvolvimento.", en: "Organizing tasks and sprints, planning deliveries and tracking development." } },
      { name: { pt: "Java orientado a objetos", en: "Object-oriented Java" }, detail: { pt: "Lógica principal e funcionalidades da aplicação desktop.", en: "Core logic and features of the desktop application." } },
      { name: { pt: "Modelagem com MySQL", en: "Data modeling with MySQL" }, detail: { pt: "Persistência dos dados e relacionamento entre tabelas de avaliações e grupos.", en: "Data persistence and relationships between assessment and group tables." } },
      { name: { pt: "Prototipação no Figma", en: "Prototyping in Figma" }, detail: { pt: "Protótipos das telas e organização do fluxo de navegação.", en: "Screen prototypes and navigation flow." } }
    ],
    soft: [
      { name: { pt: "Comunicação e organização", en: "Communication and organization" }, detail: { pt: "Acompanhamento do andamento da equipe nas sprints, mantendo a documentação e os artefatos em dia.", en: "Following the team's progress through the sprints, keeping documentation and artifacts up to date." } },
      { name: { pt: "Colaboração em equipe", en: "Teamwork" }, detail: { pt: "Definição de requisitos em conjunto e acompanhamento das entregas.", en: "Defining requirements together and following up on deliveries." } },
      { name: { pt: "Autonomia e proatividade", en: "Autonomy and proactivity" }, detail: { pt: "Acompanhamento ativo das atividades e da documentação do sistema.", en: "Actively tracking activities and system documentation." } }
    ]
  },

  /* ---------------------------------------------------- 1º semestre */
  {
    tab: { pt: "Calculadora", en: "Calculator" },
    summary: { pt: "Meu primeiro projeto na Fatec: uma calculadora científica de terminal, criada em VisualG e evoluída para TypeScript.", en: "My first project at Fatec: a terminal scientific calculator, built in VisualG and later evolved to TypeScript." },
    period: { pt: "1º semestre · 2024", en: "1st semester · 2024" },
    name: { pt: "Calculadora Científica", en: "Scientific Calculator" },
    role: { pt: "Desenvolvedor", en: "Developer" },
    repo: "https://github.com/Steam-Ducks/scientific-calculator",
    challenge: {
      pt: "Projeto acadêmico focado no aprendizado prático de programação e organização de software: uma <strong>aplicação de terminal</strong> que realiza operações matemáticas, conversões entre bases numéricas e cálculos auxiliares. Foi construída primeiro em <strong>VisualG</strong> e depois evoluída para <strong>TypeScript</strong>.",
      en: "An academic project focused on hands-on programming and software organization: a <strong>terminal application</strong> that performs math operations, number base conversions and auxiliary calculations. It was first built in <strong>VisualG</strong> and later evolved to <strong>TypeScript</strong>."
    },
    contributions: {
      pt: "Implementei <strong>funcionalidades matemáticas</strong>, validação de entradas e a organização dos menus de navegação no terminal. Também participei da <strong>migração de VisualG para TypeScript</strong> e da modularização das funcionalidades.",
      en: "I implemented <strong>math features</strong>, input validation and the terminal navigation menus. I also took part in the <strong>migration from VisualG to TypeScript</strong> and in modularizing the features."
    },
    media: { src: "assets/img/projects/calculadora.jpg", fit: "contain", bg: "#050a2c" },
    caption: { pt: "Calculadora Científica — Steam Ducks", en: "Scientific Calculator — Steam Ducks" },
    techs: [
      { name: "TypeScript", use: { pt: "lógica e operações matemáticas modulares", en: "modular logic and math operations" } },
      { name: "VisualG", use: { pt: "primeira versão do algoritmo", en: "first version of the algorithm" } },
      { name: "Trello", use: { pt: "tarefas organizadas em sprints", en: "tasks organized in sprints" } },
      { name: "Git e GitHub", use: { pt: "versionamento e integração da equipe", en: "versioning and team integration" } }
    ],
    hard: [
      { name: "TypeScript", detail: { pt: "Desenvolvimento da lógica principal e das operações matemáticas, com código organizado em módulos.", en: "Building the core logic and math operations, with code organized into modules." } },
      { name: { pt: "Lógica de programação", en: "Programming logic" }, detail: { pt: "Estruturação dos algoritmos, conversões entre bases numéricas e validação das entradas do usuário.", en: "Structuring algorithms, number base conversions and user input validation." } },
      { name: { pt: "Organização com Trello", en: "Organization with Trello" }, detail: { pt: "Planejamento das funcionalidades e acompanhamento das entregas em sprints.", en: "Planning features and tracking deliveries in sprints." } }
    ],
    soft: [
      { name: { pt: "Resolução de problemas", en: "Problem solving" }, detail: { pt: "Raciocínio lógico aplicado à implementação das operações da calculadora.", en: "Logical reasoning applied to implementing the calculator's operations." } },
      { name: { pt: "Trabalho em equipe", en: "Teamwork" }, detail: { pt: "Primeiro projeto com a equipe Steam Ducks, dividindo tarefas e integrando o código.", en: "First project with the Steam Ducks team, splitting tasks and integrating code." } },
      { name: { pt: "Atenção aos detalhes", en: "Attention to detail" }, detail: { pt: "Organização e cuidado no desenvolvimento e na validação das funcionalidades.", en: "Care and organization when building and validating features." } }
    ]
  }
];
