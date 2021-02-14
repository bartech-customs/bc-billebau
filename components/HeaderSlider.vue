<template>
  <div class="w-full h-full md:h-screen">
    <div
      class="swiper h-full relative"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper w-full h-full">
        <div
          class="swiper-slide w-full h-full"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div
            class="bg-right-top bg-no-repeat bg-cover w-full h-full flex flex-col justify-end items-center"
            :style="{ backgroundImage: `url(${slide.img})` }"
          >
            <h2
              class="text-5xl uppercase md:tracking-wider p-2 bg-green-600 text-center w-full"
            >
              {{ slide.title }}
            </h2>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 z-30">
        <div class="button-prev">
          <span
            class="material-icons text-5xl cursor-pointer bg-gray-900 text-green-600 p-2"
          >
            west
          </span>
        </div>
        <div class="button-next">
          <span class="material-icons text-5xl cursor-pointer bg-green-600 p-2">
            east
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sliderImageOne from '~/assets/img/main-5.jpg'
import sliderImageTwo from '~/assets/img/main-2.jpg'
export default {
  data() {
    return {
      slides: [
        {
          title: 'Felújítás',
          description:
            'Búcsúzzon el a költségtúllépésektől, a határidők elmulasztásától. Elkötelezett projektmenedzsment az elejétől a végéig,bármilyen kérdéssel hívhat minket',
          img: sliderImageOne,
          link: '',
        },
        {
          title: 'Festés',
          description:
            'Búcsúzzon el a költségtúllépésektől, a határidők elmulasztásától. Elkötelezett projektmenedzsment az elejétől a végéig,bármilyen kérdéssel hívhat minket',
          img: sliderImageTwo,
          link: '',
        },
      ],
      swiperOptions: {
        effect: 'coverflow',
        loop: true,
        slidesPerView: '1',
        centeredSlides: true,
        spaceBetween: 30,
        speed: 1000,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      },
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
  },
}
</script>

<style lang="scss" scoped></style>
