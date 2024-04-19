#include<stdio.h>
int main(){
    int i, n;
    i = 0;
    n = 100;
    printf("Các số chẵn từ 1 tới 100 được hiển thị là:\n");
    for(i = 2;i<=n;i+=2){
        printf("%d\t", i);
    }
}
