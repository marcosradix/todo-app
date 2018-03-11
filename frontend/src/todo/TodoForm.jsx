import React from 'react'
import Grid from '../tamplate/Grid'
import IconButton from '../tamplate/IconButton';
export default props => (

    <div role='form' className='todoForm'>
        <Grid cols='12 9 10' >
            <input type="text" id='description' className='form-control'
            placeholder='Adione uma tarefa' />
        </Grid>

        <Grid cols='12 3 2' >
        <IconButton style='primary' icon='plus' ></IconButton>
        </Grid>
    </div>
)