
import { combineReducers } from "redux";
// import {combineReducers} from '@reduxjs/toolkit';
import errorReducer from "./errorReducer";
import EventReducer from "./eventReducer";
import EventsReducer from "./eventsReducer";
import modalReducer from "./modelReducer";
import UserReducer from "../slicer/UserSlice";
import  DogReducer  from "../slicer/DogSlice"
import  AssignmentsReducer  from "../slicer/Assignments"
import  usersReducer  from "../slicer/Users"
import VolunteerReducer from "../slicer/VolunteerSlice";
import AdoptionReducer from "../slicer/DogReqSlice";




const rootReducer = combineReducers({
    event: EventReducer ,
    user: UserReducer,
    assignments: AssignmentsReducer,
    dogRequests: AdoptionReducer,
    users: usersReducer,
    dogs: DogReducer,
    volunteer: VolunteerReducer,
    events: EventsReducer,
    modalStatus: modalReducer,
    error: errorReducer
}) 

export default rootReducer;

