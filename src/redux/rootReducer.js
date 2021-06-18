import { combineReducers } from 'redux';

import physicalSpecificationsReducer from './physicalSpecifications/reducer';

export const rootReducer = combineReducers({ physics: physicalSpecificationsReducer });
