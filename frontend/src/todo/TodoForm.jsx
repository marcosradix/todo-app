import React from 'react'
import Grid from '../tamplate/Grid'
import IconButton from '../tamplate/IconButton';
export default props => (

    <div role='form' className='todoForm'>
        <Grid cols='12 9 10' >
            <input type="text" id='description' className='form-control'
            placeholder='Adicione uma tarefa' onChange={props.handleChange}
            value={props.description} />
        </Grid>

        <div className='posicionar'>
        <Grid cols='12 3 2'>
        <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
        <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
        </Grid>
        </div>
       
    </div>
)