// boolean = true/false
let isOpen: boolean
isOpen = true

// string ("foo", 'foo', `foo`)
let message: string
message = `foo ${isOpen}`

// number int, float, hex, binary
let total: number
total = 0xff0

// array type[]
let items: string[]
items = ['foo', 'bar']

// anotação generics
let values: Array<number>
values = [1, 2, 3, 4]

// tuple é um tipo array
let title: [number, string, number]
title = [1, 'one', 2]

// enum
enum Colors {
  white = '#FFF',
  black = '#000'
}

// any qualquer coisa ! não é legal usar
let coisa: any
coisa = [3]

// void
function logging() {
  console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('error')
}

// object
let cart: object
cart = {
  key: 'foo'
}

// Type Inference
let messages = 'mensagem definida'
messages = 'mensagem nova'
