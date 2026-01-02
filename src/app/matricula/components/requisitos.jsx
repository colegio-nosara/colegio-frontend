"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/Modulos/matricula.module.css";
import { retryFetch } from "../../utils/retry.js";
import Ping from "@/app/components/Ping";
import tiposData from '@/app/data/tipo-requisitos.json'
import requisitosData from '@/app/data/data-requisitos.json'

export default function requisitos() {

  const secciones = tiposData.tipos.map((tipo) => {
    // Identificar el tipo y sus id requisitos, para luego
    // relacionarlos con el id de los requisitos en el JSON que 
    // contiene los requisitos
  const requisitosPorTipo = tipo.requisitos.map((id) =>
    requisitosData.requisitos.find((req) => req.id == id)
  );

  return (
    <section className={styles.cardTipos} key={tipo.id}>
      <h2 className={styles.subtitulo}>Requisitos {tipo.tipo}</h2>

      <ul className={styles.textoRequisitos}>
        {requisitosPorTipo.map((req, i) =>
          req ? (
            <li key={i}>{req.requisito}</li>
          ) : (
            <li key={i}>⚠️ Requisito no encontrado (ID inválido)</li>
          )
        )}
      </ul>
    </section>
  );
});

return <section className={styles.containerRequisitos}>{secciones}</section>;

}
