import axios from 'axios';
import React ,{useState} from 'react'
import Logo from '../../image/task.png'

export default function AjoutTask(){

  const [task_name , setTaskName] = useState("");
  const [description , setDescription] = useState("");
  const [startDate , setStartDate] = useState("");
  const [endDate , setEndDate] = useState("");
  const [formSubmit , setFormSubmit] = useState(false)
  const [participant , setParticipant] = useState("");
  const [priority , setPriority] = useState("");
  const [alarm , setTime] = useState("");

  const handleTaskRegister = async (e) =>{
    e.preventDefault();
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}task/add`,
      data: {
        task_name,
        description,
        priority,
        startDate,
        endDate,
        participant,
        alarm
      }
    })
      .then((res) =>{
        console.log(res);
        setFormSubmit(true);
      })
      .catch((err) => console.log('erreur'+ err));
  }

  return(
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body" id=""></div>


                <div className="content" style={{marginTop: 90, marginBottom: 100}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <img src={Logo} alt="Image" className="img-fluid" />
                      </div>
                      <div className="col-md-6 contents" style={{marginTop: 50 , textAlign: 'center'}}>
                        <div className="row justify-content-center">
                          <div className="col-md-8" style={{marginTop: '-10px'}}>
                            <div className="mb-4">
                            <h3 style={{fontWeight: 'bolder'}}>Inscription</h3>
                              <p className="mb-4">Bienvenue, veuillez-vous créer un task s'il vous plait.</p>
                            </div>
                            <form onSubmit={handleTaskRegister}>

                              <div className="form-group first">
                                <input 
                                  className="form-control" 
                                  type="text" 
                                  placeholder="Task name" 
                                  name="nom"
                                  onChange={(e) => setTaskName(e.target.value)}
                                  value={task_name}
                                />
                              </div>  
                              <div className="form-group first">
                                <input 
                                  className="form-control" 
                                  type="text" 
                                  placeholder="Description" 
                                  name="description" 
                                  onChange={(e) => setDescription(e.target.value)}
                                  value={description}
                                />
                              </div>
                              <div className="form-group first">
                                <input 
                                  className="form-control" 
                                  type="text" 
                                  placeholder="Date de debut" 
                                  name="date_debut" 
                                  onChange={(e) => setStartDate(e.target.value)}
                                  value={startDate}
                                />
                              </div>
                              <div className="form-group first">
                                <input 
                                  className="form-control" 
                                  type="text" 
                                  placeholder="Date de fin" 
                                  name="date_fin"
                                  onChange={(e) => setEndDate(e.target.value)}
                                  value={endDate} 
                                />
                              </div>
                              <div className="form-group last mb-4">
                                <input 
                                  className="form-control" 
                                  type="text" 
                                  placeholder="Participant" 
                                  name="participant"
                                  onChange={(e) => setParticipant(e.target.value)}
                                  value={participant} 
                                />
                              </div>
                              <div className="form-group last mb-4">
                                <input 
                                  className="form-control" 
                                  type="text" 
                                  placeholder="Priority" 
                                  name="priority"
                                  onChange={(e) => setPriority(e.target.value)}
                                  value={priority}
                                />
                              </div>
                              <div className="form-group last mb-4">
                                <input 
                                  className="form-control" 
                                  type="text" 
                                  placeholder="alarm" 
                                  name="time" 
                                  onChange={(e) => setTime(e.target.value)}
                                  value={alarm}
                                />
                              </div>

                              <input 
                                type="submit" 
                                id="btn" 
                                defaultValue="Valider" 
                                className="btn btn-block btn-primary" 
                                name="CreateUser" 
                                value="Valider" 
                              />
                              { formSubmit ?(
                                <h3>Votre tache est créé avec succes, veuillez checker dans la liste des taches</h3>
                              ) : (<></>)
                              }
                            </form>
                          </div>
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