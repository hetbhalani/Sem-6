#include<stdio.h>
#include<io.h>

void main(){
    FILE *fp;
    char ch;
    int chars=0, spaces=0, tabs=0, nl=0;

    fp = fopen("yo.txt", "r");
    
    while ((ch=fgetc(fp)) != EOF){
        chars++;
        if(ch == ' ') spaces++;
        else if(ch == '\t') tabs++;
        else if(ch == '\n') nl++;
    }

    printf("chars=%d spaces=%d tabs=%d nl=%d", chars, spaces, tabs, nl);
    
}