import { useEffect, useState } from 'react';

import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import NewNavbar from './Components/navbar/Navbar';
import AdoptionPanel from './pages/adoption/AdoptionPanel';
// import AppointmentsPanel from './pages/appointments/AppointmentsPanel';
import CaringPanel from './pages/caring/CaringPanel';
import RegisterInspector from './pages/register/RegisterInspector';
import { Route, Routes, Link} from "react-router-dom"
import MyCalendar from "./Components/calendar/Calendar";
import "./Components/calendar//style/global.scss"
import AddEvents from "./Components/calendar/AddEvents";
import UpdateEvent from "./Components/calendar/UpdateEvent";import DogPage from './pages/DogPage/DogPage';
import { publicRequest } from './requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import { selectDog, updateDogData } from './Redux/slicer/DogSlice';

function App() {

  const [pannel, setPannel] = useState("")
  useEffect(()=>{
    const getDogs = () => {
        publicRequest.get(`/api/dogs`)
            .then((res) => {
                res.data && dispatch(updateDogData(res.data))
            })
            .catch((err) => console.log(err));
    }
    getDogs()
},[])
const dispatch = useDispatch()
const dogs = useSelector(selectDog)

  return (
    <div className="App">
      <NewNavbar setPannel={setPannel}/>
      <Dashboard/>
        <Routes>
              <Route path='/' element={<Dashboard/>} />

              <Route path="/adoption" element={<AdoptionPanel/>}/>
              {dogs.map((dog, index) => {
                return(
                  // <Route path={`/adoption/${dog._id}`} element={<DogPage dog={dog}/>}/>
                  <Route path={"/adoption/" + dog._id} element={<DogPage dog={dog}/>}/>
                )
                })}


                
              {/* <Route path="/adoption/dogpage" element={<DogPage/>}/> */}

              <Route path="/reports" element={<ReportsPanel/>}/>
              <Route path="/reports" element={<ReportsPanel/>}/>

              <Route path="/calendar" exact element={<MyCalendar calendarHeight={450} toolbarDisplay={true} margincalendar={50}/>} />
              <Route path="/events/add" element={<AddEvents/>}/>
              <Route path="/event/:id/update" element={<UpdateEvent/>}/>



              <Route path="/register" element={<RegisterInspector/>}/>
        </Routes>
      </div> 
        {/* <nav className="navbar navbar-light bg-light">
          <div className="container-fluid align-items-center">
            <Link className="navbar-brand ms-2" to="/">
              <h3>Agenda</h3>
            </Link>
            <span className="navbar-brand mb-0 h2 ">
              <Link className="nav-link pe-0 " to={"/events/add"}>Add Event</Link>
            </span> 
          </div>
        </nav> */}
    </div>
  );
}

export default App;
