#include<stdio.h>
#include<string.h>

char s [] = "id+id*id";
int i = 0;

void F(){
    if(s[i] == 'i' && s[i+1] == 'd'){
        i+=2;
        return;
    }
    return;
}

void T_d(){
    if(s[i] == '*'){
        i++;
        F();
        T_d();
        return;
    }
    return;
}

void T(){
    F(i);
    T_d(i);
}


void E_d(){
    if(s[i] == '+'){
        i++;
        T(i);
        E_d(i);
        return;
    }
    return;
}

void E(){
    T(i);
    E_d(i);
}
void main(){
    E();
    if(i == strlen(s)){
        printf("Done");
    }
    else{
        printf("No");
    }
}