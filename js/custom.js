// drop down 
$('.ui.dropdown').dropdown();

// sidebar 
$('.ui.sidebar').sidebar('attach events','.toc.item');

//local location variable and feeback

var content = [

  { title:'Physics' },
  { title:'Quran' },
  { title:'Chemistry' },
  { title:'Biology' },
  { title:'Mathematics' },
  { title:'Computer Science' },
  { title:'Urdu' },
  { title:'Pakistan Studies' },
  { title:'Islamiat' },
  { title:'Economics'},
  { title:'Psychology'},
  { title:'Sociology'},
  { title:'Business Mathematics'},
  { title:'Principles of Micro Economics'},
  { title:'Principles of Financial Accounting'},
  { title:'Fundamentals of Information Technology'},
  { title:'Elements of Management'},
  { title:'Principles of Macro Economics'},
  { title:'Company Accounts'},
  { title:'Logic & Critical Thinking'},
  { title:'Government & Business'},
  { title:'Cost & Management Accounting'},
  { title:'Oral Communication in Business'},
  { title:'Managerial Skills'},
  { title:'Taxation'},
  { title:'Introduction to Operations Research'},
  { title:'Introduction to Ethics & Corporate Social Responsibility'},
  { title:'Business Law'},
  { title:'Fundamentals of Financial Management'},
  { title:'Human Resource Management'},
  { title:'Introduction to Operations Management'},
  { title:'Entrepreneurship'},
  { title:'Fundamental of International Business'},
  { title:'Principles of Research Methodology'},
  { title:'Management Information System'},
  { title:'Introduction to Strategic Management'},
  { title:'Financial Services'},
  { title:'Fundamentals OF Accounting'},
  { title:'Quantitative aptitude'},
  { title:'Mercantile Law'},
  { title:'General Economics'},
  { title:'General English'},
  { title:'Business Communication'},
  { title:'Cost Accounting and Financial Management'},
  { title:'Taxation'},
  { title:'Advanced Accounting'},
  { title:'Auditing and Assurance'},
  { title:'Information Technology and Strategy Management'},
  { title:'Financial Reporting'},
  { title:'Strategic Financial Management'},
  { title:'Advanced Auditing and Professional Ethics'},
  { title:'Corporate and Allied Laws'},
  { title:'Advanced Management Accounting'},
  { title:'Information Systems Control and Audit'},
  { title:'Direct Tax Laws'},
  { title:'Indirect Tax Laws'},
  { title:'Computer Graphics'},
  { title:'Programming Languages'},
  { title:'Compiler Construction'},
  { title:'Advance Computer Programming'},
  { title:'Oracle'},
  { title:'Databeses Terminology'}
   
 
];

$('.ui.search')
  .search({
    source: content,
    searchFullText:false
  });