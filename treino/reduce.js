const cart = [
    { productName: 'Abóbora', valuePerKg: 5, kg: 1 },
    { productName: 'Pepino', valuePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', valuePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', valuePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', valuePerKg: 11.9, kg: 3 }
]

const valueCart = cart.reduce( (acc, value) => {
    const shopValue = value.valuePerKg * value.kg
    
    return acc + shopValue
}, 0)

console.log(`O valor final da compra é ${valueCart.toFixed(2)}`)