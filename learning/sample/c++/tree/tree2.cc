#include <iostream>
#include <stack>
#include <vector>
#include <deque>

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

//节点个数

int NumOfTree(Btree* root)
{
  if(root==NULL)
    return 0;
  else
  {
    return (NumOfTree(root->left)+NumOfTree(root->right))+1;
  }
}

//深度
int HOfTree(Btree* root)
{
  if(root==NULL)
    return 0;
  else
  {
    int le = HOfTree(root->left);
    int ri = HOfTree(root->right);
    return (le>ri?le:ri)+1;
  }
}

int main(int argc, char const *argv[])
{
  Btree* root = NULL;
  int array[]={1, 3, 5, 8, 0, 5, 13};
  for(int i=0;i<sizeof(array)/sizeof(int);i++)
    root = Init(root, array[i]);
  HOfTree(root);
  return 0;
}
