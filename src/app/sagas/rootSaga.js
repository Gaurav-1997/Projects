import { 
  watchforOpenCompose,
  watchforCloseCompose,
  watchforSelectedMail} from "./saga";
import { spawn } from 'redux-saga/effects';

export default function* rootSaga()
{
  yield spawn(watchforOpenCompose)
  yield spawn(watchforCloseCompose)
  yield spawn(watchforSelectedMail)
};