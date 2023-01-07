import React, { FC } from 'react'
import { Button } from 'antd'
import WorkingPic from './pages/animations/animatedPic'
import './App.css'

const App: FC = () => (
  <div className='App'>
    <Button type='primary'>Button</Button>
    <WorkingPic></WorkingPic>
  </div>
)

export default App
