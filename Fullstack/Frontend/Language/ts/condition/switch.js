function random() {
    var myran = Math.floor(Math.random() * 7 + 1);
    switch (myran) {
        case 1:
            document.getElementById('root').innerHTML = 'Monday';
            break;
        case 2:
            document.getElementById('root').innerHTML = 'Tuesday';
            break;
        case 3:
            document.getElementById('root').innerHTML = 'Wednesday';
            break;
        case 4:
            document.getElementById('root').innerHTML = 'Thursday';
            break;
        case 5:
            document.getElementById('root').innerHTML = 'Friday';
            break;
        case 6:
            document.getElementById('root').innerHTML = 'saturday';
            break;
        case 7:
            document.getElementById('root').innerHTML = 'Sunday';
            break;
    }
}
