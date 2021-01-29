// - NodeとTypescriptを使ってNの階乗を求めるプログラムを書いてください。
//   - Nの階乗はN!と表します。
//   - たとえばN=4のとき 4! = 4 * 3 * 2 * 1 = 24が出力されます。
//   - const function = (N) => N! みたいな関数を作ること
//   - 返り値の型を定義すること
//   - ヒント：再帰関数を使う
//   - ヒント２：N=0のときとN > 0のときの条件分けが必要
// - NodeはNodeenvというライブラリを使ってインストールしてください。

const fuc = (n:number): number => {
  if (n === 0){
    return 1;
  } else {
    return n * fuc(n - 1);
  }
};
console.log(fuc(4));