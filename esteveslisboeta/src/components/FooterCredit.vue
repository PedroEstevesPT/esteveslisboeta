<template>
  <p class="footer-credit">Website realizado por Esteves Lisboeta</p>
</template>

<style scoped>
.footer-credit {
  margin-top: 12px;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  opacity: 0.7;
  display: none; /* Hidden by default */
}

@media (max-width: 768px) {
  .footer-credit {
    display: block;
  }
}
</style>