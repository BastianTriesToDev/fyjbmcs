import { useState } from 'react'
import './App.css'


function App() {
  return (
    <body className="font-en bg-dark text-light">
      <nav className="p-6 flex justify-between absolute z-10" id="navbar">
        <img className="max-w-[10%] h-max" src="/media/mcslogotype.png" alt="logo"/>
        <ul className="flex items-center font-[400] text-[14pt] tracking-tighter">
          <li className="mr-[100px] h-5 active:text-active  font-bold" id="home">
                <a className="border-b-2 border-red" href="">HOME</a>
          </li>
          <li className="mr-[100px] h-5 relative group" id="aboutus" data-te-dropdown-ref>
            <button className="relative  " data-te-dropdown-toggle-ref aria-expanded="false">
              <span className="border-b-0 hover:border-b-2 border-red transition-all duration-300">ABOUT US</span>
              <img className="absolute m-1 h-6 inline-block transition-opacity duration-100 ease-out" src="/media/keyboard-arrow-down.png" alt=""/>
            </button>
            <div className="min-w-fit whitespace-nowrap absolute z-[-1] bg-dark pl-2 pr-3 py-1 rounded-lg tracking-tighter group-hover:z-10 opacity-0 group-hover:opacity-100 transition-opacity delay-50" id="dropdownmenu" data-te-dropdown-menu-ref data-te-offset="0,2">
                        {["Logo",
                        "History",
                        "Executive Council",
                        "Co-curricular sessions"].map((item, idx) => (
                          <><a className="h-1" key={idx} href="" data-te-dropdown-item-ref>{item}</a><br/></>
                        ))}
            </div>
          </li>
          <li className="mr-[100px] h-5 " id="activities">
                <a className="border-b-0 hover:border-b-2 border-red transition-all duration-300" href="">ACTIVITIES</a>
          </li>
          <li className="mr-[100px] h-5 " id="gallery">
                <a className="border-b-0 hover:border-b-2 border-red transition-all duration-300" href="">GALLERY_WIP</a>
          </li>
            <li className="mr-[20px] h-6 font-cn">
                <a href="">中文</a>
          </li>
          <li className="h-5">
              <a href=""><img className="h-7" src="/media/light-mode-outline-sharp.png" alt=""/></a>
          </li>
        </ul>
      </nav>
      <div className="absolute z-10 flex items-center justify-center w-full h-[100vh] text-light tracking-tighter font-semibold text-[132pt]">
        This is FYMCS.
      </div>
      <div className="z-0 relative" data-te-carousel-init data-te-carousel-slide data-te-pause="false">
        <div className="flex items-center w-full h-[100vh] overflow-hidden">
            <div className="relative float-left -mr-[100%] w-full transition-all duration-[600ms] ease-in-out" data-te-carousel-item data-te-carousel-active data-te-interval="3000">
                <img src="/slideshow/DSC_3815.JPG" className="block w-full opacity-60" alt="Wild Landscape"/>
            </div>
            <div className="relative float-left -mr-[100%] hidden w-full transition duration-[600ms] ease-in-out" data-te-carousel-item data-te-interval="3000">
                <img src="/slideshow/IMG_4870.png" className="block w-full opacity-60" alt="Camera"/>
            </div>
            <div className="relative float-left -mr-[100%] hidden w-full transition duration-[600ms] ease-in-out" data-te-carousel-item data-te-interval="3000">
                <img src="/slideshow/IMG_9410.JPG" className="block w-full opacity-60" alt="Exotic Fruits"/>
            </div>
            <div className="relative float-left -mr-[100%] hidden w-full transition duration-[600ms] ease-in-out" data-te-carousel-item data-te-interval="3000">
                <img src="/slideshow/电脑协会生活照7.JPG" className="block w-full opacity-60" alt="Exotic Fruits"/>
            </div>
            <div className="relative float-left -mr-[100%] hidden w-full transition duration-[600ms] ease-in-out" data-te-carousel-item data-te-interval="3000">
                <img src="/slideshow/DSC_3442.JPG" className="block w-full opacity-60" alt="Exotic Fruits"/>
            </div>
            <div className="relative float-left -mr-[100%] hidden w-full transition duration-[600ms] ease-in-out" data-te-carousel-item data-te-interval="3000">
                <img src="/slideshow/IMG_2779.JPG" className="block w-full opacity-60" alt="Exotic Fruits"/>
            </div>
        </div>
      </div>
      <div className="mt-[30px] px-5 text-light font-light text-[8pt] text-center align-bottom flex justify-center">
        <p className="">©2023 Foon Yew High School Johor Bahru Micro Computer Society</p>
      </div>
    </body>
  )
}

export default App
