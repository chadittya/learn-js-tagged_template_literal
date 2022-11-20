//tagged template
// const NAMA = `Galih Arizza`;
// const UMUR = `30`;

// function cetakString(strings, ...values) {
//   // cara gampang
//   //   let RESULT = ``;
//   //   strings.forEach((str, i) => {
//   //     RESULT += `${str}${values[i] || ``}`;
//   //   });
//   //   return RESULT;

//   //pakai reduce
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ``}`,
//     ``
//   );
// }

// const STR = cetakString`Halo, nama saya ${NAMA}, saya ${UMUR} tahun.`;
// console.log(STR);

//CONTOH KASUS SAAT HIGHLIGHT
const NAMA = `Galih Arizza`;
const UMUR = `30`;
const EMAIL = `email@email.com`;

function highlight(strings, ...values) {
  // cara gampang
  //   let RESULT = ``;
  //   strings.forEach((str, i) => {
  //     RESULT += `${str}${values[i] || ``}`;
  //   });
  //   return RESULT;

  //pakai reduce
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class='hl'>${values[i] || ``}</span>`,
    ``
  );
}

const STR = highlight`Halo, nama saya ${NAMA}, saya ${UMUR} tahun. Dan email saya adalah ${EMAIL}. `;
// console.log(STR);
document.body.innerHTML = STR;

//FUNGSI TAGGED TEMPLATE
// - escaping HTML Tags = sanitize html tag, menetralisir code inputan dari user yang dapat mengacaukan code. refrensi = https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761
// - translation & internationalization = mengubha bahasa dari website. referensi = https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761
// - styled Components (bisanya digunakan viu / react) = https://styled-components.com/docs/basics#getting-started
