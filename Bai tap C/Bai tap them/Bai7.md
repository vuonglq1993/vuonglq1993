//Viết chương trình tính giai thừa của 1 số  cho trước
#include<stdio.h>
int main(){
    int i , n , a;
    i=1;
    n = 1;
    printf("Số cần tính giai thừa là: \t");
    scanf("%d", &a);
    while (i<=a){
        n = n* i;
        i++;
    }
    printf("Kết quả là: %d\t", n);
}
