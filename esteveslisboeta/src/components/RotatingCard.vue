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
  max-width: 100%; /* Ensures it doesn't overflow the container */
  display: flex; /* Ensure container uses flexbox */
  justify-content: center; /* Center card horizontally */
}

.card {
  width: 50vw; /* Adjust size for larger screens */
  max-width: 800px; /* Ensures a max width on larger screens */
  height: auto;
  aspect-ratio: 1; /* Maintains a square aspect ratio */
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

/* Media Queries */
@media (max-width: 600px) {
  .card {
    width: 80vw; /* Adjusts card size on smaller screens */
    height: auto; /* Ensures it scales properly on mobile */
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .card {
    width: 30vw; /* Adjust size for tablets */
    height: auto; /* Ensures it scales properly */
  }
}


@media (min-width: 1024px) and (max-width: 1920px) {
  .card {
    width: 31vw; /* Adjust size for tablets */
    height: auto; /* Ensures it scales properly */
  }
}

@media (min-width: 1920px) and (max-width: 5024px) {
  .card {
    width: 35vw; /* Adjust size for tablets */
    height: auto; /* Ensures it scales properly */
  }
}
</style>