#include<stdio.h>
int main(){
    float r , v, h;
    float pi = 3.14;
//Nhập kích thước của hình trụ
    printf("Ban kinh day hinh tru la: \n");
    scanf("%f", &r);
    printf("Chieu cao cua hinh tru la: \n");
    scanf("%f", &h);
//Phương trình tính thể tích hình trụ
    v = pi*r*r*h;
//Hiển thị thể tích hình trụ
    printf("The tich hinh tru tinh duoc la: %.2f \n", v);
    return 0;
}
