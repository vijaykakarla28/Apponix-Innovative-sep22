var myarry2 = [1, 2, 'car']
function state(){

    console.log(myarry2);
    var user = (document.getElementById('root') as HTMLInputElement).value
    console.log(user)
    myarry2.push(user)
    console.log(myarry2);

}