import React from "react";

//declare the component as a functional component in TypeScript
const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="grid-item"></div>
      <div className="grid-item grid-item--width2"></div>
      <div className="grid-item grid-item--height2"></div>
    </div>
  );
};
export default Home;
