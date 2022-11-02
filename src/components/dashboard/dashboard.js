import React from 'react'
import {useParams} from 'react-router-dom'
import Logo from '../../image/task.png'

export default function User(){
    const params = useParams()
    
    return(
        <div>      
            <div className="row">
                <div className="col-md-12">
                <div className="card">
                        <div className="card-body" id="">

                            <div className="row" style={{textAlign:'center'}}>
                                <h1 style={{fontWeight: 'inherit' , color:'burlywood'}}> Detail de l'Information</h1>
                            </div>
                            <div className='row container'>
                                <hr/>
                            </div>

                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-body">
                                        <h6><b>Parking :</b></h6>
                                        <hr />
                                        <h1 style={{textAlign: 'center', padding: 10}}>12</h1>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="card card-body" style={{backgroundColor: '#888', color: 'white'}}>
                                        <h6 style={{}}><b>Clients: </b></h6>
                                        <hr />
                                        <h1 style={{textAlign: 'center', padding: 10}}>30</h1>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="card card-body" style={{backgroundColor: '#f96332', color: 'white'}}>
                                        <h6><b>Tomobile :</b></h6>
                                        <hr />
                                        <h1 style={{textAlign: 'center', padding: 10}}>6</h1>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="card card-body" style={{backgroundColor: '#18ce0f', color: 'white'}}>
                                        <h6><b>Moto :</b></h6>
                                        <hr />
                                        <h1 style={{textAlign: 'center', padding: 10}}>24</h1>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <div className="row container">
                                <hr/>
                            </div>

                            <br />

                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-body table-responsive">
                                        <a className="btn btn-primary btn-sm btn-block" style={{marginBottom: 20, color: '#eee'}}>Plus d'Information</a>
                                        
                                        <table className="table table-sm table-striped table-hover" id="tabeDe">
                                            <thead className="text-primary">
                                                <tr>
                                                    <th>Revenue total</th>
                                                    <th>Revenue à estimer</th>
                                                    <th>Moto</th>
                                                    <th>Tomobile</th>
                                                    <th>Autres</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1200.000 Ar</td>
                                                    <td>50.000 Ar</td>
                                                    <td>20</td>
                                                    <td>6</td>
                                                    <td>5</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}