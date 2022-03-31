import React, { useEffect } from 'react'
import storefront from '../../pics/storefront.jpg'
import { gsap } from "gsap";

function About() {

    useEffect(() => {
        gsap.from("#first", {
            x:-600,
            opacity: 0,
            duration: 1
        })

        gsap.from("#image", {
            opacity: 0,
            duration: 2
        })

        gsap.from('#second', {
            x:400,
            opacity: 0,
            duration: 1
        })
    })

    console.log(window.innerWidth)

    return(
        <div className='flex 3xs:flex-col md:flex-row'>
            <div id='first' className='relative md:top-[10vh] 3xs:top-[2vh] h-[65vh] 3xs:w-[75vw] md:w-[50vw] 3xs:left-[2vw] md:left-[5vw] rounded-lg bg-[#c2e2d5] grid place-content-center border-2 border-black'>
                <img src={storefront} alt="Jockish Storefront" id="image" className='relative rounded-md drop-shadow-lg h-[50vh] 3xs:w-[50vw] md:w-[35vw]' />
            </div>
            <div id='second' className='flex flex-col relative border-[6px] border-[#112C03] bg-[#c2e2d5] rounded-lg h-[62vh] 3xs:w-[65vw] md:w-[40vw] 3xs:left-[20vw] md:left-[2vw] 3xs:-top-[7vh] md:top-[17vh] justify-center items-center'>
                <h3 className='text-[#112C03] font-normal 3xs:text-[.8rem] sm:text-[.9rem] lg:text-[1rem] 2xl:text-[1.3rem] relative leading-tight text-center top-[1vh]'>Rooted in Southside Indianapolis, Jockish Flowers is a household name among the community and local businesses alike. Family owned and operated, Jockish sets the golden standard through customer satisfaction and consistently stunning displays, baskets, and stonework. <br></br><br></br>With an array of colors, flowers and arrangements, customization is affordable and easy for any occasion.To ensure vibrant and long lasting life, our flowers are always freshly cut and chilled. <br></br><br></br>We consistently offer quality and beauty in each hand picked arrangement that leaves our shop. <br></br><br></br>Come visit us or call in to order your arrangement today!</h3>
                <br></br>
                <div className="flex flex-row 3xs:pl-[1vw] lg:pl-[4vw] items-center 3xs:space-x-[1vw] lg:space-x-[2vw]">
                    <h3 className="font-medium 3xs:text-[.7rem] sm:text-[.9rem] lg:text-[1rem] 2xl:text-[1.2rem] text-[#0c331f] leading-tight">317-784-1614</h3>
                    <div className="rounded-full relative h-[2vh] w-[1vw] bg-[#0c331f]"></div>
                    <h3 className="font-medium 3xs:text-[.7rem] sm:text-[.9rem] lg:text-[1rem] 2xl:text-[1.2rem]] text-[#0c331f] leading-tight">2636 East St Indianapolis, IN 46225</h3>
                </div>
            </div>
        </div>
    )
}

export default About