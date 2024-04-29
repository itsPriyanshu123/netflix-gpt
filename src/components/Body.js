import Header from "./Header"

import { createBrowserRouter } from "react-router-dom"
import Login from "./Login"



export default function (){
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:'/browse',
      element:<Header/>
    }
])
    return(
        <div>
            <Login/>
            
        </div>
    )
     
    
}