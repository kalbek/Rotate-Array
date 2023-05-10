const Reverse = require('./challenge')
const assert = require('assert')

describe('UnitTests', function () {
  it('rotates an array with n given steps;', function () {
 
    const Reverse = new Stack()
    
    assert(Reverse.rotate([1,2,3,4,5,6,7], 3) === [5,6,7,1,2,3,4])
  }) 
})
