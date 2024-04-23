#include<stdio.h>
int main() {
    int intarr[5], i;
    float floatarr[10] = {0};
    for (i = 0; i < 5; i++) {
        printf("Nhập phần tử thứ %d\t", i + 1);
        scanf("%d", &intarr[i]);
    }
    printf("\n");
    for(i = 0; i<5; i++){
        printf("%d\t", intarr[i]);
    }
    printf("\n");
    for(i = 0; i< 5; i++){
        floatarr[i]= (float)intarr[i];
    }
    for(i = 0; i<10; i++){
        printf("%f\t", floatarr[i]);
    }
}
