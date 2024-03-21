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
            <a href="#" class="block py-2 px-3 md:p-0 text-violet-800 rounded md:bg-transparent  font-black" aria-current="page">In&iacute;cio</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Sobre n&oacute;s</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Servi&ccedil;os</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent">Contactos</a>
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
            Agência de artistas
          </h3>
          <p class="font-['Lexend_Deca'] text-white/80  sm:text-sm lg:text-lg  py-6  text-start aos-init aos-animate" data-aos="fade-up">
            A Csv Agência, é uma empresa moçambicana, dedicada a gestão de carreiras de artistas, criada nos meados
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
  <section class="bg-[#1b1f24] py-16 lg:py-0 ">
    <div class="grid max-w-screen-xl  px-4 py-8 mx-auto lg:gap-8  lg:py-32 xl:grid-cols-12 gap-8 ">
      <div class=" flex flex-col mr-auto  xl:col-span-4 text-white  items-center xl:items-start mx-auto">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Recente video
        </h1>
        <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Roley - Diz-me (Video Oficial) ft Walter Nascimento
        </p>

        <div class="mb-5 text-lg">
          Escutar audio nas plataformas digitais :
        </div>
        <div class="inline-flex gap-5">
          <div>
            <svg class="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path></svg>
          </div>
          <a>
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.464 8.59606C10.7291 8.59606 10.944 10.7021 10.944 13.3001L10.9427 13.6511C10.9244 16.0851 10.717 18.0041 10.464 18.0041C10.2079 18.0041 9.99871 16.0392 9.98474 13.564L9.98408 13.2117C9.98889 10.6545 10.2019 8.59606 10.464 8.59606ZM8.8 9.55606C9.05863 9.55606 9.26949 11.3561 9.27962 13.6102V13.9499C9.26949 16.204 9.05863 18.0041 8.8 18.0041C8.5446 18.0041 8.33579 16.2488 8.32086 14.0343L8.3201 13.6949L8.32241 13.3544C8.34666 11.2214 8.55123 9.55606 8.8 9.55606ZM7.136 9.55606C7.3914 9.55606 7.60021 11.3114 7.61515 13.5259L7.6159 13.8652L7.61359 14.2057C7.58934 16.3387 7.38477 18.0041 7.136 18.0041C6.87737 18.0041 6.66651 16.204 6.65638 13.9499V13.6102C6.66651 11.3561 6.87737 9.55606 7.136 9.55606ZM5.472 10.1321C5.7371 10.1321 5.952 11.8943 5.952 14.0681L5.95028 14.4033C5.92954 16.4202 5.72333 18.0041 5.472 18.0041C5.21035 18.0041 4.99759 16.2873 4.99211 14.1525V13.9836C4.99759 11.8488 5.21035 10.1321 5.472 10.1321ZM3.808 11.8601C4.0731 11.8601 4.288 13.2354 4.288 14.9321L4.28738 15.0901C4.27452 16.7133 4.06481 18.0041 3.808 18.0041C3.5429 18.0041 3.328 16.6287 3.328 14.9321L3.32862 14.774C3.34148 13.1508 3.55119 11.8601 3.808 11.8601ZM14.592 7.06006C17.1727 7.06006 19.3129 8.94578 19.71 11.4145C20.0053 11.3295 20.3173 11.2841 20.64 11.2841C22.4957 11.2841 24 12.7884 24 14.6441C24 16.4786 22.5297 17.9698 20.7031 18.0035L20.64 18.0041H12.48C12.0558 18.0041 11.712 17.6602 11.712 17.2361V7.93296C12.5358 7.3816 13.5263 7.06006 14.592 7.06006ZM2.144 11.6681C2.4091 11.6681 2.624 13.0005 2.624 14.6441L2.62336 14.7996C2.6103 16.3709 2.40068 17.6201 2.144 17.6201C1.88311 17.6201 1.67084 16.3296 1.66416 14.7221L1.664 14.6441C1.664 13.0005 1.8789 11.6681 2.144 11.6681ZM0.48 12.6281C0.745097 12.6281 0.96 13.5736 0.96 14.7401L0.959091 14.8711C0.943709 15.9765 0.735093 16.8521 0.48 16.8521C0.214903 16.8521 0 15.9065 0 14.7401L0.000909213 14.609C0.0162906 13.5036 0.224907 12.6281 0.48 12.6281Z"></path></svg>
          </a>
          <a>
            <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="m24 6.124c0-.029.001-.063.001-.097 0-.743-.088-1.465-.253-2.156l.013.063c-.312-1.291-1.1-2.359-2.163-3.031l-.02-.012c-.536-.35-1.168-.604-1.847-.723l-.03-.004c-.463-.084-1.003-.138-1.553-.15h-.011c-.04 0-.083-.01-.124-.013h-12.025c-.152.01-.3.017-.455.026-.791.016-1.542.161-2.242.415l.049-.015c-1.306.501-2.327 1.495-2.853 2.748l-.012.033c-.17.409-.297.885-.36 1.38l-.003.028c-.051.343-.087.751-.1 1.165v.016c0 .032-.007.062-.01.093v12.224c.01.14.017.283.027.424.02.861.202 1.673.516 2.416l-.016-.043c.609 1.364 1.774 2.387 3.199 2.792l.035.009c.377.111.817.192 1.271.227l.022.001c.555.053 1.11.06 1.667.06h11.028c.554 0 1.099-.037 1.633-.107l-.063.007c.864-.096 1.645-.385 2.321-.823l-.021.013c.825-.539 1.47-1.29 1.867-2.176l.013-.032c.166-.383.295-.829.366-1.293l.004-.031c.084-.539.132-1.161.132-1.794 0-.086-.001-.171-.003-.256v.013q0-5.7 0-11.394zm-6.424 3.99v5.712c.001.025.001.054.001.083 0 .407-.09.794-.252 1.14l.007-.017c-.273.562-.771.979-1.373 1.137l-.015.003c-.316.094-.682.156-1.06.173h-.01c-.029.002-.062.002-.096.002-1.033 0-1.871-.838-1.871-1.871 0-.741.431-1.382 1.056-1.685l.011-.005c.293-.14.635-.252.991-.32l.027-.004c.378-.082.758-.153 1.134-.24.264-.045.468-.252.51-.513v-.003c.013-.057.02-.122.02-.189 0-.002 0-.003 0-.005q0-2.723 0-5.443c-.001-.066-.01-.13-.027-.19l.001.005c-.026-.134-.143-.235-.283-.235-.006 0-.012 0-.018.001h.001c-.178.013-.34.036-.499.07l.024-.004q-1.14.225-2.28.456l-3.7.748c-.016 0-.032.01-.048.013-.222.03-.392.219-.392.447 0 .015.001.03.002.045v-.002.13q0 3.9 0 7.801c.001.028.001.062.001.095 0 .408-.079.797-.224 1.152l.007-.021c-.264.614-.792 1.072-1.436 1.235l-.015.003c-.319.096-.687.158-1.067.172h-.008c-.031.002-.067.003-.104.003-.913 0-1.67-.665-1.815-1.536l-.001-.011c-.02-.102-.031-.218-.031-.338 0-.785.485-1.458 1.172-1.733l.013-.004c.315-.127.687-.234 1.072-.305l.036-.005c.287-.06.575-.116.86-.177.341-.05.6-.341.6-.693 0-.007 0-.015 0-.022v.001-.15q0-4.44 0-8.883c0-.002 0-.004 0-.007 0-.129.015-.254.044-.374l-.002.011c.066-.264.277-.466.542-.517l.004-.001c.255-.066.515-.112.774-.165.733-.15 1.466-.3 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.4.181-.042.407-.079.637-.104l.027-.002c.018-.002.04-.004.061-.004.27 0 .489.217.493.485.008.067.012.144.012.222v.001q0 2.865 0 5.732z"></path></svg> </a>
        </div>
      </div>
      <div></div>
      <div class=" lg:mt-0 xl:col-span-7 lg:block ">
        <iframe class="h-[60vh] lg:h-[50vh] !w-full rounded shadow-2xl" src="https://www.youtube.com/embed/F0OHOZZV_oY" title="Roley - Diz-me (Video Oficial) ft Walter Nascimento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <textarea rows="5" name="message" class=" w-full bg-[#e7e8e8] rounded border-0 text-gold-sand-1200 focus:ring-2 focus:ring-gold-sand-500" value="" placeholder="Escreva a sua mensagem aqui" required=""></textarea>
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
          Desenvolvido por <a href="https://inkomomutane.github.io/" class="text-violet-700">Nelson Mutane</a> &
          <a href="https://wa.link/xnbuic" class="text-violet-700">Américo Tureva</a>
        </span>
      </p>
    </div>
  </footer>
</template>