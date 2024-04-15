#include<stdio.h>
int main(){
    int a,b,c;
    printf("Nhập cạnh thứ 1 của tam giác: \n");
    scanf("%d",  &a);
    printf("Nhập cạnh thứ 2 của tam giác: \n");
    scanf("%d", &b);
    printf("Nhập cạnh thứ 3 của tam giác: \n");
    scanf("%d", &c);
    if(a*a == b*b + c*c){
        printf("Tam giác đó là tam giác vuông, có cạnh huyền là %d\n", a);
    }
    else if(b*b == a*a + c*c){
        printf("Tam giác đó là tam giác vuông, có cạnh huyền là %d\n", b);
    }
    else if(c*c == b*b + a*a){
        printf("Tam giác đó là tam giác vuông, có cạnh huyền là %d\n", c);
    }
    else{
        printf("Đó  không phải là tam giác vuông\n");
    }
    return 0;
}
