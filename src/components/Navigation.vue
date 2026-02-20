<template>
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <router-link to="/" className="logo">MRJ Chits</router-link>
      </div>
      <button 
        className="navbar-toggle" 
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul :className="['nav-menu', { active: isMenuOpen }]">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About Us</router-link></li>
        <li><router-link to="/schemes" @click="closeMenu">Chit Schemes</router-link></li>
        <li><router-link to="/team" @click="closeMenu">Our Team</router-link></li>
        <li><router-link to="/payments" @click="closeMenu">Payments</router-link></li>
        <li><router-link to="/gallery" @click="closeMenu">Gallery</router-link></li>
        <li><router-link to="/testimonials" @click="closeMenu">Testimonials</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
@import './Navigation.css';
</style>
