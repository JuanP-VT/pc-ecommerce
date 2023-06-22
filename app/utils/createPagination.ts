/**
 * Given an array of items return an array of groups
 * eg : input list = [a,b,c,d,e,f]  pages = 2
 *      output: [[a,b,c],[d,e,f]]
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
