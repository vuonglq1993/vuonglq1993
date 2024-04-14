#include<stdio.h>
int main(){
    int m1,m2,m3;
//    Nhập số điểm mỗi môn
    printf("Điểm môn 1 của bạn là: \n");
    scanf("%d", &m1);
    printf("Điểm môn 2 của bạn là: \n");
    scanf("%d", &m2);
    printf("Điểm môn 3 của bạn là: \n");
    scanf("%d", &m3);
    char loai = 'Z';
    char modifier = '+';
    float  trungbinh = (m1+m2+m3)/3;
    if(trungbinh>=90){
        loai =  'E';
        printf("Loại của học sinh là %c%c\n", loai, modifier);
    }
    else if(trungbinh>=80){
        loai = 'E';
        printf("Loại của học sinh là %c\n", loai);
    }
    else if(trungbinh >=70){
        loai  = 'A';
        printf("Loại của học sinh là %c%c\n", loai, modifier);
    }
    else if(trungbinh >=60) {
        loai = 'A';
        printf("Loại của học sinh là %c\n", loai);
    }
    else if(trungbinh>= 50){
        loai = 'B';
        printf("Loại của học sinh là %c%c\n", loai, modifier);
    }
    else{
        printf("bạn đã rớt");
    }
    return 0;


}
