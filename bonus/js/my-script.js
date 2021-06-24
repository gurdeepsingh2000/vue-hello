const app = new Vue ( 
    {
        el: '#app', 
        data:{  
            contentClass: 'hidden',
            buttonText: 'Show me!',
        },

        methods: {
        showElement: function(){
            if(this.contentClass === 'hidden'){
                this.buttonText = 'Hide me!'
                    this.contentClass = 'show';
            }else{
                this.buttonText = 'Show me!'
                this.contentClass = 'hidden';
            }
        }
        }
    })