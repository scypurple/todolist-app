import Add from './components/Add';
import Footer from './components/Footer';
import List from './components/List';
import './App.css'

function App() {
  return (
    <div className="todo-container">
    <div className="todo-wrap">
      <Add />
      <List />
      <Footer />
    </div>
  </div>
  );
}

export default App;
