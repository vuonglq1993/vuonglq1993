#include<stdio.h>
#include<stdlib.h>
int main(){
    printf("Bạn đã đăng nhập thành công, xin chúc mừng!!!\n");
    printf("Bạn muốn thực hiện giao dịch nào?\n");
    printf("1, Thực hiện lệnh rút tiền\n");
    printf("2, Kiểm tra số dư tài khoản\n");
    printf("3, Thực hiện lệnh chuyển khoản\n");
    printf("4, Kiểm tra lịch sử giao dịch\n");
    printf("Mời bạn lựa chọn 1-4\n");

    int choose= 0;
    scanf("%d", &choose);
    if(choose >=1 && choose<=4 ){
        if (choose == 1)
        {
            printf("Rất tiếc, tài khoản của bạn đã bị khoá\n");
        } else if (choose == 2) {
            printf("Tài khoản của bạn không còn đồng nào \n");
        } else if (choose == 3) {
            printf("Vui lòng nhập số tài khoản đích \n");
        } else if (choose == 4) {
            printf("Bạn hiện chưa có lịch sử giao dịch nào \n");
        }
    }
        else{
            printf("Bạn đã lựa chọn sai, xin mời lựa chọn lại\n");
        }

}
