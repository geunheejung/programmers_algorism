function solution(new_id) {
  const regex1 = /[\.]{2,}/g;
  const regex2 = /^[\.]|[\.]$/g;
  const regex3 = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g;

  let b = new_id.toLocaleLowerCase();
  let c = b.replace(regex3, "");
  let d = c.replace(regex2, "");
  let f = d.replace(regex1, (a, b) => {
    return ".";
  });

  f = f.replace(regex2, "");

  if (f.length > 15) {
    f = f.slice(0, 15);
    f = f.replace(regex2, "");
  }

  if (f.length < 3) {
    let last = f[f.length - 1] || "a";

    let num = 3 - f.length;

    for (let i = 0; i < num; i++) {
      f += last;
    }
  }

  return f;
}
