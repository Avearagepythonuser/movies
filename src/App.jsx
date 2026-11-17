import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";
import { SearchMedia } from "./pages/SearchMedia";
import { TVShows } from "./pages/TVShows";

const myRouter = createBrowserRouter([
	{
		element: <Header />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/movies", element: <Movies /> },
			{ path: "/search", element: <SearchMedia /> },
			{ path: "/tv", element: <TVShows /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

function App() {
	return (
		<RouterProvider router={myRouter}/>
	);
}

export default App;
