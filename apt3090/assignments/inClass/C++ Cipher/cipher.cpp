#include <iostream>

using namespace std;

string encryptDecrypt(string toEncrypt) {
    char key = 'K'; //Any char will work
    string output = toEncrypt;

    for (int i = 0; i < toEncrypt.size(); i++)
        output[i] = toEncrypt[i] ^ key;

    return output;
}

int main(int argc, const char * argv[])
{
    string enterKey;
    cout<< "Please enter a string\n";
    cin >> enterKey;
    string encrypted = encryptDecrypt(enterKey);
    cout << "Encrypted:" << encrypted << "\n";

    string decrypted = encryptDecrypt(encrypted);
    cout << "Decrypted:" << decrypted << "\n";

    return 0;
}
