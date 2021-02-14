<template>
  <div class="navigation">
    <nav class="main-nav realtive">
      <div class="logo">
        <nuxt-link :to="{ path: '/', hash: '#header' }">
          <span class="logo__text">Bille Bau</span></nuxt-link
        >
      </div>
      <ul class="nav-links">
        <li>
          <nuxt-link :to="{ path: '/', hash: '#profil' }">Profil</nuxt-link>

          <!-- <a href="#header-section">Profil</a> -->
        </li>
        <li>
          <nuxt-link :to="{ path: '/', hash: '#services' }"
            >Szolgáltatások</nuxt-link
          >
          <!-- <a href="#services">Szolgáltatások</a> -->
        </li>
        <li>
          <nuxt-link :to="{ path: '/', hash: '#contact' }">Kapcsolat</nuxt-link>
          <!-- <a href="#contact">Kapcsolat</a> -->
        </li>
      </ul>
      <button @click="isOpen = !isOpen" class="burger border p-2">MENU</button>
      <transition
        enter-active-class="transition ease-out duration-100 transform"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-100 transform"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="isOpen"
          class="absolute top-0 left-0 z-20 p-2 h-full w-full rounded-md shadow-2xl"
        >
          <div class="rounded-md bg-white min-h-full w-full p-4 shadow-2xl">
            <button @click="isOpen = !isOpen" class="block p-2 ml-auto">
              <span class="material-icons"> close </span>
            </button>
            <!-- Snipped  -->
            <div>
              <ul class="flex flex-col">
                <li
                  class="cursor-pointer text-xl my-2 p-2 border-b-2 hover:bg-gray-300"
                  @click="isOpen = !isOpen"
                >
                  <nuxt-link :to="{ path: '/', hash: '#header' }"
                    >Home</nuxt-link
                  >
                </li>
                <li
                  class="cursor-pointer text-xl my-2 p-2 border-b-2 hover:bg-gray-300"
                  @click="isOpen = !isOpen"
                >
                  <nuxt-link :to="{ path: '/', hash: '#profil' }"
                    >Profil</nuxt-link
                  >
                </li>
                <li
                  @click="isOpen = !isOpen"
                  class="cursor-pointer text-xl my-2 p-2 border-b-2 hover:bg-gray-300"
                >
                  <nuxt-link :to="{ path: '/', hash: '#services' }"
                    >Szolgáltatások</nuxt-link
                  >
                </li>
                <li
                  @click="isOpen = !isOpen"
                  class="cursor-pointer text-xl my-2 p-2 border-b-2 hover:bg-gray-300"
                >
                  <nuxt-link :to="{ path: '/', hash: '#contact' }"
                    >Kapcsolat</nuxt-link
                  >
                </li>
              </ul>
              <img
                class="h-full m-auto my-4"
                src="~/assets/img/logo.jpg"
                alt="Bille Bau Hungária Kft logo, lakásfelújítás"
              />
              <button @click="isOpen = !isOpen" class="block p-2 m-auto">
                <span class="material-icons"> close </span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return { isOpen: false }
  },
  mounted() {
    const mainNavLinks = gsap.utils.toArray('.main-nav a')
    // const mainNavLinksRev = gsap.utils.toArray('.main-nav a').reverse()

    mainNavLinks.forEach((link) => {
      link.addEventListener('mouseleave', (e) => {
        // add class
        link.classList.add('animate-out')
      })
      link.ontransitionend = function () {
        //remove class
        link.classList.remove('animate-out')
      }
    })

    let scrollpos = window.scrollY
    const header = document.querySelector('.main-nav')

    const header_height = header.offsetHeight
    const add_class_on_scroll = () => header.classList.add('has-scrolled')
    const remove_class_on_scroll = () => header.classList.remove('has-scrolled')
    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY

      if (scrollpos >= header_height) {
        add_class_on_scroll()
      } else {
        remove_class_on_scroll()
      }
    })
  },
}
</script>

<style lang="scss">
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  //   background-color: rgb(255, 255, 255);
  padding: 0.7rem 1rem;
  transition-duration: 1.5s;
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    li {
      margin-right: 3vw;
      list-style-type: none;
      display: flex;
      align-items: center;
      a {
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2vw;
        position: relative;
        overflow: hidden;
        padding-bottom: 5px;
        font-size: 1.2rem;
        &:after {
          display: block;
          content: '';
          height: 2px;
          background-color: black;
          position: absolute;
          bottom: 0;
          width: 100%;
          transform: translateX(-101%);
        }
        &:hover::after {
          transition: transform 0.3s ease-in;
          transform: translateX(0);
        }
        &.animate-out::after {
          transition: transform 0.3s ease-in;
          transform: translateX(100%);
        }
      }
    }
  }
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.logo__text {
  font-size: 2.32rem;
  letter-spacing: 7px;
  transition: opacity 0.3s linear;
  opacity: 1;
  text-transform: uppercase;
  padding-bottom: 5px;
}

.burger {
  display: none;
}
.has-scrolled {
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  .logo__text {
    font-size: 1.7rem;
    letter-spacing: 5px;
  }
}
@media (max-width: 768px) {
  .nav-links {
    display: none !important;
  }
  .burger {
    display: block;
  }
}
</style>
