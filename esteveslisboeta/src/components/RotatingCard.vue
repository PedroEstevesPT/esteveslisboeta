<template>
  <v-container class="d-flex justify-center align-center pa-0">
    <div class="card-container">
      <div class="card">
        <!-- Front Face -->
        <div class="card-face card-front">
          <v-img :src="frontImg" class="card-image" rounded="lg" :alt="frontAlt"></v-img>
        </div>
        <!-- Back Face -->
        <div class="card-face card-back">
          <v-img :src="backImg" class="card-image" rounded="lg" :alt="backAlt"></v-img>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  frontImg: { type: String, required: true },
  backImg: { type: String, required: true },
  frontAlt: { type: String, default: 'Front Image' },
  backAlt: { type: String, default: 'Back Image' }
})

onMounted(() => {
  function detectZoom() {
    // Detect zoom by comparing window.devicePixelRatio (works for most browsers)
    const zoom = window.devicePixelRatio || 1
    // Add 'zoomed' class if zoom is roughly 1.1 or 1.25 (110% or 125%)
    if (zoom >= 1.09 && zoom <= 1.15 || zoom >= 1.24 && zoom <= 1.26) {
      document.documentElement.classList.add('zoomed')
    } else {
      document.documentElement.classList.remove('zoomed')
    }
  }
  detectZoom()
  window.addEventListener('resize', detectZoom)
})
</script>

<style scoped>
.card-container {
  perspective: 1000px;
  max-width: 100%; 
  display: flex; 
  justify-content: center; 
}

.card {
  width: 50vw; 
  max-width: 800px; 
  height: auto;
  aspect-ratio: 1; 
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  will-change: transform;
  transform-origin: center center;
}

.card-container:hover .card {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
}

.card-front {
  background-color: white;
  transform: rotateY(0deg);
}

.card-back {
  background-color: white;
  transform: rotateY(180deg);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px !important;
}

.edge-browser .card-image {
  filter: brightness(1.1);
}

/* Media Queries */
@media (max-width: 600px) {
  .card {
    width: 100vw;
    height: auto;
  }
  /* no margin-top on mobile */
}

/* Desktop & laptop screens */
@media (min-width: 601px) {
  .card {
    height: auto;
  }
}

/* Desktop zoom margin - apply margin-top only if zoomed */
@media (min-width: 601px) {
  html.zoomed .card-container {
    margin-top: 0.5rem; /* small subtle spacing */
  }
}

/* Width-based sizing */
@media (min-width: 601px) and (max-width: 1020px) {
  .card {
    width: 50vw;
  }
}
@media (min-width: 1021px) and (max-width: 1399px) {
  .card {
    width: 34vw;
  }
}
@media (min-width: 1400px) and (max-width: 1920px) {
  .card {
    width: 31vw;
  }
}
@media (min-width: 1920px) and (max-width: 5024px) {
  .card {
    width: 35vw;
  }
}
</style>

<script>
  if (navigator.userAgent.indexOf("Edg") !== -1) {
    document.documentElement.classList.add('edge-browser');
  }
</script>