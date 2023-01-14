const fruits =[
    {number:1, title:"·¹µåÇâ"},
    {number:2, title:"»şÀÎ¸Ó½ºÄ¹"},
    {number:3, title:"»êÃ»µş±â"},
    {number:4, title:"ÇÑ¶óºÀ"},
    {number:5, title:"»ç°ú"},
    {number:6, title:"¾ÖÇÃ¸Á°í"},
    {number:7, title:"µş±â"},
    {number:8, title:"ÃµÇıÇâ"},
    {number:9, title:"°úÀÏ¼±¹°¼¼Æ®"},
    {number:10, title:"±Ö"}
]
// undefined
fruits[0].number+" "+fruits[0].title
// '1 ·¹µåÇâ'
fruits[1].number+" "+fruits[1].title
// '2 »şÀÎ¸Ó½ºÄ¹'

for(let i=0; i<fruits.length;i++){
    console.log(fruits[i].number+" "+fruits[i].title);
}

for(let i=0; i<fruits.length;i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`);
}
// VM3797:2 1 ·¹µåÇâ
// VM3797:2 2 »şÀÎ¸Ó½ºÄ¹
// VM3797:2 3 »êÃ»µş±â
// VM3797:2 4 ÇÑ¶óºÀ
// VM3797:2 5 »ç°ú
// VM3797:2 6 ¾ÖÇÃ¸Á°í
// VM3797:2 7 µş±â
// VM3797:2 8 ÃµÇıÇâ
// VM3797:2 9 °úÀÏ¼±¹°¼¼Æ®
// VM3797:2 10 ±Ö