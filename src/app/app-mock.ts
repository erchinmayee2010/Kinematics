import {LinearMotionOptionModel} from './LinearMotionOptionModel';
import {LinearMotionParamModel} from './LinearMotionParamModel';
import {LinearMotionModel} from './LinearMotionModel';

export const OUTPUTMAP: LinearMotionOptionModel[] = [
  {id: 0, name: 'Select'},
  { id: 1, name: 'Distance' },
  { id: 2, name: 'Initial Velocity' },
  { id: 3, name: 'Final Velocity' },
  { id: 4, name: 'Acceleration' },
  { id: 5, name: 'Time Taken' }
];

export const LINEARMOTIONVALUE: LinearMotionModel = {
  distance: {id: 0, name: 'Distance', value: null,isRequired: false, isVisible: false },
  initialVelocity: {id: 1, name: 'Initial Velocity', value: null,isRequired: false, isVisible: false },
  finalVelocity: {id: 2, name: 'Final Velocity', value: null,isRequired: false, isVisible: false },
  acceleration: {id: 3, name: 'Acceleration', value: null,isRequired: false, isVisible: false },
  timeTaken: {id: 4, name: 'Time Taken', value: null,isRequired: false, isVisible: false }
};

export const DISTANCEFORMULA: LinearMotionOptionModel[] = [
  {id: 0, name: 'By formula [s = ut + 1/2 at<sup>2</sup>]'},
  { id: 1, name: 'By formula [s = v<sup>2</sup> - u<sup>2</sup> / 2a]'}
];

export const IVELOCITYFORMULA: LinearMotionOptionModel[] = [
  {id: 0, name: 'By formula [u = v - at]'},
  { id: 1, name: 'By formula  [u = &radic; (v<sup>2</sup> - 2as)]'}
];

export const FVELOCITYFORMULA: LinearMotionOptionModel[] = [
  {id: 0, name: 'By formula [v = u + at]'},
  { id: 1, name: 'By formula [v = &radic; ( u<sup>2</sup> + 2as)u]'}
];

export const ACCELERATIONFORMULA: LinearMotionOptionModel[] = [
  {id: 0, name: 'By formula [a = (v - u) / t]'},
  { id: 1, name: 'By formula [a = (v<sup>2</sup> - u<sup>2</sup>) / 2s]'}
];

export const TIMEFORMULA: LinearMotionOptionModel[] = [
  {id: 0, name: 'By formula [t = (v - u) / a]'}
];
