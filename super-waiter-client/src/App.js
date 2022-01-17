import React, {useState,useEffect}  from 'react';
import Overlay from './components/overlay/overlay';


import './App.css'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import BgOverlay from './components/bgOverlay/bgOverlay';
import Orders from './components/orders/orders';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
       setLoading(false)
    }, 3000);
  }, [])

  if (loading) {
    return (
      <div>
        <Overlay/>
    </div>
    );
    
  } else {
    return (
      <div className="app-container ">
        <main className="app-container-inner ">
          <Navbar />
          <div className="main-content">
            <Sidebar />
            <Orders />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
