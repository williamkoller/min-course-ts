// acountInfo

type AccountInfo = {
  id: number
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: 'William'
}

type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: 'willkoller',
  level: 100
}

//intersection
type PlayerInfo = AccountInfo & CharInfo 

const player: PlayerInfo = {
  id: 123,
  name: 'William',
  nickname: 'willkoller',
  level: 100
}