// вопросы в консоле
function askQuestion(query) {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => rl.question(query, ans => {
        rl.close()
        resolve(ans)
    }))
}

async function main(){

    /* 
    ВСЕ СПОСОБА КРОМЕ 1 ТРЕБУТЮ РОЗМЕЩЕНИЯ СЕБЯ В ASYNC ФУНКЦИИ ЛИБО ПРОМИСЕ! 
    */

    // способ 1
    await (async()=>{console.log(eval(await askQuestion("1 | Введите операцию: ")))})()

    // способ 2
    await askQuestion("2 | Введите операцию: ").then((result) => {
        console.log(eval(result))
    })

    // способ 3
    Операция = await askQuestion("3 | Введите операцию: ")
    ВиполненияОперации = eval(Операция)
    console.log(ВиполненияОперации)
}

main()