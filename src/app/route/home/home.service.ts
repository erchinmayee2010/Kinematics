import { Injectable } from '@angular/core';
import {LinearMotionOptionModel} from './../../LinearMotionOptionModel';
import {LinearMotionModel} from './../../LinearMotionModel';
import { OUTPUTMAP } from './../../app-mock';
import { LINEARMOTIONVALUE } from './../../app-mock';

@Injectable()
export class HomeService {

  constructor() { }

  getOutputFields(): LinearMotionOptionModel[] {	
  	return OUTPUTMAP;
  }

  getDefaultLinearMotionModel(): LinearMotionModel {
  	return LINEARMOTIONVALUE;
  }

  createModelForDistanceByUAT(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;

  	linearMotionValue.distance.isVisible = false;
  	linearMotionValue.distance.isRequired = false;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = true;
  	linearMotionValue.initialVelocity.isRequired = true;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = false;
  	linearMotionValue.finalVelocity.isRequired = false;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = true;
  	linearMotionValue.acceleration.isRequired = true;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = true;
  	linearMotionValue.timeTaken.isRequired = true;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForDistanceByUAV(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;

  	linearMotionValue.distance.isVisible = false;
  	linearMotionValue.distance.isRequired = false;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = true;
  	linearMotionValue.initialVelocity.isRequired = true;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = true;
  	linearMotionValue.finalVelocity.isRequired = true;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = true;
  	linearMotionValue.acceleration.isRequired = true;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = false;
  	linearMotionValue.timeTaken.isRequired = false;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForInitialVelocityByVAT(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;  	

  	linearMotionValue.distance.isVisible = false;
  	linearMotionValue.distance.isRequired = false;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = false;
  	linearMotionValue.initialVelocity.isRequired = false;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = true;
  	linearMotionValue.finalVelocity.isRequired = true;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = true;
  	linearMotionValue.acceleration.isRequired = true;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = true;
  	linearMotionValue.timeTaken.isRequired = true;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForInitialVelocityByVAS(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;  	

  	linearMotionValue.distance.isVisible = true;
  	linearMotionValue.distance.isRequired = true;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = false;
  	linearMotionValue.initialVelocity.isRequired = false;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = true;
  	linearMotionValue.finalVelocity.isRequired = true;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = true;
  	linearMotionValue.acceleration.isRequired = true;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = false;
  	linearMotionValue.timeTaken.isRequired = false;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForFinalVelocityByUAT(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;  	

  	linearMotionValue.distance.isVisible = false;
  	linearMotionValue.distance.isRequired = false;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = true;
  	linearMotionValue.initialVelocity.isRequired = true;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = false;
  	linearMotionValue.finalVelocity.isRequired = false;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = true;
  	linearMotionValue.acceleration.isRequired = true;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = true;
  	linearMotionValue.timeTaken.isRequired = true;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForFinalVelocityByUAS(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;  	

  	linearMotionValue.distance.isVisible = true;
  	linearMotionValue.distance.isRequired = true;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = true;
  	linearMotionValue.initialVelocity.isRequired = true;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = false;
  	linearMotionValue.finalVelocity.isRequired = false;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = true;
  	linearMotionValue.acceleration.isRequired = true;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = false;
  	linearMotionValue.timeTaken.isRequired = false;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForAccelerationByUVT(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;  	

  	linearMotionValue.distance.isVisible = false;
  	linearMotionValue.distance.isRequired = false;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = true;
  	linearMotionValue.initialVelocity.isRequired = true;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = true;
  	linearMotionValue.finalVelocity.isRequired = true;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = false;
  	linearMotionValue.acceleration.isRequired = false;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = true;
  	linearMotionValue.timeTaken.isRequired = true;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForAccelerationByUVS(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;  	

  	linearMotionValue.distance.isVisible = true;
  	linearMotionValue.distance.isRequired = true;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = true;
  	linearMotionValue.initialVelocity.isRequired = true;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = true;
  	linearMotionValue.finalVelocity.isRequired = true;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = false;
  	linearMotionValue.acceleration.isRequired = false;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = false;
  	linearMotionValue.timeTaken.isRequired = false;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  createModelForTimeTaken(): LinearMotionModel{
  	var linearMotionValue = LINEARMOTIONVALUE;  	

  	linearMotionValue.distance.isVisible = false;
  	linearMotionValue.distance.isRequired = false;
  	linearMotionValue.distance.value = null;

  	linearMotionValue.initialVelocity.isVisible = true;
  	linearMotionValue.initialVelocity.isRequired = true;
  	linearMotionValue.initialVelocity.value = null;

  	linearMotionValue.finalVelocity.isVisible = true;
  	linearMotionValue.finalVelocity.isRequired = true;
  	linearMotionValue.finalVelocity.value = null;

  	linearMotionValue.acceleration.isVisible = true;
  	linearMotionValue.acceleration.isRequired = true;
  	linearMotionValue.acceleration.value = null;

  	linearMotionValue.timeTaken.isVisible = false;
  	linearMotionValue.timeTaken.isRequired = false;
  	linearMotionValue.timeTaken.value = null;

  	return linearMotionValue;
  }

  getLinearMotionModelForParam(outputVar: number, formulaId: number): LinearMotionModel {
  	var linearMotionValue = null;
  	switch (outputVar) 
    { 
    case 0: 
      return linearMotionValue;
    case 1: 
      if(formulaId == -1) { throw new Error("Choose a formula")}
      else if(formulaId == 0) { return this.createModelForDistanceByUAT()}
      else if(formulaId == 1) { return this.createModelForDistanceByUAV()} 
    case 2:  
      if(formulaId == -1) { throw new Error("Choose a formula")}
      else if(formulaId == 0) { return this.createModelForInitialVelocityByVAT()}
      else if(formulaId == 1) { return this.createModelForInitialVelocityByVAS()} 
    case 3: 
      if(formulaId == -1) { throw new Error("Choose a formula")}
      else if(formulaId == 0) { return this.createModelForFinalVelocityByUAT()}
      else if(formulaId == 1) { return this.createModelForFinalVelocityByUAS()} 
    case 4:
      if(formulaId == -1) { throw new Error("Choose a formula")}
      else if(formulaId == 0) { return this.createModelForAccelerationByUVT()}
      else if(formulaId == 1) { return this.createModelForAccelerationByUVS()}
    case 5:
      return this.createModelForTimeTaken();
    default: 
      return linearMotionValue;
    } 
  	
  }

  /**
  * s = ut + 1/2 at2
  */
  calculateDistanceByUAT(linearMotioModel: LinearMotionModel): number{
  	var u = linearMotioModel.initialVelocity.value;
  	var a = linearMotioModel.acceleration.value;
  	var t = linearMotioModel.timeTaken.value;  	
  	if(u == null){
  			throw new Error(linearMotioModel.initialVelocity.name + " is invalid");
  	}else if(a == null){
  			throw new Error(linearMotioModel.acceleration.name + " is invalid");
  	}else if(t == null){
  			throw new Error(linearMotioModel.timeTaken.name + " is invalid");
  	}else{
  		return ((u*t) + (0.5 * a * t * t));
  	}  	
  	
  }

  /**
  *  v*v - u*u / 2a
  */
  calculateDistanceByUAV(linearMotioModel: LinearMotionModel): number{
  	var u = linearMotioModel.initialVelocity.value;
  	var a = linearMotioModel.acceleration.value;
  	var v = linearMotioModel.finalVelocity.value;  	
  	if(u == null){
  			throw new Error(linearMotioModel.initialVelocity.name + " is invalid");
  	}else if(a == null){
  			throw new Error(linearMotioModel.acceleration.name + " is invalid");
  	}else if(v == null){
  			throw new Error(linearMotioModel.finalVelocity.name + " is invalid");
  	}else{
  		return (((v*v) - (u*u)) / (2*a));
  	}  	
  	
  }

  /**
  * u = v - at
  */
  calculateInitialVelocityByVAT(linearMotioModel: LinearMotionModel): number{
    var v = linearMotioModel.finalVelocity.value;
  	var a = linearMotioModel.acceleration.value;
  	var t = linearMotioModel.timeTaken.value;  	
  	if(v == null){
  			throw new Error(linearMotioModel.finalVelocity.name + " is invalid");
  	}else if(a == null){
  			throw new Error(linearMotioModel.acceleration.name + " is invalid");
  	}else if(t == null){
  			throw new Error(linearMotioModel.timeTaken.name + " is invalid");
  	}else{  	  		
  		return (v - (a * t));
  	}
  }

  /**
  * u = sqrt (v*v - 2*a*s)
  */
  calculateInitialVelocityByVAS(linearMotioModel: LinearMotionModel): number{
    var v = linearMotioModel.finalVelocity.value;
  	var a = linearMotioModel.acceleration.value;
  	var s = linearMotioModel.distance.value;  	
  	if(v == null){
  			throw new Error(linearMotioModel.finalVelocity.name + " is invalid");
  	}else if(a == null){
  			throw new Error(linearMotioModel.acceleration.name + " is invalid");
  	}else if(s == null){
  			throw new Error(linearMotioModel.distance.name + " is invalid");
  	}else{  	  		
  		return (Math.sqrt ( (v * v) - 2 * a * s));
  	}
  }

  /**
  * v = u + at
  */
  calculateFinalVelocityByUAT(linearMotioModel: LinearMotionModel): number{
  	var u = linearMotioModel.initialVelocity.value * 1;
  	var a = linearMotioModel.acceleration.value * 1;
  	var t = linearMotioModel.timeTaken.value * 1;  	
  	if(u == null){
  			throw new Error(linearMotioModel.initialVelocity.name + " is invalid");
  	}else if(a == null){
  			throw new Error(linearMotioModel.acceleration.name + " is invalid");
  	}else if(t == null){
  			throw new Error(linearMotioModel.timeTaken.name + " is invalid");
  	}else{  	  		
  		return (u + (a * t));
  	}
  }

  /**
  * v = Math.sqrt ( (u * u) + 2 * a * s)
  */
  calculateFinalVelocityByUAS(linearMotioModel: LinearMotionModel): number{
  	var u = linearMotioModel.initialVelocity.value;
  	var a = linearMotioModel.acceleration.value;
  	var s = linearMotioModel.distance.value;  	
  	if(u == null){
  			throw new Error(linearMotioModel.initialVelocity.name + " is invalid");
  	}else if(a == null){
  			throw new Error(linearMotioModel.acceleration.name + " is invalid");
  	}else if(s == null){
  			throw new Error(linearMotioModel.distance.name + " is invalid");
  	}else{  	  		
  		return (Math.sqrt ( (u * u) + 2 * a * s));
  	}
  }

  /**
  * a = (v-u)/t
  */
  calculateAccelerationByUVT(linearMotioModel: LinearMotionModel): number{
  	var u = linearMotioModel.initialVelocity.value;
  	var v = linearMotioModel.finalVelocity.value;
  	var t = linearMotioModel.timeTaken.value;  	
  	if(u == null){
  			throw new Error(linearMotioModel.initialVelocity.name + " is invalid");
  	}else if(v == null){
  			throw new Error(linearMotioModel.finalVelocity.name + " is invalid");
  	}else if(t == null){
  			throw new Error(linearMotioModel.timeTaken.name + " is invalid");
  	}else{  	  		
  		return ((v - u) / t);
  	}
  }

  /**
  * (v*v - u*u) / 2s
  */
  calculateAccelerationByUVS(linearMotioModel: LinearMotionModel): number{
  	var u = linearMotioModel.initialVelocity.value;
  	var v = linearMotioModel.finalVelocity.value;
  	var s = linearMotioModel.distance.value;  	
  	if(u == null){
  			throw new Error(linearMotioModel.initialVelocity.name + " is invalid");
  	}else if(v == null){
  			throw new Error(linearMotioModel.finalVelocity.name + " is invalid");
  	}else if(s == null){
  			throw new Error(linearMotioModel.distance.name + " is invalid");
  	}else{  	  		
  		return ((v*v - u*u) / 2*s);
  	}
  }

  /**
  *  t = (v - u) / a
  */
  calculateTimeTaken(linearMotioModel: LinearMotionModel): number{
  	var u = linearMotioModel.initialVelocity.value;
  	var v = linearMotioModel.finalVelocity.value;
  	var a = linearMotioModel.acceleration.value;  	
  	if(u == null){
  			throw new Error(linearMotioModel.initialVelocity.name + " is invalid");
  	}else if(v == null){
  			throw new Error(linearMotioModel.finalVelocity.name + " is invalid");
  	}else if(a == null){
  			throw new Error(linearMotioModel.acceleration.name + " is invalid");
  	}else{  	  		
  		return ((v - u) / a);
  	}
  }

  calculateKinematicsValue(outputVar: number, formulaId: number, linearMotioModel: LinearMotionModel): number{
  	var linearMotionValue;
  	linearMotioModel.distance.value = (linearMotioModel.distance.value != null) ? (1 * linearMotioModel.distance.value): null;
  	linearMotioModel.initialVelocity.value = (linearMotioModel.initialVelocity.value != null) ? (1 * linearMotioModel.initialVelocity.value): null;
  	linearMotioModel.finalVelocity.value = (linearMotioModel.finalVelocity.value != null) ? (1 * linearMotioModel.finalVelocity.value): null;
  	linearMotioModel.acceleration.value = (linearMotioModel.acceleration.value != null) ? (1 * linearMotioModel.acceleration.value): null;
  	linearMotioModel.timeTaken.value = (linearMotioModel.timeTaken.value != null) ? (1 * linearMotioModel.timeTaken.value): null;
  	
  	try{
	  	switch (outputVar) 
	    { 
	    case 0: 
	      throw new Error("No formula available for the Kinematics");
	    case 1: 
	      if(formulaId == -1) { throw new Error("Choose a formula")}
      	  else if(formulaId == 0) { return this.calculateDistanceByUAT(linearMotioModel);}
          else if(formulaId == 1) { return this.calculateDistanceByUAV(linearMotioModel);} 	      
	    case 2: 
	      if(formulaId == -1) { throw new Error("Choose a formula")}
          else if(formulaId == 0) { return this.calculateInitialVelocityByVAT(linearMotioModel);}
          else if(formulaId == 1) { return this.calculateInitialVelocityByVAS(linearMotioModel);} 
	    case 3: 
	      if(formulaId == -1) { throw new Error("Choose a formula")}
          else if(formulaId == 0) { return this.calculateFinalVelocityByUAT(linearMotioModel);}
          else if(formulaId == 1) { return this.calculateFinalVelocityByUAS(linearMotioModel);} 
	    case 4:
	      if(formulaId == -1) { throw new Error("Choose a formula")}
          else if(formulaId == 0) { return this.calculateAccelerationByUVT(linearMotioModel);}
          else if(formulaId == 1) { return this.calculateAccelerationByUVS(linearMotioModel);}
	    case 5: 
	      return this.calculateTimeTaken(linearMotioModel);
	    default: 
	      throw new Error("No formula available for the Kinematics");
	    }
	}catch(e){
		throw new Error(e);
	}
  }

  calculateGraphDataForLinearModel(linearMotioModel: LinearMotionModel) : Object[] {
    var chartDataArray: any;
    let chartData = <any>{};
    chartDataArray = new Array();
    chartData.y = linearMotioModel.distance.value;
    chartData.x = linearMotioModel.timeTaken.value;
    chartData.a = linearMotioModel.acceleration.value;
    chartData.u = linearMotioModel.initialVelocity.value;
    chartData.v = linearMotioModel.finalVelocity.value;

    for (var i = 0; i < 10 ; i++){
      let temp = <any>{};
      temp.x = i;
      temp.y =  (chartData.u) * temp.x + (0.5 * chartData.a * temp.x * temp.x);
      temp.u = (i > 0) ? (chartDataArray[i-1].u) : 0;
      temp.v = (temp.x > 0) ? (temp.y/temp.x) : 0;
      temp.a = (i > 0 && temp.x > 0) ? ((temp.u - chartDataArray[i-1].u )/ (temp.x - chartDataArray[i-1].x )) : 0; 
      chartDataArray.push(temp);     
    }
  	
  	return chartDataArray;
  }

}
