#include <stdio.h>
#include <string.h>

int main() {
    char str[100];
    printf("Nhập chuỗi: ");
    fgets(str, sizeof(str), stdin);

    // Loại bỏ ký tự newline '\n' nếu có
    if (str[strlen(str) - 1] == '\n') {
        str[strlen(str) - 1] = '\0';
    }

    int length = strlen(str);

    printf("Chuỗi đảo ngược: ");
    for (int i = length - 1; i >= 0; i--) {
        printf("%c", str[i]);
    }
    printf("\n");

    return 0;
}
