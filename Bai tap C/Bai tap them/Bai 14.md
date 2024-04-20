// Viết chương trình nhập 3 số thực, thay tất cả các số âm bằng giá trị tuyệt đối của nó.
#include<stdio.h>
int main(){
    float a, b, c;
//    Nhập vào các số thực:
    printf("Nhập số thực thứ nhất: \n");
    scanf("%f", &a);
    printf("Nhập số thực thứ hai: \n");
    scanf("%f", &b);
    printf("Nhập số thực thứ ba: \n");
    scanf("%f", &c);
    if(a<0)
        a = -a;
    if(b<0)
        b = -b;
    if(c<0)
        c = -c;
    printf("Kết quả là: %.3f\t%.3f\t%.3f", a , b , c);

}
