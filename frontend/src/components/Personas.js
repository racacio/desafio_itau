import axios from "axios";
import React, { useEffect, useState } from "react";

const Personas = () => {
  // const baseUrl =
  //   "https://kmqlr004sk.execute-api.us-east-1.amazonaws.com/Itau/";
  // const urlApi = baseUrl + "personas";
  const urlApi = "personas";

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    getPersonas();
  }, []);

  const getPersonas = () => {
    axios
      .get(urlApi)
      .then((resp) => {
        if (resp && resp.data.length > 0) {
          setPersonas(resp.data);
          console.log("State ->", personas);
        } else {
          setPersonas([]);
        }
      })
      .catch((err) => {
        setPersonas([]);
      });
  };
  if (personas && personas.length > 0) {
    return (
      <div className="contenidoGeneral">
        <div className="contenido">
          <h1 className="title_interior">Listado de Personas</h1>
          <div className="detalle_sucursales">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Profesion</th>
                  <th>Empresa</th>
                </tr>
              </thead>
              <tbody>
                {personas.map((persona) => {
                  return (
                    <tr key={persona.id}>
                      <td>{persona.id}</td>
                      <td>{persona.nombre}</td>
                      <td>{persona.profesion}</td>
                      <td>{persona.empresa}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contenidoGeneral">
        <div className="contenido">
          <h1 class="title_interior">Listado de Personas</h1>
          <div className="detalle_sucursales">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Profesion</th>
                  <th>Empresa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} style={{ textAlign: "center"}}>No hay datos para mostrar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Personas;
