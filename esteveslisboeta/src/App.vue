<template>
  <video autoplay muted loop id="background-video">
    <source src="https://res.cloudinary.com/dho8ay2wz/video/upload/v1687996229/pedrofortunatoesteves-site/gifs/jeronimos_holtei.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>

  <div class="page-container">
    <!-- Rotating Card Component -->
    <div class="rotating-card-container">
      <RotatingCard

        class="animate__animated animate__fadeIn"
        frontImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1724005660/esteveslisboeta-site/nzzdvqu043viblg5xih1.jpg"
        backImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1724005665/esteveslisboeta-site/kdajhtnq9w8r2yok8hjb.jpg"
        frontAlt="Front of Card"
        backAlt="Back of Card"
      />
    </div>
    
    <!-- Toolbar -->
    <div class="toolbar animate__animated animate__fadeIn">
      <a href="https://bandcamp.com" target="_blank" class="toolbar-item svg-wrapper">
        <img src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723412632/instagram_ujtrtk.png" alt="Bandcamp" class="toolbar-icon">
      </a>
      <a href="https://bandcamp.com" target="_blank" class="toolbar-item svg-wrapper">
        <img src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723408294/spotify-green_cbhdq6.svg" alt="Bandcamp" class="toolbar-icon">
      </a>
      <a href="https://instagram.com" target="_blank" class="toolbar-item svg-wrapper">
        <img src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723584042/esteveslisboeta-site/bandcamp-blue_szs36d.svg" alt="Bandcamp" class="toolbar-icon">
      </a>
      <a href="https://instagram.com" target="_blank" class="toolbar-item svg-wrapper">
        <img src="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723402451/esteveslisboeta-site/youtube-red_qeizlc.svg" alt="Instagram" class="toolbar-icon">
      </a>
    </div>
  </div>

  <div style="display: flex; justify-content: center; text-align:center;">
    <div class="container animate__animated animate__fadeIn"  style="width: 85vw; margin: 0 auto;  display: inline-block; margin-bottom: 1%;">
      <div class="horizontal-scrolling-wrapper">
        <div class="horizontal-scrolling-items">
          <div class="horizontal-scrolling-items__item">
            &nbsp &nbsp &nbsp <b>SABES QUE ADORO SAIR CONTIGO</b> é o 1º EP de Esteves Lisboeta. 5 canções originais arranjadas, cantadas e tocadas por Esteves Lisboeta. 
            Pedro Joaquim Borges produziu a bateria em "Joana (Chamei O Teu Nome)", kick em "Sabes Que Adoro Sair Contigo", co-produziu a percussão na "Inesquecível Inês",
            masterizou e misturou o EP (a excepção é a "Canção da Meretriz", misturada por Esteves Lisboeta).
            Gabriel Silva fez a preparação de mistura na "Inesquecível Inês".
            El Appleton escreveu as primeiras duas quadras do poema "Numa Travessa Perdida de Lisboa".
            Carlota Leite tirou as fotografias da capa e contra-capa e a edição e o lettering é da Paulina Wykowska.
          </div>
          <div class="horizontal-scrolling-items__item">
            &nbsp &nbsp &nbsp <b>SABES QUE ADORO SAIR CONTIGO</b> é o 1º EP de Esteves Lisboeta. 5 canções originais arranjadas, cantadas e tocadas por Esteves Lisboeta. 
            Pedro Joaquim Borges produziu a bateria em "Joana (Chamei O Teu Nome)", kick em "Sabes Que Adoro Sair Contigo", co-produziu a percussão na "Inesquecível Inês",
            masterizou e misturou o EP (a excepção é a "Canção da Meretriz", misturada por Esteves Lisboeta).
            Gabriel Silva fez a preparação de mistura na "Inesquecível Inês".
            El Appleton escreveu as primeiras duas quadras do poema "Numa Travessa Perdida de Lisboa".
            Carlota Leite tirou as fotografias da capa e contra-capa e a edição e o lettering é da Paulina Wykowska.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RotatingCard from './components/RotatingCard.vue'

</script>

<style>


@font-face {
    font-family: GraublauWeb;
    src: url("src/font/PeaceBegin.ttf") format("opentype");
}



/* Ensure the html and body don't scroll */
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Disable scrolling */
  height: 100%; /* Ensure full height */
  touch-action: none; /* Prevent touch scrolling */

}

/* Page container to hold the video and card */
.page-container {
  position: relative;
  width: 100%;
  height: 90vh; /* Full viewport height */
  overflow: hidden; /* Prevent scrolling */
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center content vertically */
  margin-top: 2%;
}

