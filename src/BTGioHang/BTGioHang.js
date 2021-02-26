import React, { Component } from 'react'
import DSGioHang from './DSGioHang'
import ModalGioHang from './ModalGioHang'
import SanPham from '../Datajson/SanPham.json';

export default class BTGioHang extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success">Bài tập giỏ hàng</h3>
                <ModalGioHang/>
                <DSGioHang mangSanPham={SanPham}/>
            </div>
        )
    }
}
