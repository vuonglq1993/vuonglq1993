#include<stdio.h>
int main(){
    float S = 0 ;
    float A = 0;
    float n;
    printf("Nhập vào giá trị n: \t");
    scanf("%f", &n);
    for(float  i = 0; i <= n; i++)
    {
        S = S + 1 / ( 2 * i + 1 );
    }
    printf("Kết quả S(%f) tính được : \t%.2f\n",n, S);
    float c = 0;
    while(c<=n)
    {
        A = A + (1 / (2*c+1));
        c++;
    }
    printf("Kết quả A(%f) tính được: \t%.4f", n , A);
}
