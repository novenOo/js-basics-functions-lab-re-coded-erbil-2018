// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block > 42){
  	return block - 42
  }else{
  	return 42 - block
  }
}
function distanceFromHqInFeet(block){
   var b=distanceFromHqInBlocks(block);
   return b * 264
}
function distanceTravelledInFeet(start_b,end_b){
       if (end_b > start_b){
       	 return (end_b - start_b )*264
       }else{
       	return (start_b - end_b)*264
       }
}
function calculatesFarePrice(start_b, end_b){
	var dis = distanceTravelledInFeet(start_b, end_b);
	if (dis <= 400){
       return 0;
	}else if(dis > 400 && dis <= 2000){
		return  0.02 * (dis - 400)
	}else if (dis >2000 && dis <= 2500){
		return 25 
	}else if(dis > 2500){
		return 'cannot travel that far'
	}
}