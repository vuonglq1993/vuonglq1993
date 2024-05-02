//
// Created by macos on 24/4/24.
//
#include<stdio.h>
float area(float x){
    float area = (x*x*3.14);
    return (area);
}
float perimeter(float y){
    float perimeter = (2*y*3.14);
    return(perimeter);
}
int main(){
    float i;
    printf("Nhap vao ban kinh hinh tron: ");
    scanf("%f", &i);
    printf("\nDien tich hinh tron la: %.2f", area(i));
    printf("\nChu vi hinh tron la: %.2f", perimeter(i));
}
