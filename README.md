# css-in-depth-ex
Examples and exercises from css in depth

#Cascade. 
When declarations conflict, the cascade considers three things to resolve the difference:
1 Stylesheet origin—Where the styles come from. Your styles are applied in conjunction with the browser’s default styles.
2 Selector specificity—Which selectors take precedence over which.
3 Source order—Order in which styles are declared in the stylesheet.

1 user agent styles son los primeros estilos que lee el browser, luego "author styles" son aplicados sobreescribiendo los agent styles.
2 especificad: 
    1 inline styles
    2 SELECTOR SPECIFICITY:
        -If a selector has more IDs, it wins (that is, it’s more specific).
        -If that results in a tie, the selector with the most classes wins.
        -If that results in a tie, the selector with the most tag names wins. 
        A NOTATION FOR SPECIFICITY: id's, class, tags
        ex: 1,2,2: 1 id, 2 clases, 2 tags

It is generally best to keep specificity low when you can, so when you need to override something, your options are open.        

3 source order, toma el último estilo aplicado

CASCADED VALUES
The browser follows these three steps—origin, specificity, and source order to resolve every property for every element on the page. A declaration that “wins” the cascade is called a cascaded value.

Two rules of thumb

1. Don’t use IDs in your selector
2. Don’t use !important.