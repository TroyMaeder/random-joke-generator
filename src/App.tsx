import React, { FC, useEffect, useState } from 'react';
import './App.scss';
import Button from './components/Button/Button'
import { Fetcher } from './helpers/fetcher'

const App: FC<{}> = () => {
  const apiHost = 'https://api.chucknorris.io/jokes/random'
  const get = (apiHost: string) => {
    Fetcher.get(apiHost)
    .then((res: any) => {
      setJoke(res.value)
      setIsLoaded(true)
    })
    .catch(err => {
        //TODO: handle error
        setIsLoaded(true)
    })
  }

  useEffect(() => {
    get(apiHost)
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
        <Button onClick={() => get(apiHost)} text="random joke" />
      </>
  )
}

export default App;
