"use client";

import Image from "next/image";
export default function FeedbackCard({ imgSrc, author, title, children }) {
    return (
      <div>
        <div className="flex flex-col items-center justify-items-center">
          <div>
            <img
              className="rounded-full"
              src={imgSrc}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
            <p>{author}</p>
          </div>
          <p>{title}</p>
          {children}
        </div>
      </div>
    );
  }