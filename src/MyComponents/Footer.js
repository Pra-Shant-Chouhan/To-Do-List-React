import React from 'react'
import "./footer.css"

export const Footer = () => {
    let footerStyle = {
        display: 'flex',
        position: 'relative',
        /* top: 97vh; */
        /* width: 100%; */
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
    return (
        <footer className= "footerCss" style ={footerStyle} >
            <p className ="text-center">
             copyright &copy; MyTodoList.com  <br /> Created by B2
             </p>
            
        </footer>
    )
}
