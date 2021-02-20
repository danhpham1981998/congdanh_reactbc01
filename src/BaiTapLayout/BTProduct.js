import React, { Component } from 'react'
import BTProductitem from './BTProductitem'

export default class BTProduct extends Component {

    render() {
        return (
          <div className="container-fluid bg-white">
          <h1 className="text-center text-dark pt-5">BEST LAPTOP</h1>
          <div className="row pb-5">
            <div className="col-3">
              <BTProductitem />
            </div>
            <div className="col-3">
              <BTProductitem />
            </div>
            <div className="col-3">
              <BTProductitem />
            </div>
            <div className="col-3">
              <BTProductitem />
            </div>
          </div>
        </div>
        )
    }
}
