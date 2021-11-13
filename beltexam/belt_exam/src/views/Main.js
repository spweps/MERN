import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListAuthors from '../components/ListVillains';
import NewAuthor from '../components/NewVillain';

const Main = (props) => {
    const [author, setVillain] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/villains')
            .then(res=>{
                setVillain(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    })
    const removeFromDom = villainId => {
        setVillain(villains.filter(villain=> villain._id != villainId));
    }
    return (
        <div>
            <ListVillains/>
            <hr/>
            {loaded && <ListVillains villains={villains} removeFromDom={removeFromDom}/>}
        </div>
    );
}
export default () => {
    return (
        <div>
            <ListVillains/>
            <hr/>
            {loaded && <ListVillains villains={villains}/>}
        </div>
    )
}
export default Main;