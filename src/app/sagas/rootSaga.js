import {watchforOpenCompose,watchforCloseCompose} from "./saga";
import { spawn } from 'redux-saga/effects';

export default function* rootSaga()
{
  yield spawn(watchforOpenCompose)
  yield spawn(watchforCloseCompose)
};