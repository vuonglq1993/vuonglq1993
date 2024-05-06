#include<stdio.h>

int main() {
    int n;
        printf("Nhap so luong phan tu trong mang: \n");
        scanf("%d", &n);
        int arr[n];
        int min;
        int count = 0;
        for (int i = 0; i < n; i++) {
            printf("Nhap so hang thu %d: ", i + 1);
            scanf("%d", &arr[i]);
            if (arr[i] > 0) {//Xet so duong va gan gia  tri cho min
                min = arr[i];
                count++;
            }
        }
        for (int i = 0; i < n; i++) {
            if (arr[i] > 0 && arr[i] < min) {
                min = arr[i];//tim min
            }
        }
        if(count !=0) {
            printf("So duong nho nhat trong mang la: %d", min);
        }else
            printf("Mang ban nhap khong co so duong, vui long nhap lai\n");
}
