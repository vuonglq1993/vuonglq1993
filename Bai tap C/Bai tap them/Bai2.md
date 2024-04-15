#include<stdio.h>
    int main(){
    int S , i , n;
    S = 0;
    i = 1;
//    Nhập 1 số
    printf("Nhập 1 số bất kì: \n");
    scanf("%d", &n);
    while ( i<=n)
    {
        S = S + i*i;
        i++;
    }
    printf("Kết quả là: %d\n", S);
}
