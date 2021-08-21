import React from "react"
import image from './assets/newimg.jpg';
import './App.css'
const App = () => {
  return (

    <div className="container bg-success d-flex justify-content-between">

      <div>
        hii
      </div>
      <div className="card  justify-content-center align-items-center" style={{width:"471px",backgroundColor:"green"}}>
      <h3>contact us</h3>
        <form className="" style={{ maxWidth:"416px" }}>
          <div className="form-row">
            <div className="input-group col-md-6 box" >
            <label>firstname</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="input-group col-md-6 box">
            <label>lastname</label>
              <input type="password" className="form-control" id="inputPassword4"  />
            </div>
          </div>
          <div className="input-group box">
          <label>country</label>
            <select id="inputState" className="form-control">
      
              <option>...</option>
            </select>
          </div>
        </form>
        <button type="submit" className="btn btn-primary"><span>hii</span>Submit</button>

        </div>
      </div>



  )
}
export default App;

