#include<stdio.h>
    int main(){
//Khai báo lương và các khoản thu khác
    float Luongcoban = 12000;
    float HRA = 150;
    float TA = 120;
    float Other = 450;
    float DA, PF, IT, luongthuclanh;
    DA = 0.12*Luongcoban;
//Thuế và các khoản chi
    PF = 0.14*Luongcoban;
    IT = 0.15*Luongcoban;
//Tính toán lương thực nhận của nhân viên
    luongthuclanh = Luongcoban + HRA + TA + Other + DA - (PF+IT);
//Hiển thị lương thực nhận của nhân viên
    printf("Ban nhan duoc so tien la: %.3f\n", luongthuclanh);

}
