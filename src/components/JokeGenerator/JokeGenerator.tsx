
import React, { FC, useEffect, useState } from 'react'
import './App.scss'
import Button from '../Button/Button'
import Fetcher from '../../helpers/fetcher'

interface JokeGeneratorProps {
  baseUrl: string
}

const JokeGenerator: FC<JokeGeneratorProps> = ({ baseUrl }) => {
  const get = (apiHost: string) => {
    Fetcher.get(apiHost)
    .then((res: any) => {
      setJoke(res.value)
    })
    .catch(err => {
        //TODO: handle error
    })
  }

  useEffect(() => get(baseUrl))

  const [joke, setJoke] = useState('')

  return (
      <>
        <section>{joke}</section>
        <Button onClick={() => get(baseUrl)} text="random joke" />
      </>
  )
}

export default JokeGenerator
