#include<stdio.h>
#include<stdlib.h>
int main(){
    int random,count = 0;
    int arr[20];
    int i = 0;
    do{
        arr[i] = rand() % 20;
        printf("%d\t", arr[i]);
        i++;

    }while(i<20);
    printf("Nhập 1 số bất kỳ: \n");
    scanf("%d", &random);
    for(i = 0;i<20;i++){
        if (random == arr[i]) count ++;
    }
    if(count!=0) {printf("Số đó có trong mảng ngẫu nhiên \n");}
    else {printf("Số đó không có trong mảng ngẫu nhiên");}
}
