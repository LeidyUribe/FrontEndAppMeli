import "./styles/App.scss";
import SearchPage from "./pages/searchPage/searchPage"
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchPage/>
      </header>
    </div>
  );
}

export default App;
