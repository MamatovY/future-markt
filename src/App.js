import MainTitle from 'components/mainTitle';
import './App.scss';
import Header from 'components/header';
import Consultation from 'components/consultation';
import Statistics from 'components/statistics';
import mentor from 'assets/img/mentor.png'


function App() {
  return (
    <div className="App">

      <div className="container">
        <Header />
        <MainTitle />
        <Consultation />
        <Statistics />
      </div>
      <div className="mentor">
        <img src={mentor} alt="Ментор" />
      </div>
    </div>
  );
}

export default App;
