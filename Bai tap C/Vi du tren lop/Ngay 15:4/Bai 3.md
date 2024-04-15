#include<stdio.h>

int main() {
    int a, b, c, max;
    printf("Nhập vào số đầu tiên: \n");
    scanf("%d", &a);
    printf("Nhập vào số thứ hai: \n");
    scanf("%d", &b);
    printf("Nhập vào số thứ ba: \n");
    scanf("%d", &c);
    max = a;
    if (b > max) {
        max = b;
        if (c > max) {
            max = c;
            printf("Số lớn nhất là %d\n", max);
        } else
            printf("số lớn nhất  là %d\n", max);
    }
    if (c > max) {
        max = c;
        printf("Số lớn nhất là %d\n", max);
    } else {
        printf("Số lớn nhất là %d\n", max);
    }
    return 0;
}
