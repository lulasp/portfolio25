// Translation dictionary, keyed by language then section.
// Sections are added incrementally as they're translated.

const translations = {
  en: {
    hero: {
      overline: 'Hi, my name is',
      name: 'Luís Serpa Pinto',
      tagline: 'I build design systems that scale.',
      introBefore: 'I’m a web developer and Lead Frontend Developer at ',
      introCompany: 'Visma',
      introAfter:
        ', owning the custom HubSpot theme behind 50+ websites — from planning and prioritisation to delivery and QA.',
      cta: 'See what I’ve built',
    },
    about: {
      heading: 'About Me',
      p1a:
        'Hello! My name is Luís Serpa Pinto and I’m from Porto, Portugal! Since early in my life I developed an interest in computers, the internet, and their capabilities. As a result of this interest I graduated in Multimedia Communication Technologies at ',
      p1Ismai: 'ISMAI',
      p1b: ', all this to achieve my goal: Becoming a web developer.',
      p2a: 'Fast-forward to today, and I’ve worked at a ',
      p2Link1: 'Dutch start-up',
      p2b: ', a ',
      p2Link2: 'Portuguese health software company',
      p2c: ', and later at a ',
      p2Link3: 'Lisbon-based marketing automation agency',
      p2d:
        ', where I developed a custom HubSpot theme for one of Portugal’s largest insurance companies.',
      p3a: 'Currently, I’m a Lead Frontend Developer at ',
      p3Visma: 'Visma',
      p3b: ', leading the development of a HubSpot theme used by 50+ companies across the group.',
      p4a: 'A big part of my focus these days is ',
      p4Strong: 'AI',
      p4b: '. I use agentic tools like ',
      p4Link1: 'Claude Code',
      p4c:
        ' daily to speed up development and cut out repetitive work, and I build automation workflows with ',
      p4Link2: 'n8n',
      p4d:
        ' to connect systems and let the machines handle the busywork. I’m genuinely excited about how agentic AI is reshaping the way we build for the web.',
      skillsIntro: 'Here are a few technologies I’ve been working with recently:',
    },
    jobs: {
      heading: 'Where I’ve Worked',
      list: [
        {
          company: 'Visma',
          url: 'http://www.visma.com/',
          title: 'Lead Frontend Developer',
          range: 'April 2023 - Current',
          bullets: [
            'Lead the custom HubSpot theme powering the websites of 50+ companies across the Visma group',
            'Own the project end to end — planning, prioritisation and delivery, tracked in Jira',
            'Develop and maintain the shared theme and component library used across all sites',
            'Manage the Azure DevOps deployment pipeline for reliable, repeatable releases',
            'Run QA and support the internal teams building on the theme',
            'Introduced agentic AI into the workflow with Claude Code — speeding up delivery and cutting manual work',
          ],
        },
        {
          company: 'YouLead',
          url: 'https://www.youlead.pt/',
          title: 'Frontend Developer',
          range: 'July 2022 - March 2023',
          bullets: [
            'Partnered with cross-disciplinary teams to deliver high-quality web solutions',
            'Key contributor to a HubSpot theme project for one of Portugal’s largest insurance companies',
            'Used HubSpot, Git, and Jira to streamline development, collaboration, and project tracking.',
          ],
        },
        {
          company: 'Freelancer',
          url: 'http://serpapinto.pt/',
          title: 'Web Developer',
          range: 'January 2016 - Current',
          bullets: [
            'Developed projects using diverse stacks including WordPress (PHP) and React (JavaScript)',
            'Engaged with clients to implement tailored solutions meeting their specific needs',
            'Adapted quickly to new technologies and frameworks, ensuring successful delivery across diverse projects and client requirements',
          ],
        },
        {
          company: 'TechnologyCatalogue.com',
          url: 'https://www.technologycatalogue.com/',
          title: 'Web Developer',
          range: 'April 2020 - June 2021',
          bullets: [
            'Write modern, performant, maintainable code for TechnologyCatalogue.com platforms',
            'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, PHP, Sass, GitLab, Jira and Zoho',
            'Communicate with multi-disciplinary teams of engineers, designers, and clients on a daily basis',
          ],
        },
        {
          company: 'Glintt',
          url: 'https://glintt.com/',
          title: 'Software Developer',
          range: 'June 2017 - August 2018',
          bullets: [
            'Support and development team, working on developing and maintaining major features of Glintts’ healthcare software, using PL/SQL',
            'Working closely with UI/UX designers and other developers to ensure thoughtful and coherent user experiences across Glintts’ platforms',
            'Work with multi-disciplinary teams of engineers, designers, medical staff and clients on a daily basis',
          ],
        },
        {
          company: 'Fastluza',
          url: 'https://fastluza.com/',
          title: 'Web Developer',
          range: 'March 2016 - April 2017',
          bullets: [
            'Developed and maintained websites for Fastluzas’ clients',
            'Worked with WordPress (PHP), Laravel (PHP), JavaScript and a few other technologies',
            'Handle clients requests and implement their ideas alongside a team of developers and designers',
          ],
        },
      ],
    },
    featured: {
      heading: 'Some Things I’ve Built in the Past',
      overline: 'Featured Project',
      sitesLabel: 'Live sites on the theme',
      learnMore: 'Learn More',
      courseLink: 'Course Link',
      githubLink: 'GitHub Link',
      externalLink: 'External Link',
      prevSites: 'Previous sites',
      nextSites: 'Next sites',
      descriptions: {
        'HubSpot Demo Theme':
          'Demo site of a HubSpot theme project I contributed to as both developer and acting lead, designed to showcase all modules and their functionality.',
        'Ok TeleSeguros':
          'HubSpot theme for a project I contributed to as developer, delivering tailored solutions to support the company’s digital presence.',
        'TechnologyCatalogue.com':
          'A Drupal (PHP) platform for energy technology suppliers, consultants and users. I developed key features such as voting systems, search filters and worked on a full platform wide revamp, to name a few. I also frequently took lead in both internal and external meetings.',
      },
    },
    projects: {
      heading: 'Other Noteworthy Projects',
      archiveLink: 'view the archive',
      githubLink: 'GitHub Link',
      externalLink: 'External Link',
      showMore: 'Show More',
      showLess: 'Show Less',
      descriptions: {
        Cavalinho:
          'Helped Fastluzas’ senior developers to build an ecommerce shop for a portuguese brand. Worked on a few small features and content management.',
        Comporto:
          'Built some front-end features, assisting the senior devs. Also, worked on content managment.',
        'Dev Connector': 'As part of the Udemy MERN Course I created the Dev Connector platform.',
        Evertis: 'Tasked with updating a couple of functionalities and content for this customer.',
        FastMex:
          'Worked on and helped built this platform. I also worked with content managment and research.',
        Glintt:
          'Part of the development and support team on multiple PL/SQL platforms for Glintts’ healthcare software.',
        'Novo Atalho':
          'Helped in developing some features on this ecommerce website and, I also worked with the content manager.',
        'Ok TeleSeguros':
          'HubSpot theme for a project I contributed to as developer, delivering tailored solutions to support the company’s digital presence.',
        'TechnologyCatalogue.com':
          'Worked on and helped build multiple platforms with Drupal, JavaScript and Sass.',
        Valtorq:
          'Built a website with WordPress, to showcase the customers’ products and services. Worked on every aspect from scratch with the customer.',
        'Visma HubSpot Theme':
          'Demo site of a HubSpot theme project I contributed to as both developer and acting lead, designed to showcase all modules and their functionality.',
      },
    },
    contact: {
      overline: 'What’s Next?',
      title: 'Get In Touch',
      body:
        'I’m currently looking for a new React opportunity, so feel free to contact me. Whether you have a job opportunity or just a question, I’ll try my best to get back to you!',
      cta: 'Reach Out',
    },
    archive: {
      title: 'Archive',
      subtitle: 'A big list of things I’ve worked on',
      year: 'Year',
      titleCol: 'Title',
      madeAt: 'Made at',
      builtWith: 'Built with',
      link: 'Link',
      externalLink: 'External Link',
      githubLink: 'GitHub Link',
      appStoreLink: 'Apple App Store Link',
      playStoreLink: 'Google Play Store Link',
    },
  },
  pt: {
    hero: {
      overline: 'Olá, o meu nome é',
      name: 'Luís Serpa Pinto',
      tagline: 'Construo design systems que escalam.',
      introBefore: 'Sou web developer e Lead Frontend Developer na ',
      introCompany: 'Visma',
      introAfter:
        ', responsável pelo tema HubSpot personalizado por detrás de mais de 50 websites — do planeamento e priorização à entrega e QA.',
      cta: 'Vê o que construí',
    },
    about: {
      heading: 'Sobre Mim',
      p1a:
        'Olá! O meu nome é Luís Serpa Pinto e sou do Porto, Portugal! Desde cedo desenvolvi um interesse por computadores, pela internet e pelas suas capacidades. Fruto desse interesse, licenciei-me em Tecnologias da Comunicação Multimédia no ',
      p1Ismai: 'ISMAI',
      p1b: ', tudo para alcançar o meu objetivo: tornar-me web developer.',
      p2a: 'Avançando até hoje, já trabalhei numa ',
      p2Link1: 'start-up holandesa',
      p2b: ', numa ',
      p2Link2: 'empresa portuguesa de software de saúde',
      p2c: ' e, mais tarde, numa ',
      p2Link3: 'agência de automação de marketing sediada em Lisboa',
      p2d:
        ', onde desenvolvi um tema HubSpot personalizado para uma das maiores seguradoras de Portugal.',
      p3a: 'Atualmente, sou Lead Frontend Developer na ',
      p3Visma: 'Visma',
      p3b: ', liderando o desenvolvimento de um tema HubSpot usado por mais de 50 empresas do grupo.',
      p4a: 'Grande parte do meu foco hoje em dia é a ',
      p4Strong: 'AI',
      p4b: '. Uso ferramentas agentic como o ',
      p4Link1: 'Claude Code',
      p4c:
        ' diariamente para acelerar o desenvolvimento e eliminar o trabalho repetitivo, e crio fluxos de automação com o ',
      p4Link2: 'n8n',
      p4d:
        ' para ligar sistemas e deixar as máquinas tratarem das tarefas rotineiras. Estou genuinamente entusiasmado com a forma como a agentic AI está a transformar o modo como construímos para a web.',
      skillsIntro: 'Aqui estão algumas tecnologias com que tenho trabalhado recentemente:',
    },
    jobs: {
      heading: 'Onde Trabalhei',
      list: [
        {
          company: 'Visma',
          url: 'http://www.visma.com/',
          title: 'Lead Frontend Developer',
          range: 'Abril 2023 - Atual',
          bullets: [
            'Lidero o tema HubSpot personalizado que suporta os websites de mais de 50 empresas do grupo Visma',
            'Sou responsável pelo projeto de ponta a ponta — planeamento, priorização e entrega, geridos no Jira',
            'Desenvolvo e mantenho o tema partilhado e a biblioteca de componentes usada em todos os sites',
            'Faço a gestão da pipeline de deployment em Azure DevOps para releases fiáveis e repetíveis',
            'Faço QA e dou apoio às equipas internas que constroem sobre o tema',
            'Introduzi agentic AI no fluxo de trabalho com o Claude Code — acelerando entregas e reduzindo trabalho manual',
          ],
        },
        {
          company: 'YouLead',
          url: 'https://www.youlead.pt/',
          title: 'Frontend Developer',
          range: 'Julho 2022 - Março 2023',
          bullets: [
            'Colaborei com equipas multidisciplinares para entregar soluções web de elevada qualidade',
            'Contribuidor-chave num projeto de tema HubSpot para uma das maiores seguradoras de Portugal',
            'Usei HubSpot, Git e Jira para otimizar o desenvolvimento, a colaboração e o acompanhamento de projetos.',
          ],
        },
        {
          company: 'Freelancer',
          url: 'http://serpapinto.pt/',
          title: 'Web Developer',
          range: 'Janeiro 2016 - Atual',
          bullets: [
            'Desenvolvi projetos usando stacks diversas, incluindo WordPress (PHP) e React (JavaScript)',
            'Colaborei com clientes para implementar soluções à medida das suas necessidades específicas',
            'Adaptei-me rapidamente a novas tecnologias e frameworks, garantindo entregas bem-sucedidas em projetos e requisitos de clientes diversos',
          ],
        },
        {
          company: 'TechnologyCatalogue.com',
          url: 'https://www.technologycatalogue.com/',
          title: 'Web Developer',
          range: 'Abril 2020 - Junho 2021',
          bullets: [
            'Escrevi código moderno, performante e de fácil manutenção para as plataformas da TechnologyCatalogue.com',
            'Trabalhei com uma variedade de linguagens, plataformas, frameworks e sistemas de gestão de conteúdos, como JavaScript, PHP, Sass, GitLab, Jira e Zoho',
            'Comuniquei diariamente com equipas multidisciplinares de engenheiros, designers e clientes',
          ],
        },
        {
          company: 'Glintt',
          url: 'https://glintt.com/',
          title: 'Software Developer',
          range: 'Junho 2017 - Agosto 2018',
          bullets: [
            'Equipa de suporte e desenvolvimento, desenvolvendo e mantendo funcionalidades principais do software de saúde da Glintt, usando PL/SQL',
            'Trabalhei em estreita colaboração com designers de UI/UX e outros developers para garantir experiências de utilizador cuidadas e coerentes nas plataformas da Glintt',
            'Trabalhei diariamente com equipas multidisciplinares de engenheiros, designers, profissionais de saúde e clientes',
          ],
        },
        {
          company: 'Fastluza',
          url: 'https://fastluza.com/',
          title: 'Web Developer',
          range: 'Março 2016 - Abril 2017',
          bullets: [
            'Desenvolvi e mantive websites para os clientes da Fastluza',
            'Trabalhei com WordPress (PHP), Laravel (PHP), JavaScript e algumas outras tecnologias',
            'Geri pedidos de clientes e implementei as suas ideias em conjunto com uma equipa de developers e designers',
          ],
        },
      ],
    },
    featured: {
      heading: 'Algumas Coisas Que Construí no Passado',
      overline: 'Projeto em Destaque',
      sitesLabel: 'Sites em produção com o tema',
      learnMore: 'Saber Mais',
      courseLink: 'Link do curso',
      githubLink: 'Link do GitHub',
      externalLink: 'Link externo',
      prevSites: 'Sites anteriores',
      nextSites: 'Sites seguintes',
      descriptions: {
        'HubSpot Demo Theme':
          'Site de demonstração de um projeto de tema HubSpot no qual contribuí como developer e lead interino, concebido para mostrar todos os módulos e as suas funcionalidades.',
        'Ok TeleSeguros':
          'Tema HubSpot para um projeto no qual contribuí como developer, entregando soluções à medida para apoiar a presença digital da empresa.',
        'TechnologyCatalogue.com':
          'Uma plataforma Drupal (PHP) para fornecedores, consultores e utilizadores de tecnologia energética. Desenvolvi funcionalidades-chave como sistemas de votação e filtros de pesquisa, e trabalhei numa remodelação completa da plataforma, entre outras. Também liderei frequentemente reuniões internas e externas.',
      },
    },
    projects: {
      heading: 'Outros Projetos Dignos de Nota',
      archiveLink: 'ver o arquivo',
      githubLink: 'Link do GitHub',
      externalLink: 'Link externo',
      showMore: 'Mostrar Mais',
      showLess: 'Mostrar Menos',
      descriptions: {
        Cavalinho:
          'Ajudei os senior developers da Fastluza a construir uma loja de ecommerce para uma marca portuguesa. Trabalhei em algumas pequenas funcionalidades e na gestão de conteúdos.',
        Comporto:
          'Desenvolvi algumas funcionalidades de front-end, apoiando os senior devs. Também trabalhei na gestão de conteúdos.',
        'Dev Connector': 'No âmbito do curso MERN da Udemy, criei a plataforma Dev Connector.',
        Evertis:
          'Responsável por atualizar algumas funcionalidades e conteúdos para este cliente.',
        FastMex:
          'Trabalhei e ajudei a construir esta plataforma. Também trabalhei na gestão de conteúdos e em pesquisa.',
        Glintt:
          'Parte da equipa de desenvolvimento e suporte em várias plataformas PL/SQL do software de saúde da Glintt.',
        'Novo Atalho':
          'Ajudei a desenvolver algumas funcionalidades neste website de ecommerce e trabalhei também com o gestor de conteúdos.',
        'Ok TeleSeguros':
          'Tema HubSpot para um projeto no qual contribuí como developer, entregando soluções à medida para apoiar a presença digital da empresa.',
        'TechnologyCatalogue.com':
          'Trabalhei e ajudei a construir várias plataformas com Drupal, JavaScript e Sass.',
        Valtorq:
          'Construí um website em WordPress para apresentar os produtos e serviços do cliente. Trabalhei em todos os aspetos de raiz, em conjunto com o cliente.',
        'Visma HubSpot Theme':
          'Site de demonstração de um projeto de tema HubSpot no qual contribuí como developer e lead interino, concebido para mostrar todos os módulos e as suas funcionalidades.',
      },
    },
    contact: {
      overline: 'O Que Se Segue?',
      title: 'Entra em Contacto',
      body:
        'Estou atualmente à procura de uma nova oportunidade em React, por isso não hesites em contactar-me. Quer tenhas uma oportunidade de emprego ou apenas uma questão, farei o meu melhor para te responder!',
      cta: 'Contacta-me',
    },
    archive: {
      title: 'Arquivo',
      subtitle: 'Uma grande lista de coisas em que trabalhei',
      year: 'Ano',
      titleCol: 'Título',
      madeAt: 'Feito em',
      builtWith: 'Construído com',
      link: 'Link',
      externalLink: 'Link externo',
      githubLink: 'Link do GitHub',
      appStoreLink: 'Link da Apple App Store',
      playStoreLink: 'Link da Google Play Store',
    },
  },
};

export default translations;
