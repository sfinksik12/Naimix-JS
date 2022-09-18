export function reformat_snils(snils) {
    let newSnils = snils.replace(/-/g, '');
    // from 570-470-43-178 to 57047043178
    return newSnils;
}

export function reformat_phone(phone) {
    let newPhone = phone.replace(/^7/, '');
    // from 79536437416 to 9536437416
    return newPhone;
}
