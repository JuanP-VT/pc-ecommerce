/**
 * Create pagination for an array of items.
 *
 * This function takes an input array and groups its elements into pages based on
 * the specified number of items per page.
 *
 * @param {any[]} list - The input array containing items to be paginated.
 * @param {number} itemsPerPage - The number of items per page for pagination.
 *                                Must be greater than 0.
 * @returns {any[][]} An array of arrays representing groups (pages) of items.
 *
 * @example
 * const inputList = ['a', 'b', 'c', 'd', 'e', 'f'];
 * const itemsPerPage = 2;
 * const result = createPagination(inputList, itemsPerPage);
 * console.log(result);
 * // Output: [['a', 'b'], ['c', 'd'], ['e', 'f']]
 */
export default function createPagination(list: any[], itemsPerPage: number) {
  //This prevents infinite loop, only if items per page is 0 the while block below is infinite
  if (itemsPerPage <= 0) {
    return list;
  }
  let pagination = [];

  const myList = [...list]; // mutate array until empty
  while (myList.length > 0) {
    const newEntry = myList.splice(0, itemsPerPage);
    pagination.push(newEntry);
  }
  return pagination;
}
