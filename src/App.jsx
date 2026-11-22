import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    number: '01',
    title: 'Generative & Agentic AI',
    description: 'From grounded answers to coordinated, human-guided agents.',
    items: ['Generative AI', 'LLMs', 'RAG', 'Hybrid RAG', 'LangChain', 'LangGraph', 'Multi-Agent Systems', 'Prompt Engineering', 'Tool Calling', 'HITL', 'Semantic Search'],
  },
  {
    number: '02',
    title: 'Product Engineering',
    description: 'Full-stack systems designed to take intelligent ideas into use.',
    items: ['Python', 'React', 'TypeScript', 'FastAPI', 'SQL'],
  },
  {
    number: '03',
    title: 'Data, Cloud & Tools',
    description: 'Connected data foundations for enterprise-grade AI applications.',
    items: ['PostgreSQL', 'MongoDB', 'Neo4j', 'Vector Databases', 'Azure OpenAI', 'Microsoft Azure', 'Git', 'GitHub'],
  },
];

const projects = [
  {
    id: '01',
    name: 'SeparationIQ',
    category: 'Enterprise IT separation',
    summary: 'An AI-powered platform for understanding application dependencies, cloud infrastructure, and licensing during mergers and acquisitions.',
    approach: 'A LangGraph multi-agent system assesses risk, maps dependencies, and recommends migration plans—with evidence and human approval.',
    stack: ['Python', 'FastAPI', 'React', 'LangGraph', 'RAG', 'PostgreSQL', 'HITL'],
    visual: 'orbit',
  },
  {
    id: '02',
    name: 'Intelligent Quality Assurance',
    category: 'Agentic test generation',
    summary: 'Turns BRD and HLD documents into structured test cases, requirement mappings, and coverage insights.',
    approach: 'Document ingestion, a Neo4j knowledge graph, and an RTM agent work together to spot gaps and generate Excel reports.',
    stack: ['Python', 'LangGraph', 'RAG', 'Neo4j', 'FastAPI', 'Pydantic'],
    visual: 'matrix',
  },
  {
    id: '03',
    name: 'Valve Entity Extraction',
    category: 'Intelligent document processing',
    summary: 'Extracts critical mechanical parameters from pump and valve datasheet PDFs.',
    approach: 'A GPT- and YOLO-powered pipeline uses conditional retries, validation, and human review to improve extraction reliability.',
    stack: ['Python', 'Flask', 'GPT', 'YOLO', 'OCR', 'LangGraph', 'HITL'],
    visual: 'scan',
  },
  {
    id: '04',
    name: 'Enterprise Infrastructure Intelligence',
    category: 'Enterprise data standardization',
    summary: 'Standardizes server inventory across Linux, database, middleware, and network teams.',
    approach: 'Excel ingestion and MongoDB support a hybrid RAG assistant for infrastructure questions, validation, and reviewed mapping suggestions.',
    stack: ['Python', 'FastAPI', 'React', 'MongoDB', 'Azure OpenAI', 'Hybrid RAG'],
    visual: 'nodes',
  },
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Xoriant Solutions',
    location: 'Pune, India',
    period: 'May 2024 — Present',
    current: true,
    details: [
      'Designed enterprise GenAI applications with Python, FastAPI, React, and LLMs, automating 10+ business workflows and reducing manual processing effort by 40%.',
      'Built RAG pipelines, multi-agent architectures, and knowledge graph integrations with LangChain, LangGraph, and Neo4j.',
      'Integrated GPT, YOLO, and OCR with human-in-the-loop validation, achieving up to 98% extraction accuracy and reducing processing time by 60%.',
    ],
  },
  {
    role: 'GenAI Engineer',
    company: 'Protean Technologies (NSDL)',
    location: 'Mumbai, India',
    period: 'March 2023 — May 2024',
    current: false,
    details: [
      'Developed full-stack AI applications integrating Python, FastAPI, React, and Azure OpenAI for enterprise automation.',
      'Implemented hybrid RAG with MongoDB queries, vector search, and semantic retrieval for context-aware responses.',
      'Created LangGraph workflows for infrastructure intelligence, enterprise data standardization, recruitment automation, and decision support.',
    ],
  },
];

const certifications = [
  { name: 'Microsoft AI Engineer Associate', code: 'AI-102', date: 'Dec 2024' },
  { name: 'Microsoft Certified: Azure Data Scientist Associate', code: 'DP-100', date: 'Jan 2026' },
  { name: 'Anthropic Claude Certified Developer — Foundations', code: 'CCDV-F', date: 'Aug 2026' },
];

const spriteLooks = [
  { skin: '#fff', hair: 0, outfit: 0, pose: 0, face: 0, expression: 0, glasses: false, beard: true },
  { skin: '#e9e9e9', hair: 2, outfit: 1, pose: 3, face: 1, expression: 1, glasses: true, earrings: true },
  { skin: '#f4f4f4', hair: 8, outfit: 7, pose: 1, face: 2, expression: 2, child: true, headphones: true },
  { skin: '#d9d9d9', hair: 3, outfit: 2, pose: 4, face: 0, expression: 3, glasses: false },
  { skin: '#f1f1f1', hair: 4, outfit: 4, pose: 2, face: 1, expression: 0 },
  { skin: '#e4e4e4', hair: 5, outfit: 5, pose: 1, face: 2, expression: 2, beard: true },
  { skin: '#fff', hair: 6, outfit: 6, pose: 3, face: 1, expression: 0, earrings: true },
  { skin: '#dedede', hair: 7, outfit: 3, pose: 5, face: 0, expression: 4, glasses: true },
  { skin: '#f2f2f2', hair: 1, outfit: 5, pose: 2, face: 2, expression: 1 },
  { skin: '#e7e7e7', hair: 9, outfit: 0, pose: 4, face: 1, expression: 3, beard: true },
  { skin: '#fff', hair: 5, outfit: 3, pose: 1, face: 2, expression: 1, child: true },
  { skin: '#dcdcdc', hair: 0, outfit: 2, pose: 0, face: 0, expression: 2, glasses: true },
  { skin: '#efefef', hair: 3, outfit: 1, pose: 3, face: 1, expression: 0, earrings: true },
  { skin: '#e3e3e3', hair: 2, outfit: 7, pose: 5, face: 2, expression: 4, beard: true },
  { skin: '#f7f7f7', hair: 4, outfit: 6, pose: 6, face: 1, expression: 0, glasses: true },
  { skin: '#e5e5e5', hair: 7, outfit: 5, pose: 2, face: 0, expression: 3, headphones: true },
  { skin: '#fff', hair: 6, outfit: 0, pose: 1, face: 1, expression: 2, glasses: true },
  { skin: '#d8d8d8', hair: 9, outfit: 4, pose: 3, face: 2, expression: 1 },
  { skin: '#f2f2f2', hair: 1, outfit: 2, pose: 5, face: 0, expression: 0, earrings: true },
  { skin: '#e1e1e1', hair: 8, outfit: 1, pose: 4, face: 1, expression: 3, beard: true },
];

