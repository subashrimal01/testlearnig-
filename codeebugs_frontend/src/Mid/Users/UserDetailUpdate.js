
import { useLocation } from "react-router-dom";

function UserDetailUpdate() {

    const location = useLocation();


return (
    <section className="class-details-area pt-100 pb-70">
        <form className="login-form">
            <h1 className="mb-3">User Update</h1>
            <div className="form-input-material">
            <label htmlFor="username">Email</label>
                <input type="text" name="title" placeholder={location.state.email} className="form-control-material" required />
                
            </div>
            <div className="form-input-material" >
            <label htmlFor="password">Course Description</label>
                <textarea type="textarea" name="courseDescription" placeholder={location.state.description} className="form-control-material" required />
            </div>
            <button type="submit" className="btn btn-primary btn-ghost">Update</button>
        </form>
    </section>


)
}

export default UserDetailUpdate;