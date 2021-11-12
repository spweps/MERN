import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListAuthors from '../components/ListAuthors';
import NewAuthor from '../components/NewAuthor';

const Main = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    })
    const removeFromDom = authorId => {
        setAuthor(authors.filter(author=> author._id != personId));
    }
    return (
        <div>
            <ListAuthors/>
            <hr/>
            {loaded && <ListAuthors authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    );
}
export default () => {
    return (
        <div>
            <ListAuthors/>
            <hr/>
            {loaded && <ListAuthors authors={authors}/>}
        </div>
    )
}
export default Main;