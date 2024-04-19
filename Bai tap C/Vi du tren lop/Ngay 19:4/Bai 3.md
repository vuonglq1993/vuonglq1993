//Viết  ra 1 tam giác
#include<stdio.h>
int main() {
    int i, z, n;
    char a = '*';
    i = 1;
    z = 0;
    printf("Nhập vào chiều cao tam giác: \t");
    scanf("%d", &n);
    if (n < 2) {
        printf("vui lòng nhập tam giác có chiều cao lớn hơn 2");
    } else {
        printf("\n\n");
        printf("Hình tam giác đó là: \n");
        while (i <= n) {
            for (z = 0;z < i;z++) {
                printf(" %c", a);
            }
            i++;
            printf("\n");
        }
    }
}
