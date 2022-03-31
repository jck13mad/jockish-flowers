import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import divider from '../../pics/divider.png'

gsap.registerPlugin(ScrollTrigger);

function Home(){

    useEffect(() => {
      gsap.from("#first-alt", {
          scale: 0,
          opacity: 0,
          duration: 2
      })

      gsap.from("#first", {
          x:-400,
          duration: 1.5
      })

      gsap.from("#second", {
          scrollTrigger: {
            trigger: "#second",
            start: "-150px 80%",
            end: "-10% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.3
        });

        gsap.from("#third", {
          scrollTrigger: {
            trigger: "#third",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from("#fourth", {
          scrollTrigger: {
            trigger: "#fourth",
            start: "-300px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.3
        });

        gsap.from("#fifth", {
          scrollTrigger: {
            trigger: "#fifth",
            start: "-300px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100
        });

        gsap.from("#sixth", {
          scrollTrigger: {
            trigger: "#sixth",
            start: "-300px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.3
        });

        gsap.from("#seventh", {
          scrollTrigger: {
            trigger: "#seventh",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        }); 
        
        gsap.from("#eighth", {
          scrollTrigger: {
            trigger: "#eighth",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from("#ninth", {
          scrollTrigger: {
            trigger: "#ninth",
            start: "-400px 80%",
            end: "-80% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from("#tenth", {
          scrollTrigger: {
            trigger: "#tenth",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from("#eleventh", {
          scrollTrigger: {
            trigger: "#eleventh",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from("#twelfth", {
          scrollTrigger: {
            trigger: "#twelfth",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from("#thirteenth", {
          scrollTrigger: {
            trigger: "#thirteenth",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });
    })

    console.log(window.innerWidth)

    ScrollTrigger.refresh()

    return(
        <div className="h-[5000px]">
            <section className="flex flex-col justify-center relative">
                <div id='first' className="w-4/12 h-64 top-28 inset-2/4 relative">
                    <h1 className="font-medium text-[3.5vw] text-white leading-tight">Beautiful & Unquestionably Gorgeous. Flowers & Foliage locally sourced for your next event.</h1>
                </div>
                {/**Image placement holder */}
                <div id='first-alt' className="w-[45vw] h-[72vh] relative -top-56 border-4 border-white" />
            </section>

            <section id="second" className="flex flex-col items-center -top-[15vh] relative">
                <div className="w-[24vw] h-32 relative">
                    <h3 className="font-normal text-[1.3vw] text-white leading-tight text-center">Access our extraordinary collection of flowers, with step-by-step guidance at every stage. <br></br><br></br>Explore flowers that transform your creative design into a <b>floral masterpiece.</b></h3>
                </div>
                <a href="/shop">
                    <div className="top-20 bg-white relative w-[15vw] h-16 rounded-[3rem] hover:bg-opacity-0 hover:border-2 hover:border-white group transition ease-out duration-700 hover:cursor-pointer">
                      <h3 className="text-[#0c331f] font-medium text-center relative top-1/2 -translate-y-1/2 group-hover:text-white transition ease-out duration-700">Browse Collection</h3>
                    </div>
                </a>
            </section>

            <section id="third" className=" relative w-full h-[20vh] flex flex-row items-center space-x-[6vw] justify-center top-[2vh]">
                <div className="border-white relative border-2 h-1 w-40"></div>
                <img src={divider} alt="flower icon" className="relative h-28 w-auto"/>
                <div className="border-white relative border-2 h-1 w-40"></div>
            </section> 

            <section id="fourth" className="relative w-full h-[30vh] top-[8vh] flex flex-col items-center">
                <h1 className="font-medium text-[3.5vw] text-white leading-tight text-center w-1/2">Over 60 Years Of Excellence In The Flower Arrangment Industry</h1>
            </section>

            <section id="fifth" className="flex flex-row top-[10vh] relative justify-center">
                {/**Image placement holder */}
                <div className="border-2 border-white h-[40vh] w-[30vw] -rotate-12 z-1 top-[6vh] relative"></div>
                {/**Image placement holder */}
                <div className="border-2 border-white h-[40vh] w-[30vw] z-5"></div>
                {/**Image placement holder */}
                <div className="border-2 border-white h-[40vh] w-[30vw] rotate-12 z-1 top-[6vh] relative"></div>
            </section>

            <section id="sixth" className="top-[15vh] relative flex flex-col items-center">
                <h3 className="font-normal text-[1.3vw] text-white leading-tight text-center">An endless variety of flowers & foliage.</h3><br></br><br></br>
                <h3 className="font-normal text-[1.3vw] text-white leading-tight text-center w-[30vw]">‍Choose an assortment for your event, or pick a single stem and witness the beauty of a venue or dinner table come alive.</h3>
                <a href="/shop">
                    <div className="top-12 bg-white relative w-[15vw] h-16 rounded-[3rem] hover:bg-opacity-0 hover:border-2 hover:border-white group transition ease-out duration-700 hover:cursor-pointer">
                        <h3 className="text-[#0c331f] font-medium text-center relative top-1/2 -translate-y-1/2 group-hover:text-white transition ease-out duration-700">Browse Collection</h3>
                    </div>
                </a>
            </section>

            <section id="seventh" className="pl-[6vw] relative w-full h-[20vh] flex flex-row items-center space-x-[6vw] justify-center top-[25vh]">
                <div className="border-white relative border-2 h-1 w-40"></div>
                <img src={divider} alt="flower icon" className="relative h-28 w-auto"/>
                <div className="border-white relative border-2 h-1 w-40"></div>
                <div></div>
            </section> 

            <section id="eighth" className="top-[30vh] relative pl-[6vw]">
                <h1 className="font-medium text-[3.5vw] text-white leading-tight w-1/2">Flowers for every season. And reason.</h1><br></br>
                <h3 className="font-normal text-[1.3vw] text-white leading-tight w-[50vw]">We’ve got you covered. The necessary ingredients you will need for your perfect wedding, event, or moment in time have arrived.</h3>
            </section>

            {/**Arrangements */}
            <section id="ninth" className="pl-[14vw] relative top-[58vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Arrangements</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="relative flex flex-row top-[5vh] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-700">
                  <div className="border-2 border-white h-[40vh] w-[25vw] -rotate-12 z-1 top-[6vh] relative"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] rotate-12 z-1 top-[6vh] relative"></div>
                </div>
            </section>

            {/**Stonework */}
            <section id="tenth" className="pl-[14vw] relative top-[80vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Stonework</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="relative flex flex-row top-[5vh] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-700">
                  <div className="border-2 border-white h-[40vh] w-[25vw] -rotate-12 z-1 top-[6vh] relative"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] rotate-12 z-1 top-[6vh] relative"></div>
                </div>
            </section>

            {/**Accents */}
            <section id="eleventh" className="pl-[14vw] relative top-[110vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Accents</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="relative flex flex-row top-[5vh] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-700">
                  <div className="border-2 border-white h-[40vh] w-[25vw] -rotate-12 z-1 top-[6vh] relative"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] rotate-12 z-1 top-[6vh] relative"></div>
                </div>
            </section>

            {/**Afghans */}
            <section id="twelfth" className="pl-[14vw] relative top-[140vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Afghans</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="relative flex flex-row top-[5vh] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-700">
                  <div className="border-2 border-white h-[40vh] w-[25vw] -rotate-12 z-1 top-[6vh] relative"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white h-[40vh] w-[25vw] rotate-12 z-1 top-[6vh] relative"></div>
                </div>
            </section>

            <section id="thirteenth" className="relative w-full h-[20vh] flex flex-row items-center space-x-[6vw] justify-center top-[160vh]">
                <div className="border-white relative border-2 h-1 w-40"></div>
                <img src={divider} alt="flower icon" className="relative h-28 w-auto"/>
                <div className="border-white relative border-2 h-1 w-40"></div>
            </section> 

            <footer id="contact" className="relative top-[250vh]">
                <div className="border-2 border-white absolute right-0 bottom-0 h-[80vh] w-[55vw] z-0"></div>
                <div className="pl-[6vw] bottom-[40vh] relative">
                    <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Ask Us Anything</h1><br></br>
                    <h3 className="font-normal text-[1.8vw] text-white leading-tight w-[40vw]">Our team of floral advisors are ready to help. They will advise you on the variety of flowers & foliage, type, size, shape, colour, texture, and price, to find the floral options that best suit your style & vision.</h3>
                    <a href="/contact">
                        <div className="top-12 bg-white relative w-[15vw] h-16 rounded-[3rem] hover:bg-opacity-0 hover:border-2 hover:border-white group transition ease-out duration-700 hover:cursor-pointer">
                            <h3 className="text-[#0c331f] font-medium text-center relative top-1/2 -translate-y-1/2 group-hover:text-white transition ease-out duration-700">Give Us A Call</h3>
                        </div>
                    </a>
                </div>
                <div className="flex flex-row pl-[6vw] items-center space-x-[2vw] z-50">
                    <h3 className="font-normal text-[2vw] text-white leading-tight">317-784-1614</h3>
                    <div className="rounded-full relative h-[2vh] w-[1vw] bg-white"></div>
                    <h3 className="font-normal text-[2vw] text-white leading-tight w-[50vw]">2636 East St Indianapolis, IN 46225</h3>
                </div>
            </footer>
        </div>
    )
}

export default Home