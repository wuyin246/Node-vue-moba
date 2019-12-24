<template>
  <div>
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

    <!-- card:热门视频 -->
    <div class="card p-3 bg-white mt-3">
      <div class="card-header d-flex ai-center pb-3">
        <i class="iconfont" :class="`icon-menu`"></i>
        <div class="fs-llg flex-1 px-2">热门视频</div>
        <div class="nav fs-lg" style="justify-content:space-around;">
          <div
            class="nav-item ml-3"
            v-for="(item,index) in videoCats"
            :key="index"
            :class="{'active':activeIndex==index}"
            @click="activeIndex=index"
          >{{item.label}}</div>
        </div>
      </div>
      <div class="card-body pt-3">
        <div class="d-flex border-bottom py-3">
          <img src="../assets/img/video-img.jpg" style="width:35%;" alt />

          <div class="ml-3">
            <div class="flex-1 fs-md pb-4" style="line-height:1.2rem;">1.王者荣耀：哪吒开大过程中被东皇控制，还能继续飞吗？</div>
            <div class="fs-sm text-grey pt-2">
              <span>3.3万</span>
              <span>00:32</span>
            </div>
          </div>
        </div>

        <div class="d-flex border-bottom py-3" style>
          <span class="text-ellipsis flex-1">2.王者荣耀：达摩如何切后排？技能命中人后，普通攻击能加速还能回血！</span>
          <span class="fs-xs pl-4">2.5万</span>
        </div>

        <div class="d-flex border-bottom py-3" style>
          <span class="text-ellipsis flex-1">3.王者荣耀：这4个英雄可以边回城边蓄力？第二位我猜你没见过！</span>
          <span class="fs-xs pl-4">2.3万</span>
        </div>
      </div>
    </div>
    <!-- end of card:热门视频 -->
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
      videoCats: [{ label: "日" }, { label: "周" }, { label: "月" }],
      activeIndex: 0,

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
  created() {}
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