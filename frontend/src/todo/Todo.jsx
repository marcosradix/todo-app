import React ,{Component} from 'react'
import PageHeader from '../tamplate/PageHeader';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import Axios from 'axios'
const URL = 'http://localhost:3004/api/todos'


export default class Todo extends Component{
constructor(props){
    super(props)
    this.state = {description: '', list: []}
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.refresh()
}
handleAdd(){
const description = this.state.description
Axios.post(URL, {description})
.then(resp => this.refresh())
}
refresh(){
    Axios.get(`${URL}?sort=-createdAt`)
    .then(resp => this.setState({...this.state, description: '', list: resp.data}))
}

handleChange(e){
    this.setState({...this.state, description:e.target.value})
}

handleRemove(todo){
    Axios.delete(`${URL}/${todo._id}`)
    .then(resp => this.refresh())
}
    render(){
        return(
        <div>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TodoForm handleAdd={this.handleAdd}
            description={this.state.description}
            handleChange = {this.handleChange} />
            <TodoList list={this.state.list} handleRemove={this.handleRemove} />
        </div>
        
        )
    }

}
   
