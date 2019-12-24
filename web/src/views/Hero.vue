<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white" style="align-items:center;">
      <img src="../assets/img/logo.jpg" height="30" style="border-radius:2px;" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link tag="div" to="/" class="fs-xs">更多英雄 &gt;</router-link>
    </div>

    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info p-3 text-white h-100 d-flex flex-column" style="justify-content:flex-end;">
        <div>{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="my-2" v-if="model.categories">{{model.categories.map(v=>v.name).join('/')}}</div>

        <div class="d-flex my-2" style="justify-content:space-between;align-items:center;">
          <div class="scores" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue">{{model.scores.skills}}</span>
            <span>攻击力</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>

          <router-link to="/" tag="span" class="text-grey fs-small">皮肤：2&gt;</router-link>
        </div>
      </div>
    </div>

    <div class="content bg-white">
      <div
        class="nav fs-lg pt-3 pb-1 mx-2"
        style="justify-content:space-around;border-bottom:1px solid #d4d9de"
      >
        <div
          class="nav-item"
          :class="{active: isactive===index}"
          v-for="(tabitem,index) in tabs"
          :key="index"
          @click="$refs.list.swiper.slideTo(index)"
        >
          <div class="nav-link">{{tabitem.name}}</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper
          ref="list"
          :options="{autoHeight:true}"
          @slide-change="()=>isactive=$refs.list.swiper.realIndex"
        >
          <swiper-slide>1111</swiper-slide>
          <swiper-slide>2222</swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: {
        // categories: []
      },
      tabs: [
        {
          name: "英雄初识"
        },
        {
          name: "进阶攻略"
        }
      ],
      isactive: 0
    };
  },
  methods: {
    async fetchHeroInfo() {
      const res = await this.$http.get(`heros/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetchHeroInfo();
  }
};
</script>


<style lang="scss">
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }

  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>
