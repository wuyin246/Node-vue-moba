<template>
  <div>
    <h1>精彩视频列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" labetitlel="ID" width="240"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="playnum" label="播放量"></el-table-column>
      <el-table-column prop="previewimg" label="预览图片">
        <template slot-scope="scope">
          <div style="display:flex;align-items:center;">
            <img :src="scope.row.previewimg" style="height:4rem;width:10rem;border-radius:5px;" />
          </div>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/videoes/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      // 获取数据
      const res = await this.$http.get("rest/videoes");
      this.items = res.data;
      console.log(this.items);
    },
    async remove(row) {
      this.$confirm(`是否确定删除 "${row.title}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/videoes/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
