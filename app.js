let ast


function equal() {
    let result 
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
switch(ast){
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;
    
    case '*':
        result = num1 * num2;
        break;
    
    case '/':
       if(num2){
        result = num1 / num2
       }else{
        result = 'infinity'
       }
       break;

       default:
        result = 'введите данные'
        alert(result)
}

document.getElementById('result').innerHTML = result;


    
}




