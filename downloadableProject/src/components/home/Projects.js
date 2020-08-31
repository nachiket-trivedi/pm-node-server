import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import userData from "../../config/userData";
import styles from "../../styles/Styles.module.css";

const Projects = () => {
  let {
    gitHubLink,
    githubId,
    gitHubQuerry,
    repos,
    projectDesc,
    projectDates,
  } = userData;
  const [projectsArray, setProjectsArray] = useState([]);
  gitHubLink = "https://api.github.com/users/";
  gitHubQuerry = "/repos";
  useEffect(() => {
    axios
      .get(gitHubLink + githubId + gitHubQuerry)
      .then((response) => {
        let gitRepos = [];
        for (let i in response.data) {
          let repoObj = response.data[i];
          if (repos.includes(repoObj["name"])) gitRepos.push(repoObj);
        }
        setProjectsArray(gitRepos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="projects" className={[styles.projectsPage].join(",")}>
      <div className="container container-fluid p-5">
        <h1 className="display-4 pb-5">Projects</h1>
        <div className="row">
          {projectsArray.map((project) => (
            <ProjectCard
              projectData={project}
              projectDesc={projectDesc}
              projectDates={projectDates}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;