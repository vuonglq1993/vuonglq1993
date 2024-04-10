#include <stdio.h>
#include <stdlib.h>

int main(){
//    Nhập tên người dùng
    char name[50];
    printf("nhập tên của bạn:\n", name);
    scanf("%s", name);
//    Nhập năm sinh người dùng
    int birthYear;
    printf("Bạn sinh năm bao nhiêu? \n", birthYear);
    scanf("%d", &birthYear);
//     Tính toán tuổi người dùng
    int currentYear = 2024;
    int age = currentYear - birthYear;
//    In thông tin và lời chào dựa trên tuổi
    printf("Xin chào, %s!\n", name);
    printf("bạn %d tuổi\n", age);
    if (age<0) {
        printf("Xin lỗi, có vẻ như bạn đã nhập sai năm sinh\n");
    }   else if (age < 18) {
            printf("bạn là một người trẻ tuổi\n");}
        else if (age < 60) {
            printf("bạn là một người trưởng thành\n");}
        else {
            printf("bạn là một người cao tuổi");}
    return 0;
    }

