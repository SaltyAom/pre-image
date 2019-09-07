# preImage
## Preload images in background idle time.
A simple function to preload images in background idle time.
  
```javascript
preImage(
    "/mock1.jpg", 
    "/mock2.png", 
    "https://mystiar.com/shino.png"
)
```
  
Queueing resources' requests download is important for optimization. Normally preload important images resources can be done with `<link rel="preload>` but what if there're a lot of requests?
  
Would you like to increase size on HTML file? like:
```HTML
<link rel="preload" href="/mock1.jpg">
<link rel="preload" href="/mock2.png">
<link rel="preload" href="https://mystiar.com/shino.png>
...50 more resources to be preloaded.
```
#### Ouch! That's a lot of kB wasted!
  
Why even waste that spaces when you can just simply:
```javascript
preImage(
    "/mock1.jpg", 
    "/mock2.png", 
    "https://mystiar.com/shino.png"
)
```
And can even be configured:
```javascript
preImage(
    "/mock1.jpg", 
    "/mock2.png", 
    "https://mystiar.com/shino.png"
, {
    delay: 1000
})
```
#### And the package size is just only 0.6kB!
  
Now you can just preload image without touching HTML. (Imagine you use React.js, Vue.js. You can just preload them directly!)