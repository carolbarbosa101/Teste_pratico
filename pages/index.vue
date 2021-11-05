<template>
 <div>
   <hero/>
   <main class="container mx-auto">
     <nuxt/>
   </main>
 </div>
</template>

<script>
import hero from './components/layout/hero.vue'
export default {
  components: { hero },
 }
</script>
<style scoped></style>
