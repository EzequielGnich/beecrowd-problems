const input = require("fs").readFileSync("stdin", "utf8");

const lines = input.split("\n");

if (lines.includes("vertebrado")) {
  if (lines.includes("ave")) {
    if (lines.includes("carnivoro")) {
      console.log("aguia");
    } else {
      console.log("pomba");
    }
  } else {
    if (lines.includes("onivoro")) {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  }
} else {
  if (lines.includes("inseto")) {
    if (lines.includes("hematofago")) {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else {
    if (lines.includes("hematofago")) {
      console.log("sanguessuga");
    } else {
      console.log("minhoca");
    }
  }
}
