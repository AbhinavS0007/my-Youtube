import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import WatchConPage from "./components/WatchConPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainVideoCon from "./components/MainVideoCon";



function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      children: [
        {
          path:"/",
          element: <MainVideoCon />,
        },
        {
          path:"/watch",
          element: <WatchConPage />,
        },
      ]
    }
  ])
  return (
    <Provider store={appStore}>
      <div className="">
        <Header />
        
        <RouterProvider router = {appRouter} />

      </div>
    </Provider>
  );
}

export default App;
