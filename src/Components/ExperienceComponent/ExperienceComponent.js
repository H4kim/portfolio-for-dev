import classes from "./ExperienceComponent.module.scss";
import React from "react";

const ExperienceComponent = props => {
   const { role, company, date, summary, tasks } = { ...props.data };

   const renderTasks = () => {
      return tasks.map((cur, i) => (
         <li className={classes.task} key={i}>
            {cur}
         </li>
      ));
   };

   return (
      <div className={classes.container}>
         <p className={classes.experienceTitle}>
            {" "}
            {role},{" "}
            <a href="/" className={classes.companyLink}>
               {company}
            </a>
            .
         </p>
         <p className={classes.date}>{date}</p>
         <p className={classes.summary}>{summary}</p>
         <ul className={classes.tasksList}>{renderTasks()}</ul>
      </div>
   );
};

export default ExperienceComponent;
