//
// Created by macos on 1/5/24.
//
#include<stdio.h>

int Mang(int phantu[], int n) {
    for (int i = 0; i < n; i++) {
        printf("Nhap phan tu thu %d: ", i + 1);
        scanf("%d", &phantu[i]);
    }
}

int IndexMin(int phantu[], int n) {
    int min;
    int Indexmin = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0) {
            min = phantu[i];
            Indexmin = i + 1;
        }
        if (phantu[i] < min) {
            phantu[i] = min;
            Indexmin = i + 1;
        }
    }

    printf("Chi so cua phan tu nho nhat la: %d", Indexmin);
    return (Indexmin);
}

int main() {
    int n;
    printf("Nhap so phan tu trong mang: ");
    scanf("%d", &n);
    int mang[n];

    Mang(mang, n);
    IndexMin(mang, n);
}
