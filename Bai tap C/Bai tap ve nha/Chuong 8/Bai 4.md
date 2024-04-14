#include <stdio.h>

int main() {
    int num1, num2, num3;

    // Nhập vào 3 số từ người dùng
    printf("Nhập số thứ nhất: ");
    scanf("%d", &num1);
    printf("Nhập số thứ hai: ");
    scanf("%d", &num2);
    printf("Nhập số thứ ba: ");
    scanf("%d", &num3);

    // So sánh các số để tìm số lớn nhất
    int max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }

    // In số lớn nhất
    printf("Số lớn nhất là: %d\n", max);

    return 0;
}
