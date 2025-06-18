import React from "react";

const Accordions = ({ children, isActive, onClick }) => {
    return (
        <div onClick={onClick} className="transition duration-300">
            {children}
        </div>
    );
};

export default Accordions;
