#include<stdio.h>

int main() {
    int m, x;
    printf("Độ dài cần nhập vào là: (m)\n");
    scanf("%d", &m);
    float km = m / 1000;
    float dm = m * 10;
    float cm = m * 100;
    float mm = m * 1000;
    printf("Đơn vị cần đổi là: \n");
    printf("1. mm \n");
    printf("2. cm\n");
    printf("3. dm\n");
    printf("4. km\n");
    printf("=============\n");
    printf("chon:(1-4) \t");
    scanf("%d", &x);
    switch (x) {
        case 1:
            printf("\n%dm = %.2fmm\n", m, mm);
            break;
        case 2:
            printf("\n%dm = %.2fcm\n", m, cm);
            break;
        case 3:
            printf("\n%dm = %.2fdm\n", m, dm);
            break;
        case 4:
            printf("\n%dm = %.5fkm\n", m, km);
            break;
        default:
            printf("Hiện chưa thể đổi sang đơn vị mong muốn, xin mời chọn lại\n");
    }
}
