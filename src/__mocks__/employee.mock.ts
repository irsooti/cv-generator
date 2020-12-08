import { Employee, LanguageLevel, Sex } from '../types';

const mockEmployee: Employee = {
  profile: {
    description: 'Computer Scientist & Software Developer',
    name: 'Samuel Finocchio',
    bornDate: '30-05-2020',
    sex: Sex.male,
    nationality: 'Italiana',
  },
  skills: [
    {
      topic: 'Languages, Frameworks, Technologies, Libs...',
      list: [
        'Ansi C',
        'C++',
        'STL (C++)',
        'C#',
        'Java',
        'Assembly MIPS',
        'VisualBasic.Net',
        'Python',
        'PHP 7',
        'Laravel',
        'SlimPHP',
        'JavaScript (ES6)',
        'JQuery',
        'Angular 10',
        'Ionic 2',
        'NodeJS',
        'Express',
        'NestJS',
        'JSON',
        'XML',
        'Prolog',
        'Datalog',
        'SQL standard',
        'MySQL/MariaDB',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'HTML5',
        'CSS3',
        'Flexbox',
        'Boostrap',
        'Material',
        'Git',
        'GitHub',
        'Atlassian',
      ],
    },
    {
      topic: 'Software Engineering',
      list: [
        'Design patterns',
        'Waterfall',
        'Agile',
        'RUP (Rational Unified Process)',
        'Extreme Programming',
        'Api Design',
        'Database design (Relazionale e non relazionale)',
        'Tecniche di normalizzazione',
        'Documentazione',
        'Version Control',
      ],
    },
    {
      topic: 'Computer Science',
      list: [
        'Programmazione procedurale strutturata',
        'Programmazione orientata agli oggetti',
        'Programmazione funzionale',
        'Programmazione logica dichiarativa',
        'Linguaggi formali',
        'Grammatiche libere dal contesto e regolari',
        'Automi riconoscitori di linguaggi regolari',
        'Espressioni regolari',
        'Semantica operazionale',
        'Logica proposizionale',
        'Parsing, interpreti e compilatori',
        'Algebra relazionale',
        'Calcolo relazionale',
      ],
    },
    // Algorithms & Data Structures
    {
      topic: 'Algorithms and Data Structures',
      list: [
        'Complessità Computazionale',
        'Verifiche di correttezza',
        'Sorting',
        'Pile e Code',
        'C++',
        'Heap e code di priorità',
        'Alberi Autobilancianti',
        'Tabelle di Hash',
        'Grafi',
        'Visite, alberi ricoprenti e cammini minimi a sorgente singola e multipla',
        'Approccio goloso',
        'Programmazione dinamica',
        'Sliding window',
        'Prefix Sum',
        '...',
      ],
    },
  ],
  educations: [
    {
      description: 'IIS A.Volta (Pescara)',
      title: 'Diploma in Informatica',
      year: 2016,
      certificate: '',
    },
    {
      description: "Università degli Studi dell'Aquila",
      title: 'In corso - Laurea in Informatica',
      year: 2021,
      certificate: '',
    },
  ],
  experiences: [
    // Aesys UDA
    {
      from: {
        year: 2020,
        month: 9,
      },
      to: {
        year: 2020,
        month: 11,
      },
      companyName: "Università Gabriele D'Annunzio",
      projectDescription:
        'Sviluppo di un server per la teledidattica\
             in grado di importare automaticamente lezioni,\
             corsi, docenti, cla, master ecc..\
             dal database della segreteria online e creare automaticamente\
             gruppi e teams su Microsoft Teams tramite Microsoft Graph.',
      projectName: 'Server Teledidattica',
      technologies: [
        {
          topic: 'Linguaggi',
          list: ['Typescript', 'Javascript', 'HTML', 'CSS', 'SASS', 'Java'],
        },
        {
          topic: 'Frameworks e librerie',
          list: ['Angular2+', 'Node.js', 'TypeORM', 'Sequelize'],
        },
        {
          topic: 'Versioning',
          list: ['Git'],
        },
      ],
      role: 'Full Stack Developer',
    },
    // Aesys Linkem FE
    {
      from: {
        year: 2020,
        month: 10,
      },
      to: {
        year: 2020,
        month: 10,
      },
      companyName: 'Linkem',
      projectDescription:
        'Sviluppo di una applicazione Web per la creazione e gestione di campagna pubblicitarie.',
      projectName: 'Linkem Digital Platform',
      technologies: [
        {
          topic: 'Linguaggi',
          list: ['Typescript', 'Javascript', 'HTML', 'CSS', 'SASS'],
        },
        {
          topic: 'Frameworks e librerie',
          list: ['Angular11'],
        },
        {
          topic: 'Versioning',
          list: ['Git'],
        },
      ],
      role: 'Front End Developer',
    },
    // Aesys Generic
    {
      from: {
        year: 2020,
        month: 8,
      },
      to: {
        year: 2020,
        month: 12,
      },
      companyName: 'Aesys',
      projectDescription: 'Consulenze sviluppatore fullstack',
      projectName: 'Progetti interni e consulenza',
      technologies: [
        {
          topic: 'Linguaggi',
          list: ['Typescript', 'Javascript', 'HTML', 'CSS', 'SASS', 'Java'],
        },
        {
          topic: 'Frameworks e librerie',
          list: ['Angular2+', 'Node.js', 'TypeORM', 'Sequelize'],
        },
        {
          topic: 'Versioning',
          list: ['Git'],
        },
      ],
      role: 'Full Stack Developer',
    },
    // Emernet
    {
      from: {
        year: 2016,
        month: 2,
      },
      to: {
        year: 2017,
        month: 2,
      },
      companyName: 'Emernet',
      projectDescription:
        'Sofware geolocalizzazione e gestione mezzi di emergenza, equipaggio ed equipaggiamento.',
      projectName: 'Mobile Automation System',
      technologies: [
        {
          topic: 'Linguaggi',
          list: ['Javascript', 'HTML', 'CSS'],
        },
        {
          topic: 'DB',
          list: ['MySQL', 'PostgreSQL'],
        },
        {
          topic: 'Frameworks',
          list: ['Angular.js (versione 1)', 'NodeJS', 'Express', 'Material'],
        },
        {
          topic: 'Versioning',
          list: ['Git', 'Bitbucket Atlassian'],
        },
      ],
      role: 'Full Stack Developer',
    },
    // UnivAQ Teaching OII
    {
      from: {
        year: 2019,
        month: 9,
      },
      to: {
        year: 2020,
        month: 9,
      },
      companyName: "Università degli Studi dell'Aquila",
      projectDescription:
        "Coach OII, allenatore della squadra abruzzese di problem solving algoritmico per partecipare alle Olimpiadi Italiane dell'Informatica",
      projectName: 'Coaching Olimpiadi Italiane Informatica',
      technologies: [
        {
          topic: 'Linguaggi',
          list: ['C', 'C++'],
        },
        {
          topic: 'Librerie',
          list: ['STL (Standard Template Library)'],
        },
        {
          topic: 'Argomenti',
          list: [
            'Algoritmi',
            'Strutture dati',
            'Greedy',
            'DP',
            'Grafi',
            'Ricorsione',
          ],
        },
      ],
      role: 'Coach',
    },
    // UnivAQ Teaching LPS and ELPlatform
    {
      from: {
        year: 2019,
        month: 9,
      },
      to: {
        year: 2020,
        month: 9,
      },
      companyName: "Università degli Studi dell'Aquila",
      projectDescription:
        'Assistente corso LPS (Laboratorio di Programmazione di sistemi) e sviluppatore piattaforma ELearning e correttore automatico programmi sottomessi (prestazioni e correttezza)',
      projectName: 'PLS (Piano lauree scientifiche)',
      technologies: [
        {
          topic: 'Linguaggi',
          list: [
            'PHP',
            'Javascript',
            'C',
            'C++',
            'Assembly MIPS',
            'Assembly MC6800',
          ],
        },
        {
          topic: 'Framework e librerire',
          list: ['Laravel', 'STL (C++)'],
        },
        {
          topic: 'Argomenti',
          list: ['Correzione e valutazione automatici'],
        },
      ],
      role: 'Sviluppatore e assistente docente',
    },
  ],
  // Spoken languages
  languages: [
    // Ita
    {
      level: {
        written: LanguageLevel.L1,
        spoken: LanguageLevel.L1,
      },
      name: 'Italiano',
    },
    // En
    {
      level: {
        written: LanguageLevel.B2,
        spoken: LanguageLevel.B2,
      },
      name: 'Inglese',
    },
  ],
};

export default mockEmployee;
