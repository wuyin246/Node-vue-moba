<template>
  <div class="page-hero" v-if="model">
    <div
      class="topbar bg-black py-2 px-3 d-flex ai-center text-white"
      style="align-items:center;"
    >
      <img
        src="../assets/img/logo.jpg"
        height="30"
        style="border-radius:2px;"
      />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link tag="div" to="/" class="fs-xs">更多英雄 &gt;</router-link>
    </div>

    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div
        class="info p-3 text-white h-100 d-flex flex-column"
        style="justify-content:flex-end;"
      >
        <div>{{ model.title }}</div>
        <h2 class="my-2">{{ model.name }}</h2>
        <div class="my-2" v-if="model.categories">
          {{ model.categories.map((v) => v.name).join('/') }}
        </div>

        <div
          class="d-flex my-2"
          style="justify-content:space-between;align-items:center;"
        >
          <div class="scores" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{ model.scores.difficult }}</span>
            <span>技能</span>
            <span class="badge bg-blue">{{ model.scores.skills }}</span>
            <span>攻击力</span>
            <span class="badge bg-danger">{{ model.scores.attack }}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{ model.scores.survive }}</span>
          </div>

          <router-link to="/" tag="span" class="text-grey fs-small"
            >皮肤：2&gt;</router-link
          >
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
          :class="{ active: isactive === index }"
          v-for="(tabitem, index) in tabs"
          :key="index"
          @click="$refs.list.swiper.slideTo(index)"
        >
          <div class="nav-link">{{ tabitem.name }}</div>
        </div>
      </div>
      <div class="pt-3 mx-2">
        <swiper
          ref="list"
          :options="{ autoHeight: true }"
          @slide-change="() => (isactive = $refs.list.swiper.realIndex)"
        >
          <swiper-slide>
            <!-- 技能上方按钮 - start -->
            <div class="hero-skills">
              <div class="top-btns d-flex fs-lg">
                <div class="show-btn">
                  <img src="../assets/img/icon_06.png" alt /> 英雄介绍视频
                </div>
                <div class="show-btn">
                  <img src="../assets/img/icon_07.png" alt />一图识英雄
                </div>
              </div>
            </div>
            <!-- 技能上方按钮 - end -->

            <!-- 技能展示 - start -->
            <div class="skill-icons d-flex" v-if="model.skills">
              <img
                v-for="(item, index) in model.skills"
                :key="index"
                :src="item.icon"
                class="img-item"
                :class="{ activeimg: isimgactive === index }"
                @click="isimgactive = index"
              />
            </div>
            <div class="skill-describes" v-if="model.skills">
              <ul>
                <li>
                  <span class="fs-llg mr-5" style="font-weight:600;">{{
                    model.skills[isimgactive].name
                  }}</span>
                  <span class="fs-sm text-grey"
                    >(冷却值：{{ model.skills[isimgactive].delay }} 消耗：{{
                      model.skills[isimgactive].cost
                    }})</span
                  >
                </li>
                <li class="border-bottom pb-3 fs-md">
                  {{ model.skills[isimgactive].description }}
                </li>
                <li class="fs-md text-grey">
                  小提示：{{ model.skills[isimgactive].tips }}
                </li>
              </ul>
            </div>
            <!-- 技能展示 - end -->

            <!-- 使用技巧 - start -->
            <div class="mt-5">
              <div>
                <img src alt />
                <span class="fw-600 fs-llg">使用技巧</span>
              </div>
              <p>{{ model.usageTips }}</p>
            </div>
            <!-- 使用技巧 - end -->

            <!-- 对抗技巧 - start -->
            <div class="mt-5">
              <div>
                <img src alt />
                <span class="fw-600 fs-llg">对抗技巧</span>
              </div>
              <p>{{ model.battleTips }}</p>
            </div>
            <!-- 对抗技巧 - end -->

            <!-- 团战思路 - start -->
            <div class="mt-5">
              <div>
                <img src alt />
                <span class="fw-600 fs-llg">团战思路</span>
              </div>
              <p>{{ model.teamTips }}</p>
            </div>
            <!-- 团战思路 - end -->
          </swiper-slide>

          <!-- 进阶攻略 -->
          <swiper-slide>2222</swiper-slide>
        </swiper>
      </div>
    </div>

    <el-tooltip placement="top" content="返回顶部">
      <!-- 组件使用 -->
      <BackToTop
        transitionName="fade"
        :customStyle="myBackToTopStyle"
        :visibilityHeight="200"
        :backPosition="0"
      ></BackToTop>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      myBackToTopStyle: {
        right: '20px',
        bottom: '150px',
        width: '40px',
        height: '40px',
        'border-radius': '20px',
        'line-height': '40px',
        background: '#fff',
      },
      model: {
        // categories: []
      },
      tabs: [
        {
          name: '英雄初识',
        },
        {
          name: '进阶攻略',
        },
      ],
      isactive: 0,
      isimgactive: 0,
    }
  },
  methods: {
    async fetchHeroInfo() {
      const res = await this.$http.get(`heros/${this.id}`)
      this.model = res.data
    },
  },
  created() {
    this.fetchHeroInfo()
  },
}
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

.top-btns {
  justify-content: space-between;
}

.top-btns .show-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49%;
  text-align: center;
  background-color: #fcfcfc;
  border: 1px solid #eceef0;
  padding: 8px 0;
  border-radius: 5px;
  color: #343440;
  img {
    width: 17px;
    height: 17px;
    margin-right: 5px;
  }
}

.activeimg {
  border: 2px solid #d59b40;
  border-radius: 55px;
}

.skill-icons {
  justify-content: space-between;
  margin: 15px 5px;
  img {
    width: 18%;
  }
}

.skill-describes {
  ul {
    padding: 0;
    list-style: none;
    li {
      margin: 20px 0;
    }
  }
}
</style>
