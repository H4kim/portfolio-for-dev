import classes from "./Skills.module.scss";
import React from "react";
import { skills, educationList } from "../../Utils/Constants";
import EducationComponent from "../../Components/EducationComponent/EducationComponent";
import Title from "../../Components/Title/Title";

const Skill = () => {
   const renderEducations = () => {
      return educationList.map(cur => {
         return <EducationComponent key={cur.id} data={cur} />;
      });
   };
   return (
      <div className={classes.container}>
         <div className={classes.skillsContainer}>
            <Title bold="Skills"></Title>
            <div className={classes.skillsListContainer}>
               <p style={{ fontWeight: 500, textAlign: "center", fontSize: "0.9rem" }}>{skills}</p>
            </div>
         </div>
         <div className={classes.educationContainer}>
            <Title bold="Education"></Title>
            <ul className={classes.educationListContainer}>{renderEducations()}</ul>
         </div>
      </div>
   );
};

export default Skill;