const spriteColumns = 5;
const spriteRows = 4;
const spriteWidth = 180;
const spriteHeight = 240;
const spriteBounds = { x: 8, y: 4, width: 164, height: 232 };
const crowdBodyFraction = .48;
const crowdSpriteAssets = Array.from({ length: 30 }, (_, index) =>
  `/footer/crowd/standing-${String(index + 1).padStart(2, '0')}.svg`,
);

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Ritesh Rathod — back to top">
      <span className="brand-mark">RR</span>
      <span className="brand-name">Ritesh Rathod<span className="brand-dot">.</span></span>
    </a>
  );
}

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Work', '#work'],
    ['Experience', '#experience'],
    ['About', '#about'],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowIcon diagonal />
          </a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

function paintCrowdSprite(context, index) {
  const look = spriteLooks[index];
  const ink = '#111';
  const cloth = ['#fff', '#f4f4f4', '#e4e4e4', '#f8f8f8', '#d8d8d8', '#f1f1f1', '#eee', '#fafafa'][look.outfit];
  const hairInk = [1, 4].includes(look.hair) ? '#272727' : ink;
  const isChild = Boolean(look.child);
  const headWidth = [24, 27, 23, 25][look.face];
  const headHeight = [30, 28, 32, 29][look.face];
  const pose = look.pose;
  const fillShape = (fill, drawPath, width = 2.5) => {
    context.beginPath();
    drawPath();
    context.fillStyle = fill;
    context.fill();
    context.strokeStyle = ink;
    context.lineWidth = width;
    context.stroke();
  };
  const line = (drawPath, width = 2) => {
    context.beginPath();
    drawPath();
    context.strokeStyle = ink;
    context.lineWidth = width;
    context.stroke();
  };

  const drawCurls = (points) => {
    points.forEach(([x, y, radius]) => {
      fillShape(hairInk, () => context.arc(x, y, radius, 0, Math.PI * 2), 1.2);
    });
  };

  context.save();
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.translate(spriteWidth / 2, 0);
  context.scale(.71 + (index % 4) * .055, 1);
  context.translate(-spriteWidth / 2, 0);
  if (isChild) {
    context.translate(0, 26);
    context.scale(1, .87);
  }

  if ([2, 4, 6, 7, 9].includes(look.hair)) {
    fillShape(hairInk, () => {
      context.ellipse(90, 46, 34, 39, 0, 0, Math.PI * 2);
      if ([2, 4, 6].includes(look.hair)) {
        context.ellipse(61, 76, 9, 33, -.12, 0, Math.PI * 2);
        context.ellipse(119, 76, 9, 33, .12, 0, Math.PI * 2);
      }
      if (look.hair === 7 || look.hair === 9) {
        context.ellipse(62, 54, 13, 18, -.35, 0, Math.PI * 2);
        context.ellipse(118, 54, 13, 18, .35, 0, Math.PI * 2);
      }
    }, 1);
  } else if (look.hair !== 8) {
    fillShape(hairInk, () => context.ellipse(90, 44, 29, 35, 0, 0, Math.PI * 2), 1);
  }
  if (look.hair === 3) {
    fillShape(hairInk, () => context.ellipse(111, 18, 12, 13, .2, 0, Math.PI * 2), 1);
  } else if (look.hair === 6) {
    fillShape(hairInk, () => {
      context.ellipse(53, 91, 8, 28, -.1, 0, Math.PI * 2);
      context.ellipse(127, 91, 8, 28, .1, 0, Math.PI * 2);
    }, 1);
    drawCurls([[53, 71, 6], [53, 84, 6], [53, 97, 6], [127, 71, 6], [127, 84, 6], [127, 97, 6]]);
  } else if (look.hair === 7 || look.hair === 9) {
    drawCurls([[64, 34, 10], [72, 20, 10], [87, 15, 11], [102, 18, 10], [114, 31, 10], [61, 48, 9], [119, 49, 9]]);
  }

  fillShape(look.skin, () => {
    context.ellipse(90 - headWidth + 1, 51, 4, 7, 0, 0, Math.PI * 2);
    context.ellipse(90 + headWidth - 1, 51, 4, 7, 0, 0, Math.PI * 2);
  }, 1.8);
  fillShape(look.skin, () => {
    context.moveTo(79, 69);
    context.lineTo(78, 87);
    context.quadraticCurveTo(90, 92, 102, 87);
    context.lineTo(101, 69);
    context.closePath();
  }, 2);
  fillShape(look.skin, () => {
    context.ellipse(90, 49, headWidth, headHeight, [0, -.05, .04, 0][look.face], 0, Math.PI * 2);
  }, 2.3);

  const bodyBottom = look.outfit === 6 ? 223 : 160;
  fillShape(cloth, () => {
    if (look.outfit === 6) {
      context.moveTo(71, 79);
      context.lineTo(56, 86);
      context.lineTo(39, 91);
      context.lineTo(28, 115);
      context.lineTo(41, 128);
      context.lineTo(52, 111);
      context.lineTo(49, 143);
      context.lineTo(36, bodyBottom);
      context.lineTo(144, bodyBottom);
      context.lineTo(131, 143);
      context.lineTo(128, 111);
      context.lineTo(139, 128);
      context.lineTo(152, 115);
      context.lineTo(141, 91);
      context.lineTo(124, 86);
      context.lineTo(109, 79);
    } else {
      context.moveTo(71, 79);
      context.lineTo(57, 84);
      context.lineTo(43, 88);
      context.quadraticCurveTo(37, 91, 33, 101);
      context.lineTo(25, 117);
      context.quadraticCurveTo(23, 123, 30, 127);
      context.lineTo(39, 131);
      context.lineTo(51, 108);
      context.lineTo(49, bodyBottom);
      context.lineTo(131, bodyBottom);
      context.lineTo(129, 108);
      context.lineTo(141, 131);
      context.lineTo(150, 127);
      context.quadraticCurveTo(157, 123, 155, 117);
      context.lineTo(147, 101);
      context.quadraticCurveTo(143, 91, 137, 88);
      context.lineTo(123, 84);
      context.lineTo(109, 79);
    }
    context.lineTo(99, 86);
    context.lineTo(90, 92);
    context.lineTo(81, 86);
    context.closePath();
  });

  if (look.outfit !== 6) {
    fillShape('#e7e7e7', () => {
      context.moveTo(51, 151);
      context.lineTo(129, 151);
      context.lineTo(125, 219);
      context.lineTo(114, 230);
      context.lineTo(97, 230);
      context.lineTo(90, 184);
      context.lineTo(82, 230);
      context.lineTo(65, 230);
      context.lineTo(54, 219);
      context.closePath();
    }, 2.2);
    line(() => {
      context.moveTo(90, 163);
      context.lineTo(90, 184);
      context.moveTo(58, 222);
      context.lineTo(82, 222);
      context.moveTo(98, 222);
      context.lineTo(121, 222);
    }, 1.4);
    fillShape('#454545', () => {
      context.moveTo(63, 225);
      context.lineTo(82, 225);
      context.lineTo(84, 231);
      context.lineTo(57, 231);
      context.closePath();
      context.moveTo(98, 225);
      context.lineTo(116, 225);
      context.lineTo(124, 231);
      context.lineTo(96, 231);
      context.closePath();
    }, 1.2);
  }

  const drawRelaxedArm = (side) => {
    fillShape(look.skin, () => {
      if (side === 'left') {
        context.moveTo(31, 121);
        context.quadraticCurveTo(25, 142, 31, 164);
        context.quadraticCurveTo(33, 171, 40, 166);
        context.lineTo(45, 132);
        context.lineTo(39, 125);
      } else {
        context.moveTo(149, 121);
        context.quadraticCurveTo(155, 142, 149, 164);
        context.quadraticCurveTo(147, 171, 140, 166);
        context.lineTo(135, 132);
        context.lineTo(141, 125);
      }
      context.closePath();
    }, 2);
  };

  if (pose === 1) {
    drawRelaxedArm('left');
    fillShape(look.skin, () => {
      context.moveTo(143, 119);
      context.lineTo(153, 113);
      context.quadraticCurveTo(157, 98, 151, 83);
      context.lineTo(146, 70);
      context.quadraticCurveTo(142, 65, 138, 69);
      context.lineTo(143, 91);
      context.lineTo(135, 102);
      context.closePath();
    }, 2);
    line(() => {
      context.moveTo(143, 71);
      context.lineTo(138, 61);
      context.moveTo(147, 70);
      context.lineTo(147, 59);
    }, 1.5);
    fillShape(ink, () => context.roundRect(133, 49, 17, 26, 3), 1.2);
    line(() => { context.moveTo(138, 54); context.lineTo(145, 54); }, 1);
  } else if (pose === 2) {
    drawRelaxedArm('left');
    drawRelaxedArm('right');
    fillShape(look.skin, () => {
      context.moveTo(42, 126);
      context.lineTo(52, 120);
      context.quadraticCurveTo(75, 139, 112, 130);
      context.lineTo(130, 123);
      context.lineTo(138, 134);
      context.quadraticCurveTo(104, 163, 70, 151);
      context.closePath();
    }, 2);
    line(() => { context.moveTo(59, 137); context.quadraticCurveTo(91, 151, 120, 136); }, 1.3);
  } else if (pose === 3) {
    fillShape(look.skin, () => {
      context.moveTo(31, 119);
      context.lineTo(42, 122);
      context.quadraticCurveTo(48, 145, 65, 154);
      context.lineTo(79, 149);
      context.lineTo(83, 160);
      context.quadraticCurveTo(61, 174, 48, 164);
      context.lineTo(29, 135);
      context.closePath();
      context.moveTo(149, 121);
      context.quadraticCurveTo(155, 143, 149, 164);
      context.quadraticCurveTo(147, 171, 140, 166);
      context.lineTo(135, 132);
      context.closePath();
    }, 2);
    fillShape('#d7d7d7', () => {
      context.moveTo(66, 143);
      context.lineTo(82, 143);
      context.lineTo(81, 162);
      context.lineTo(68, 162);
      context.closePath();
    }, 1.5);
    line(() => { context.moveTo(82, 147); context.quadraticCurveTo(91, 147, 88, 156); }, 1.5);
    line(() => { context.moveTo(68, 148); context.lineTo(80, 148); }, 1);
  } else if (pose === 4) {
    drawRelaxedArm('left');
    drawRelaxedArm('right');
    fillShape('#eee', () => {
      context.moveTo(53, 137);
      context.lineTo(74, 137);
      context.lineTo(73, 159);
      context.lineTo(53, 159);
      context.closePath();
      context.moveTo(106, 137);
      context.lineTo(127, 137);
      context.lineTo(127, 159);
      context.lineTo(107, 159);
      context.closePath();
    }, 1.6);
  } else if (pose === 5) {
    drawRelaxedArm('left');
    drawRelaxedArm('right');
    line(() => {
      context.moveTo(65, 83);
      context.lineTo(105, 113);
      context.lineTo(125, 176);
      context.moveTo(68, 85);
      context.lineTo(107, 115);
    }, 4);
    fillShape('#d7d7d7', () => context.roundRect(116, 164, 20, 30, 3), 1.5);
  } else {
    drawRelaxedArm('left');
    drawRelaxedArm('right');
    if (pose === 6) {
      line(() => {
        context.moveTo(34, 137);
        context.quadraticCurveTo(51, 154, 68, 163);
        context.moveTo(146, 137);
        context.quadraticCurveTo(129, 154, 112, 163);
      }, 3);
    }
  }

  if (look.outfit === 0) {
    line(() => {
      context.moveTo(79, 89);
      context.quadraticCurveTo(90, 102, 101, 89);
      context.moveTo(108, 118);
      context.lineTo(125, 118);
      context.lineTo(125, 143);
      context.lineTo(108, 143);
      context.closePath();
    }, 1.8);
    line(() => { context.moveTo(111, 122); context.lineTo(122, 122); }, 1);
  } else if (look.outfit === 1 || look.outfit === 2) {
    fillShape('#fff', () => {
      context.moveTo(72, 80);
      context.lineTo(90, 94);
      context.lineTo(81, 105);
      context.lineTo(67, 85);
      context.closePath();
      context.moveTo(108, 80);
      context.lineTo(90, 94);
      context.lineTo(99, 105);
      context.lineTo(113, 85);
      context.closePath();
    }, 1.6);
    line(() => {
      context.moveTo(90, 94);
      context.lineTo(90, 160);
      if (look.outfit === 2) {
        context.moveTo(90, 106);
        context.lineTo(105, 121);
        context.moveTo(90, 106);
        context.lineTo(75, 121);
      }
    }, 1.5);
    for (let y = 116; y < 157; y += 24) {
      fillShape(ink, () => context.arc(90, y, 1.4, 0, Math.PI * 2), 1);
    }
  } else if (look.outfit === 3) {
    for (let y = 119; y < 160; y += 22) {
      line(() => { context.moveTo(53, y); context.quadraticCurveTo(90, y + 3, 127, y); }, 2.2);
    }
  } else if (look.outfit === 5) {
    line(() => {
      context.moveTo(71, 84);
      context.quadraticCurveTo(73, 103, 90, 112);
      context.quadraticCurveTo(107, 103, 109, 84);
      context.moveTo(90, 112);
      context.lineTo(90, 160);
    }, 2);
    line(() => { context.moveTo(71, 90); context.lineTo(56, 102); context.moveTo(109, 90); context.lineTo(124, 102); }, 1.6);
  } else if (look.outfit === 6) {
    line(() => {
      context.moveTo(80, 93);
      context.quadraticCurveTo(90, 101, 100, 93);
      context.moveTo(52, 144);
      context.quadraticCurveTo(90, 160, 128, 144);
    }, 1.8);
  } else if (look.outfit === 7) {
    fillShape('#e5e5e5', () => {
      context.moveTo(75, 82);
      context.lineTo(90, 97);
      context.lineTo(105, 82);
      context.lineTo(100, 112);
      context.lineTo(90, 105);
      context.lineTo(80, 112);
      context.closePath();
    }, 1.5);
  }

  if (look.beard) {
    fillShape(ink, () => {
      context.moveTo(68, 61);
      context.quadraticCurveTo(90, 77, 112, 61);
      context.lineTo(105, 76);
      context.quadraticCurveTo(90, 86, 75, 76);
      context.closePath();
    }, 1);
  }

  if ([0, 1, 4, 6].includes(look.hair)) {
    fillShape(hairInk, () => {
      context.moveTo(63, 24);
      if (look.hair === 0) {
        context.quadraticCurveTo(70, 8, 91, 13);
        context.quadraticCurveTo(113, 10, 117, 29);
        context.quadraticCurveTo(101, 24, 91, 32);
        context.quadraticCurveTo(77, 26, 65, 43);
      } else if (look.hair === 1 || look.hair === 4) {
        context.quadraticCurveTo(66, 7, 89, 12);
        context.quadraticCurveTo(117, 8, 118, 32);
        context.quadraticCurveTo(114, 45, 107, 37);
        context.quadraticCurveTo(98, 25, 85, 31);
        context.quadraticCurveTo(74, 35, 65, 47);
      } else {
        context.quadraticCurveTo(67, 8, 90, 12);
        context.quadraticCurveTo(112, 7, 117, 29);
        context.quadraticCurveTo(111, 40, 106, 33);
        context.quadraticCurveTo(95, 22, 83, 29);
        context.quadraticCurveTo(73, 36, 66, 45);
      }
      context.lineTo(64, 45);
      context.closePath();
    }, 1);
  } else if (look.hair === 8) {
    fillShape(hairInk, () => {
      context.moveTo(63, 37);
      context.quadraticCurveTo(65, 12, 91, 12);
      context.quadraticCurveTo(115, 12, 118, 37);
      context.lineTo(105, 34);
      context.quadraticCurveTo(86, 39, 63, 37);
      context.closePath();
    }, 1.2);
    line(() => { context.moveTo(104, 37); context.quadraticCurveTo(122, 37, 126, 43); }, 2);
  } else if (look.hair === 2 || look.hair === 7 || look.hair === 9) {
    drawCurls([[67, 32, 8], [75, 20, 8], [88, 16, 8], [101, 18, 8], [112, 29, 8], [66, 45, 7], [114, 46, 7]]);
  }

  const expression = look.expression;
  const browTilt = expression === 2 ? 3 : expression === 3 ? -3 : 0;
  const gaze = (index % 3) - 1;
  line(() => {
    context.moveTo(77, 42 + browTilt);
    context.quadraticCurveTo(82, 39 - browTilt * .2, 86, 42);
    context.moveTo(95, 42);
    context.quadraticCurveTo(100, 39 + browTilt * .2, 104, 42 - browTilt);
  }, 2.2);
  if (expression === 4) {
    line(() => {
      context.moveTo(78, 50);
      context.quadraticCurveTo(82, 54, 86, 50);
      context.moveTo(96, 50);
      context.quadraticCurveTo(100, 54, 104, 50);
    }, 2.2);
  } else {
    fillShape('#fff', () => {
      const eyeHeight = isChild || expression === 1 ? 4.2 : 3.4;
      context.ellipse(82, 50, 4.3, eyeHeight, 0, 0, Math.PI * 2);
      context.ellipse(99, 50, 4.3, eyeHeight, 0, 0, Math.PI * 2);
    }, 1.3);
    fillShape(ink, () => {
      context.ellipse(82 + gaze, 50, 1.5, 2, 0, 0, Math.PI * 2);
      context.ellipse(99 + gaze, 50, 1.5, 2, 0, 0, Math.PI * 2);
    }, .8);
  }
  line(() => {
    context.moveTo(90, 51);
    context.quadraticCurveTo(87, 59, 91, 60);
  }, 1.8);
  if (expression === 1) {
    fillShape(ink, () => context.ellipse(90, 68, 3.2, 4.4, 0, 0, Math.PI * 2), 1);
  } else {
    line(() => {
      context.moveTo(82, 66);
      context.quadraticCurveTo(90, expression === 2 ? 61 : expression === 0 || expression === 3 ? 71 : 66, 99, 66);
    }, expression === 3 ? 2.4 : 2);
    if (expression === 3) {
      line(() => {
        context.moveTo(80, 65);
        context.lineTo(77, 63);
        context.moveTo(101, 65);
        context.lineTo(104, 63);
      }, 1.2);
    }
  }
  if (look.earrings) {
    fillShape('#fff', () => {
      context.arc(90 - headWidth - 1, 63, 2.5, 0, Math.PI * 2);
      context.arc(90 + headWidth + 1, 63, 2.5, 0, Math.PI * 2);
    }, 1.5);
  }

  if (look.glasses) {
    context.strokeStyle = ink;
    context.lineWidth = 2.2;
    context.beginPath();
    context.ellipse(82, 50, 9, 7, 0, 0, Math.PI * 2);
    context.ellipse(99, 50, 9, 7, 0, 0, Math.PI * 2);
    context.moveTo(91, 49);
    context.lineTo(90, 49);
    context.moveTo(73, 49);
    context.lineTo(68, 47);
    context.moveTo(108, 49);
    context.lineTo(113, 47);
    context.stroke();
  }
  if (look.headphones) {
    context.strokeStyle = ink;
    context.lineWidth = 4;
    context.beginPath();
    context.arc(90, 42, 35, Math.PI, Math.PI * 2);
    context.stroke();
    fillShape('#d7d7d7', () => {
      context.roundRect(55, 38, 9, 20, 4);
      context.roundRect(116, 38, 9, 20, 4);
    }, 1.5);
  }
  if (index % 4 === 1 && look.outfit !== 6) {
    line(() => {
      context.moveTo(42, 91);
      context.lineTo(57, 135);
      context.lineTo(55, 225);
      context.moveTo(138, 91);
      context.lineTo(123, 135);
      context.lineTo(125, 225);
    }, 2.2);
  }

  context.restore();
}

