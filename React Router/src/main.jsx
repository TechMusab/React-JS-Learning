import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import {Createpostaction} from './components/createpost.jsx';
import Postlist from './components/postlist.jsx';
import Createpost from './components/createpost.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
    {  path:'/createpost',element:<Createpost />,action:Createpostaction},
    {  path:'/posts',element:<Postlist />}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
//chanllenges faced
/*
1.How is router working 
2.when i update the post the app component rerenders with neew value of post and also pass the value to components which are conditionally rendering
its my confusion hahaha
so the understanding is this when i reload my app with / path it is rendering the app component passing all the values to children using context api and all the children renders with the values but not showing becuse i am rendering based on urls. so when /createpost is clicked it wil show create post which is already rendered but not showing when i click /posts it will go to posts showing posts which already rendered.
faced problem of whole app reloding when i used router solved by using Link to instead of anchor tag
//we can can load data before the component is rendere by using
loader agter element like that loader: expects ftn that return promise or data when data is avaliable component is rerendered based on that data
you can use Useloader to lo load returneed data in that componenet
action method can be called when form is submitted
//use router action for form insted of useref for handling inputs
*/
