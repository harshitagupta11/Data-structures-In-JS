/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

//preorder pattern

var binaryTreePaths = function(root) {
    let resPaths = []
    function dfs(root,path){
        if(root ===null){
            return;
        }
        path.push(root.val)
        if(root.left===null && root.right===null){
            resPaths.push(path.join('->'))
            
        }else{
            if(root.left){
                dfs(root.left,path)
                path.pop()
            }
            if(root.right){
                 dfs(root.right,path)
                 path.pop()
            }
            
        }
    }
    dfs(root,[])
    return resPaths
};