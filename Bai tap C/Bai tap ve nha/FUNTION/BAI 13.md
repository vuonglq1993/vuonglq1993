//
// Created by macos on 2/5/24.
//
#include<stdio.h>
float dientich(float chieudai, float chieurong){
    float dientich = chieudai*chieurong;
    printf("Dien tich hinh chu nhat la: %.2f\n", dientich);
}
float chuvi(float chieudai, float chieurong){
    float chuvi = chieudai*2 + chieurong*2;
    printf("Chu vi hinh chu nhat la: %.2f\n", chuvi);
}
int main(){
    printf("Day la chuong trinh tinh chu vi va dien tich hinh chu nhat\n");
    float chieudai, chieurong;
    int option;

    char chonlai;
    do{
        printf("Nhap chieu dai cua hinh chu nhat: ");
        scanf("%f", &chieudai);
        printf("Nhap chieu rong cua hinh chu nhat: ");
        scanf("%f", &chieurong);
        printf("Ban muon tinh dien tich hay chu vi? \n");
        printf("Nhap 1 de tinh dien tich, nhap 2 de tinh chu vi");
        scanf("%d", &option);
        switch(option){
            case 1:
                dientich(chieudai,chieurong);
                break;
            case 2:
                chuvi(chieudai,chieurong);
                break;
            default:
                printf("Lua chon khong phu hop, xin nhap lai\n");
        }

            printf("Ban co muon tiep tuc chu?(Y/N) ");
            scanf(" %c", &chonlai);
            if (chonlai == 'n' || chonlai == 'N') printf("Hen gap lai");

    }while (chonlai == 'y' || chonlai =='Y');
}
