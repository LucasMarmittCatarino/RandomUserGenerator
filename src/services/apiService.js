const fetchData = async () => {
    try{
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        return(data);
    } catch(error) {
        throw new Error('Erro ao tentar buscar a API!');
    }
};

export default fetchData;