import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomersAction , removeCustomerAction } from './store/customerReducer';
import {fetchCustomers} from './asyncAction/customers.js'

function App() {

const dispatch = useDispatch()
const cash = useSelector(state => state.cash.cash)
const customers = useSelector(state => state.customers.customers)
console.log(cash)

const addCash = (cash) => {
  dispatch({type:"ADD_CASH" ,payload : cash})
}

const getCash = (cash) => {
  dispatch({type:"GET_CASH" , payload : cash})
}

const addCustomers = (name) => {
const customer= {
  name: name, 
  id: Date.now()
}

  dispatch(addCustomersAction(customer))
}

const removeCustomers = (customer) => {
  dispatch(removeCustomerAction(customer.id))
}

  return (
    <div className="App">
    <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomers(prompt())}>Добавлять клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      { customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomers(customer)}>{customer.name}</div>
          )}

        </div>
        :
        <div>
          Клиенты отсутствуют
        </div>
      }
    </div>
  );
}

export default App;
