import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from './App';
import Register from './Register';
import Login from './Login';
import Members from './Members';
import Maps from './Maps';
import CreateEvent from './CreateEvent';

const URLRoutes = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        
        <Route path="/register" element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/members" element = {<Members/>}/>
        <Route path="/createEvent" element = {<CreateEvent/>}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
        }
        />
        </Route>
        <Route path="/map" element = {<Maps/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default URLRoutes;