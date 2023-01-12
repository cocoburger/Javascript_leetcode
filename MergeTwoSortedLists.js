/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let empty = [];
    if (!list1 && !list2) {
        return empty;
    }

    if (!list1 || !list2) {
        return list1 || list2
    }

    list1.concat(list2);

    return list1.sort();



};