#include<stdio.h>

int isPrime(int num) {
    if (num <= 1) return 0;
    for (int c = 2; c * c <= num; c++) {
        if (num % c == 0) return 0;
    }
    return 1;
}

int main() {
    int arr[5], i = 0, n, count = 0;
    int max, min;
    do {
        printf("Nhap so thu %d\t", i + 1);
        scanf("%d", &arr[i]);
        if (!isPrime(arr[i])) {
            printf("%d khong phai la so nguyen to. Vui long nhap lai.\n", arr[i]);
            break;
        }
        i++;
    } while (i < 5 &&  (!isPrime(arr[i])));
    for (i = 0; i < 5; i++) {
        printf("%d\t", arr[i]);

        if (i == 0) {
            max = arr[i];
            min = arr[i];
        }
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    printf("\nGia tri lon nhat la %d", max);
    printf("\nGia tri nho nhat la %d", min);
}
