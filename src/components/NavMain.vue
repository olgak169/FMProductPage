<template>
  <header>
      <div class="container container__header">
          <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="menu toggle">
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" v-if="menuOpen"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg" v-else><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
          </button>
          <div class="logo"><img :src="'./images/logo.svg'" alt="logo"></div>
          <nav :class="{ open: menuOpen }">
              <ul class="menu-list">
                  <li class="menu-item" v-for="(item,index) in this.$store.state.menuList.items" :key="index"><a href="#" class="menu-link">{{ item }}</a></li>
              </ul>
          </nav>
          <div class="nav-btns">
              <Cart-comp />
              <button class="btn-avatar"><img :src="'./images/image-avatar.png'" alt="avatar"></button>
          </div>
      </div>
  </header>
</template>

<script>
import CartComp from './CartComp.vue'
export default {
  components: { CartComp },
    name: 'NavMain',
    data(){
        return {
            menuOpen: false,
        }
    }
}
</script>