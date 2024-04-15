#include<stdio.h>

int main() {
    char character;
    printf("Nhập vào một ký tự từ bàn phím: \n");
    character = getchar();
    if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
        if (character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U' ||
            character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
            printf("chữ đó là nguyên âm\n");
        } else {
            printf("chữ đó là phụ âm\n");
        }
    } else {
        printf("Ký tự đó không thuộc  bảng chữ cái!\n");
    }


}
