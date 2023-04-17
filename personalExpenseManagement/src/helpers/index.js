export const generarId = () => {
    const number = Math.random().toString(36).substring(2);
    const fecha = Date.now();
    return number + fecha;
}
