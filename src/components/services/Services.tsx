import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { Flower } from '../../data'

interface FlowerProps{
    flowers: Flower[];
 }

const Services = ({flowers}: FlowerProps) => {

    useEffect(() => {
        gsap.from("#filter", {
            x:-600,
            opacity: 0,
            duration: 1.5
        })

        gsap.from("#view", {
            x:600,
            opacity: 0,
            duration: 1.5
        })
    })

    console.log({flowers})

    return(
        <div className='flex flex-row h-[80vh] w-[100vw] items-center justify-center relative'>
            <section id="filter" className='h-[80vh] w-[25vw] resize-x rounded bg-violet-200 relative sm/md:pl-7 3xs:pl-2'>

                {/**Left Title */}
                <h2 className='pt-6 sm/md:pl-6 3xs:pl-0 text-2xl'>Services</h2>
                <div className='sm/md:ml-6 3xs:ml-2 border-2 border-black h-1 w-[10vw] mb-8'></div>

                {/**Accordian */}
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                    
                    {/**First Accordian */}
                    <h2 id="accordion-flush-heading-1">
                        <button type="button" className="flex rounded justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 hover:text-[#0c331f]" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
                            <a href='/services/arrangements'><span className='ml-2 hover:text-[#0c331f] text-[1vw]'>Arrangements</span></a>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                        <div className="py-5 border-b border-gray-200">
                            <a href='/services/arrangements/floral'><p className="mb-2 text-gray-500 hover:bg-violet-400 hover:text-[#0c331f] text-lg h-[4vh] rounded ml-2 text-[1vw]">Floral</p></a>
                            <a href='/services/arrangements/greenery'><p className="mb-2 text-gray-500 hover:bg-violet-400 hover:text-[#0c331f] text-lg h-[4vh] rounded ml-2 text-[1vw]">Greenery</p></a>
                            <a href='/services/arrangements/sympathy'><p className="mb-2 text-gray-500 hover:bg-violet-400 hover:text-[#0c331f] text-lg h-[4vh] rounded ml-2 text-[1vw]">Sympathy</p></a>
                            <a href='/services/arrangements/figurine'><p className="mb-2 text-gray-500 hover:bg-violet-400 hover:text-[#0c331f] text-lg h-[4vh] rounded ml-2 text-[1vw]">Figurine</p></a>
                        </div>
                    </div>

                    {/**Second Accordian */}
                    <h2 id="accordion-flush-heading-2 hover:text-[#0c331f]">
                        <button type="button" className="flex rounded justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 hover:text-[#0c331f]" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                            <a href='/services/stonework'><span className='ml-2 hover:text-[#0c331f] text-[1vw]'>Stonework</span></a>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                        <div className="py-5 border-b border-gray-200">
                            <a href='/services/stonework/statues'><p className="mb-2 text-gray-500 hover:bg-violet-400 hover:text-[#0c331f] text-lg h-[4vh] rounded ml-2 text-[1vw]">Statues</p></a>
                            <a href='/services/stonework/benches'><p className="mb-2 text-gray-500 hover:bg-violet-400 hover:text-[#0c331f] text-lg h-[4vh] rounded ml-2 text-[1vw]">Benches</p></a>
                            <a href='/services/stonework/plaques'><p className="mb-2 text-gray-500 hover:bg-violet-400 hover:text-[#0c331f] text-lg h-[4vh] rounded ml-2 text-[1vw]">Plaques</p></a>
                        </div>
                    </div>

                    {/**Third Link */}
                    <h2>
                        <a href='/services/accents' className="flex rounded justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 hover:text-[#0c331f]">
                            <span className='ml-2 hover:text-[#0c331f] text-[1vw]'>Accents</span>
                        </a>
                    </h2>

                    {/**Fourth Link */}
                    <h2>
                        <a href='/services/afgans' className="flex rounded justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 hover:text-[#0c331f]">
                            <span className='ml-2 text-[1vw]'>Afgans</span>
                        </a>
                    </h2>
                </div>
            </section>
            <section id="view" className='h-[80vh] w-[60vw] rounded flex flex-row bg-violet-200/75 relative'>
                {flowers.map(flower => <div key={flower.key}>{flower.name}</div>)}
            </section>
        </div>
    )
}

export default Services