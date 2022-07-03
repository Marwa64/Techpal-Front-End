
const Skills = ({ id, skills, updateSkill, isSkillCompleted }) => {
  return (
        <div className="skills mb-4 ">
            { Object.keys(skills).map(key => {
              return (
                    <div key={key} className="row mt-4 pb-4">
                        <div className="col-6">
                            {key}
                        </div>
                        <div className="col-6">
                            {isSkillCompleted({ track_id: id, name: key }) ? <button onClick={() => updateSkill(id, key)} className="btn-purple shadow">Completed</button> : <button onClick={() => updateSkill(id, key)} className="btn btn-light shadow">Mark as Completed</button> }
                        </div>
                    </div>
              )
            })}
        </div>
  )
}

export default Skills
