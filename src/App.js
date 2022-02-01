import Form from './components/Form';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import DisplayData from './components/DisplayData';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Form />
      <DisplayData />
    </div>
    </Provider>
  );
}

export default App;
