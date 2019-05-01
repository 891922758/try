
Component({

  properties: {
  },


  data: {
  },
 
  methods: {
    onTap:function(){
      this.triggerEvent('tapFinish');
    },
    changevalue:function(e){
      console.log('ok');
    }
   }
  }
)
