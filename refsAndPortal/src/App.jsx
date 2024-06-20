import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
import Error from './components/Error.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="game" targetTime={1} />
        <TimerChallenge title="Not Eassy" targetTime={10} />
        <TimerChallenge title="Getting Tough" targetTime={15} />
        <TimerChallenge title="pros only" targetTime={20} />
        <Error
        title="oops!"
        />
      </div>
    </>
  );
}

export default App;
