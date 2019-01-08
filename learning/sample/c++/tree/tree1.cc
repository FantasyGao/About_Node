#include <iostream>
#include <stack>
#include <vector>
#include <deque>

using namespace std;

typedef struct BinTreeStruct BinTree;
struct BinTreeStruct{
  int value;
  BinTree* right;
  BinTree* left;
};

BinTree* InsertNode(BinTree* root, int data)
{
  BinTree* newnode = new BinTree;
  newnode->value=data;
  newnode->right=NULL;
  newnode->left=NULL;
  if(root == NULL)
  {
    root = newnode;
  } 
  else 
  {
    BinTree* parent = root;
    while(parent !=NULL)
    {
      if(parent->value < data)
      {
        if(parent->right==NULL)
          break;
        else
          parent=parent->right;
      }
      else
      {
        if(parent->left==NULL)
          break;
        else
          parent=parent->left;
      }
    }
    if(parent->value<data)
    {
      parent->right=newnode;
    }
    else
    {
      parent->left=newnode;
    }
  }
  return root;
}

void Preorder(BinTree* root)
{
  if(root==NULL)
    return;
  cout<<root->value<<endl;
  Preorder(root->left);
  Preorder(root->right);
}

void Inorder(BinTree* root)
{
  if(root==NULL)
    return;
  Inorder(root->left);
  cout<<root->value<<endl;
  Inorder(root->right);
}

void Outorder(BinTree* root)
{
  if(root==NULL)
    return;
  Outorder(root->left);
  Outorder(root->right);
  cout<<root->value<<endl;
}

//非递归前序遍历

void Pre_No(BinTree* root)
{
  if(root==NULL)
    return;
  stack<BinTree*> s;
  s.push(root);
  while(!s.empty())
  {
    BinTree* temp = s.top();
    // cout<<temp<<" ";
    cout<<temp->value<<" ";
    s.pop();
    if(temp->right)
      s.push(temp->right);
    if(temp->left)
      s.push(temp->left);
  }
}


void Pre_No2(BinTree* root)
{
  if(root==NULL)
    return;
  stack<BinTree*> s;
  BinTree* cur = root;
  while(cur!=NULL || !s.empty())
  {
    while(cur!=NULL)
    {
      cout<<cur->value<<" ";
      s.push(cur);
      cur = cur->left;
    }
    if(!s.empty())
    {
      cur =s.top();
      s.pop();
      cur=cur->right;
    }
  }
}

//双栈法
void Postorder2(BinTree* root)
{
  stack<BinTree*> s1,s2;
  BinTree* cur;
  s1.push(root);
  while(!s1.empty())
  {
    cur=s1.top();
    s1.pop();
    s2.push(cur);
    if(cur->left)
    {
      s1.push(cur->left);
    }
    if(cur->right)
    {
      s1.push(cur->right);
    }
  }
  while(!s2.empty())
  {
    cout<<s2.top()->value<<" ";
    s2.pop();
  }
}



int main(int argc, char const *argv[])
{
  BinTree* root = NULL;
  int array[]={1, 3, 5, 8, 0, 5, 13};
  for(int i=0;i<sizeof(array)/sizeof(int);i++)
    root = InsertNode(root, array[i]);
  Postorder2(root);
  return 0;
}
