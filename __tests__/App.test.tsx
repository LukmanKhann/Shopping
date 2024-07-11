import "react-native";
import App from "../src/App";
import React from "react";
import renderer from "react-test-renderer";
import { it } from "@jest/globals";

/**
 * @format
 */


// Note: import explicitly to use the types shipped with jest.

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />);
});
