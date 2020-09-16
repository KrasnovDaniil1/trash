package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/spf13/viper"
)

var err error
var appDir = os.Getenv("APP_DIR")

func init() {
	viper.SetConfigType("json")
	viper.SetConfigFile(filepath.Join(appDir, "config.json"))
	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println(err.Error())
	}
}

func main() {
	a := App{}
	a.Initialize()
	a.Run()
}
