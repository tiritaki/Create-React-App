import logo from './logo.svg';
import './App.css';
import ExpenseItem from './componens/ExpenseItem';

function App() {
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
