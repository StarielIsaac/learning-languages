// class Lista {
//   private numbers: number[]

//   constructor(numbers: number[]){
//     this.numbers = numbers
//   }
// }

class Lista {
  constructor(private numbers: number[] = []){}
}

function sum(a = 1) {
  console.log(a + a)
}

sum()
sum(1212)