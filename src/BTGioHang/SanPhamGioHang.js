import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    let {sp} = this.props;
    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" style={{height:300}} src={sp.hinhAnh} alt={sp.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{sp.tenSP}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    );
  }
}
