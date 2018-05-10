/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
	if (!head) return head;
	var prevTail, curHead, curTail;
	var cur = head, prev, next = cur.next;
	var resultHead;
	var i, temp;
	while (cur !== null) {
		curHead = cur;
		i = 1;
		temp = cur;
		while (i < k && cur.next !== null) {
			cur = cur.next;
			i ++;
		}
		curTail = cur;
		if (i === k) {
			cur = temp;
			next = cur.next;
			curTail = cur;
			curTail.next = null;
			for (i = 1; i < k; i ++) {
				prev = cur;
				cur = next;
				next = cur.next;
				cur.next = prev;
			}
			curHead = cur;
			cur = next;
		} else {
			next = cur.next;
		}
		if (prevTail) prevTail.next = curHead;
		if (!resultHead) resultHead = curHead;
		prevTail = curTail;
		cur = next;
	}
	curTail.next = null;
	return resultHead;
};
