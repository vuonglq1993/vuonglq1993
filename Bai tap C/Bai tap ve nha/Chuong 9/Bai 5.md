#include<stdio.h>
int main(){
    int x = 7, y = 1;
    char z = '*';
//Vòng lặp để hiển thị số dòng:
    for(x = 7; x>=1; x--){
//Vòng lặp để hiển thị số lượng dấu sao trên  dòng
        for(y= 1; y<=x; y++){
            printf("%c", z);
        }
        printf("\n");
    }
}
