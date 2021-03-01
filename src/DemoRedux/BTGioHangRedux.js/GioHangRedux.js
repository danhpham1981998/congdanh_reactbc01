import React, { Component } from 'react'
//Kết nối react component với redux store
import {connect} from "react-redux";
import { gioHangReducer } from '../../redux/reducer/GioHangReducer';
import SanPhamRedux from './SanPhamRedux';


class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang,'gioHang');
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.gioHang.map((spGioHang,index) => {
                                return <tr key={index}>
                                    <td>{spGioHang.maSP}</td>
                                    <td>{spGioHang.tenSP}</td>
                                    <td>
                                        <button className="btn btn-primary mr-1" onClick={() => {this.props.thayDoiSoLuong(spGioHang.maSP,1)}}>+</button>
                                        {spGioHang.soLuong}
                                        <button className="btn btn-primary ml-2" onClick={() => {this.props.thayDoiSoLuong(spGioHang.maSP,-1)}}>-</button>
                                    </td>
                                    <td>{spGioHang.giaBan}</td>
                                    <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {this.props.xoaGioHang(spGioHang.maSP)}}>Xóa</button>
                                    </td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
}

//Hàm chuyển state trên redux trờ thành props của component
//State đại diện cho rootReducer
const mapStateToProps = (state) => {

    //Tạo props từ state redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        thayDoiSoLuong: (maSP,soLuong) => {
            console.log('thaydoigiohang', maSP)
            //Tạo action
            const action = {
                type: 'THAY_DOI_SO_LUONG',
                maSP:maSP,
                soLuong:soLuong
            }
            //Đưa dữ liệu lên reducer
            dispatch(action);
        },
        xoaGioHang: (maSP) => {
            console.log('xóa nè', maSP);
            //Tạo action
            const action = {
                type: 'XOA_GIO_HANG',
                maSP:maSP
            }
            //Đưa dữ liệu lên reducer
            dispatch(action);
        }
    }
}

//Kết nối giữa component và redux
//Biến component này có chứa store redux ( nâng cao)
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);