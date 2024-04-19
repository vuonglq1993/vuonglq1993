//Viết  chương trình nhập một số  nguyên dương bất kỳ, tính tổng các chữ số của nó sử dụng vòng lặp for;
#include<stdio.h>
int main(){
    int n, i,tong;
    tong = 0;
    printf("Nhập số nguyên dương bất kỳ: \n");
    scanf("%d", &i);
        n = i;
        for(n = i; n>0; n/=10){
            tong += n%10 ;
    }
    printf("Tổng các chữ số trong số nguyên dương đó là: %d\t", tong);
}
