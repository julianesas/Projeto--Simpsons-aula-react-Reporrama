import './style.css'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'


const RickandMorty =()=>{
    const [personagens, setPersonagens] = useState([])
    const [buscaPersonagens, setBuscaPersonagens] = useState('')
    const [filterPersonagens, setFilterPersonagens] = useState([])
    

    useEffect(()=>{
        const fetchRickandMorty = async()=>{
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json()
            setPersonagens(data.results)
        }
        fetchRickandMorty()

    },[])

    useEffect(()=>{
        setFilterPersonagens(
            personagens.filter(dado=>{
                return dado.name.includes(buscaPersonagens)

               
            })
        )
        

    },[buscaPersonagens,personagens])
  

    console.log(personagens)
    console.log(buscaPersonagens)



    return(
        <>
        <Menu />
        <div className='wrapper'>
        <div className='input'>
            <div className='input-card'>
                <input placeholder="Digite o nome do personagem" onChange={e=>{setBuscaPersonagens(e.target.value)}}/>
                <span className="material-icons search">search</span>
            </div>
        </div>
        <div className='personagens'>
            {filterPersonagens.map(personagem=> {
                return(
                    <div key={personagem.id} className='card-personagens'>
                        <h1>{personagem.name}</h1>
                        <p>Espécie: {personagem.species}</p>
                        <img src={personagem.image} alt={personagem.name}/>
                    </div>
                )       
            })} 
        </div>

        </div>
        
        
        <Footer />
        
        </>
    )
}


export default RickandMorty