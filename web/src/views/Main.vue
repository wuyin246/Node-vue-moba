<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img
        src="../assets/img/logo.jpg"
        height="30"
        style="border-radius:2px;"
      />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button class="btn bg-primary" type="button">立即下载</button>
    </div>
    <div class="bg-primary py-2">
      <div class="nav1 text-white" style="justify-content:space-around;">
        <div
          class="nav1-item"
          :class="{ active: isactive1 === true }"
          @click="
            () => {
              isactive1 = true
              isactive2 = false
              isactive3 = false
            }
          "
        >
          <router-link to="/" tag="div" class="nav-link">首页</router-link>
        </div>
        <div
          class="nav1-item"
          :class="{ active: isactive2 === true }"
          @click="
            () => {
              isactive2 = true
              isactive1 = false
              isactive3 = false
            }
          "
        >
          <router-link to="/strategy" tag="div" class="nav-link"
            >攻略中心</router-link
          >
        </div>
        <div
          class="nav1-item"
          :class="{ active: isactive3 === true }"
          @click="
            () => {
              isactive3 = true
              isactive2 = false
              isactive1 = false
            }
          "
        >
          <router-link to="/gamecenter" tag="div" class="nav-link"
            >赛事中心</router-link
          >
        </div>
      </div>
    </div>

    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isactive1: true,
      isactive2: false,
      isactive3: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.nav1 {
  display: flex;
  .nav1-item {
    border-bottom: 3px solid transparent;
    padding-bottom: 0.2rem;
    &.active {
      color: map-get($map: $colors, $key: 'white');
      border-bottom-color: map-get($map: $colors, $key: 'white');
    }
  }
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}

// 动态切换效果
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>
