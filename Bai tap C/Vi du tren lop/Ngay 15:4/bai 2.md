#include<stdio.h>
int main(){
    char charc;
    printf("Nhập một ký tự trong bảng chữ cái Alphabet: \n");
    scanf("%c", &charc);
    if(charc>'Z'){
        printf("Ký tự đó là chữ thường");
    }
    else if(charc >='0' && charc<='9') {
        printf("Ký tự đó là chữ số");
    }
    else{
        printf("Ký tự đó là chữ hoa");
    }
}
