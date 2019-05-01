Page({
  data:{
    num_Item_One:[1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52],
    num_Item_Two:[2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53],
    num_Item_Three:[3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54]
  },
  onReachBottom(){
    console.log('okk')
    var length=this.data.num_Item_One.length;
    for(var i=1;i<=10;i++)
    { 
      this.data.num_Item_One=this.data.num_Item_One.concat([(length+i)*3-2])
      this.data.num_Item_Two=this.data.num_Item_Two.concat([(length+i)*3-1])
      this.data.num_Item_Three=this.data.num_Item_Three.concat([(length+i)*3])
      this.setData({
        num_Item_One:this.data.num_Item_One,
        num_Item_Two:this.data.num_Item_Two,
        num_Item_Three:this.data.num_Item_Three
      })
    }
    console.log(length)
  },

  onLoad(){
    console.log('finish')
  }
})
