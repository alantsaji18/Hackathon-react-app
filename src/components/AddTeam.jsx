import axios from 'axios'
import React, { useEffect, useState } from 'react'





const AddTeam = () => {

    const [input, changeInput] = useState({
        Teamid: "",
        Teamname: "",
        Teamleadername: "",
        Leaderemail: "",
        Leaderphone: "",
        Collegename: "",
        Nomembers: "",
        Projecttitle: "",
        Problemstatement: "",
        Technologystack: "",
        Mentorname: "",
        Regdate: "",
        Tableno: ""
    })


    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input);

        axios.post("http://localhost:3000/add-data", input)
            .then((response) => {
                console.log(response.data);
                alert("Student Added Successfully");
            })
            .catch((error) => {
                console.log(error.response.data);
                console.log(error.response.status);
            });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <br></br>
                    <h1><strong>Hackathon Team</strong></h1>
                    <br></br>
                    <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Team ID</label>
                                <input type="text"
                                    className="form-control"
                                    name="Teamid"
                                    value={input.Teamid}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Team Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="Teamname"
                                    value={input.Teamname}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Team Leader Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="Teamleadername"
                                    value={input.Teamleadername}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Team Leader Email</label>
                                <input type="text"
                                    className="form-control"
                                    name="Leaderemail"
                                    value={input.Leaderemail}
                                    onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Team Leader Phone</label>
                                <input type="text"
                                    className="form-control"
                                    name="Leaderphone"
                                    value={input.Leaderphone}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">College Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="Collegename"
                                    value={input.Collegename}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">No Members</label>
                                <input type="text"
                                    className="form-control"
                                    name="Nomembers"
                                    value={input.Nomembers}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Project Title</label>
                                <input type="text"
                                    className="form-control"
                                    name="Projecttitle"
                                    value={input.Projecttitle}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Problem Statement</label>
                                <input type="text"
                                    className="form-control"
                                    name="Problemstatement"
                                    value={input.Problemstatement}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Technology Stack</label>
                                <input type="text"
                                    className="form-control"
                                    name="Technologystack"
                                    value={input.Technologystack}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Mentor Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="Mentorname"
                                    value={input.Mentorname}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                                <label className="form-label">Registration  Date</label>
                                <input type="text"
                                    className="form-control"
                                    name="Regdate"
                                    value={input.Regdate}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12-col-xxl-12">
                                <label className="form-label">Table No</label>
                                <input type="text"
                                    className="form-control"
                                    name="Tableno"
                                    value={input.Tableno}
                                    onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTeam