import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Register as a Student</h3>
                </div>

                <form>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" />
                    </div>

                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" className="form-control" placeholder="Enter ID" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="password" className="form-control" placeholder="Enter Phone Number" />
                    </div>
                    <div className="form-group">
                        <label>Present Address</label>
                        <input type="password" className="form-control" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Enter confirm password" />
                    </div>

                    <button variant="primary" type="submit" className="btn btn-dark btn-lg btn-block ">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>
                </form>
            </div>
        );
    }
}