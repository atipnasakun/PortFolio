function api(){
const apiUrl = 'https://api.github.com/users/{owner}/repos';
const owner = 'atipnasakun';
const params = {
  per_page: 100,  // ระบุจำนวน Repository ต่อหน้า (สูงสุด 100)
  page: 1 ,
  type:'deployment'
};
async function fetchAllRepositories() {
  const data = []
  console.log(params);
 await fetch(apiUrl.replace('{owner}', owner) +"?"+new URLSearchParams(params).toString())
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`ไม่สามารถดึงข้อมูล Repository ได้ (HTTP Status Code: ${response.status})`);
      }
    })
    .then(repoData => {
      data.push(...repoData);})
    .catch(error => {
      console.error('เกิดข้อผิดพลาดในการเรียก API:', error.message);
    });
    return data;
}
async function fetchApi(apiPath,params = ""){
return fetch(apiPath+params).then(x=>x.json()).then(e=>e).catch(er=>console.error(er))
}
return {
  fetchAllRepositories,
  fetchApi
}
}
// เรียกใช้ฟังก์ชันเพื่อดึงข้อมูล Repository
export default api