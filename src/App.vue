<script setup lang="ts">
</script>

<template>

 <main class="bg-gray-800">
    <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> -->
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            
            
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
           </button> 
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="text-white rounded-md px-3 py-2 text-sm font-medium">Inicio</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sobre</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contactos</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Servi&ccedilos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu state. -->
  <section class="text-white">
    <h1 class="text-gray-200 flex justify-center capitalize text-4xl">
      M&uacutesica &Eacute a lingua do mundo
    </h1>
    
    <div class="text-white flex m-5 p-5 justify-around">
      <p>A missao da csv e dar ao artista a oportunidade de levar a sua musica para tao longe quanto queres que ela va</p>
      <div class="ratings m-5 flex justify-around">
        <div class="plays border px-3 py-6 rounded m-5">
          +1000 plays
        </div>
        <div class="downloads border px-3 py-6 rounded m-5">
          +7500 downloads
        </div>
      </div>
      <div class="hero bg-gray-800 m-5">
        imgs
      </div>
    </div>
  </section>

  <footer class="mb-5 bg-gray-800">
    <hr class="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between ml-7 mr-7">
          <span class="text-sm text-white sm:text-center dark:text-gray-400 mb-7">© 2024 <a href="#" class="hover:underline">Csv Ag&ecircncia™</a>. Todos Os Direitos Reservados.
          </span>
          
          <div class="flex mt-4 sm:justify-center sm:mt-0 mb-7">
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              
              
          </div>
      </div>
</footer>
 </main>
</template>