/* Background video that covers the entire viewport */
#background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover; /* Ensures the video covers the entire area */
  z-index: -1; /* Keeps the video behind the content */
}

.rotating-card img {
  filter: brightness(1); /* Adjust brightness as needed */
}

/* Container to center the rotating card and toolbar */
.rotating-card-container {
  display: flex;
  filter: none; /* Ensure no filter is applied */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Ensures the card is above the video */
  margin-bottom: 10px; /* Space between card and toolbar */
}

/* Toolbar styles */
.toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Space between icons */
  z-index: 1; /* Ensures the toolbar is above the video */
  margin-top: 10px; /* Space between card and toolbar */
}

/* Toolbar item styles */
.toolbar-item {
  display: inline-block;
}

/* Toolbar icon styles */
.toolbar-icon {
  width: 60px; /* Adjust icon size */
  height: 60px;
  object-fit: contain; /* Preserve aspect ratio */
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out; /* Smoother and more gradual transition */
}

/* Wrapper for SVG icons to apply hover effect */
.svg-wrapper img {
  filter: brightness(0) saturate(100%) invert(36%) sepia(100%) saturate(1901%) hue-rotate(179deg) brightness(95%) contrast(88%);
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out; /* Smoother and more gradual transition */
}

.svg-wrapper:hover img {
  filter: none; /* Revert to the original colors */
  transform: scale(1.2); /* Increase size by 20% on hover */
}



/* Animation for infinite horizontal scrolling */
@keyframes infiniteScroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}


/* Wrapper for horizontal scrolling with fade effect */
.horizontal-scrolling-wrapper {
  position: relative; /* Ensure the fade effect is positioned correctly */
  display: flex;
  flex-direction: row;
  width: 100%; /* Full width to ensure smooth scrolling */
  overflow: hidden; /* Hide overflow to keep fade effect visible only at edges */
}

/* Fading effect overlay for horizontal scrolling */
.horizontal-scrolling-wrapper::before,
.horizontal-scrolling-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 20px; /* Adjust the width of the fade effect */
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)); /* Adjust color and transparency */
  pointer-events: none; /* Ensure it does not interfere with user interactions */
}

.horizontal-scrolling-wrapper::before {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
}

.horizontal-scrolling-wrapper::after {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
}

.container {
  overflow: hidden;
  position: relative;
  padding-bottom: 90px;
  display: flex;
  justify-content: center;
  touch-action: none; /* Disable touch scrolling */
}

/* Scrolling items */
.horizontal-scrolling-items {
  background-color: white;
  opacity: 90%;
  color: rgb(15, 156, 221); /* Change text color */
  /*font-family: GraublauWeb; */
  display: flex;
  white-space: nowrap;
  animation: continuousScroll 70s linear infinite;
}

/* Each scrolling item */
.horizontal-scrolling-items__item {
  padding: 0 50px; /* Adjust padding if needed */
  font-size: 35px;
  white-space: nowrap;
  display: inline-block;
}

/* Continuous scrolling animation */
@keyframes continuousScroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {

.horizontal-scrolling-items__item {
  font-size: 20px;
}

.page-container{
   padding-top: 20px;
}

.rotating-card img {
  filter: brightness(1); /* Adjust brightness as needed */
}

.rotating-card-container {
  filter: none; /* Ensure no filter is applied */
  height: auto; /* Allow container to grow as needed */
  margin-bottom: 20px; /* Adjust space between card and toolbar */
}

.toolbar {
  margin-top: 20px; /* Ensure toolbar is closer to the card */
  gap: 18px; /* Reduce space between icons */
}

.toolbar-icon {
  width: 48px; /* Adjust icon size for smaller screens */
  height: 48px;
}
}

/* Media Query for Tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  .rotating-card-container {
    transform: scale(1.2); /* Scale up the rotating card */
  }

  .horizontal-scrolling-items__item {
    font-size: 20px;
  }

  .page-container{
   margin-top: 80px;
  }


  .toolbar {
    margin-bottom: 20px; /* Adjust margin to keep consistent spacing */
    margin-top: 50px;
  }

  .toolbar-icon {
    width: 55px; /* Slightly reduce icon size for better balance */
    height: 55px;
  }
}

/* Media Query for Laptops */
@media (min-width: 1025px) and (max-width: 1440px) {
  .page-container {
    justify-content: center; /* Ensure content is centered vertically */
  }

  .rotating-card-container {
    filter: none; /* Ensure no filter is applied */
    margin-bottom: 40px; /* Increase space between card and toolbar */
  }

  .toolbar {
    margin-bottom: 40px; /* Add margin at the bottom */
  }
}


</style>