import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FloresApp from './components/FloresApp.jsx';
import FlowerDrawer from './components/FlowerDrawer.jsx';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FloresApp />} />
        <Route path="/FlowerDrawer" element={<FlowerDrawer />} />
        
      </Routes>
        

    </Router>
    
  )
}

export default App;

