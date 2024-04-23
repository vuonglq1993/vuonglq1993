#include<stdio.h>
#include<stdlib.h>
int isPrime(int num) {
    if (num <= 1) return 0;
    for (int c = 2; c * c <= num; c++) {
        if (num % c == 0) return 0;
    }
    return 1;
}

int main() {
    int arr[20], i = 0, n, count = 0;
    int max, min;
    int numb;
    do {
        numb = rand() % 200 + 1;
        if (isPrime(numb)) {
            arr[i]=numb;
            i++;
        }
    } while (i < 20);
    for (i = 0; i < 20; i++) {
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
