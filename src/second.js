let x=[];
function check(index, a, result_ar){
    if(index==a.length){
       if(result_ar.length>0){
        x.push(result_ar);
       }
        return 
    }

    check(index+1, a, result_ar);
    check(index+1, a, result_ar.concat(a[index]) )
    // let x=[], obj={};


}
check(0,[1,5,8], [])
console.log(x)

for(let k in x){
    let c = JSON.stringify(x[k]);
    if(obj[c]==undefined){
        obj[c]=1;
    }
}

let v=Object.keys(obj);
let g = v.map((item)=>{
    return JSON.parse(item)
})
console.log(g.sort())