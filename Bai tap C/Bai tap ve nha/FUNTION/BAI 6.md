//
// Created by macos on 26/4/24.
//
#include<stdio.h>
void displaymenu() {
    printf("********** Coffe Shop Menu **********\n");
    printf("Enter your option: \n");
    printf("a. Espresso - $2.5\n");
    printf("b. Cappuccino - $3.0\n");
    printf("c. Latte - $3.5\n");
    printf("d. Quit\n");
}

void placeOrder(char option) {
    switch (option) {
        case 'a':
            printf("Placing order: Espresso\n");
            break;
        case 'b':
            printf("placing order: Cappuccino\n");
            break;
        case 'c':
            printf("Placing order: Latte\n");
            break;
        case 'd':
            printf("Thanks for your order. Goodbye!\n");
        default:
            printf("Invalid options. Please try again\n");
    }
}
    float calculateCost(char option, int quantity) {
        float price;
        switch (option) {
            case 'a':
                price = 2.5;
                break;
            case 'b':
                price = 3.0;
                break;
            case 'c':
                price = 3.5;
                break;
            default:
                price = 0;
        }
        return price*quantity;

    }
    int main(){
         char option;
         int quantity;
         int loaidouong;
         float totalcost = 0;
        displaymenu();
    do{
        printf(" Enter your option: ");
        scanf(" %c", &option);
        if(option != 'd'){
            placeOrder(option);
            printf("Enter the quantity: ");
            scanf("%d", &quantity);
            float cost = calculateCost(option,quantity);
            totalcost += cost;
            loaidouong++;
        }
    }while(option != 'd');
    printf("\n\n\nTotal cost is: %.2f", totalcost);
    return 0;
}
