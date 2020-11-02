const NodeCache = require('node-cache')
const cache = new NodeCache()
cache.set('calculos',[])
cache.set('autoIncrementId', 1)

module.exports = class ToDo{

    static list(){
        return cache.get('calculos')
    }
    static create(calculo){
        const calculos = cache.get('calculos')
        const autoIncrementId = cache.get('autoIncrementId')
        calculo = {id: autoIncrementId, ...calculo}
        cache.set('calculos',[...calculos, calculo])
        cache.set('autoIncrementId', autoIncrementId + 1)
        return calculo
    }
    static update(id,calculo){
        let calculos = cache.get('calculos')
        let index = calculos.findIndex(item => item.id == id)
        if(index > -1){
            calculos[index] = {...calculos[index],...calculo}
            cache.set('calculos',calculos)
            return calculos[index]
        }
        return false

    }
    static delete(id){
        let calculos = cache.get('calculos')
        let index = calculos.findIndex(item => item.id == id)
        if(index > -1){
            calculos = calculos.filter(item => item.id != id)
            cache.set('calculos',calculos)
            return true
        }
        return false
    }
}