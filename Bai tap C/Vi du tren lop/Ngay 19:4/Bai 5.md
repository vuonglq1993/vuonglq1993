#include<stdio.h>
int main(){
    int i , n , S;
    i = 0;
    S = 0;
    n = 100;
    while(i<n){
        S = S + i;
        i++;
    }
    printf("Tổng các số từ 1> 100 là: %d", S);
}
