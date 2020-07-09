const fs = require('fs')

const createWarehouse = (id,capacity_create) =>{
    try{
        var arrJSON = {Max_Capacity: capacity_create, "Capacity":0 }
        if(!fs.existsSync('D:/NodeJs/notes-app-GIT/MB-Test/ID'+id+'.json')){
            dataJSON = JSON.stringify(arrJSON)
            fs.writeFileSync('ID'+id+'.json',dataJSON)
            return console.log('Berhasil membuat gudang ID '+id+' dengan kapasitas '+capacity_create)
        }else{
            return console.log('Gudang sudah tersedia')
        }
    }catch(e){
        return []
    }
}

const loadWarehouse = (warehouse) =>{
    try{
        dataBuffer = fs.readFileSync('ID'+warehouse+'.json')
        dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const insertGoods = (id,item,capacity) =>{
    try{
        load = loadWarehouse(id)
        if(load.Max_Capacity> capacity){
            load.Capacity = load.Capacity + capacity
            load.Item = item
            load.Capacity_Item = capacity
            dataJSON = JSON.stringify(load)
            fs.writeFileSync('ID'+id+'.json',dataJSON) 
            return console.log('Berhasil memasukkan barang '+item+' ke dalam gudang ID'+id+' dengan stok tersedia '+capacity)
        }
        else if(load.Max_Capacity<= capacity){
            return console.log('Kapasitas Gudang Penuh')
        }else{
            return console.log('Gudang tidak ditemukan')
        }
    }catch(e){
        return []
    }
}

const getGoods = (id,item,capacity) =>{
    try{
        load = loadWarehouse(id)
        if(load.Item === item){
            load.Capacity = load.Capacity - capacity
            load.Capacity_Item = load.Capacity_Item - capacity
            dataJSON = JSON.stringify(load)
            fs.writeFileSync('ID'+id+'.json',dataJSON) 
            return console.log('Berhasil mengambil barang '+item+' dari gudang'+id+' dengan jumlah '+capacity)
        }
        return console.log('Barang tidak ditemukan dalam gudang ID'+id)
    }catch(e){
        return []
    }
}


createWarehouse(0001, 500)
insertGoods(0001, 'SKU502', 100)
getGoods(0001, 'SKU502', 50)
insertGoods(0002, 'SKU503', 150)
getGoods(0001, 'SKU503', 25)
insertGoods(0001, 'SKU503', 500)

