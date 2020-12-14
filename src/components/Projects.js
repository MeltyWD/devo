import { StyledSection, StyledTitle, StyledUl } from "./styled/TeamsProjectsStyle.js";
import projects from "../data/projects.json";
import Card from './Card.js'

function Projects(props) {
  return (
    <StyledSection>
      <StyledTitle>Projects</StyledTitle>
      <StyledUl>
        {projects.map((project, index) =>
          <Card 
            key={index}
            icon={project.icon}
            name={project.team}
            members={project.member.length}
            topText={`${project.projectName}`}
          />
        )}
      </StyledUl>
    </StyledSection>
  )
}

export default Projects;