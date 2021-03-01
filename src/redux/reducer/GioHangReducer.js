
const stateDefault = {
    gioHang:[
        {maSP:1,tenSP:'Iphone',giaBan:1000,hinhAnh:'./img/applePhone.jpg',soLuong:1},
    ]
}


export const gioHangReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG':{
            //Xử lý setState trên redux
            console.log('object nè', action);
            //Gán state.gioHang = giỏ hàng sau khi xử lý
            // state.gioHang = gioHangUpdate;
            // return {...state}
            //Xử lý thay đổi state.gioHang trên redux
            //Bước 1: sao chép giỏ hàng ra array mới
            const gioHangUpdate = [...state.gioHang]
            //Bước 2: kiểm tra action.spGioHang gửi lên từ component có trong state.gioHang chưa?
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP == action.spGioHang.maSP);
            if(index !== -1) {
                gioHangUpdate[index].soLuong +=1 ;
            }else {
                gioHangUpdate.push(action.spGioHang);
            }
            //Bước 3: Cập nhật lại state.gioHang => bước này giống như this.setState tại component
            state.gioHang = gioHangUpdate;

            return {...state}//Sao chép dữ liệu theo redux
        }break;
        
        case 'THAY_DOI_SO_LUONG':{
            const gioHangUpdate = [...state.gioHang];
            //Kiểm tra sản phảm có trong giỏ hàng hay không
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);
            if(index !== -1) {
                gioHangUpdate[index].soLuong += action.soLuong;
            }
            //Cập nhật lại state
            state.gioHang = gioHangUpdate;
            return {...state};
        }

        case 'XOA_GIO_HANG':{
            let gioHangUpdate = [...state.gioHang];
            //Xử lý xóa giỏ hàng
            gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== action.maSP );
            alert('Đã xóa mặt hàng')
            //cập nhật lại state
            state.gioHang = gioHangUpdate;
            return {...state};
        }
    }

    //State theo từng nghiệp vụ
    return {...state}
}