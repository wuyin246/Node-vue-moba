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
      <div
        class="swiper-pagination pagination-home text-right px-3"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper -->

    <m-pull-refresh @refresh="refresh">
      <div class="content">
        <p class="text">基础用法</p>
        刷新次数：{{ num }}
      </div>
    </m-pull-refresh>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    dateFormat(val) {
      return dayjs(val).format('MM/DD')
    },
  },
  data() {
    return {
      num: 0,
      newsCats: [],
      heroCats: [],
      isNavSHow: true,
      swiperOption: {
        pagination: {
          el: '.pagination-home',
        },
      },
    }
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        this.num++
        done() //我就想说这里，把状态归0
      }, 500)
    },

    show() {
      this.isNavSHow = !this.isNavSHow
    },
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHerosCats() {
      const res = await this.$http.get('heros/list')
      this.heroCats = res.data
    },
  },
  created() {
    this.fetchNewsCats()
    this.fetchHerosCats()
  },
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.content {
  padding: 0 15px;
  .text {
    font-size: 14px;
    color: rgba(69, 90, 100, 0.6);
  }
}

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: 'info');
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
