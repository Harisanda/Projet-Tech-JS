import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
export default function GestionUser() {

    const [tasks , setTasks] = useState([]);

    const getTasks = async () =>{
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}task/`);
            const jsonData = await response.json();
    
            setTasks(jsonData);   
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() =>{
        getTasks();
    })
    // console.log(tasks);
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body" id="">

                            <div class="row">
                                <div class="card-header">
                                    <h4 class="card-title faire"> Tous les tâches</h4>
                                </div>

                                <div class="card card-body tabel-responsive">
                                    <a class="btn btn-primary btn-sm btn-block" style={{ color: 'white' }}>Liste des tâches</a>
                                    <table class="table table-sm table-striped table-bordered table-hover" >
                                        <thead class="text-primary bg-info">
                                            <tr>
                                                <th>Nom</th>
                                                <th>Description</th>
                                                <th>Createur</th>
                                                {/* <th>Participants</th> */}
                                                <th>Date de debut</th>
                                                <th>Date de fin</th>
                                                <th>Priorité</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tasks.map(task =>(
                                                <tr>
                                                    <td>{task.task_name}</td>
                                                    <td>{task.description}</td>
                                                    <td>{task.creator}</td>
                                                    {/* <td>{task.participants}</td> */}
                                                    <td>{task.startdate}</td>
                                                    <td>{task.enddate}</td>
                                                    <td>{task.priority}</td>
                                                    
                                                    <td>
                                                        <td>
                                                            <Link class="btn btn-sm btn-primary text-white" to="/base/dashboard">Voir</Link>
                                                        </td>
                                                        <td>
                                                            <Link class="btn btn-sm btn-info text-white" to="/base/dashboard">Modifier</Link>
                                                        </td>
                                                        <td>
                                                            <Link class="btn btn-sm btn-danger text-white" to="/base/dashboard">Supprimer</Link>
                                                        </td>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                {/* <td>Login</td>
                                                    <td>Avec une photos</td>
                                                    <td>Joachin</td>
                                                    <td>Joachin et Sanda</td>
                                                    <td>27/09/2022</td>
                                                    <td>30/09/2022</td>
                                                    <td>1</td> */}

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
