import holup from '../images/holup.jpeg'
import React from "react";

function Error() {
    return(
        <div className="ErrorPage" style={ErrorPage}>
            <img style={Image} src={holup}/>

            <h1>
                404...That page doesn't exist big fella.
            </h1>
        </div>

    )
}

const ErrorPage = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    // justifyContent: 'center',
    margin:'15px auto'


}

const Image = {
    height:'50%',
    width:'50%'

}

export default Error