let b=parseInt(prompt("Enter the value"))
		
		let a=new Date();
			a.setHours(b);
		let res=a.getHours();
		
		if(res>=1 && res<=10){
			console.log("Morning");
			}
		else if(res>=11 && res<=18){
			console.log("Afternoon");
			}
		else if(res>=19 && res<=24){
			console.log("Evening");
			} 