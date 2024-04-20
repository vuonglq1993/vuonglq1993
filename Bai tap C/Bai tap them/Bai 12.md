//Tìm giá trị trong mảng số thực xa giá trị x nhất, tìm giá trị lớn nhất trong mảng đó.
#include<stdio.h>
#include<math.h>
int main(){
    float  a[100];
    int n;
    float x;
    int i =0 ;
    printf("Nhập 'x': \t");
    scanf("%f",  &x);
    float maxdistance = 0;
    float ketqua = 0;
    float max =  0;
    printf("Nhập số phần tử: \t");
    scanf("%d", &n);
    do{
        printf("\nPhần tử thứ %d là: ", i+1);
        scanf("%f", &a[i]);
        i++;
    }while(i<n);
    for(i = 0; i<n;i++) {
        float distance = fabs(a[i] - x);
        if (distance>maxdistance){
            maxdistance = distance;
            ketqua = a[i];
        }
        if(a[i]>max){
            max =  a[i];
        }

    }printf("Giá trị xa giá trị x nhất là: %.3f\n", ketqua);
    printf("Giá trị lớn nhất trong mảng là: %.3f", max);
}
