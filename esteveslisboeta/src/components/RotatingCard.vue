<template>
  <v-container class="d-flex justify-center align-center pa-0">
    <div class="card-container">
      <div class="card">
        <!-- Front Face -->
        <div class="card-face card-front">
          <v-img :src="frontImg" class="card-image" :alt="frontAlt"></v-img>
        </div>
        <!-- Back Face -->
        <div class="card-face card-back">
          <v-img :src="backImg" class="card-image" :alt="backAlt"></v-img>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  frontImg: {
    type: String,
    required: true,
  },
  backImg: {
    type: String,
    required: true,
  },
  frontAlt: {
    type: String,
    default: 'Front Image',
  },
  backAlt: {
    type: String,
    default: 'Back Image',
  }
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
}

.edge-browser .card-image {
  filter: brightness(1.1); /* Adjust for Edge */
}

/* Media Queries */
@media (max-width: 600px) {
  .card {
    width: 80vw; 
    height: auto; 
  }
}

@media (min-width: 601px) and (max-width: 1020px) {
  .card {
    width: 50vw; 
    height: auto; 
  }
}

@media (min-width: 1021px) and (max-width: 1399px) {
  .card {
    width: 34vw; 
    height: auto; 
  }
}


@media (min-width: 1400px) and (max-width: 1920px) {
  .card {
    width: 31vw; 
    height: auto; 
  }
}

@media (min-width: 1920px) and (max-width: 5024px) {
  .card {
    width: 35vw; 
    height: auto; 
  }
}
</style>

<script>
  if (navigator.userAgent.indexOf("Edg") !== -1) {
    document.documentElement.classList.add('edge-browser');
  }
</script>