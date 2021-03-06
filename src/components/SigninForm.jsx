import React from 'react'
import './style/SigninForm.css'
import Button from './MainButton'

class SigninForm extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="SigninForm m-5">
                    <form action="">
                        <div className="form-group mb-2">
                            <h1>Sign Up</h1>
                            <label className="mb-1">
                                Name
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            name="register_name"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Last Name
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            name="register_last_name"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                E-mail
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            name="email"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            name="password"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            name="city"/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Date of Birth
                            </label>
                            <input
                            type="date"
                            className="form-control"
                            name="date_of_birth"/>
                        </div>
                        <div className="form-group mb-2">
                            <p>Already have an account? <a href="">Login</a></p>
                        </div>
                        <Button theme={"Button"} contentText={'Sign up'} link={"/login"}></Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SigninForm