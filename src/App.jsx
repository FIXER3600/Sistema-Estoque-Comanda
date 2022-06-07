import { Provider } from 'react-redux';
 import  store  from './app/store';
 import AppRoutes from './routes/routes';
function App() {
  return (
    <div>
     <Provider  store={store}>
   <AppRoutes/>
  </Provider>
    </div>
  )
}

export default App
