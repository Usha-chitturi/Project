import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcom from './hackthon/welcom'
import Admin from './hackthon/admin';
import User from './hackthon/user';
import Donor from './hackthon/donor';
import Userlog from './hackthon/userlog';
import Donorlog from './hackthon/donorlog';
import Dash from './hackthon/dashboard';
import Foodorder from'./hackthon/foodorder';
import Getorder from './hackthon/getorder';
import Donorpage from './hackthon/donorpage';
import Navbar from './hackthon/navbarhack';
import About from './hackthon/about';
import Contact from './hackthon/contact';
import Profile from './hackthon/profile';
import FoodDonate from './hackthon/fooddonate'
const router = createBrowserRouter([
  
  {path:'/',element:<Navbar/>,
  children:[
    { path: '/', element: <Welcom />},
    
    {path:'/admin',element:<Admin />},
    {path:'/user',element:<User />},
    {path:'/donor',element:<Donor />},
    {path:'/userlog',element:<Userlog />},
  {path:'/donorlog',element:<Donorlog/>},
  {path:'/dashboard',element:<Dash/>},
  {path:'/foodorder',element:<Foodorder/>},
  {path:'/getorder',element:<Getorder/>},
  {path:'/donorpage',element:<Donorpage/>},
  {path:'/about',element:<About/>},
  {path:'/contact',element:<Contact/>},
  {path:'/profile',element:<Profile/>}
]
},
  {path:'/fooddonate',element:<FoodDonate/>}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
