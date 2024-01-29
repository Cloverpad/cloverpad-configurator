/* @refresh reload */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import "bootstrap";

import { render } from "solid-js/web";

import App from "./App";

render(() => <App />, document.getElementById("root")!);
