import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Notify, { ValueContext } from "../../../../Context/Context";

const Profile = () => {
  const data = useContext(ValueContext);
  const Notifys = useMemo(() => {
    return <Notify />;
  },[Notify])
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent text-center">
                <img
                  className="profile_img"
                  src="data:image/jpeg;base64,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"
                  alt="Pharmacy Logo"
                />
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong className="pr-1">Pharmacy Name:</strong>{" "}
                  {data && data.hospitalname}
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Address:</strong>
                  {data && data.Address}
                </p>
                <p className="mb-0">
                  <strong className="pr-1">State:</strong>
                  {data && data.State}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>General Information
                </h3>
              </div>
              <div className="card-body pt-0">
                <table className="table table-bordered">
                  <tr>
                    <th style={{ width: "30%" }}>GST No</th>
                    <td width="2%">:</td>
                    <td>{data && data.Gstno}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Contact No</th>
                    <td width="2%">:</td>
                    <td>{data && data.contactno}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Starting Year</th>
                    <td width="2%">:</td>
                    <td>{data && data.startingyear}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Branches</th>
                    <td width="2%">:</td>
                    <td>{data && data.branches}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Special In</th>
                    <td width="2%">:</td>
                    <td>{data && data.specialin}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div style={{ height: "26px" }}></div>
            <div className="card shadow-sm">
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>Other Information
                </h3>
              </div>
              <div className="card-body pt-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/admin_dashboard">
        <button className="btn btn-info">Back To Dashboard</button>
      </Link>
      {Notifys}
    </div>
  );
};

export default Profile;
