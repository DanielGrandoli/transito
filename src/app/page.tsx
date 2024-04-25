import Image from "next/image";
import styles from "../app/styles/Home.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Document from "next/document";


export default function Home() {
  


  const botones = document.querySelectorAll("#botones");
    const pantalla = document.querySelector(".display");
  

  
  
  return (
    <main>
      <div className={`pt-5 container-lg`}>
        <div className="row">
          <div className="col-12 text-center">
          <div className="row">
              <div className="p-5 col-5 mx-auto">
                <input type="text" className="form-control" placeholder="Ingrese su DNI" aria-label="Ingrese su DNI" id="display" name="display"/>
              </div>
              </div>
              <div>
                <button className={`botones ${styles.botones}`} id="botones" name="botones" value={1}>1</button>
                <button className={styles.botones} id="botones" name="botones" value={2}>2</button>
                <button className={styles.botones} id="botones" name="botones" value={3}>3</button>
                <br />
                <button className={styles.botones} id="botones" name="botones" value={4}>4</button>
                <button className={styles.botones} id="botones" name="botones" value={5}>5</button>
                <button className={styles.botones} id="botones" name="botones" value={6}>6</button>
                <br />
                <button className={styles.botones} id="botones" name="botones" value={7}>7</button>
                <button className={styles.botones} id="botones" name="botones" value={8}>8</button>
                <button className={styles.botones} id="botones" name="botones" value={9}>9</button>
                <br />
                <button className={styles.botones} id="borrar" name="borrar" >Borrar</button>
                <button className={styles.botones} id="botones" name="botones" value={0} >0</button>
                <button className={styles.botones} >Ingresar</button>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
