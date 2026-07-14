import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'




const ViewTeam = () => {
    const [data,changeData] = useState([])
    const fetchData =()=>{
        axios.get("http://localhost:3000/view-data").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        },[]
    )
  return (
    <div>
        <Nav/>

            <div className="container mt-4">
        <h2 className="text-center mb-4">
          <b>View Team</b>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Team ID</th>
              <th scope="col">Team Name</th>
              <th scope="col">Team Leader Name</th>
              <th scope="col">Team Leader Email</th>
              <th scope="col">Team Leader Phone</th>
              <th scope="col">College Name</th>
              <th scope="col">N.O Members</th>
              <th scope="col">Project Title</th>
              <th scope="col">Problem Statement</th>
              <th scope="col">Technology Stack</th>
              <th scope="col">Mentor Name</th>
              <th scope="col">Registration Date</th>
              <th scope="col">Table Number</th>
            </tr>
          </thead>
          
                <tbody>
                  {
                    data.map
                    (
                        (value,index)=>{
                            return(
                                <tr>
                                    <td>{value.Teamid}</td>
                                    <td>{value.Teamname}</td>
                                    <td>{value.Teamleadername}</td>
                                    <td>{value.Leaderemail}</td>
                                    <td>{value.LeaderPhone}</td>
                                    <td>{value.Collegename}</td>
                                    <td>{value.Nomembers}</td>
                                    <td>{value.Projecttitle}</td>
                                    <td>{value.Problemstatement}</td>
                                    <td>{value.Technologystack}</td>
                                    <td>{value.Mentorname}</td>
                                    <td>{value.Regdate}</td>
                                    <td>{value.Tableno}</td>
                                </tr>
                            )
                        }

                    )}
          </tbody>
             
          
        </table>
      </div>


    </div>
  )
}

export default ViewTeam;