async function mydata() {
    var data = fetch('https://fakestoreapi.com/products')
    var data2 = await (await data).json()
    console.log(data2)
    data2.map((a) => {
        console.log(a.image)
        var myimg = document.createElement('img')
        myimg.style.width = "200px"
        myimg.style.width = "200px"
        myimg.src = a.image
        var mydiv = (document.getElementById('root') as HTMLDivElement).appendChild(myimg)
    })
}
mydata()