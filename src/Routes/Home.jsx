
import Card from '../Components/Card'
import axios from 'axios';
import {useState, useEffect} from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState ([])


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=> setDentistas(res.data))
  }, [])


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map((dentista)=>{return <Card key={dentista.id} dentista={dentista}/>})}
      </div>
    </main>
  )
}

export default Home