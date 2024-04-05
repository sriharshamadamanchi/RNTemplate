// @flow Copyright © 2019 Rently Softwares, All Rights Reserved
import { getActionType } from './typeSafe';
import {
  failedLoadingAction,
  hideLoaderAction,
  resetAllLoadersAction,
  showLoaderAction,
  startLoadingAction,
  successLoadingAction
} from '../loaderRedux/actions';

import createSagaMiddleware from 'redux-saga';
import { reducers } from './combineReducers';
import { sagas } from './combineSagas';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { Tuple, configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  whitelist: [], // Only these reducers will be persisted.
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers);
const initState: any = {};

const internetCheckerMiddleware = (store: any) => (next: any) => (action: any) => {
  // In no internet, we should allow some actions
  const whiteListActions = [
    getActionType(showLoaderAction),
    getActionType(startLoadingAction), // We should allow show Loader
    getActionType(hideLoaderAction),
    getActionType(successLoadingAction),
    getActionType(failedLoadingAction), // We should allow hide Loader
    getActionType(resetAllLoadersAction), // We should allow reset all Loader
  ];
  if (whiteListActions.includes(action.type) || !action.type.startsWith("src/")) {
    return next(action);
  }
};

const sagaMiddleware = createSagaMiddleware();
export const store: any = configureStore(
  {
    reducer: persistedReducer,
    middleware: () => new Tuple(sagaMiddleware, internetCheckerMiddleware),
    preloadedState: initState
  }
)

export const persistor: any = persistStore(store);
sagaMiddleware.run(sagas);

store.subscribe(() => {
  console.log("Store Changed ", store.getState());
});
