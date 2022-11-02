import React from 'react';
import {Routes, Route} from 'react-router-dom'
import ConsulterAgent from './consulterAgent/consulterAgent'
// import ConsulterParking from './consulterParking/consulterParking'
import Base from './nav/Base'
import Login from './login/Login'
// import Acceuil from './dashboard/dashboard'
import AddUser from './addUser/addUser'
import AjoutTask from './ajoutTask/ajoutTask' 
import Calender from './calendrier/calender';

class App extends React.Component{
    render(){
        return(
            <section>
                <Routes>
                    <Route path="/" name='Login' element={<Login/>} initialRouteName='Login'/>
                    <Route path="/signUp" name='inscription' element={<AddUser/>}/>
                    <Route path="/acceuil" element={<Base/>}>
                        {/* <Route path="/base/Acceuil" name='Accueil' element={<Acceuil/>}/> */}
                        <Route path="/acceuil/" name='ConsulterAgent' element={<ConsulterAgent/>}/>
                        {/* <Route path="/base/consulterParking" name='ConsulterParking' element={<ConsulterParking/>}/> */}
                        <Route path="/acceuil/ajoutTask" name='ajoutTask' element={<AjoutTask/>}/>
                        <Route path="/acceuil/calender" name="calender" element={<Calender/>}/>
                    </Route>
                </Routes>  
            </section>
        )
    }
}
export default App