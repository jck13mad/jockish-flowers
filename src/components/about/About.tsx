import React, { useEffect } from 'react'
import storefront from '../../pics/storefront.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {

    useEffect(() => {
        gsap.from("#about", {
            x:-600,
            opacity: .4,
            duration: 1
        })

        gsap.from("#image", {
            opacity: 0,
            duration: 2
        })
    })

    return(
        <div className='flex flex-row' id="about">
            <div className='relative top-[10vh] h-[65vh] w-[50vw] left-[5vw] rounded-lg bg-stone-300 grid place-content-center border-2 border-black'>
                <img src={storefront} alt="Jockish Storefront" id="image" className='relative rounded-md drop-shadow-lg h-[50vh] w-[35vw]' />
            </div>
            <div className='relative border-[6px] border-[#112C03] bg-stone-300 rounded-lg h-[58vh] w-[40vw] left-[2vw] top-[20vh]'>
                <h3 className='text-[#112C03] font-normal text-[1.3vw] relative leading-tight text-center top-[1vh]'>Rooted in Southside Indianapolis, Jockish Flowers is a household name among the community and local businesses alike. Family owned and operated, Jockish sets the golden standard through customer satisfaction and consistently stunning displays, baskets, and stonework. <br></br><br></br>With an array of colors, flowers and arrangements, customization is affordable and easy for any occasion.To ensure vibrant and long lasting life, our flowers are always freshly cut and chilled. <br></br><br></br>We consistently offer quality and beauty in each hand picked arrangement that leaves our shop. <br></br><br></br>Come visit us or call in to order your arrangement today!</h3>
                <br></br>
                <div className="flex flex-row pl-[4vw] items-center space-x-[2vw]">
                    <h3 className="font-medium text-[1.2vw] text-[#0c331f] leading-tight">317-784-1614</h3>
                    <div className="rounded-full relative h-[2vh] w-[1vw] bg-[#0c331f]"></div>
                    <h3 className="font-medium text-[1.2vw] text-[#0c331f] leading-tight">2636 East St Indianapolis, IN 46225</h3>
                </div>
            </div>
        </div>
    )
}

export default About