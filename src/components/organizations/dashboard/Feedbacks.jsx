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
        <div className="relative max-h-[286px] basis-5/12 rounded-lg border border-gray-200 bg-white p-6 shadow">
            <div className="embla">
                <div className="flex justify-between">
                    <p className="mb-1 text-xl">Feedbacks</p>
                    <div>
                        <button
                            className="embla__prev rounded border border-black px-1.5 py-0"
                            onClick={scrollPrev}
                        >
                            &lt;
                        </button>
                        <span> </span>
                        <button
                            className="embla__next rounded border border-black px-1.5 py-0"
                            onClick={scrollNext}
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container max-w-full">
                        {feedbacks.map((feedback, index) => {
                            console.log(index);
                            return (
                                <div className="embla__slide" key={index}>
                                    <FeedbackCard title={feedback.title}>
                                        <p>{feedback.description}</p>
                                    </FeedbackCard>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
