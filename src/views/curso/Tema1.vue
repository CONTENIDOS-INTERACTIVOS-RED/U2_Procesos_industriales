<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-2(data-aos="fade-right")
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/10.svg")
          .col-lg
            p.mb-0.text-white Los procesos industriales son el conjunto de actividades técnicas, organizativas y tecnológicas, que permiten transformar materias primas en productos terminados, o servicios con valor agregado. Estos procesos, que forman la columna vertebral de cualquier sistema productivo, están diseñados para maximizar la eficiencia, minimizar desperdicios y responder a los requerimientos de calidad, tiempo y costo, establecidos por el mercado.

    .bg-full-width.bg-color-video.mb-5(data-aos="fade-left")
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gDZbN_us0eQ?si=R7Y6giyxfieGFZaZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/279050" target="_blank" rel="noopener noreferrer") Cera Ochoa, R. (Comp.). (2020). Formación de profesionales en ingeniería industrial: una mirada desde el desarrollo por competencias. Fundación Universitaria San Mateo. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ulima.edu.pe/index.php/Ingenieria_industrial/article/view/6234" target="_blank" rel="noopener noreferrer") Lara Espinoza, G. & Jurado Guerrero, R. A. (2023). Análisis y propuesta de mejora en el proceso de producción de yogur griego de una empresa peruana mediante herramientas Lean (5S). Ingeniería Industrial, 44(44), 37-63. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/kToEZ-EoCD0?si=cvQ_VYbrxM4LMfTW" target="_blank" rel="noopener noreferrer") PROMPERÚ Oficial. (2020). ¿Cómo optimizar tus procesos para una mejor gestión de la liquidez en tu empresa? 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
