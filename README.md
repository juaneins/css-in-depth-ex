# css-in-depth-ex
Examples and exercises from css in depth
 h1 : selector

 #page-title {
  font-family: sans-serif;   declaration -> property: value
}

Declaration  block: selector + declaration


#Cascade. 
When declarations conflict, the cascade considers three things to resolve the difference:
1 Stylesheet origin—Where the styles come from. Your styles are applied in conjunction with the browser’s default styles.
2 Selector specificity—Which selectors take precedence over which.
3 Source order—Order in which styles are declared in the stylesheet.

1 user agent styles son los primeros estilos que lee el browser, luego "author styles" son aplicados sobreescribiendo los agent styles.
2 specificity: 
    1 inline styles
    2 SELECTOR SPECIFICITY:
        -If a selector has more IDs, it wins (that is, it’s more specific).
        -If that results in a tie, the selector with the most classes wins.
        -If that results in a tie, the selector with the most tag names wins. 
        A NOTATION FOR SPECIFICITY: id's, class, tags
        ex: 1,2,2: 1 id, 2 clases, 2 tags

Occasionally, people use a four-number notation with a 0 or 1 in the most signifi-
cant digit to represent whether a declaration is applied via inline styles. In this case, an
inline style has a specificity of 1,0,0,0. This would override styles applied via selectors,
which could be indicated as having specificities of 0,1,2,0 (one ID and two classes) or
something similar      

##It is generally best to keep specificity low when you can, so when you need to override something, your options are open.        

3 source order, toma el último estilo aplicado

CASCADED VALUES
The browser follows these three steps—origin, specificity, and source order to resolve every property for every element on the page. A declaration that “wins” the cascade is called a cascaded value.

pseudoclasses order a tag: LoVe/HAte --> link, visited, hover, active; pseudoclasses have the same specificity.


cascaded value—A value for a particular property applied to an element as a
result of the cascade.


Two rules of thumb

1. Don’t use IDs in your selector
2. Don’t use !important.


On smaller elements in particular, it’s often better to have more padding on the sides than on the top and bottom. This approach looks good on buttons or, in your page, navigational links.

Summary
* Keep selector specificity under control.
* Don’t confuse cascade with inheritance.
* Certain properties are inherited, including those for text, lists, and table borders.
* Don’t confuse initial and auto values.
* Stay out of TRouBLe with shorthand properties.

------------ Ch2 -----------------------

1 in. = 25.4 mm = 2.54 cm = 6 pc = 72pt = 96 px
Therefore, 16 px is the same as 12 pt (16 / 96 × 72)

Using ems can be convenient when setting properties like padding , height , width ,
or border-radius because these will scale evenly with the element if it inherits differ-
ent font sizes, or if the user changes the font settings.

TIP If you know the pixel-based font size you’d like, but want to specify the
declaration in ems, here’s a simple formula: divide the desired pixel size by
the parent (inherited) pixel size. For example, if you want a 10 px font and
your element is inheriting a 12 px font, 10 / 12 = 0.8333 em. If you want a 16
px font and the parent font is 12 px, 16 / 12 = 1.3333 em. We’ll do this calcu-
lation several times throughout this chapter.

It’s helpful to know that, for most browsers, the default font size is 16 px. Technically,
it’s the keyword value medium that calculates to 16 px.

The root node is the ancestor of all other elements in the document. It has a spe-
cial pseudo-class selector ( :root ) that you can use to target it. This is equivalent to
using the type selector html with the specificity of a class rather than a tag.

TIP When in doubt, use rems for font size, pixels for borders, and ems for
most other properties.