# react-doc-to-pdf
 package for converting text or .doc  to pdf in React Js.



## Install

```
$ npm install react-doc-to-pdf
 #or 
$ yarn install react-doc-to-pdf
```

## Important Notes

- Single page
- Only working for text String to pdf. 
- Doc to pdf will come soon!


## Alternatives and Similars Packages

* [@react-pdf/renderer](https://www.npmjs.com/package/@react-pdf/renderer) - React renderer for creating PDF files on the browser and server
* [react-pdf](https://www.npmjs.com/package/react-pdf) - Display PDFs in your React app as easily as if they were images.
* [react-to-pdf](https://www.npmjs.com/package/react-to-pdf) - Easily create pdf documents from React components.


## Examples

*[codesandbox]https://codesandbox.io/embed/festive-haslett-1mkuy4?fontsize=14&hidenavigation=1&theme=dark

## Usage
- Convert textarea text to pdf.

**Using**
```jsx
import ConvertDocToPdf from 'react-doc-to-pdf'

const App = () =>{
     
     return(
         <div>
            <ConvertDocToPdf text= "Text for pdf conversion" filename="dummy.pdf"/>
        </div>
     )
}

```

# Change button style. 
- Add '.convert-pdf-btn' to scss file.



## Props

|Prop name        |Type               |Default            |Description
|-----------------|-------------------|-------------------|--------------------------------
|filename         | `string`          | `'download.pdf'`  | Name of the pdf file
|text             | `string`          |                   |  String you want to convert      | 