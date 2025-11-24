#include<stdio.h>
#include<io.h>

void main(){
    FILE *fp1;
    FILE *fp2;

    fp1 = fopen("f1.txt", "a");
    fp2 = fopen("f2.txt", "r");

    char ch1, ch2;
    
    while((ch2 = fgetc(fp2))!= EOF){
        fputc(ch2, fp1);
    }
}