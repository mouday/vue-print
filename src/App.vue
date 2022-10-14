<template>
  <div style="text-align: center">
    <el-table
      id="print-table"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
    </el-table>

    <el-button
      @click="handlePrint"
      type="primary"
      style="margin-top: 20px"
      >打印</el-button
    >
  </div>
</template>

<script>
import { tableData } from './data.js'
import { printHTML } from './utils.js'
import printTemplate from './print-template.twig'
import dayjs from 'dayjs'

export default {
  data() {
    return {
      tableData,
    }
  },

  methods: {
    handlePrint() {
      let html = printTemplate({
        title: '员工信息表',
        list: this.tableData,
        now_time: dayjs().format('YYYY-MM-DD'),
      })
      printHTML(html)
    },
  },
}
</script>

<style lang="less"></style>
