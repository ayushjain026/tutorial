import React, { Component } from 'react'

export default class News extends Component {

    render() {
        return (
            <>
                <div className="card container my-5" style={{width: "18rem"}}>
                    <image className="card-img-top" src="https://nypost.com/wp-content/uploads/sites/2/2022/10/xmas-parade-comp.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}
