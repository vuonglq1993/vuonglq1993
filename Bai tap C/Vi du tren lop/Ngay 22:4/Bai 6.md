#include<stdio.h>
#include<string.h>

int main(){
    char name[5][30];
    int i = 0;
    do
    {
        printf("Ten hoc vien thu %d la: \n", i+1);
        scanf("%[^\n]s", name[i]);
        fflush(stdin);
        if(strlen(name[i])>30)
        {
            printf("Ten ban nhap da vuot qua 30 ky tu, vui long nhap lai");
            break;
        }
        i++;
    }while(i<5&& strlen(name[i])<=30);
    for(i = 0; i<5;i++) {
        printf("\t%s\n", name[i]);
    }
}
