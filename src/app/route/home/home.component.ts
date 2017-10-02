import { Component, OnInit } from "@angular/core";
import { Chart } from 'angular-highcharts';
import { HomeService } from './home.service';
import {LinearMotionModel} from './../../LinearMotionModel';
import {LinearMotionOptionModel} from './../../LinearMotionOptionModel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DISTANCEFORMULA } from './../../app-mock';
import { IVELOCITYFORMULA } from './../../app-mock';
import { FVELOCITYFORMULA } from './../../app-mock';
import { ACCELERATIONFORMULA } from './../../app-mock';
import { TIMEFORMULA } from './../../app-mock';
import { OUTPUTMAP } from './../../app-mock';
const $ = require('jquery');
var Highcharts = require('highcharts');

@Component({
    selector: "tyn-home",
    templateUrl: './home.component.html',
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {
	outputMap: any; 
	linearModelValue: LinearMotionModel;
	kinematicsForm: any;
	submitted = false;
	kinematicsValue: number;
	kinematicsError: string;
	chartDataMap: any;
	kinematicsChart: any;
	distanceFormula = DISTANCEFORMULA;
	iVelocityFormula = IVELOCITYFORMULA;
	fVelocityFormula = FVELOCITYFORMULA;
	accelerationFormula = ACCELERATIONFORMULA;
  timeFormula = TIMEFORMULA;
	selectedParam = OUTPUTMAP[0];
	selectedFormula: LinearMotionOptionModel;

  public constructor(private homeService: HomeService, private formBuilder: FormBuilder) {
  	this.outputMap = this.homeService.getOutputFields();
  	this.kinematicsError = null;
  	this.kinematicsForm = new FormGroup({
  		distance: new FormControl(),
  		initialVelocity: new FormControl(),
  		finalVelocity: new FormControl(),
  		acceleration: new FormControl(),
  		timeTaken: new FormControl()
  	});
  }
    
  public ngOnInit(): void {
  }

  setOutputParam(){
    this.submitted = false;
  	this.kinematicsValue = null;
  	this.kinematicsError = null;
  	if(this.selectedParam.id == 5){
  		this.getLinearModelValue();
  	}else {
  		this.linearModelValue = null;
  		this.selectedFormula = null;
  	}
  }

  addValidationsToForm(){
  		var formDistance = (this.linearModelValue.distance.isVisible) ?  new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(\-?)+[0-9]+(\.[0-9]{1,2})?$')]) ) : new FormControl();
  		var formInitialVelocity = (this.linearModelValue.initialVelocity.isVisible) ? new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(\-?)+[0-9]+(\.[0-9]{1,2})?$')]) ) : new FormControl();
  		var formFinalVelocity = (this.linearModelValue.finalVelocity.isVisible) ?  new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(\-?)+[0-9]+(\.[0-9]{1,2})?$')]) )  : new FormControl();
  		var formAcceleration = (this.linearModelValue.acceleration.isVisible) ?  new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(\-?)+[0-9]+(\.[0-9]{1,2})?$')]) ) : new FormControl();
  		var formTimeTaken = (this.linearModelValue.timeTaken.isVisible) ?  new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(\-?)+[0-9]+(\.[0-9]{1,2})?$')]) ) : new FormControl();
  		this.kinematicsForm = new FormGroup({
	  		distance: formDistance,
	  		initialVelocity: formInitialVelocity,
	  		finalVelocity: formFinalVelocity,
	  		acceleration: formAcceleration,
	  		timeTaken: formTimeTaken
	  	});
  }

  drawKinematicsChart(){    
    Highcharts.chart('kinematicsChart', { 
      chart: {
        type: 'line',
        height: 400
      },
      title: {
        text: 'Kinematics Chart'
      },
      xAxis:{
        categories: [1,2,3,4,5,6,7,8,9,10]
      },
      yAxis: {
        allowDecimals: false
      },
      legend:{
        enabled: false
      }, 
      tooltip: {
        useHTML: true ,
        hideDelay: 0,
        enabled: true,
        formatter: function() {
          var s = '<div><span style="font-size:10px" class="next-child"> Time Taken : ' + this.x + 'sec</span> ';
          if(this && this.point){
            s += '<div><span style="font-size:10px" class="next-child"> Distance : ' + this.point.y + 'm</span> ';
            s += '<div><span style="font-size:10px" class="next-child"> Initial Velocity : ' + this.point.u + 'sec</span> ';
            s += '<div><span style="font-size:10px" class="next-child"> Final Velocity : ' + this.point.v + 'm/sec</span> ';
            s += '<div><span style="font-size:10px" class="next-child"> Accelaration : ' + this.point.a + 'm/sec<sup>2</sup></span> ';            
          }
          console.log("+++++++++ this : ", this);        
          return s;            
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: this.chartDataMap
      }]
    });
  
  }

  onSubmit() {
  	  this.kinematicsError = null;
  	  if(!this.kinematicsForm.valid){
  	  	this.submitted = true;
  	  	return false;
  	  } else if (this.kinematicsForm.dirty && this.kinematicsForm.valid) {
  	  	this.submitted = false;
  	  	var formulaId = (this.selectedFormula && this.selectedFormula.id > -1)? this.selectedFormula.id : -1;
  	  		try{
  	  			this.kinematicsValue = this.homeService.calculateKinematicsValue(this.selectedParam.id, formulaId, this.linearModelValue);
  	  			this.chartDataMap = this.homeService.calculateGraphDataForLinearModel(this.linearModelValue);
            setTimeout(()=>{   
                this.drawKinematicsChart();
            },1000);
  	  		}catch(e){
  	  			this.kinematicsError = e;
  	  		} 
	  }
	  
  }

  setOutputFormula(selectedFormula: LinearMotionOptionModel){
    this.submitted = false;
    this.kinematicsValue = null;
  	if(selectedFormula != null){
  		this.selectedFormula = selectedFormula;
  		this.getLinearModelValue();
  	}
  }

  getLinearModelValue(){
  	var formulaId = (this.selectedFormula && this.selectedFormula.id > -1)? this.selectedFormula.id : -1;
  	this.linearModelValue = this.homeService.getLinearMotionModelForParam(this.selectedParam.id, formulaId);
  	if(this.linearModelValue != null) { 
  		this.addValidationsToForm() 
  	};
  }

}