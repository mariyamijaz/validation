import React from 'react'
import './ContactUs.css'
import { BiMapPin } from 'react-icons/bi'
import { AiFillPhone } from 'react-icons/ai'
import { HiOutlineMailOpen } from 'react-icons/hi'
import bg from '../image/background.jpg'
class ContactUs extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
   

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
   
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render(){
  return (
    <section className="contact">
      {/* <img className="bg" src={bg}/> */}
      <div className="content">
        <h2>Contact Us</h2>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <BiMapPin />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>LDA lahore</p>
            </div>

          </div>
          <div className="box">
            <div className="icon">
              <AiFillPhone />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>0303034566</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineMailOpen />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>T@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={this.contactSubmit.bind(this)} name="contactform"
          className="contactform">
            <h2>Send Message</h2>
            <div className="inputBox">
            <input onChange={this.handleChange.bind(this, "name")}
                value={this.state.fields["name"]} type="text" name="" required="required "/>
            <span>Name</span>
            </div>
            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
            <div className="inputBox">
            <input onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]} type="text" name="" required="required "/>
            <span>Email</span>
            </div>
            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            <div className="inputBox">
            <textarea onChange={this.handleChange.bind(this, "message")}  value={this.state.fields["message"]} required="required "/>
            <span>Type Message</span>
            </div>
            <span style={{ color: "red" }}>{this.state.errors["mesage"]}</span>
            <div className="inputBox">
            <input type="submit" name="" value="send" />
            
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
}

export default ContactUs
