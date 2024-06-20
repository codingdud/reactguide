import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Statelogin from './components/statelogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
       {/*  <Login /> */}
        <Statelogin/>
      </main>
    </>
  );
}

export default App;
