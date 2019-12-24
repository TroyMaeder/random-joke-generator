
import React, { FC, useEffect, useState } from 'react'
import Button from '../Button/Button'
import Fetcher from '../../helpers/fetcher'
import './styles.scss'

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

  useEffect(() => get(baseUrl), [baseUrl])

  const [joke, setJoke] = useState('')

  return (
      <>
        <section>{joke}</section>
        <Button className="joke" onClick={() => get(baseUrl)} text="random joke" />
      </>
  )
}

export default JokeGenerator
