// import axios from '../../../../../projects/latest-workspace/node_modules/axios'
import axios from 'axios'

async function fetchGithub() {
    let { data } = await axios.get('https://api.github.com/repos/octocat/Hello-World')
    return data
}

fetchGithub().then(res=>console.log(res))
