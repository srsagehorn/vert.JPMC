export const removeHyphenAddDot=(array)=>{
    let newArray =[]
    for(let item of array){
        let newItem = item
        while(newItem.includes("-")){
           newItem = item.replace("-", ".")
        }
        newArray.push(newItem)
    }
    return newArray
}