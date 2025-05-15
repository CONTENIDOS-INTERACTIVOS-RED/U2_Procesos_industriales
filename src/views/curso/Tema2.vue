<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Principios de diseño de procesos industriales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p(data-aos="fade-down") En toda cadena de abastecimiento, los procesos industriales se materializan a través de actividades, operaciones y recursos que permiten transformar insumos en productos o servicios. Conozcamos cada uno de ellos:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png")                     
            .col-lg-7
              h5 Las actividades
              p Incluyen tareas organizativas y de apoyo, que permiten el flujo eficiente de los materiales y la información en el proceso, tales como el almacenamiento, el transporte interno, la manipulación de materiales, la planificación de producción y la logística. Estas actividades, no necesariamente transforman el producto directamente, pero son esenciales para que las operaciones puedan desarrollarse sin interrupciones. 

          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/12.png")                     
            .col-lg-7
              h5 Las operaciones
              p Son las acciones directamente relacionadas con la transformación física o funcional del producto. Estas incluyen procesos como mezclado, corte, ensamblaje, empaque y control de calidad. Son el núcleo técnico del proceso productivo y representan el punto donde el insumo adquiere valor industrial. 

          .row.align-items-center.p-4.p-md-5 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/13.png")                     
            .col-lg-7
              h5 Los recursos
              p Permiten que las actividades y operaciones se lleven a cabo, comprenden materias primas, mano de obra, maquinaria, energía, tecnología e infraestructura.                              
    p(data-aos="fade-down") Estos tres componentes están estrechamente vinculados con los principios de diseño de procesos industriales, como son:

    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/14.svg" alt="" style="width: 90px")
              h5.text-center La estandarización
              p.mb-0.text-center Componente que busca definir operaciones y actividades con procedimientos óptimos

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/15.svg" alt="" style="width: 90px")
              h5.text-center El flujo continuo
              p.mb-0.text-center Componente que requiere de recursos bien organizados; la minimización de desperdicios se logra eliminando actividades que no agregan valor.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/16.svg" alt="" style="width: 90px")
              h5.text-center La flexibilidad
              p.mb-0.text-center Componente que depende de cómo los recursos, actividades y operaciones, pueden adaptarse a distintas condiciones del entorno industrial. 

    p(data-aos="fade-down") Para ver los procesos industriales desde una perspectiva más general, es útil agruparlos por tipo de industria, distinguiendo entre aquellos que producen bienes tangibles y los que ofrecen servicios intangibles. Esta clasificación permite entender cómo se organizan las líneas de producción y qué tipo de insumos y operaciones predominan en cada sector. 

    p(data-aos="fade-down") Los sectores económicos pueden clasificarse por tipo de insumo y similitud en líneas de producción. Por ejemplo: 


    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/17.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="17.4%" y="54%" numero="+")
                  h5 Industria alimentaria
                  p Utiliza insumos como materias primas agrícolas, y se caracteriza por líneas de producción en serie y operaciones de mezclado, cocción y envasado. Su producto final, son bienes tangibles para el consumidor.
                .bg-color-white.box-shadow.p-3(x="68%" y="7%" numero="+")
                  h5 Industria automotriz
                  p Emplea componentes mecánicos y eléctricos con líneas de ensamblaje que integran operaciones automatizadas y controles de calidad. El producto final son vehículos terminados.
                .bg-color-white.box-shadow.p-3(x="81.6%" y="50.5%" numero="+")
                  h5 Industria farmacéutica
                  p Parte de compuestos químicos y biológicos, en procesos por lotes, bajo condiciones controladas. El producto final son medicamentos listos para distribución. 

    p(data-aos="fade-down") En contraste, existen sectores donde el producto final es un servicio, pero los procesos industriales también se aplican:

    .row.justify-content-center.align-items-stretch.text-center.mb-4
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/18.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Sector salud
            p.mb-0 Los insumos incluyen medicamentos, equipos y personal médico. Las operaciones son diagnósticos, tratamientos y procedimientos clínicos. El servicio es la atención al paciente.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/19.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Transporte y logística
            p.mb-0 Los insumos son flotas de vehículos, tecnología GPS y operadores. Las operaciones incluyen planificación de rutas, carga y entrega. El servicio es el desplazamiento de bienes o personas.
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/20.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Educación virtual
            p.mb-0 Los insumos son plataformas digitales, contenidos académicos y docentes. Las operaciones son planificación, producción y entrega de clases en línea. El servicio es la formación académica.

    .bg-full-width.bg-color-3.mb-5(data-aos="zoom-in-down")
      .px-4.px-md-5.py-4
        p.mb-0.text-white Diseñar procesos industriales en el contexto de la transformación de insumos, función esencial dentro de la cadena de suministro o abastecimiento, implica estructurar de manera lógica y funcional, cada componente del sistema productivo. Este enfoque garantiza eficiencia operativa, calidad en los resultados y alineación con los objetivos estratégicos de la organización.


    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-8.mb-3.mb-lg-0
            .row.align-items-center
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/21.svg")
              .col-lg
                .p-3
                  p.mb-0 Comprender esta lógica permite reconocer que, según el tipo de industria, los procesos deben adaptarse a distintas formas de transformación, ya sea de bienes tangibles o de servicios intangibles. Por ello, el diseño de procesos parte de la necesidad de clasificar adecuadamente dichas transformaciones, lo cual facilita su análisis, rediseño y optimización, desde una perspectiva estratégica e integral.
            .bg-color-4.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Clasificar los procesos, según su tipo de transformación, no solo permite visualizar su estructura con mayor claridad, sino que también habilita la aplicación efectiva de los principios de diseño, #[b estandarización, eficiencia y mejora continua], en cada entorno industrial. En este sentido, un diseño estructurado representa el primer paso práctico hacia la optimización, porque permite anticipar ineficiencias, definir flujos de trabajo coherentes y establecer indicadores claves para su seguimiento y mejora permanente. 

          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/22.png", data-aos="zoom-in") 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Importancia de los principios de diseño, en el contexto del diseño y el análisis de los procesos

    p(data-aos="fade-down") La aplicación de principios de diseño en procesos industriales es fundamental para lograr sistemas productivos eficientes, seguros y adaptables.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Importancia de los principios de diseño, en el contexto del diseño y el análisis de los procesos
            p.mb-4(data-aos="fade-right") En el PDF #[b Importancia de los principios de diseño], se exploran criterios claves como la estandarización, el flujo continuo, la flexibilidad y la minimización de desperdicios, los cuales guían la estructuración lógica de los procesos y permiten, al estudiante, comprender cómo tomar decisiones estratégicas desde el diseño inicial. Estos principios son la base sobre la cual se apoyan posteriormente, las herramientas de análisis, simulación y mejora continua, en los entornos industriales reales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Importancia de los principios de diseño, en el contexto del diseño y el análisis de los procesos
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/23.png', alt='') 

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://sentrio.io/blog/value-stream-mapping/" target="_blank" rel="noopener noreferrer") Sentrio. (2021). Value Stream Mapping: qué es, pasos y consejos para hacer uno. SENTRIO. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.thebalab.com/post/top-tools-for-process-modelling-a-comprehensive-comparison?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer") Fraser R. (2023). Las mejores herramientas para el modelado de procesos: una comparación exhaustiva. thebalab. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/EGOe0lVHJ2k?si=9eRtnypCMYKvaVRk" target="_blank" rel="noopener noreferrer") COMUNIDAD INGENIERÍA INDUSTRIAL. (2024). ACTIVACIÓN COMVEYOR DE VERSIONES ANTERIORES Y CONFIGURACION DE CLASIFICADOR.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
