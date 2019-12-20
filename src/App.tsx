import React, { FC, useEffect, useState } from 'react';
import './App.scss';
import Button from './components/Button/Button'

interface AppProps {
  joke: string
  isLoaded: boolean
  error?: string
}

const App: FC<{}> = () => {
  const fetchAPI = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(res => {
        if (res.value) {
          setJoke(res.value)
          setIsLoaded(true)
        }
      }, () => {
        //TODO: handle error
        setIsLoaded(true)
      })
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const [joke, setJoke] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  if (!isLoaded) {
    return (
      <section>....is loading</section>
    )
  }
  return (
      <>
        <section>{joke}</section>
        <Button onClick={fetchAPI} text="tell me a joke" />
      </>
  )
}

export default App;
