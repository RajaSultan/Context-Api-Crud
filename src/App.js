import "./App.css";
import { AddMovie } from "./components/AddMovie";
import { MovieProvider } from "./components/MovieContext";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </>
  );
}

export default App;
