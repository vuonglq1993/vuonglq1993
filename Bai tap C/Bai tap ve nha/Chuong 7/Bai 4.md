#include<stdio.h>
int main(){
    int luong, cap;
    int D = 300;
    int E = 200;
    int F = 100;
//    Nhập lương và cấp của nhân viên
    printf("Nhập vào số lương của bạn: \n");
    scanf("%d", &luong);
    printf("Nhập vào cấp của bạn: \n");
    scanf("%d", &cap);
//    Nhân viên sẽ nhận mức trợ cấp nào?
    if(cap >= 1 && cap <=2)
    {
        switch (cap) {
            case 1 :
                printf("Phụ cấp của bạn là: %d\n", D);
                int phucap = luong + D;
                printf("Tổng lương của bạn là: %d\n", phucap);
                break;
            case 2:
                printf("Phụ cấp của bạn là: %d\n", E);
                int phucap2 = luong + E;
                printf("Tổng lương của bạn là: %d\n", phucap2);
                break;
        }}
        else{
            printf("Phụ cấp của bạn là: %d\n", F);
            int phucap3 = luong + F;
            printf("Tổng lương bạn nhận được là: %d\n", phucap3);
        }

return 0;
}
