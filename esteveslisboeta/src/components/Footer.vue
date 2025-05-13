<template>
    <footer class="indie-footer" >
      <div class="footer-links">
        <router-link to="/" class="footer-link">Início</router-link>
        <span class="divider">.</span>
        <router-link to="/discography" class="footer-link">Discografia</router-link>
        <span class="divider">.</span>
        <router-link to="/collab" class="footer-link">Collab</router-link>
      </div>
     <!-- <p class="footer-text">Website feito por Esteves · Lisboeta, {{ new Date().getFullYear() }}</p> -->
    </footer>
  </template>
  
  <style scoped>
.indie-footer {
  text-align: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #333;
  border-top: 1px solid #ccc;
}

/* Hide footer on screens smaller than 768px */
@media (max-width: 767px) {
  .indie-footer {
    display: none;
  }
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
}

.footer-link {
  font-size: 1.2rem;
  padding: 0.3rem 0.5rem;
  text-decoration: none;
  color: #0f9cdd;
  font-weight: bold;
}

.footer-link:hover {
  text-decoration: underline;
}

.divider {
  color: #aaa;
}

.footer-text {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
}
</style>