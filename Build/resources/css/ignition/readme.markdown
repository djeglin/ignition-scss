#Ignition
##An SCSS mixin library for rolling your own semantic grid as you go

Grid systems are great. No, really. They are. Its just that, well... They aren't. They're too rigid, they force you to do things a certain way, and they require ugly, non-semantic markup to work. On the other hand, though, the alternative is hand-coding all that CSS that makes a responsive site work, and that can take a lot of code and a lot of time. 

Ignition was made to remedy this situation. Its an SCSS toolkit for creating responsive websites. It contains no classnames, no required HTML formatting and no actual grid system of its own. Instead, the focus is on allowing users to create a flexible, responsive, grid system for their web project as they go, whilst minimising the amount of CSS they have to write themselves. 

How does it do that, you ask? Well, observe the following block of SCSS code, written using Ignition:

````
section {
  @include container;
  padding-top: 28px;

  > p {
    @include component;
  }
}
````
... and the CSS that this renders in to when the SCSS is processed:

````
section {
  overflow: hidden;
  position: relative;
  *zoom: 1;
  max-width: 85.375em;
  margin-left: auto;
  margin-right: auto;
  padding-top: 28px; 
}

section > p {
  float: left;
  direction: ltr;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 10px; 
}

@media screen and (max-width: 480px) {
  section > p {
    width: 100%;
    left: auto;
    right: auto; 
  } 
}
````

You can see from this example the dramatic saving in terms of the amount of SCSS that you have to write to create a responsive layout. 3 rules in your SCSS to generate all that CSS. Obviously, the above is a *very* simple example, but you get the point. Complex responsive layouts can be created in a fraction of the time without the need for introducing presentational CSS class names into your markup. 

