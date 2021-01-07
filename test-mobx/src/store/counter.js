import { makeAutoObservable } from "mobx"

class Counter {
    constructor() {
        makeAutoObservable(this)  // Автоматически отслеживает этот обьект
    }

    count = 0 ;
    timer = 60

    increment() {
        this.count = this.count + 1
        console.log("increment" + this.count)
    }

    decrement() {
        this.count = this.count - 1
        console.log("decrement" + this.count)
    }

    get total( ) {  
        // Функции помеченные get возвращают какоето значениеи вызывается тольки при изминение одного из значений
        return 'Count + timer =' + this.timer + this.count
    }

}

export default new Counter()