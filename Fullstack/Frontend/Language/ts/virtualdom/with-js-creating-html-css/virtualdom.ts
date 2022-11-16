function myheadings(mydata) {
    var h1 = document.createElement('h1');
    h1.innerHTML = mydata;
    h1.style.color = 'red';
    (document.getElementById('root') as HTMLDivElement).appendChild(h1)

}
myheadings('good morning')
myheadings('webdesign')
myheadings('fullstack')
myheadings('frontend')