import logo from './logo.svg';
import './App.css';
import ButtonCustom from './Components/Button/Button';
import LocationPage from './Components/LocationPage/LocationPage';
import { MessageProvider } from './Components/ContextApis/MessageContext';

function App() {
  return (
    <div className="App">
      <MessageProvider>
        <LocationPage />
      </MessageProvider>
    </div>
  );
}

export default App;
