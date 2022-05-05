
const Skills = ({ id, skills, updateSkill }) => {
    return (
        <div className="skills mb-4 ">
            {skills.map(skill => {
                return (
                    <div key={skill.name} className="row mt-4 pb-4">
                        <div className="col-6">
                            {skill.name}
                        </div>
                        <div className="col-6">
                            {skill.done ? <button onClick={() => updateSkill(id, skill.name, false)} className="btn-purple shadow">Completed</button> : <button onClick={() => updateSkill(id, skill.name, true)} className="btn btn-light shadow">Mark as Completed</button> }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills