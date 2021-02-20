import React, { Component } from "react";
import style from './DataBinding.module.css';

export default class DataBinding extends Component {
  sinhVien = {
    id: 1,
    ten: "Danh",
  };

  renderSinhVien = () => {
    //Binding phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
    return <div>
        id: {this.sinhVien.id} - ten: {this.sinhVien.ten}
    </div>
  }

  render() {
    //Phương thức
    let title = "Hello Cybersoft";
    let sanPham = {
      ten: "Iphone 5s",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    };

    return (
      <div>
          <p className={`text-center ${style.textRed} ${style['txx-light']}`}>ABC</p>
          <p style={{background:'red', color:'white'}}>aaaa</p>
          {this.renderSinhVien()}
        <h1>Họ tên:{this.sinhVien.ten} </h1>
        <p id="title">{title}</p>
        <div className="card">
          <img className="card-img-top w-25" src={sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
