import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const AddUser = () => {
    let history = useHistory()
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        user_type: "",
        division: "",
        district: ""
    })
    const { first_name, last_name, user_type, division, district } = user
    const OnInputChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("https://60f2479f6d44f300177885e6.mockapi.io/users", user)
        history.push("/")
    }

    return (
        <div className="container">
            <div className="col-md-8 updateUser">
                <div className="top">
                    <h2>Add User</h2>
                    <Link className="btn btn-outline-dark col-md-6" id="addUser" to="/">Back To User List</Link>
                </div>
                <hr />
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group row my-2">

                        <label class="col-sm-3 col-form-label col-form-label-sm">First Name:</label>

                        <div class="col-sm-9" >
                            <input
                                class="col-sm-9"
                                type="text"
                                class="form-control"
                                name="first_name"
                                value={first_name}
                                placeholder="Enter First Name"
                                onChange={e => OnInputChange(e)}
                            />
                        </div>
                    </div>
                    <div class="form-group row my-2">

                        <label class="col-sm-3 col-form-label col-form-label-sm">Last Name</label>
                        <div class="col-sm-9" >
                            <input
                                type="text"
                                class="form-control"
                                name="last_name"
                                value={last_name}
                                placeholder="Enter Last Name"
                                onChange={e => OnInputChange(e)}
                            />
                        </div>

                    </div>
                    <div class="form-group row my-2">
                        <label class="col-sm-3 col-form-label col-form-label-sm">Division</label>
                        <div class="col-sm-9">
                            <input
                                type="text"
                                class="form-control"
                                name="division"
                                value={division}
                                placeholder="Enter Division"
                                onChange={e => OnInputChange(e)}
                            />
                        </div>

                    </div>
                    <div class="form-group row my-2">
                        <label class="col-sm-3 col-form-label col-form-label-sm">District</label>
                        <div class="col-sm-9">
                            <input
                                type="text"
                                class="form-control"
                                name="district"
                                value={district}
                                placeholder="Enter District"
                                onChange={e => OnInputChange(e)}
                            />
                        </div>

                    </div>
                    <div class="form-group row my-2">
                        <label class="col-sm-3 col-form-label col-form-label-sm"    >User Type</label>
                        <div class="col-sm-9">
                            <input
                                type="text"
                                class="form-control"
                                name="user_type"
                                value={user_type}
                                placeholder="Enter User Type"
                                onChange={e => OnInputChange(e)}
                            />
                            <select class="form-control form-control-sm">
                                <option>admin</option>
                                <option>employee</option>
                            </select>
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary updatebtn">Update Confirm</button>
                </form>
            </div>

        </div>
    )
}

export default AddUser;