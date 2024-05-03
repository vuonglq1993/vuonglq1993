//
// Created by macos on 3/5/24.
//
#include<stdio.h>
int n1, n2;
int input(){
    printf("Nhap so nho hon: ");
    scanf("%d", &n1);
    printf("Nhap so lon hon: ");
    scanf("%d", &n2);
}
int boiso(int n1, int n2){
    int ketqua=0;
    int i;
    for(i=n1;i<=n2;i++){
        if(i%50==0) {
            ketqua =i;
        printf(" %d ", ketqua);
        }
    }
}
int main(){
    printf("Day la chuong trinh in ra cac so la boi so cua 50 trong 1 khoang cho truoc\n");
    input();
    boiso(n1,n2);
}
