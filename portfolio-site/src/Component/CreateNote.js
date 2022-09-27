import React, {useState}from 'react'
import axios from 'axios';
import validator from 'validator';
import './CreateNote.css';
const CreateNote = () => {
    const [input, setinput] = useState({title:'',email:'',content:''})
    const [show, setshow] = useState(false)
    const [emailvalid, setemailvalid] = useState(false)
    function handleClick(event){
        event.preventDefault();
        if(validator.isEmail(input.email)){
            console.log("valid mail")
            const newNote={
                title:input.title,
                email:input.email,
                content:input.content
    
            }
            setshow(true);
            setemailvalid(false);
        axios.post('/create',newNote)
        }
        else{
            setemailvalid(true);
        }
        
        

    }
    function handleChange(event){
        const {name,value}=event.target;
        setinput(prevInput=>{
            return{
                 ...prevInput,[name]:value
            }
        })
    }
    return (
        <div className="body-container">
            <div className="grid-container">
        <div className="form-container" >
        <h1>Let's talk</h1>
        <form>
        <div className="form-group">
        <input onChange={handleChange} name="title"  value={input.title}autoComplete="off" className="form-control" placeholder="Enter your name"></input>
        </div>
        <div className="form-group">
        {/* <textarea onChange={handleChange} name="content" value= {input.content} autoComplete="off" className="form-control" placeholder="note content"></textarea> */}
        <label for="email"></label>
        <input type='email' onChange={handleChange} name="email" value= {input.email} autoComplete="off" className="form-control" placeholder="Enter your email id" required/>
        </div>
        {emailvalid?<legend id="invalidEmail">Invalid Email Address</legend>:''}
        <div className="form-group">
        <textarea onChange={handleChange} name="content" value= {input.content} autoComplete="off" className="form-control" placeholder="Write your message here"></textarea>
        </div>
    <button onClick={handleClick} className="btn btn-lg btn-info">Send Message</button>
    {show?<legend id="ThanksYou">Thank you for reaching out to me</legend>:''}
    </form>    
      </div>
      <div className="contact-container">
        <a href="tel:8882512558"><i className="fa fa-mobile-phone"></i></a>
        <p className="text">+91-8882512558<br></br></p>
        <a href="mailto:shivamgupta.ram@gmail.com"><i className="fa fa-envelope-o"></i></a>
        <p className="text">shivamgupta.ram@gmail.com<br></br></p>
        </div>     
      </div>
    



    <div className="after-note">
        <h1>GET IN TOUCH</h1>
        <br></br>
        <h3>Hey!,I am looking forward to work with your organization</h3>
    


  <div className="Social-Media">  
    <a href="https://www.linkedin.com/in/shivam-gupta-dev/"><i className="fa fa-linkedin"></i></a> &nbsp;
    <a href="https://www.facebook.com/cool.shivg/"><i className="fa fa-facebook"></i></a> &nbsp;
    <a href="https://www.instagram.com/shivam_._gupta_/"><i className="fa fa-instagram"></i></a> 
      
  </div>

</div>

    </div>
        )
}

export default CreateNote;
