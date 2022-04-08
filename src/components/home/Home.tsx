import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import divider from '../../pics/divider.png'

gsap.registerPlugin(ScrollTrigger);

function Home(){

    useEffect(() => {
      if (window.innerWidth >= 759) {
      gsap.from(".first-alt", {
          scale: 0,
          opacity: 0,
          duration: 2
      })

      gsap.from(".first", {
          x:-400,
          duration: 1.5
      })

      gsap.from(".second", {
          scrollTrigger: {
            trigger: ".second",
            start: "-150px 80%",
            end: "-10% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.3
        });

        gsap.from(".third", {
          scrollTrigger: {
            trigger: ".third",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from(".fourth", {
          scrollTrigger: {
            trigger: ".fourth",
            start: "-300px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.3
        });

        gsap.from(".fifth", {
          scrollTrigger: {
            trigger: ".fifth",
            start: "-300px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100
        });

        gsap.from(".sixth", {
          scrollTrigger: {
            trigger: ".sixth",
            start: "-300px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.3
        });

        gsap.from(".seventh", {
          scrollTrigger: {
            trigger: ".seventh",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        }); 
        
        gsap.from(".eighth", {
          scrollTrigger: {
            trigger: ".eighth",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from(".ninth", {
          scrollTrigger: {
            trigger: ".ninth",
            start: "-400px 80%",
            end: "-90% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from(".ninth-alt", {
          scrollTrigger: {
            trigger: ".ninth",
            start: "-400px 80%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          xPercent: 100,
          opacity: 0.2,
          duration: 1
        })

        ScrollTrigger.create({
          trigger: ".ninth",
          start: "-400px 25%",
          end: "100% 25%",
          pin: true,
          scrub: 0.6
        })

        gsap.from(".tenth", {
          scrollTrigger: {
            trigger: ".tenth",
            start: "-150px 80%",
            end: "-50% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from(".tenth-alt", {
          scrollTrigger: {
            trigger: ".tenth",
            start: "-150px 80%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          xPercent: 100,
          opacity: 0.2,
          duration: 1
        })

        ScrollTrigger.create({
          trigger: ".tenth",
          start: "-400px 25%",
          end: "100% 20%",
          pin: true,
          scrub: 0.6
        })

        gsap.from(".eleventh", {
          scrollTrigger: {
            trigger: ".eleventh",
            start: "-150px 80%",
            end: "-50% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from(".eleventh-alt", {
          scrollTrigger: {
            trigger: ".eleventh",
            start: "-150px 80%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          xPercent: 100,
          opacity: 0.2,
          duration: 1
        })

        ScrollTrigger.create({
          trigger: ".eleventh",
          start: "-400px 25%",
          end: "100% 20%",
          pin: true,
          scrub: 0.6
        })

        gsap.from(".twelfth", {
          scrollTrigger: {
            trigger: ".twelfth",
            start: "-150px 80%",
            end: "-50% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });

        gsap.from(".twelfth-alt", {
          scrollTrigger: {
            trigger: ".twelfth",
            start: "-150px 80%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          xPercent: 100,
          opacity: 0.2,
          duration: 1
        })

        ScrollTrigger.create({
          trigger: ".twelfth",
          start: "-400px 25%",
          end: "100% 20%",
          pin: true,
          scrub: 0.6
        })

        gsap.from(".thirteenth", {
          scrollTrigger: {
            trigger: ".thirteenth",
            start: "-150px 80%",
            end: "-40% 30%",
            scrub: 1,
            toggleActions: "restart pause reverse pause"
          },
          yPercent: 100,
          opacity: 0.4
        });
    }})
  

    console.log(window.innerWidth)

    ScrollTrigger.refresh()

    return(
        <div className="sm/md:h-[10000px] 3xs:h-[5400px] overscroll-contain">
            <section className="flex flex-col justify-center relative">
                <div className="first w-4/12 h-64 sm/md:top-28 3xs:top-48 sm/md:inset-2/4 relative 3xs:left-[45vw] 3xs:z-1">
                    <h1 className="font-medium sm/md:text-[3.5vw] 3xs:text-[6vw] text-white leading-tight">Beautiful & Unquestionably Gorgeous. Flowers & Foliage locally sourced for your next event.</h1>
                </div>
                {/**Image placement holder */}
                <div className="first-alt sm/md:w-[45vw] 3xs:w-[60vw] 3xs:h-[72vh] sm/md:h-[72vh] relative -top-56 border-4 border-white 3xs:z-5" />
            </section>

            <section className="second flex flex-col items-center sm/md:-top-[15vh] relative 3xs:-top-[14vh]">
                <div className="sm/md:w-[24vw] sm/md:h-32 3xs:w-[65vw] relative">
                    <h3 className="font-normal sm/md:text-[1.3vw] 3xs:text-[4vw] text-white leading-tight text-center">Access our extraordinary collection of flowers, with step-by-step guidance at every stage. <br></br><br></br>Explore flowers that transform your creative design into a <b>floral masterpiece.</b></h3>
                </div>
                <a href="/services">
                    <div className="sm/md:top-20 3xs:top-8 bg-white relative sm/md:w-[15vw] 3xs:w-[40vw] h-16 rounded-[3rem] hover:bg-opacity-0 hover:border-2 hover:border-white group transition ease-out duration-700 hover:cursor-pointer">
                      <h3 className="text-[#0c331f] font-medium text-center relative top-1/2 -translate-y-1/2 group-hover:text-white transition ease-out duration-700">Browse Collection</h3>
                    </div>
                </a>
            </section>

            <section className="third relative w-full sm/md:h-[20vh] 3xs:h-[10vh] flex flex-row items-center space-x-[6vw] justify-center sm/md:top-[2vh] 3xs:-top-[1vh]">
                <div className="border-white relative border-2 h-1 sm/md:w-40 3xs:w-20"></div>
                <img src={divider} alt="flower icon" className="relative sm/md:h-28 3xs:h-14 sm/md:w-auto 3xs:w-[auto]"/>
                <div className="border-white relative border-2 h-1 sm/md:w-40 3xs:w-20"></div>
            </section> 

            <section className="fourth relative w-full h-[30vh] sm/md:top-[8vh] 3xs:top-[6vh] flex flex-col items-center">
                <h1 className="font-medium sm/md:text-[3.5vw] 3xs:text-[7.5vw] text-white leading-tight text-center sm/md:w-1/2 3xs:w-[80vw]">Over 60 Years Of Excellence In The Flower Arrangment Industry</h1>
            </section>

            <section className="fifth flex flex-row sm/md:top-[10vh] 3xs:top-[3vh] relative justify-center">
                {/**Image placement holder */}
                <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[20vh] sm/md:w-[30vw] 3xs:w-[30vw] -rotate-12 z-1 top-[6vh] relative 3xs:left-[1vw]"></div>
                {/**Image placement holder */}
                <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] sm/md:w-[30vw] 3xs:w-[35vw] z-5"></div>
                {/**Image placement holder */}
                <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[20vh] sm/md:w-[30vw] 3xs:w-[30vw] rotate-12 z-1 top-[6vh] relative 3xs:right-[1vw]"></div>
            </section>

            <section className="sixth sm/md:top-[20vh] 3xs:top-[20vh] relative flex flex-col items-center">
                <h3 className="font-normal sm/md:text-[1.3vw] 3xs:text-[5vw] text-white leading-tight text-center">An endless variety of flowers & foliage.</h3><br></br><br></br>
                <h3 className="font-normal sm/md:text-[1.3vw] 3xs:text-[3.5vw] text-white leading-tight text-center sm/md:w-[30vw] 3xs:w-[60vw]">‍Choose an assortment for your event, or pick a single stem and witness the beauty of a venue or dinner table come alive.</h3>
                <a href="/services">
                    <div className="sm/md:top-20 3xs:top-8 bg-white relative sm/md:w-[15vw] 3xs:w-[40vw] h-16 rounded-[3rem] hover:bg-opacity-0 hover:border-2 hover:border-white group transition ease-out duration-700 hover:cursor-pointer">
                        <h3 className="text-[#0c331f] font-medium text-center relative top-1/2 -translate-y-1/2 group-hover:text-white transition ease-out duration-700">Browse Collection</h3>
                    </div>
                </a>
            </section>

            <section className="seventh sm/md:pl-0 relative w-full h-[20vh] flex flex-row items-center space-x-[6vw] justify-center top-[38vh]">
                <div className="border-white relative border-2 h-1 sm/md:w-40 3xs:w-20"></div>
                <img src={divider} alt="flower icon" className="relative sm/md:h-28 3xs:h-14 sm/md:w-auto 3xs:w-[auto]"/>
                <div className="border-white relative border-2 h-1 sm/md:w-40 3xs:w-20"></div>
            </section> 

            <section className="eighth top-[45vh] relative sm/md:pl-[6vw] 3xs:pl-[8vw]">
                <h1 className="font-medium sm/md:text-[3.5vw] 3xs:text-[5.5vw] text-white leading-tight sm/md:w-1/2 3xs:w-[70vw]">Flowers for every season. And reason.</h1><br></br>
                <h3 className="font-normal sm/md:text-[1.3vw] 3xs:text-[3.5vw] text-white leading-tight sm/md:w-[50vw] 3xs:w-[60vw]">We’ve got you covered. The necessary ingredients you will need for your perfect wedding, event, or moment in time have arrived.</h3>
            </section>

            {/**Arrangements */}
            <section className="ninth pl-[14vw] relative sm/md:top-[58vh] 3xs:top-[52vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Arrangements</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="ninth-alt -left-[6vw] relative flex flex-row sm/md:top-[5vh] 3xs:top-[2vh] items-center space-x-[3vw] justify-center">
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:-rotate-12 3xs:z-1 3xs:top-[10vh]"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] top-[6vh] relative 3xs:z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:rotate-12 3xsz-1 3xs:top-[10vh]"></div>
                </div>
            </section>

            {/**Stonework */}
            <section className="tenth pl-[14vw] relative sm/md:top-[80vh] 3xs:top-[75vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Stonework</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="tenth-alt -left-[6vw] relative flex flex-row sm/md:top-[5vh] 3xs:top-[2vh] items-center space-x-[3vw] justify-center">
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:-rotate-12 3xs:z-1 3xs:top-[10vh]"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] top-[6vh] relative 3xs:z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:rotate-12 3xs:z-1 3xs:top-[10vh]"></div>
                </div>
            </section>

            {/**Accents */}
            <section className="eleventh pl-[14vw] relative sm/md:top-[110vh] 3xs:top-[97vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Accents</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="eleventh-alt -left-[6vw] relative flex flex-row sm/md:top-[5vh] 3xs:top-[2vh] items-center space-x-[3vw] justify-center">
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:-rotate-12 3xs:z-1 3xs:top-[10vh]"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] top-[6vh] relative 3xs:z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:rotate-12 3xs:z-1 3xs:top-[10vh]"></div>
                </div>
            </section>

            {/**Afghans */}
            <section className="twelfth pl-[14vw] relative sm/md:top-[140vh] 3xs:top-[120vh] group">
                <h1 className="font-medium text-[3vw] text-white leading-tight w-1/2">Afghans</h1>
                <div className="border-white relative border-2 h-1 w-40"></div>
                {/**Image placement holder */}
                <div className="twelfth-alt -left-[6vw] relative flex flex-row sm/md:top-[5vh] 3xs:top-[2vh] items-center space-x-[3vw] justify-center">
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:-rotate-12 3xs:z-1 3xs:top-[10vh]"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] top-[6vh] relative 3xs:z-5"></div>
                  {/**Image placement holder */}
                  <div className="border-2 border-white sm/md:h-[40vh] 3xs:h-[30vh] w-[25vw] sm/md:top-[6vh] relative sm/md:rotate-0 3xs:rotate-12 3xs:z-1 3xs:top-[10vh]"></div>
                </div>
            </section>

            <section className="thirteenth relative w-full h-[20vh] flex flex-row items-center space-x-[6vw] justify-center sm/md:top-[180vh] 3xs:top-[135vh]">
              <div className="border-white relative border-2 h-1 sm/md:w-40 3xs:w-20"></div>
                <img src={divider} alt="flower icon" className="relative sm/md:h-28 3xs:h-14 sm/md:w-auto 3xs:w-[auto]"/>
                <div className="border-white relative border-2 h-1 sm/md:w-40 3xs:w-20"></div>
            </section> 

            <footer className="relative sm/md:top-[260vh] 3xs:top-[180vh]">
                <div className="border-2 border-white absolute right-0 sm/md:bottom-0 3xs:bottom-[5vh] sm/md:h-[80vh] 3xs:h-[60vh] sm/md:w-[55vw] 3xs:w-[60vw] z-0"></div>
                <div className="pl-[6vw] sm/md:bottom-[30vh] 3xs:bottom-[18vh] relative z-5">
                    <h1 className="font-medium sm/md:text-[3vw] 3xs:text-[5vw] text-white leading-tight w-1/2">Ask Us Anything</h1><br></br>
                    <h3 className="font-normal sm/md:text-[1.8vw] 3xs:text-[2.2vw] text-white leading-tight w-[40vw]">Our team of floral advisors are ready to help. They will advise you on the variety of flowers & foliage, type, size, shape, colour, texture, and price, to find the floral options that best suit your style & vision.</h3>
                    <a href="/contact">
                        <div className="top-12 sm/md:top-20 3xs:top-8 bg-white relative sm/md:w-[15vw] 3xs:w-[30vw] sm/md:h-16 3xs:h-12 rounded-[3rem] hover:bg-opacity-0 hover:border-2 hover:border-white group transition ease-out duration-700 hover:cursor-pointer">
                            <h3 className="text-[#0c331f] font-medium text-center relative top-1/2 -translate-y-1/2 group-hover:text-white transition ease-out duration-700">Give Us A Call</h3>
                        </div>
                    </a>
                </div>
                <div className="flex flex-row sm/md:pl-[6vw] items-center sm/md:justify-start 3xs:justify-center space-x-[2vw] z-5">
                    <h3 className="font-normal sm/md:text-[2vw] 3xs:text-[4vw] text-white leading-tight">317-784-1614</h3>
                    <div className="rounded-full relative sm/md:h-[2vh] 3xs:h-[.5vh] sm/md:w-[1vw] 3xs:w-[1vw] bg-white"></div>
                    <h3 className="font-normal sm/md:text-[2vw] 3xs:text-[3.8vw] text-white leading-tight sm/md:w-[50vw]">2636 East St Indianapolis, IN 46225</h3>
                </div>
            </footer>
            <div className="absolute 3xs:top-[5570px] sm/md:top-[10460px] border-2 border-white" id="contact"></div>
        </div>
    )
}

export default Home