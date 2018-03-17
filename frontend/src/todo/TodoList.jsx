import React from 'react'
import IconButton from '../tamplate/IconButton'
export default props =>{

    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''} >{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'   onClick={() => props.handleRemove(todo)} />
                    <IconButton style='success' icon='check'    onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton style='warning' icon='undo'     onClick={() => props.handleMarkAsPending(todo)} />
                    
                </td>
            </tr>
        ))
    }
    return(

        <table className='table' >
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}