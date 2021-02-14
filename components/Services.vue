<template>
  <div class="pt-2">
    <h2
      class="uppercase text-5xl md:tracking-wider font-extrabold text-center text-gray-800 md:mt-24 md:mb-8"
    >
      Szolgáltatások
    </h2>
    <div id="services" class="h-full grid md:grid-cols-3 container m-auto">
      <div
        class="service-profile p-6 border-l w-full py-8"
        v-for="(service, index) in services"
        :key="index"
      >
        <span class="text-xl bg-green-400 font-bold p-1">{{ service.id }}</span>
        <h2 class="uppercase text-xl md:tracking-wider my-4">
          {{ service.title }}
        </h2>
        <p class="mb-6">{{ service.description }}</p>
        <img :src="service.img" :alt="service.alt" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import service1 from '~/assets/img/service-1.jpg'
import service2 from '~/assets/img/profile-1.jpg'
import service3 from '~/assets/img/profile-2.jpg'
import service4 from '~/assets/img/profile-3.jpg'
import service5 from '~/assets/img/profile-4.jpg'
import service6 from '~/assets/img/profile-5.jpg'

export default {
  data() {
    return {
      services: [
        {
          id: '01',
          title: 'lakásfelújítás',
          description:
            'Felújítási munkálatok profi szakemberekkel, gyorsan, szakszerűen',
          img: service1,
          alt: 'Lakásfelújítási munkák',
        },
        {
          id: '02',
          title: 'generálkivitelezés',
          description:
            'A teljeskörű építkezési és a felújítási project menedzselése és megvalósítása az ügyfél kérésnek megfelelően',
          img: service2,
          alt: 'Lakásfelújítás, Generálkivitelezés',
        },
        {
          id: '03',
          title: 'Külső-belső bontás',
          description:
            'Bontási művelet elvégzése, sitt elszállítása. Akár járda, tetőbontás, hidegburkolat eltávolítása, kipucoljuk kívúl-belűl',
          img: service3,
          alt: 'Külső-belső bontás, Lakásfelújítás, Generálkivitelezés',
        },
        {
          id: '05',
          title: 'Víz, gáz, fűtésszerelés',
          description:
            'Szaniterek bontásam kiépítése, víz és csatorna vezetékek ellenőrzése és cseréje',
          img: service5,
          alt: '  Víz, gáz, fűtésszerelés',
        },
        {
          id: '04',
          title: 'épületfelújítás',
          description:
            'Raktárak, csarnokok, gyárépületek, üzemek felújítása. Generálkivitelezés, gépek és rendszereikhez szükséges kiépítések végrehajtása.',
          img: service4,
          alt: 'épületfelújítás, Generálkivitelezés',
        },

        {
          id: '06',
          title: 'házépítési szolgáltatások',
          description: 'Beleértve az egyedi projektek terveit is.',
          img: service6,
          alt: 'házépítési szolgáltatások',
        },
      ],
    }
  },
  mounted() {
    gsap.from('.service-profile', {
      scrollTrigger: {
        trigger: '.service-profile',
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
      y: 150,
      opacity: 0,
      duration: 1,
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
