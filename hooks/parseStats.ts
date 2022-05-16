type Kind = 'Stars' | 'Forks'

// Handles single count cases
export const parseStats = (kind: Kind, count: number) => {
  console.log(count)
  if (!count) {
    count = 0
  }

  if (count === 1) {
    if (kind === 'Stars') {
      return '1 Star'
    } else if (kind === 'Forks') {
      return '1 Fork'
    }
  } else {
    return `${count} ${kind}`
  }
}
