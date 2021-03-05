import React, { Component } from 'react'

import {connect} from 'react-redux'
 class XucXac extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-4">
                        <button onClick = {() => {
                            this.props.chonXucXac('Tài')
                        }} style={{boder:'none'}} className="bg-danger">
                            <div className="p-5 bg-danger text-white w-100 h-100" style={{fontSize:50}}>
                                Tài
                            </div>
                        </button>
                    </div>
                    <div className="col-4">
                        {this.props.stateXucXac.mangXucXac.map((item,index) => {
                            return <img className="mr-1" key={index} src={item.hinhAnh} width="50" />
                        })}
                    </div>
                    <div className="col-4">
                        <button onClick = {() => {
                            this.props.chonXucXac('Xỉu')
                        }} style={{boder:'none'}} className="bg-dark">
                            <div className="p-5 bg-dark text-white w-100 h-100" style={{fontSize:50}}>
                                Xỉu
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => 
({
        stateXucXac: state.BaiTapGameReducer
})//state là rootReducer // return {} = ()

const mapDispatchToProps = (dispatch) => {
    return {
        chonXucXac: (giaTri) => {
            // console.log('Bạn chọn: ',giaTri);
            //Gửi giá trị được chọn lên redux
            const action = {
                type:'CHON_TAI_XIU',
                giaTri
            };

            //Gửi lên redux
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XucXac);