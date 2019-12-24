<template>
  <div>
    赛事中心
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/img/11.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/img/12.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/img/13.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    dateFormat(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      newsCats: [],
      heroCats: [],
      isNavSHow: true,
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  },
  methods: {
    show() {
      this.isNavSHow = !this.isNavSHow;
    },
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHerosCats() {
      const res = await this.$http.get("heros/list");
      this.heroCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHerosCats();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>