export function formatAddress(value: string, length: number = 18) {
    return `${value.substring(0, length + 2)}...${value.substring(value.length - length)}`
}