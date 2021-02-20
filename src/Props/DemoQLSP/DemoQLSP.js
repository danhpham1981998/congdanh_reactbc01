import React, { Component } from "react";
import SanPhamDemo from "./SanPhamDemo";

export default class DemoQLSP extends Component {

  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    }//Dùng object lưu trữ thông tin điện thoại chi tiết
  }

  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  renderSanPham = () => {
    return this.mangSanPham.map((sp, index) => {
      return (
        <div key={index} className="col-4">
          <SanPhamDemo sp={sp} xemCT={this.xemChiTiet} />
          {/* <div className="card text-left">
            <img className="card-img-top" style={{height:300}} src={sp.hinhAnh} alt={sp.hinhAnh} />
            <div className="card-body">
              <h4 className="card-title">{sp.tenSP}</h4>
              <p className="card-text">{sp.giaBan}</p>
              <button onClick={()=>{
                this.xemChiTiet(sp);
              }} className="btn btn-primary">Xem chi tiết</button>
            </div>
          </div> */}
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    //setState
    console.log(sanPhamClick);

    this.setState({
      spChiTiet:sanPhamClick
    })
  }

  render() {
    let {hinhAnh,manHinh,heDieuHanh,ram,rom,cameraTruoc,cameraSau,tenSP} = this.state.spChiTiet;
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
            <div className="col-4">
                <h3>{tenSP}</h3>
                <img className="card-img-top" style={{height:300}} src={hinhAnh} alt={hinhAnh} />
            </div>
            <div className="col-8">
                <h3 className="text-center">Thông số kỹ thuật</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Màn hình</th>
                            <th>{manHinh}</th>
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            <th>{heDieuHanh}</th>
                        </tr><tr>
                            <th>Camera trước</th>
                            <th>{cameraTruoc}</th>
                        </tr><tr>
                            <th>Camera sau</th>
                            <th>{cameraSau}</th>
                        </tr><tr>
                            <th>Ram</th>
                            <th>{ram}</th>
                        </tr>
                        <tr>
                            <th>Rom</th>
                            <th>{rom}</th>
                        </tr>
                    </thead>
                    <button className="btn btn-primary mt-3">Xem thêm</button>
                </table>
            </div>
        </div>
      </div>
    );
  }
}
