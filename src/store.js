import { createStore } from 'redux';
import reducer from './reducer';
import React, { useEffect, useState } from "react";
import firebase from "firebase"

const store = createStore(reducer);

export default store;