function loadCrowdSprites() {
  return Promise.all(crowdSpriteAssets.map((src) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Could not load crowd illustration: ${src}`));
    image.src = src;
  }))).then((images) => ({ images }));
}

function createCartoonPortrait(image) {
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) throw new Error('Canvas 2D context is unavailable for the portrait illustration.');

  context.drawImage(image, 0, 0, width, height);
  const frame = context.getImageData(0, 0, width, height);
  const luminance = new Float32Array(width * height);
  const smoothed = new Float32Array(width * height);
  const blurWeights = [1, 4, 6, 4, 1];

  for (let pixel = 0; pixel < luminance.length; pixel += 1) {
    const offset = pixel * 4;
    luminance[pixel] = frame.data[offset] * .299 + frame.data[offset + 1] * .587 + frame.data[offset + 2] * .114;
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let total = 0;
      for (let offsetY = -2; offsetY <= 2; offsetY += 1) {
        const sampleY = Math.max(0, Math.min(height - 1, y + offsetY));
        for (let offsetX = -2; offsetX <= 2; offsetX += 1) {
          const sampleX = Math.max(0, Math.min(width - 1, x + offsetX));
          total += luminance[sampleY * width + sampleX] * blurWeights[offsetY + 2] * blurWeights[offsetX + 2];
        }
      }
      smoothed[y * width + x] = total / 256;
    }
  }

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const pixel = y * width + x;
      const offset = pixel * 4;
      if (frame.data[offset + 3] < 12) continue;

      const top = pixel - width;
      const bottom = pixel + width;
      const horizontal = -smoothed[top - 1] + smoothed[top + 1] -
        2 * smoothed[pixel - 1] + 2 * smoothed[pixel + 1] -
        smoothed[bottom - 1] + smoothed[bottom + 1];
      const vertical = -smoothed[top - 1] - 2 * smoothed[top] - smoothed[top + 1] +
        smoothed[bottom - 1] + 2 * smoothed[bottom] + smoothed[bottom + 1];
      const edgeStrength = (Math.abs(horizontal) + Math.abs(vertical)) * .25;
      const tone = smoothed[pixel] < 90 ? 0 : smoothed[pixel] < 175 ? 150 : 255;
      const shade = edgeStrength > 38 ? 4 : tone;

      frame.data[offset] = shade;
      frame.data[offset + 1] = shade;
      frame.data[offset + 2] = shade;
    }
  }

  context.putImageData(frame, 0, 0);
  return canvas.toDataURL('image/png');
}

function CrowdScene({ paused, onToggle }) {
  const sceneRef = useRef(null);
  const backCanvasRef = useRef(null);
  const frontCanvasRef = useRef(null);
  const overlapCanvasRef = useRef(null);
  const [cartoonPortrait, setCartoonPortrait] = useState('/footer/ritesh-character.png');
  const pausedRef = useRef(paused);
  const syncAnimationRef = useRef(() => {});
  pausedRef.current = paused;

  useEffect(() => {
    const image = new Image();
    let cancelled = false;
    image.onload = () => {
      try {
        const portrait = createCartoonPortrait(image);
        if (!cancelled) setCartoonPortrait(portrait);
      } catch (error) {
        console.error('Could not render the cartoon portrait; the original portrait remains visible.', error);
      }
    };
    image.onerror = (error) => console.error('Could not load the portrait for cartoon rendering.', error);
    image.src = '/footer/ritesh-character.png';

    return () => {
      cancelled = true;
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const backCanvas = backCanvasRef.current;
    const frontCanvas = frontCanvasRef.current;
    const overlapCanvas = overlapCanvasRef.current;
    if (!scene || !backCanvas || !frontCanvas || !overlapCanvas) throw new Error('Crowd scene elements are unavailable.');

    const backContext = backCanvas.getContext('2d');
    const frontContext = frontCanvas.getContext('2d');
    const overlapContext = overlapCanvas.getContext('2d');
    if (!backContext || !frontContext || !overlapContext) {
      console.error('Canvas 2D context is unavailable; the portrait and footer links remain available.');
      return;
    }

    let spriteSheet = null;
    let disposed = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let sceneWidth = 0;
    let sceneHeight = 0;
    let portraitHeight = 0;
    let portraitLeft = 0;
    let portraitRight = 0;
    let pixelRatio = 1;
    let backWalkers = [];
    let frontWalkers = [];
    let animationFrame = 0;
    let previousTime = null;
    let currentTime = 0;
    let inView = false;
    let pageVisible = document.visibilityState === 'visible';

    const active = () => !pausedRef.current && inView && pageVisible && !reducedMotion.matches;
    const randomValue = (index, salt) => {
      const value = Math.sin((index + 1) * 127.1 + salt * 311.7) * 43758.5453;
      return value - Math.floor(value);
    };

    const makeWalkers = (count, isFront, direction) => {
      if (!spriteSheet) return [];
      const spacing = sceneWidth * 1.35 / count;
      const spriteOrder = Array.from({ length: spriteSheet.images.length }, (_, index) => index);
      for (let index = spriteOrder.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(randomValue(index, isFront ? 15 : 14) * (index + 1));
        [spriteOrder[index], spriteOrder[swapIndex]] = [spriteOrder[swapIndex], spriteOrder[index]];
      }
      return Array.from({ length: count }, (_, index) => {
        const height = portraitHeight * (.46 + randomValue(index, isFront ? 9 : 4) * .08);
        const spriteIndex = spriteOrder[index % spriteOrder.length];
        const image = spriteSheet.images[spriteIndex];
        const width = height * (image.naturalWidth / (image.naturalHeight * crowdBodyFraction)) * 1.12;
        return {
          spriteIndex,
          x: index * spacing + (randomValue(index, 3) - .5) * spacing * .24 - sceneWidth * .18,
          y: isFront ? sceneHeight - height : sceneHeight * .36 - height * .54,
          width,
          height,
          speed: sceneWidth / (isFront ? 11 : 13),
          direction,
          phase: randomValue(index, isFront ? 12 : 2) * Math.PI * 2,
          passesPortrait: isFront || index % 4 === 0,
        };
      });
    };

    const paintWalkers = (context, walkers, time, shouldPaint = () => true, visibleHeight = 1) => {
      walkers.forEach((walker) => {
        if (!shouldPaint(walker)) return;
        const bob = reducedMotion.matches ? 0 : Math.sin(time * .012 + walker.phase) * 5;
        const image = spriteSheet.images[walker.spriteIndex];
        const sourceHeight = image.naturalHeight * crowdBodyFraction * visibleHeight;
        const destinationHeight = walker.height * visibleHeight;
        if (walker.direction < 0) {
          context.save();
          context.translate(walker.x + walker.width, 0);
          context.scale(-1, 1);
          context.drawImage(
            image,
            0,
            0,
            image.naturalWidth,
            sourceHeight,
            0,
            walker.y + bob,
            walker.width,
            destinationHeight,
          );
          context.restore();
        } else {
          context.drawImage(
            image,
            0,
            0,
            image.naturalWidth,
            sourceHeight,
            walker.x,
            walker.y + bob,
            walker.width,
            destinationHeight,
          );
        }
      });
    };

    const draw = () => {
      backContext.clearRect(0, 0, sceneWidth, sceneHeight);
      frontContext.clearRect(0, 0, sceneWidth, sceneHeight);
      overlapContext.clearRect(0, 0, sceneWidth, sceneHeight);
      paintWalkers(backContext, backWalkers, currentTime);
      paintWalkers(frontContext, frontWalkers, currentTime);
      const crossesPortrait = (walker) =>
        walker.passesPortrait && walker.x < portraitRight && walker.x + walker.width > portraitLeft;
      paintWalkers(
        overlapContext,
        backWalkers,
        currentTime,
        crossesPortrait,
        .84,
      );
      paintWalkers(
        overlapContext,
        frontWalkers,
        currentTime,
        crossesPortrait,
        1,
      );
    };

    const advance = (walkers, delta) => {
      walkers.forEach((walker) => {
        walker.x += walker.direction * walker.speed * delta;
        if (walker.direction > 0 && walker.x > sceneWidth + walker.width) {
          const leftmost = Math.min(...walkers.map((person) => person.x));
          walker.x = leftmost - walker.width - 22;
        } else if (walker.direction < 0 && walker.x + walker.width < 0) {
          const rightmost = Math.max(...walkers.map((person) => person.x + person.width));
          walker.x = rightmost + 22;
        }
      });
    };

    const tick = (timestamp) => {
      animationFrame = 0;
      const shouldAnimate = active();
      if (shouldAnimate) {
        const delta = previousTime === null ? 0 : Math.min((timestamp - previousTime) / 1000, .05);
        advance(backWalkers, delta);
        advance(frontWalkers, delta);
        previousTime = timestamp;
        currentTime += delta * 1000;
      } else {
        previousTime = null;
      }
      draw();
      if (shouldAnimate) animationFrame = window.requestAnimationFrame(tick);
    };

    const syncAnimation = () => {
      if (active()) {
        if (!animationFrame) animationFrame = window.requestAnimationFrame(tick);
      } else {
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        previousTime = null;
        draw();
      }
    };
    syncAnimationRef.current = syncAnimation;

    const resize = () => {
      const bounds = scene.getBoundingClientRect();
      sceneWidth = Math.round(bounds.width);
      sceneHeight = Math.round(bounds.height);
      if (!sceneWidth || !sceneHeight) return;

      const portraitBounds = scene.querySelector('.crowd-character').getBoundingClientRect();
      portraitHeight = portraitBounds.height;
      portraitLeft = portraitBounds.left - bounds.left - 24;
      portraitRight = portraitBounds.right - bounds.left + 24;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      [[backCanvas, backContext], [frontCanvas, frontContext], [overlapCanvas, overlapContext]].forEach(([canvas, context]) => {
        canvas.width = Math.round(sceneWidth * pixelRatio);
        canvas.height = Math.round(sceneHeight * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      });

      const isMobile = window.matchMedia('(max-width: 599px)').matches;
      const backCount = isMobile ? 12 : 20;
      const frontCount = isMobile ? 10 : 20;
      backWalkers = makeWalkers(backCount, false, 1);
      frontWalkers = makeWalkers(frontCount, true, -1);
      if (frontWalkers.length && backWalkers.length) {
        const pairedPositions = isMobile ? [[1, 2], [3, 5]] : [[4, 5], [8, 11]];
        for (const [frontIndex, backIndex] of pairedPositions) {
          const frontWalker = frontWalkers[frontIndex];
          const backWalker = backWalkers[backIndex];
          frontWalker.x = backWalker.x + (backWalker.width - frontWalker.width) * .45;
          frontWalker.phase = backWalker.phase;
        }
      }
      draw();
      syncAnimation();
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting);
      syncAnimation();
    }, { rootMargin: '100px 0px' });
    const resizeObserver = new ResizeObserver(resize);
    const onVisibilityChange = () => {
      pageVisible = document.visibilityState === 'visible';
      syncAnimation();
    };
    const onMotionPreferenceChange = () => syncAnimation();

    loadCrowdSprites().then((sprites) => {
      if (disposed) return;
      spriteSheet = sprites;
      resize();
    }).catch((error) => {
      console.error('Could not load the CC0 crowd illustrations; the portrait and footer links remain available.', error);
    });

    intersectionObserver.observe(scene);
    resizeObserver.observe(scene);
    document.addEventListener('visibilitychange', onVisibilityChange);
    reducedMotion.addEventListener('change', onMotionPreferenceChange);
    window.addEventListener('resize', resize);
    resize();

    return () => {
      disposed = true;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      reducedMotion.removeEventListener('change', onMotionPreferenceChange);
      window.removeEventListener('resize', resize);
      syncAnimationRef.current = () => {};
    };
  }, []);

  useEffect(() => {
    syncAnimationRef.current();
  }, [paused]);

  return (
    <button
      className="crowd-art"
      type="button"
      ref={sceneRef}
      onClick={onToggle}
      aria-label={paused ? 'Resume crowd animation' : 'Pause crowd animation'}
      aria-pressed={paused}
    >
      <span className="crowd-ghost-name" aria-hidden="true">RITESH.</span>
      <canvas className="crowd-canvas crowd-canvas-back" ref={backCanvasRef} aria-hidden="true" />
      <img className="crowd-character" src={cartoonPortrait} alt="Cartoon-style monochrome illustration of Ritesh Rathod wearing black with yellow sneakers" loading="lazy" decoding="async" draggable="false" />
      <img className="crowd-character-shoes" src="/footer/ritesh-character.png" alt="" aria-hidden="true" loading="lazy" decoding="async" draggable="false" />
      <canvas className="crowd-canvas crowd-canvas-front" ref={frontCanvasRef} aria-hidden="true" />
      <canvas className="crowd-canvas crowd-canvas-overlap" ref={overlapCanvasRef} aria-hidden="true" />
    </button>
  );
}

function HeroGraphic() {
  return (
    <div className="hero-graphic" aria-label="Abstract illustration of connected AI systems" role="img">
      <div className="graphic-topline">
        <span>INTELLIGENCE, IN MOTION</span>
        <span className="live-indicator"><i /> SYSTEMS THINKING</span>
      </div>
      <div className="graphic-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="graphic-core">
        <span className="core-bracket">&lt;</span>
        <span>AI</span>
        <span className="core-bracket">/&gt;</span>
      </div>
      <span className="graphic-node node-a">RAG</span>
      <span className="graphic-node node-b">AGENT</span>
      <span className="graphic-node node-c">DATA</span>
      <span className="graphic-node node-d">HUMAN</span>
      <div className="graphic-bottomline">
        <span>CONTEXT → REASONING → ACTION</span>
        <span>37° 33′ N — PUNE</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-kicker reveal">
        <span className="eyebrow"><span className="eyebrow-dot" /> FULL STACK GENAI DEVELOPER</span>
        <span className="eyebrow-location">PUNE, INDIA</span>
      </div>
      <h1 className="hero-title reveal">
        Building AI<br />
        <span className="hero-title-bottom">that <em>moves</em> work.</span>
      </h1>
      <div className="hero-grid">
        <div className="hero-intro reveal">
          <p>I’m Ritesh—a full stack engineer building enterprise applications and AI systems that make complex work simpler.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore selected work <ArrowIcon /></a>
            <a className="text-link" href="/GenAI_Resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowIcon diagonal /></a>
          </div>
        </div>
        <HeroGraphic />
      </div>
      <div className="hero-proof reveal">
        <div className="proof-label">BUILT FOR REAL-WORLD IMPACT</div>
        <div className="proof-metric"><strong>10<span>+</span></strong><span>workflows<br />automated</span></div>
        <div className="proof-metric"><strong>40<span>%</span></strong><span>less manual<br />processing</span></div>
        <div className="proof-metric"><strong>98<span>%</span></strong><span>data extraction<br />accuracy</span></div>
        <span className="proof-note">Outcomes from enterprise work</span>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}

function SectionHeading({ index, title, note }) {
  return (
    <div className="section-heading reveal">
      <div className="section-title-group">
        <span className="section-index">{index} /</span>
        <h2>{title}</h2>
      </div>
      {note && <p>{note}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <SectionHeading index="01" title="The approach" note="Curiosity, context, and useful outcomes." />
      <div className="about-content reveal">
        <p className="about-statement">I connect <span>strong engineering</span> with practical AI—so the result is more than a model. It’s a system people can trust and use.</p>
        <div className="about-aside">
          <span className="aside-mark">✳</span>
          <p>Experienced across the full journey: from document ingestion and retrieval to agent workflows, validation, and a thoughtful user interface.</p>
          <a href="#experience" className="inline-link">More about my work <ArrowIcon /></a>
        </div>
      </div>
    </section>
  );
}

function SkillSection() {
  return (
    <section className="skills-section section-wrap" id="skills">
      <SectionHeading index="02" title="My toolkit" note="Tools I use to turn complex problems into clear, working products." />
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card reveal" key={group.number}>
            <div className="skill-card-top"><span>{group.number}</span><span className="skill-plus">↗</span></div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="skill-tags">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-caption">SYSTEM MAP <span>● LIVE LOGIC</span></div>
      {type === 'orbit' && (
        <div className="orbit-diagram">
          <i className="diagram-ring ring-a" /><i className="diagram-ring ring-b" />
          <span className="diagram-center">SEPARATE<br />WITH CLARITY</span>
          <span className="diagram-chip chip-a">RISK</span><span className="diagram-chip chip-b">APPS</span><span className="diagram-chip chip-c">CLOUD</span>
        </div>
      )}
      {type === 'matrix' && (
        <div className="matrix-diagram">
          {Array.from({ length: 16 }, (_, index) => <i key={index} className={index === 2 || index === 5 || index === 8 || index === 13 ? 'is-lit' : ''} />)}
          <span className="matrix-label">REQUIREMENT<br />TRACEABILITY</span>
        </div>
      )}
      {type === 'scan' && (
        <div className="scan-diagram">
          <div className="scan-page"><span>VALVE SPECIFICATION</span><i /><i /><i /><b>Ø 150 mm</b><i /><i /></div>
          <span className="scan-focus" />
          <span className="scan-readout">OCR + VISION<br />EXTRACTION</span>
        </div>
      )}
      {type === 'nodes' && (
        <div className="nodes-diagram">
          <span className="node-pill node-linux">LINUX</span><span className="node-pill node-db">DATABASE</span>
          <span className="node-pill node-mid">MIDDLEWARE</span><span className="node-pill node-net">NETWORK</span>
          <i className="node-line line-a" /><i className="node-line line-b" /><i className="node-line line-c" /><i className="node-line line-d" />
          <span className="nodes-core">INFRA<br />GRAPH</span>
        </div>
      )}
      <span className="visual-index">0{type === 'orbit' ? '1' : type === 'matrix' ? '2' : type === 'scan' ? '3' : '4'}</span>
    </div>
  );
}

function Projects() {
  return (
    <section className="work-section section-wrap" id="work">
      <SectionHeading index="03" title="Selected work" note="A few ways I’ve applied GenAI to complex, real-world workflows." />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.id}>
            <ProjectVisual type={project.visual} />
            <div className="project-copy">
              <div className="project-heading">
                <div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div>
                <span className="project-number">{project.id}</span>
              </div>
              <p className="project-summary">{project.summary}</p>
              <p className="project-approach">{project.approach}</p>
              <ul className="project-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-wrap" id="experience">
      <SectionHeading index="04" title="Experience" note="Building and shipping AI-powered products with enterprise teams." />
      <div className="experience-list">
        {experience.map((job, index) => (
          <article className="experience-item reveal" key={job.company}>
            <div className="experience-meta"><span className={job.current ? 'status-dot is-current' : 'status-dot'} />{job.period}</div>
            <div className="experience-main">
              <div className="experience-title">
                <div><h3>{job.role}</h3><p>{job.company} <span>·</span> {job.location}</p></div>
                <span className="experience-number">0{index + 1}</span>
              </div>
              <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education-section section-wrap">
      <div className="education-column reveal">
        <span className="micro-label">EDUCATION</span>
        <div className="education-entry">
          <span className="education-year">2018 — 2022</span>
          <div><h3>B.Tech in Electronics</h3><p>MIT Academy of Engineering</p></div>
          <strong>8.63 <small>/ 10 CGPA</small></strong>
        </div>
      </div>
      <div className="certifications-column reveal">
        <span className="micro-label">CERTIFICATIONS</span>
        <ul className="certification-list">
          {certifications.map((cert) => (
            <li key={cert.code}>
              <div><strong>{cert.name}</strong><span>{cert.code}</span></div>
              <time>{cert.date}</time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-inner reveal">
        <div className="contact-topline"><span>HAVE SOMETHING GOOD IN MIND?</span><span>05 / CONTACT</span></div>
        <h2>Let’s make<br /><em>useful things.</em></h2>
        <div className="contact-bottom">
          <p>Open to conversations about thoughtful AI products, engineering, and what we could build next.</p>
          <a className="contact-email" href="mailto:rnrathod16@gmail.com">rnrathod16@gmail.com <ArrowIcon diagonal /></a>
        </div>
      </div>
    </section>
  );
}

function Footer({ crowdPaused, onToggleCrowd }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-columns footer-container">
          <div className="footer-identity">
            <h2>Ritesh<span>.</span></h2>
            <p>Full Stack GenAI Developer.</p>
          </div>
          <nav className="footer-explore" aria-label="Footer navigation">
            <span className="footer-overline">Explore</span>
            <div className="footer-nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#work">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
          <div className="footer-contact">
            <span className="footer-overline">Get in touch</span>
            <a href="mailto:rnrathod16@gmail.com">rnrathod16@gmail.com <ArrowIcon diagonal /></a>
            <small>© {new Date().getFullYear()} Ritesh Rathod</small>
          </div>
        </div>
        <div className="footer-signoff footer-container">
          <h2>See you around.</h2>
          <div className="footer-signoff-actions">
            <a className="back-to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </div>
      <CrowdScene paused={crowdPaused} onToggle={onToggleCrowd} />
      <div className="footer-tail">
        <span>Finally, some traffic on my website.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const [crowdPaused, setCrowdPaused] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('js-ready');
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell" data-theme={theme}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header theme={theme} onToggleTheme={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
      <main id="main">
        <Hero />
        <About />
        <SkillSection />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer crowdPaused={crowdPaused} onToggleCrowd={() => setCrowdPaused((value) => !value)} />
    </div>
  );
}
