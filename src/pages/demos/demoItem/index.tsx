import React, {FC} from 'react'
import './index.scss'

interface Todo {
  name: string | number
  id: string | number
}


interface ListProps {
  todos: Todo[]
}

interface InputProps {
  changeEvent: any
}

interface testState {
  todos: Todo[]
}

interface Person {
  name: string | number
}
const Skyline = ({name}: Person) => {
  return <div>{name}</div>
}

const Luna:FC<Person> = ({name}) => {
  return <div>{name}</div>
}

class test extends React.Component<{}, testState> {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      todos: [
        { name: 111, id: 1 },
        { name: 222, id: 2 },
      ],
    }
  }
  render(): React.ReactNode {
    return (
      <div className='pageIndex' id='test'>
        <h3>Demos</h3>
        <Skyline name='Skyline'></Skyline>
        <Luna name='Luna'></Luna>
        <Input changeEvent={this.handleAdd}></Input>
        <List todos={this.state.todos}></List>
      </div>
    )
  }
  componentDidMount() {}
  handleAdd = (e: any) => {
    this.setState({
      todos: this.state.todos.concat({ name: e, id: Date.now() }),
    })
    this.setState({
      todos: this.state.todos.concat({ name: 1111, id: Date.now() + 1 }),
    })
    console.log('index.tsx第42行:::todos', this.state.todos)
  }
}

class List extends React.Component<ListProps, { name: number }> {
  // constructor(props: ListProps | Readonly<ListProps>) {
  //   super(props)
  // }
  render(): React.ReactNode {
    const { todos } = this.props
    return (
      <div className='pageIndex' id='test'>
        {todos.map((v) => (
          <div key={v.id}>{v.name}</div>
        ))}
      </div>
    )
  }
  componentDidMount() {}
  handleNativeAndReact = (e: any) => {
    this.setState({
      name: e.target.value,
    })
  }
}

class Input extends React.Component<InputProps, { name: number | string }> {
  constructor(props: InputProps | Readonly<InputProps>) {
    super(props)
    this.state = {
      name: 123,
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <label htmlFor='testInput'></label>
        <input
          type='text'
          id='testInput'
          value={this.state.name}
          onChange={this.InputChange}
        />
        <button onClick={this.submitChange}>提交</button>
      </div>
    )
  }
  InputChange = (e: any) => {
    this.setState({
      name: e.target.value,
    })
  }
  submitChange = (e: any) => {
    this.props.changeEvent(this.state.name)
    this.setState({
      name: '',
    })
  }
  // handleNativeAndReact = (e: any) => {
  //   this.setState({
  //     name: e.target.value,
  //   })
  // }
}
export default test
