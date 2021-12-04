import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const App = function () {
  return (
    <div className="App">
      <PDFViewer style={{ width: '100%', height: '98vh' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default App;
