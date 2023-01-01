import cheerio from 'cheerio'
import axios frim 'axios'

async function instagramStalk(user) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://www.instagram.com/' + user + "/?__a=1",
            method: "GET",
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
                'cookie': 'crsftoken=au1sbQzCDp2Ri5TZF688kVeWOfvaa3Ox; ds_user_id=26641471282; ig_did=54AA06C9-3A86-4F53-A7F6-C9127DC153AC; ig_nrcb=1; mid=YU0dFwALAAHPggeAvlvEiV8DP9zM; sessionid=26641471282%3AnPDRQn9Qe628rm%3A26'
            }
        }).then((data) => {
            const Format = {
                full_name: data.data.graphql.user.full_name,
                user_name: data.data.graphql.user.username,
                user_id: data.data.graphql.user.id,
                followers: data.data.graphql.user.edge_follow.count,
                following: data.data.graphql.user.edge_followed_by.count,
                bussines: data.data.graphql.user.is_business_account,
                profesional: data.data.graphql.user.is_professional_account,
                verified: data.data.graphql.user.is_verified,
                private: data.data.graphql.user.is_private,
                biography: data.data.graphql.user.biography,
                bio_url: data.data.graphql.user.external_url,
                profile_ed: data.data.graphql.user.profile_pic_url,
                profile_hd: data.data.graphql.user.profile_pic_url_hd
            }
            resolve(Format)
        })
    })
}

export {
instagramStalk
}