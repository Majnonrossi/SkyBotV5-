import { instagramGetUrl } from '../lib/ig2.js'

async function ig (url) {
let result = await instagramGetUrl(url)
return result
}

export {
ig 
}