import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  const [messages, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
      ]
  )

  let [inputValue, setValue] = useState('')

      const sendMessage = () => {
        let message = {message: inputValue}
        setMessage([message, ...messages])
        setValue('')
      }

  return (
      <div className="App">
        <div>
          <Input setValue={setValue} title={inputValue}/>
          <Button name={'+'} sendMessage={sendMessage}/>
        </div>
        {messages.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
        })}
      </div>
  );
}
export default App;
