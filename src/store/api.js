import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/CallBegan');
export const apiCallSucceed = createAction('api/CallSucceed');
export const apiCallFailed = createAction('api/CallFailed');
