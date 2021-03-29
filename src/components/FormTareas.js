import React, { useState } from "react";

const FormTareas = () => {
  // logica de js
  // creamos los state
  const [tareas, setTareas] = useState([]);
  const [tareaIndividual, setTareaIndividual] = useState("");

  //   const guardarTarea = (e) =>{
  //     console.log(e.target.value);
  //     // guardo un dato en el state tareaIndividual
  //     setTareaIndividual(e.target.value);
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    // guardar una tarea en el arreglo de tareas
    setTareas([...tareas,tareaIndividual])
  };

  return (
    // aqui puedo escribir logica
    <div className="container d-flex justify-content-center">
      {/* codigo html */}
      <form className="w-75 my-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
            onChange={(e) => setTareaIndividual(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTareas;
