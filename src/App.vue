<script setup lang="ts">
import hero from './assets/SLIDE_03.jpg'
import noise from './assets/noise_50.png'
</script>

<template>
<!--<div class="bg-gradient-to-r from-gray-800 to-gray-600">-->
<!--  <header >-->
<!--  <nav >-->
<!--    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">-->
<!--      <div class="relative flex h-16 items-center justify-between">-->
<!--        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">-->
<!--          <div class="flex flex-shrink-0 items-center">-->
<!--            <img class="h-8 w-auto" src="./assets/favicon-32x32.png" alt="Csv eventos">-->
<!--          </div>-->
<!--          <div class="hidden sm:ml-6 sm:block">-->
<!--            <div class="flex space-x-4">-->
<!--              &lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
<!--              <a href="#" class="text-white rounded-md px-3 py-2 text-sm font-medium">Inicio</a>-->
<!--              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sobre</a>-->
<!--              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contactos</a>-->
<!--              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Servi&ccedilos</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
<!--  </header>-->

<!--  <hr class="border-gray-700 sm:mx-auto dark:border-gray-700" />-->

<!--  <main class="bg-gradient-to-r from-gray-800 to-gray-600">-->
<!--  <section class="text-white">-->
<!--    <h1 class="text-gray-200 flex justify-center capitalize text-4xl m-5">-->
<!--      M&uacute;sica &Eacute a lingua do mundo-->
<!--    </h1>-->
<!--    -->
<!--    <div class="text-white flex p-5 justify-around">-->
<!--      -->
<!--      <div class="ratings m-5 justify-around">-->
<!--        <p class="text-lg">A miss&atilde;o da Csv &eacute; dar ao artista a oportunidade de levar a sua m&uacute;sica<br/> para t&atilde;o longe quanto o artista quer que ela v&aacute;.</p>-->
<!--        <button class="text-black font-semibold flex rounded-full mt-9 mb-5 px-4 py-2 bg-green-500 hover:animate-pulse ring">-->
<!--          Venha Conosco-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>-->
<!--        </button>-->
<!--        <div class="plays bg-gradient-to-t px-3 py-6 rounded-2xl mt-20 mr-2.5 inline-flex">-->
<!--          <h1>+10000 Plays</h1>-->
<!--        </div>-->
<!--        <div class="downloads bg-gradient-to-t px-3 py-6 rounded-2xl mt-9 ml-2.5 inline-flex">-->
<!--          <h1>+7500 Downloads</h1>-->
<!--        </div>-->
<!--      </div>-->
<!--      -->
<!--      <div class="hero flex">-->
<!--        <div>-->
<!--          <img src="./assets/concert.jpg" class="rounded-full w-40 h-40 m-5">-->
<!--          <img src="./assets/guitar.jpg" class="rounded-full w-40 h-40 m-5 ring">-->
<!--        </div>-->
<!--          <img src="./assets/mpumelelo.jpg" class="rounded-full w-40 h-40 m-5"/>-->
<!--        </div>-->
<!--    </div>-->
<!--  </section>-->
<!--  </main>-->

<!--  <footer class="bg-gray-800">-->
<!--    <div class="sm:flex sm:items-center sm:justify-between ml-7 mr-7 mt-4 mb-4 p-5">-->
<!--      <span class="text-sm text-white sm:text-center dark:text-gray-400 mb-7">© <a href="#" class="hover:underline">Csv Ag&ecircncia™</a> 2024 . Todos Os Direitos Reservados.-->
<!--      </span>-->
<!--      -->
<!--      <div class="flex mt-4 sm:justify-center sm:mt-0 mb-7">-->
<!--        <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">-->
<!--            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">-->
<!--                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>-->
<!--              </svg>-->
<!--            <span class="sr-only">Facebook page</span>-->
<!--        </a>-->
<!--        -->
<!--        <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">-->
<!--            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">-->
<!--              <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>-->
<!--          </svg>-->
<!--            <span class="sr-only">Twitter page</span>-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
<!--  </footer>-->
<!--  </div>-->

  <section class="relative bg-gradient-to-b to-amber-100 from-white dark:bg-gray-900 h-screen flex justify-start items-center">
    <img class="absolute  inset-0 w-full h-full object-cover" :src="hero" alt="mockup">
    <div class="absolute   inset-0 bg-gradient-to-b from-violet-800 to-rose-900 opacity-70"></div>
    <div class="relative py-8 px-4  max-w-screen-xl sm:py-16 lg:px-32 ">
      <div class="max-w-screen-md mb-8 flex flex-col  justify-start ">

        <div class=" p-1">
          <svg class="font-black text-9xl" >
            <text x="50%" y="70%"  text-anchor="middle"  >
              CSV
            </text>
          </svg>
        </div>
        <h3 class="text-8xl font-['Lexend_Deca']  text-white   font-black">
          Agência de Eventos
        </h3>
        <p class="font-['Lexend_Deca'] text-white/80  sm:text-sm lg:text-lg  py-6  text-start aos-init aos-animate" data-aos="fade-up">
          A Csv Agência, é uma empresa moçambicana, dedicada a gestão de carreiras de artistas, criada nos mead
        </p>
        <button  class="text-white border border-white w-fit rounded-full font-black text-xl p-3 px-8 ">
          Saiba Mais</button>
      </div>
    </div>
    <div class="relative ">
        <img class="max-h-[70vh] w-full"  src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/421888299_18411919975007782_8440089516138604383_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zAPv2poGJZAAX9ZfdhN&_nc_ht=scontent-jnb2-1.xx&oh=00_AfDnhv4fumETsAOgmGW75YJKyC-r8Cb660XvR3N7ymXcIw&oe=65F09886" />
    </div>
  </section>
  <section class="relative bg-gradient-to-b to-amber-100 from-white dark:bg-gray-900">
    <img class="absolute inset-0 w-full h-full object-cover" :src="noise" alt="mockup">
    <div class="absolute   inset-0 bg-gradient-to-b to-violet-950 from-rose-800 opacity-90"></div>
    <div class="splide relative py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-32 splide--loop splide--ltr splide--draggable is-active is-initialized" id="histories" role="region" aria-roledescription="carousel">
      <div class="max-w-screen-xl mb-8">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white text-start aos-init aos-animate" data-aos="fade-up">
          — Trabalhos recentes </h2>
      </div>
      <div class="grid  md:grid-cols-2 xl:grid-cols-3 gap-5">
        <article v-for="i in [1,2,3]" :key="i" class="relative min-h-[280px] sm:min-h-[350px] lg:min-h-[420px] flex  items-end text-white shadow-2xl">
          <img class="absolute inset-0 w-full h-full object-cover object-top" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/431502057_18421716010007782_7191480508890363403_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_C2El33keD8AX-tGN3d&_nc_ht=scontent-jnb2-1.xx&oh=00_AfBjOJp6LpgAmUueqKLs9egvLzlL8IssaJwAvNOqEMjN-A&oe=65F093F2" alt="Relatório Semestral (Julho - Dezembro 2023)  - PROJETO PARTICIP’ACTION – INOVAÇÃO">
          <div class="absolute   inset-0 "></div>
          <div class="relative  p-6 w-full">
            <div class="group flex flex-row justify-start rounded-t w-full aos-init aos-animate" data-aos="fade-up">
              <div class="grid content-center mx-3 w-full space-y-1">
                <div class="flex justify-between w-fit bg-violet-900 p-1 px-2 capitalize text-xs text-white font-semibold">
                  <span>actividade</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

  </section>
</template>