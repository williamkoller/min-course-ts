// Type Alias and Union
type Uid = string | number

function logger(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`)
}

logger(12345, 'sapato')
logger('12345', 'sapato')

type Plataform = 'windows' | 'linux' | 'macos'

function renderPlataform(platform: Plataform) {
  return platform
}

renderPlataform('linux')

function log(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`)
}

log(123, 'william')
log('123', 'william')