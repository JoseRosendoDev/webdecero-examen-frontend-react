import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/Profile';
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/profile", element: <Profile /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}  />
    </div>
  );
}

export default App;
