import React from 'react'
import './Signin.css'
import SigninForm from '../../components/SigninForm'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

class Signin extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="signinForm">
                    <div className="content">
                        <SigninForm></SigninForm>
                    </div>
                <Hero h={'88vh'}></Hero>
                </div>
                <Footer s={{bottom:0}}></Footer>
            </React.Fragment>
        );
    }
}

export default Signin