const newPassword = (obj) => {
  let password = '';

  const letMin = 'abcdefghijkmnopqrstuvwxyz';
  const letMay = 'ABCDEFGHIJKMNOPQRSTUVWXYZ';
  const num = '1234567890';
  const special = `!"#$%&/=?¡@+-`

  while (password.length < obj.NumCaracteres) {
    password += letMin[Math.round(Math.random() * 24)]
    if (obj.Number && password.length < obj.NumCaracteres) {
      Math.round(Math.random() * 2) / 2 !== 0
        ? password += num[Math.round(Math.random() * 9)]
        : null
    }
    if (obj.CapitalLetters && password.length < obj.NumCaracteres) {
      Math.round(Math.random() * 2) / 2 !== 0
        ? password += letMay[Math.round(Math.random() * 24)]
        : null
    }
    if (obj.Special && password.length < obj.NumCaracteres) {
      Math.round(Math.random() * 2) / 2 !== 0
        ? password += special[Math.round(Math.random() * 12)]
        : null
    }

  }

  return password
}

export default newPassword;