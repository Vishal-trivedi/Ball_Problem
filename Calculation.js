exports.result = async(req,res,next) =>{
    const {h,e} = req.body
 const xcordinates = xCordinates(h,e)
 const ycordinates = yCordinates(h,e)
 const n = distance(h,e)
 

res.json({ycoordinates:ycordinates,xcordinates:xcordinates,No:n})
    
}


const xCordinates = (h,e)=>{
      g =10
      t =Math.sqrt(h/(2*g))
      t1 = 2*e*t 
      t2 = 2*e*e*t 
      t3 = 2*e*e*e*t 
      t4 = 2*e*e*e*e*t 
      t5 = 2*e*e*e*e*e*t 
      t6 = 2*e*e*e*e*e*e*t 

      return {t,t1,t2,t3,t4,t5,t6}

}

const yCordinates = (h,e)=>{
    
    h1 = 2*e*e*h 
    h2 = 2*e*e*e*e*t 
    h3 = 2*e*e*e*e*e*e*t 
    h4 = 2*e*e*e*e*e*e*e*e*t  

    return {h1,h2,h3,h4}

}

const distance = (h,e) =>{
    s = (1+e*e)/(1-e*e)
    d =s*h
    t = d-h
    var root_part = Math.sqrt(1 + 8*t);
		
 
		var root1 = ( -1 + root_part ) / 2;
        var root2 = ( -1 - root_part ) / 2;
        if(root1>0){
            n = root1
        }
        else {
            n =root2
        }
        
     return Math.round(n)   
}