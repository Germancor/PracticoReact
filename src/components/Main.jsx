import React from 'react'
import './Main.css'
function Main({datosAlumno}) {
    return (
        <div className="card">
          <img className="foto" src={datosAlumno.imagen} alt="Foto del alumno" />
          <h2>{datosAlumno.nombre} {datosAlumno.apellido}</h2>
          <p>Edad: {datosAlumno.edad} años</p>
          <p>Legajo: {datosAlumno.legajo}</p>
          <p>Lenguajes: {datosAlumno.lenguajes}</p>
        </div>
      )
}

export default Main
