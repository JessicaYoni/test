import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from "uuid";
import { List } from './components/list/list';

function App() {
  const itemRef = useRef();
  const [progress, setProgress] = useState(0)
  const [data, setData] = useState([
    {id: 1, name: "Tarea 1", completed: false}
  ])
  
  const eventChange = (id) => {
    const newData = [...data];
    const item = newData.find((item) => item.id === id);
    item.completed = !item.completed;
    setData(newData)
  }

  const addItem = (event) => {
    if (event.key === "Enter") {
      const task = itemRef.current.value;
      if (task === "") return;
  
      setData((prevData) => {
        return [...prevData, {id: uuidv4(), name: task, completed: false}]
      })
  
      itemRef.current.value = null;
    }
  }

  const removeItem = () => {
    const newData = data.filter((item) => !item.completed);
    setData(newData)
  }

  const funProgeso = (status) => {
    console.log("status -> ", status);
    setProgress(status)
  }

  useEffect(() => {
    const dataAll = JSON.parse(localStorage.getItem("taskAll"))
    if (dataAll) {
      setData(dataAll)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("taskAll", JSON.stringify(data))
  }, [data])

  return (
    <div className="cnt-general">
      <div className='title'>todos</div>
      <div className="container">
          <List data={data} eventChange={eventChange} />
          <input className="input-box" ref={itemRef} type="text" placeholder="What needs to be done?"  onKeyPress={addItem} />
          <div>
            <span>{ progress === 1 ? "Por hacer" : (progress === 2 ? "Completado" : "Todos")}</span>
            <List data={data} eventChange={eventChange} progress={ progress } />
          </div>
          <br />
          <button onClick={funProgeso.bind(this,1)}>Progreso</button>
          <button onClick={funProgeso.bind(this, 2)}>Completados</button>
          <button onClick={funProgeso.bind(this, 3)}>Todos</button>
          <button onClick={removeItem}>Eliminar</button>
          <br />
      </div>
    </div>
  );
}

export default App;
