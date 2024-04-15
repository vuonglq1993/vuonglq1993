#include<stdio.h>
int main(){
    float S , i , n;
    S = 0;
    i = 1;
    printf("Nhập 1 số bất kì: \n");
    scanf("%f", &n);
    while (i <=n){
        S = S + 1/2*i;
        i++;
    }
}
