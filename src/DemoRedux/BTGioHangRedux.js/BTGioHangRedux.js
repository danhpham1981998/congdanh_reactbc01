import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux';
import SanPhamRedux from './SanPhamRedux';

export default class BTGioHangRedux extends Component {

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

        {
            maSP: 4,
            tenSP: "Black Berry",
            manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/blackberry.jpg",
          },

          {
            maSP: 5,
            tenSP: "SamSung ultra 21",
            manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/samsung.jpg",
          },

          {
            maSP: 6,
            tenSP: "Xioa Mi 10 ultra / 5G",
            manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/xioa.jpg",
          },
      ];

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham,index) => {
            return <div className="col-4 mt-4" key={index}>
                <SanPhamRedux sanPham={sanPham}/>
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                        {this.renderSanPham()}
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <h3>Giỏ hàng</h3>
                        <GioHangRedux/>
                    </div>
                </div>
            </div>
        )
    }
}
