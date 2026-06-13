
export const checkValidation = (nama) => {
  const regexHanyaHuruf = /^[a-zA-Z\s]*$/;
  const error = [];

  if (nama.trim().length <= 4) {
    error.push("harus lebih dari 4 karakter");
  }
  if (nama.length > 30) {
    error.push("maksimal 30 karakter");
  }
  if (!regexHanyaHuruf.test(nama)) {
    error.push("tidak boleh mengandung angka atau simbol");
  }

  return error;
};

export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};