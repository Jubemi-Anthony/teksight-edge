import "./Team.css";

const Team = ({name,role}) => {
  return (
    <div className="team-members">
        <div className="name-social">
            <p className="rozha">{name}</p>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"><img className="linkedin-3" src="assets/svg/linkedin-colored.svg" alt="" /></a>
        </div>
        <div className="roles">
          <p className="koho">{role}</p>
          <p className="rozha">View Team Members</p>
        </div>
    </div>
  )
}

export default Team