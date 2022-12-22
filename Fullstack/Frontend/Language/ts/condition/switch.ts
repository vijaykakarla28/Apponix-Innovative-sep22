function random (){
    var myran = Math.floor(Math.random()*7+1);

    switch(myran){
        case 1:
            (document.getElementById('root') as HTMLDivElement).innerHTML = 'Monday'
            break;
            case 2:
            (document.getElementById('root') as HTMLDivElement).innerHTML = 'Tuesday'
            break;
            case 3:
            (document.getElementById('root') as HTMLDivElement).innerHTML = 'Wednesday'
            break;
            case 4:
            (document.getElementById('root') as HTMLDivElement).innerHTML = 'Thursday'
            break;
            case 5:
            (document.getElementById('root') as HTMLDivElement).innerHTML = 'Friday'
            break;
            case 6:
            (document.getElementById('root') as HTMLDivElement).innerHTML = 'saturday'
            break;
            case 7:
            (document.getElementById('root') as HTMLDivElement).innerHTML = 'Sunday'
            break;
    }
}