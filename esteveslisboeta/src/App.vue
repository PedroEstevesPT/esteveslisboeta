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
/* Ensure the html and body don't scroll */
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%; /* Make sure body and html take full height */
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
  justify-content: center; /* Center content vertically */
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

/* Container to center the rotating card and toolbar */
.rotating-card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Ensures the card is above the video */
  margin-bottom: 20px; /* Space between card and toolbar */
}

/* Toolbar styles */
.toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Space between icons */
  z-index: 1; /* Ensures the toolbar is above the video */
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

/* Media Query for Tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  .rotating-card-container {
    transform: scale(1.2); /* Scale up the rotating card */
  }

  .toolbar {
    margin-bottom: 20px; /* Adjust margin to keep consistent spacing */
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
    margin-bottom: 40px; /* Increase space between card and toolbar */
  }

  .toolbar {
    margin-top: 0; /* Remove extra margin */
    margin-bottom: 40px; /* Add margin at the bottom */
  }
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {
  /* Reduce the gap between the card and the toolbar on mobile */
  .rotating-card-container {
    height: calc(100vh - 100px); /* Adjust height to reduce distance */
  }

  .toolbar {
    gap: 10px; /* Reduce space between icons */
    margin-top: -90px; /* Move toolbar closer to the card */
  }

  .toolbar-icon {
    width: 45px; /* Adjust icon size for smaller screens */
    height: 45px;
  }
}
</style>