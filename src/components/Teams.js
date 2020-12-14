import { StyledSection, StyledTitle, StyledUl } from "./styled/TeamsProjectsStyle.js";
import teams from "../data/teams.json";
import Card from './Card.js'

function Team(props) {

  return (
    <StyledSection>
      <StyledTitle>Teams</StyledTitle>
      <StyledUl>
        {teams.map((team, index) =>
          <Card 
            key={index}
            icon={team.icon}
            name={team.name}
            members={team.member.length}
            topText={`Projects: ${team.projects.length}`}
          />
        )}
      </StyledUl>
    </StyledSection>
  )
}

export default Team;