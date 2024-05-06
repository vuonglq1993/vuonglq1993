#include<stdio.h>

float crystalTiendien(int sokWh) {//Ham tinh bill
    float bill;
    if (sokWh <= 50) {//tu 50  kWh tro xuong
        bill = 500 * sokWh;
    } else if (sokWh <= 100) {//Tu 51kWh toi 100 kWh
        bill = 500 * 50 + 700 * (sokWh - 50);
    } else {//Tu 101 kWh tro len
        bill = 500 * 50 + 700 * 50 + 900 * (sokWh - 100);
    }
    return (bill);//Tra ve ket qua bill
}

int main() {
    int sokWh;
    char tieptuc;
    do {
        printf("So kWh trong thang gia dinh su dung la: ");
        scanf("%d", &sokWh);//Nhap vao so kWh su dung
        printf("Tong  tien dien can phai tra la: %.2f", crystalTiendien(sokWh));
        printf("\nBan co muon tiep tuc?(Y/N): ");
        scanf(" %c", &tieptuc);
    } while (tieptuc != 'n' &&tieptuc != 'N');
    printf("\nCam on  ban da su dung chuong trinh, hen gap lai!!!");
}
