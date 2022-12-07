
fetch('https://api.github.com/users')
.then((response) => {
  return response.json();
})
.then((data) => {

  let usersDesc = data.sort((a, b) => {
    return b.id - a.id;
  });
   
  return usersDesc;
})
.then((data) => {
   let sortUsers=(data = data.map((item) => {
    return {
      id: item.id,
      login: item.login,
      avatar: item.avatar_url,
      type: item.type,
    };
  }))
  console.log(sortUsers);
  return ;
})
.catch((error) => {sortUsers
  console.log(error);
}); 


////

let lastUser = new XMLHttpRequest(); 

lastUser.open('GET', 'https://api.github.com/users/mojombo');  
lastUser.send();
lastUser.onload = function() {
if (lastUser.status != 200) { 
  console.log(`Ошибка ${lastUser.status}: ${lastUser.statusText}`); 
} else { 

  let user = JSON.parse(lastUser.response); 
 

  let arr=["id","login","avatar_url","bio", "name"];  
  let filterUser=Object.keys(user).filter((item)=>arr.includes(item));
  let dataUser = filterUser.reduce((acc,item)=>{
      acc[item]=user[item];
      return acc
  },{});
  
  console.log(dataUser);
  }
  }

lastUser.onerror = function() {
console.log("Запрос не удался");
}
 