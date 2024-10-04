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
//////////////////////////////
// Experience Data
//////////////////////////////
export const experienceData = [
  {   id: 1,
      label: "Application Developer | FullTime",
      date: "7 Aug 2019 - 29 Oct 2020",
      content:"Comviva, Bangalore, India", 
      description: "End-to-End Development of Web Applications using Micro-Services architecture.",
      tags: [ { title:"Java", img:'img/java_logo.png' },{ title:"React", img:'img/react_logo.png' },{ title:"SpringFramework", img:'img/spring_logo_wh.png'}, ],
  },
  {   
      id:2,
      label: "Web Developer | WerkStudent",
      date: "1 Jun 2021 - 30 Nov 2021",
      content: "Lehrstuhl für Ressourcen- und Energie effiziente Produktions maschinen, FAU, Nürnberg, Germany", 
      description:"Development of common platform for sharing of resources among production industries in Germany.",
      tags: [ { title:"React", img:'img/react_logo.png' },{ title:"Mi UI", img:'img/mui_logo.png'}, { title:"TypeScript", img:'img/Typescript_logo.png'}],
  },
  {   
      id:3,
      label: "TA for Computer Vision | WerkStudent",
      date: "14 Apr 2022 - 31 Jul 2022",
      content: "Lehrstuhl für Informatik 5, FAU, Erlangen, Germany", 
      description: "Helping students hands on with CV techniques and algorithms in Python during the Summer Semester of 2022",
      tags: [ { title:"Python", img:'img/python_logo.png'},{ title:"OpenCV", img:'img/opencv_svg.png' }],
  },
  {   
      id:4,
      label: "TA in Algorithms and Programming | WerkStudent",
      date: "1 Oct 2022 - 31 Mar 2023",
      content: "Professur für Image Data Exploration and Analysis, FAU, Erlangen, Germany", 
      description: "Guiding students in their journey of Algorithms and Programming with Python. ",
      tags: [ { title:"Python", img:'img/python_logo.png'},{ title:"MS Office",img:'img/ms_logo_bl.png' }],
  },
  {   
      id:5,
      label: "Research Intern | WerkStudent",
      date: "1 Jan 2023 - 31 June 2023",
      content: "Fraunhofer IIS, Nürnberg, Germany", 
      description: "Designing Quantum compilers using deep reinforcement learning at Self Learning Systems group",
      tags: [ { title:"PyTorch", img:'img/pytorch_logo_black.png'},{ title:"Qiskit", img:'img/qiskit_logo.png'}],
  },
  {   
      id:6,
      label: "Research Intern | WerkStudent",
      date: "1 Aug 2023 - 30 Dec 2023",
      content: "International AudioLabs, Erlangen, Germany", 
      description: "Automatic Transcription of Piano music using Deep Learning",
      tags: [ { title:"PyTorch", img:'img/pytorch_logo_black.png' }, ],
  },
  {   
    id:7,
    label: "Research Assistant",
    date: "16 Aug 2024 - Present",
    content: "Intelligent Embedded System, University of Kassel", 
    description: "Explainability of Graph Neural Networks.",
    tags: [ { title:"PyTorch-Geometric", img:'img/pyg_logo.png' },
            { title:"Captum", img:'img/captum-icon.png' } ],
}
]
//////////////////////////////
// PROJECTS DATA
//////////////////////////////

