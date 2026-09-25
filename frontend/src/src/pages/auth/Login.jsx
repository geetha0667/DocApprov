function Login()
{
    return(
        <div className="page">
        <div className="login">
            <h1>Docapprov</h1>
            <h5>College doc management system</h5>
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>College mail</label>
            <input type="email" placeholder="college email"/>
            </div>
            <div className="form-group">
                <label>Password</label>
            <input type="password" placeholder="password"/>
            </div>
            <button type="submit" className="login-button">Login</button>
            </form>
        </div>
        </div>
    )
}
export default Login;