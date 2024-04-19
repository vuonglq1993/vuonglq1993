#include<stdio.h>

int main() {
    char kytu;
    int i = 0;
//    Nhập ký tự từ bàn phím:
    printf("Nhập vào các ký tự(Nhập ký tự trắng để thoát): \n");
//    Xét ký tự:
    do {
        printf("\nNhập ký tự: \t");
        scanf("%c", &kytu);
        fflush(stdin);
        i++;
        if (kytu >= '0' && kytu <= '9') {
            printf("Ký tự nhập vào là chữ số");
        } else if (kytu >= 'a' && kytu <= 'z' || kytu >= 'A' && kytu <= 'Z') {
            printf("Ký tự nhập vào là chữ cái");
        } else {
            printf("Ký tự nhập vào là ký tự đặc biệt");

        }
    } while (kytu != ' ');

}
//    Thoát chương trình:

