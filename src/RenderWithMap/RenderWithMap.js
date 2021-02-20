import React, { Component } from 'react'

export default class RenderWithMap extends Component {


    mangSinhVien = [
        {ma:1,ten:'Phạm',tuoi:10},
        {ma:2,ten:'Công',tuoi:20},
        {ma:3,ten:'Danh',tuoi:30}
    ]

    renderSinhVien = () => {

        //Cách 1: Cách cũ
        // const arrJSX = [];
        // for(let index = 0 ; index < this.mangSinhVien.length; index++) {

        //     let tagP = <p style = {{display:'inline-block', margin: '10px'}} key = {index} >{this.mangSinhVien[index].ten}</p>;
        //     let tagSpan = <span key = {index} >{this.mangSinhVien[index].ma}</span>;
        //     arrJSX.push(tagP);
        //     arrJSX.push(tagSpan);
        // }
        
        const arrJSX = this.mangSinhVien.map((sinhVien,index) => {
            return <li key = {index}>
                {sinhVien.ten}
            </li>
        });
        return arrJSX;
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.renderSinhVien()}
                </ul>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mangSinhVien.map((sinhVien,index) => {
                            return <tr key={index}>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td>{sinhVien.tuoi}</td>
                                <td><button className="btn btn-primary">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
