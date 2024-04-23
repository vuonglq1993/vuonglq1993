#include<stdio.h>
int main(){
    int arr[10];
    int i, max, min, countmax, countmin;
    countmax = 0;
    countmin = 0;
    do{
        printf("Nhập phần tử thứ %d trong mảng: ", i+1);
        scanf("%d", &arr[i]);
        if(i==0) {max = arr[i]; min =arr[i];}
        if(arr[i]>max) max = arr[i];
        if(arr[i]<min) min = arr[i];
        i++;
    }while(i<10);
    for(i = 0; i < 10; i++){
        if(arr[i]== max) countmax ++;
        if(arr[i]== min) countmin ++;
    }
    printf("\nGiá trị lớn nhất  %d, số lần xuất hiện %d", max, countmax);
    printf("\nGía trị nhỏ nhất là %d, số lần xuất hiện %d", min, countmin);
}
