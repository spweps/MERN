import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const ProjectList = (props) =>{
    const [title, setTitle] = useState ("Title")
    const [price, setPrice] = useState ("Price")
    const [description, setDescription] = useState ("Description")
    const ProjectList = (props) => {
        const { removeFromDom } = props;

        const deleteAnExistingProject = (projectId) => {
            axios.delete('http://locolhost:8000/api/project/' + projectId)
                .then(res => {
                    removeFromDom(projectId)
                })
                .catch(err => console.error(err));
        }
        return (
            <div>
                {props.project.map((project, idx) => {
                    return <p key={idx}>
                        <Link to={"/" + project._id}>
                            {project.title}, {project, price}, {project.description}
                        </Link>

                        <button onClick={(e) => {deleteAnExistingProject(project._id)}}>
                            Delete
                        </button>
                    </p>
                })}
            </div>
        )
    }
    const onSubmit = (e) => {
        e.preventDefault ()
        axios.post("http://localhost:8000/api/project", {title, price, description})
        .then(result => console.log(result))
        .catch(err => console.log(err))
  }
    const [projects, setProjects] = useState([]);
    const createProject = () =>{
        axios.post('http://localhost:8000/api/project', {title, price, description})
            .then((res)=> setProjects( projects => [ ...projects, res.data.project ]))
            .catch(err => console.log({ message: 'Something went wrong' , error:err}));
    }
    const getAllProjects = () => {
        axios.get('http://localhost:8000/api/project')
            .then((res)=> setProjects(res.data.projects))
            .catch(err => console.log({ message: 'Something went wrong', error: err }));
    }
    useEffect(() => {
        getAllProjects()
    }, [])
    return(
        <div>
            {projects.map( (project,i) =>
                <p key={i}>{project.title}, {project.price}, {project.description}</p>
            )}
            <form onSubmit={onSubmit}>
            <input onChange={(e)=>{setTitle(e.target.value)}} type="text" value={title}/>
            <input onChange={(e)=>{setPrice(e.target.value)}}type="text" value={price}/>
            <input onChange={(e)=>{setDescription(e.target.value)}}type="text" value={description}/>
            <button onClick ={createProject} type="submit">Create</button>
        </form>
        </div>
    )
}
export default ProjectList;