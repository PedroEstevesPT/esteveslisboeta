<template>

<video autoplay muted loop id="background-video">
      <source src="https://res.cloudinary.com/dho8ay2wz/video/upload/v1687996229/pedrofortunatoesteves-site/gifs/jeronimos_holtei.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

<div class="page-container">
    <!-- Background Video -->

    <!-- Rotating Card Component -->
    <div class="rotating-card-container">
      <RotatingCard
        frontImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723380290/esteveslisboeta-site/kjhbioetmkx5tu9zoxls.png"
        backImg="https://res.cloudinary.com/dho8ay2wz/image/upload/v1723380291/esteveslisboeta-site/ataumibfsl8wu3yvvhb3.png"
        frontAlt="Front of Card"
        backAlt="Back of Card"
      />
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
  height: 100vh;
  z-index: 1; /* Ensures the card is above the video */
}
</style>