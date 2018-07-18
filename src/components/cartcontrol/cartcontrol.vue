<template>
    <div class="cartcontrol">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0"></div>
      <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script>
    export default {
      props: {
        food: {
          type: Object
        }
      },
      created () {
      },
      methods: {
        addCart () {
          if (!this.food.count) {

          }
        }
      }
    };
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/icon.css";
  .cartcontrol{
    .cart-decrease{
      display: inline-block;
      padding: 6px
      line-height: 24px;
      font-size: 24px;
    }
    .cart-count{
      display: inline-block;
    }
    .cart-add{
      display: inline-block;
      z-index: 9999;
    }
  }
</style>
