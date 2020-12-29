<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}图文攻略</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>

      <el-form-item label="攻略预览图">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="(res) => $set(model, 'previewimg', res.url)"
        >
          <img v-if="model.previewimg" :src="model.previewimg" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="正文">
        <el-input v-model="model.content"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        items: [],
      },
      categories: [],
    }
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/strategies/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/strategies', this.model)
      }

      this.$router.push('/strategies/list')
      this.$message({
        type: 'success',
        message: '保存成功',
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/strategies/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
  },
  created() {
    this.fetchCategories()
    this.id && this.fetch()
  },
}
</script>

<style lang="scss" scoped></style>
