<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/img/01.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/img/02.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/img/03.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 pt-3 text-center text-dark-1">
      <div class="d-flex flex-wrap" v-show="isNavSHow">
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-story"></i>
          <div class="py-2">故事站</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-shop"></i>
          <div class="py-2">周边商城</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-exper"></i>
          <div class="py-2">体验服</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-freshhand"></i>
          <div class="py-2">新人专区</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-honer"></i>
          <div class="py-2">荣耀传承</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-tongren"></i>
          <div class="py-2">同人社区</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-camp"></i>
          <div class="py-2">王者营地</div>
        </div>
        <div class="nav-item mb-3 pt-2">
          <i class="sprite sprite-public"></i>
          <div class="py-2">公众号</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1" :class="{isshow:!isNavSHow}"></i>
        <span @click="show">{{isNavShowText}}</span>
      </div>
    </div>
    <!-- end of nav-icons -->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          :to="`/articles/${items._id}`"
          tag="div"
          class="py-2 fs-llg d-flex py-3"
          v-for="(items,index) in category.newsList"
          :key="index"
        >
          <span class="text-grey-1">[{{items.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{items.title}}</span>
          <span class="text-grey-1">{{items.createdAt | dateFormat}}</span>
        </router-link>
        <!-- <div
          class="py-2 fs-llg d-flex py-3"
          v-for="(items,index) in category.newsList"
          :key="index"
        >
          <span class="text-grey-1">[{{items.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{items.title}}</span>
          <span class="text-grey-1">{{items.createdAt | dateFormat}}</span>
        </div>-->
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <router-link
            tag="div"
            :to="`/heros/${items._id}`"
            class="p-2 text-center"
            style="width:20%;"
            v-for="(items,index) in category.heroList"
            :key="index"
          >
            <img :src="items.avatar" class="w-100" alt />
            <div>{{items.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-list-card icon="video" title="精彩视频" :categories="videoCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <router-link
            tag="div"
            :to="`/videoes/${items._id}`"
            class="p-2"
            style="width:50%;"
            v-for="(items,index) in category.videoList"
            :key="index"
          >
            <img :src="items.previewimg" class="w-100" style="border-radius:3px;" alt />
            <div class="text-overflow">{{items.title}}</div>
            <div class="d-flex fs-xs">
              <span class="flex-1 text-grey">
                <img src="../assets/img/img_icon_video.png" class="img-video" alt />
                {{items.playnum / 1000}}万
              </span>
              <span class="text-grey">{{items.createdAt|dateFormat}}</span>
            </div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-list-card icon="gonglve" title="图文攻略" :categories="strategyCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <router-link
            tag="div"
            :to="`/videoes/${items._id}`"
            class="p-2 d-flex"
            style="width:100%;align-items:center;"
            v-for="(items,index) in category.strategyList"
            :key="index"
          >
            <img
              :src="items.previewimg"
              class
              style="border-radius:2px;width:33%;height:5.5rem;"
              alt
            />
            <div
              style="list-style:none;margin-left:5px;height:5.5rem;display:flex;flex-direction:column;justify-content:space-between;"
            >
              <span class="text-ellipsis fs-llg" style="width:14.6154rem;">{{items.title}}</span>
              <span class="fs-sm text-grey-1">{{items.content}}</span>
              <span class="fs-xs text-grey">{{items.createdAt|dateFormat}}</span>
            </div>
            <div class="text-overflow"></div>
            <div class="d-flex fs-xs">
              <span class="flex-1 text-grey"></span>
              <span class="text-grey"></span>
            </div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <el-tooltip placement="top" content="返回顶部">
      <!-- 组件使用 -->
      <BackToTop
        transitionName="fade"
        :customStyle="myBackToTopStyle"
        :visibilityHeight="300"
        :backPosition="0"
      ></BackToTop>
    </el-tooltip>
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
      myBackToTopStyle: {
        right: "20px",
        bottom: "150px",
        width: "40px",
        height: "40px",
        "border-radius": "20px",
        "line-height": "40px",
        background: "#fff"
      },
      newsCats: [],
      heroCats: [],
      videoCats: [],
      strategyCats: [],
      isNavSHow: true,
      isNavShowText: "收起",
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      }
    };
  },
  methods: {
    show() {
      console.log(this.$store.state.count);
      this.isNavSHow = !this.isNavSHow;
      if (this.isNavSHow == true) {
        this.isNavShowText = "收起";
      } else {
        this.isNavShowText = "展开";
      }
    },
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHerosCats() {
      const res = await this.$http.get("heros/list");
      this.heroCats = res.data;
    },
    async fetchVideoesCats() {
      const res = await this.$http.get("videoes/list");
      this.videoCats = res.data;
    },
    async fetchStrategiesCats() {
      const res = await this.$http.get("strategies/list");
      this.strategyCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHerosCats();
    this.fetchVideoesCats();
    this.fetchStrategiesCats();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.text-overflow {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.img-video {
  width: 0.8rem;
  height: 0.8rem;
}

.isshow {
  transform: rotate(180deg);
}
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