#include<stdio.h>
    int main(){
    int S,  i , n;
    S = 0, i =  1;
//    Bước nhập liệu
    printf("Nhập 1 số nguyên bất kì: \n");
    scanf("%d", &n);
// Bước tính tổng
    while (i <= n) {
        S = S + i;
        i++;
    }
    printf("Tổng của các số từ 1 đến n là : %d\n", S);



}
