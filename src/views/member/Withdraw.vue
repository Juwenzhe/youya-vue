<template>
  <div>
    <div class="header">
      <img class="mb-10" src="../../assets/img/icon-money.png" alt="">
      <div class="fz-15 c3">提现到微信钱包</div>
    </div>
    <div class="plr-20">
      <div class="fz-13 c3 mb-20">提现金额</div>
      <div class="fz-28 c3 fw-700 momey-box">
        <div>￥</div>
        <input class="ml-10" type="number" v-model="money">
      </div>
      <div class="bar-1 mb-5"></div>
      <div class="fz-13 c9 mb-40">
        当前可提现金额<span class="text-price">{{withdrawal}}</span>元
      </div>
      <div class="flex flex-center">
        <div class="btn-youya" @click="withdrawApply">确认</div>
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
        money:0,
        withdrawal: "",
      };
    },
    watch: {
      money(value){
        value = parseInt(value) || 0;
        let withdrawal = parseInt(this.withdrawal)
        if(value > withdrawal){
          this.money = withdrawal
        }
        if(value){
          this.money = value
        }
      }
    },
    computed: {},
    methods: {
      async withdrawApply(){
        let money = parseFloat(this.money)
        if(money < 1){
          this.$toast.fail("提现金额不能小于 1")
          return;
        }
        this.$toast.loading({message: '提现申请中...'});
        let {code,data,message} = await axios.post("/user/finance-apply",{
          amount:money
        });
        if(code == 0){
          this.$toast.success("申请成功")
          this.$router.go(-1)
        }else{
          this.$toast.fail(message)
        }
      },
      async getUserInfo(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/user");
        if(code == 0){
          this.$toast.clear()
          this.withdrawal = data.total_withdrawal;
        }else{
          this.$toast.fail(message)
        }
      }
    },

    created() {
      this.getUserInfo()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .header {
    padding: 40px 0;
    text-align: center;

    img {
      width: 60px;
      height: 60px;
      display: inline-block;
    }
  }
  .momey-box{
    display: flex;
    padding-bottom: 10px;
    input{
      width: 90%;
    }
  }
  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, .2);
  }
</style>