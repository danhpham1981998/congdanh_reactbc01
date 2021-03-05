import React, { Component } from 'react'

import {connect} from 'react-redux';
 class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn : <span className="text-success">{this.props.stateGame.banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng : <span className="text-success">{this.props.stateGame.soBanThang}</span>
                </div>
                <div className="display-4">
                    Số bàn chơi : <span className="text-success">{this.props.stateGame.tongSoBanChoi}</span>
                </div>
                <div className="display-4">
                    <button onClick={() => {
                        //Tạo ra 1 action
                        const action = {
                            type:'PLAY_GAME'
                        }
                        //Đưa action lên reducer
                        this.props.dispatch(action);
                    }} className="btn btn-primary mt-5"><span className="w-25 display-4 text-dark">Play Game</span></button>
                </div>
            </div>
        )
    }
}

//Viết hàm lấy giá trị từ store redux về biến thành props của component
const mapStateToProps = (state) => //state đại diện cho rootReducer 
{
    return {
        stateGame: state.BaiTapGameReducer
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);