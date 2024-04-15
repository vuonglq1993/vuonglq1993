//Viết chương trình in ra 1 tam giác vuông
#include<stdio.h>
int main(){
    int i , z , n;
    char a = '*';
    printf("Nhập vào chiều dài cạnh tam giác: \t");
    scanf("%d", &n);
    printf("\n\n\n");
    printf("Hình tam giác đó là: \n");
    for(i = 1; i<=n;i++){
        for(z = 0; z<i; z++) {
            printf("  %c", a);
        }printf("\n");
    }
}
