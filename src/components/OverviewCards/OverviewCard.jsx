import React, { useContext, useRef, useEffect } from "react";
import "./style.css";
import context from "../../context/context";
import { useFetchers } from "react-router-dom";
const OverviewCard = () => {
  let { userRepos } = useContext(context);
  let data = userRepos.slice(0, 6);
  const langCircle = useRef();

 
    
  return (
    <>
      {data.map((item, index) => {
        // function bgClass() {
        //   if ((item.language = "SCSS")) {
        //     langCircle.current.classList.add("bg-warning");
        //     console.log(langCircle);
        //   }
        //   useEffect(() => {
        //     bgClass();
        //   }, []);
        // }
      
        return (
          <div className="col-6 mt-3" key={index}>
            <div className="card p-3 shadow border">
              <div className="card-title d-flex justify-content-between align-content-center ">
                <a href="#" className="card-coder text-primary fs-4 owcardName">
                  {item.name}
                </a>
                <p className="fs-6 border border-1 px-2 rounded-9">Public</p>
              </div>
              <p className="card-description fs-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
              <div className="card-language ">
                <div className="d-flex align-items-center">
                  <span className="rounde" ref={langCircle}></span>

                  <p className="mb-0 ms-2" onClick={()=>console.log(langCircle.current)}>{item.language}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OverviewCard;
