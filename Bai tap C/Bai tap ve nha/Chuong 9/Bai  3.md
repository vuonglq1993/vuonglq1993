#include<stdio.h>
int main() {
    int x = 0, y = 0, z = 1;
    for (z = 1; z < 1000; z = y + x) {
        x = y;
        y = z;
        printf("%d\t", z);
    }
}
