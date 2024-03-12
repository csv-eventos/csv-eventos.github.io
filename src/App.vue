<script setup lang="ts">
import hero from './assets/SLIDE_03.jpg'
import noise from './assets/noise_50.png'
import post from './assets/post.jpg'
import logo from '../public/logo.png'
</script>

<template>

  <nav class="bg-[#e7e8e8] text-gray-900 sticky top-0 z-10">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="logo" class="h-8" alt="CSV Logo" />
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded
        text-sm px-4 py-2 text-center ">
          Marque o seu evento
        </button>

        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
          <li>
            <a href="#" class="block py-2 px-3 md:p-0 text-violet-800 rounded md:bg-transparent  font-black" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Services</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="relative bg-gradient-to-b to-amber-100 from-[#1b1f24] h-auto flex justify-start items-center py-16">
    <img class="absolute  inset-0 w-full h-full object-cover" :src="hero" alt="mockup">
    <div class="absolute   inset-0 bg-gradient-to-tr from-[#1b1f24] via-[#405962] to-[#55747b] opacity-70"></div>
    <div class="grid xl:grid-cols-1 relative ">
      <div class=" py-8 px-4  max-w-screen-xl sm:py-16 lg:px-32 ">
        <div class=" px-6 xl:px-0 mb-8 flex flex-col  justify-start ">

          <div class=" p-1">
            <svg class="font-black text-9xl" >
              <text x="50%" y="70%"  text-anchor="middle"  >
                CSV
              </text>
            </svg>
          </div>
          <h3 class="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-['Lexend_Deca']  text-white   font-black">
            Agência de Eventos
          </h3>
          <p class="font-['Lexend_Deca'] text-white/80  sm:text-sm lg:text-lg  py-6  text-start aos-init aos-animate" data-aos="fade-up">
            A Csv Agência, é uma empresa moçambicana, dedicada a gestão de carreiras de artistas, criada nos mead
          </p>
          <button  class="text-white border border-white w-fit rounded-full font-black text-base p-3 px-8 hover:bg-black/40 hover:scale-105 duration-500 ">
            Saiba Mais</button>
        </div>
      </div>

      <div class="hidden p-8">
        <iframe class="aspect-[4/3] w-full  !rounded-2xl shadow-3xl shadow-[#405962]" src="https://www.youtube.com/embed/BQGk1jdWqRk"
                title="Csv Agência - Tata (Video Oficial)" frameborder="0"
                allowfullscreen>

        </iframe>

      </div>
    </div>
  </section>
  <section class="relative p-4 lg:p-16">
    <img class="absolute inset-0 w-full h-full object-cover" :src="noise" alt="mockup">
    <div class="absolute   inset-0 bg-[#1b1f24] opacity-95"></div>
    <div class=" relative p-8 px-4 mx-auto max-w-screen-xl sm:p-16 lg:px-32 " id="histories" role="region" aria-roledescription="carousel">
      <div class="max-w-screen-xl mb-8">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white text-start aos-init aos-animate" data-aos="fade-up">
          — Trabalhos recentes </h2>
      </div>
      <div class="grid  grid-cols-2 lg:grid-cols-4  gap-4">
        <div class="aspect-w-4 aspect-h-5 rounded-[2.5rem]  " v-for="i in [ 1,2,3,4,5,6,7,8]" :key="i">
          <img :src="post" alt="Image 1" class="object-cover w-full h-full rounded-xl ">
        </div>
        <!-- Add more image divs as needed -->
      </div>
    </div>

  </section>
  <footer class="mx-auto w-full py-6  md:py-10  sm:px-6 lg:px-16 bg-[#e7e8e8]">
    <div class="text-center sm:flex sm:justify-center sm:text-left px-6 md:px-0">
      <p class="mt-4 text-sm   sm:order-first sm:mt-0 mr-4">
        Copyright © Csv Agência
        2024.
        <span> </span>
      </p>
    </div>
  </footer>
</template>