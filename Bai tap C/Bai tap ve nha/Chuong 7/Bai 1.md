#include<stdio.h>
int main(){
    int a,b;
//    Nhập 2 số
    printf("Đây là chương trình xét xem liệu số a có chia hết cho số b\n");
    printf("Nhập số a :\n");
    scanf("%d", &a);
    printf("Nhập số b: \n");
    scanf("%d", &b);
//    Xét phần dư của a chia cho b
    int x = a%b;
    printf("a chia cho b dư: %d\n", x);
    if(x!=0)
    {
        printf("a không chia hết cho b");
    }
    else
    {
        printf("a chia hết cho b");
    }
}

