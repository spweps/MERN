import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';

const Main = (props) => {
    const [project, setProject] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects')
            .then(res=>{
                setProject(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    })
}
export default () => {
    return (
        <div>
           <ProjectForm/>
           <hr/>
           {loaded && <ProjectList projects={projects}/>}
        </div>
    )
}
export default Main;