<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Herramientas tecnológicas para el modelado y simulación de procesos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5 
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/46.svg")
            .col-lg
              p.mb-0 Una vez que los procesos han sido diseñados y analizados mediante las metodologías tradicionales (SIPOC, VSM, diagramas de flujo, Ishikawa, tiempos y movimientos, PHVA), el siguiente paso es simularlos de forma digital, para predecir, probar y validar mejoras, sin necesidad de implementarlas directamente en el entorno real. Esto es posible gracias al uso de herramientas tecnológicas que permiten modelar y simular procesos industriales en entornos controlados, interactivos y replicables.      
        p(data-aos="fade-down") El modelado y la simulación no solo reducen el riesgo operativo, sino que permiten experimentar diferentes escenarios y tomar decisiones basadas en datos, eficiencia y calidad. Este enfoque es clave en la Industria 4.0, donde la visualización, la predicción y la automatización son pilares de la productividad.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/47.png", data-aos="zoom-in")

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Clasificación de herramientas tecnológicas de modelado y simulación de procesos


    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/48.png", data-aos="zoom-in")            

          .col-lg-8
            p(data-aos="fade-down") Antes de aplicar herramientas digitales específicas, es importante comprender la diferencia entre aquellas destinadas al #[b modelado de procesos] y las enfocadas en la #[b simulación de procesos]. Esta clasificación ayuda a definir con claridad qué herramienta utilizar según el objetivo del análisis, la complejidad del sistema y el tipo de decisiones que se desean tomar.
            .bg-color-4.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Las herramientas de modelado permiten representar gráficamente la secuencia de actividades, decisiones y flujos dentro de un proceso. Son útiles para documentar, comunicar y analizar visualmente la lógica operativa. En cambio, las herramientas de simulación van un paso más allá: permiten evaluar el comportamiento dinámico del proceso bajo diferentes condiciones, anticipar resultados, optimizar recursos y validar mejoras sin riesgo operativo.


    p(data-aos="fade-down") A continuación, se presenta un comparativo que clasifica las herramientas más utilizadas en la industria y la academia, según su tipo y propósito principal:

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Tipos de indeterminaciones en límites

    .tabla-a-1(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Tipo de herramienta
            th Herramientas representativas
            th Propósito principal
        tbody
          tr
            td.text-bold Modelado de procesos.        
            td Bizagi Modeler, Lucidchart, Microsoft Visio, draw.io.    
            td Documentar, representar y estructurar visualmente, un proceso.  
          tr
            td.text-bold Simulación de procesos.         
            td FlexSim, Arena Simulation, AutoMOD, Simul8, Digital Twins.     
            td Evaluar, experimentar y predecir el comportamiento de un proceso, bajo diferentes escenarios.

    .bg-color-11.p-4.mb-5(data-aos="fade-right")                      
      .row.align-items-center
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/49.svg")
        .col-lg
          .p-3
            p.mb-0 Esta clasificación permite al estudiante distinguir entre herramientas que sirven para comprender visualmente cómo está organizado un proceso (modelado), y aquellas que permiten experimentar con ese proceso digitalmente (simulación), antes de realizar cambios en el entorno real.

    .bg-full-width.bg-color-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/50.png', alt='')                
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Herramientas destacadas en el sector industrial para modelado de procesos
            p.mb-4(data-aos="fade-right") La representación visual de procesos es una herramienta clave en el análisis y mejora de operaciones industriales, porque permite comprender, documentar y optimizar flujos de trabajo, con mayor precisión. En el PDF #[b Herramientas destacadas en el sector industrial para modelado de procesos, se exploran], paso a paso, las funciones, las aplicaciones y los beneficios de plataformas como Bizagi Modeler, Lucidchart, Microsoft Visio y draw.io, a través de ejemplos reales que facilitan su uso práctico. Estas herramientas fortalecen las competencias de modelado en ingeniería industrial, promoviendo eficiencia, estandarización y colaboración, en los  entornos organizacionales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas destacadas en el sector industrial para modelado de procesos



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Procesos Industriales',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes principios busca garantizar una secuencia lógica y continua en la ejecución de actividades dentro de un proceso industrial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Estándar ISO',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Seguridad y ergonomía',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Flujo continuo',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Ciclo PHVA',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué herramienta permite representar gráficamente las etapas de un proceso, identificando proveedores, entradas, actividades, salidas y clientes?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Diagrama de flujo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Diagrama de Ishikawa',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Diagrama SIPOC',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'VSM (Value Stream Mapping)',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el objetivo principal del análisis de flujo de valor (VSM)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Controlar el consumo de energía en un proceso',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Identificar actividades que no agregan valor y optimizar el flujo del proceso',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Diseñar el layout de una planta',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Generar manuales operativos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué herramienta tecnológica se utiliza para simular procesos logísticos en un entorno tridimensional (3D)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Lucidchart',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Bizagi Modeler',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'FlexSim',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Microsoft Visio',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes métodos se enfoca en la mejora continua mediante un ciclo iterativo de cuatro fases?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'VSM',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ciclo PHVA',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Diagrama de flujo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Análisis de tiempos y movimientos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
