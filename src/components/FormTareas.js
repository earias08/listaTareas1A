import React, { Fragment, useState, useEffect } from "react";
import Listatarea from "./Listatarea";

const FormTareas = () => {
  // logica de js
  let tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareas'));
  if(!tareasLocalStorage){
    tareasLocalStorage= [];
  }
  // creamos los state
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const [tareaIndividual, setTareaIndividual] = useState("");

  useEffect(()=>{
    // aqui va toda la logica que quiero ejecutar en montaje y actualizacion
    console.log('ejecutando el ciclo de vida');
    localStorage.setItem('arregloTareas', JSON.stringify(tareas))
  },[tareas]);

  //   const guardarTarea = (e) =>{
  //     console.log(e.target.value);
  //     // guardo un dato en el state tareaIndividual
  //     setTareaIndividual(e.target.value);
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    // guardar una tarea en el arreglo de tareas
    setTareas([...tareas,tareaIndividual]);
    // limpiar el input
    setTareaIndividual('');
  };

  const borrarTarea = (nombre) =>{
    let arregloModificado = tareas.filter((valor)=> valor !== nombre);
    setTareas(arregloModificado);
  }

  return (
    // aqui puedo escribir logica
    <Fragment>
      <div className="container d-flex justify-content-center">
        {/* codigo html */}
        <form className="w-75 my-5" onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <input
              type="text"
              placeholder="Ingrese una tarea"
              className="form-control"
              onChange={(e) => setTareaIndividual(e.target.value)}
              value={tareaIndividual}
            />
            <button className="btn btn-outline-light" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className='container my-5'>
      <Listatarea arregloTareas={tareas} borrarTarea={borrarTarea}></Listatarea>
      </section>
    </Fragment>
  );
};

export default FormTareas;
