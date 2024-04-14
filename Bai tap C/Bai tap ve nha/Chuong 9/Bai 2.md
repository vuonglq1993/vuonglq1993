#include<stdio.h>
int main(){
//    Nhập 2 số
    int num1 , num2;
    int i, S;
    i = 0;
    S = 0;
    printf("Nhập số bé hơn: \n");
    scanf("%d", &num1);
    printf("Nhập số lớn hơn: \n");
    scanf("%d", &num2);
//    TH1: Số bé hơn là số chẵn
        if(num1 %2 == 0){
            i = num1 + 1;
            while(i<num2){
                S = S+i;
                i+=2;
            }
            printf("Tổng tất cả các số lẻ nằm giữa 2 số là: %d\n", S);
        }
//        TH2: số  bé  hơn là số lẻ
        else{
            i =  num1 + 2;
            while(i<num2){
                S = S + i;
                i+=2;
            }
            printf("Tổng tất cả các số lẻ nằm giữa 2 số là: %d\n", S);
        }


}
