#include <iostream>
#include <vector>

using namespace std;

struct Btree
{
  int value;
  Btree* left;
  Btree* right;
};

Btree* Init(Btree* root, int value)
{
  Btree* curNode = new Btree;
  curNode->value=value;
  curNode->right=NULL;
  curNode->left=NULL;
  Btree* temp = root;
  if (root == NULL)
    curNode = root;
  else
  {
    while(temp != NULL)
    {
      if (temp->value > value)
      {
        if(temp->left==NULL)
          break;
        else
          temp=temp->left;
      }
      else
      {
        if(temp->right==NULL)
          break;
        else
          temp=temp->right;
      }
    }
  }
  if (temp->value>value)
    temp->left=curNode;
  else 
    temp->right=curNode;
  return root;
}

void Insert(Btree*& root, int* array, int start, int end)
{
  if(start>end)
    return ;
  root=new Btree;
  root->left=NULL;
  root->right=NULL;

  int mid=start+(end-start)/2;
  root->value=array[mid];

  Insert(root->left, array, start, mid-1);
  Insert(root->right, array, mid+1, end);
}

void Inorder(Btree* root)
{
  if(root==NULL)
    return;
  Inorder(root->left);
  cout<<root->value<<endl;
  Inorder(root->right);
}

int main(int argc, char const *argv[])
{
  int array[] = {1, 5, 7, 8, 9, 10};
  Btree* root=NULL;
  Insert(root, array, 0, 5);
  Inorder(root);
  return 0;
}

