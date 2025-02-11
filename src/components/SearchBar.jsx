import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import _ from "lodash"; // Importando Lodash para debounce

const API_URL = import.meta.env.VITE_API_URL;

export default function Searchbar() {
    const [query, setQuery] = useState(""); 
    const [results, setResults] = useState([]); 
    const [isHoverVisible, setIsHoverVisible] = useState(false); 
    
    const Navigate = (path) => {
        setQuery("");
        useNavigate(path);
    };

    const fetchResults = _.debounce(async (searchTerm) => {
        if (!searchTerm || searchTerm =="") {
            setIsHoverVisible(false)
            setResults([]); // Limpa resultados se a pesquisa estiver vazia
            return;
        }
        
        try {
            const response = await axios.get(`${API_URL}/api/v1/products?limit=5&query=${searchTerm}`);
            setResults(response.data.data); 
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }

        if(results.length < 1){
            setIsHoverVisible(false)
        }else{
            setIsHoverVisible(true)
        }
    }, 250); 

    useEffect(() => {
        fetchResults(query);
    }, [fetchResults, query]);

    return (
        <div className="search-bar side-by">
            <div className="search-input">
                <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                <input type="text" id="search_inpt" placeholder="Digite aqui..." value={query}  onChange={(e) => setQuery(e.target.value)} autoComplete="off" onBlur={() => {setIsHoverVisible(false)}}/>
            </div>
            <button className="btn btn--primary" id="search_btn">BUSCAR</button>
            <div className={isHoverVisible ? "hover-sugestions show" : "hover-sugestions"}>
                {results.map((item, index) => (
                    (
                        <div key={index} onClick={() => { Navigate(`/products/${item.sku}`)}}>
                            <div className="square-image-flex">
                                <img src={API_URL + item.images[0].path} />
                            </div>
                            <div>
                                <h4>{item.sku}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}