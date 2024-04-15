#include<stdio.h>
int  main(){
    int c;
    printf("\t\tMENU\t\t\n");
    printf("=======================\n");
    printf("1.\t CF\n");
    printf("2.\t C\n");
    printf("3.\t HDJ\n");
    printf("4.\t DreamWeaver\n");
    printf("5.\t RDBMS\n");
    printf("6.\t Learn Java By Example\n");
    printf("=======================\n");
    printf("Chon: ");
    scanf("%d", &c);
    switch(c){
        case 1: printf("\nBan chon CF!");
        break;
        case 2: printf("\nBan chon C!");
        break;
        case 3: printf("\nBan chon HDJ!");
        break;
        case 4: printf("\nBan chon DreamWeaver!");
        break;
        case 5: printf("\nBan chon RDBMS!");
        break;
        case 6: printf("\nBan chon Learn Java By Example!");
        break;
        default: printf("Bạn lựa chọn sai rồi!");
    }
    return 0;
}