export const projectsData = [
  {
    id: 6,
    img: 'img/thesis2.png',
    title: 'Acoustical Parameter Estimation from Room Impulse Responses',
    institute: 'FAU, Erlangen',
    prof: 'Dr.-Ing. Maximilian Schäfer, Prof. Sebastian Schlecht',
    info: '01 July 2023 - 10 Nov 2023 ',
    info2: 'This thesis outlines a method for estimating the geometry of a room and reflection coefficients based on Room Impulse Responses (R.I.R.). The approach leverages the solution of omnidirectional damping density and employs the Gradient Descent al-gorithm to address the inverse problem.',
    url: 'https://drive.google.com/file/d/12tW0p2O41hvUhT9aJw8EAqX-rm8zesQH/view?usp=drive_link',
    repo: 'https://github.com/jeet-ss/ShoeboxEnergyDecay_PyTorch.git', // if no repo, the button will not show up
    tags: ['ML', 'Differentiable Physics'],
  },
  {
    id: 5,
    img: 'img/llr.png',
    title: 'Controller Design for Artificial Leg prostheses',
    institute: 'FAU, Erlangen',
    prof: 'Prof. Dr. Anne Koelewijn',
    info: '01 July 2023 - 10 Nov 2023 ',
    info2: 'Apllication of different ANN architechtures, like CNN, LSTM, to design a controller for Artificial Leg Prostheses. The data was recorded for 5 positions in the leg and the objective was to predict the output ankle joint torque in future. ',
    url: 'https://drive.google.com/file/d/12THxSTStOncPAUCRxQIfLS_vv6SjxwhB/view?usp=drive_link',
    repo: 'https://github.com/jeet-ss/LeggedLocomotion.git', // if no repo, the button will not show up
    tags: ['DL', 'Time-Series'],
  },
  {
    id: 4,
    img: 'img/decoder.png',
    title: 'Implementation of Mini-SPICE from scratch',
    institute: 'FAU, Erlangen',
    prof: 'Prof. Dr. Meinard Müller',
    info: '10 April 2023 - 10 Oct 2023 ',
    info2: 'Open Source, PyTorch re-Implemenation, of a State Of the Art model in the field of Fundamental Frequency tracking in Music signals. The original model named SPICE(Self-supervised PItCh Estimation), doesnot require manually annotated data to train whilst achieving SOA accuracy.',
    url: 'https://drive.google.com/file/d/1JN7z9y3PKq6XbcAL8pSUhWVPpiqihNcs/view?usp=drive_link',
    repo: 'https://github.com/jeet-ss/Mini_SPICE.git', // if no repo, the button will not show up
    tags: ['DL', 'Music Analysis'],
  },
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
    tags: [ 'DL','Img2Seq', ]
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
  
  
  
];
//////////////////////////////
// CONTACT DATA
//////////////////////////////

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
//////////////////////////////
// Skills
//////////////////////////////
const skill_ml = [ 
  {
    name:"Pytorch",
    value: 80,
  },
  {
      name:"Tensorflow",
      value: 70,
  },
  
  {
      name:"Ray tune",
      value: 40,
  },
  {
      name:"Lightning",
      value: 50,
  },
  ]

const skill_front = [
  {
    name:"React",
    value: 80,
  },
  {
      name:"Javascript",
      value: 80,
  },
  {
      name:"Typescript",
      value: 70,
  },
  {
      name:"Svelte",
      value: 50,
  },
  
]
const skill_back = [
  {
    name:"Python",
    value: 90,
  }, 
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
  
  
  
]
const skill_cloud = [
  {
      name:"Linux",
      value: 80,
  },
  
  {
      name:"Github",
      value: 70,
  },
  {
      name:"Docker",
      value: 60,
  },
  
  {
      name:"Aws/Collab",
      value: 40,
  },]
//////////////////////////////
// School EducationData
//////////////////////////////
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
        url: 'https://drive.google.com/file/d/140-oKOUt3ziw8noEZdT0a979i42th6rU/view?usp=drive_link',
        value: 80,
        abc: "75%",
        a2: "50"
    },
    {
        id: 3,
        title: 'Friedrich-Alexander Universität, Erlangen-Nürnberg, Germany',
        degree: 'Master of Science in Artificial Intelligence',
        marks: 'GPA 1.5',
        year:'2024',
        url: 'https://drive.google.com/file/d/1V5eYka7V7vm1ON7OoLniG93kcGv_akX-/view?usp=drive_link',
        value: 90,
        abc: "100%",
        a2: "10"
    },
]

export const skillsData = [ 
  {title:"Machine Learning Tools", arr:skill_ml}, 
  {title: "BackEnd Development", arr:skill_back},
  {title: "FrontEnd Development", arr:skill_front},
  {title:"Cloud Development ", arr:skill_cloud} 
]
export const pdata = [ {arr:schoolData}, ]

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};


export const commentsList = [
  {
      id: 1,
      av:"MM",
      name: "Prof. Dr. Meinard Müller",
      designation: "AI labs",
      company: "INTERNATIONAL AUDIO LABORATORIES ERLANGEN",
      comment: "Jeet actively participated in my music processing lecture, pursued a research internship, and worked as a student assistant in my group at the International Audio Laboratories Erlangen. He possesses extensive, in-depth, and varied expertise in machine learning, effectively applying this knowledge in practical scenarios. Jeet showed strong motivation and displayed a high level of initiative and dedication. He consistently demonstrated impressive scientific understanding, along with an excellent ability to collaborate within a team."

  },
  
]