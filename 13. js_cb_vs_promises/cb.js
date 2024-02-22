const algorithm = (minV, maxV, count) => {
    return new Array(count)
            .fill(0)
            .map(
                _ => parseInt ( (minV, maxV, count) * Math.random() + minV)
            )
}



//                         |          ^
//                         v          |
//                  +--------------+ +--+
const fetchData = ( minV, maxV, count, cb ) => {

    setTimeout(() => {

        let data = algorithm(minV, maxV, count)
        cb(data)

    }, 1000)
}



//////////////////
fetchData(1,10,5, (result)=>{console.log(result)})

