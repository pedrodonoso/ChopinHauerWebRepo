import { api } from '../helpers';

const basePath = 'team';

function getAll() {
    return api.get(`${basePath}/all`);
}

function show(teamId) {
    return api.get(`${basePath}/byid?id=${teamId}`)
}

function create(tag,idlist) {
    return api.post(`${basePath}/add?tag=${tag}&idlist=${idlist}`)
}

const teamsService = {
    getAll,
    show,
    create,
};

export default teamsService;
