import React, { useContext, useState, useEffect } from 'react'
// import JokeContext from '../contexts/JokeContext'

import AxiosWithAuth from '../utillities/axiosWithAuth'

// Components
import Joke from './Joke'

const Products = ({ history }) => {
  // const { jokes } = useContext(JokeContext)
  const [jokes, setJokes] = useState('')

  useEffect(() => {
    AxiosWithAuth()
      .get('http://localhost:3300/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((e) => {
        console.log('error:', e)
        localStorage.removeItem('token')
        history.push('/login')
      })
  }, [history])

  return (
    <div className='products-container'>
      {jokes.length > 0 ? (
        jokes.map((joke) => <Joke key={joke.id} singlejoke={joke} />)
      ) : (
        <h1>Cannot get jokes</h1>
      )}
      <button
        className='btn'
        onClick={() => {
          localStorage.removeItem('token')
          history.push('/login')
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Products
