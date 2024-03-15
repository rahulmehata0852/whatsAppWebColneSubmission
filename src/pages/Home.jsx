import React from 'react'
import { PiUsersThreeDuotone } from "react-icons/pi";
import { GrEmptyCircle } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";

import { LuMessageSquarePlus } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FaVideo } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { MdWifi } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";








const Home = () => {


    const ChartData = [
        { hero: "https://plus.unsplash.com/premium_photo-1710294627170-e063a544a7e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8", name: "Rahul Mahato", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Shubham Tupe", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Priya kumari", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Vishal pal", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Samadhan Bodhkhe", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Sachin Bhople", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Bharat Bhople", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Nilu kumari", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Priyanka Singh", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://plus.unsplash.com/premium_photo-1710294627170-e063a544a7e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8", name: "Rahul Mahato", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Shubham Tupe", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Priya kumari", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Vishal pal", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Samadhan Bodhkhe", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Sachin Bhople", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Bharat Bhople", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D", name: "Nilu kumari", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D", name: "Priyanka Singh", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },
        { hero: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww", name: "Pawan Singh", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eligendi!" },

    ]


    return (
        <div>

            {/* 2 main grid strat */}

            <div className="grid overflow-hidden h-[100vh]   bg-white grid-cols-12 gap-1">

                {/* left side start */}
                <div className="sm:col-span-5 border h-screen  border-black   col-span-12">
                    {/* navbar   */}
                    <div className="p-2 px-6 justify-between items-center  bg-slate-100 flex">

                        <div className="">
                            <img className='h-10 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </div>
                        <div className="flex gap-6 items-center">

                            <PiUsersThreeDuotone className='text-[23px]' />
                            <GrEmptyCircle className='text-[23px]' />
                            <AiOutlineMessage className='text-[23px]' />
                            <LuMessageSquarePlus className='text-[23px]' />
                            <BsThreeDotsVertical className='text-[23px]' />
                        </div>

                    </div>

                    {/* search bar */}

                    <div className="p-2 border border-b-slate-300 flex items-center gap-4 ">
                        <div className="relative flex items-center gap-6 rounded-lg border border-balck px-4 border-e-0 w-full bg-slate-100">
                            <IoSearchSharp className='text-xl ' />
                            <input placeholder='Search or start new chat' className=' border-none outline-none text-black font-semibold  input-sm  bg-slate-100 w-full' type="text" />
                        </div>
                        <MdWifi className='text-2xl' />
                    </div>

                    {/* CHATS */}

                    <div className="overflow-y-auto h-[80%] sm:pt-10 pt-16 bg-stone-50   scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 w-full flex flex-col justify-center gap-3 p-3">
                        {
                            ChartData.map((item, i) => (
                                <div className="grid grid-cols-12 gap-2 border-b pb-[10px] cursor-pointer  sm:gap-0 xl:-space-x-4 space-x-1 md:space-x-2 items-center" key={i}>
                                    <div className="col-span-2">
                                        <img className="h-12 rounded-full w-12" src={item.hero} alt="" />
                                    </div>
                                    <div className="flex col-span-10 flex-col sm:w-auto justify-center">
                                        <div className="flex justify-between ">
                                            <h1 className="font-semibold">{item.name}</h1>
                                            <p className='text-xs'>Sunday</p>
                                        </div>
                                        <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident sit quam.</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>



                </div>
                {/* left side end */}


                {/* right side start */}

                <div className="sm:col-span-7 h-[calc(100vh-57.5px)] hidden sm:block">
                    {/* navbar */}
                    <div className="p-2 px-6 justify-between items-center  bg-slate-100 flex">
                        <div className="flex gap-4 items-center">
                            <img className='h-10 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <div className="">
                                <h2>+91 8446414152</h2>
                                <p className='text-xs'>last seen today at 12:00 am</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">

                            <div className="flex items-center gap-2">
                                <FaVideo className='text-xl text-slate-400' />
                                <RxCaretDown className='text-xl ' />
                            </div>

                            <IoSearchSharp className='text-xl ' />
                            <BsThreeDotsVertical className='text-xl ' />


                        </div>
                    </div>
                    <div class="border-2  flex-1 h-full flex flex-col justify-end bg-cover ">



                        {/* send message input and send btn */}
                        <div className="p-4 bg-slate-100">
                            <div className="items-center  gap-4 flex">
                                <IoMdAdd className='text-2xl ' />
                                <div className="flex rounded-lg px-1 flex-1 items-center bg-white">
                                    <BsEmojiSmile className='w-10 text-xl' />
                                    <input className='text-black  p-2 outline-none w-full border-none' type="text" placeholder='Type Your message' />
                                </div>
                                <FaMicrophone className='w-10 text-slate-500 input border-none focus:border-transparent border-0 border-transparent text-xl' />
                            </div>
                        </div>

                    </div>


                </div>



            </div>
            {/* right side end */}




            {/* 2 main grid end */}





        </div>
    )
}

export default Home