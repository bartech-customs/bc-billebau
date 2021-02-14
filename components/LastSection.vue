<template>
  <div id="contact" class="w-full h-full mt-32 grid md:grid-cols-7">
    <div
      class="slide-column md:col-span-1 bg-gray-900 transform-none md:transform md:-translate-y-20"
    ></div>
    <div class="relative w-full md:col-span-4 bg-gray-900">
      <div class="absolute letter-logo">
        <span
          class="bg-gray-900 material-icons text-green-600 text-6xl rounded-full p-8"
        >
          mark_as_unread
        </span>
      </div>
      <img
        class="w-full my-12 relative"
        src="~/assets/img/footer.jpg"
        alt="Renoválás, felújítás "
      />
    </div>
    <div
      class="contact md:col-span-2 bg-gray-900 flex flex-col h-full justify-center items-center px-12"
    >
      <p class="text-left text-gray-400">
        A Bille Bau megkönnyíti otthona felújítását. Mindent kezelünk az
        elejétől a végéig.
        <br />
        Beszéljen egyik felújítási szakemberünkel. Ha szeretné megtudni, hogy a
        Bille Bau hogyan tud Önnek kiváló minőségű, hatékony otthoni felújítást
        nyújtani, vegye fel a kapcsolatot még ma.
      </p>
      <button
        class="uppercase mt-4 mb-8 bg-green-600 py-4 px-6 font-bold hover:bg-green-500"
      >
        <a href="#">Levél küldése</a>
      </button>
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
    gsap.to('.slide-column ', {
      scrollTrigger: {
        trigger: '.slide-column ',
        toggleActions: 'restart pause resume none',
        scrub: true,
      },
      y: 0,
      duration: 1,
    })
    gsap.from('.text-left', {
      scrollTrigger: {
        trigger: '.text-left',
        toggleActions: 'play none none none',
      },
      y: 100,
      opacity: 0,
      duration: 1,
    })
    gsap.from('.contact button', {
      scrollTrigger: {
        trigger: '.text-left',
        toggleActions: 'play none none none',
      },
      y: 150,
      opacity: 0,
      duration: 1.5,
    })
  },
}
</script>

<style lang="scss" scoped>
.letter-logo {
  top: 40%;
  left: -6%;
  z-index: 10;
}

@media (max-width: 768px) {
  .letter-logo {
    top: 60%;
    left: -6%;
    z-index: 10;
  }
}
</style>
