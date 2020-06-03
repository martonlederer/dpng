# dpng
Easily create image files with Deno

This is a simple library for [Deno](https://deno.land) to create PNG (and other image types in the feature) files.

## Usage
```ts
//import the module
import { PNGImage } from 'https://deno.land/x/dpng/mod.ts'

//create a PNG file
const png = new PNGImage(512, 512)

//generating a color to use in setPixel
const red = png.createRGBColor({ r: 255, g: 0, b: 0, a: 1 })

//setting one pixel
png.setPixel(10, 10, red)

//get the base64 encoded image
const base64String = png.getBase64()

//let's save the image
Deno.writeFileSync('./test/img/test.png', png.getBuffer())
```

## API
We have plenty of tools to modify the desired image. Here's a list of all of them.

### Getting information about the image

### `getBuffer (): Uint8Array`
Get the buffer (`Uint8Array`) of the image file<br>
This can be used to save the image later, using `Deno.writeFileSync`

### `getBase64 (): string`
Get the base64 encoded string of the created image

### `getDataURL (): string`
Get the base64 encoded string of the created image with a data url, so you can utilize it inside an `img` tag in html, using the `src` attribute

### `createRGBColor (color: RGB): number`
Create a valid RGB (rgba) color that you can use with `setPixel`

### `getPixel (x: number, y: number): number`
Get the color of a pixel

### `index (x: number, y: number): number`
Getting the index of a pixel

### Rendering
### `setPixel (x: number, y: number, color: number): void`
Modifying a pixel

### `drawLine (x: number, y: number, width: number, height: number, color: number): void`
Draw a line inside the image

### `drawRect (x1: number, y1: number, x2: number, y2: number, color: number): void`
Draw a rectangle inside the image

### `drawBorderedRect (x1: number, y1: number, x2: number, y2: number, borderSize: number, insideColor: number, outsideColor: number): void`
Draw a rectangle with a border/outline

### `drawFilledCircle (x_center: number, y_center: number, r: number, color: number): void`
Draw a circle inside the image

## Saving your image
We do not provide a `write()` or `save()` function, as we find it unnecessary. Deno has an easy to use way to write files and we don't want to overcomplicate this module. To save an image, use the built in `Deno.writeFileSync()` function:
```ts
Deno.writeFileSync('./assets/img/denos_land.png', png.getBuffer())
```
#### Attention
Make sure to add flag `--allow-write`, when running your code.

## Feature plans, goals
- [ ] Fix 
- [ ] A `createColor` function that converts css-style colors to `<RGB>` type colors
- [ ] `getPixel` or an alternative new function to return css-style colors (maybe with a param)
- [ ] Add loading `buffers` / `Uint8Array`s

## Credits
The base of this library is largely ported from [pnglib-es6](https://github.com/IjzerenHein/pnglib-es6). Thank you very much for providing a simple, yet amazing library