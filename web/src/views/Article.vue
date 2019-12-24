<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div @click="$router.push(`/`)">
        <img src="../assets/img/Back.png" width="13" />
      </div>
      <strong class="flex-1 pl-2" style="color:#53bbf4;">{{model.title}}</strong>
      <div class="text-grey fs-xs">{{model.createdAt | dateFormat}}</div>
    </div>

    <div v-html="model.body" class="px-3 body fs-lg"></div>

    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="fs-lg ml-2" style="color:#53bbf4;">相关资讯</strong>
      </div>
      <div>
        <router-link
          class="py-2 mt-2"
          :to="`/articles/${item._id}`"
          tag="div"
          v-for="item in model.related"
          :key="item._id"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    dateFormat(val) {
      return dayjs(val).format("YYYY/MM/DD");
    }
  },
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    //   此处监听页面中 id 的变化，若id改变，则重新获取数据
    id: "fetchArticle"
    //   id(){
    //       this.fetchArticle()
    //   }
  },
  methods: {
    async fetchArticle() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetchArticle();
  }
};
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }

    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
