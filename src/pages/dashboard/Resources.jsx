import React from 'react';
import { motion } from 'framer-motion';
import img0 from './img/channels4_profile.jpg';
import img1 from './img/channels4_profile (1).jpg';
import img2 from './img/channels4_profile (2).jpg';
import img3 from './img/channels4_profile (3).jpg';
import img4 from './img/channels4_profile (4).jpg';
import img5 from './img/channels4_profile (5).jpg';
import img6 from './img/channels4_profile (6).jpg';
import img7 from './img/channels4_profile (7).jpg';
import img8 from './img/channels4_profile (8).jpg';
import img9 from './img/channels4_profile (9).jpg';
import img10 from './img/channels4_profile (10).jpg';
import img11 from './img/channels4_profile (11).jpg';
import img12 from './img/channels4_profile (12).jpg';
import img13 from './img/unnamed.jpg';
import img14 from './img/unnamed (1).jpg';

const runningSkills = [
  { 
    img: img0,
    name: "Ali Hossain",
    best: "html5, css3, javascript, typescript, react, next.js, redux, bootstrap, tailwindcss, node.js, express.js, mongodb, firebase, git, github, api integration etc.",
    country: "Bangladesh",
    dec: "Ali Hossain মূলত modern web development নিয়ে কাজ করে। উনার ভিডিওগুলো beginner থেকে advanced level পর্যন্ত অনেক helpful। React, Next.js, TailwindCSS এবং full stack development খুব সুন্দরভাবে project based শিখানো হয়।",
    Lk: "https://www.youtube.com/@aliHossain021/search?query=next.js"
  },
  { 
    img: img1,
    name: "Learn with Sumit",
    best: "html5, css3, javascript, react, next.js, redux, bootstrap, tailwindcss, node.js, express.js, mongodb, firebase, git, github, authentication etc.",
    country: "Bangladesh",
    dec: "Learn with Sumit বাংলাদেশের অন্যতম জনপ্রিয় programming channel। খুব সহজ ভাষায় MERN stack, JavaScript ও problem solving শেখানো হয়। Beginner এবং intermediate developer দের জন্য এই channel অনেক useful।",
    Lk: "https://www.youtube.com/@LearnwithSumit"
  },
  { 
    img: img2,
    name: "Coding2GO",
    best: "html5, css3, javascript, react, vite, bootstrap, tailwindcss, node.js, express.js, mongodb, animations, ui design, frontend development etc.",
    country: "England",
    dec: "Coding2GO channel এ modern UI design এবং responsive website tutorial বেশি পাওয়া যায়। Frontend development এর জন্য channel টি অনেক জনপ্রিয়। Creative animation এবং stylish website design শেখার জন্য অনেক ভালো।",
    Lk: "https://www.youtube.com/@coding2go"
  },
  { 
    img: img3,
    name: "GreatStack",
    best: "html5, css3, javascript, react, next.js, bootstrap, tailwindcss, node.js, express.js, mongodb, firebase, api, responsive design etc.",
    country: "United States",
    dec: "GreatStack channel এ professional level project tutorial এবং full website clone তৈরি শেখানো হয়। React এবং Next.js নিয়ে অনেক quality content আছে। Modern frontend development শেখার জন্য channel টি খুব helpful।",
    Lk: "https://www.youtube.com/@GreatStackDev"
  },
  { 
    img: img4,
    name: "CodeTutor",
    best: "html5, css3, javascript, react, bootstrap, tailwindcss, node.js, express.js, mongodb, firebase, git, github, web design etc.",
    country: "Bangladesh",
    dec: "CodeTutor বাংলা ভাষায় web development শেখানোর জন্য পরিচিত। Beginner দের জন্য step by step tutorial অনেক সহজভাবে explain করা হয়। HTML, CSS, JavaScript এবং React এর basic থেকে advanced tutorial পাওয়া যায়।",
    Lk: "https://www.youtube.com/@CodeTutorBD"
  },
  { 
    img: img5,
    name: "Anisul Islam",
    best: "html5, css3, javascript, c programming, java, python, react, bootstrap, tailwindcss, node.js, database, programming basics etc.",
    country: "Bangladesh",
    dec: "Anisul Islam বাংলাদেশের অন্যতম জনপ্রিয় programming শিক্ষক। বিভিন্ন programming language এবং computer science topic খুব সুন্দরভাবে শেখানো হয়। Beginner student দের জন্য channel টি অনেক helpful এবং informative।",
    Lk: "https://www.youtube.com/@anisul-islam"
  },
  { 
    img: img6,
    name: "JavaScript Mastery",
    best: "javascript, typescript, react, next.js, redux, tailwindcss, node.js, express.js, mongodb, firebase, api integration, full stack development etc.",
    country: "England",
    dec: "JavaScript Mastery channel এ advanced level React এবং full stack project tutorial পাওয়া যায়। Professional portfolio project তৈরি শেখানো হয়। Modern JavaScript ecosystem শেখার জন্য এই channel অনেক জনপ্রিয়।",
    Lk: "https://www.youtube.com/@javascriptmastery"
  },
  { 
    img: img7,
    name: "Apna College",
    best: "html5, css3, javascript, java, c++, dsa, react, node.js, mongodb, express.js, bootstrap, tailwindcss, placement preparation etc.",
    country: "India",
    dec: "Apna College channel এ programming এবং placement preparation related content বেশি পাওয়া যায়। DSA, web development এবং interview preparation অনেক সুন্দরভাবে explain করা হয়। Student দের জন্য খুব useful একটি channel।",
    Lk: "https://www.youtube.com/@ApnaCollegeOfficial"
  },
  { 
    img: img8,
    name: "Programming with Mosh",
    best: "html5, css3, javascript, python, react, node.js, express.js, mongodb, sql, backend development, full stack development etc.",
    country: "United States",
    dec: "Programming with Mosh channel এ professional quality programming tutorial পাওয়া যায়। Web development, backend এবং software engineering topic খুব clear ভাবে explain করা হয়। Beginner থেকে advanced developer সবাই উপকার পাবে।",
    Lk: "https://www.youtube.com/@programmingwithmosh"
  },
  { 
    img: img9,
    name: "Sahil & Sarra",
    best: "html5, css3, javascript, react, next.js, ui design, frontend development, animations, responsive design, tailwindcss etc.",
    dec: "Sahil & Sarra channel এ creative web design এবং modern frontend tutorial বেশি পাওয়া যায়। Stylish UI এবং responsive website design শেখার জন্য channel টি অনেক ভালো। Frontend developer দের জন্য অনেক helpful content আছে।",
    country: "United States",
    Lk: "https://www.youtube.com/@sahilandsarra"
  },
  { 
    img: img10,
    name: "Hablu Programmer",
    best: "html5, css3, javascript, react, bootstrap, tailwindcss, node.js, express.js, mongodb, wordpress, freelancing, web development etc.",
    country: "Bangladesh",
    dec: "Hablu Programmer channel এ বাংলা ভাষায় web development এবং freelancing related tutorial পাওয়া যায়। Beginner দের জন্য অনেক সহজভাবে coding শেখানো হয়। Freelancing career শুরু করতে এই channel অনেক helpful।",
    Lk: "https://www.youtube.com/@HabluProgrammer"
  },
  { 
    img: img11,
    name: "Code Traversal",
    best: "html5, css3, javascript, react, next.js, bootstrap, tailwindcss, node.js, mongodb, express.js, api, frontend development etc.",
    country: "United States",
    dec: "Code Traversal channel এ modern website design এবং coding tutorial পাওয়া যায়। Responsive website এবং animation based project বেশি শেখানো হয়। Frontend developer দের জন্য channel টি খুব useful।",
    Lk: "https://www.youtube.com/@codetraversal"
  },
  { 
    img: img12,
    name: "Codehal",
    best: "html5, css3, javascript, react, ui design, animations, responsive design, bootstrap, tailwindcss, frontend development etc.",
    country: "United States",
    dec: "Codehal channel এ stylish UI design এবং frontend project tutorial বেশি পাওয়া যায়। Modern animation এবং responsive layout শেখার জন্য এই channel অনেক জনপ্রিয়। Beginner frontend developer দের জন্য খুব helpful।",
    Lk: "https://www.youtube.com/@codehal"
  },
  { 
    img: img13,
    name: "Learn with Hasin",
    best: "html5, css3, javascript, react, node.js, mongodb, express.js, firebase, api, git, github, full stack development etc.",
    country: "Bangladesh",
    dec: "Learn with Hasin channel এ বাংলা ভাষায় full stack web development শেখানো হয়। Real project based tutorial এবং coding tips অনেক useful। MERN stack developer হতে চাইলে এই channel অনেক helpful হবে।",
    Lk: "https://www.youtube.com/@LearnWithHasinHayder"
  },
  { 
    img: img14,
    name: "Web Ship",
    best: "html5, css3, javascript, react, next.js, bootstrap, tailwindcss, node.js, express.js, mongodb, firebase, frontend development etc.",
    country: "Bangladesh",
    dec: "Web Ship channel এ modern web development এবং responsive website tutorial পাওয়া যায়। React এবং TailwindCSS নিয়ে অনেক সুন্দর project তৈরি শেখানো হয়। Beginner এবং intermediate developer দের জন্য অনেক useful একটি channel।",
    Lk: "https://www.youtube.com/@WebShip"
  },
];

