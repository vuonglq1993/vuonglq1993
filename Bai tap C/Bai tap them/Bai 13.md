//Viết hàm tìm 1 vị trí mà ɡiá trị tại vị trí đó là ɡiá trị nhỏ nhất tronɡ mảnɡ 1 chiều các số nɡuyên
#include<stdio.h>
#include<math.h>
int main(){
    float a[100];
    int i = 0;
    int n;
    int ketqua;
    int min = +INFINITY;
    printf("Số phần tử trong mảng là: \t");
    scanf("%d", &n);
    do{
        printf("Số thứ %d là: \n", i+1);
        scanf("%f",  &a[i]);
        i++;
    }while(i<n);
    for(i = 0; i<n; i++){

        if(a[i]< min) {
            min = a[i];
            ketqua = i + 1;
        }
    }printf("Giá trị nhỏ nhất trong mảng là: %d\n", min);
    printf("Vị trí của giá trị nhỏ nhất là: '%d'", ketqua);
}
