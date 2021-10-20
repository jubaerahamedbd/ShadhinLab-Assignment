import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";
import { Country, State, City }  from 'country-state-city';

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])
    console.log(Country.getAllCountries())
    console.log(State.getAllStates())
    const loadUsers = async () => {
        const result = await axios.get("https://60f2479f6d44f300177885e6.mockapi.io/users")
        setUsers(result.data.reverse())
    }
    const deleteUser = async id => {
        await axios.delete(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`)
        loadUsers();
    }

    return (
        <div className="container">
        <div className="top">
        <h3 >Users List</h3>
                <Link className="btn btn-outline-dark col-md-3 " id="addUser" to="/user/add">Add User</Link>
        </div>
                


            <hr />

            <table class="table table-striped text-center shadow">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Division</th>
                        <th scope="col">District</th>
                        <th scope="col">User Type</th>
                        <th scope="col">Details View</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map((user, index) => (

                            <tr>
                                <td>{user.first_name}</td>
                                <td>{user.last_name} </td>
                                <td>{user.division}</td>
                                <td>{user.district}</td>
                                <td>{user.user_type}</td>
                                <td><Link className="btn btn-primary mx-2" to={`/user/${user.id}`}>Details</Link>
                                    <Link className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>

                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Home;