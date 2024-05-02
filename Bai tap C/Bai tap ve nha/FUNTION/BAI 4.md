//
// Created by macos on 26/4/24.
//
#include<stdio.h>
float sodu = 0.0;
void printMenu(){
    printf("************ ATM ************\n");
    printf("a. Kiem tra so du\n");
    printf("b. Rut tien\n");
    printf("c. Gui tien\n");
    printf("d. Thoat\n");
}
void kiemTraSoDu(){
    printf("So du = %.2f", sodu);
}
void rutTien(){
    float sotien;
    printf("Nhap so tien can rut: $");
    scanf("%f", &sotien);
    if(sotien>0&&sotien<=sodu) {
        sodu -= sotien;
        printf("Rut tien thanh cong. So du moi: %.2f", sodu);
    }else {
        printf("So tien khong hop le hoac so du con lai khong du\n");
    }
}
void guiTien(){
    float sotien;
    printf("Nhap so tien can gui: $");
    scanf("%f", &sotien);
    if(sotien>0){
        sodu+= sotien;
        printf("Gui tien thanh cong. So du moi la: %.2f", sotien);
    }
    else{
        printf("So tien khong hop le.\n");
    }
}
int main(){
    char luachon;
    do{
        printMenu();
        printf("Nhap lua chon cua ban: ");
        scanf(" %c", &luachon);
        switch(luachon){
            case 'a':
                kiemTraSoDu();
                break;
            case 'b':
                rutTien();
                break;
            case 'c':
                guiTien();
                break;
            case 'd':
                printf("Cam on ban da su dung dich vu ATM. Hen gap lai.\n");
                break;
            default:
                printf("Lua chon khong hop le. Vui long thu lai.\n");
        }
        printf("\n");
     }while(luachon !='d');

    return 0;
}
