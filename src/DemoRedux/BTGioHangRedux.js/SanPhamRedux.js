import React, { Component } from 'react'

//Kết nối redux
import {connect} from "react-redux";

class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;
        console.log('props123', sanPham);
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" style={{height:300}} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button onClick={() => {
              this.props.themGioHang(sanPham);
            }} className="btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
    }
}

//Hàm dùng để lấy state từ redux về tạo thành props cùa component
//Tạo lấy giá trị từ redux
const mapStateToProps = (state) => {
  return {
    
  }
}


//Hàm để tạo ra props là hàm xử lý sự kiện đưa dữ liệu lên redux
//Tạo ra hàm xử lý thêm giỏ hàng đưa lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      console.log('sp được click', sanPhamClick);

      //Trước khi đưa lên reduc. Tạo ra spGioHang từ spClick
      const spGioHang = {
        //Lấy dữ liệu giỏ hàng bằng ES6
        ...sanPhamClick,
        soLuong:1 // thêm giá trị soLuong vào object
      }
      //Đưa dữ liệu lên redux store
      const action = {
        //Thuộc tính 'type' là thuộc tính bắt buộc khi gửi dự liệu lên redux store.
        type: 'THEM_GIO_HANG', //Tiêu đề
        spGioHang:spGioHang //Nội dung
      }
      //Dùng hàm dispotch đưa dữ liệu lên reducer(redux store)
      dispatch(action);
    },

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SanPhamRedux)