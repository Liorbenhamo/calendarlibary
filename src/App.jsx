import './App.css'
import { useState } from "react";
import Calendar from "../component/Calendar";

function App() {
  const [date, setDate] = useState();
  console.log(date);
  return (
    
    <div>
      <Calendar setDate={setDate} />
    </div>
  )
}

export default App
