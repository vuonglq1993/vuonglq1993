//
// Created by macos on 24/4/24.
//
#include<stdio.h>
int factional(int x){
    int i;
    int factional = 1;
    for(i = 1; i<=x; i++){
        factional = factional*i;
    }
    return(factional);
}
int main(){
    int n;
    int a;
    for(a=0;a<110;a++){
    printf("Nhap so can tinh: ");
    scanf("%d",&n);
    printf("Giai thua cua so %d la %d\n", n, factional(n));}
}
