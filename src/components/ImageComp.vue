<template>
  <div class="container__images" :class="{modal: isModal}">
    <div class="slider-btns">
        <button class="btn btn-control" @click="slideChange('prev')" aria-label="previous image">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <button class="btn btn-control" @click="slideChange('next')" aria-label="next image">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
    </div>
    <div class="image_main" @click="$emit('modalOpen')" tabindex="0">
        <img :src="`./images/${imgL[imgIndex]}`" alt="product image">
    </div>
    <div class="image_thumbs">
        <div class="thumbnail" 
        v-for="(img, index) in imgS" 
        :key="index" 
        @click="imgIndex = index" 
        :class="{active: imgIndex === index}">
            <img :src="`./images/${img}`" alt="product image">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ImageComp',
    props: ['isModal'],
    data() {
        return {
            imgIndex: 0,
        }
    },
    computed: {
        imgL() {
            return this.$store.state.product.imgs.large
        },
        imgS() {
            return this.$store.state.product.imgs.thumbnails
        }
    },
    methods: {
        slideChange(direction) {
            if (direction === 'next') {
                if (this.imgIndex < this.imgL.length - 1) {
                    this.imgIndex++
                } else {
                    this.imgIndex = 0
                }
            } else if (direction === 'prev'){
                if (this.imgIndex > 0) {
                    this.imgIndex--
                } else {
                    this.imgIndex = this.imgL.length - 1
                }
            }
        }
    }
}
</script>