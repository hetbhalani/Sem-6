#include<stdio.h>

void main(){
    FILE *fp, *fp1;

    fp = fopen("1.txt","r");
    fp1 = fopen("2.txt", "w");

    char ch = fgetc(fp);

    while(ch != EOF){
        if(ch == '/'){
            char next = fgetc(fp);
            if(next == '/'){
                while(ch != '\n'){
                    ch = fgetc(fp);
                }
            }
            else if(next == '*'){
                while(ch != '*' && fgetc(fp)!='/'){
                    ch = fgetc(fp);
                }
            }
        }
        else{
            fputc(ch, fp1);
        }
        ch = fgetc(fp);
    }
}