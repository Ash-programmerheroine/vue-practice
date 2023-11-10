const app = Vue.createApp({
    data(){
       return{
        url:"https://github.com/iamshaunjp/Vue-3-Firebase",
        showBooks: true,
       books:[
        {title:'name of the wind',author:'patrick rothfuss', img:'assets/1.jpg', isFav:true},
        {title:'the way of kings',author:'brandon sanderson', img:'assets/1.jpg', isFav:false},
        {title:'the final Empire',author:'brandon sanderson', img:'assets/2.jpg', isFav:true},
        ]
        
        
       }
    },
       methods: {
        toggleShowBooks()
        {
            // this.title = 'pppppppppp'
            this.showBooks = !this.showBooks
        } ,
        toggleFav(book){
            book.isFav = !book.isFav

        }
        // handleEvent(e,data){
        //     console.log(e, e.type);
        //     if(data){
        //         console.log(data);
        //     }
        // },
        // handleMouseMove(e){
        //     this.x = e.offsetX
        //     this.y = e.offsetY
            
        // }
       }
    
//  template: '<h2>I am Ashrafi</h2>'
})
app.mount('#app')