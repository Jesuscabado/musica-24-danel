const bands = [
    {
        "band_id": 1,
        "name": "Iron Maiden",
        "creation_date": "1968-12-18",
    },
    {
        "band_id": 2,
        "name": "Black Sabbath",
        "creation_date": "1968-12-18",
    },
    {
        "band_id": 3,
        "name": "Cannibal Corpse",
        "creation_date": "1968-12-18",
    },
    {
        "band_id": 4,
        "name": "Helloween",
        "creation_date": "1968-12-18",
    },
    {
        "band_id": 5,
        "name": "Dio",
        "creation_date": "1968-12-18",
    }
]
async function getAll(){
    return {data:bands}
}

async function getById(id){
    const band = bands.find(band => band.band_id === id);
    if(!band){
        return {error:"No se puede encontrar una banda que no existe, mazapan!"};
    }
    return {data:band};
}

async function create(bandData){
    const {name,creation_date } = bandData;
    // get max band_id from bands
    if(!name ){
        return {error:"Las bandas deben tener nombre!"};
    }
    const maxId = Math.max(...bands.map(band => band.band_id));
    const newId= maxId + 1;
    const newBand = {
        band_id:newId,
        name,
        creation_date
    };
    bands.push(newBand);
    return {data:newBand};
}

async function update(id,bandData){
    const {name,creation_date} = bandData;
    const band = bands.find(band=>band.band_id===id);
    if(!band){
        return {error:"No se puede modificar una banda que no existe, mazapan!"};
    }
    if(creation_date){
        band.creation_date = creation_date;
    }
    if(name){
        band.name = name;
    }
    return {data:band};
}

async function remove(id){
    const bandIndex = bands.findIndex(band=>band.band_id===id);
    if(bandIndex === -1){
        return {error:"no se pueden borrar bandas que no existen"}
    }
    const deletedBand = bands.splice(bandIndex,1);
    return {data:deletedBand};}

export {
    getAll,
    getById,
    create,
    update,
    remove
};

export default {
    getAll,
    getById,
    create,
    update,
    remove
};