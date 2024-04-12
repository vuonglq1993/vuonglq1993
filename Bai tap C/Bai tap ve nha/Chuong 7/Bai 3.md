#include<stdio.h>
int main(){
    int a , b;
//Nhập 2 số và tính hiệu của chúng
    printf("Nhập số lớn hon: \n");
    scanf("%d", &a);
    printf("Nhập số nhỏ hơn: \n");
    scanf("%d", &b);
    int c = a - b;
    if (c == a|| c == b)
    {
        if(c == a)
        {
            printf("Hiệu của 2 số là: %d\n", a);
        }
        else
        {
            printf("Hiệu của 2 số là: %d\n", b);
        }
    }
    else
    {
        printf("Hiệu của 2 số khác với giá trị đã được nhập\n");
    }
    return 0;
}
