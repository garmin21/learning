let str = "abcabcabcbbccccc";
let num = 0;
let char = "";

// 使其按照一定的次序排列
str = str.split("").sort().join("");
// "aaabbbbbcccccccc"

console.log(str);
// 定义正则表达式
let re = /(\w)\1+/g;
// \1 表示匹配两个连续的相同字符。
str.replace(re, ($0, $1) => {
  console.log($0, $1);
  /**
   * aaa a
     bbbbb b   
     cccccccc c
     $0 : 代表 re匹配到的相同字符串
     $1 : 代表 匹配的字符
   */
  if (num < $0.length) {
    num = $0.length;
    char = $1;
  }
});
console.log(`字符最多的是${char}，出现了${num}次`);
