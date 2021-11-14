/* class Book{
    bookName='bookName01'
    bookAuthor='bookAuthor01'

    show(){
        return this.bookAuthor
    }
}
let book = new Book()
console.log(Book) */
/* suallar = [{
        sual: '2+2=?',
        cavablar = [
            3, 1, 4, 5
        ],
        cavab: 1
    },
    {
        sual: '4+2=?',
        cavablar = [
            6, 7, 2, 15
        ],
        cavab: 0
    },
]

istifadecininCavablari = [1, 2] */

/* Staircase problem */
function staircase(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        for (let s = n - 1; s >= i; s--) {
            result += ' '
        }
        
        for (let h = 1; h <= i; h++) {
            result += '#'
        }
        result += "\n"
    }
    console.log(result)
}