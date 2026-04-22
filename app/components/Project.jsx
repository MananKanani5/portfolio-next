import React from "react";
import Link from "next/link";

const Project = ({ children, to, title }) => {
  return (
    <div className="rounded-2xl p-2 w-[32%] max-sm:w-full bg-secondary shadow-lg relative animate__animated animate__fadeIn ">
      {children}
      <Link
        href={"/portfolio/" + to}
        className="absolute left-0 top-0 w-full h-full"
        aria-label={title ? `View ${title} project` : "View project"}
      ></Link>
    </div>
  );
};

export default Project;
