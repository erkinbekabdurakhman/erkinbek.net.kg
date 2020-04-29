import React from 'react';
import './contacts.css';
import * as emailjs from 'emailjs-com'

class Contact extends React.Component {
    state = {
        name: '',
        number: '',
        email: '',
        message: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        const { name, number, email, message } = this.state

        let templateParams = {
          name: name,
          number: number,
          email: email,
          message: message,
         }
         emailjs.send(
          'gmail',
          'template_WRWCNhKh',
           templateParams,
          'user_5AnYgoQ986bkEOK1nn0gZ'
         )
         this.resetForm()
     }
    resetForm() {
        this.setState({
          name: '',
          number: '',
          email: '',
          message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
    
    render(){
        return(
        <>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 offset=md-1">
                            <div className="row">
                                <div className="col-md-5 register-left">
                                    <h3>Contact me</h3>
                                    <ul>
                                        <li>
                                            <i className="fa fa-phone"></i>
                                            <p>+996 555 74 57 75</p>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o"></i>
                                            <p>erkinbek.abdurahman2@gmail.com</p>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker"></i>
                                            <p>Kyrgyzstan, Bishkek</p></li>
                                        <li>
                                            <i className="fa fa-whatsapp"></i>
                                            <p>+996 770 38 72 34</p></li>
                                        <li>
                                            <i className="fa fa-github"></i>
                                            <p><a href="https://github.com/Erkin649">Erkin649</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-7 register-right">
                                    <h3>Question and Answers</h3>
                                    <div className="register-form">
                                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                                            <div className="form-group">
                                                <input name="name" id="name"  value={this.state.name}
                                                onChange={this.handleChange.bind(this, 'name')}
                                                 type="text" className="form-control" placeholder="Your name" />
                                            </div>
                                            <div className="form-group">
                                                <input name="number" id="number" value={this.state.number}
                                                onChange={this.handleChange.bind(this, 'number')}
                                                type="tel" className="form-control" placeholder="Your number" />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" id="email" value={this.state.email} type="email" 
                                                onChange={this.handleChange.bind(this, 'email')}
                                                className="form-control" placeholder="Your email" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" id="message"  value={this.state.message} 
                                                 onChange={this.handleChange.bind(this, 'message')}
                                                className="md-textarea form-control" rows="5">

                                                </textarea>
                                            </div>
                                            <button type="submit"  value="Send" className="btn btn-primary">Send</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    }
}

export default Contact;