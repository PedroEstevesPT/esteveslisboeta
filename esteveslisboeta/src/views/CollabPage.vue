<template>
    <div class="app-wrapper">
      <video autoplay muted loop id="background-video">
        <source src="https://res.cloudinary.com/dho8ay2wz/video/upload/v1746924667/color-grading-bom_wkaf6c.mp4" type="video/mp4">
        
      </video>
  
      <Hamburguer />
  
      <div class="page-container" >
        <!-- Vuetify Card Centered -->
        <v-card class="collab-card" elevation="10" rounded="xl">
          <v-card-title class="text-h5 font-weight-bold text-center">
            Collab
          </v-card-title>
          <v-card-text class="text-center">
            Para colaborar em canções, tocar guitarra ou baixo, manda-me uma mensagem no Instagram!
          </v-card-text>

          <v-card-actions class="justify-center">
            <a
  href="https://www.instagram.com/esteves.lisboeta/"
  target="_blank"
  class="toolbar-item svg-wrapper"
>
  <img
    src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723412632/instagram_ujtrtk.png"
    alt="Instagram"
    class="toolbar-icon"
  />
</a>
          </v-card-actions>


        </v-card>
      </div>
    </div>
  </template>
  
  <script setup>
  import TopNav from '../components/TopNav.vue'
  import RotatingCard from '../components/RotatingCard.vue'
  import Hamburguer from '../components/Hamburguer.vue'
  import Socials from '../components/Socials.vue'
  
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>
  
  <!-- SCOPED STYLES -->
  <style scoped>

  .app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

  * {
  box-sizing: border-box;
}



  html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden; /* allow vertical scroll if needed, block horizontal */
}

  /* Background video */
  #background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }
  
  /* Page container centering content */
  .page-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
}
  /* Card styling */
  .collab-card {
    max-width: 500px;
    width: 90vw;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    padding: 24px;
    text-align: center;
    z-index: 2;
  }
  
  /* Responsive tweaks */
  @media (max-width: 768px) {
    .collab-card {
      padding: 20px;
      font-size: 0.95rem;
    }
  }

  .toolbar-icon {
  width: 32px;
  height: 32px;
  transition: transform 0.2s ease;
}

.toolbar-icon:hover {
  transform: scale(1.1);
}

.toolbar-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
  </style>
  
