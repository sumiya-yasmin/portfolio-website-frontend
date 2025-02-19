import './Projects.css'
import PropTypes from 'prop-types'
export function Projects({projectLists}){
    return(
        <section id="project">
        <h1>Projects</h1>
        <div className="list-projects">
                {projectLists.map((item)=> (
                <div className="list-p" key={item.name}>
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
                 <button><a href={item.link}>View the project</a></button>
                </div>
                ))}
                </div>
                </section>
)}

Projects.propTypes={
    projectLists : PropTypes.arrayOf(
        PropTypes.shape(
            {name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            },
        )
    ).isRequired
}