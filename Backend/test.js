var input = "1234surya-name4321&42-age1234&male-4321gender";
// output = { name: 'surya', age: '42', gender: 'male' }
let temp = input.split("&");
let temp1 = temp[0].split("-");
let output={};
let dummy=["1234","4321"]
for(let i=0;i<temp.length;i++){
    let key="";
    let value="";
    let temp1=temp[i].split("-");
   for(let j=0;j<temp1.length;j++){
    let str=temp1[j].split("");
    if((str[0]==1&&str[1]==2&&str[2]==3&&str[3]==4)||str[0]==4&&str[1]==3&&str[2]==2&&str[3]==1){
        str=str.splice(4);
    }
    else if((str[str.length-4]==4&&str[str.length-3]==3&&str[str.length-2]==2&&str[str.length-1]==1)||(str[str.length-4]==1&&str[str.length-3]==2&&str[str.length-2]==3&&str[str.length-1]==4)){
        str.pop()
        str.pop()
        str.pop()
        str.pop()
    }
    if(j==0){
        value=str.join("")
    }
    else{
        key=str.join("")
    }
   }
   output[key]=value;
}
console.log(output)