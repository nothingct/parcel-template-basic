console.log('이것이 슈타인즈 게이트의 선택인가. ');

async function test(){
  const promise = Promise.resolve(123);
  console.log(await promise); 
}

test();