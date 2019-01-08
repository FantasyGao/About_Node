
#include <iostream>
using namespace std;
 
int main()
{
    int date = 0; // Date to be determind
    char answer;
 
    // Prompt the user for Set 1
    cout << "Is your birth date in this set ?" << endl;
    cout << "16 17 18 19\n" <<
            "20 21 22 23\n" <<
            "24 25 26 27\n" <<
            "28 29 30 31"   << endl;
    cout << "Enter N for No and Y for Yes: ";
    cin >> answer;
 
    if (answer == 'Y')
        date += 16;
 
    // Prompt the user for Set 2
    cout << "Is your birth date in this set ?" << endl;
    cout << " 8  9 10 11\n" <<
            "12 13 14 15\n" <<
            "24 25 26 27\n" <<
            "28 29 30 31"   << endl;
    cout << "Enter N for No and Y for Yes: ";
    cin >> answer;
 
    if (answer == 'Y')
        date += 8;
 
    // Prompt the user for Set 3
    cout << "Is your birth date in this set ?" << endl;
    cout << " 1  3  5  7\n" <<
            " 9 11 13 15\n" <<
            "17 19 21 23\n" <<
            "25 27 29 31"   << endl;
    cout << "Enter N for No and Y for Yes: ";
    cin >> answer;
 
    if (answer == 'Y')
        date += 1;
 
    // Prompt the user for Set 4
    cout << "Is your birth date in this set ?" << endl;
    cout << " 2  3  6  7\n" <<
            "10 11 14 15\n" <<
            "18 19 22 23\n" <<
            "26 27 30 31"   << endl;
    cout << "Enter N for No and Y for Yes: ";
    cin >> answer;
 
    if (answer == 'Y')
        date += 2;
 
    // Prompt the user for Set 5
    cout << "Is your birth date in this set ?" << endl;
    cout << " 4  5  6  7\n" <<
            "12 13 14 15\n" <<
            "20 21 22 23\n" <<
            "28 29 30 31"   << endl;
    cout << "Enter N for No and Y for Yes: ";
    cin >> answer;
 
    if (answer == 'Y')
        date += 4;
 
    cout << "Your birth date is " << date << endl;
 
    return 0;
}