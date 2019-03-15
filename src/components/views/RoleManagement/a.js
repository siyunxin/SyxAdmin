var arrOne = [1,2,35,41,5,1,1,2,5,3]
var arrTwo = []

var arrThree=arrOne.filter((item,index,arr)=>{
   
     let m = arr.indexOf(item)!=index
     console.log(m)
     m.filter((item,index,arr)=>{
         return arr.indexOf(item)==index
     })
})
console.log(arrThree)
arrThree.map((item,index,self)=>{
    var threeItem = item
    var threeIndex = index
    arrOne.map((item1,index1,self1)=>{
        if(threeItem==item1){
           console.log('重复值',threeItem,'位置',index1)
        }
    })

})

