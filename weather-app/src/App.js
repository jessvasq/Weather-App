import './App.css';
import Search from './components/search/search';
import Weather from './components/weather/weather';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
     <Search onSearchChange={handleOnSearchChange}/>
     <Weather />
    </div>
  );
}

export default App;