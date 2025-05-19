<template>
  <div>
    <TopNav />

    <div class="content-container">
        <router-view />
    </div>

    <!-- Show only on mobile and when user is at bottom -->
    <div
      v-if="showSocials"
      class="mobile-socials-wrapper"
    >
      <Socials />
      
      <br><br><br>
    </div>


    <!-- Desktop-only footer -->
    <p class="footer-credit-desktop">Website realizado por Pedro Esteves</p>


  </div>
  
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import TopNav from './components/TopNav.vue'
import Socials from './components/Socials.vue'

const showSocials = ref(false)
const route = useRoute()

const handleScroll = () => {
  if (route.name === 'Discography') {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight
    showSocials.value = scrollY + windowHeight >= fullHeight - 10
  } else {
    showSocials.value = true
  }
}

const addScrollListener = async () => {
  window.addEventListener('scroll', handleScroll)
  await nextTick()             // Wait for DOM to fully render
  requestAnimationFrame(() => {
    handleScroll()             // Call it after DOM is painted
  })
}

const removeScrollListener = () => {
  window.removeEventListener('scroll', handleScroll)
}

onMounted(async () => {
  if (route.name === 'Discography') {
    await addScrollListener()
  } else {
    showSocials.value = true
  }
})

onUnmounted(() => {
  removeScrollListener()
})

// Watch for route changes
watch(() => route.name, async (newName) => {
  removeScrollListener()

  if (newName === 'Discography') {
    await addScrollListener()
  } else {
    showSocials.value = true
  }
})
</script>


<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

#app {
  overflow-x: hidden;
}

.app-container {
  position: relative;
  min-height: 100vh;
}



.mobile-only {
  display: block;
}

.mobile-socials-bottom {
  position: fixed;
  bottom: 15px; /* moved slightly up */
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: transparent;
  pointer-events: auto;
  height: 0;
  overflow: visible;
  padding: 0;
}

@media (min-width: 769px) {
  .mobile-only {
    display: none !important;
  }
}

/* Hide on desktop, show on mobile */
.mobile-socials-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: none; /* hidden by default (desktop) */
  justify-content: center;
  background: transparent;
  pointer-events: auto;
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
  .mobile-socials-wrapper {
    display: flex;
  }
}

.footer-credit-desktop {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  opacity: 0.7;
  margin: 0;
  padding: 8px 0;
  background-color: transparent;
  pointer-events: none;
  display: none;
  z-index: 99; /* Just below the socials */
}

@media (min-width: 769px) {
  .footer-credit-desktop {
    display: block;
  }
}

</style>