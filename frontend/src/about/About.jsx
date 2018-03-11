import React ,{Component}from 'react'
import PageHeader from '../tamplate/PageHeader';

export default class About extends Component{

    render(){
        return(
            <div>
                <PageHeader name='Sobre' small='Nós' />

                <h2>Nossa História</h2>
                <p>Tudo comessou em ...</p>
                <h2>Missão</h2>
                <p>Buscamos gerir de forma..</p>
                <h2>Imprenssa</h2>
                <p>Facebook, watsapp...</p>
            </div>
        )
    }

}