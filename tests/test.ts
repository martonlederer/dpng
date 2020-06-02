import PNGImage from '../mod.ts'

const png = new PNGImage(300, 300, 4, {r: 0, g: 0, b: 0, a: 0}),
  red = png.createColor({ r: 255, b: 0, g: 0, a: 1 })

for(let i = 0; i < 290; i++) {

  png.setPixel(i, i, red)
  png.setPixel(i + 1, i, red)
  png.setPixel(i + 2, i, red)

}

console.log(png.getDataURL())