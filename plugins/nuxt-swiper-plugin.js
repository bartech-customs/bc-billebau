// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)

import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// import style
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Navigation, EffectCoverflow])
Vue.use(getAwesomeSwiper(SwiperClass))
