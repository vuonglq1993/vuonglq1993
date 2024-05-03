//
// Created by macos on 3/5/24.
//
#include<stdio.h>
int Mang(int phantu[], int n) {
    for (int i = 0; i < n; i++) {
        printf("Nhap phan tu thu %d: ", i + 1);
        scanf("%d", &phantu[i]);
    }
}
int findmaxElement(int arr[], int n){
    int indexMax = 0;
    int max;
    for(int i = 0;i<n;i++){
        if(i==0) {
            max = arr[i];
            indexMax = i + 1;
        }
        if (arr[i]>max){
            max = arr[i];
            indexMax = i + 1;
        }
    }
    printf("%d", max);
    printf("\nIndex cua phan tu lon nhat la: %d", indexMax);
}
int findminElement(int arr[], int n){
    int min = 0;
    int indexMin = 0;
    for(int i = 0; i<n; i++){
        if(i == 0) {
            min = arr[i];
            indexMin = i+1;
        }
        if(arr[i]< min) {
            min = arr[i];
            indexMin = i+1;
        }
    }
    printf("%d", min);
    printf("\nINDEX cua phan tu nho nhat la: %d\n", indexMin);
}
int main(){
    int n;
    printf("Nhap so phan tu trong mang: ");
    scanf("%d", &n);
    int arr[n];
    Mang(arr, n);
    printf("\nPhan tu lon nhat cua mang la: ");
    findmaxElement(arr, n);
    printf("\nPhan tu nho nhat cua mang la: ");
    findminElement(arr, n);
}
