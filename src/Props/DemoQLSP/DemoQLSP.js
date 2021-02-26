import React, { Component } from "react";
import GioHang from "../GioHang";
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
    },//Dùng object lưu trữ thông tin điện thoại chi tiết
    gioHang : [
      {
      maSP:1,hinhAnh:'./img/vsphone.jpg',tenSP:'Iphone',giaBan:1000,soLuong:1,thanhTien:2000
    }
  ]
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
          <SanPhamDemo sp={sp} xemCT={this.xemChiTiet} themGioHang = {this.themGioHang} />
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

  //Hàm xử lý làm thay đổi state sẽ được đặt tại component chứa state
  themGioHang = (sanPhamClick) => {
    //Sau khi click thì tạo ra một sản phẩm giống object trong giỏ hàng
    let spGH = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      giaBan: sanPhamClick.giaBan,
      soLuong: 1,
      hinhAnh: sanPhamClick.hinhAnh
    }

    let gioHangUpdate = [...this.state.gioHang];
    //Xử lý kiểm tra state giỏ hàng có chứa dữ liệu sản phẩm đó khi click hay chưa => nếu có thì tăng số lượng , không có thì thêm vào

    let indexSPGH = gioHangUpdate.findIndex(sp => sp.maSP === sanPhamClick.maSP);
    if (indexSPGH !== -1) //Tìm thấy vị trí index 
    {
      gioHangUpdate[indexSPGH].soLuong += 1;
    }else {
      gioHangUpdate.push(spGH)
    }

    this.setState({
      gioHang: gioHangUpdate
      //gioHang: ... giỏ hàng mới
    })
    console.log('Thêm giỏ hàng nè')
    //  clg dc rồi á a,  ok anaảycam1 ơn nha
// bi gi quen roi anh oi click không được em

    // this.state.gioiHang.push(spGH)
    // console.log(sanPhamClick);
    // this.setState({
    //   gioiHang: this.state.gioiHang
    //   //gioHang: .. giỏi hàng mới
    // })
  }
  
  xoaGioHang = (sanPhamClick) => {

    let gioHangUpdate = [...this.state.gioHang];

    gioHangUpdate = gioHangUpdate.filter(sp => sp.maSP !== sanPhamClick.maSP);


    // let indexGH = gioHangUpdate.findIndex(sp => sp.maSP === sanPhamClick.maSP)

    // if(indexGH !== -1 & gioHangUpdate[indexGH].soLuong > 1){
    //   gioHangUpdate[indexGH].soLuong -= 1
    // }else if(indexGH !== -1 & gioHangUpdate[indexGH].soLuong === 1){
    //   gioHangUpdate.splice(indexGH,1)
    // }else{
    //   alert('Sản phẩm không tồn tại')
    // }

    this.setState({
      gioHang: gioHangUpdate
    })

    alert('Đã xóa mặt hàng')

    console.log('xoagiohang nè');
  }

  tangGiamSoLuong = (maSP,soLuong) => {
    let gioHangUpdate = [...this.state.gioHang];
    //Bước 1: tìm sản phảm trong giò hàng dữa vào mã sản phẩm
    let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP)
    //Bước 2: Tăng giảm số lượng
    if(index!==-1){
      gioHangUpdate[index].soLuong += soLuong;

      if(gioHangUpdate[index].soLuong <= 0){
        alert('Số lượng không hợp lệ')
        gioHangUpdate[index].soLuong -= soLuong;
        return;
      }
    }
    //Bước 3: setState cho gioHang
    this.setState({gioHang:gioHangUpdate});
  }

  xemChiTiet = (sanPhamClick) => {
    //setState
    console.log('Xem chi tiết nè',sanPhamClick);
    this.setState({
      spChiTiet:sanPhamClick
    })
  }

  render() {
    let {hinhAnh,manHinh,heDieuHanh,ram,rom,cameraTruoc,cameraSau,tenSP} = this.state.spChiTiet;
    return (
      <div className="container">
        <h1 className="mt-2">Giỏ Hàng</h1>
        <GioHang gioHang={this.state.gioHang} xoaGioHang = {this.xoaGioHang} tangGiamSoLuong = {this.tangGiamSoLuong} />
        <h3 className="text-center">Danh sách sản phẩm</h3>
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
