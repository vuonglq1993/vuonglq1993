#include<math.h>
#include<stdio.h>
int main(){
    float S, n, x;
    S = 0;
    x = 2;
    printf("Nhập n:\n");
    scanf("%f", &n);
    for(float i  = 1;i<=n;i++){
        S =S + pow(x,2*i);
    }
    printf("Kết quả của phép tính S(n) là: %f", S);
}
