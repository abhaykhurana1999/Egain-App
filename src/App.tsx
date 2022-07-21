import React from 'react';
import './App.css';
import NativeSelectDemo from './components/Form';
import FormPropsTextFields from './components/Message'
import Template from './components/Template';


function App() {
  return (
    <div>
      
      <NativeSelectDemo text="From"/>

   <div><NativeSelectDemo text="Customer Contact Point"/>
      
   </div>
      

      <FormPropsTextFields />
      <Template />
    </div>
  );
}

export default App;
