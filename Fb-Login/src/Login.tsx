import './Login.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function Login() {
    return (
        <>
        
        <div className="content">
            <div className="flex-div">
            <div className='container'>
                <div className='row'>           
                    <div className='col-lg-6 col-sm-12'>
                        <div className="name-content">
                            <h1 className="logo">Facebook</h1>
                            <p>Facebook helps you connect and share with the people in your life.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <form>
                            <input type="email" className="form-control" placeholder="Email or Phone Number"></input>
                            <input type="password" className="form-control" placeholder="Password"></input>
                            <button className="login">Log In</button>
                            <div className='ar'>
                                <a href="#">Forgot Password ?</a>
                            </div>

                            <hr />
                            <button className="create-account">Create New Account</button>
                            <div className='pr2 mt-2'>
                                <a href=""> create page</a>
                                for a celebrity, brand or business.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Login