#include<stdio.h>
int main(){
    int i, n ,  tich;
    tich = 1;
    char luachon;
    do{
        printf("Nhập 1 số: \n");
        scanf("%d", &i);
        printf("bảng cửu chương của số %d là: \n",i);
        for(n=1;n<=9;n++){
            tich =  n*i;
            printf("%d*%d=%d\t", i , n ,  tich);
        }
        printf("\nBạn có muốn tiếp tục nhập không?(Y/N): ");
        scanf(" %c", &luachon);

    }while (luachon == 'Y'  || luachon == 'y');
}