export default function RunningSkills() {

  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {runningSkills.map((skill, i)=>(
          <div  key={i} className='md:w-8/10 w-full mx-auto'>
            <motion.div initial={{ opacity: 0, y:20}} animate={{opacity:1, y:0}} transition={{delay: i*0.1}}>
              <div className='border-gray-600 m-5 rounded-lg bg-gray-100 overflow-hidden'>
                <img className='w-full opacity-70 hover:opacity-100 cursor-pointer hover:scale-105 duration-500' src={skill.img}/>
                <h1 className='my-3 text-black font-bold ml-1 text-2xl'>Name: <span className='ml-2 text-xl font-semibold text-[#06B6D4]'>{skill.name}</span></h1>
                <p className='my-2 font-bold text-2xl text-black ml-1'>Best: <span className='font-semibold ml-2 text-xl'>{skill.best}</span></p>
                <p className='my-2 font-bold text-2xl text-black ml-1'>Country: <span className='font-semibold ml-2 text-xl'>{skill.country}</span></p>
                <p className='my-2 font-bold text-2xl text-black ml-1'>Description: <span className='font-semibold ml-2 text-xl'>{skill.dec}</span></p>
                <a href={skill.Lk} target="_blank" rel="noopener noreferrer" className='block text-center bg-[#06B6D4] text-white py-2 rounded-lg hover:bg-[#0ea5e9] transition-colors duration-300'>Learn More</a>
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </>
  )
}