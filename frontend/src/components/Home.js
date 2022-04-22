import React from "react";

const Home = () => {
  return (
    <div id="home">
      <div className="contenidoGeneral">
        <div className="contenido">
          <h1 className="title_interior">Bienvenidos</h1>
          <div className="cont_info">
            <div className="info_sol">
              <h4>Desafío “Introducción a la Nube”</h4>
              <p className="ancho">
                Generar 2 funciones Lambda en el leguaje que desees que realicen
                las siguientes tareas:
              </p>
              <ul>
                <li>
                  Función que retorna un listado (tu defines lo que contiene el
                  listado y los campos)
                </li>
                <li>
                  Función que recibe un parámetro y retorna un valor (debe
                  realizar un cálculo interno, tú lo defines)
                </li>
              </ul>
              <p className="ancho">
                Generar una capa UI utilizando S3 y Cloudfront que consuma las
                dos APIs:
              </p>
              <ul>
                <li>Una vista que debe mostrar un listado en una tabla</li>
                <li>
                  Una vista que debe solicitar el dato en un campo enviarlo a la
                  API y devolver el resultado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
