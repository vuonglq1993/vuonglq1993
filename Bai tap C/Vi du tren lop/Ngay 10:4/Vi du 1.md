#include<stdio.h>

int main(){
//int main(){
    //Kiểu số nguyên
    int integerVar = 10;
    printf("Kiểu số nguyên: %d\n", integerVar);
    //Kiểu số thực
    float floatVar = 3.14;
    printf("Kiểu số thực: %.2f\n", floatVar);
    //Kiểu ký tự
    int charVar = 'A';
    printf("Kiểu ký tự: %c\n", charVar);
    //Kiểu Boolean (sử dụng kiểu int)
    int boolVar = 1; // 1 là true, 0 là false
    printf("Kiểu Boolean: %d\n", boolVar);
    //Kiểu chuỗi ký tự (mảng các ký tự)
    char stringVar[] = "Hello, world! ";
    printf("Kiểu chuỗi ký tự: %s\n", stringVar);
    return 0;
}
