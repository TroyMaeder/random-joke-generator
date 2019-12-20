import React, { FC, useEffect, useState } from 'react';
import './App.scss';
import Button from './components/Button/Button'
import Fetcher from './helpers/fetcher'
import BASEURLS from './shared/base-urls'

const App: FC<{}> = () => {
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
    get(BASEURLS.randomJokes)
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
        <Button onClick={() => get(BASEURLS.randomJokes)} text="random joke" />
      </>
  )
}

export default App;
