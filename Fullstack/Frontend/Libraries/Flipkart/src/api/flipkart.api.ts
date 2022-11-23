export const flipkartdata=async()=>{
    var flipkartdata=fetch('https://fakestoreapi.com/products')
    var data=await (await flipkartdata).json()
    console.log(data)
    return data
}