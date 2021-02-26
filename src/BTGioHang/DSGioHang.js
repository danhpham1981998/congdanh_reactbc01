import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DSGioHang extends Component {
  render() {
    let { mangSanPham } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sp, index) => {
            return (
              <div className="col-4" key={index}>
                <SanPhamGioHang sp={sp} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
