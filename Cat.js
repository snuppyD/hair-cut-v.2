import { useState } from "react"

export function Calculation({setAnimal}) {
    const a = {
        dog: {
          weight: {
            small: 12,
            middle: 20,
            big: 30,
          },
          wool: {
            long: 30,
            short: 10,
          },
          room: {
            standard: 5,
            lux: 15,
          },
        },
        cat: {
          weight: {
            small: 8,
            middle: 15,
            big: 20,
          },
          wool: {
            long: 20, 
            short: 12,
          },
          room: {
            standard: 4,
            lux: 12,
          },
        },
      }
    const [statics, setStatics] = useState(0)
    const [DataBase, setDataBase] = useState(0)

    if (statics === 0) {
        return (
            <div>
                <button onClick={() =>{setAnimal('cat'); setStatics((prev) => prev +1)} }>cat</button>
                <button onClick={() =>{setAnimal('dog'); setStatics((prev) => prev +1)}}>dog</button>
                World
            </div>
        )
    } else if (statics === 1) {
        return (
            <div>
                <button onClick={() =>{setDataBase(a.cat.weight.small); setStatics((prev) => prev +1)} }>small</button>
                <button onClick={() =>{setDataBase(a.cat.weight.middle); setStatics((prev) => prev +1)}}>middle</button>
                <button onClick={() =>{setDataBase(a.cat.weight.big); setStatics((prev) => prev +1)}}>big</button>
                World
            </div>
        )  
    } else if (statics === 2) {
        return (
            <div>
                <button onClick={() =>{setDataBase((prev) => prev + a.cat.wool.long); setStatics((prev) => prev +1)} }>long</button>
                <button onClick={() =>{setDataBase((prev) => prev + a.cat.weight.short); setStatics((prev) => prev +1)}}>short</button>
                World
                </div>
        )  
    } else if (statics === 3) {
        return (
            <div>
                <button onClick={() =>{setDataBase((prev) => prev + a.cat.room.standard); setStatics((prev) => prev +1)} }>standatd</button>
                <button onClick={() =>{setDataBase((prev) => prev + a.cat.room.lux); setStatics((prev) => prev +1)}}>lux</button>
                World
            </div>
        )
    } else if (statics === 4) {
        return <div>{DataBase}</div>
    }
}