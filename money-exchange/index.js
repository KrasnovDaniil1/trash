let exchangeRate = { "uzs":"0.000099" , "rub":"0.013581" , "eur":"1.08" , "usd":"1" }; 
/*массив с курсом валют по отношению к доллару*/
let inputWriteMoney = document.getElementById("input_write_money");  
/*поле вода где вводим число */
let inputReadMoney = document.getElementById("input_read_money");     
/*поле вода где показывается новое число */
let performBtn = document.getElementById("button_perform");   
/* кнопка*/
let whatTransferSelect = document.getElementById("select_what_transfer");   
/* селектор для выбора валюты первый */
let intoWhatTransferSelect = document.getElementById("select_into_what_transfer");   
/*селектор для выбора валюты второй */


performBtn.onclick = function transfer()  {
    let z = 0 ;
    if ( whatTransferSelect.value == intoWhatTransferSelect.value ) {
        inputReadMoney.value = inputWriteMoney.value ;
            }
    else  {
        if ( whatTransferSelect.value != "usd" )  {
            z = inputWriteMoney.value * exchangeRate[whatTransferSelect.value];
            inputReadMoney.value = z / exchangeRate[intoWhatTransferSelect.value];
        }
        else  {
            inputReadMoney.value = (inputWriteMoney.value / exchangeRate[intoWhatTransferSelect.value]);
        }
    }
}
