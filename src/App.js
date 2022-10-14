// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import Home from './components/Home';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Footer from './components/Footer';
import Crud from './components/Crud';
import Assignment from './components/Assignment';

function App() {
  return (
    <>
      {/* <NavBar></NavBar> */}
      {/* <TextArea title="Enter the text to analyze"></TextArea> */}

      <Router>
        <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<TextArea  title="Enter the text to analyze" />} />
            <Route exact path="/TextArea" element={<TextArea  title="Enter the text to analyze" />} />
            <Route exact path="/AboutUs" element={<About />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/News" element={< News />}/>
            <Route exact path="/Crud" element={< Crud />} />
            <Route exact path="/Assignment" element={< Assignment />} />
            {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
          {/* <Footer></Footer> */}
      </Router>
    </>
  );
}

export default App;
