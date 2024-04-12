#include<stdio.h>
int main(){
    int diem;
    printf("Nhập vào số điểm của bạn:(0-100) \n");
    scanf("%d", &diem);
//    Xếp loại nhân viên
    if(diem>=75)
    {
        printf("Bạn xếp loại \tA\n");
    }
        else if(diem >=60){
            printf("Bạn xếp loại \tB\n");
        }
        else if(diem >=45){
            printf("Bạn xếp loại \tC\n");
        }
        else if(diem >=35){
            printf("Bạn xếp loại \tD\n");
        }
        else{
            printf("Bạn xếp loại \tF\n");
        }

    return 0;
}
