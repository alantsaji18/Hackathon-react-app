import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const ViewTeam = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view-data")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <Nav />

      <h2 className="text-center mt-3 mb-3">Team Details</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover w-100">
          <thead className="table-dark text-center">
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Leader Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>College</th>
              <th>No. Members</th>
              <th>Project Title</th>
              <th>Problem Statement</th>
              <th>Tech Stack</th>
              <th>Mentor</th>
              <th>Reg Date</th>
              <th>Table No</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {data.length > 0 ? (
              data.map((value, index) => (
                <tr key={index}>
                  <td>{value.teamid}</td>
                  <td>{value.teamname}</td>
                  <td>{value.teamleadername}</td>
                  <td>{value.leaderemail}</td>
                  <td>{value.leaderphone}</td>
                  <td>{value.collegename}</td>
                  <td>{value.nomembers}</td>
                  <td>{value.projecttitle}</td>
                  <td>{value.problemstatement}</td>
                  <td>{value.technologystack}</td>
                  <td>{value.mentorname}</td>
                  <td>{value.regdate}</td>
                  <td>{value.tableno}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTeam;