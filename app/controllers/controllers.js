import client from '../database.js';

export const controllers = {
    DisplayFlags : async function (req, res) {
        res.render('accueil')
    },

    countryDetails : async function (req, res) {
        const pays = await client.query('SELECT * FROM pays JOIN "paysbyiso2" ON "pays"."nom"="paysbyiso2"."nom" WHERE "paysbyiso2"."iso2"= $1', [req.params.code.toUpperCase()]);
        const paysList = await client.query('SELECT * FROM pays JOIN paysbyiso2 ON "pays"."nom"="paysbyiso2"."nom"');
        await client.query('UPDATE "code_requete" SET "iso2" = $1', [req.params.code.toUpperCase()]);
        if (pays) {
           res.render('detail', {
            list: paysList.rows,
            country: pays.rows[0],
            id : req.params.code.toUpperCase()
           })
        } else {
            res.staus(404).render('404');
        }
    },

    list : async function (req, res) {
        const pays = await client.query('SELECT * FROM pays JOIN paysbyiso2 ON "pays"."nom"="paysbyiso2"."nom"');
        res.json(pays.rows)
    },

    listCode : async function (req, res) {
        const pays = await client.query('SELECT * FROM code_requete');
        res.json(pays.rows)
    }
}
