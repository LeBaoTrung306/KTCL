let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", function(){
    createInfo();
})
// Thực hiện thêm mới 1 sinh viên
function createInfo(){
    //Lấy dữ liệu sinh viên từ localStorage
    let listStudent = JSON.parse(localStorage.getItem("listStudent"));
    if (listStudent == null) {
        listStudent = [];
    }
    let studentName = document.getElementById("studentName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = parseFloat(document.getElementById("phoneNumber").value);
    let address = document.getElementById("address").value;
    let studentNew = {
        studentName: studentName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
    };
    listStudent.push(studentNew);
    localStorage.setItem("listStudent", JSON.stringify(listStudent));
    readListStudent();
}
function readListStudent(){
    let listStudent = JSON.parse(localStorage.getItem("listStudent"));
    if (listStudent == null){
        listStudent = [];
    }
}