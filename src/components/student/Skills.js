
const Skills = ({ id, skills, updateSkill }) => {
    return (
        <div className="skills mb-4 ">
            { Object.keys(skills).map(key => {
                return (
                    <div key={key} className="row mt-4 pb-4">
                        <div className="col-6">
                            {key}
                        </div>
                        <div className="col-6">
                            {<button className="btn btn-light shadow">Mark as Completed</button> }
                            {/* {skill.done ? <button onClick={() => updateSkill(id, skill.name, false)} className="btn-purple shadow">Completed</button> : <button onClick={() => updateSkill(id, skill.name, true)} className="btn btn-light shadow">Mark as Completed</button> } */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills