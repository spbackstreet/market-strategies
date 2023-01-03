import React from 'react'
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const App = () => {
  const [fullName, setFullName] = React.useState('')
  window.addEventListener("beforeunload", (ev) => {
    localStorage.clear()
  });
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<LoginPage setFullName={setFullName} />} />
          <Route exact path='/Dashboard' element={<Dashboard fullName={fullName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App