// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert  } from 'reactstrap';

// Import Generic components
import Feature from './Feature';
import Price from './Price';

// Modal Video 
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

//Import Images
import london_3d from '../../images/london_3d.png';
import roundWhite from '../../images/shapes/round-white.png';
import Typist from "react-typist";
import contact from "../../images/contact.png";
import Topbar from "../../components/Layout/Topbar";
import FooterLight from "../../components/Layout/FooterLight";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            Contactvisible : false
        }
        this.openModal = this.openModal.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
        window.addEventListener("scroll", this.scrollNavigation, true);

        // Dismiss loading bar
        document.getElementById("pageLoader").style.display = "block";
        setTimeout(function () { document.getElementById("pageLoader").style.display = "none"; }, 1000);
      }
       // Make sure to remove the DOM listener when the component is unmounted.
       componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation);
     }
  
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }


    render() {

        return (
            <React.Fragment>
                <Topbar/>
                {/* Hero Start */}
                <section className="bg-half-295" style={{ backgroundImage: `url(${london_3d})`, backgroundPosition : "center center" }} id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center row mt-md-5">
                                    <Col className="offset-lg-1 order-1 order-md-2">
                                        <div className="text-center title-heading">
                                            <h1 className="logo">Hyperaware<span className="text-custom">.</span></h1>
                                            <h1 className="heading font-weight-bold mb-3 text-center">Built For <span style={{marginLeft: '4px'}}></span>
                                                <Typist >
                                                    <span className="element text-custom">Ports.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">Governments.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">Companies.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">Fishing.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">Individuals.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">Drones.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">Driving.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">Compliance.</span>
                                                    <Typist.Backspace count={15} delay={600} />
                                                    <span className="element text-custom">You.</span>
                                                </Typist>
                                            </h1>
                                            <p className="para-desc mx-auto mb-0">What is it? <span className="text-custom font-weight-bold">Hyperaware</span> is a decentralized application to govern connected devices and their data based on their physical location.

                                            </p>
                                            <div className="mt-4 pt-2">
                                                <div className="mt-4 pt-2">
                                                    <a href="/dashboard" className="btn btn-primary mt-2 mr-2">View Demo</a>
                                                    <Link to="/" className="btn btn-outline-primary mt-2 ml-1">Learn More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="container-fluid">
                                <Row>
                                    <div className="home-shape-bottom">
                                        <img src={roundWhite} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Feature */}
                <Feature />

                {/* Price */}
                <Price />

                {/* Contact Us */}
                <div className="container mb-5">
                    <Row className="align-items-center">
                        <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                            <div className="pt-5 pb-5 p-4 bg-light shadow rounded">
                                <h4>Get In Touch !</h4>
                                <div className="custom-form mt-4">
                                    <div id="message"></div>
                                    <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                        Contact details send successfully.
                                    </Alert>
                                    <form method="post" onSubmit={this.handleSubmit} name="contact-form" id="contact-form">
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Your Name <span className="text-danger">*</span></label>
                                                    <i className="mdi mdi-account ml-3 icons"></i>
                                                    <input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" required />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group position-relative">
                                                    <label>Your Email <span className="text-danger">*</span></label>
                                                    <i className="mdi mdi-email ml-3 icons"></i>
                                                    <input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" required />
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="form-group position-relative">
                                                    <label>Subject</label>
                                                    <i className="mdi mdi-book ml-3 icons"></i>
                                                    <input name="subject" id="subject" className="form-control pl-5" placeholder="Your subject :" required />
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="form-group position-relative">
                                                    <label>Comments</label>
                                                    <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12} className="text-center">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Send Message" />
                                                <div id="simple-msg"></div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7} md={6} className="order-1 order-md-2">
                            <img src={contact} className="img-fluid" alt="Hyperaware" />
                        </Col>
                    </Row>
                </div>
                <FooterLight />

            </React.Fragment>
        );
    }
}

export default Index;