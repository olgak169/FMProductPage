<template>
  <main>
    <div class="container">
      <div class="container__product">
        <Image-comp @modalOpen="modalOpened = true"/>
        <div class="container__details">
          <span class="brand-name">{{ product.brand }}</span>
          <h1 class="product-name">{{ product.name }}</h1>
          <p class="product-description text-p">{{ product.description }}</p>
          <div class="container__price">
            <h2 class="price-now">${{ product.price }}<span>{{ product.discount }}%</span></h2>
            <h3 class="price-before">${{ product.price_before_discount }}</h3>
          </div>
          <Action-btns />
        </div>
      </div>
    </div>
  </main>
  <Modal-comp @modalClose="modalOpened = false" v-show="modalOpened"/>
</template>

<script>
import ImageComp from './ImageComp.vue'
import ActionBtns from './ActionBtns.vue'
import ModalComp from './ModalComp.vue'

export default {
  name: 'Home',
  data(){
    return {
      modalOpened: false,
    }
  },
  components: {
    ImageComp,
    ActionBtns,
    ModalComp,
  },
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  methods: {
    modalOpen() {
      this.modalOpened = true
    }
  }
}
</script>
