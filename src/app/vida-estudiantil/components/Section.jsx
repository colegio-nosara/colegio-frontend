"use client";
import { useState, useEffect } from "react";
import { retryFetch } from "../../utils/retry.js";
import styles from "@/app/styles/Modulos/vidaEstudiantil.module.css";
import data from '@/app/data/data-vida.json'
import Ping from "@/app/components/Ping";

export default function Section() {

  return (
    <div className={styles.container}>
      {data.map((seccion, index) => (
        // index % 2 === 0; //Verdadero si es par, falso si es impar

        <div key={seccion.id} className={styles.secciones}>
          <img
            className={index % 2 === 0 ? styles.imagenInvertida : styles.imagen}
            src={seccion.imgUrl}
            alt="Imagen sin cargar"
            loading="lazy"
          />

          <section
            className={
              index % 2 === 0 ? styles.cajaTextoInvertida : styles.cajaTexto
            }
          >
            <h2 className={styles.tituloSeccion}>{seccion.titulo}</h2>
            <p className={styles.descripcion}>{seccion.info}</p>
          </section>
        </div>
      ))}
    </div>
  );
}
