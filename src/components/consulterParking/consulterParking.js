import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
class GestionUser extends React.Component{
    render(){
        return(
            <>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body" id="">

                                <div class="row">
                                    <div class="card-header">
                                        <h4 class="card-title faire"> Tous les Parkings</h4>
                                    </div>
                                    
                                    <div class="card card-body tabel-responsive">
                                        <a class="btn btn-primary btn-sm btn-block" style={{color:'white'}}>Liste des Parkings</a>
                                        <table class="table table-sm table-striped table-bordered table-hover" >
                                            <thead class="text-primary bg-info">
                                                <tr>
                                                    <th>Nom du parking</th>
                                                    <th>Téléphone</th>
                                                    <th>Lot</th>
                                                    <th>Place libre</th>
                                                    <th>Place occupé</th>
                                                    <th>Place total</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                            
                                                <tr>
                                                    <td>Mlay</td>
                                                    <td>034 02 560 23</td>
                                                    <td>LS 23 SIS Ambohipo</td>
                                                    <td>12 moto et 5 car</td>
                                                    <td>101</td>
                                                    <td>118</td>
                                                    
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
                                                <tr>
                                                    <td>Mlay</td>
                                                    <td>034 02 560 23</td>
                                                    <td>LS 23 SIS Ambohipo</td>
                                                    <td>12 moto et 5 car</td>
                                                    <td>101</td>
                                                    <td>118</td>
                                                    
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
                                                <tr>
                                                    <td>Mlay</td>
                                                    <td>034 02 560 23</td>
                                                    <td>LS 23 SIS Ambohipo</td>
                                                    <td>12 moto et 5 car</td>
                                                    <td>101</td>
                                                    <td>118</td>
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
                                                <tr>
                                                    <td>Mlay</td>
                                                    <td>034 02 560 23</td>
                                                    <td>LS 23 SIS Ambohipo</td>
                                                    <td>12 moto et 5 car</td>
                                                    <td>101</td>
                                                    <td>118</td>
                                                    
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
                                                <tr>
                                                    <td>Mlay</td>
                                                    <td>034 02 560 23</td>
                                                    <td>LS 23 SIS Ambohipo</td>
                                                    <td>12 moto et 5 car</td>
                                                    <td>101</td>
                                                    <td>118</td>

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
}
export default GestionUser