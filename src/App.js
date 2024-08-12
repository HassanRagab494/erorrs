import Home from "./pages/Home/Home";
import Root from "./pages/Root";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "./pages/Create/Create";
import Profile from "pages/profile/profile";
import NotFound from "pages/NotFound";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="Create" element={<Create />} />
      <Route  path="profile" element={<Profile/>} />
      <Route path="*" element={<NotFound/>} />
    
      {/* ... etc. */}
    </Route>
  )
);




function App() {
  return (


    
      <RouterProvider  router={router} />
  
  
  );
}

export default App;