#include<stdio.h>
int main(){
    char  character;
    printf("Nhập vào ký tự: \n");
    character = getchar();
    printf("Mã ASCII của ký tự '%c' là %d\n", character, character);
}
