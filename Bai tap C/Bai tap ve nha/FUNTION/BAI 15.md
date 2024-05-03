//
// Created by macos on 3/5/24.
//
#include<stdio.h>
float thue = 0.1;
float tongtien, soluong, giaban, dongia, khuyenmai, truocthue;
float input(){
    printf("Nhap vao so luong don hang: ");
    scanf("%f", &soluong);
    printf("Nhap vao gia ban cua 1 don hang: ");
    scanf("%f", &giaban);
}
float khuyenmai1(float soluong, float giaban){
    float dongia = soluong*giaban;

    if(dongia<100){
        khuyenmai = 0;
    }else if(dongia<200){
        khuyenmai = 0.02;
    }else{
        khuyenmai = 0.05;
    }
    printf("Gia tri don hang chua khuyen mai la: %.2f\n", dongia);
    printf("Khuyen mai nhan duoc la %.2f\n", khuyenmai);
}
float truocthue1(float soluong, float giaban){
    float truocthue = soluong*giaban - soluong*giaban*khuyenmai;
    printf("Tong tien truoc thue la: %.2f\n", truocthue);
}
float total(float soluong, float giaban) {
    tongtien = soluong*giaban - soluong*giaban*khuyenmai + (soluong*giaban - soluong*giaban*khuyenmai)*thue ;
    printf("Tong gia tri don hang la: %.2f\n", tongtien);
}

int main() {
    input();
    khuyenmai1(soluong, giaban);
    truocthue1(soluong, giaban);
    total(soluong, giaban);
}
