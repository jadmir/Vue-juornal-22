
import juornalApi from '@/api/journalApi';
// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ( { commit }) => {

    const { data } = await juornalApi.get('/entries.json')
    const entries = []
    for( let id of Object.keys( data )) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries )

}

export const updateEntry = async ({ commit }, entry) => {

    const { data, picture, text } = entry
    const dataToSave = { data, picture, text }

    const resp = await juornalApi.put( `/entries/${ entry.id }.json`, dataToSave )
    console.log(resp)

    commit('updateEntry', { ...entry })
}


export const createEntry = async (/*{ commit }*/) => {

}
