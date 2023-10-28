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
            <p>Feedbacks</p>

            <div className="embla">
                <button
                    className="embla__prev absolute left-0 top-1/2 z-10"
                    onClick={scrollPrev}
                >
                    &lt;
                </button>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {feedbacks.map((feedback, index) => (
                            <div className="embla__slide" key={index}>
                                <FeedbackCard
                                    imgSrc={feedback.img}
                                    author={feedback.author}
                                    title={feedback.title}
                                >
                                    <p>{feedback.description}</p>
                                </FeedbackCard>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="embla__next absolute right-0 top-1/2 z-10"
                    onClick={scrollNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
