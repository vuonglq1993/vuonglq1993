#include<stdio.h>

int main() {
    int n;
    char tieptuc;
    do {
        printf("Nhap so luong phan tu trong mang: \n");
        scanf("%d", &n);
        int arr[n];
        int min;
        for (int i = 0; i < n; i++) {
            printf("Nhap so hang thu %d: ", i + 1);
            scanf("%d", &arr[i]);
            if (arr[i] > 0) {//Xet so duong va gan gia  tri cho min
                min = arr[i];
            }
        }
        for (int i = 0; i < n; i++) {
            if (arr[i] > 0 && arr[i] < min) {
                min = arr[i];//tim min
            }
        }
        printf("So duong nho nhat trong mang la: %d", min);
}
