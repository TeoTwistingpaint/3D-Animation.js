# 3D-Animation.js

3D-Animation.js is a simple javascript library that makes card and element in your DOM movement when the mouse goes over the element that you want and create a kind of 3D effect.

## Installation

In order to make everything works, you have to import jquery in your project.

If you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network):

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

Then you have to download the source code and add the file "3d-animation.js" or "3d-animation.min.js" from "dist" folder in your project.

## Usage

Call the **animationStart()** function in yor main javascript file, in the *$( document ).ready()*:

```javascript
$( document ).ready(function() {
    animationStart();
});
```
To make it works, just add the class **3d-animation** to the element that you want to have the 3D effect.

If you want to change the speed of the objects' movement, just add the **data attribute _sensitivity_:**

```html
<div class="card 3d-animation" data-sensitivity='25'>
```

The values can range from _10_ to _25_. Default value is _25_.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.