class Remote{
    color:string
    buttons:string
    battery:string
    constructor(){
        this.color='red'
        this.buttons='on off button'
        this.battery='2cells'
    }
    remotecolor(){
     console.log(this.color)
     return 'blue'
    }
    remotebuttons(){
        console.log(this.buttons)
        return this
    }
    remotebattery(){
        console.log(this.battery)
        return this
    }
}
var myprojecterremote=new Remote()
console.log(myprojecterremote)
myprojecterremote.remotebattery().remotebuttons().remotecolor()