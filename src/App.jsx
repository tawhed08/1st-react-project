import Meherab from './components/Meherab';
import Rafsan from './components/Rafsan';

function App({name,number}) {
  return (
    <>
    <Rafsan name={name} number={number} />
    <Meherab name={name} number={number} />
    </>
  );
}

export default App;