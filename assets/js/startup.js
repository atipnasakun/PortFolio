import _api from './api.js'
const api = _api()
const githubData = []
async function startUp(){
  const repos = document.getElementById('repos')
  const data =  await api.fetchAllRepositories()
  console.log(data);
  data.forEach(async e=>{
    const container = document.createElement('div')
    container.innerText = e.name
    // githubData.push({name:e.name,has_deploy:(await api.fetchApi(e.deployments_url)).length})
    // const deployment = await api.fetchApi(e.deployments_url)
    // console.log(deployment); 
    repos.appendChild(container)
  })
  // console.log(githubData);
  // const deployment = await api.fetchApi(data[32].deployments_url)
    // console.log(deployment);
}
startUp()