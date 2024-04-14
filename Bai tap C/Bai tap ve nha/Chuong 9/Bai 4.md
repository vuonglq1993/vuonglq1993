#include<stdio.h>
int main() {
    int i = 0, x = 1;
    int z = 5, y = 0;
    for (i = 1; i <= 5; i++) {
        for(x = 1; x<=i; x++){
            printf("%d", x);
        }
        printf("\n");
    }
    for(y=5;y>=1; y--) {
        for (z = 1; z <=y;z++ ) {
            printf("%d", z);
        }
        printf("\n");
    }
}
