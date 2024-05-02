#include<stdio.h>
int square(int x){
    int square = x*x;
    return(square);
}
int main(){
    int n = 0, i;
    do {
        printf("Accept a number: ");
        scanf("%d", &i);
        printf("\nSquare of %d is %d\n", i, (square(i)));
        n++;
    }while(n>=0 &&);
}
