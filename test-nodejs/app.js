    // NodeJS. 06. Читаем папки и файлы. Создаем файлы.
const fs = require('fs'); // встроенная библиотека для чтения файлов
const path = require('path'); // встроенная библиотека для чтения расширений файла
const csv = require('csv-parser'); // модуль для работы с csv файлами
const createCsvWriter = require('csv-writer').createObjectCsvWriter; // создаёт csv файлы
const http = require('http') // библиотека для работы с http
const url = require('url'); // библиотека для чтения данные с url
const {parse} = require('querystring'); // библиотека для чтения ключей POST запроса
const mysql = require('mysql'); // для работы с базой mysql
const mysql2 =require('mysql2/promise'); // для работы с фсинхронными запросами

                        // Читаем содержимое файлов
// way-1
fs.readFile('name.txt' , 'utf-8' , (err , data) => { // В этом случае действие будет асинхронным 
    console.log(data)
    console.log(err)
})
console.log('Второе действие')
// way-2
let text = fs.readFileSync('name.txt' , 'utf-8' ); // будет синхронным
console.log(text)

                        // Читаем содержимое папок 
fs.readdir('one' , (err , data) => { // one - название папки
    console.log(data) // выводит содержимое папки и название вложенных папок
    console.log(err)
    data.forEach( file => {
        console.log(file)
        console.log(path.extname(file)) // выводим расширение файла 
        console.log(fs.statSync('one/'+file).size) // выводит размер файла
    })
})

                        // Создаём новый файл
fs.writeFile('one/newfile.txt' , 'что туда будем записывать' , (err) => {  // создаётся новый файл с записью
    if (err) console.log(err);
})

//***


//          Читаем и пишем CSV и JSON файлы в Node.js

                                //Создаём JSON файл

const man = {
    name:'Alex',
    age:22,
    car:'vaz'
}
fs.writeFile('one.json' , JSON.stringify(man) , (err) => { // преобразуем в JSON формат
    if (err) console.log('Error')
})

                                // Читаем JSON файл

const myjson = require('./one.json');
console.log(myjson)

                                // Читаем CSV file

const results = []
fs.createReadStream('data.csv') // читает csv файлы
.pipe(csv())
.on('data', (data) => results.push(data)) 
.on('end', () => {
    console.log(results); });

                                // Пишем csv файл

const csvWriter = createCsvWriter({
path: 'data.csv',       // Куда сохранять файл
    header: [           
        {id: 'name', title: 'NAME'},        // параметры наших колонок
        {id: 'lang', title: 'LANGUAGE'}
            ]
});
const records = [
    {name: 'Bob',  lang: 'French, English'},
    {name: 'Mary', lang: 'English'}
];
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
    console.log('...Done');
});

//*** 


//                  Получение GET и POST запросов на Node.js

http.createServer((request , response) => {  // создаём сервер

    if (request.method == 'GET') {
        console.log("server work");
        console.log(request.method); // определяем вид запроса
        let urlRequest = url.parse(request.url ,true); // Читаем url
        console.log(urlRequest);
        console.log(urlRequest.query.test); // читаем Get запрос
        response.end('gooo');   // по окончании выводит это слово
    }
    else if (request.method == 'POST') {  // мы передаём маленькие части файла чтобы не обрабатывать весь файл сразу и не рухнул сервер
        let body = '';
        request.on('data' , chunk => {
            body += chunk.toString();
        });
        request.on('end' , () => {
            console.log(body);
            let params = parse(body); // вытаскиваем из body ключи
            console.log(params.hi);  // выводим занчение переданного ключа
            response.end('ok')
        });
    }
    
}).listen(3000)  // слушать 3000 порт

// ***


//                Подключение к базе данных MySQL в Node.js

const conn = mysql.createConnection({  // подключение к базе данных
    host:"itgid.mysql.tools",
    user: "itgid_nodetest" ,
    database: "itgid_nodecourse",
    password:"Fr16Yirth4"
})

conn.connect(err => { // подключается к базе данных
    if (err) {
        console.log(err)
    } else {
        console.log("Database--OK")
    }
})

let query = 'SELECT * FROM user';

conn.query(query , (err , result , field) => {
    console.log(err); // показывает ошибки 
    console.log(result); // показывает результат
    console.log(field); // показывает с какими полями пришлось работать
});

conn.end(err => {  // закрывает соединения с базой данных
    if (err) {
        console.log(err)
    } else {
        console.log("Database--OK")
    }
});

// ***

//              Последовательные запросы в базу данных на Node.js

const config = require("./config"); // импортируем модуль

async function main() {
    const conn =await mysql2.createConnection(config); // подключение к базе данных
    const [ rows , fields] = await conn.execute('select * from user'); // записываем данные таблицы в переменные
    console.log(rows[0]['firstname']);
    conn.end();
}
// ***

//          Модули Node.js, require

const func = require("./function")
console.log(func.f(2,3))

