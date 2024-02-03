import {React,lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import { Loading } from './Compenents/Preloading/Loading.jsx';
// import App from './App.jsx'
const App = lazy(()=> import('./App.jsx')) 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </Router>,
)
