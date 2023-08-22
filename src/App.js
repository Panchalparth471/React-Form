import {useState } from "react";
import './App.css';


function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "India", add: "", city:"", state:"",postal:"",mode:"",comments:false, candidates:false, offers:false, pushNotifications:""})
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(
      (prev)=>({...prev,[name]:type === "checked" ? checked:value})
    )
  } 

   function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Personal Information</legend>
          <br/>
          <label htmlFor="firstName">First Name</label> <br/>
          <input type='text' placeholder='First Name' name="firstName" value={formData.firstName} id="firstName" className='outline' onChange={changeHandler}></input>
          <br /> 
          
          <label htmlFor="lastName">Last Name</label><br/>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} placeholder="Last Name" className='outline' onChange={changeHandler}>
          </input>
          <br/>

          <label htmlFor="email">Email Address</label><br/>
          <input type="email" placeholder="parth@abcd.com" value={formData.email} id="email" className="outline" onChange={changeHandler} name="email"></input><br />
          
          <label htmlFor="country">Country</label><br />
          <select name="country" id="country" value={formData.country} className="outline" onChange={changeHandler}>
            <option value="India" >India</option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Mexico">Mexico</option>
          </select>
          <br />
          
          <label htmlFor="add">Street Address</label><br />
          <input name="add" id="add" type="text" placeholder="Street Address" className="outline" onChange={changeHandler} value={formData.add}></input><br />
          
          <label htmlFor="city">City</label><br />
          <input type="text" name="city" id="city" placeholder="Deesa" className="outline" onChange={changeHandler} value={formData.city}></input><br />

           <label htmlFor="state">State/Province</label><br />
          <input type="text" name="state" id="state" placeholder="Gujarat" className="outline" onChange={changeHandler} value={formData.state}></input><br />

           <label htmlFor="postal">Postal</label><br />
          <input type="text" name="postal" id="city" placeholder="385535" className="outline" onChange={changeHandler} value={formData.postal}></input><br /> <br/>
          

        
          <fieldset>
            <legend>
              By Email
            </legend>
            <div className="flex">
              <input type="checkbox" name="comments" id="comments" onChange={changeHandler} checked={formData.comments}></input>
              <div>
                <label htmlFor="comments">Comments</label> 
              <p>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
           
            
            <div className="flex">
              <input type="checkbox" name="candidates" id="candidates" onChange={changeHandler} checked={formData.candidates}></input><br />
              <div>
                <label htmlFor="candidates">Candidates</label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>
           
            <div className="flex">
              <input type="checkbox" name="offers" id="offers" onChange={changeHandler} checked={formData.offers}></input><br />
              <div>
                  <label htmlFor="offers">Offers</label><br/>
    
            <p>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
          </div>
            

          </fieldset>
          <br/>  <br/>
          <fieldset>
            <legend>
              Push Notifications
            </legend>

            <h1>These are delivered via SMS to your mobile phone.</h1>
            <input type="radio" id="pushNotifications1" name="pushNotifications" value="Everything" onChange={changeHandler}></input>
            <label htmlFor="pushNotifications1">Everything</label><br />
      
            <input type="radio" id="pushNotifications2" name="pushNotifications" value="Same as Email" onChange={changeHandler}></input>
            <label htmlFor="pushNotifications2">Same as Email</label><br />

            <input type="radio" id="pushNotifications2" name="pushNotifications" value="No Push Notifications" onChange={changeHandler}></input>
            <label htmlFor="pushNotifications3">No Push Notifications</label><br />
      
            

          </fieldset>

          <div className="flex">
            <button className="text-white rounded-md bg-blue-800  w-[67px] h-[40px] text-center font-bold">
              Save
            </button>
         </div>
          

        </fieldset>
     </form>
    </div>
  );
}

export default App;
