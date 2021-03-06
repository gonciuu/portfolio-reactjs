import React, { useState } from "react";
import styles from "./Projects.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";
const Projects = (props) => {
  const [isShowed, setIsShow] = useState({
    isTechShow: false,
    isProjectsShow: false,
  });

  const iconStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    width: "35px",
    height: "35px",
    cursor: "pointer",
  };

  return (
    <div className={styles.projectsWrapper}>
      <div className={styles.oneDivWrapper}>
        <span className={styles.optionsText}>SHOW TECHNOLOGIES</span>
        <ExpandMoreIcon
          style={iconStyle}
          onClick={() => {
            setIsShow((prevState) => {
              return {
                isTechShow: !prevState.isTechShow,
                isProjectsShow: prevState.isProjectsShow,
              };
            });
          }}
        />
        <div className={isShowed.isTechShow ? styles.showDiv : styles.hideDiv}>
          {props.technologies.map((technology) => {
            return <img src={technology.image} className={styles.techIcon} alt={technology.key} key={technology.key} />
          })}
        </div>
      </div>
      <div style={{ width: "50px" }} />
      <div className={styles.oneDivWrapper}>
        <span className={styles.optionsText}>LATESTS PROJECTS</span>
        <ExpandMoreIcon
          style={iconStyle}
          onClick={() => {
            setIsShow((prevState) => {
              return {
                isTechShow: prevState.isTechShow,
                isProjectsShow: !prevState.isProjectsShow,
              };
            });
          }}
        />
        <div
          className={isShowed.isProjectsShow ? styles.showDiv : styles.hideDiv}
        >
          {props.projects.map((project) => {
            return <React.Fragment key={project.url}>
              <p className={styles.projestTitle} onClick={()=>window.open(project.url,"_blank")}>{project.name}</p>
              <Divider style={{ background: 'white' }} />
            </React.Fragment>
          })}
        </div>
      </div>
      <div style={{ width: "50px" }} />
    </div>
  );
};

export default Projects;
