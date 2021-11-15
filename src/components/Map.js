import './App.css';
import React, { useRef, useEffect } from "react";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import * as locator from "@arcgis/core/rest/locator";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";