//Viết chương trình xuất ra bảng cửu chương từ 2>10
#include<stdio.h>
int main(){
    int i = 2;
    int a = 1;
    int z;
    for(i=2;i<=10;i++){
        for(a=1;a<=9;a++){
            z = i*a;
            printf("%d*%d =\t%d\t\t",i , a ,z);
        }printf("\n");
    }}
