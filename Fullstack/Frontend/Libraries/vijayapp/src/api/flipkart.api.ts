export const flipkartdata=async()=>{
    var flipkartData=fetch('https://fakestoreapi.com/products')
    var data=await (await flipkartData).json
    return data
}