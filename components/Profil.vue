<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-6 h-full bg-gray-900">
      <!-- TOP -->
      <div
        class="hidden md:block first-column md:col-span-1 bg-gray-900 border-r border-gray-800 flex justify-start"
      >
        <h3 class="text-gray-800 rotate-text md:tracking-widest">profil</h3>
      </div>
      <div
        class="m-4 md:m-0 second-column md:col-span-2 bg-gray-900 md:border-r md:border-gray-800 rounded-t-md shadow transform-none md:transform md:-translate-y-24"
      >
        <h2
          class="text-gray-100 text-3xl uppercase bg-gray-900 mt-24 md:mt-16 md:pt-32 md:tracking-wider"
        >
          Modern környezetet <br />
          teremtünk
        </h2>
      </div>
      <div
        class="m-4 md:m-0 third-column md:col-span-3 text-gray-500 bg-gray-900 mt-6 md:pt-32 md:pb-20 md:border-r border-gray-800 transform-none md:transform md:translate-y-20"
      >
        <p class="w-1/2 mt-12">
          A Bille Bau Hungária Kft. egy tervező és kivitelező cég Budapesten,
          kiemelkedő minőséggel. Házfelújítás, tetőtéri átalakítás, házbővítés,
          alagsori átalakítások és építészeti szolgáltatások. Szolgáltatásainkat
          egész Magyarország és Csehország környékén kínáljuk. Teljesen képzett,
          professzionális építészekből és mérnökökből álló csapatunk több mint
          40 éves tapasztalattal rendelkezik.
        </p>
      </div>
      <!-- BOTTOM -->
      <div
        class="md:col-span-1 bg-gray-900 mb-12 border-r border-gray-800"
      ></div>

      <div
        class="md:col-span-4 bg-gray-900 md:pb-32 border-r border-gray-800 m-6 md:m-0"
      >
        <img
          class="w-full profil-image"
          src="~/assets/img/renovation-5.jpg"
          alt="Bille Bau Épület Felújítás"
        />
      </div>
      <div
        class="md:col-span-1 bg-gray-900 mb-20 border-r border-gray-800"
      ></div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {}
  },
  mounted() {
    gsap.to('.profil-image', {
      scrollTrigger: {
        trigger: '.profil-image',
        toggleActions: 'play none none none',
      },
      x: 0,
      opacity: 1,
      duration: 1,
    })
    gsap.to('.first-column h3', {
      scrollTrigger: {
        trigger: '.second-column',
        toggleActions: 'restart pause resume none',
        scrub: true,
      },
      y: 400,
      duration: 3,
    })
    gsap.to('.second-column', {
      scrollTrigger: {
        trigger: '.second-column',
        toggleActions: 'restart pause resume none',
        scrub: true,
      },
      y: 0,
      duration: 1,
    })
    gsap.from('.second-column h2', {
      scrollTrigger: {
        trigger: '.second-column h2',
        toggleActions: 'play none none none',
        once: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
    })
    gsap.to('.third-column', {
      scrollTrigger: {
        trigger: '.second-column',
        toggleActions: 'restart pause resume none',
        scrub: true,
      },
      y: 0,
      duration: 1,
    })
    gsap.from('.third-column p', {
      scrollTrigger: {
        trigger: '.third-column',
        toggleActions: 'play none none none',
      },
      y: 150,
      opacity: 0,
      duration: 1,
    })
  },
}
</script>

<style lang="scss" scoped>
.rotate-text {
  position: relative;
  writing-mode: vertical-rl;
  line-height: 4.5rem;
  font-size: 6rem;
  transform: rotate(180deg);
  text-transform: uppercase;
}
.profil-image {
  transform: translateX(50px);
  opacity: 0;
}
// .first-column {
//   transform: translateY(100px);
// }

// .second-column {
//   transform: translateY(-100px);
// }
</style>
