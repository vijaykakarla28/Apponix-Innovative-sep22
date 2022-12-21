function middle(req:any,res:any,next:any){
    console.log('i am called advanced')
    next()
}
  

  //calling
//app.use(middle)
   ///middle ware we give in the curd methods

   