/*const app = getApp()
？？？？？
Page({
  data: {
    show_flag:0,
    name:""
  },
  input_over(e){
    var that=this;
    
  },
  change_show() {
    var tem = this;
    var flag = this.data.show_flag;
    tem.setData({
      show_flag: (1 - flag)
    })
  },
  okk:function(){
     this.change_show();
  },
  hide_component:function(){
    //this.change_show();
    this.triggerEvent('ttt');
  },
  onLoad: function () {
   
  },
})*/
const app = getApp()

Page({
  data: {
    show_flag: 0,
    show_flag2: 0,
    inputValue:''
  },

  input_over:function(e){
    var that=this;
    that.hide_done();
    that.setData({
      inputValue:e.detail.value
    })
  },

  change_show() {
    var tem = this;
    var flag = tem.data.show_flag;
    tem.setData({
      show_flag: (1 - flag)
    })
  },

  show_done(){
    var that = this;
    that.setData({
      show_flag2: 1
    })
  },

  hide_done() {
    var that=this;
    that.setData({
      show_flag2: 0
    })
  },

  myfinish: function () {
    var that=this;
    that.change_show();
    if (this.data.inputValue.replace(/\s+/g, '')=='') that.hide_done();
    else this.show_done();
  },
  
  onLoad: function () {

  },
})