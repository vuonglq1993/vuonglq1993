#include<stdio.h>

int main() {
    float x[5][6], tb[5], tong[5] = {0};
    int i = 0, j = 0;
    for (i = 0; i < 5; i++) {
        printf("Nhap diem cho hoc vien %d: ", i + 1);
        printf("\n");
        for (j = 0; j < 6; j++) {
            printf("Diem mon hoc %d: ", j + 1);
            scanf("%f", &x[i][j]);
            tong[i] = tong[i] + x[i][j];
        }
        tb[i] = tong[i] / 6;
    }
    printf("\nDanh sach diem va diem trung binh cua cac hoc vien:\n");
    printf("+~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~~+\n");
    printf("|Hoc vien | Mon hoc 1 | Mon hoc 2 | Mon hoc 3 | Mon hoc 4 | Mon hoc 5 | Mon hoc 6 | Trung binh |\n");
    printf("+~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~~+\n");

    for (i = 0; i < 5; i++) {
        printf("|    %d    ", i + 1);
        for (j = 0; j < 6; j++) {
            printf("|       %.f  ", x[i][j]);
        }
        printf("|       %.2f|", tb[i]);
        printf("\n");
    }
    printf("+~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~+~~~~~~~~~~~~+");
}
