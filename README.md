# react-file-npm
NPM package for converting .doc in pdf in React Js.



## Install

```
$ npm install react-doc-to-pdf
```

## Important Notes

- Single page
- Only working for String.


## Alternatives and Similars Packages

* [@react-pdf/renderer](https://www.npmjs.com/package/@react-pdf/renderer) - React renderer for creating PDF files on the browser and server
* [react-pdf](https://www.npmjs.com/package/react-pdf) - Display PDFs in your React app as easily as if they were images.
* [react-to-pdf] (https://www.npmjs.com/package/react-to-pdf) - Easily create pdf documents from React components.


## Examples

Coming soon!

## Usage

**Using inner target ref**

```jsx
<div>
    <ConvertDocToPdf text= "Text for pdf conversion" filename="dummy">
</div>
```



## Props

|Prop name        |Type               |Default            |Description
|-----------------|-------------------|-------------------|--------------------------------
|filename         | `string`          | `'download.pdf'`  | Name of the pdf file
|text             | `string`          |                   |  String you want to convert      | 