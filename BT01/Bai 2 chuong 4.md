#include<stdio.h>
int main(){
    //Khai báo các biến
    float a = 10;
    float b = 7;
    float c = 15.75;
    float d = 4;
    float e = 2;
    float f = 5.6;
    float z;
    //Biểu thức z= a*b+(c/d)-e*f;
    z= a * b + (c / d) - (e * f);
    //Hiển thị kết quả
    printf("Ket qua cua bieu thuc z = a * b + (c / d) - e * f la: %.3f\n", z);

}
