import React, { FC, Suspense } from 'react'
import './App.scss'
import BASEURLS from './shared/base-urls'
import JokeGenerator from './components/JokeGenerator/JokeGenerator'

const App: FC<{}> = () => (
    <>
      <Suspense fallback={<h4>Still loading...</h4>}>
        <JokeGenerator baseUrl={BASEURLS.randomJokes} />
      </Suspense>
    </>
)

export default App
