// process.stdin.pipe(process.stdout);

import { Readable, Transform, Writable } from 'node:stream';

class OneToHundredStream extends Readable {
  // retornar dados da stream
  // ler arquivo no sistema / enviado pelo front / terminal
  
  index = 1;
  
  _read() {
    const i = this.index++;

    // ja consegue-se trabalhar com os dados mesmo nao chegando de imediato ate o 100, sem estarem completos
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      }
      else {
      // erro, em streams nao pode-se trabalhar os chunks com tipos primitivos e sim em Buffer
      // this.push(i); 
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString() * -1);
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {

  // n retorna nada, apenas processa os dados
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

// new OneToHundredStream()
// .pipe(process.stdout);

// new OneToHundredStream()
// .pipe(new MultiplyByTenStream());

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream());
