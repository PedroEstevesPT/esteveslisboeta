<template>
  <div>

    <video autoplay muted loop id="background-video">
          <source src="https://res.cloudinary.com/dho8ay2wz/video/upload/v1747009772/color-grading4_hlq08h.mp4" type="video/mp4">
    </video>
  
    <!-- Replaced Hamburger Menu with Component -->
    <Hamburguer />
    <div class="wrapper">

    <div class="page-container" >  
      <div class="main-content"  > <!-- NEW WRAPPER -->
        <br>

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


        <!-- Horizontal Scrolling Content -->
        <div class="container animate__animated animate__fadeIn" >
          <div class="horizontal-scrolling-wrapper">
            <div class="horizontal-scrolling-items" >
              <div class="horizontal-scrolling-items__item">
                &nbsp &nbsp &nbsp <b>SABES QUE ADORO SAIR CONTIGO</b> é o 1º EP de Esteves Lisboeta. 5 canções originais arranjadas, cantadas e tocadas por Esteves Lisboeta. 
                Pedro Joaquim Borges produziu a bateria em "Joana (Chamei O Teu Nome)", kick em "Sabes Que Adoro Sair Contigo", co-produziu a percussão na "Inesquecível Inês",
                masterizou e misturou o EP (a excepção é a "Canção da Meretriz", misturada por Esteves Lisboeta).
                Gabriel Silva fez a preparação de mistura na "Inesquecível Inês".
                El Appleton escreveu as primeiras duas quadras do poema "Numa Travessa Perdida de Lisboa".
                Carlota Leite tirou as fotografias da capa e contra-capa e a edição e o lettering é da Paulina.
              </div>
              <div class="horizontal-scrolling-items__item">
                &nbsp &nbsp &nbsp <b>SABES QUE ADORO SAIR CONTIGO</b> é o 1º EP de Esteves Lisboeta. 5 canções originais arranjadas, cantadas e tocadas por Esteves Lisboeta. 
                Pedro Joaquim Borges produziu a bateria em "Joana (Chamei O Teu Nome)", kick em "Sabes Que Adoro Sair Contigo", co-produziu a percussão na "Inesquecível Inês",
                masterizou e misturou o EP (a excepção é a "Canção da Meretriz", misturada por Esteves Lisboeta).
                Gabriel Silva fez a preparação de mistura na "Inesquecível Inês".
                El Appleton escreveu as primeiras duas quadras do poema "Numa Travessa Perdida de Lisboa".
                Carlota Leite tirou as fotografias da capa e contra-capa e a edição e o lettering é da Paulina.
              </div>
            </div>
          </div>
        </div>
        
      </div> 
      <br>

      </div>

    </div>

  </div>
  </template>

  
  <script setup>
    import TopNav from '../components/TopNav.vue'

    import RotatingCard from '../components/RotatingCard.vue'
    import Hamburguer from '../components/Hamburguer.vue'

    import { ref } from 'vue'

    const isMenuOpen = ref(false)  // Define the state to track menu visibility

    const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value  // Toggle the state when hamburger button is clicked
    }

  </script>
  
  <style scoped>
 
  @media (max-width: 768px) {
  .mobile-socials-bottom {
    position: fixed;
    bottom: 10px;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
}

  /* Transparent Top Toolbar for Desktop */
.top-toolbar {
  background-color: transparent !important;
  box-shadow: none;
  z-index: 10;
  padding: 0 8px;
  height: 48px; /* reduced height */
  display: flex;
  align-items: center;
  justify-content: space-between;
}




  @font-face {
    color: rgb(15, 156, 221);
    font-family: GraublauWeb;
    src: url("src/font/PeaceBegin.ttf") format("opentype");
}


html, body, #app {
  font-family: 'GraublauWeb', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden; /* still block scroll if needed */
  touch-action: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Page container to hold the video and card */
/* Fix height of main content area */
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 1200px; /* Optional: limit to avoid stretch on huge screens */
  margin: 0 auto; /* Center horizontally */
  height: 90vh;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
/* Wrap card and carousel together */
.center-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; /* space between card and carousel */
}


.socials-container {
  margin-top: auto; /* Push to bottom */
  display: flex;
  justify-content: center;
  padding-bottom: 10px; /* Optional spacing */
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

.socials-fixed-top-right {
  position: absolute;
  top: 6px; /* slightly tighter top */
  right: 16px;
  z-index: 20;
  display: flex;
  align-items: center; /* vertically align icons */
  gap: 6px; /* tighter spacing */
  max-height: 36px; /* limit height if necessary */
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
  background: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)); /* Adjust color and transparency */
  pointer-events: none; /* Ensure it does not interfere with user interactions */
}

.horizontal-scrolling-wrapper::before {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
}

.horizontal-scrolling-wrapper::after {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
}

.container {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  touch-action: none; /* Disable touch scrolling */
}

/* Scrolling items */
.horizontal-scrolling-items {
  background-color: white;
  opacity: 70%;
  color: rgb(15, 156, 221); /* Change text color */
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

  .container {
    width: 85vw; /* Already set inline, but just to be sure it's responsive */
  }

  .horizontal-scrolling-items__item {
    font-size: 20px;
  }

  .page-container{
    padding-top: 0;
  }

  .rotating-card img {
    filter: brightness(1); /* Adjust brightness as needed */
  }

  .rotating-card-container {
    filter: none; /* Ensure no filter is applied */
    height: auto; /* Allow container to grow as needed */
    margin-bottom: 20px; /* Adjust space between card and toolbar */
    width: 85vw; /* Match the carousel width */



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


/* -------------------------------------------------- */


.desktop-only {
  display: flex;
}
.mobile-only {
  display: none;
}

/* Responsive visibility */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: block;
    position: relative;
  }


  .menu-link {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
  }

  .menu-link-container {
    display: flex;
    gap: 40px;
    margin-top: 20px;
    z-index: 2;
}




.menu-vuetify-button {
  font-size: 14px;
  padding: 0 8px;
  min-height: 36px;
}

.menu-vuetify-button:hover {
  background-color: #f5f5f5 !important;
  border-color: #0f9cdd !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

  .menu-link-container {
  display: flex;
  align-items: center;
  gap: 20px; /* spacing between links and bar */
  margin-top: 20px; /* optional: space from above */
}

  

  .menu-link:hover {
    color: #0077aa;
  }
}

.menu-separator {
  font-size: 28px; /* match the links */
  color: #333;
  padding: 0 10px;
}

  </style>