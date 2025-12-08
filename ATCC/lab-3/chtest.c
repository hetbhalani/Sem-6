#include<stdio.h>

void main(){
    FILE *fp, *fp1;

    fp = fopen("1.txt","r");

    fp1 = fopen("2.txt", "w");

    char ch = fgetc(fp);

    printf("%c", ch);
    char f = ungetc(ch,fp);
    printf("%c", f);
    // printf("%c", ungetc(ch,fp));

    
}