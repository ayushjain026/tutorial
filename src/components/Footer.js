import React from 'react'

export default function Footer() {

let footerStyle = {
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'60px',   
    background:'#6cf'
}

return (
    <footer className="bg-light text-center text-lg-start" style={footerStyle}>
        <div className="text-center p-3">
            © 2022 Copyright:
            <label className="text-dark">Ayush Jain</label>
        </div>
    </footer>
)
}
