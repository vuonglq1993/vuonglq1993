//
// Created by macos on 1/5/24.
//
#include<stdio.h>

float reverse(float num[], int n) {
    for (int i = n - 1; i >= 0; i--) {
        printf(" %.2f ", num[i]);
    }
}

int main() {
    int n;
    printf("Nhap so phan tu trong mang: ");
    scanf("%d", &n);
    float num[n];
    for (int i = 0; i < n; i++) {
        printf("Nhap phan tu thu %d: ", i + 1);
        scanf("%f", &num[i]);
    }
    printf("Thu tu dao nguoc la: \n");
    reverse(num, n);
}
