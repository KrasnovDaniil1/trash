/*package main

import (
    "log"
    "net/http"
	"fmt"
	"encoding/json"
	"database/sql"
    "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
    _ "github.com/lib/pq"
    //"github.com/spf13/viper"
)
type Response struct {
	Status string `json:"status"`
}

func getData(w http.ResponseWriter,r *http.Request){
	connStr := "user=daniil password=5305 dbname=testdb sslmode=disable"
    db, err := sql.Open("postgres", connStr)
    if err != nil {
		panic(err)
        fmt.Println("not")
    } 
    defer db.Close()
	result, err := db.Exec("insert into judges(name) values('Daniil');")
    if err != nil{
	 panic(err)
	 fmt.Println("not")
    }
	fmt.Println(result.RowsAffected())  // количество добавленных строк
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(Response{Status: "OK"})
}




func main() {
    fmt.Println("Start")
    router := mux.NewRouter()
    router.HandleFunc("/post",getData).Methods("GET")

    fmt.Println("Listen and Server")
    headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
    originsOk := handlers.AllowedOrigins([]string{"http://localhost:8080", "http://localhost:8081", "http://localhost:3000"})
    methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"})
    credentialsOk := handlers.AllowCredentials()

    log.Fatal(http.ListenAndServe(":8000" , handlers.CORS(headersOk, originsOk, methodsOk, credentialsOk)(router)))

}*/

/*package main
import (
    "fmt"
    "net/http"
    //"github.com/gorilla/mux"
)
  
func main() {
    
 
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
        http.ServeFile(w, r, "user.html")
    })
    http.HandleFunc("/postform", func(w http.ResponseWriter, r *http.Request){
     
        name := r.FormValue("username")
        age := r.FormValue("userage")
         
        fmt.Fprintf(w, "Имя: %s Возраст: %s", name, age)
    })
    fmt.Println("Server is listening...")
    http.ListenAndServe(":8181", nil)
}*/

package main

import (
    "log"
    "net/http"
	"fmt"
    "encoding/json"
	"io/ioutil"
   // "os"
	"database/sql"
    "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
    _ "github.com/lib/pq"
    //"github.com/spf13/viper"
   // "math/rand"
   // "strconv"
   // "io"
)
type Names struct {
	FirstName  string `json:"first_name"`
	LastName string `json:"last_name"`
}
type Fighter struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}
func postName(w http.ResponseWriter,r *http.Request){
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		// check err
    }
    var n Names
	if err := json.Unmarshal(b, &n); err != nil {
		// check err
	}
    res, err := json.Marshal(n)
	if err != nil {
		// check err
	}
	w.Header().Set("content-type", "application/json")
    w.Write(res) 
  
    connStr := "user=daniil password=5305 dbname=testdb sslmode=disable"
    db, err := sql.Open("postgres", connStr)
    result, err := db.Exec("insert into judges(first_name , last_name) values ($1, $2);", n.FirstName, n.LastName)
    fmt.Println(result.RowsAffected())  // количество добавленных строк
    log.Printf("FirstName: %v , LastName: %v \n", n.FirstName, n.LastName)  // выводит отправленные данные

}


func getName(w http.ResponseWriter,r *http.Request){

    connStr := "user=daniil password=5305 dbname=testdb sslmode=disable"
    db, err := sql.Open("postgres", connStr)
    rows, err := db.Query("SELECT * FROM judges")
    if err != nil {
	
	}
	defer rows.Close()

	var fighters = make([]Fighter, 0)
	for rows.Next() {
		var p Fighter
		err := rows.Scan(&p.FirstName, &p.LastName)
		if err != nil {

		}
		fighters = append(fighters, p)
	}
	json.NewEncoder(w).Encode(fighters)
	w.Header().Set("Content-Type", "application/json")
}

func main() {
    fmt.Println("Start")
    router := mux.NewRouter()
   
    router.HandleFunc("/post",postName).Methods("POST")
    router.HandleFunc("/get",getName).Methods("GET")
    fmt.Println("Listen and Server")
    headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
    originsOk := handlers.AllowedOrigins([]string{"http://localhost:8080", "http://localhost:8081", "http://localhost:3000"})
    methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"})
    credentialsOk := handlers.AllowCredentials()

    log.Fatal(http.ListenAndServe(":8000" , handlers.CORS(headersOk, originsOk, methodsOk, credentialsOk)(router)))
}

