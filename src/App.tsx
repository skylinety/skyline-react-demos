import React, { FC } from 'react'
import { Button } from 'antd'
import WorkingPic from './pages/animations/animatedPic'
import Todo from './pages/todos/todoList'
import Demos from './pages/demos/demoItem'
import './App.css'

const App: FC = () => (
  <div className='App'>
    <WorkingPic></WorkingPic>
    <Todo></Todo>
    <Demos></Demos>
  </div>
)

export default App
