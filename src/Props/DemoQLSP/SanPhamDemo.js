import React, { Component } from "react";

export default class SanPhamDemo extends Component {
  render() {
    let {sp} = this.props;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" style={{height:300}} src={sp.hinhAnh} alt={sp.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{sp.tenSP}</h4>
            <p className="card-text">{sp.giaBan}</p>
            <button onClick={() => {
                this.props.xemCT(sp);
            }} className="btn btn-primary">Xem chi tiết</button>
          </div>
        </div>
      </div>
    );
  }
}
