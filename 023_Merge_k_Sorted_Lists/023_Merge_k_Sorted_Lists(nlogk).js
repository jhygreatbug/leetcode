/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoList = function(a, b) {
	if (a === null) return b;
	if (b === null) return a;
	var c = null;
	var temp;
	if (a.val > b.val) {
		temp = a;
		a = b;
		b = temp;
	}
	c = a;
	a = a.next;
	c.next = null;

	var cur = c, start, end;

	while (a !== null) {
		if (a.val > b.val) {
			temp = a;
			a = b;
			b = temp;
		}
		start = a;
		end = a;
		while (end.next !== null && end.next.val <= b.val) end = end.next;
		a = end.next;
		cur.next = start;
		end.next = null;
		cur = end;
	}
	cur.next = b;
	return c;
};

var merge = function(lists) {
	const len = lists.length;
	if (len === 1) return lists[0];
	if (len === 2) return mergeTwoList(lists[0], lists[1]);
	const cut = lists.splice(len / 2);
	return mergeTwoList(merge(lists), merge(cut));
};

var mergeKLists = function(lists) {
	if (!lists.length) return null;
	return merge(lists);
};
