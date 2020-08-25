import React, { useState, useEffect, Profiler } from "react";
import Treez from "../../editable-stuff/treez.jpg";
import Giros from "../../editable-stuff/giros.jpg"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Treez}
                        alt="treez logo"
                        width="100"
                        height="30"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Full-Stack Software Engineer Intern  
                        <br/>
                        July - September 2019
                    </p>
                    {/* <h3>Treez</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Giros}
                        alt="giros logo"
                        width="90"
                        height="40"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Front-End Software Engineer Intern  
                        <br/>
                        June - August 2017
                    </p>
                    {/* <h3>Giros</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;