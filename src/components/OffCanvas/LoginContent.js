import React from 'react';
import OffCanvas from "../UI/OffCanvas"; 

const LoginRegister = () => {
    return (
        <OffCanvas type="cog"> 

            <div className="off-canvas-item">
                <div className="log-in-content-wrap">
                    <h2>Login</h2>
                    <div className="login-form mtn-15">
                        <form action="#" method="post">
                            <div className="form-input-item"> 
                                <input type="text" id="username" placeholder="Username" required/>
                            </div>

                            <div className="form-input-item"> 
                                <input type="password" id="password" placeholder="Password" required/>
                            </div>

                            <div className="form-input-item">
                                <button type="submit" className="btn-submit">Login</button>
                            </div>
                        </form>
                    </div>

                    <div className="sign-up-notification">
                        <p>Not Resisted? <a href="/">Create Account Now.</a></p>
                    </div>
                </div>
            </div>

        </OffCanvas>
    );
};

export default LoginRegister;