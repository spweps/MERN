import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListPirates from '../components/ListPirates';
import NewPirate from '../components/NewPirate';

const Main = (props) => {
    const [pirate, setPirate] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                setPirate(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    })
    const removeFromDom = pirateId => {
        setPirate(pirates.filter(pirate=> pirate._id != pirateId));
    }
    return (
        <div>
            <ListPirates/>
            <hr/>
            {loaded && <ListPirates pirates={pirates} removeFromDom={removeFromDom}/>}
        </div>
    );
}
export default () => {
    return (
        <div>
            <ListPirates/>
            <hr/>
            {loaded && <ListPirates pirates={pirates}/>}
        </div>
    )
}
export default Main;