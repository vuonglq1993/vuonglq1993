//
// Created by macos on 1/5/24.
#include<stdio.h>
#include<math.h>

float GetArea(float x, float y, float z) {
    float p;
    p = (x + y + z) / 2;
    float GetArea;
    GetArea = sqrt(p * (p - x) * (p - y) * (p - z));
    return (GetArea);
}

float CanhHopLe(float x, float y, float z) {
    if (x + y > z && y + z > x && x + z > y) {
        return 1;
    } else {
        return 0;
    }
}

int main() {
    float x, y, z;
    printf("Day la chuong trinh tinh dien tich hinh tam giac\n");
    printf("Nhap canh thu nhat: ");
    scanf("%f", &x);
    printf("Nhap canh thu hai: ");
    scanf("%f", &y);
    printf("Nhap canh thu ba: ");
    scanf("%f", &z);
    if (!CanhHopLe(x, y, z)) {
        printf("Canh cua tam giac khong hop le, vui long nhap lai");
    } else {
        printf("Dien tich cua tam giac la: %.2f", GetArea(x, y, z));
    }

}
