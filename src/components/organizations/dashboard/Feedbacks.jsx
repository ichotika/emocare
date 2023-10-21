"use client";

import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';



export default function Feedbacks() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='block rounded-lg border border-gray-200 bg-white p-6 shadow'>
      <p>Feedbacks</p>
      <div className='flex items-center p'>
            <p className='p-2'>&lt;</p>

            <div className='flex flex-col items-center justify-items-center'>
                
                <div>
                <img className="rounded-full " src="https://picsum.photos/id/237/200/300" alt=""
                style={{ width: '100px', height: '100px' }}/>
                <p>Anonymous</p>
                </div>

                <p >
                    Burnout
                </p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, minus. Veniam consectetur consequatur libero, officia cumque a adipisci reiciendis id.</p>

            </div>
            <p className='p-2'>&gt;</p>

        </div> 


        <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>

  </div>
      




  )
}
      


            

   

