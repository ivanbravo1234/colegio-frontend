<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// No necesitas importar Inicio aquí porque el router se encargará de mostrarlo cuando la ruta sea '/'
</script>

<template>
  <Header />
  <router-view />  <!-- <-- Cambia esto -->
  <Footer />
</template>