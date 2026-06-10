<template>
  <div class="bg-[#f8fafc] border-b border-[#eef2f6]">
    <div class="max-w-[1200px] mx-auto px-6 pt-10 pb-12 max-md:pt-8 max-md:pb-10">

      <!-- Breadcrumb -->
      <nav class="flex items-center flex-wrap gap-1.5 text-[0.78rem] text-[#4a6177] mb-8 max-md:mb-6">
        <router-link to="/" class="hover:text-[#0a3144] transition-colors duration-150 no-underline">Inicio</router-link>
        <template v-for="(crumb, i) in breadcrumb" :key="i">
          <span class="text-[#c8d4de] select-none">/</span>
          <router-link
            v-if="crumb.to"
            :to="crumb.to"
            class="hover:text-[#0a3144] transition-colors duration-150 no-underline"
          >{{ crumb.label }}</router-link>
          <span v-else class="text-[#0a3144] font-medium">{{ crumb.label }}</span>
        </template>
      </nav>

      <!-- Badge + título + descripción -->
      <span class="inline-block bg-[#fbc02d] text-[#1e2a3e] font-bold text-[0.7rem] tracking-[2px] py-[0.4rem] px-[0.9rem] mb-5 rounded-sm">{{ badge }}</span>
      <h1 class="text-[2.8rem] max-md:text-[2rem] max-[480px]:text-[1.7rem] font-semibold text-[#0a3144] m-0 mb-3 leading-[1.1]">{{ title }}</h1>
      <p v-if="description" class="text-[#4a6177] m-0 text-[1rem] leading-relaxed max-w-[600px]">{{ description }}</p>

    </div>
  </div>
</template>

<script setup>
defineProps({
  badge:       { type: String, required: true },
  title:       { type: String, required: true },
  description: { type: String, default: '' },
  breadcrumb:  { type: Array, default: () => [] },
})
</script>
