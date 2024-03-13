<script setup lang="ts">
import hero from './assets/SLIDE_03.jpg'
import noise from './assets/noise_50.png'
import post from './assets/post.jpg'
import logo from '../public/logo.png'
import k50 from './assets/50k.jpg'
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
  <section class="relative p-4 lg:p-16 lg:pt-8">
    <img class="absolute inset-0 w-full h-full object-cover" :src="noise" alt="mockup">
    <div class="absolute   inset-0 bg-[#1b1f24] opacity-95"></div>
    <div class=" relative p-8 px-4 mx-auto max-w-screen-2xl sm:p-16 lg:px-32 " id="histories" role="region" aria-roledescription="carousel">
      <div class="max-w-screen-xl mb-16">
        <h3 class="text-4xl font-['Lexend_Deca'] font-black  text-white"> Trabalhos recentes  </h3>
      </div>
      <div class="grid  sm:grid-cols-2 lg:grid-cols-3 content-start  gap-8">
        <div class="  rounded-b flex flex-col justify-center hover:scale-105 duration-500 hover:bg-[#1b1f24]  group" v-for="i in [ k50 ,post,k50 ,post,k50 ,post]" :key="i">
          <img :src="i" alt="Image 1" class="object-cover object-center min-h-[380px] max-h-[400px] rounded group-hover:rounded-b-none   ">
          <div class="mb-6">
            <h3 class="text-2xl font-['Lexend_Deca'] font-normal  my-4 text-white text-center ">
             Lançamento do novo album
            </h3>
            <time class="text-xs text-white/80 text-center block"> 12 de Março de 2024</time>
          </div>
        </div>
        <!-- Add more image divs as needed -->
      </div>
    </div>

  </section>
  <section class="contact-bottom  pt-12 px-8 bg-[#405962] py-24">
    <div class="container mx-auto">
      <h3 class="text-4xl font-['Lexend_Deca'] font-black my-8 text-white"> Entrar em contacto </h3>
      <div class="grid   xl:grid-cols-3 gap-5 flex-wrap-reverse">
        <div class="">
          <div class="contactus-form">

            <form method="post" action="" class="verify-gcaptcha">
              <input type="hidden" name="_token" value="KXLkYvcUpwgXFyx65zZehMNyiYLWcjur56xEWv22">                        <div class="grid space-y-6">
              <div class="col-sm-12">
                <input name="name" type="text" class="
                                w-full bg-[#e7e8e8] rounded border-0 text-gold-sand-1200 focus:ring-2 focus:ring-gold-sand-500
                                " placeholder="Nome/Empresa*" >
              </div>
              <div class="col-sm-12">
                <input type="email" name="email" class=" w-full bg-[#e7e8e8] rounded border-0 text-gold-sand-1200 focus:ring-2 focus:ring-gold-sand-500"
                       placeholder="Endereço de email*" value=" " >
              </div>
              <div class="col-sm-12">
                <input type="text" name="subject" placeholder="Assunto" value="" class=" w-full bg-[#e7e8e8] rounded border-0 text-gold-sand-1200 focus:ring-2 focus:ring-gold-sand-500">
              </div>

              <div class="col-sm-12">
                <textarea rows="5" name="message" class=" w-full bg-[#e7e8e8] rounded border-0 text-gold-sand-1200 focus:ring-2 focus:ring-gold-sand-500" value="" placeholder="Write Your Message" required=""></textarea>
              </div>
              <div class="col-sm-12">
                <button type="submit" class="bg-violet-950  p-2 w-full rounded font-semibold font-['Lexend_Deca']
                                 text-white shadow-lg ">
                 Enviar sua mensagem
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
        <div class="xl:col-span-2 grid">
          <iframe class="h-full w-full row-span-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.07969371067!2d32.57059417596441!3d-25.965426577224473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69b02e4edf3cd%3A0xa2f1ebd739e4b240!2sAv.%2024%20de%20Julho%2C%20Maputo!5e0!3m2!1sen!2smz!4v1710279855055!5m2!1sen!2smz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  <footer class="mx-auto w-full py-6  md:py-10  sm:px-6 lg:px-16 bg-[#e7e8e8] font-['Lexend_Deca']">
    <div class="text-center sm:flex sm:justify-center sm:text-left px-6 md:px-0">
      <p class="mt-4 text-sm text-center   sm:order-first sm:mt-0 mr-4">
        Copyright © Csv Agência
        2024.
        <br>
        <span class="text-xs ">
          Desenvolvido por <a href="https://inkomomutane.github.io/" class="text-violet-700">Nelson  Mutane</a> &
          <a href="https://wa.link/xnbuic" class="text-violet-700">Américo tureva</a>
        </span>
      </p>
    </div>
  </footer>
</template>