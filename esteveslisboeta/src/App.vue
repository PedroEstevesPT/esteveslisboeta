<template>
  <video autoplay muted loop id="background-video">
    <source src="https://res.cloudinary.com/dho8ay2wz/video/upload/v1687996229/pedrofortunatoesteves-site/gifs/jeronimos_holtei.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>

  <div class="page-container">
    <!-- Rotating Card Component -->
    <div class="rotating-card-container">
      <RotatingCard
        frontImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723380290/esteveslisboeta-site/kjhbioetmkx5tu9zoxls.png"
        backImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723380291/esteveslisboeta-site/ataumibfsl8wu3yvvhb3.png"
        frontAlt="Front of Card"
        backAlt="Back of Card"
      />
    </div>
    
    <!-- Toolbar -->
    <div class="toolbar">
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
</template>


<script setup>
import RotatingCard from './components/RotatingCard.vue'
</script>

<style>
/* Ensure the body doesn't scroll */
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
}

/* Page container to hold the video and card */
.page-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center items horizontally */
}

/* Background video that covers the entire viewport */
#background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire area */
  z-index: -1; /* Keeps the video behind the content */
}

/* Container to center the rotating card */
.rotating-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); /* Adjust height to leave space for the toolbar */
  z-index: 1; /* Ensures the card is above the video */
}

/* Toolbar styles */
.toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Space between icons */
  height: 60px; /* Ensure toolbar has height */
  z-index: 1; /* Ensures the toolbar is above the video */
}

/* Toolbar item styles */
.toolbar-item {
  display: inline-block;
}

/* Toolbar icon styles */
.toolbar-icon {
  width: 50px; /* Adjust icon size */
  height: 50px;
  object-fit: contain; /* Preserve aspect ratio */
  transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out; /* Smoother and more gradual transition */
}

/* Wrapper for SVG icons to apply hover effect */
.svg-wrapper img {
  filter: brightness(0) saturate(100%) invert(36%) sepia(100%) saturate(1901%) hue-rotate(179deg) brightness(95%) contrast(88%);
  transition: filter 0.3s ease;
}

.svg-wrapper:hover img {
  filter: none; /* Revert to the original colors */
  transform: scale(1.2); /* Increase size by 20% on hover */

}

</style>