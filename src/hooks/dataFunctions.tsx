import { useState } from 'react';
import fetchData from '../services/apiService';
import { NameData } from '../components/interfaces/nameDataInterface';
import { Profissao } from '../components/enums/profissaoEnum';

export function useData() {
  const [picture, setPicture] = useState<string | null>(null);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setCell] = useState('');
  const [pais, setPais] = useState('');
  const [profissao, setProfissao] = useState('');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
        setLoading(true)
        const data = await fetchData();
        const { first, last }: NameData = data.results[0].name;  //Destructuring
        const { large }: NameData = data.results[0].picture;
        const { value }: NameData = data.results[0].id;
        const { gender, email, cell }: NameData = data.results[0];
        const { country }: NameData = data.results[0].location;

        setPicture(large);
        setName(`${first} ${last}`);
        setGenero(gender);
        setId(value || 'undefined');
        setEmail(email);
        setCell(cell);
        setPais(country);
        montaFrase();
        setLoading(false)
    } catch (error) {
      console.log(error);
    }
};

  function montaFrase() {
    const profissoes = Object.values(Profissao);
    const numeroAleatorio = Math.floor(Math.random() * profissoes.length);
    const profissaoAleatoria = profissoes[numeroAleatorio];
    return setProfissao(`${profissaoAleatoria}`);
  }

  return {
    picture,
    id,
    name,
    genero,
    email,
    cell,
    pais,
    profissao,
    loading,
    getData,
    setPicture,
    setId,
    setName,
    setGenero,
    setEmail,
    setCell,
    setPais,
    setProfissao,
  };
}
