<template>
  <el-container style="height: 100vh;">
    <el-aside class="slider-bar" :class="isshow ? 'slide' : ''" width="220px">
      <div class="logo-title" @click="$router.push('/')">VUEADMIN</div>
      <el-menu router :default-active="$route.path">
        <el-submenu index="1" v-if="isshowcontent">
          <template slot="title">
            <i class="el-icon-s-goods"></i>内容管理
          </template>

          <el-menu-item-group>
            <template slot="title"
              >物品</template
            >
            <el-menu-item index="/items/create">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title"
              >英雄</template
            >
            <el-menu-item index="/heroes/create">新增英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title"
              >文章</template
            >
            <el-menu-item index="/articles/create">新增文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title"
              >视频</template
            >
            <el-menu-item index="/videoes/create">新增视频</el-menu-item>
            <el-menu-item index="/videoes/list">视频列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title"
              >攻略</template
            >
            <el-menu-item index="/strategies/create">新增攻略</el-menu-item>
            <el-menu-item index="/strategies/list">攻略列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2" v-if="isshowoperate">
          <template slot="title">
            <i class="el-icon-mouse"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title"
              >分类</template
            >
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title"
              >广告位</template
            >
            <el-menu-item index="/ads/create">新增广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3" v-if="isshowsystem">
          <template slot="title">
            <i class="el-icon-s-tools"></i>系统设置
          </template>
          <el-menu-item-group>
            <template slot="title"
              >管理员</template
            >
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4" v-if="isshowecharts">
          <template slot="title">
            <i class="el-icon-s-data"></i>动态图表
          </template>
          <el-menu-item-group>
            <template slot="title"
              >近期热门</template
            >
            <el-menu-item index="/echarts/hot">热门事项</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="my-header">
        <!-- <i
          class="text-white flex-1 fs-20"
          :class="isshow ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          style="margin-right: 15px"
            @click="
            () => {
              this.isshow = !this.isshow
            }
          "
        ></i> -->
        <div
          class="btn-container"
          @click="
            () => {
              this.isshow = !this.isshow
            }
          "
        >
          <floatingBtn></floatingBtn>
        </div>

        <el-dropdown class="mr-10 flex-row" @command="handleCommand">
          <i
            class="el-icon-setting text-white fs-17"
            style="margin-right: 15px"
          ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
            <el-dropdown-item command="toggleUser">切换用户</el-dropdown-item>
            <el-dropdown-item command="settings">设置</el-dropdown-item>
          </el-dropdown-menu>
          <span class="text-white">{{ username }}</span>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.logo-title {
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 60px;
  font-size: 22px;
  border-color: rgba(238, 241, 146, 0.3);
  border-right-width: 1px;
  border-right-style: solid;
  background-color: #20a0ff;
  color: #fff;
  cursor: pointer;
}

.el-header {
  background-color: #20a0ff;
  color: #333;
  line-height: 60px;
}

.my-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  color: #333;
}

.slider-bar {
  background-color: #eef1f6;
  margin-left: 0;
  transition: 0.8s all;
}

.slide {
  margin-left: -220px;
}

.btn-container {
  position: relative;
}
</style>

<script>
const floatingBtn = () => import('@/animate-icon/FloatingButton')
// const badge = () => import('@/animate-icon/Badge')
export default {
  data() {
    return {
      isshow: false,
      username: '',
      isshowcontent: false,
      isshowoperate: false,
      isshowsystem: false,
      isshowecharts: false,
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'userInfo':
          this.$router.push('/')
          break
        case 'toggleUser':
          this.$router.push('/login')
          break
        case 'settings':
          this.$router.push('/')
          break
      }
    },
  },
  created() {
    let username = localStorage.getItem('username')
    let limitslist = JSON.parse(localStorage.getItem('limitslist')) || []
    if (username || limitslist) {
      this.username = username
      this.limitslist = limitslist
    }
    console.log(limitslist)
    if (limitslist.length === 0) {
      console.log(11111)

      setTimeout(() => {
        this.$message({
          type: 'error',
          message: '当前用户暂无查看权限，可告知管理员开启相应权限',
        })
        this.$router.push('/login')
      }, 2000)
    }
    limitslist.forEach((item) => {
      switch (item) {
        case '运营管理;':
          this.isshowoperate = true
          break
        case '内容管理;':
          this.isshowcontent = true
          break
        case '系统设置;':
          this.isshowsystem = true
          break
        case '动态图表;':
          this.isshowecharts = true
          break
      }
    })
  },
  components: {
    floatingBtn,
  },
}
</script>
