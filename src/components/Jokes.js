import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
// import JokeContext from '../contexts/JokeContext'

import AxiosWithAuth from "../utillities/axiosWithAuth";
// easier to use this utility when axios.post the data so I can see the added friends

// Components
import Joke from './Joke'

const Products = () => {
  // const { jokes } = useContext(JokeContext)

  const [jokes, setJokes] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3300/api/jokes')
  })

  return (
    <div className='products-container'>
      {/* {jokes.map((joke) => (
        <Joke key={joke.id} product={joke} />
      ))} */}
    </div>
  )
}

export default Products
