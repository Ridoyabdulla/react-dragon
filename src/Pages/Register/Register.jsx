import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser }= useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget); 
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password');

        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
           })
        .catch(error => console.error(error));
  }
    return (
        <div>
            <Navbar></Navbar>
           <div>
           <h2 className="text-2xl my-10 text-center">Please Register</h2>

    <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
    <div className="form-control">
   <label className="label">
    <span className="label-text">Name</span>
    </label>

   <input type="text"  
    placeholder="name" name="name"
   className="input input-bordered" required />
   </div>
   <div className="form-control">
   <label className="label">
   <span className="label-text">Photo URL</span>
   </label>

   <input type="text"
    placeholder="photo URL" 
     name="photo"className="input input-bordered"
      required />
   <label className="label">
   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
   </label>
   </div>
   <div className="form-control">

           <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

   <div className="form-control mt-6">
   <button className="btn btn-primary">Register</button>
   </div>
   </form>

   <p className="text-center mt-4">Already have an Account?
    <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>

           </div>
        </div>
    );
};

export default Register;