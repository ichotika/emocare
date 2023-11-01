"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import FeedbackCard from "@/components/organizations/dashboard/FeedbackCard";

export default function Feedbacks({ feedbacks }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative basis-2/4 rounded-lg border border-gray-200 bg-white p-6 shadow">
            {/* <div className="flex">
                <p className="text-xl mb-5">Feedbacks</p> */}
                {/* <div>
                    <button
                        className="embla__prev absolute left-0 top-1/2 z-10"
                        onClick={scrollPrev}
                    >
                        &lt;
                    </button>

                    <button
                    className="embla__next absolute right-0 top-1/2 z-10"
                    onClick={scrollNext}
                    >
                        &gt;
                    </button>

                </div> */}
            {/* </div> */}

            <div className="embla">
                <div className="flex justify-between">
                    <p className="text-xl mb-5">Feedbacks</p>
                    <div>
                        <button className="embla__prev border border-black rounded px-1.5 py-0" onClick={scrollPrev}>
                        &lt;
                        </button>
                        <span> </span>
                        <button className="embla__next border border-black rounded px-1.5 py-0" onClick={scrollNext}>
                        &gt;
                        </button>
                    </div>
                </div>
                
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {feedbacks.map((feedback, index) => (
                            <div className="embla__slide" key={index}>
                                <FeedbackCard title={feedback.title}>
                                    <p>{feedback.description}</p>
                                </FeedbackCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
