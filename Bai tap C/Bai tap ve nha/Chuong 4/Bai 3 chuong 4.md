#include <stdio.h>
    int main(){
//Khai báo các biến
    float   Chieudai , Chieurong , Chuvi, Dientich;
//Nhập vào chiều dài và chiều rộng của hình chữ nhật
    printf("Chieu dai cua hinh chu nhat la: \n");
    scanf("%f", &Chieudai);
    printf("Chieu rong cua hinh chu nhat la: \n");
    scanf("%f", &Chieurong);
    if (Chieudai<Chieurong){
        printf("Loi: Chieu dai phai lon hon hoac bang chieu rong");
        return 1;
    }
//Tính chu vi và diện tích của hình chữ nhật
    Chuvi = 2*Chieudai + 2*Chieurong;
    Dientich = Chieudai*Chieurong;
//Hiển thị chu vi và diện tích của hình chữ nhật
    printf("Chu vi cua hinh chu nhat la: %.2f\n", Chuvi);
    printf("Dien tich cua hinh chu nhat la: %.2f\n", Dientich);

}
