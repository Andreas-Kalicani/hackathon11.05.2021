import React, {useState} from 'react'
import './App.css';
import Progress from './components/progress/Progress';
import TasksList from './components/taskslist/TasksList';
import Header from './components/header/Header';
import Done from './components/done/Done';


function App() {

  
  const [tasksList, setTasksList] = useState ([
    {
      task: "6:30 AM It's time to get up and start planning the day! If you keep sleeping you don't score points." ,
      points: '10' ,
      done : false,
    },
    {
      task: "Breakfast is one of the most important things. Make happy all your colleagues and prepare breakfast!" ,
      points: '15',
      done : false,
    },
    {
      task: "We go on an expedition! Someone has to prepare everything we need to survive out there" ,
      points: '15',
      done : false,
    },
    {
      task: "We have very little information about Mars, please collect photos about the environment to help us conduct research." ,
      points: '20',
      done : false,
    },
    {
      task: "we need someone to stay at the base maintaining communication with those who have gone on an expedition" ,
      points: '18',
      done : false,
    },
    {
      task: "0ne of your colleagues has gone out to investigate and we have lost connection with him. Someone will have to go get it." ,
      points: '30',
      done : false,
    },
    {
      task: " One of our Manned Mars rovers is out of order and we need it as soon as possible. Who wants to fix it?" ,
      points: '25',
      done : false,
    },
    {
      task: "Being so far from the family for so long can be depressing, gather all your companions and distract them with a game or whatever you can think of!",
      points: '15', 
      done : false,
    },
    {
      task: "You have to start farming on Mars. We will send all the information about this project to whoever wants to start." ,
      points: '25',
      done : false,
    },
    {
      task: "Don't forget to exercise. It is a fundamental part to maintain good physical and mental health on Mars" ,
      points: '25',
      done : false,
    },
    {
      task: "It is time for dinner, which colleague will prepare a pleasant evening for all?" ,
      points: '25',
      done : false,
    },
  ])

  return (
    <div className="App">
      
        <Header  title="Gamified scrum"/>

      <div className="content">    
        <TasksList 
        tasksList={tasksList}
        />
        <Progress />
        <Done />
      </div>

    </div>
  );
}

export default App;
