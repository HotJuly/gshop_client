import ajax from './ajax';

const BASE='/api';

export const reqAddress =(longitude,latitude)=>ajax(`${BASE}/position/${latitude},${longitude}`);