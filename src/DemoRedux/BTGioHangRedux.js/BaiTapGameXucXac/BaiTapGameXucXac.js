import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './BaiTapGameXucXac.css'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">Bài tập game xúc xắc</h1>
                <XucXac/>

                <KetQuaTroChoi/>
            </div>
        )
    }
}
