import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import ContactPage from "./Pages/ContactPage";
import FeaturesPage from "./Pages/FeaturesPage";
import HomePage from "./Pages/HomePage";

function App() {
  const Mainrouter = createBrowserRouter(
  [
    {path: '/', element: <Main />, children: [
      {index: true, element: <HomePage/>},
      {path: 'features', element: <FeaturesPage/> },
      {path:'contact', element: <ContactPage/>}
    ]}
  ]
  )
  return <RouterProvider router={Mainrouter}/>
}

export default App;
