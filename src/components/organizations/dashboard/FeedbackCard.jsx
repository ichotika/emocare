"use client";

export default function FeedbackCard({ imgSrc, author, title, description, children }) {
    return (
      <div>
        <div className="flex flex-col ">
          <p style={{color:"#0A285D"}} className="font-semibold text-3xl mt-6 mb-5">{title}</p>
          <p className="text-4xl">{description}</p>
          {children}
        </div>
      </div>
    );
  }