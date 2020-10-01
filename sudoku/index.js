
let btnStart = document.getElementById("btnStart"); 
let input = document.getElementsByClassName("input");
let inputReadText = document.getElementById('fileInput');
let holder = [];    /* записываем значение из input*/
let solved = [];    /*  */
let matrix = [];    /*записываем готовый результат JSON.stringify  JSON.parse()*/
let newNumberInInput; /*для записи */

document.getElementById("a").onclick = function() {
   var text = matrix;
   var csvData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(text);
   this.href = csvData;
   this.target = '_blank';
   this.download = 'sudoku.txt';
} 


window.onload = function board()   {
    for (let i = 0 ,d = 0; i < 9; i++)   {
        var divInBody = document.createElement("div");
        divInBody.className = "container row  col-6 ml-5";
        document.body.appendChild(divInBody);
        while (d < 9)   {
            divInBody.innerHTML += `<input tepe="text" class="input col" />` ;
            d++;
        }
        d=0;
    }  
}


inputReadText.addEventListener('change', function selectedFileChanged() {  /*для считывание информации с файла загруженного */
    let reader = new FileReader();
    reader.onload = function fileReadCompleted() {
       let newNumberInInput = [reader.result];
        for (let b = 0 , tr = 0; tr < newNumberInInput[0].length; b++ , tr += 2) {    
            input[b].value  = newNumberInInput[0][tr];
            }
        }
    reader.readAsText(inputReadText.files[0]);
});


btnStart.onclick =  function sudoku()   {
    console.log(solved);
        for (let n = 0; n < 81; n++) {
            if (input[n].value  != 0 || null){
                input[n].classList.add("bg-danger");
            }
        }
        for (var i = 0; i < 81; i++)   {
            holder[i] = (input[i].value);   /*записываем значение из input*/
        for (var j = 0, k = -1; j < holder.length; j++)   {
            if (j % 9 == 0)   {
            k++;
            matrix[k] = []; /*создаём 9 массивов */
            }
            matrix[k].push(holder[j]);  /*записываем в массив 9 массивов */
            }
        }

        solve(matrix);  

        let h = 0;  /*для записываний новых значений в input*/
        for (var i = 0; i < matrix.length; i++)   {
        for (var j = 0; j < matrix[i].length; j++)   {
            solved.push(matrix[i][j]);
            input[h].value = solved[h];   /*записывает новые значение в input*/
            h++     
                }
            }
            console.log(matrix);   /*проверяем выполнился ли код */

        }   
    
        function insert(matrix, i, j, k)   {
            for (var a = 0; a < 9; a++)   {
                if (a != i && matrix[a][j] == k)   {
                return false;
                }
                if (a != j && matrix[i][a] == k)   {
                return false;
                }
            }
            var y = Math.floor((i / 3)) * 3;
            var x = Math.floor((j / 3)) * 3;
            for (var a = 0; a < 3; a++)   {
                for (var b = 0; b < 3; b++)   {
                    if (a != i && b != j && matrix[y + a][x + b] == k)   {
                        return false;
                    }
                }
            }
            return true;
        }
    
        function solve(matrix)   {
            for (var i = 0; i < 9; i++)   {
            for (var j = 0; j < 9; j++)   {
                if (matrix[i][j] != 0)   {
                continue;
                }
                for (var k = 1; k <= 9; k++)   {
                    if (insert(matrix, i, j, k) == true)   {
                        matrix[i][j] = k;
                        b = solve(matrix);
                            if (b == true)   {
                            return true;
                            }
                        matrix[i][j] = 0;
                        }
                    }
                    return false;
                }
            }
                return true;

        }


    
