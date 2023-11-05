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
      <p>
        vkfiomgkldfjblmfd gfdogfdiogjiofd giofd jgio fdiogj iofdj giodfj iogjidf jgiojrdfi jgiodfjsgiojfdiojgiofdj gio dfio gjoifd giu dfugofdi jgiofdjiog jdfoi jgiodf jiodg
      </p>
      <div className="cards d-grid">
        <div className="card-front-holder">
        <Cardsfront
      price1="3424"
      image1="https://imgs.search.brave.com/MrgijKEAcUECAeiSE7IyJD8_YC-Ds3MtG1Cp1QmYw_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9xNjAydnRj/dXUzdzMvMTNwZkw4/cG5pRzVZWmpFdDRT/Rjg3SC83OGI0ZGM3/YjhmZmViMTU1OWY0/YzRlMThhYTc2N2Yy/Mi8yM19PQ1QtV0sy/LVdPTUVOUy1PUFRC/QU4tTUZCLmpwZz93/PTU2MyZxPTgwJmZt/PWpwZyZmbD1wcm9n/cmVzc2l2ZQ"
      price2="43243"
      image2="https://imgs.search.brave.com/VkCQqOq73BeesEf0j3ETFIUmpFV2egMPq8JWcEAYXwA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF5bGxjTG81NUwu/anBn"
      price3="4232"
      image3="https://imgs.search.brave.com/4Yp8v2wts63Ti5uP7On-Cb6nY8l3-_ckMXXPph6oYpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFxaC16QXRHaEwu/anBn"
      price4="5453"
      image4="https://imgs.search.brave.com/HLjVxXjkXgrbhp05nlFusVWAKrn2Nssl47Bv3dfKgW8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9xNjAydnRj/dXUzdzMvNks5NXE1/S21selFaYmkzRlpy/bE9zRi9hNTVjZDgw/OGEyZGE2NTAzMGQy/ZDU1MTBhMGY4MmEy/Yy8yM19PQ1QtV0sy/LVdPTUVOUy1PUFRC/QU4tTUZCNS5qcGc_/dz01NjMmcT04MCZm/bT1qcGcmZmw9cHJv/Z3Jlc3NpdmU"
          />
          <button className='btn-card-front'>
            Ver Todo
          </button>
        </div>
        
      </div>
      
     </div>
    </div>
  );
}

export default App;
