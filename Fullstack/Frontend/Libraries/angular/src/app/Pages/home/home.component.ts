import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
img1:string
img2:string
img3:string
img4:string
img5:string
img6:string
title1:string
title2:string
title3:string
title4:string
title5:string
title6:string
text1:string
text2:string
text3:string
text4:string
text5:string
text6:string
btn1:string
btn2:string
btn3:string
btn4:string
btn5:string
btn6:string
constructor(){
  this.img1='../../../assets/images/12.jpeg'
  this.img2='../../../assets/images/13.jpeg'
  this.img3='../../../assets/images/14.jpeg'
  this.img4='../../../assets/images/15.jpeg'
  this.img5='../../../assets/images/16.jpeg'
  this.img6='../../../assets/images/17.jpeg'
  this.title1='Iphone 11'
  this.title2='Asus Gaming 5 pro'
  this.title3='Sony Bass Booster'
  this.title4='Mi QLED 4k tv'
  this.title5='Samsung double door Fridge'
  this.title6='Diken AC'
  this.text1='Starting at $999'
  this.text2='Starting at $799'
  this.text3='Starting at $399'
  this.text4='Starting at $949'
  this.text5='Starting at $499'
  this.text6='Starting at $399'
  this.btn1='Mobile'
  this.btn2='Laptop'
  this.btn3='HeadSet'
  this.btn4='TV'
  this.btn5='Refridgrator'
  this.btn6='AC'
}
}
