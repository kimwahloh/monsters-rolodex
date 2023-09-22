
//204 getData is going to receive some type T, type T is what to return from this 
//function inside of a promise
export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}