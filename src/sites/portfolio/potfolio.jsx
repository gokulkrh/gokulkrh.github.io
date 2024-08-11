import { React, Fragment } from "react";
import EducationSection from "./components/education";
import AboutSection from "./components/about";
import ProjectsSection from "./components/projects";
import WorkExpSection from "./components/work_experience";
import "./styles/comm.css";

export default function Portfolio() {
  return (
    <Fragment>
      <AboutSection />
      <WorkExpSection />
      <ProjectsSection />
      <EducationSection />
    </Fragment>
  );
}
