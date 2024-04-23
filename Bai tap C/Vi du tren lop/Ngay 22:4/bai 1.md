#include<stdio.h>
int main() {
    int arr[10];
    int i, n = 0;
    for (i = 0; i < 10; i++) {
        printf("Nhập phần tử thứ %d\n", i + 1);
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < 10; i+=2) {
        n = arr[i];
        printf("%d\t", n);
    }
}
