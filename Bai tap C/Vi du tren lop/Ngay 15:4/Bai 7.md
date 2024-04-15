#include<stdio.h>
int main(){
    int num1, num2;
    printf("Nhập vào số nguyên đầu tiên: \n");
    scanf("%d", &num1);
    printf("Nhập vào số nguyên thứ hai: \n");
    scanf("%d", &num2);
    if(num1%num2 == 0){
        printf("%d là ước số của %d\n", num2, num1);
    }
    else if(num2%num1==0){
        printf("%d là ước số của %d\n", num1, num2);
    }
    else{
        printf("2 số không phải là ước số của nhau!\n");
    }
}
