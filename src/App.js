import MainTitle from 'components/mainTitle';
import './App.scss';
import Header from 'components/header';
import Consultation from 'components/consultation';
import Statistics from 'components/statistics';


function App() {
  return (
    <div className="App">
      <Header />
      <MainTitle />
      <Consultation />
      <Statistics />
    </div>
  );
}

export default App;
