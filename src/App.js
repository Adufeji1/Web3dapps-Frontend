import './App.css';
import Heading from './Components/Heading/Heading';
import Sidebar from './Components/Sidebar/Sidebar';
import Body from './Components/Body/Body';
import Edit from './Components/Edit/Edit';


const App = () => {
  return (
    <>
    <div className='App'>
      <Heading />
      <Sidebar />
      <Body />
      <Edit />
    </div>
    </>
  )
}

export default App;