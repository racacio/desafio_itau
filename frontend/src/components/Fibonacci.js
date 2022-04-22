import React, { useRef, useState } from "react";
import axios from "axios";

const Fibonacci = () => {
  // const baseUrl =
  //   "https://kmqlr004sk.execute-api.us-east-1.amazonaws.com/Itau/";
  // const urlApi = baseUrl + "fibonacci";
  const urlApi = "fibonacci";
  const [status, setStatus] = useState(false);
  const [result, setResult] = useState("");
  const numeroRef = useRef("");

  const fnFibonacci = (e) => {
    e.preventDefault();
    let numero = numeroRef.current.value;
    if (numero) {
      setStatus(false);
      getFibonacci(numero);
    } else {
      setStatus(true);
    }
  };

  const getFibonacci = (n) => {
    const lUrlApi = `${urlApi}?numero=${n}`;
    axios(lUrlApi)
      .then((resp) => {
        if (resp.data) {
          setResult(`El Fibonacci de ${n} es [${resp.data}]`);
        } else {
          setResult(`El Fibonacci de ${n} es incorrecto`);
        }
      })
      .catch(() => {
        setResult(`El Fibonacci de ${n} es incorrecto`);
      });
  };

  return (
    <div className="contenidoGeneral">
      <div className="contenido">
        <h1 className="title_interior">Fibonacci</h1>
        <form onSubmit={fnFibonacci}>
          <fieldset>
            <ul>
              <li>
                <legend>Ingresa un numero</legend>
              </li>
              <li>
                <table>
                  <tr>
                    <td>
                      <input id="numeroFibon" type="number" ref={numeroRef} />
                    </td>
                    <td>
                      <input
                        type="submit"
                        value="Resultado"
                        style={{ marginLeft: "10px" }}
                      />
                    </td>
                  </tr>
                  {status && (
                    <tr>
                      <td colSpan={2}>
                        <span style={{ color: "red" }}>Numero requerido</span>
                      </td>
                    </tr>
                  )}
                </table>
              </li>
              {result !== "" && <li><legend>{result}</legend></li>}
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Fibonacci;
