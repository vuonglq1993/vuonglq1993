//
// Created by macos on 2/5/24.
//
#include<stdio.h>

int check(float tieuchuan) {
    if (tieuchuan >= 6) {
        return 1;
    } else {
        return 0;
    }
}

int say() {
    printf("Bạn cầm bó hoa tới trước cửa nhà người ấy\n");
    printf("Cộc cộc cộc\n");
    printf("Cửa mở, người ấy từ từ bước ra \n");
    printf("Bạn quỳ xuống, tay đưa ra bó hoa và bắt đầu tỏ tình\n");
}

void broke() {
    printf("Tỏ tình thất bại, bạn buồn bã đi về nhà \n");
}

void love() {
    printf("Tỏ tình thành công, hai bạn bắt đầu cùng nhau đi dạo dưới ánh đèn đường mờ ảo màu vàng\n");
}

int main() {
    float chieucaoban, cannangban;
    float diemchieucaoban, diemcannangban, diemchieucaonguoiay, diemcannangnguoiay;
    float chieucaonguoiay, cannangnguoiay;
    float diemtrungbinhban, diemtrungbinhnguoiay;
    printf("Nhập vào chiều cao của bạn: ");
    scanf("%f", &chieucaoban);
    printf("Nhập vào cân nặng của bạn: ");
    scanf("%f", &cannangban);
    if (chieucaoban < 150) {
        diemchieucaoban = 5;
    } else if (chieucaoban <= 160) {
        diemchieucaoban = 6;
    } else if (chieucaoban <= 170) {
        diemchieucaoban = 7;
    } else {
        diemchieucaoban = 8;
    }
    if (cannangban > 90) {
        diemcannangban = 5;
    } else if (cannangban >= 85) {
        diemcannangban = 6;
    } else if (cannangban >= 80) {
        diemcannangban = 7;
    } else if (cannangban >= 70) {
        diemcannangban = 8;
    } else {
        diemcannangban = 5;
    }
    printf("Nhập vào chiều cao người ấy: ");
    scanf("%f", &chieucaonguoiay);
    printf("Nhập vào cân nặng người ấy: ");
    scanf("%f", &cannangnguoiay);
    if (chieucaonguoiay < 140) {
        diemchieucaonguoiay = 5;
    } else if (chieucaonguoiay <= 150) {
        diemchieucaonguoiay = 6;
    } else if (chieucaonguoiay <= 155) {
        diemchieucaonguoiay = 7;
    } else {
        diemchieucaonguoiay = 8;
    }
    if (cannangnguoiay > 60) {
        diemcannangnguoiay = 5;
    } else if (cannangnguoiay >= 50) {
        diemcannangnguoiay = 6;
    } else if (cannangnguoiay >= 45) {
        diemcannangnguoiay = 7;
    } else if (cannangnguoiay >= 40) {
        diemcannangnguoiay = 8;
    } else {
        diemcannangnguoiay = 5;
    }
    diemtrungbinhban = (diemchieucaoban + diemcannangban) / 2;
    diemtrungbinhnguoiay = (diemchieucaonguoiay + diemcannangnguoiay) / 2;
    if (check(diemtrungbinhnguoiay)) {
        say();
        if (check(diemtrungbinhban)) {
            love();
        } else
            broke();
    } else {
        printf("Người ta không xứng với bạn\n");
        printf("Bạn đi về và tìm kiếm người khác tốt hơn\n");
    }
}
