import React from "react";

const CravingContainer: React.FC<{name:string;img:string}> = (props) => {
  return (
    <div
      className={`w-80 h-72  flex flex-col justify-end overflow-hidden shadow1 rounded-tl-none rounded-2xl`}
    >
      <img className="w-80 object-cover h-56" src={`images/${props.img}`} alt="" />
      <div className="h-12 text-color1 pl-6 mt-2 text-lg font-semibold">
        {props.name}
      </div>
      <div className="h-12 text-color1 pl-6 mb-2 text-lg font-semibold">
        12 restaurants
      </div>
    </div>
  );
};

export default CravingContainer;
