function getFirstAndLastName(fullName: string) {
  const names = fullName.split(' ')
  return `${names[0]} ${names[names.length - 1]}`
}

export function getInitials(fullName: string) {
  return getFirstAndLastName(fullName)
    .split(' ')
    .reduce((initials, curr) => {
      return initials + curr.charAt(0)
    }, '')
}
