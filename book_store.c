#include <stdio.h>

const int BOOK_PRICE = 8;

float cost_calculation(int quant_volumes, int volumes[]);

int main(void)
{
    int volumes[] = {2, 2, 2, 1, 1};
}

float cost_calculation(int quant_volumes, int volumes[])
{
    float total_cost = 0.0;

    if (quant_volumes > 2)
    {
        float total_discount;
        switch (quant_volumes)
        {
            case 2:
                total_discount = 0.05;
                break;
            case 3:
                total_discount = 0.10;
                break;
            case 4:
                total_discount = 0.20;
                break;
            case 5:
                total_discount = 0.25;
                break;
            default:
                total_discount = 0;
                break;
        }
        for (int i = 0; i < quant_volumes; i++)
        {
            total_cost += volumes[i] * BOOK_PRICE;
        }
        total_cost = total_cost * (1.0 - total_discount);

    }
    else
    {
        for (int i = 0; i < quant_volumes; i++)
        {
            total_cost += volumes[i] * BOOK_PRICE;
        }
    }
    return total_cost;
}

