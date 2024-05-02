#include<stdio.h>

int main() {
    int a, b, c, max, smaller, min;
    printf("Nhập vào số thứ nhất: \n");
    scanf("%d", &a);
    printf("Nhập vào số thứ hai: \n");
    scanf("%d", &b);
    printf("Nhập vào số thứ ba: \n");
    scanf("%d", &c);
    max = a;
    if (b > max) {
        max = b;
        smaller = a;
        if (c > max) {
            max = c;
            smaller = b;
            min = a;
            printf("%d\t%d\t%d\t", min, smaller, max);
        } else if (c < smaller) {
            min = c;
            printf("%d\t%d\t%d\t", min, smaller, max);
        } else {
            smaller = c;
            min = a;
            printf("%d\t%d\t%d\t", min, smaller, max);
        }
    } else {
        smaller = b;
        if (c > max) {
            max = c;
            smaller = a;
            min = b;
            printf("%d\t%d\t%d\t", min, smaller, max);
        } else if (c < smaller) {
            min = c;
            printf("%d\t%d\t%d\t", min, smaller, max);
        } else {
            min = b;
            smaller = c;
            printf("%d\t%d\t%d\t", min, smaller, max);
        }
    }
}
