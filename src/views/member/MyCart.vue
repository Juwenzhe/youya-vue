<template>
  <div>
    <!-- 产品列表 -->
    <div class="goods-item" v-for="(item,index) in list" :key="index">
      <div class="checkbox">
        <van-checkbox v-if="!changeEdit" v-model="item.checked" checked-color="#ee7063" @change="checkedChange"></van-checkbox>
        <van-checkbox v-if="changeEdit" v-model="item.editCkecked" checked-color="#ee7063" @change="checkedChange2"></van-checkbox>
      </div>
      <img src="../../assets/img/goods-01.jpg" alt="">
      <div class="ml-10 flex flex-column flex-jus" style="flex:1;">
        <div class="fz-15 text-hide2">完美日记（PERFECT DIARY）无痕持妆粉底液B21 黄调自然偏白黄调自然偏白</div>
        <div class="fz-11 c9">颜色：色号#3</div>
        <div class="flex flex-jus flex-align-end">
          <div class="fz-15 text-price">¥159.00</div>
          <van-stepper v-model="item.totle" integer />
        </div>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="footer-bar">
      <van-checkbox v-if="!changeEdit" icon-size="24px" v-model="checkedAll" checked-color="#ee7063" @click="checkedChangeAll">全选</van-checkbox>
      <van-checkbox v-if="changeEdit" icon-size="24px" v-model="editCkeckedAll" checked-color="#ee7063" @click="editCkeckedChangeAll">全选</van-checkbox>
      <div class="flex" v-if="!changeEdit">
        <div class="btn-youya-o" @click="changeEditEvent">编辑</div>
        <div class="btn-youya">去结算</div>
      </div>
      <div class="flex" v-if="changeEdit">
        <div class="btn-youya-o" @click="changeEditEvent">完成</div>
        <div class="btn-danger-o" @click="deleteItem">删除</div>
        <div class="btn-youya">加入收藏夹</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        list:[{
          checked:true,
          editCkecked:false,
          totle:1
        },{
          checked:true,
          editCkecked:false,
          totle:1
        },{
          checked:true,
          editCkecked:false,
          totle:1
        }],
        checkedAll:true,
        editCkeckedAll:false,
        changeEdit:false
      };
    },
    watch: {},
    computed: {},
    methods: {
      checkedChange(e){
        this.checkedAll = this.list.every(item=>item.checked)
      },
      checkedChange2(){
        this.editCkeckedAll = this.list.every(item=>item.editCkecked)
      },
      checkedChangeAll(e){
        this.checkedAll = !this.checkedAll;
        this.list.forEach(item=>{
          item.checked = this.checkedAll
        })
      },
      editCkeckedChangeAll(e){
        this.editCkeckedAll = !this.editCkeckedAll;
        this.list.forEach(item=>{
          item.editCkecked = this.editCkeckedAll
        })
      },
      changeEditEvent(){
        this.changeEdit = !this.changeEdit
      },
      deleteItem(){}
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .footer-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }
  .checkbox{
    align-self: center;
    margin-right: 10px;
  }
  .goods-item {
    display: flex;
    padding: 15px 10px 20px;
    border-bottom: 1px solid #eee;

    >img {
      width: 90px;
      height: 90px;
      border-radius: 2px;
    }
  }
  .btn-youya,.btn-youya-o,.btn-danger-o{
    margin-left: 5px;
    padding: 0 15px;
    width: auto;
    height:35px;
    line-height: 35px;
    border-radius:18px;
    box-sizing: border-box;
    text-align: center;
    font-size:13px;
  }
  .btn-youya{
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
    color: #fff;
  }
  .btn-youya-o{
    border:1px solid #ccc;
    color: #999;
  }
  .btn-danger-o{
    border:1px solid #D7736D;
    color: #D7736D;
  }
</style>