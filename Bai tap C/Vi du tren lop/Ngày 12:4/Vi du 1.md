#include<stdio.h>
#include<stdlib.h>

    int main() {
//    int main(int argc, char *argv[])

            printf("Bạn đã đăng nhập thành công. XIN CHÚC MỪNG!!!\n");
            printf("Bạn muốn sử dụng chức năng nào? \n");
            printf("1, Rút tiền \n");
            printf("2, Kiểm tra số dư \n");
            printf("3, Chuyển khoản \n");
            printf("4, Kiểm tra lịch sử giao  dịch\n");
            printf("Mời bạn lựa chọn 1-4\n");

            int choose = 0;
            scanf("%d", &choose);
            if(choose>=1 && choose <=4) {
                switch (choose) {
                    case 1:
                        printf("Giao dịch thành công, số tiền còn lại là 1 tỉ \n");
                        break;
                    case 2:
                        printf("Số tiền còn lại là 3 tỉ\n");
                        break;
                    case 3:
                        printf("Tài khoản không tồn tại\n");
                        break;
                    case 4:
                        printf("Bạn chưa có giao dịch nào\n");
                        break;
                    default:
                        printf("Bạn đã chọn sai rồi \n");
                }
            }
                else{
                    printf("Bạn chỉ được chọn từ 1 - 4\n");
                }
                return 0;

    }
