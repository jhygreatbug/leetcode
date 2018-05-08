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
var mergeKLists = function(lists) {
	if (!lists.length) return null;

	var head = null, cur;
	var i = 0;
	var min = Number.MAX_SAFE_INTEGER, minIndex = -1;

	while (i < lists.length) {
		if (!lists[i]) {
			lists.splice(i, 1);
			continue;
		}
		if (lists[i].val < min) {
			min = lists[i].val;
			minIndex = i;
		}
		i ++;
	}
	if (minIndex >= 0) {
		head = lists[minIndex];
		cur = head;
		lists[minIndex] = cur.next;
	}

	while (lists.length) {
		i = 0;
		min = Number.MAX_SAFE_INTEGER;
		minIndex = -1;
		while (i < lists.length) {
			if (!lists[i]) {
				lists.splice(i, 1);
				continue;
			}
			if (lists[i].val < min) {
				min = lists[i].val;
				minIndex = i;
			}
			i ++;
		}
		if (minIndex >= 0) {
			cur.next = lists[minIndex];
			cur = lists[minIndex];
			lists[minIndex] = cur.next;
		}
	}
	return head;
};
