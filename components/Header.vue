<template>
  <div
    class="md:h-screen w-full grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center mt-24 md:mt-0"
  >
    <div class="pt-12 md:pt-0 header-text-section flex flex-col items-center">
      <h1
        class="m-1 p-2 text-gray-800 text-5xl font-extrabold uppercase xl:tracking-wider"
      >
        <span class="md:text-6xl leading-3">Épületépítés </span>
        <br />
        <span class="text-green-600">&amp; </span>
        Lakásfelújítási Projectek
      </h1>
      <p
        class="mb-6 md:mb-0 text-2xl text-left mx-16 pl-8 border-l border-green-600"
      >
        Átgondolt építési folyamatunk nyugalmat biztosít a tervezéstől az
        építkezésig. <br />
        Egyesítjük a prémium design-t, az alapanyagokat és az építkezést,
        <span class="italic tracking-wider">
          hogy mindent egyben felújítsunk.</span
        >
      </p>
    </div>
    <div class="w-full h-full header-image-section">
      <HeaderSlider />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {}
  },
  mounted() {
    const tl = gsap.timeline({ duration: 1 })
    tl.from('.header-text-section h1', {
      scaleX: 0,
      transformOrigin: 'right center',
    })
    tl.from('.header-text-section p', { y: 20, opacity: 0 })
    // tl.from("#lower", { duration: 0.75, y: -30 }, "text");
    // tl.to("#line, #upper, #lower", { duration: 1, opacity: 0, ease:"none" }, "+=2");
  },
}
</script>

<style lang="scss" scoped>
// .header-text-section,
// .header-image-section {
//   opacity: 0;
//   transform: translateY(-150px);
// }

@media (max-width: 768px) {
  .header-image-section {
    height: 50vh;
  }
}
</style>
