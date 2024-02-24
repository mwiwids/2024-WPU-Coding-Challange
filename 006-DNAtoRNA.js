// WPU Coding Challange day 6/366
// www.codewars.com/kata/5556282156230d0e5e000089/

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
// It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA
// its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:
// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid,
// i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Keywords : String, Array, Fundamental

/*
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") rna += "U";
    else rna += dna[i];
  }

  return rna;
}

// Ternary
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    rna += dna[i] === "T" ? "U" : dna[i];
  }

  return rna;
}

// Map
const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");

const DNAtoRNA = (dna) => dna.split("T").join("U");
*/

// Replace
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
