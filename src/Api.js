import axios from 'axios';

const api = {
    getPersonagesmByName: async () => {
        const response = 
            await axios.get("https://rickandmortyapi.com/api/character/2");
                
            return response;
    } 
}