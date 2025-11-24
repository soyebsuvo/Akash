import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import profile from "../../assets/p44.png"
import { TypeAnimation } from 'react-type-animation';
import { FaArrowUp, FaDownload } from "react-icons/fa";
import { useState } from "react";
import resume from "../../assets/resume.pdf"
// import AOS from "aos";
// import 'aos/dist/aos.css'
// import { useEffect } from "react";
export default function Banner() {
    const [fixedNav, setFixedNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 90) {
            setFixedNav(true)
        } else {
            setFixedNav(false)
        }
    }
    window.addEventListener('scroll', changeNav)
    const handleGoToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-16 md:min-h-[570px] py-3">
            <div className="flex flex-col md:flex-row items-center md:h-[570px]">
                <div className="md:w-1/2 px-4">
                    <h3 style={{ letterSpacing: "3px" }} className="text-gray-300 uppercase font-Montserrat text-sm">Welcome to my world</h3>
                    <h2 className="text-3xl md:text-5xl text-white font-Montserrat font-bold pt-2 md:pt-3 pb-2">Hi, I&apos;m <span className="text-[#FF014F]">Akash</span></h2>
                    <h2 className="text-3xl md:text-5xl text-white font-Montserrat font-bold pt-0 md:pt-3 pb-2">
                        <TypeAnimation
                            sequence={[
                                'Trust Yourself', // Types 'One'
                                1000, // Waits 1s
                                'Work Hard', // Deletes 'One' and types 'Two'
                                1000, // Waits 2s
                                'Earn Money', // Types 'Three' without deleting 'Two'
                                1000,
                                'Enjoy Your Life',
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        />
                    </h2>
                    <p className="text-gray-300 text-sm mt-3">As a History Honors 3rd-year student, I am dedicated to studying human stories, cultures, and transformations across time. My goal is to build knowledge, sharpen my research skills, and share valuable perspectives.</p>
                    {/* <div className="mt-8 cursor-pointer">
                        <a href={resume} download className="forShadow py-2 px-8 text-gray-300 flex justify-center items-center gap-2 w-fit">Resume <FaDownload /></a>
                    </div> */}
                    <div className="flex py-8">
                        <div className="w-1/2">
                            <h3 style={{ letterSpacing: "3px" }} className="text-gray-300 uppercase font-Montserrat text-[10px] mb-4">Find With Me</h3>
                            <div className="flex gap-3">
                                <a href="https://web.facebook.com/akashchowdhuryi" target="_blank" className="p-4 forShadow"><FiFacebook className="text-white text-xl" /></a>
                                <a href="https://www.instagram.com/akashchowdhuryi" target="_blank" className="p-4 forShadow"><FiInstagram className="text-white text-xl" /></a>
                                <a href="https://wa.me/+8801770717452" target="_blank" className="p-4 forShadow"><FaWhatsapp className="text-white text-xl" /></a>
                            </div>
                        </div>
                        {/* <div className="w-1/2">
                            <h3 style={{ letterSpacing: "3px" }} className="text-gray-300 uppercase font-Montserrat text-[10px] mb-4">Best Skill On</h3>
                            <div className="flex gap-3">
                                <a href="https://react.dev" target="_blank" className="p-4 forShadow"><DiReact className="text-white text-xl" /></a>
                                <a href="https://tailwindcss.com" target="_blank" className="p-4 forShadow"><TbBrandTailwind className="text-white text-xl" /></a>
                                <a href="https://expressjs.com" target="_blank" className="p-4 forShadow"><SiExpress className="text-white text-xl" /></a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="w-full h-full px-0 md:px-8 relative">
                        <div className="forShadow w-[350px] h-[400px] mx-auto"></div>
                        <img className="absolute bottom-0" src={profile} alt="picture" />
                    </div>
                </div>
            </div>
            <hr className="border-b border-[0px] mb-8 mt-8 md:mt-0 border-black" />
            <button onClick={handleGoToTop} className={`border border-[#FF014F] p-2 fixed bottom-5 right-5 z-50 rounded-full ${fixedNav ? 'block' : 'hidden'}`}><FaArrowUp className="text-white hover:text-[#FF014F] text-xl" /></button>
        </div>
    )
}
