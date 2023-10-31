import logo from './logo.svg';
import { Navbar } from './components/navbar.jsx';
import { Cardsfront } from './components/cardsfront.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar-cont">
        <Navbar/>
      </div>
     <div className='row'>
    
      <div className="image-wall" >
        <img src="https://imgs.search.brave.com/QeYtAHCtVee-igL7LKUOXVwfQoDYItzceo_wrBd7hCU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM4LzgxLzc2/LzM2MF9GXzEzODgx/NzY4MV80RkNnQjg5/ZUdJQmk3VzdpMGcw/bVBKSHNnOVp1Wnl6/VS5qcGc" alt="" />
      </div>
     </div>
     <div className="second">
      <h1>Sunao</h1>
      <Cardsfront/>
     </div>
    </div>
  );
}

export default App;
