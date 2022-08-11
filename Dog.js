export function Calculate ({setAnimal}) {
    return (
        <div>
    <button onClick={() =>setAnimal('dog') }>dog</button>
    <button onClick={() =>setAnimal('cat') }>cat</button>
    Hello
    </div>
    )
}