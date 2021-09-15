import './assets/css/resets.css'
import './assets/css/style.css'

class Mode{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
  aa(){
    console.log(a *2)
  }

  bb(){
    const y = [a,b]
    y.map(aaa => console.log(aaa))
  }
}

const jj = new Mode('asdf', 'adfdsa')

jj.aa()

jj.bb()