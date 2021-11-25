import HeaderResponsive from '../../Components/HeaderResponsive';
import api from '../../Api'
import React, { useEffect, useState } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Personagens(){
    const [data, setData] = useState(null);
    const [name, setName] = useState("");

    useEffect( () => {
        async function load(params){
            let res = await api.getPersonagemByName();
            setData(res.data);
            console.log(res.data);
        }
        load();
    }, [data]);

    function clickMouse(event){
        event.preventDefault();
        console.log("Escolhendo o nome: ", name);
        let res = await api.getPersonagemByName(name);

    }
    return( 
        <div>
            <HeaderResponsive/>
            <div className = "search-container">
                <form onSubmit={clickMouse}>
                    <input onChange={(e) => {
                        setName(event.target.value);
                    }}/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} size ="lg"/>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Personagens;