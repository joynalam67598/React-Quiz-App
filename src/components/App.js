import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from './pages/Result';
import React from 'react';

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/*<Login />*/}
      {/*<Quiz />*/}
      <Result />
    </Layout>
  );
}

export default App;