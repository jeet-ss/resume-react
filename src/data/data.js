import { nanoid } from 'nanoid';
//import Bagnet_img from './../images'

// HEAD DATA
export const headData = {
  title: 'Jeet | Developer', // e.g: 'Name | Developer'
  lang: 'en, de', // e.g: en, es, fr, jp
  description: 'Welcome to my place', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jeet Sen Sarma',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: 'Hi, I am Jeet. I am an AI enthusiast and my Research interest includes Music/Audio Processing, Robotics and their implemenation for solving real life problems.',
  paragraphTwo: 'Pursuing innovation and building a team to materialize new ideas is my prime objective in life',
  paragraphThree: 'Download my Resume to know me better',
  resume: 'https://drive.google.com/file/d/144LLvCHmjDYmkJRJUTuDpsDOXK7Ge5z6/view?usp=sharing', // if no resume, the button will not show up
};

// Experience Data



// PROJECTS DATA
export const projectsData = [
  {
    id: 3,
    img: 'img/Bagnet_img.png',
    title: 'Visual Attention Mechanism on BagNets architecture',
    institute: 'FAU, Erlangen',
    prof: 'Dr. Dario Zanca',
    info: "10 Apr 2022 - 14 Nov 2022",
    info2: 'Under the guidance of Dr. Dario Zanca, I applied various human attention mechanisms on the BagNets architecture using Pytorch to improve on its accuracy. However, we found that such mechanisms were having a detoriating effect on its performance',
    url: 'https://drive.google.com/file/d/14GRoZaRSi6tI5R31u4S1OU4VZMx8MNX3/view?usp=sharing',
    repo: 'https://github.com/jeet-ss/AttentionMechanism_BAGNETS.git', // if no repo, the button will not show up
    tags: ['ML', 'Computer Vision'],
  },
  {
    id: 2,
    img: 'img/showTell_img.png',
    title: 'Image Captioning Using Deep Learning',
    institute: 'VECC, Kolkata',
    prof: 'Dr. Biswajit Sarkar',
    info: '15 May 2018 - 17 Jul 2018 ',
    info2: 'I worked on an Image Captioning Algorithm using LSTM and CNN under Scientist Biswajit Sarkar in Variable Energy Cyclotron Centre, Kolkata, India.',
    url: 'https://drive.google.com/file/d/1LEBtvQ-wFdj1uLSF6JekOSKkSGLGJjfH/view?usp=sharing',
    repo: 'https://github.com/jeet-ss/Caption_generation.git', // if no repo, the button will not show up
    tags: [ 'ML','Img2Seq', ]
  },
  {
    id: 1,
    img: 'img/Peshwar_img1.jpg',
    title: 'Periscopic Exploration for Shallow Water Amphibian Robot',
    institute: 'CSIR-CMERI, Durgapur',
    prof: 'Dr. Sarbari Dutta, Rudra Pratap Chatterjee',
    info: '15 May 2017 - 18 Jul 2017 ',
    info2: 'I was involved in the designing of a periscopic device to enhance the visibility of an Amphibian Robot which was used to solve the turbidity problem in shallow underwater condition during exploration at CSIR-CMERI, Durgapur.',
    url: 'https://drive.google.com/file/d/1KnrKE8LYWkrzGc-c606Sv3E93MCkSUc7/view?usp=sharing',
    repo: '', // if no repo, the button will not show up,
    tags: ['Robotics', 'Optics'],
  },
  {
    id: 4,
    img: 'img/Peshwar_img1.jpg',
    title: 'Mini-SPICE',
    institute: 'FAU, Erlangen',
    prof: 'Prof. Dr. Meinard Müller',
    info: '10 April 2023 - 10 Oct 2023 ',
    info2: 'Fundamental Frequency estimation using Mini Spice',
    url: 'https://drive.google.com/file/d/1KnrKE8LYWkrzGc-c606Sv3E93MCkSUc7/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
    tags: [],
  },
  
  
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to get to know me better? Awesome!",
  btn: "Let's Talk",
  email: 'jeet.sensarma@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeet-sensarma/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeet-ss',
    },
  ],
};

const skill_ml = [ 
  {
      name:"Python",
      value: 90,
  },
  {
      name:"Pytorch",
      value: 80,
  },
  {
      name:"Ray tune",
      value: 30,
  },
  {
      name:"Lightning",
      value: 50,
  },
  ]

const skill_front = [
  {
      name:"Javascript",
      value: 90,
  },
  {
      name:"Typescript",
      value: 70,
  },
  {
      name:"Svelte",
      value: 50,
  },
  {
      name:"React",
      value: 80,
  },
]
const skill_back = [
  {
      name:"Java",
      value: 80,
  },
  
  {
      name:"C++",
      value: 60,
  },
  {
      name:"C",
      value: 90,
  },
  
  {
      name:"Springboot",
      value: 60,
  },  
  
]
const skill_cloud = [
  {
      name:"Linux",
      value: 70,
  },
  
  {
      name:"Docker",
      value: 60,
  },
  {
      name:"Collab",
      value: 50,
  },
  
  {
      name:"Aws",
      value: 70,
  },]

export const schoolData = [
    
    {
        id: 1,
        title: 'Calcutta Airport English High School',
        degree: 'Secondary school',
        marks: 'Marks 92%',
        year:'2014',
        value: 70,
        abc: "50%",
        a2: "90"
    },
    {
        id: 2,
        title: 'National Institute of Technology, Durgapur, India',
        degree: 'Bachelor of Technology in Electronics and Communication Engineering',
        marks: 'CGPA 9.1',
        year:'2019',
        value: 80,
        abc: "75%",
        a2: "50"
    },
    {
        id: 3,
        title: 'Friedrich-Alexander Universität, Erlangen-Nürnberg, Germany',
        degree: 'Master of Science in Artificial Intelligence',
        marks: 'GPA 1.7',
        year:'2023',
        value: 90,
        abc: "100%",
        a2: "10"
    },
]

export const skillsData = [ {title:"Machine Learning Tools", arr:skill_ml}, {title: "BackEnd Development",arr:skill_back},  {title: "FrontEnd Development",arr:skill_front}, {title:"Cloud Development ", arr:skill_cloud} ]
export const pdata = [ {arr:schoolData},]

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
