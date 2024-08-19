import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Utility/Provider/ProviderContext';
const Login = () => {
    const {LogIn}=useContext(AuthContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        //singIn
        LogIn(email,password)
        .then(res=>{
            console.log(res)
            form.reset();
        })
        .catch(error=>console.log(error.message))
    }
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center">
            <img src={login} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name='email'
                  autoComplete='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name='password'
                  className="input input-bordered"
                  autoComplete='current-password'
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-orange-600 text-white">Sign In</button>
              </div>
            </form>
            <p className='text-center py-2'>
                New to Car Doctor ? <Link className='link link-hover text-orange-600 font-bold' to="/signUp">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;