<template>
    <div class="nav-wrapper">
<!--      BURGER BUTTON-->
      <div class="burger-btn" v-show="!isOpen" @click.prevent="openNavigation">
        <svg width="25px" height="25px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z" fill="#000000"/><path d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z" fill="#000000"/><path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z" fill="#000000"/></svg>
      </div>

<!--      CLOSE BURGER BUTTON-->
      <div class="burger-btn" v-show="isOpen" @click.prevent="closeNavigation">
        <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/></svg>
      </div>

<!--      ZARA LOGO-->
      <div style="font-size: 40px;">
        LOGO
      </div>

      <div class="cart-wrapper">
        <div>
          <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -3119.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M180.846448,2977 L167.153448,2977 C166.544448,2977 166.077448,2976.461 166.163448,2975.859 L167.306448,2967.859 C167.376448,2967.366 167.798448,2967 168.296448,2967 L168.999448,2967 L168.999448,2969 C168.999448,2969.552 169.447448,2970 169.999448,2970 C170.552448,2970 170.999448,2969.552 170.999448,2969 L170.999448,2967 L176.999448,2967 L176.999448,2969 C176.999448,2969.552 177.447448,2970 177.999448,2970 C178.552448,2970 178.999448,2969.552 178.999448,2969 L178.999448,2967 L179.703448,2967 C180.201448,2967 180.623448,2967.366 180.693448,2967.859 L181.836448,2975.859 C181.922448,2976.461 181.455448,2977 180.846448,2977 L180.846448,2977 Z M170.999448,2964 C170.999448,2962.346 172.345448,2961 173.999448,2961 C175.654448,2961 176.999448,2962 176.999448,2964 L176.999448,2965 L170.999448,2965 L170.999448,2964 Z M183.979448,2976.717 L182.550448,2966.717 C182.410448,2965.732 181.566448,2965 180.570448,2965 L178.999448,2965 L178.999448,2964 C178.999448,2961 176.756448,2959 173.999448,2959 C171.243448,2959 168.999448,2961.243 168.999448,2964 L168.999448,2965 L167.734448,2965 C166.739448,2965 165.589448,2965.732 165.448448,2966.717 L164.020448,2976.717 C163.848448,2977.922 164.783448,2979 166.000448,2979 L181.999448,2979 C183.216448,2979 184.151448,2977.922 183.979448,2976.717 L183.979448,2976.717 Z" id="shopping_cart-[#1135]">

                  </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <p class="cart-search">Поиск</p>
      </div>
    </div>

  <div class="menu-wrapper" v-show="isOpen">
    <ul class="menu-list">
      <li class="menu-list-item">девочки | 6 - 14 лет</li>
      <li class="menu-list-item">мальчики | 6 - 14 лет</li>
      <li class="menu-list-item">малыши девочки | 9 месяцев - 6 лет</li>
      <li class="menu-list-item">малыши мальчики | 9 месяцев - 6 лет</li>
      <li class="menu-list-item">аксессуары | обувь</li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const isOpen = ref(false);

const openNavigation = () => {
  isOpen.value = true;
  console.log('nav is opened');
}

const closeNavigation = () => {
  isOpen.value = false;
  console.log('nav is closed');
}

</script>