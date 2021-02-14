<template>
  <div class="h-full mt-12 md:mt-32 footer">
    <div
      class="h-full w-full bg-gray-50 grid grid-cols-1 md:grid-cols-3 justify-items-center place-content-center"
    >
      <div class="text-center footer-item">
        <span class="material-icons text-5xl text-gray-800 mb-4 border-2 p-2">
          fmd_good
        </span>
        <p class="text-xl">Budapest, Magyarország</p>
      </div>
      <div class="text-center footer-item mt-12">
        <span class="material-icons text-5xl text-gray-800 mb-4 border-2 p-2">
          call
        </span>
        <p class="text-xl">+3630 555 55 55</p>
      </div>
      <div class="text-center footer-item mt-12">
        <span class="material-icons text-5xl text-gray-800 mb-4 border-2 p-2">
          mail
        </span>
        <p class="text-xl">billebaukft@gmail.com</p>
      </div>
    </div>
    <p class="text-center my-12">
      Bille Bau Hungária Kft., {{ new Date().getFullYear() }}
    </p>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  mounted() {
    gsap.from('.footer-item span', {
      scrollTrigger: {
        trigger: '.footer',

        toggleActions: 'play none none none',
      },
      y: 150,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: 'power1.inOut',
      stagger: {
        from: 'start',
        ease: 'power3.inOut',
        amount: 1.5,
      },
    })
  },
}
</script>

<style lang="scss" scoped></style>
