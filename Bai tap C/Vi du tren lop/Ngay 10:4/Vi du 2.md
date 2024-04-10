#include<stdio.h>
//int tax(){
int main(){
//Nhập tên người sử dụng
    char name[50];
    printf("Nhập tên của bạn: \n");
    scanf("%[^\n]s", name);

//Nhập số giờ làm việc
    float time;
    printf("Nhập số giờ làm việc: \n");
    scanf("%f", &time);

//Nhập giá mỗi giờ làm việc
    float rate;
    printf("Nhập giá mỗi giờ làm việc: \n");
    scanf("%f", &rate);
//Tính tổng tiền lương
    float income = rate * time;
//Tính thuế(10%)
    float tax = 0.1* income;
    float net = income - tax;
//In kết quả
    printf("cảm ơn bạn %s đã cộng tác cùng chúng tôi.\n Sau đây là tổng lương sau thuế của : \n", name);
    printf ("................................\n");
    printf("tổng tiền lương trước thuế: %.2f\n", income);
    printf("tổng tiền lương sau thuế: %.2f\n", net);
    return 0;
}
