import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskManagement from '../pages/task';

const AppRoutes=()=>{

    

    return (
        <Routes>
            <Route path='/task' element={<TaskManagement/>}/>
        </Routes>
    )
}

export default AppRoutes;