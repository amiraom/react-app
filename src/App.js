import logo from './logo.svg';
import './App.css';
import BasicExample from './card';
import BasicExample2 from './nav';
import BasicExample3 from './form';
import DarkExample from './table';
import AdvancedExample from './pagination';


function App() {
  return (
    <div>
      
      <BasicExample2/>
     
      <div className='car2'><BasicExample3/></div>
      <div className='car'> <BasicExample/> </div>
      <div className='tab'><DarkExample/></div>
      <div className='page'><AdvancedExample/></div>
      
     
     
      
    </div>
  );
}

export default App;
