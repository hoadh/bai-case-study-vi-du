
function search_linear( arrayData, value ) {
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i] === value) {
            return i; // vị trí chứa giá trị cần tìm
            // return sẽ dừng hàm (dừng vòng lặp)
        }
    }

    return -1;
}


function count_linear( arrayData, value ) {
    let count = 0;
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i] === value) {
            count++;
        }
    }

    return count;
}

let myArray = [ 3, 5, 7, 2, -1 , 2, 1, 10 ];

let count = count_linear(myArray, 10);

alert("Mảng này có " + count + " phần tử có giá trị là " + 10);

// let searched_index = search_linear(myArray, 2);

// if (searched_index >= 0) {
//     alert("Số cần tìm nằm ở vị trí thứ " + (searched_index + 1) + " trong mảng.");
// } else {
//     alert("Không tìm thấy giá trị trong mảng");
// }


// // Tìm số 3 thì hàm search_linear sẽ trả về giá trị là 0
// // Nếu không tìm thấy thì chúng nhận về giá trị là -1

// // Như vậy, kiểm tra giá trị trả về > -1 ===> có giá trị đó trong mảng.
// // Ngược lại, === -1 thì nghĩa là mảng không có giá trị đó.


// // =================

// /*
// Tên + Số điện thoại

// [ Contact 1, Contact 2, Contact 3, ..., Contact n ]

// Nhiệm vụ:
// 1. Tìm số điện thoại của người có tên cụ thể. Ví dụ:
//     [ Trà 0123, Đại 0456, Lộc 0789, ..., Contact n ]

//     Hàm tìm số điện thoại trong danh bạ:
//     Tên muốn tìm: Lộc
//     Kết quả trả về: 0789
// */

// class Contact {
//     constructor( name, phoneNumber ) {
//         this.name = name;
//         this.phoneNumber = phoneNumber;
//     }

//     getPhoneNumber() {
//         return this.phoneNumber;
//     }
// }

// let contact1 = new Contact("Trà", "0123");
// let contact2 = new Contact("Đại", "0456");
// let contact3 = new Contact("Lộc", "0789");

// let contacts = [ contact1, contact2, contact3 ];

// let pNumber = contacts[1].getPhoneNumber();