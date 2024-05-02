//
// Created by macos on 1/5/24.
//
#include<stdio.h>

int nhapmang(int num[], int n) {
    printf("Nhap %d phan tu cua mang: \n", n);
    for (int i = 0; i < n; i++) {
        printf("Nhap phan tu thu %d: ", i + 1);
        scanf("%d", &num[i]);
    }
}

int check(int num[], int n) {
    for (int i = 0; i < n; i++) {
        if (num[i] % 50 == 0) {
            printf("%d", num[i]);
            return 0;
        } else {
            return 1;
        }
    }
}

int main() {
    int n;
    printf("Nhap so phan tu cua mang: ");
    scanf("%d", &n);

    int mang[n];
    nhapmang(mang, n);
    check(mang, n);
}
