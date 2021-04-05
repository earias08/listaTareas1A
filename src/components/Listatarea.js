import React from 'react';
import ItemTarea from './ItemTarea';

const Listatarea = (props) => {
    return (
        <ul className='list-group'>
            {
                props.arregloTareas.map((valor,indice)=><ItemTarea key={indice} dato={valor}></ItemTarea> )
            }
           
        </ul>
    );
};

export default Listatarea;