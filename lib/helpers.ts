import { generateCategory } from "./sort";
import gradients from "../data/gradients.json";


export const samples = [
  "#2c3635",
  "#ccb9b0",
  "#7ca8ce",
  "#6a8daf"
]


export const whiteGradients = gradients.filter((gradient) => {
  return (
    generateCategory(gradient.colors[0]) === "white" ||
    generateCategory(gradient.colors[1]) === "white"
  );
});
export const yellowGradients = gradients.filter((gradient) => {
  return (
    generateCategory(gradient.colors[0]) === "yellow" ||
    generateCategory(gradient.colors[1]) === "yellow"
  );
});
export const redGradients = gradients.filter((gradient) => {
  return (
    generateCategory(gradient.colors[0]) === "red" ||
    generateCategory(gradient.colors[1]) === "red"
  );
});
export const greenGradients = gradients.filter((gradient) => {
  return (
    generateCategory(gradient.colors[0]) === "green" ||
    generateCategory(gradient.colors[1]) === "green"
  );
});
export const blueGradients = gradients.filter((gradient) => {
  return (
    generateCategory(gradient.colors[0]) === "blue" ||
    generateCategory(gradient.colors[1]) === "blue"
  );
});
export const blackGradients = gradients.filter((gradient) => {
  return (
    generateCategory(gradient.colors[0]) === "black" ||
    generateCategory(gradient.colors[1]) === "black"
  );
});
