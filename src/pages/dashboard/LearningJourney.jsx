import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export default function LearningJourney() {
  return (
    <section className="space-y-8">
      <div className='m-5 mt-20 lg:m-8'>
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-2">
          My Learning Journey<span className="text-primary">.</span>
        </h2>
        <p className=" flex items-center gap-4 font-inter text-sm">
          আমার শেখার যাত্রা <FaArrowRightArrowLeft /> আমার শেখার উৎস 
        </p>
      </div>

      <div className='flex flex-col ml-3 mt-20 lg:ml-3 lg:mt-6'>
        <div className='mt-5'>
          <h1 className='text-xl font-semibold italic text-[#61DAFB]'>একাধিক পথের সমন্বয়ে</h1>
          <hr className='border-[#61DAFB] w-60 mt-1'/>
            <p className='text-sm text-gray-300 space-y-6 tracking-[0.02rem] my-6 mx-2 leading-6'>আমি, একজন ম্যানেস্ট্যাগ ডেভেলপার, ২০২২ সালের জানুয়ারি মাসে আমার কোডিং শেখার যাত্রা শুরু করি। প্রতিদিন, আমি কমপক্ষে ৩ ঘণ্টা, আর মাঝে মাঝে ১০ ঘণ্টা সময় দিয়েছি, কারণ আমি জানতাম, ধারাবাহিক চর্চাই সাফল্যের চাবিকাঠি।
            শুরুর দিনগুলো সহজ ছিল না। অনেক সময় কোড কাজ করত না, অসংখ্য এরর সামনে আসত, আর রাতের পর রাত সমস্যার সমাধান খুঁজতে হয়েছে। তবুও আমি থেমে যাইনি। প্রতিটি ভুল থেকে নতুন কিছু শিখেছি, প্রতিটি ব্যর্থতাকে অভিজ্ঞতায় পরিণত করেছি।
            ধীরে ধীরে আমি নতুন নতুন প্রযুক্তি, ফ্রেমওয়ার্ক এবং ডেভেলপমেন্টের বাস্তব অভিজ্ঞতা অর্জন করি। শুধু কোড লেখা নয়, সমস্যা বিশ্লেষণ, সমাধান তৈরি এবং ব্যবহারকারীর জন্য কার্যকর প্রোডাক্ট তৈরি করার মানসিকতাও গড়ে উঠেছে।
            আজ আমি বিশ্বাস করি, প্রতিভার চেয়ে ধারাবাহিক পরিশ্রম এবং শেখার আগ্রহ মানুষকে অনেক দূর এগিয়ে নিয়ে যায়। আমার এই যাত্রা এখনো চলছে, কারণ প্রযুক্তির জগতে শেখার কোনো শেষ নেই।
            </p>
        </div>

        <div className='mt-7'>
          <h1 className='text-xl font-semibold italic text-[#61DAFB]'>ইউটিউব</h1>
          <hr className='border-[#61DAFB] w-24 mt-1'/>
            <p className='text-sm text-gray-300 space-y-6 tracking-[0.02rem] my-6 mx-2 leading-6'><a target='blank' className='text-[#61DAFB] hover:underline text-xl' href="https://www.youtube.com/">Youtube</a> ছিল আমার শেখার প্রথম দরজা। <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@TraversyMedia">Traversy Media</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@aliHossain021">Ali Hossain</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@GreatStackDev">GreatStack</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@anisul-islam">Anisul Islam</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@coding2go">Coding2GO</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@ApnaCollegeOfficial">Apna College</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@LearnwithSumit">Learn with Sumit</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@javascriptmastery">JavaScript Mastery</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@WebShip">Web Ship</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.youtube.com/@CodeTutorBD">CodeTutor</a> ইত্যাদি, এর মতো অসাধারণ চ্যানেলগুলো আমাকে বেসিক থেকে অ্যাডভান্স লেভেল পর্যন্ত পথ দেখিয়েছে। কিন্তু আমি শুধু ভিডিও দেখে থেমে থাকিনি। প্রতিটি টিউটোরিয়ালের পর নিজে হাতে প্রজেক্ট তৈরি করেছি, একই কোড বারবার লিখেছি, আর নতুনভাবে নিজের মতো করে ইমপ্লিমেন্ট করার চেষ্টা করেছি। অনেক সময় কোড কাজ করত না, অসংখ্য এরর আসত, আর ঘণ্টার পর ঘণ্টা ডিবাগ করতে হতো। তবুও আমি হাল ছাড়িনি। যখনই কোনো সমস্যায় পড়েছি, আবার ভিডিও দেখেছি, ডকুমেন্টেশন পড়েছি, Stack Overflow ঘেঁটেছি, আর নিজে চেষ্টা করে সমাধান বের করেছি। কারণ আমি জানতাম, একজন ভালো ডেভেলপার শুধু কোড লেখে না — সে সমস্যার সমাধান করতে শেখে। প্রতিদিন নিজেকে নতুন চ্যালেঞ্জ দিয়েছি। কখনো ছোট ছোট প্রজেক্ট, কখনো রিয়েল-লাইফ ফিচার তৈরি করেছি, যাতে শেখার পাশাপাশি বাস্তব অভিজ্ঞতাও অর্জন করতে পারি। এই ধারাবাহিক প্র্যাকটিস, ধৈর্য, এবং শেখার প্রতি গভীর আগ্রহই আমাকে আজকের অবস্থানে নিয়ে এসেছে।
            </p>
        </div>

        <div className='mt-7'>
          <h1 className='text-xl font-semibold italic text-[#61DAFB]'>গুগল</h1>
          <hr className='border-[#61DAFB] w-16 mt-1'/>
            <p className='text-sm text-gray-300 space-y-6 tracking-[0.02rem] my-6 mx-2 leading-6'><a target='blank' className='text-[#61DAFB] hover:underline text-xl' href="https://www.google.com/">Google</a> ছিল আমার শেখার যাত্রার সবচেয়ে নির্ভরযোগ্য সঙ্গী। নতুন কিছু জানার প্রয়োজন হলেই আমি গুগলে খুঁজতাম, কারণ প্রতিটি সমস্যার পেছনে লুকিয়ে থাকত নতুন কিছু শেখার সুযোগ। <a target='blank' className='text-[#61DAFB] hover:underline' href="https://www.w3schools.com/Html/">W3Schools</a>, <a target='blank' className='text-[#61DAFB] hover:underline' href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a>, এবং গুগলের অফিসিয়াল ডেভেলপার গাইডলাইন আমাকে ওয়েব ডেভেলপমেন্টের মৌলিক বিষয় থেকে শুরু করে বাস্তব জীবনের জটিল সমস্যাগুলো বুঝতে সাহায্য করেছে। প্রতিদিন অন্তত ৩ ঘণ্টা নিয়মিত প্র্যাকটিস করতাম, আর যখন কোনো নির্দিষ্ট টপিক গভীরভাবে শিখতে চাইতাম, তখন সেই সময় ১০ ঘণ্টারও বেশি হয়ে যেত। আমি শুধু পড়েই থেমে থাকিনি — প্রতিটি বিষয় নিজে হাতে কোড করে দেখেছি, ছোট ছোট প্রজেক্ট বানিয়েছি, আর ইচ্ছাকৃতভাবে নতুন নতুন সমস্যার মুখোমুখি হয়েছি, যাতে শেখাটা আরও বাস্তব হয়। অনেক সময় কোডে ভুল হতো, কাজ করত না, বা অদ্ভুত এরর আসত। কিন্তু সেই মুহূর্তগুলোই আমাকে সবচেয়ে বেশি শিখিয়েছে। আমি ধৈর্য ধরে সমস্যা বিশ্লেষণ করেছি, বিভিন্ন সমাধান খুঁজেছি, এবং বারবার চেষ্টা করে নিজের ভুল নিজেই ঠিক করেছি। এই অভ্যাস শুধু আমার স্কিল বাড়ায়নি, বরং আমাকে আরও আত্মবিশ্বাসী, ধৈর্যশীল এবং সমস্যার সমাধানে দক্ষ একজন ডেভেলপারে পরিণত করেছে। অনেক সময় কোডে ভুল হতো, কাজ করত না, বা অদ্ভুত এরর আসত। কিন্তু সেই মুহূর্তগুলোই আমাকে সবচেয়ে বেশি শিখিয়েছে। আমি ধৈর্য ধরে সমস্যা বিশ্লেষণ করেছি, বিভিন্ন সমাধান খুঁজেছি, এবং বারবার চেষ্টা করে নিজের ভুল নিজেই ঠিক করেছি। এই অভ্যাস শুধু আমার স্কিল বাড়ায়নি, বরং আমাকে আরও আত্মবিশ্বাসী, ধৈর্যশীল এবং সমস্যার সমাধানে দক্ষ একজন ডেভেলপারে পরিণত করেছে।
            </p>
        </div>

        <div className='mt-7'>
            <h1 className='text-xl font-semibold italic text-[#61DAFB]'>ফ্রি রিসোর্স</h1>
          <hr className='border-[#61DAFB] w-28 mt-1'/>
            <p className='text-sm text-gray-300 space-y-6 tracking-[0.02rem] my-6 mx-2 leading-6'><a target='blank' className='text-[#61DAFB] hover:underline text-xl' href="https://www.freecodecamp.org/">FreeCodeCamp</a>, <a target='blank' className='text-[#61DAFB] hover:underline text-xl' href="https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwi-mKrkw7GUAxWAxjwCHes8GPAYACICCAEQABoCc2Y&co=1&ase=2&gclid=Cj0KCQjw_IXQBhCkARIsADqELbIR5mfGZtQnzbPtKB3U2H4Oq22BymwKYBPU5GvvjSRF97GhnfVBvncaAoZeEALw_wcB&cid=CAASuwHkaK0_R7M12X8BdxlM7tBAixh9YKB5qWs5AIZLfTFVZlfSSgsXcVISW5zR38rwELz4Gr_MNeC3uYcgIorg_E6CCRYiriKGLgMZaeXOaeIAIklUC27rTAOz7SIrX-YVh5_n7-MqZm6G3YlIen3EkCtcwZ3BK0EvvwDCQNQVXKhv7hkvbFQXbR2_7E_0EwR7jnGUUOjqFqEYJlvqV1BEtPQSBufg9-jNpmKOyE-NWIaljj4bSVqigurjJxGX&cce=2&category=acrcp_v1_32&sig=AOD64_2jvLPau8yDEBahRauLs9BPZextHw&q&nis=4&adurl=https://www.codecademy.com?g_network%3Dg%26g_productchannel%3D%26g_adid%3D715097836523%26g_locinterest%3D%26g_keyword%3Dcodecademy.com%26g_acctid%3D243-039-7011%26g_adtype%3D%26g_keywordid%3Dkwd-361270658530%26g_ifcreative%3D%26g_campaign%3Daccount%26g_locphysical%3D9069505%26g_adgroupid%3D174823581584%26g_productid%3D%26g_source%3D%7Bsourceid%7D%26g_merchantid%3D%26g_placement%3D%26g_partition%3D%26g_campaignid%3D1726903838%26g_ifproduct%3D%26utm_id%3Dt_kwd-361270658530:ag_174823581584:cp_1726903838:n_g:d_c%26utm_source%3Dgoogle%26utm_medium%3Dpaid-search%26utm_term%3Dcodecademy.com%26utm_campaign%3DINTL_Brand_Exact%26utm_content%3D715097836523%26g_adtype%3Dsearch%26g_acctid%3D243-039-7011%26gad_source%3D1%26gad_campaignid%3D1726903838%26gbraid%3D0AAAAAon8KZHgai15m_sqKMMU1rsXy_5DU%26gclid%3DCj0KCQjw_IXQBhCkARIsADqELbIR5mfGZtQnzbPtKB3U2H4Oq22BymwKYBPU5GvvjSRF97GhnfVBvncaAoZeEALw_wcB&ved=2ahUKEwj1vaTkw7GUAxWTTWwGHVqhLVgQ0Qx6BAgWEAE">Codecademy</a>, এবং অন্যান্য ওপেন সোর্স লার্নিং প্ল্যাটফর্ম আমার শেখার যাত্রার শক্ত ভিত্তি তৈরি করেছে। এই ফ্রি রিসোর্সগুলো আমাকে বুঝিয়েছে যে, শেখার জন্য সবসময় বড় সুযোগ বা ব্যয়বহুল কোর্সের প্রয়োজন হয় না — প্রয়োজন শুধু আগ্রহ, ধৈর্য, এবং ধারাবাহিক চর্চা।
                        আমি প্রতিদিন অন্তত ৩ ঘণ্টা নিয়মিত অনুশীলন করতাম, আর যখন কোনো নতুন প্রযুক্তি বা প্রজেক্ট নিয়ে গভীরভাবে কাজ করতাম, তখন সেই সময় ১০ ঘণ্টারও বেশি হয়ে যেত। শুধু টিউটোরিয়াল দেখা বা কোড কপি করা নয়, আমি প্রতিটি বিষয় নিজে হাতে তৈরি করার চেষ্টা করেছি। ছোট ছোট প্রজেক্ট বানিয়েছি, পুরোনো কোড নতুনভাবে লিখেছি, এবং বাস্তব সমস্যার সমাধান করার মাধ্যমে নিজের দক্ষতা বাড়িয়েছি।
                        অনেক সময় এমন হয়েছে, কোনো কোড কাজ করছে না বা একটি ছোট ভুল খুঁজে পেতে ঘণ্টার পর ঘণ্টা লেগে গেছে। তখন আমি আবার ভিডিও দেখেছি, ডকুমেন্টেশন পড়েছি, এবং ধৈর্য ধরে নিজের ভুল নিজেই ঠিক করার চেষ্টা করেছি। কারণ আমি বিশ্বাস করতাম, একজন ডেভেলপার তখনই সত্যিকারের দক্ষ হয়, যখন সে সমস্যার সামনে থেমে না গিয়ে সমাধান খুঁজতে শেখে।
                       এই অফলাইন প্র্যাকটিস, নিজের ওপর বিশ্বাস, এবং প্রতিটি ভুল থেকে শেখার মানসিকতাই আমার আত্মবিশ্বাস বাড়িয়েছে। ধীরে ধীরে আমি বুঝতে পেরেছি — কোডিং শুধু একটি স্কিল নয়, এটি এমন একটি যাত্রা যেখানে প্রতিদিন নতুন কিছু শেখা, ভুল করা, এবং নিজেকে আরও ভালো করে গড়ে তোলাই আসল সাফল্য।
            </p>
        </div>

        <div className='mt-7'>
            <h1 className='text-xl font-semibold italic text-[#61DAFB]'>এআই টুল</h1>
          <hr className='border-[#61DAFB] w-28 mt-1'/>
            <p className='text-sm text-gray-300 space-y-6 tracking-[0.02rem] my-6 mx-2 leading-6'><a target='blank' className='text-[#61DAFB] hover:underline text-xl' href="https://www.google.com/">Google</a> এর বিভিন্ন AI টুল এবং আধুনিক ডেভেলপমেন্ট সহায়ক প্রযুক্তি আমার শেখার যাত্রাকে আরও দ্রুত ও কার্যকর করেছে। কোডিংয়ের সময় যখনই কোনো জটিল সমস্যা, এরর, বা লজিক্যাল ইস্যুর মুখোমুখি হয়েছি, তখন AI আমাকে দ্রুত সমস্যা শনাক্ত করতে এবং সম্ভাব্য সমাধানের দিকনির্দেশনা দিতে সাহায্য করেছে।
              প্রতিদিন অন্তত ৩ ঘণ্টা সময় নিয়ে আমি আমার কোড রিভিউ করেছি, বিভিন্ন সমাধান বিশ্লেষণ করেছি, এবং AI টুল ব্যবহার করে নিজের ভুলগুলো বোঝার চেষ্টা করেছি। তবে আমি কখনোই শুধু AI-এর উপর নির্ভর করিনি। বরং প্রতিটি সাজেশন নিজে যাচাই করেছি, নিজে কোড লিখেছি, এবং কেন একটি সমাধান কাজ করছে — সেটি গভীরভাবে বোঝার চেষ্টা করেছি।
              যখন কোনো সমস্যা সমাধান করতে পারিনি, তখন আবার ভিডিও টিউটোরিয়াল দেখেছি, ডকুমেন্টেশন পড়েছি, এবং নিজে হাতে বারবার প্র্যাকটিস করেছি। এই প্রক্রিয়া আমাকে শুধু দ্রুত শিখতেই সাহায্য করেনি, বরং সমস্যা বিশ্লেষণ করার ক্ষমতা এবং আত্মবিশ্বাসও বাড়িয়েছে।
              আমি বিশ্বাস করি, AI একজন ডেভেলপারের বিকল্প নয় — বরং এটি একজন ডেভেলপারের দক্ষতাকে আরও শক্তিশালী করার একটি বুদ্ধিমান সহায়ক। সঠিকভাবে ব্যবহার করলে AI শেখার গতি বাড়ায়, সময় বাঁচায়, এবং একজন ডেভেলপারকে আরও কার্যকরভাবে চিন্তা করতে সাহায্য করে।
            </p>
        </div>

        <div className='mt-7'>
            <h1 className='text-xl font-semibold italic text-[#61DAFB]'>ধারাবাহিক পরিশ্রমই সাফল্যের চাবিকাঠি</h1>
            <hr className='border-[#61DAFB] w-60 md:w-96 mt-1'/>
            <p className='text-sm text-gray-300 space-y-6 tracking-[0.02rem] my-6 mx-2 leading-6'>এইভাবেই প্রতিদিন অন্তত ৩ ঘণ্টা, আর কখনো কখনো ১০ ঘণ্টা সময় দিয়ে, বিভিন্ন ফ্রি ও পেইড রিসোর্স, প্রযুক্তি, এবং নিরলস অধ্যবসায়ের মাধ্যমে আমি ধীরে ধীরে আজকের এই অবস্থানে পৌঁছেছি। শুধু ভিডিও দেখা নয় — নিয়মিত প্রজেক্ট তৈরি করেছি, নিজে কোড লিখেছি, এবং অফলাইনে বারবার চেষ্টা করে শেখার অভ্যাস গড়ে তুলেছি। আমি চাই, তোমরাও শুধু টিউটোরিয়াল দেখে থেমে না থেকে বাস্তবে কাজ করো, ছোট ছোট প্রজেক্ট বানাও, নিজের ভুল থেকে শেখো, আর প্রতিদিন নিজেকে আগের দিনের চেয়ে আরও ভালো করার চেষ্টা করো। কারণ সত্যিকারের জ্ঞান আসে প্র্যাকটিস থেকে, আর ধারাবাহিক পরিশ্রমই একদিন স্বপ্নকে বাস্তবে রূপ দেয়।
            </p>
        </div>
      </div>
    </section>
  );
}