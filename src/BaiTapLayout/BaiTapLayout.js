import React, { Component } from 'react'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTList from './BTList'
import BTProduct from './BTProduct'
import BTSlider from './BTSlider'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <BTSlider/>
                <BTList/>
                <BTProduct/>
                <BTFooter/>
            </div>
        )
    }
}
