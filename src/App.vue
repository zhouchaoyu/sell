<template>
  <div id="app">
    <v-header :itemList="itemList"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header';

  export default {
    name: 'app',
    data () {
      return {
        itemList: []
      };
    },
    mounted () {
      this.getAjax();
    },
    methods: {
      getAjax: function () {
        var successCallback = (response) => {
          console.log('访问seller借口成功！！');
          this.itemList = response.body.data;
          console.log(response.body.data);
        };
        var errorCallback = (response) => {
          console.log('访问seller借口失败！！');
        };
        this.$http.get('api/seller').then(successCallback, errorCallback);
      }
    },
    components: {
      'v-header': header
    }
  };
</script>

<style>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }

  a.active {
    color: cyan;
    background-color:rgb(240, 20, 20);
  }
</style>
