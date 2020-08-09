import React, { Component } from 'react';
class home extends Component {
    render() {
        return (
            <div style = {{textAlign: 'center'}}>
                <h1 className='homeHeaders'>Coronavirus: Everyone is Affected</h1>
                <h2 className='homeHeaders'>Do you know how to handle it?</h2>
                <div style={{display: 'flex'}}>
                <h3 className='homeHeaders' style= {{float: 'left'}, {width: '33%'}}>Connect with others in your situation</h3>
                <h3 className='homeHeaders' style={{float: 'center'}, {width: '33%'}}>Learn How To Combat It</h3> 
                <h3 className='homeHeaders' style={{float: 'right'}, {width: '33%'}}>Get Necessary Help</h3> 
                </div>
                <h4 className='homeHeaders'>We Are In This Together</h4>
                <a class="button" href="pages/signup">Join The Community</a>
                

            </div>
        )
    }
}

export default home
