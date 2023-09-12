const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
    
  if(! arrayItems){
    return undefined
  }else if(!rowsPerPage){
    return 1
  }
  const arrayLength = arrayItems.length
  return Math.ceil(arrayLength/rowsPerPage)
  
}
module.exports = totalPages
