import _api from './api.js'
const api = _api()
const allGithubData = []
async function startUp(){
  const repos = document.getElementById('repos')
  const clients = document.getElementById('clients')
  const repo_count = document.getElementById('repo_count')
  let data =  await api.fetchAllRepositories()
  console.log(data);
  if(data.length === 0 ){
    clients.innerHTML = ''
    return
  }
  repo_count.innerText = `(${data.length})`
  allGithubData.push(...data)

  console.log(data);
  data = data.filter(x=> x.has_pages || (x.homepage !== "" && x.homepage !== null) && !x.fork)
  data.forEach(async e=>{
    const container = document.createElement('div')
    const a = document.createElement('a')
    const a2 = document.createElement('a')

    a.href = e.has_pages ? "":e.homepage
    a2.href = e.html_url
    a.innerText = 'see website'
a2.innerText = 'see repo'
    // githubData.push({name:e.name,has_deploy:(await api.fetchApi(e.deployments_url)).length})
    // const deployment = await api.fetchApi(e.deployments_url)
    // console.log(deployment); 
    container.innerText = e.name
    container.appendChild(document.createElement('br'))
    container.appendChild(a)
    container.appendChild(document.createElement('br'))

    container.appendChild(a2)
    repos.appendChild(container)
  })
  console.log(data);
  // console.log(githubData);
  // const deployment = await api.fetchApi(data[32].deployments_url)
    // console.log(deployment);
}
function setupEmail(){
  const btn = document.getElementById('btn-mail')
  btn.addEventListener('click',sendEmail)
}
function sendEmail() {
  alert('sended')
}
startUp()
setupEmail()