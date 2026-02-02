import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import GamesList from "./pages/GamesList/GamesList";
import GameDescription from "./pages/GameDescription/GameDescription";
import GameDetailPage from "./pages/GameDescriptionAlt/GameDetailPage";
import AddedGamesList from "./pages/AddedGames/AddedGamesList";
import { otherRoutes, routes } from "./utils/routes";
import Natale_25 from "./pages/Natale25/Natale25";

// const router = createBrowserRouter(
//   [
//     {
//       element: (
//         <div>
//           <Header />
//           <Outlet />
//         </div>
//       ),
//       children: [
//         { path: "/", element: <Home className="pageWithHeader" /> },
//         {
//           path: "/lista_giochi",
//           element: <GamesList className="pageWithHeader" />,
//         },
//         {
//           path: "/gioco/:gameId",
//           element: <GameDescription className="pageWithHeader" />,
//         },
//       ],
//     },
//   ],
//   { basename: "/board_game" }
// );
const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { path: routes.home, element: <Home className="pageWithHeader" /> },
      {
        path: routes.gameList,
        element: <GamesList className="pageWithHeader" />,
      },
      {
        path: routes.gameDetail(":gameId"),
        element: <GameDetailPage className="pageWithHeader" />,
      },
      {
        path: routes.bookedGames,
        element: <AddedGamesList className="pageWithHeader" />,
      },
    ],
  },
  {
    path: otherRoutes.home,
    element: <Natale_25 />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
