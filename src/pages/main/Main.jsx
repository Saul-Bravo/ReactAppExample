import React from 'react'
import Hero from '../../components/Hero'
import "./Main.css"
import Button from '../../components/MainButton'
import Footer from '../../components/Footer'

const Main = props => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__tittle">{props.tittle || "Welcome"}</h1>
                    <Button theme={"Button"} contentText={'Lets Start'} link={"/login"}></Button>
                </div>
                <Hero h={'88vh'}></Hero>
            </div>
            <Footer s={{bottom:0}}></Footer>
        </React.Fragment>
    );
}

export default Main