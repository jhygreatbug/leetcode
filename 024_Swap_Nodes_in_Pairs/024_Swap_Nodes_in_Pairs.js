/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	if (!head) return head;
	var prev = head;
	var cur = prev.next;
	var next = null;
	if (!cur) return head;
	prev.next = cur.next;
	cur.next = prev;
	head = cur;
	cur = prev.next;
	if (!cur) return head;
	next = cur.next;
	while (next !== null) {
		prev.next = next;
		cur.next = next.next;
		next.next = cur;
		prev = cur;
		cur = prev.next;
		if (!cur) return head;
		next = cur.next;
	}
	return head;
};
