import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Armstrong from "./armstrong"
import Even from "./even"
import Palindrome from "./palindrome"
import Navbar from "./navbar"
import Vowels from "./vowels"
import Prime from "./prime"
import Consonants from "./consonants"
import Temp from "./temp"

const App =()=> {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Even/></>,
    },
    {
      path:"/armstrong",
      element:<><Navbar/><Armstrong/></>,
    },
    {
      path:"/palindrome",
      element:<><Navbar/><Palindrome/></>,
    },
    {
      path:"/vowels",
      element:<><Navbar/><Vowels/></>,
    },
     {
       path:"/prime",
       element:<><Navbar/><Prime/></>,
     },
     {
      path:"/consonants",
      element:<><Navbar/><Consonants/></>,
    },
    {
      path:"/temp",
      element:<><Navbar/><Temp/></>,
    },
  ])
 return(
  <>
   <RouterProvider router={router}/>
  </>
 );


};

export default App;
