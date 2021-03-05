import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './BaiTapGameXucXac.css'
import {connect} from 'react-redux'

class BaiTapGameXucXac extends Component {

    renderKetQua = () => {
        return <div className="display-4 text-center text-danger">
            {this.props.tongDiem}:{this.props.ketQua}
        </div>
    }

    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">Bài tập game xúc xắc</h1>
                <XucXac/>

                {this.renderKetQua()}

                <KetQuaTroChoi/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //Lấy mảng xuc1 xắc từ reducer về
    let mangXucXac = state.BaiTapGameReducer.mangXucXac;
    //Tính tổng điểm từ mảng xúc xắc
    let tongDiem = mangXucXac.reduce((td,xucXac,index) => {
        return td += xucXac.diem;
    },0)
    //Lấy tổng điểm tạo ra kết quả
    let ketQua = tongDiem > 11 ? 'Tài':'Xỉu'
    return {
        tongDiem:tongDiem,
        ketQua:ketQua
    }

}

export default connect(mapStateToProps)(BaiTapGameXucXac);
