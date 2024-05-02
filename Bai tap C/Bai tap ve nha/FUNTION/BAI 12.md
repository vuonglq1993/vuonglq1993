//
// Created by macos on 2/5/24.
//
#include<stdio.h>
int nhapso(int a, int b){
    printf("Nhap so thu nhat: ");
    scanf(" %d", &a);
    printf("Nhap so thu hai: ");
    scanf(" %d", &b);
}
void menu(){
    printf("Day la chuong trinh may tinh giua 2 so vua nhap\n");
    printf("1. Tinh tong\n");
    printf("2. Tinh hieu\n");
    printf("3. Tinh tich\n");
    printf("4. Tinh thuong\n");
    printf("5. Thoat chuong trinh\n");

}
int sum(int a, int b){
    int tong = a + b;
    printf("Tong cua 2 so %d va %d la: %d \n", a , b , tong);
}
int sub(int a, int b){
    int hieu;
        hieu = a - b;
        printf("Hieu cua 2 so %d va %d la: %d \n", a , b , hieu);
    }
int multi(int a, int b){
    int tich = a * b;
    printf("Tich cua 2 so %d va %d la: %d \n",a,b,tich);
}
double div(int a, int b){
    if(b == 0){
        printf("Chuong trinh khong the tinh thuong cua 2 so, vui long nhap lai");
        return 0;
    }else{
        float thuong = a/b;
        printf("Thuong cua 2 so %d va %d la: %.2f ", a,b,thuong);
        return 1;
    }
}
int main(){
    int luachon;
    int a,b;
    char Chonlai;
    menu();
    do {
        printf("Ban hay chon chuc nang mong muon: \n");
        scanf("%d", &luachon);
        switch (luachon) {
            case 1:
                nhapso(a,b);
                sum(a, b);
                printf("Ban co muon tiep tuc khong?(Y/N)");
                scanf(" %c", &Chonlai);
                break;
            case 2:
                nhapso(a,b);
                sub(a, b);
                printf("Ban co muon tiep tuc khong?(Y/N)");
                scanf(" %c", &Chonlai);
                break;
            case 3:
                nhapso(a,b);
                multi(a, b);
                printf("Ban co muon tiep tuc khong?(Y/N)");
                scanf(" %c", &Chonlai);
                break;
            case 4:
                nhapso(a,b);
                div(a, b);
                printf("Ban co muon tiep tuc khong?(Y/N)");
                scanf(" %c", &Chonlai);
                break;
            default:
                printf("Cam on ban da chon chuong trinh,  Hen gap lai!!");
                break;
        }

    }        while (luachon != 5 && (Chonlai == 'Y' || Chonlai == 'y'));


}
