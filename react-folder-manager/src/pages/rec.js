const arr =[

]

function getData(id,arr,path=[]){
    for(let i=0;i<arr.length;i++){
        const item=arr[i];
        if(item.id==id) return item;
        else{
            return getData(id,item.children,path.concat(item.id))
        }
    }
    return -1;
}