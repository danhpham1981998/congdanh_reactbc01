import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang } = this.props;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Giá SP</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <th>{spGH.maSP}</th>
                  <th>{spGH.tenSP}</th>
                  <th>
                    <img src={spGH.hinhAnh} width="50" height="50" />
                  </th>
                  <th>{spGH.giaBan}</th>
                  <th>{spGH.soLuong}</th>
                  <th>{spGH.giaBan * spGH.soLuong}</th>
                  <th>
                    <button
                      onClick={() => {
                        this.props.xoaGioHang(spGH);
                      }}
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
