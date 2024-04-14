#include<stdio.h>
int main(){
    int x , y;
    printf("Giá trị số thứ nhất là: \n");
    scanf("%d", &x);
    printf("Giá trị số thứ hai là: \n");
    scanf("%d",  &y);
    if(x<2000 || x >3000 && y>100 && y < 500){
        printf("Hai số được hiển thị là %d\t - %d\n", x , y);
    }
    else{
        printf("Bạn đã nhập sai rồi\n");
    }
    return 0;
}
